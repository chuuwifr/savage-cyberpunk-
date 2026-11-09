import {
  ArchetypeDefinition,
  CalculatedDerivedStats,
  CharacterAttributes,
  CharacterSheetData,
  DieType,
  PowerLevel
} from '../types/character';
import {
  ARCHETYPES,
  ARMOR_CATALOG,
  DRONES_CATALOG,
  EDGES_CATALOG,
  GEAR_CATALOG,
  HINDRANCES_CATALOG,
  IMPLANTS_CATALOG,
  POWER_LEVELS,
  RACES,
  WEAPONS_CATALOG
} from '../data/interfaceZeroData';

export const DIE_VALUES: Record<DieType, number> = {
  'd4': 4,
  'd6': 6,
  'd8': 8,
  'd10': 10,
  'd12': 12
};

export const DIE_ORDER: DieType[] = ['d4', 'd6', 'd8', 'd10', 'd12'];

export function stepDie(current: DieType, delta: number): DieType {
  const index = DIE_ORDER.indexOf(current);
  if (index === -1) return 'd4';
  const newIndex = Math.max(0, Math.min(DIE_ORDER.length - 1, index + delta));
  return DIE_ORDER[newIndex];
}

export function calculateDerivedStats(character: CharacterSheetData): CalculatedDerivedStats {
  const race = RACES.find(r => r.id === character.raceId) || RACES[0];
  const vigVal = DIE_VALUES[character.attributes.vigueur] || 6;
  const combatSkill = character.skills['Combat'] || '0';
  const combatVal = combatSkill === '0' ? 0 : DIE_VALUES[combatSkill as DieType] || 0;

  // 1. Allure (Pace)
  let pace = 6;
  if (race.paceModifier) pace += race.paceModifier;
  let runningDie = 'd6';
  if (race.id === 'hybride_rapide') {
    pace = 8;
    runningDie = 'd8';
  }
  for (const imp of character.implants) {
    if (imp.paceBonus) pace += imp.paceBonus;
  }
  const hasVeloce = character.edges.some(e => e.id === 'veloce' || e.name.toLowerCase().includes('véloce'));
  if (hasVeloce) {
    pace += 2;
    if (runningDie === 'd6') runningDie = 'd8';
    else if (runningDie === 'd8') runningDie = 'd10';
  }
  const lentHindrance = character.hindrances.find(h => h.id === 'lent' || h.name.toLowerCase().includes('lent'));
  if (lentHindrance) {
    pace -= lentHindrance.severity === 'Majeur' ? 2 : 1;
  }
  const hasObese = character.hindrances.some(h => h.id === 'obese' || h.name.toLowerCase().includes('obèse'));
  if (hasObese) {
    pace -= 1;
  }
  pace = Math.max(1, pace);

  // 2. Parade (Parry)
  // Base 2 + (Combat / 2)
  let parry = 2 + Math.floor(combatVal / 2);
  // Weapon parry bonus (e.g. Katana)
  for (const w of character.weapons) {
    if (w.notes.includes('Parade +1')) parry += 1;
  }
  // Implant parry bonus
  for (const imp of character.implants) {
    if (imp.parryBonus) parry += imp.parryBonus;
  }
  // Edges parry bonus
  const hasGrandBlocage = character.edges.some(e => e.id === 'grand_blocage' || e.name.toLowerCase().includes('grand blocage'));
  const hasBlocage = character.edges.some(e => e.id === 'blocage' || e.name.toLowerCase().includes('blocage'));
  if (hasGrandBlocage) parry += 2;
  else if (hasBlocage) parry += 1;

  const hasArmeFetiche = character.edges.some(e => e.id === 'arme_fetiche_adoree' || e.name.toLowerCase().includes('arme fétiche adorée'));
  const hasArmeFeticheBase = character.edges.some(e => e.id === 'arme_fetiche' || e.name.toLowerCase().includes('arme fétiche'));
  if (hasArmeFetiche) parry += 2;
  else if (hasArmeFeticheBase) parry += 1;

  const hasGuerrierAug = character.edges.some(e => e.id === 'guerrier_augmente' || e.name.toLowerCase().includes('guerrier augmenté'));
  if (hasGuerrierAug && character.implants.length > 0) parry += 1;

  // 3. Résistance (Toughness)
  // Base: 2 + (Vigueur / 2)
  let toughnessBase = 2 + Math.floor(vigVal / 2);

  // Size / Race modifier
  if (race.sizeModifier) toughnessBase += race.sizeModifier;
  if (race.id === 'hybride_furtif' || race.id === 'hybride_rapide') {
    toughnessBase -= 1;
  }

  // Costaud, Obèse, Bagarreur, Cogneur
  const hasCostaud = character.edges.some(e => e.id === 'costaud' || e.name.toLowerCase().includes('costaud'));
  if (hasCostaud) toughnessBase += 1;

  if (hasObese) toughnessBase += 1;

  const hasCogneur = character.edges.some(e => e.id === 'cogneur' || e.name.toLowerCase().includes('cogneur'));
  const hasBagarreur = character.edges.some(e => e.id === 'bagarreur' || e.name.toLowerCase().includes('bagarreur'));
  if (hasCogneur) toughnessBase += 2;
  else if (hasBagarreur) toughnessBase += 1;

  // Hindrance Frêle / Chétif
  const isChetif = character.hindrances.some(h => 
    h.id === 'frele' || 
    h.id === 'physique_chetif' || 
    h.name.toLowerCase().includes('frêle') || 
    h.name.toLowerCase().includes('chétif')
  );
  if (isChetif) toughnessBase -= 1;

  if (hasGuerrierAug && character.implants.length > 0) toughnessBase += 1;

  // Armor: Inherent + Subdermal Implants + Highest worn armor
  let toughnessArmor = 0;
  if (race.inherentArmor) toughnessArmor += race.inherentArmor;

  for (const imp of character.implants) {
    if (imp.armorBonus) toughnessArmor += imp.armorBonus;
  }

  // Worn armor bonus
  let maxWornArmor = 0;
  for (const arm of character.armor) {
    if (arm.armorBonus > maxWornArmor) {
      maxWornArmor = arm.armorBonus;
    }
  }
  toughnessArmor += maxWornArmor;
  const toughnessTotal = toughnessBase + toughnessArmor;

  // 4. Cybertension (Strain)
  let strainMax = vigVal;
  if (race.cybertensionModifier) strainMax += race.cybertensionModifier;
  const hasTolerance = character.edges.some(e => e.id === 'tolerance_cybernetique' || e.name.toLowerCase().includes('tolérance cybernétique'));
  if (hasTolerance) strainMax += 2;

  let strainCurrent = 0;
  let totalCyberCost = 0;
  for (const imp of character.implants) {
    let effectiveStrain = imp.strain;
    let cost = imp.cost;

    if (imp.grade === 'gutterware') {
      effectiveStrain = imp.strain * 2;
      cost = Math.round(imp.cost * 0.5);
    } else if (imp.grade === 'hyperchrome') {
      effectiveStrain = Math.max(1, imp.strain - 1);
      cost = imp.cost * 2;
    } else if (imp.grade === 'milware') {
      effectiveStrain = Math.max(1, Math.ceil(imp.strain * 0.5));
      cost = imp.cost * 3;
    }

    strainCurrent += effectiveStrain;
    totalCyberCost += cost;
  }

  // 5. Firewall (Base 4 + TAP + Edges)
  let firewall = 4;
  for (const imp of character.implants) {
    if (imp.firewallBonus) firewall += imp.firewallBonus;
  }
  const hasMaitreTap = character.edges.some(e => e.id === 'maitre_tap' || e.name.toLowerCase().includes('maître du tap'));
  if (hasMaitreTap) firewall += 2;

  // 6. Street Cred
  const rankMultiplier = {
    'Novice': 2,
    'Aguerri': 4,
    'Vétéran': 6,
    'Héroïque': 8,
    'Légendaire': 10
  }[character.rank] || 2;
  const streetCred = rankMultiplier;

  // 7. Poids & Encombrement
  const forceVal = DIE_VALUES[character.attributes.force] || 6;
  const maxWeight = forceVal * 2.5; // kg
  let carriedWeight = 0;
  for (const w of character.weapons) carriedWeight += w.weight;
  for (const a of character.armor) carriedWeight += a.weight;
  for (const g of character.gear) carriedWeight += (g.weight * (g.quantity || 1));

  let totalGearCost = 0;
  for (const w of character.weapons) totalGearCost += w.cost;
  for (const a of character.armor) totalGearCost += a.cost;
  for (const g of character.gear) totalGearCost += (g.cost * (g.quantity || 1));
  for (const d of character.drones) totalGearCost += d.cost;

  return {
    pace,
    runningDie,
    parry,
    toughnessBase,
    toughnessArmor,
    toughnessTotal,
    strainCurrent,
    strainMax,
    firewall,
    streetCred,
    carriedWeight: Math.round(carriedWeight * 10) / 10,
    maxWeight,
    isOverloaded: carriedWeight > maxWeight,
    totalCyberCost,
    totalGearCost
  };
}

