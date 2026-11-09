import test from 'node:test';
import assert from 'node:assert';
import { calculateDerivedStats, stepDie, generateRandomCharacter, createEmptyCharacter } from '../src/utils/characterGenerator.ts';

test('stepDie increments and decrements correctly within bounds', () => {
  assert.strictEqual(stepDie('d4', 1), 'd6');
  assert.strictEqual(stepDie('d6', 1), 'd8');
  assert.strictEqual(stepDie('d8', 1), 'd10');
  assert.strictEqual(stepDie('d10', 1), 'd12');
  assert.strictEqual(stepDie('d12', 1), 'd12'); // Max cap
  assert.strictEqual(stepDie('d4', -1), 'd4'); // Min cap
  assert.strictEqual(stepDie('d8', -1), 'd6');
});

test('calculateDerivedStats computes Pace, Parry and Toughness correctly', () => {
  const char = createEmptyCharacter();
  char.attributes.vigueur = 'd8'; // 8 -> base toughness = 2 + 4 = 6
  char.attributes.force = 'd6';
  char.skills['Combat'] = 'd8'; // 8 -> base parry = 2 + 4 = 6

  const derived = calculateDerivedStats(char);
  assert.strictEqual(derived.pace, 6);
  assert.strictEqual(derived.parry, 6);
  assert.strictEqual(derived.toughnessBase, 6);
  assert.strictEqual(derived.strainMax, 8); // Vigueur d8 = 8 strain max
  assert.strictEqual(derived.firewall, 4); // Base 4
  assert.strictEqual(derived.streetCred, 2); // Novice = 2
});

test('calculateDerivedStats properly accounts for implants strain and armor', () => {
  const char = createEmptyCharacter();
  char.attributes.vigueur = 'd6'; // Max strain = 6
  char.implants = [
    {
      id: 'subdermal_armor',
      name: 'Blindage sous-cutané',
      category: 'dermal',
      grade: 'streetware',
      strain: 2,
      cost: 6000,
      description: 'Plaques d’aramide',
      effectsSummary: '+2 Résistance',
      armorBonus: 2
    },
    {
      id: 'reflex_wiring',
      name: 'Câblage réflexe',
      category: 'musculoskeletal',
      grade: 'gutterware', // x2 strain!
      strain: 2,
      cost: 4000,
      description: 'Câbles supraconducteurs',
      effectsSummary: 'Parade +1',
      parryBonus: 1
    }
  ];

  const derived = calculateDerivedStats(char);
  // Strain: streetware (2) + gutterware (2 * 2 = 4) = 6
  assert.strictEqual(derived.strainCurrent, 6);
  assert.strictEqual(derived.strainMax, 6);
  assert.strictEqual(derived.toughnessArmor, 2);
  assert.strictEqual(derived.parry, 5); // Base 2 + (Combat d4=4 / 2) + 1 from implant = 5
});

test('generateRandomCharacter produces complete functional character sheet', () => {
  const char = generateRandomCharacter({ archetypeId: 'hacker', powerLevel: 'soldat' });
  assert.ok(char.id);
  assert.ok(char.name);
  assert.ok(char.alias);
  assert.strictEqual(char.archetypeId, 'hacker');
  assert.ok(char.attributes.intellect);
  assert.ok(char.skills['Hacking']);
  assert.ok(char.implants.length > 0);
  assert.ok(char.weapons.length > 0);
  assert.ok(char.armor.length > 0);
  assert.ok(char.edges.length > 0);
  assert.ok(char.hindrances.length > 0);
  assert.strictEqual(char.bennies, 3);
});

