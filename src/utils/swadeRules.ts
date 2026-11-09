import { 
  CharacterSheetData, 
  SWADEAdvance, 
  BankTransaction, 
  DieType, 
  CharacterAttributes, 
  EdgeDefinition, 
  HindranceDefinition 
} from '../types/character';
import { stepDie } from './characterGenerator';

export type SWADERank = 'Novice' | 'Aguerri' | 'Vétéran' | 'Héroïque' | 'Légendaire';

/**
 * Rangs officiels SWADE selon le nombre d'Avancées (p. 54) :
 * 0–3 : Novice
 * 4–7 : Aguerri (Seasoned)
 * 8–11 : Vétéran (Veteran)
 * 12–15 : Héroïque (Heroic)
 * 16+ : Légendaire (Legendary)
 */
export function getRankFromAdvances(advances: number): SWADERank {
  if (advances >= 16) return 'Légendaire';
  if (advances >= 12) return 'Héroïque';
  if (advances >= 8) return 'Vétéran';
  if (advances >= 4) return 'Aguerri';
  return 'Novice';
}

export function getRankProgress(advances: number) {
  const currentRank = getRankFromAdvances(advances);
  if (currentRank === 'Novice') {
    return {
      currentRank,
      nextRank: 'Aguerri' as SWADERank,
      advancesInCurrentRank: advances,
      advancesNeededForNext: 4,
      percentage: Math.min(100, Math.round((advances / 4) * 100)),
      remaining: 4 - advances
    };
  } else if (currentRank === 'Aguerri') {
    return {
      currentRank,
      nextRank: 'Vétéran' as SWADERank,
      advancesInCurrentRank: advances - 4,
      advancesNeededForNext: 4,
      percentage: Math.min(100, Math.round(((advances - 4) / 4) * 100)),
      remaining: 8 - advances
    };
  } else if (currentRank === 'Vétéran') {
    return {
      currentRank,
      nextRank: 'Héroïque' as SWADERank,
      advancesInCurrentRank: advances - 8,
      advancesNeededForNext: 4,
      percentage: Math.min(100, Math.round(((advances - 8) / 4) * 100)),
      remaining: 12 - advances
    };
  } else if (currentRank === 'Héroïque') {
    return {
      currentRank,
      nextRank: 'Légendaire' as SWADERank,
      advancesInCurrentRank: advances - 12,
      advancesNeededForNext: 4,
      percentage: Math.min(100, Math.round(((advances - 12) / 4) * 100)),
      remaining: 16 - advances
    };
  } else {
    // Légendaire
    const legMilestone = Math.floor((advances - 16) / 4) + 1;
    const inLeg = (advances - 16) % 4;
    return {
      currentRank,
      nextRank: `Légendaire +${legMilestone}`,
      advancesInCurrentRank: inLeg,
      advancesNeededForNext: 4,
      percentage: Math.min(100, Math.round((inLeg / 4) * 100)),
      remaining: 4 - inLeg
    };
  }
}

/**
 * Règle SWADE : « Augmenter d’un cran un Attribut. Vous ne pouvez choisir cette option
 * qu’une fois par Rang. Un personnage Légendaire peut augmenter un Attribut une
 * Progression sur deux jusqu’au maximum lié à l’espèce ou à la culture. »
 */
export function canIncreaseAttributeInRank(
  advancesHistory: SWADEAdvance[] = [],
  currentRank: SWADERank,
  totalAdvances: number
): { canIncrease: boolean; reason?: string } {
  if (currentRank === 'Légendaire') {
    // Une fois toutes les deux progressions au rang légendaire
    const legAdvances = advancesHistory.filter(a => a.rank === 'Légendaire');
    const legAttrCount = legAdvances.filter(a => a.type === 'attribute').length;
    const maxAllowedInLeg = Math.floor(legAdvances.length / 2) + 1;
    if (legAttrCount >= maxAllowedInLeg) {
      return {
        canIncrease: false,
        reason: 'Règle Légendaire SWADE : une augmentation d’Attribut autorisée toutes les 2 Progressions seulement.'
      };
    }
    return { canIncrease: true };
  }

  // Pour Novice, Aguerri, Vétéran, Héroïque : max 1 par rang
  const alreadyInCurrentRank = advancesHistory.some(
    a => a.rank === currentRank && a.type === 'attribute'
  );

  if (alreadyInCurrentRank) {
    return {
      canIncrease: false,
      reason: `Règle SWADE (p. 54) : L’augmentation d’Attribut pour le Rang ${currentRank} a déjà été utilisée.`
    };
  }

  return { canIncrease: true };
}

/**
 * Enregistrement et application d'une transaction bancaire Malmart Bank
 */