const CYBER_ALIASES = [
  'Ghost-Nine', 'Viper-X', 'Chrome-Jack', 'Neon-Rat', 'Synapse', 'Glitch',
  'Apex', 'Zero-Kelvin', 'Spectre', 'Razor-Byte', 'Overdrive', 'Kuro',
  'Nyx', 'Cipher', 'Blitz', 'Ronin-404', 'Vandal', 'Vector', 'Phantom',
  'Hex', 'Proxy', 'Blackout', 'Havoc', 'Slick', 'Banshee', 'Crash'
];

const FIRST_NAMES = [
  'Kenji', 'Maya', 'Dexter', 'Elena', 'Malik', 'Valeria', 'Leon', 'Sora',
  'Dmitri', 'Aria', 'Kaelen', 'Roxanne', 'Jaxon', 'Naomi', 'Tariq', 'Sybille',
  'Victor', 'Chloe', 'Zane', 'Leila', 'Marcus', 'Iris', 'Axel', 'Ren'
];

const LAST_NAMES = [
  'Vance', 'Kowalski', 'Chen', 'Novak', 'Mercer', 'Takahashi', 'Cross', 'Mendoza',
  'Sterling', 'Sokolov', 'Dupont', 'Katsaros', 'Winter', 'Brandt', 'Castillo', 'Vogel'
];

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, array.length));
}