test('calculateDerivedStats properly accounts for SWADE Edges and Hindrances', () => {
  const char = createEmptyCharacter();
  char.attributes.vigueur = 'd8'; // base toughness = 6
  char.skills['Combat'] = 'd8'; // base parry = 6

  // Add SWADE edges & hindrances
  char.edges.push({
    id: 'veloce',
    name: 'Véloce',
    category: 'Arrière-plan',
    requirements: 'Novice, Agilité d6',
    description: 'Allure +2 cases et dé de course augmenté d’un cran.'
  });
  char.edges.push({
    id: 'grand_blocage',
    name: 'Grand blocage',
    category: 'Combat',
    requirements: 'Vétéran, Blocage',
    description: 'Parade +2.'
  });
  char.edges.push({
    id: 'costaud',
    name: 'Costaud',
    category: 'Arrière-plan',
    requirements: 'Novice, Force d6, Vigueur d6',
    description: 'Taille +1 et donc Résistance +1.'
  });

  const derived = calculateDerivedStats(char);
  assert.strictEqual(derived.pace, 8); // 6 + 2 (Véloce)
  assert.strictEqual(derived.runningDie, 'd8'); // d6 -> d8
  assert.strictEqual(derived.parry, 8); // 6 + 2 (Grand blocage)
  assert.strictEqual(derived.toughnessBase, 7); // 6 + 1 (Costaud)

  // Now add Frêle hindrance (-1 Toughness) and Lent Majeur (-2 Pace)
  char.hindrances.push({
    id: 'frele',
    name: 'Frêle',
    severity: 'Mineur',
    description: 'Résistance -1.'
  });
  char.hindrances.push({
    id: 'lent',
    name: 'Lent',
    severity: 'Majeur',
    description: 'Allure -2.'
  });

  const derivedAfter = calculateDerivedStats(char);
  assert.strictEqual(derivedAfter.pace, 6); // 8 - 2 (Lent Majeur)
  assert.strictEqual(derivedAfter.toughnessBase, 6); // 7 - 1 (Frêle)
});

test('Tech Compendium Malmart 2090 catalog items are integrated and calculate correctly', async () => {
  const { WEAPONS_CATALOG, ARMOR_CATALOG, GEAR_CATALOG } = await import('../src/data/interfaceZeroData.ts');

  // Verify Energy and Special weapons exist
  const energyWeapons = WEAPONS_CATALOG.filter(w => w.category === 'Énergie');
  const specialWeapons = WEAPONS_CATALOG.filter(w => w.category === 'Spécial');
  assert.ok(energyWeapons.length >= 5, 'Should have multiple energy weapons');
  assert.ok(specialWeapons.length >= 4, 'Should have multiple special weapons');

  // Verify Exoarmors exist
  const exoarmors = ARMOR_CATALOG.filter(a => a.category === 'Exoarmure');
  assert.ok(exoarmors.length >= 3, 'Should have multiple exoarmors in catalog');

  // Verify Drugs, TAP, Explosives in gear
  const drugs = GEAR_CATALOG.filter(g => g.category === 'Drogue');
  const tapGear = GEAR_CATALOG.filter(g => g.category === 'TAP');
  const explosives = GEAR_CATALOG.filter(g => g.category === 'Explosif');
  assert.ok(drugs.length >= 4, 'Should have cyberdrugs');
  assert.ok(tapGear.length >= 3, 'Should have TAP software and hardware');
  assert.ok(explosives.length >= 3, 'Should have explosives');

  // Verify weight and cost calculations with tech equipment
  const char = createEmptyCharacter();
  char.attributes.force = 'd6'; // Max weight = 6 * 2.5 = 15 kg
  char.weapons.push(energyWeapons[0]); // Laser carbine ~ 3.5 kg
  char.armor.push(exoarmors[0]); // Exo ~ 18 kg
  char.gear.push({ ...drugs[0], quantity: 2 });

  const derived = calculateDerivedStats(char);
  assert.ok(derived.carriedWeight > 20, 'Carried weight should include weapon, exoarmor and gear');
  assert.strictEqual(derived.isOverloaded, true, 'Character should be overloaded beyond 15 kg');
  assert.ok(derived.totalGearCost > 10000, 'Total gear cost should sum all items');
});