export function recordBankTransaction(
  character: CharacterSheetData,
  amount: number,
  label: string,
  category: BankTransaction['category'] = 'adjustment'
): CharacterSheetData {
  const currentCredits = character.credits || 0;
  const newBalance = Math.max(0, currentCredits + amount);

  const tx: BankTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    amount,
    label,
    category,
    date: Date.now(),
    balanceAfter: newBalance
  };

  const history = character.bankHistory ? [tx, ...character.bankHistory].slice(0, 50) : [tx];

  return {
    ...character,
    credits: newBalance,
    bankHistory: history,
    updatedAt: Date.now()
  };
}

/**
 * Préréglages de dotation bancaire
 */
export const BANK_PRESETS = [
  { id: 'voyou', name: 'Voyou des Rues (Minimum vital)', credits: 500, desc: 'Quelques centaines de crédits en billets électroniques sales.' },
  { id: 'soldat', name: 'Soldat Standard (Dotation IZ 2090)', credits: 2500, desc: 'Dotation initiale standard pour mercenaire débutant.' },
  { id: 'aguerri', name: 'Mercenaire Aguerri (SWADE x2)', credits: 5000, desc: 'Fonds doublés au rang Aguerri selon les règles de SWADE.' },
  { id: 'veteran', name: 'Vétéran Hyperchrome (SWADE x4)', credits: 10000, desc: 'Compte bancaire garni après des années de runs réussis.' },
  { id: 'elite', name: 'Agent d’Élite / Spécialiste Corpo', credits: 25000, desc: 'Budget corporatiste officiel débloqué pour missions noires.' },
  { id: 'syndicat', name: 'Compte Offshore Marché Noir', credits: 50000, desc: 'Réserve secrète dans les banques chiffrées de Neo-Macao.' },
  { id: 'sandbox', name: 'Mode Libre / Illimité (Sandbox)', credits: 100000, desc: 'Pour tester tous les équipements, exoarmures et cyberdecks sans restriction.' }
];

/**
 * Application d'une Avancée SWADE
 */
export function applySWADEAdvance(
  character: CharacterSheetData,
  advanceData: {
    type: SWADEAdvance['type'];
    description: string;
    edgeToAdd?: EdgeDefinition;
    attributeToIncrease?: keyof CharacterAttributes;
    skillsToIncrease?: Array<{ name: string; targetDie: DieType }>;
    hindranceToRemoveId?: string;
  }
): CharacterSheetData {
  const nextAdvanceNumber = (character.advances || 0) + 1;
  const newRank = getRankFromAdvances(nextAdvanceNumber);

  let updatedAttributes = { ...character.attributes };
  let updatedSkills = { ...character.skills };
  let updatedEdges = [...character.edges];
  let updatedHindrances = [...character.hindrances];

  const details: SWADEAdvance['details'] = {};

  // 1. Nouvel Atout
  if (advanceData.type === 'edge' && advanceData.edgeToAdd) {
    updatedEdges.push(advanceData.edgeToAdd);
    details.edgeId = advanceData.edgeToAdd.id;
    details.edgeName = advanceData.edgeToAdd.name;
  }

  // 2. Augmentation d'Attribut
  if (advanceData.type === 'attribute' && advanceData.attributeToIncrease) {
    const attr = advanceData.attributeToIncrease;
    const oldDie = updatedAttributes[attr];
    const newDie = stepDie(oldDie, 1);
    updatedAttributes[attr] = newDie;
    details.attribute = attr;
    details.oldDie = oldDie;
    details.newDie = newDie;
  }

  // 3. Augmentation de Compétences (1 ou 2)
  if (
    (advanceData.type === 'two_skills_under' || advanceData.type === 'one_skill_equal_or_over') &&
    advanceData.skillsToIncrease
  ) {
    const skillsLog: Array<{ name: string; oldDie: string; newDie: string }> = [];
    for (const s of advanceData.skillsToIncrease) {
      const oldDie = updatedSkills[s.name] || '0';
      updatedSkills[s.name] = s.targetDie;
      skillsLog.push({ name: s.name, oldDie, newDie: s.targetDie });
    }
    details.skillsIncreased = skillsLog;
  }

  // 4. Suppression / Réduction d'un Handicap
  if (advanceData.type === 'remove_hindrance' && advanceData.hindranceToRemoveId) {
    const idx = updatedHindrances.findIndex(h => h.id === advanceData.hindranceToRemoveId);
    if (idx >= 0) {
      details.hindranceId = updatedHindrances[idx].id;
      details.hindranceName = updatedHindrances[idx].name;
      updatedHindrances.splice(idx, 1);
    }
  }

  const advanceLogItem: SWADEAdvance = {
    id: `adv_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    advanceNumber: nextAdvanceNumber,
    rank: newRank,
    type: advanceData.type,
    description: advanceData.description,
    date: Date.now(),
    details
  };

  const newHistory = character.advancesHistory ? [...character.advancesHistory, advanceLogItem] : [advanceLogItem];

  return {
    ...character,
    advances: nextAdvanceNumber,
    rank: newRank,
    attributes: updatedAttributes,
    skills: updatedSkills,
    edges: updatedEdges,
    hindrances: updatedHindrances,
    advancesHistory: newHistory,
    updatedAt: Date.now()
  };
}
