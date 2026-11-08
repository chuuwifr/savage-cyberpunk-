export type DieType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12';

export interface AttributeDefinition {
  id: string;
  name: string;
  shortName: string;
  description: string;
}

export interface CharacterAttributes {
  agilite: DieType;
  ame: DieType;
  force: DieType;
  intellect: DieType;
  vigueur: DieType;
}

export interface CharacterSkills {
  [skillName: string]: DieType | '0';
}

export type ImplantGrade = 'gutterware' | 'streetware' | 'hyperchrome' | 'milware';

export type ImplantCategory = 
  | 'tap'
  | 'neural'
  | 'sensory'
  | 'musculoskeletal'
  | 'dermal'
  | 'organs'
  | 'limbs'
  | 'nanoware'
  | 'bioware';

export interface ImplantItem {
  id: string;
  name: string;
  category: ImplantCategory;
  grade: ImplantGrade;
  strain: number; // Cybertension base
  cost: number; // Crédits
  description: string;
  effectsSummary: string;
  attributeBonus?: Partial<Record<keyof CharacterAttributes, number>>;
  skillBonus?: Record<string, number>;
  armorBonus?: number;
  paceBonus?: number;
  parryBonus?: number;
  firewallBonus?: number;
  strainReduction?: number;
}

export type PowerLevel = 'voyou' | 'soldat' | 'hyperchrome' | 'elite';

export interface PowerLevelConfig {
  id: PowerLevel;
  name: string;
  credits: number;
  implantBudget: number;
  description: string;
}

export interface WeaponItem {
  id: string;
  name: string;
  category: 'Cac' | 'Pistolet' | 'Pistolet-mitrailleur' | 'Fusil' | 'Fusil à pompe' | 'Lourd' | 'Grenade';
  range: string;
  damage: string;
  rof: number;
  shots: number | string;
  minStr: string;
  weight: number;
  cost: number;
  notes: string;
  ap?: number; // Pénétration d'armure
}

export interface ArmorItem {
  id: string;
  name: string;
  category: 'Civil' | 'Léger' | 'Moyen' | 'Lourd' | 'Casque' | 'Bouclier';
  armorBonus: number;
  coverage: string;
  weight: number;
  cost: number;
  notes: string;
}

export interface GearItem {
  id: string;
  name: string;
  category: 'Électronique' | 'Survie' | 'Outil' | 'Médical' | 'Munitions' | 'Divers';
  weight: number;
  cost: number;
  notes: string;
  quantity?: number;
}

export interface DroneItem {
  id: string;
  name: string;
  size: string;
  pace: string;
  toughness: number;
  armor: number;
  weapons: string;
  cost: number;
  sensor: string;
  notes: string;
}

export interface EdgeDefinition {
  id: string;
  name: string;
  category: 'Arrière-plan' | 'Combat' | 'Commandement' | 'Professionnel' | 'Social' | 'Étrange' | 'Légendaire' | 'Cyber';
  requirements: string;
  description: string;
  isCyber?: boolean;
}

export interface HindranceDefinition {
  id: string;
  name: string;
  severity: 'Mineur' | 'Majeur' | 'Mineur/Majeur';
  description: string;
}

export interface ArchetypeDefinition {
  id: string;
  name: string;
  description: string;
  quote: string;
  suggestedRace: string;
  attributes: CharacterAttributes;
  skills: Record<string, DieType | '0'>;
  edges: string[];
  hindrances: string[];
  suggestedImplants: string[];
  suggestedWeapons: string[];
  suggestedArmor: string[];
  suggestedGear: string[];
  creditsRemaining: number;
  tacticalRole: string;
}

export interface RaceDefinition {
  id: string;
  name: string;
  category: 'Humain' | 'Transhumain' | 'Simulacre' | 'Synthétique' | 'Hybride';
  description: string;
  racialTraits: string[];
  bonusAttribute?: keyof CharacterAttributes;
  bonusSkills?: Record<string, DieType>;
  freeEdges?: string[];
  inherentArmor?: number;
  paceModifier?: number;
  sizeModifier?: number;
  cybertensionModifier?: number;
}

export interface CharacterSheetData {
  id: string;
  name: string;
  alias: string;
  concept: string;
  archetypeId: string;
  raceId: string;
  powerLevel: PowerLevel;
  rank: 'Novice' | 'Aguerri' | 'Vétéran' | 'Héroïque' | 'Légendaire';
  advances: number;
  xp: number;

  attributes: CharacterAttributes;
  skills: Record<string, DieType | '0'>;

  edges: EdgeDefinition[];
  hindrances: HindranceDefinition[];

  implants: ImplantItem[];
  weapons: WeaponItem[];
  armor: ArmorItem[];
  gear: GearItem[];
  drones: DroneItem[];

  credits: number;
  notes: string;
  appearance: string;
  background: string;

  tapModel: string;
  tapApps: string[];

  // Derived Traits calculation overrides/states
  wounds: number; // max 3
  fatigue: number; // max 2
  bennies: number; // Jetons (base 3)
  powerPoints?: number;
  maxPowerPoints?: number;

  createdAt: number;
  updatedAt: number;
}

export interface CalculatedDerivedStats {
  pace: number;
  runningDie: string;
  parry: number;
  toughnessBase: number;
  toughnessArmor: number;
  toughnessTotal: number;
  strainCurrent: number;
  strainMax: number;
  firewall: number;
  streetCred: number;
  carriedWeight: number;
  maxWeight: number;
  isOverloaded: boolean;
  totalCyberCost: number;
  totalGearCost: number;
}