test('Cyberpunk & Interface Zero Compendium has 320+ items and equips correctly', async () => {
  const { COMPENDIUM_ITEMS } = await import('../src/data/compendiumItems.ts');
  const { equipCompendiumItem } = await import('../src/utils/compendiumAdapter.ts');

  assert.ok(COMPENDIUM_ITEMS.length >= 320, `Should have at least 320 items from chuuwifr catalogue, found ${COMPENDIUM_ITEMS.length}`);

  // Test equipping Malorian Arms 3516 (Johnny Silverhand)
  const malorian = COMPENDIUM_ITEMS.find(it => it.id === 'malorian-3516');
  assert.ok(malorian, 'Malorian Arms 3516 must exist');
  assert.strictEqual(malorian.rarity, 'legendary');

  const char = createEmptyCharacter();
  char.credits = 20000;

  const resWeapon = equipCompendiumItem(malorian, char, true);
  assert.strictEqual(resWeapon.categoryType, 'weapons');
  assert.strictEqual(resWeapon.updatedChar.weapons.length, 1);
  assert.strictEqual(resWeapon.updatedChar.weapons[0].name, 'Malorian Arms 3516');
  assert.strictEqual(resWeapon.updatedChar.weapons[0].damage, '2d10');
  assert.strictEqual(resWeapon.updatedChar.weapons[0].ap, 4);
  assert.strictEqual(resWeapon.updatedChar.credits, 8000); // 20000 - 12000 cr

  // Test equipping Axolotl cyberware
  const axolotl = COMPENDIUM_ITEMS.find(it => it.id === 'axolotl-cortex');
  assert.ok(axolotl, 'Axolotl must exist');
  const resImplant = equipCompendiumItem(axolotl, resWeapon.updatedChar, false);
  assert.strictEqual(resImplant.categoryType, 'implants');
  assert.strictEqual(resImplant.updatedChar.implants.length, 1);
  assert.strictEqual(resImplant.updatedChar.implants[0].name, 'Axolotl (Réducteur de Délai Neuronal)');
  assert.strictEqual(resImplant.updatedChar.implants[0].strain, 4);

  // Test equipping Ravenlocke Bulwark armor
  const bulwark = COMPENDIUM_ITEMS.find(it => it.id === 'rs-bulwark-riot');
  assert.ok(bulwark, 'Bulwark armor must exist');
  const resArmor = equipCompendiumItem(bulwark, resImplant.updatedChar, false);
  assert.strictEqual(resArmor.categoryType, 'armor');
  assert.strictEqual(resArmor.updatedChar.armor.length, 1);
  assert.strictEqual(resArmor.updatedChar.armor[0].armorBonus, 6);
});