export function createEmptyCharacter(powerLevelId: PowerLevel = 'soldat'): CharacterSheetData {
  const config = POWER_LEVELS.find(p => p.id === powerLevelId) || POWER_LEVELS[1];
  return {
    id: `iz-char-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    name: 'Nouveau Cyberpunk',
    alias: 'Jack-In',
    concept: 'Mercenaire indépendant des bas-fonds urbains',
    archetypeId: 'ronin',
    raceId: 'humain',
    powerLevel: powerLevelId,
    rank: 'Novice',
    advances: 0,
    xp: 0,
    attributes: {
      agilite: 'd4',
      ame: 'd4',
      force: 'd4',
      intellect: 'd4',
      vigueur: 'd4'
    },
    skills: {
      'Athlétisme': 'd4',
      'Combat': 'd4',
      'Connaissance générale': 'd4',
      'Discrétion': 'd4',
      'Perception': 'd4',
      'Persuasion': 'd4',
      'Tir': 'd4'
    },
    edges: [],
    hindrances: [],
    implants: [],
    weapons: [],
    armor: [],
    gear: [],
    drones: [],
    credits: config.credits,
    notes: 'Créé avec le générateur SWADE Interface Zero.',
    appearance: 'Silhouette athlétique vêtue d’un imperméable sombre aux coutures luminescentes.',
    background: 'A grandi dans les sous-sols de la Mégalopole, louant ses compétences au plus offrant.',
    tapModel: 'TAP Standard Trend Access v4.2',
    tapApps: ['AR-Vision', 'Crypto-Wallet', 'Local Mesh Communicator'],
    wounds: 0,
    fatigue: 0,
    bennies: 3,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
}

export function generateRandomCharacter(options?: {
  archetypeId?: string;
  raceId?: string;
  powerLevel?: PowerLevel;
  randomImplantsCount?: number;
}): CharacterSheetData {
  const powerLevel = options?.powerLevel || 'soldat';
  const powerConfig = POWER_LEVELS.find(p => p.id === powerLevel) || POWER_LEVELS[1];

  // Pick archetype
  const archetype = options?.archetypeId
    ? ARCHETYPES.find(a => a.id === options.archetypeId) || getRandomItem(ARCHETYPES)
    : getRandomItem(ARCHETYPES);

  // Pick race
  const race = options?.raceId
    ? RACES.find(r => r.id === options.raceId) || RACES.find(r => r.id === archetype.suggestedRace) || RACES[0]
    : (Math.random() > 0.4 && archetype.suggestedRace ? RACES.find(r => r.id === archetype.suggestedRace)! : getRandomItem(RACES));

  const firstName = getRandomItem(FIRST_NAMES);
  const lastName = getRandomItem(LAST_NAMES);
  const alias = getRandomItem(CYBER_ALIASES);

  // Base attributes from archetype
  const attributes: CharacterAttributes = { ...archetype.attributes };
  // Apply racial bonuses if any
  if (race.bonusAttribute) {
    attributes[race.bonusAttribute] = stepDie(attributes[race.bonusAttribute], 1);
  }

  // Base skills
  const skills: Record<string, DieType> = {
    'Athlétisme': 'd4',
    'Connaissance générale': 'd4',
    'Discrétion': 'd4',
    'Perception': 'd4',
    'Persuasion': 'd4',
    ...archetype.skills
  };
  if (race.bonusSkills) {
    for (const [sk, val] of Object.entries(race.bonusSkills)) {
      skills[sk] = val;
    }
  }

  // Edges & Hindrances
  const edges: any[] = [];
  for (const edgeName of archetype.edges) {
    const found = EDGES_CATALOG.find(e => e.name.toLowerCase() === edgeName.toLowerCase()) || {
      id: edgeName.toLowerCase().replace(/\s+/g, '_'),
      name: edgeName,
      category: 'Combat',
      requirements: 'Novice',
      description: 'Atout spécialisé d’archétype.'
    };
    edges.push(found);
  }
  if (race.freeEdges) {
    for (const fe of race.freeEdges) {
      edges.push({
        id: `race_${fe.toLowerCase()}`,
        name: fe,
        category: 'Arrière-plan',
        requirements: 'Race',
        description: 'Atout inné racial.'
      });
    }
  }

  const hindrances: any[] = [];
  for (const hindStr of archetype.hindrances) {
    const isMajor = hindStr.includes('Majeur');
    const cleanName = hindStr.replace(/\s*\((Majeur|Mineur)\)/, '');
    const found = HINDRANCES_CATALOG.find(h => h.name.toLowerCase() === cleanName.toLowerCase()) || {
      id: cleanName.toLowerCase().replace(/\s+/g, '_'),
      name: cleanName,
      severity: isMajor ? 'Majeur' : 'Mineur',
      description: 'Handicap d’archétype.'
    };
    hindrances.push(found);
  }

  // Select Implants
  const implants = archetype.suggestedImplants
    .map(id => IMPLANTS_CATALOG.find(imp => imp.id === id))
    .filter((imp): imp is typeof IMPLANTS_CATALOG[0] => !!imp);

  // Add extra random implants if requested or depending on power level
  if (options?.randomImplantsCount && options.randomImplantsCount > 0) {
    const candidates = IMPLANTS_CATALOG.filter(imp => !implants.some(i => i.id === imp.id));
    const extras = getRandomItems(candidates, options.randomImplantsCount);
    implants.push(...extras);
  } else if (powerLevel === 'hyperchrome' || powerLevel === 'elite') {
    const candidates = IMPLANTS_CATALOG.filter(imp => !implants.some(i => i.id === imp.id));
    const extraCount = powerLevel === 'hyperchrome' ? 1 : 2;
    const extras = getRandomItems(candidates, extraCount);
    implants.push(...extras);
  }

  // Select Weapons
  const weapons = archetype.suggestedWeapons
    .map(id => WEAPONS_CATALOG.find(w => w.id === id))
    .filter((w): w is typeof WEAPONS_CATALOG[0] => !!w);
  if (weapons.length === 0) {
    weapons.push(WEAPONS_CATALOG[0]);
  }

  // Select Armor
  const armor = archetype.suggestedArmor
    .map(id => ARMOR_CATALOG.find(a => a.id === id))
    .filter((a): a is typeof ARMOR_CATALOG[0] => !!a);
  if (armor.length === 0) {
    armor.push(ARMOR_CATALOG[0]);
  }

  // Select Gear
  const gear = archetype.suggestedGear
    .map(id => GEAR_CATALOG.find(g => g.id === id))
    .filter((g): g is typeof GEAR_CATALOG[0] => !!g);

  // Drones
  const drones = (archetype.suggestedGear.concat(archetype.suggestedWeapons))
    .map(id => DRONES_CATALOG.find(d => d.id === id))
    .filter((d): d is typeof DRONES_CATALOG[0] => !!d);

  const character: CharacterSheetData = {
    id: `iz-char-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    name: `${firstName} "${alias}" ${lastName}`,
    alias,
    concept: `${archetype.name} - ${race.name}`,
    archetypeId: archetype.id,
    raceId: race.id,
    powerLevel,
    rank: 'Novice',
    advances: 0,
    xp: 0,
    attributes,
    skills,
    edges,
    hindrances,
    implants,
    weapons,
    armor,
    gear,
    drones,
    credits: Math.max(500, powerConfig.credits - archetype.creditsRemaining),
    notes: `${archetype.description}\n\nDevise : ${archetype.quote}\nRôle tactique : ${archetype.tacticalRole}`,
    appearance: `Physique adapté au mode de vie ${race.name}. Marques d’implants et interface TAP discrète visible sur la tempe.`,
    background: `Originaire des bas-fonds de la mégalopole, a gravi les échelons en tant que ${archetype.name.toLowerCase()}.`,
    tapModel: implants.some(i => i.id === 'tap_militaire_gnet')
      ? 'TAP Militaire Sécurisé G-Net v8'
      : 'TAP Trend Access Point v4.2',
    tapApps: ['AR-HUD v3', 'Cryptage GhostNet', 'Senseur Thermique', 'Scanner d’Identité'],
    wounds: 0,
    fatigue: 0,
    bennies: 3,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };

  return character;
}