test('SWADE Experience System: Advances and Ranks conform strictly to p. 54', async () => {
  const { 
    getRankFromAdvances, 
    getRankProgress, 
    canIncreaseAttributeInRank, 
    applySWADEAdvance 
  } = await import('../src/utils/swadeRules.ts');

  // Verify rank progression thresholds
  assert.strictEqual(getRankFromAdvances(0), 'Novice');
  assert.strictEqual(getRankFromAdvances(1), 'Novice');
  assert.strictEqual(getRankFromAdvances(3), 'Novice');
  assert.strictEqual(getRankFromAdvances(4), 'Aguerri');
  assert.strictEqual(getRankFromAdvances(7), 'Aguerri');
  assert.strictEqual(getRankFromAdvances(8), 'Vétéran');
  assert.strictEqual(getRankFromAdvances(11), 'Vétéran');
  assert.strictEqual(getRankFromAdvances(12), 'Héroïque');
  assert.strictEqual(getRankFromAdvances(15), 'Héroïque');
  assert.strictEqual(getRankFromAdvances(16), 'Légendaire');
  assert.strictEqual(getRankFromAdvances(25), 'Légendaire');

  // Verify rank progress calculation
  const progNovice2 = getRankProgress(2);
  assert.strictEqual(progNovice2.currentRank, 'Novice');
  assert.strictEqual(progNovice2.currentInRank, 2);
  assert.strictEqual(progNovice2.requiredInRank, 4);
  assert.strictEqual(progNovice2.percent, 50);
  assert.strictEqual(progNovice2.nextRank, 'Aguerri');

  const progAguerri5 = getRankProgress(5);
  assert.strictEqual(progAguerri5.currentRank, 'Aguerri');
  assert.strictEqual(progAguerri5.currentInRank, 1);
  assert.strictEqual(progAguerri5.percent, 25);

  // Verify SWADE core rule: strictly 1 attribute increase per Rank
  const char = createEmptyCharacter();
  char.advancesCount = 2; // Novice
  char.rank = 'Novice';
  char.attributes.agilite = 'd6';

  // Initially, attribute increase is allowed
  assert.strictEqual(canIncreaseAttributeInRank(char), true);

  // Apply Attribute increase in Novice
  const advancedChar1 = applySWADEAdvance(char, {
    type: 'attribute',
    description: 'Augmentation Agilité d6 -> d8',
    targetAttribute: 'agilite'
  });
  assert.strictEqual(advancedChar1.advancesCount, 3);
  assert.strictEqual(advancedChar1.attributes.agilite, 'd8');
  assert.strictEqual(advancedChar1.advancesHistory?.length, 1);

  // Immediately trying to increase another attribute in Novice should be disallowed
  assert.strictEqual(canIncreaseAttributeInRank(advancedChar1), false);
  assert.throws(() => {
    applySWADEAdvance(advancedChar1, {
      type: 'attribute',
      description: 'Deuxième attribut dans le même rang interdit',
      targetAttribute: 'vigueur'
    });
  }, /Un seul attribut peut être augmenté par rang/);

  // Bump into Aguerri (4 advances) -> attribute increase should now be allowed again!
  const aguerriChar = { ...advancedChar1, advancesCount: 4, rank: 'Aguerri' as const };
  assert.strictEqual(canIncreaseAttributeInRank(aguerriChar), true);

  // Apply 2 skills below linked attribute advance
  aguerriChar.attributes.agilite = 'd8';
  aguerriChar.skills['Tir'] = 'd4';
  aguerriChar.skills['Combat'] = 'd6';
  const advancedSkills = applySWADEAdvance(aguerriChar, {
    type: 'two_skills_under_attr',
    description: 'Augmentation Tir et Combat',
    targetSkills: ['Tir', 'Combat']
  });
  assert.strictEqual(advancedSkills.skills['Tir'], 'd6');
  assert.strictEqual(advancedSkills.skills['Combat'], 'd8');
  assert.strictEqual(advancedSkills.advancesCount, 5);
});

test('Malmart Bank Customization & Transaction History', async () => {
  const { recordBankTransaction, BANK_PRESETS } = await import('../src/utils/swadeRules.ts');

  const char = createEmptyCharacter();
  char.credits = 2500;

  // Preset check
  assert.ok(BANK_PRESETS.length >= 6);
  assert.strictEqual(BANK_PRESETS.find(p => p.id === 'novice_standard')?.amount, 2500);
  assert.strictEqual(BANK_PRESETS.find(p => p.id === 'veteran')?.amount, 10000);

  // Record mission reward
  const payout = recordBankTransaction(char, 3500, 'Prime contrat d’extraction Arasaka', 'mission');
  assert.strictEqual(payout.credits, 6000);
  assert.strictEqual(payout.bankHistory?.length, 1);
  assert.strictEqual(payout.bankHistory[0].amount, 3500);
  assert.strictEqual(payout.bankHistory[0].newBalance, 6000);

  // Record gear purchase
  const purchase = recordBankTransaction(payout, -1200, 'Achat munitions perforantes et medkit', 'purchase');
  assert.strictEqual(purchase.credits, 4800);
  assert.strictEqual(purchase.bankHistory?.length, 2);
  assert.strictEqual(purchase.bankHistory[1].amount, -1200);

  // Custom balance override with history tracking
  const resetBal = recordBankTransaction(purchase, 50000, 'Subvention spéciale Syndicat', 'custom_set');
  assert.strictEqual(resetBal.credits, 50000);
  assert.strictEqual(resetBal.bankHistory?.length, 3);
});

