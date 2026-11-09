import React, { useState } from 'react';
import { 
  CharacterSheetData, 
  CharacterAttributes, 
  DieType, 
  EdgeDefinition 
} from '../types/character';
import { EDGES_CATALOG } from '../data/interfaceZeroData';
import { 
  applySWADEAdvance, 
  canIncreaseAttributeInRank, 
  getRankFromAdvances, 
  getRankProgress, 
  SWADERank 
} from '../utils/swadeRules';
import { stepDie, DIE_VALUES } from '../utils/characterGenerator';
import { 
  TrendingUp, 
  X, 
  Award, 
  ShieldCheck, 
  Zap, 
  BookOpen, 
  Check, 
  Lock, 
  ChevronRight, 
  History, 
  Plus, 
  Minus,
  AlertCircle
} from 'lucide-react';

interface SWADEAdvancementModalProps {
  isOpen: boolean;
  onClose: () => void;
  character: CharacterSheetData;
  onChange: (updated: CharacterSheetData) => void;
}

export const SWADEAdvancementModal: React.FC<SWADEAdvancementModalProps> = ({
  isOpen,
  onClose,
  character,
  onChange
}) => {
  const [selectedAdvanceType, setSelectedAdvanceType] = useState<
    'edge' | 'attribute' | 'two_skills_under' | 'one_skill_equal_or_over' | 'remove_hindrance'
  >('edge');

  // Form states for each option
  const [selectedEdgeId, setSelectedEdgeId] = useState<string>('');
  const [selectedAttribute, setSelectedAttribute] = useState<keyof CharacterAttributes>('agilite');
  const [skill1, setSkill1] = useState<string>('');
  const [skill2, setSkill2] = useState<string>('');
  const [singleSkill, setSingleSkill] = useState<string>('');
  const [selectedHindranceId, setSelectedHindranceId] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'advance' | 'history' | 'rules'>('advance');

  if (!isOpen) return null;

  const currentAdvances = character.advances || 0;
  const currentRank = getRankFromAdvances(currentAdvances);
  const progress = getRankProgress(currentAdvances);
  const attrCheck = canIncreaseAttributeInRank(
    character.advancesHistory || [],
    currentRank,
    currentAdvances
  );

  // Linked attributes mapping for skills
  const linkedAttributes: Record<string, keyof CharacterAttributes> = {
    'Athlétisme': 'agilite',
    'Combat': 'agilite',
    'Discrétion': 'agilite',
    'Tir': 'agilite',
    'Pilotage': 'agilite',
    'Conduite': 'agilite',
    'Culture générale': 'astuce',
    'Perception': 'astuce',
    'Hacking': 'astuce',
    'Électronique': 'astuce',
    'Réparation': 'astuce',
    'Soins': 'astuce',
    'Sciences': 'astuce',
    'Survie': 'astuce',
    'Provocation': 'astuce',
    'Persuasion': 'ame',
    'Intimidation': 'ame'
  };

  const attributeLabels: Record<keyof CharacterAttributes, string> = {
    agilite: 'Agilité',
    ame: 'Âme',
    astuce: 'Astuce',
    force: 'Force',
    vigueur: 'Vigueur'
  };

  const handleApplyAdvance = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedAdvanceType === 'edge') {
      const edge = EDGES_CATALOG.find(ed => ed.id === selectedEdgeId);
      if (!edge) return;
      const updated = applySWADEAdvance(character, {
        type: 'edge',
        description: `Nouvel Atout : ${edge.name} (${edge.category})`,
        edgeToAdd: edge
      });
      onChange(updated);
      setSelectedEdgeId('');
    } else if (selectedAdvanceType === 'attribute') {
      if (!attrCheck.canIncrease) return;
      const oldVal = character.attributes[selectedAttribute];
      const newVal = stepDie(oldVal, 1);
      const updated = applySWADEAdvance(character, {
        type: 'attribute',
        description: `Augmentation d’Attribut : ${attributeLabels[selectedAttribute]} (${oldVal} ➔ ${newVal})`,
        attributeToIncrease: selectedAttribute
      });
      onChange(updated);
    } else if (selectedAdvanceType === 'two_skills_under') {
      if (!skill1 || !skill2 || skill1 === skill2) return;
      const oldD1 = character.skills[skill1] === '0' ? 'd4' : (character.skills[skill1] || 'd4');
      const targetD1 = character.skills[skill1] === '0' || !character.skills[skill1] ? 'd4' : stepDie(character.skills[skill1] as DieType, 1);
      
      const oldD2 = character.skills[skill2] === '0' ? 'd4' : (character.skills[skill2] || 'd4');
      const targetD2 = character.skills[skill2] === '0' || !character.skills[skill2] ? 'd4' : stepDie(character.skills[skill2] as DieType, 1);

      const updated = applySWADEAdvance(character, {
        type: 'two_skills_under',
        description: `2 Compétences sous l’Attribut lié : ${skill1} (${targetD1}) & ${skill2} (${targetD2})`,
        skillsToIncrease: [
          { name: skill1, targetDie: targetD1 },
          { name: skill2, targetDie: targetD2 }
        ]
      });
      onChange(updated);
      setSkill1('');
      setSkill2('');
    } else if (selectedAdvanceType === 'one_skill_equal_or_over') {
      if (!singleSkill) return;
      const oldD = character.skills[singleSkill] === '0' ? 'd4' : (character.skills[singleSkill] || 'd4');
      const targetD = character.skills[singleSkill] === '0' || !character.skills[singleSkill] ? 'd4' : stepDie(character.skills[singleSkill] as DieType, 1);

      const updated = applySWADEAdvance(character, {
        type: 'one_skill_equal_or_over',
        description: `1 Compétence égale/supérieure à l’Attribut : ${singleSkill} (${oldD} ➔ ${targetD})`,
        skillsToIncrease: [{ name: singleSkill, targetDie: targetD }]
      });
      onChange(updated);
      setSingleSkill('');
    } else if (selectedAdvanceType === 'remove_hindrance') {
      if (!selectedHindranceId) return;
      const h = character.hindrances.find(hin => hin.id === selectedHindranceId);
      const updated = applySWADEAdvance(character, {
        type: 'remove_hindrance',
        description: `Handicap résolu / surmonté : ${h ? h.name : selectedHindranceId}`,
        hindranceToRemoveId: selectedHindranceId
      });
      onChange(updated);
      setSelectedHindranceId('');
    }
  };

  // Quick direct advances change
  const handleQuickAdvanceDelta = (delta: number) => {
    const nextVal = Math.max(0, currentAdvances + delta);
    const newRank = getRankFromAdvances(nextVal);
    onChange({
      ...character,
      advances: nextVal,
      rank: newRank,
      updatedAt: Date.now()
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0b1017] border-2 border-cyan-500/70 rounded-xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded bg-slate-900 border border-slate-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-cyan-500/10 border border-cyan-500/40 rounded-lg text-cyan-400">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-orbitron text-white flex items-center gap-2">
              SYSTÈME DE PROGRESSION & AVANCÉES SWADE
            </h2>
            <p className="text-xs font-mono-tech text-slate-400">
              Règles officielles Savage Worlds Adventure Edition (p. 54) • Rangs, Avancées & Évolution
            </p>
          </div>
        </div>

        {/* Current Rank & Advances Status Card */}
        <div className="bg-[#060a0f] border-2 border-cyan-500/40 rounded-xl p-5 mb-6 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Current Rank Badge */}
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-cyan-950 to-slate-900 border border-cyan-400 rounded-lg text-cyan-300">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-mono-tech uppercase tracking-wider">
                  Rang Actuel de l’Agent
                </div>
                <div className="text-2xl font-bold font-orbitron text-white flex items-center gap-2">
                  <span>{currentRank}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/50 text-cyan-300 font-mono-tech">
                    Street Cred {character.rank === 'Novice' ? 2 : character.rank === 'Aguerri' ? 3 : character.rank === 'Vétéran' ? 4 : character.rank === 'Héroïque' ? 5 : 6}
                  </span>
                </div>
              </div>
            </div>

            {/* Total Advances & Quick Delta */}
            <div className="bg-[#0b1017] p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-slate-400 font-mono-tech uppercase">Nombre d'Avancées</div>
                <div className="text-2xl font-bold font-orbitron text-amber-400">
                  {currentAdvances} <span className="text-xs font-normal text-slate-400">Progression(s)</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => handleQuickAdvanceDelta(-1)}
                  disabled={currentAdvances <= 0}
                  className="p-1.5 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white disabled:opacity-30 rounded cursor-pointer"
                  title="Diminuer d'1 avancée"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAdvanceDelta(1)}
                  className="p-1.5 bg-cyan-950 border border-cyan-400 text-cyan-300 hover:bg-cyan-900 rounded cursor-pointer"
                  title="Ajouter 1 avancée manuelle"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Next Rank Progress Bar */}
            <div>
              <div className="flex justify-between text-[11px] font-mono-tech text-slate-300 mb-1">
                <span>Vers Rang : <strong>{progress.nextRank}</strong></span>
                <span className="text-cyan-400">{progress.advancesInCurrentRank} / {progress.advancesNeededForNext}</span>
              </div>
              <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-300"
                  style={{ width: `${progress.percentage}%` }}
                />
              </div>
              <div className="text-[10px] font-mono-tech text-slate-500 mt-1">
                {progress.remaining > 0 ? `${progress.remaining} progression(s) avant le prochain rang` : 'Rang maximum atteint !'}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex gap-2 border-b border-slate-800 pb-2 mb-5">
          <button
            type="button"
            onClick={() => setActiveTab('advance')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'advance'
                ? 'bg-cyan-500 text-black font-bold'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" /> Appliquer une Avancée (p. 54)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('history')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'history'
                ? 'bg-cyan-500 text-black font-bold'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <History className="w-3.5 h-3.5" /> Journal d’Avancement ({character.advancesHistory?.length || 0})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('rules')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'rules'
                ? 'bg-cyan-500 text-black font-bold'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" /> Règles SWADE Officielles
          </button>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: ASSISTANT D'APPLICATION D'UNE AVANCÉE SWADE              */}
        {/* ============================================================== */}
        {activeTab === 'advance' && (
          <form onSubmit={handleApplyAdvance} className="space-y-5">
            <div className="text-xs font-mono-tech text-slate-300">
              Choisissez l'amélioration octroyée par cette <strong>Avancée #{currentAdvances + 1}</strong> selon les règles SWADE (p. 54) :
            </div>

            {/* 5 SWADE Options Selector */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Option 1: Atout */}
              <label 
                className={`p-3 rounded-lg border cursor-pointer transition flex items-start gap-3 ${
                  selectedAdvanceType === 'edge'
                    ? 'bg-cyan-950/60 border-cyan-400 shadow-md shadow-cyan-950/30'
                    : 'bg-[#090e15] border-slate-800 hover:border-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="advanceType"
                  value="edge"
                  checked={selectedAdvanceType === 'edge'}
                  onChange={() => setSelectedAdvanceType('edge')}
                  className="mt-1 text-cyan-500 focus:ring-cyan-500"
                />
                <div>
                  <div className="text-xs font-bold font-orbitron text-white">Choisir un Nouvel Atout</div>
                  <div className="text-[11px] text-slate-400 font-mono-tech mt-0.5">
                    Sélectionnez un Atout dont vous remplissez les prérequis (de votre Rang ou inférieur).
                  </div>
                </div>
              </label>

              {/* Option 2: 2 Compétences sous Attribut */}
              <label 
                className={`p-3 rounded-lg border cursor-pointer transition flex items-start gap-3 ${
                  selectedAdvanceType === 'two_skills_under'
                    ? 'bg-cyan-950/60 border-cyan-400 shadow-md shadow-cyan-950/30'
                    : 'bg-[#090e15] border-slate-800 hover:border-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="advanceType"
                  value="two_skills_under"
                  checked={selectedAdvanceType === 'two_skills_under'}
                  onChange={() => setSelectedAdvanceType('two_skills_under')}
                  className="mt-1 text-cyan-500 focus:ring-cyan-500"
                />
                <div>
                  <div className="text-xs font-bold font-orbitron text-white">Augmenter 2 Compétences &lt; Attribut</div>
                  <div className="text-[11px] text-slate-400 font-mono-tech mt-0.5">
                    Augmente d’un cran 2 compétences inférieures à leur Attribut lié (ou apprendre au d4).
                  </div>
                </div>
              </label>

              {/* Option 3: 1 Compétence >= Attribut */}
              <label 
                className={`p-3 rounded-lg border cursor-pointer transition flex items-start gap-3 ${
                  selectedAdvanceType === 'one_skill_equal_or_over'
                    ? 'bg-cyan-950/60 border-cyan-400 shadow-md shadow-cyan-950/30'
                    : 'bg-[#090e15] border-slate-800 hover:border-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="advanceType"
                  value="one_skill_equal_or_over"
                  checked={selectedAdvanceType === 'one_skill_equal_or_over'}
                  onChange={() => setSelectedAdvanceType('one_skill_equal_or_over')}
                  className="mt-1 text-cyan-500 focus:ring-cyan-500"
                />
                <div>
                  <div className="text-xs font-bold font-orbitron text-white">Augmenter 1 Compétence ≥ Attribut</div>
                  <div className="text-[11px] text-slate-400 font-mono-tech mt-0.5">
                    Augmente d’un cran 1 compétence dont la valeur égale ou dépasse son Attribut lié.
                  </div>
                </div>
              </label>

              {/* Option 4: Attribut (Max 1 par Rang) */}
              <label 
                className={`p-3 rounded-lg border cursor-pointer transition flex items-start gap-3 ${
                  selectedAdvanceType === 'attribute'
                    ? 'bg-cyan-950/60 border-cyan-400 shadow-md shadow-cyan-950/30'
                    : 'bg-[#090e15] border-slate-800 hover:border-slate-700'
                } ${!attrCheck.canIncrease ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <input
                  type="radio"
                  name="advanceType"
                  value="attribute"
                  disabled={!attrCheck.canIncrease}
                  checked={selectedAdvanceType === 'attribute'}
                  onChange={() => setSelectedAdvanceType('attribute')}
                  className="mt-1 text-cyan-500 focus:ring-cyan-500"
                />
                <div>
                  <div className="text-xs font-bold font-orbitron text-white flex items-center gap-1.5">
                    <span>Augmenter 1 Attribut d’un cran</span>
                    {!attrCheck.canIncrease && (
                      <span className="text-[10px] text-amber-400 font-mono-tech flex items-center gap-0.5">
                        <Lock className="w-3 h-3 inline" /> Bloqué
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono-tech mt-0.5">
                    {attrCheck.canIncrease ? (
                      'Règle SWADE : 1 seule augmentation d’Attribut autorisée par Rang.'
                    ) : (
                      <span className="text-amber-400">{attrCheck.reason}</span>
                    )}
                  </div>
                </div>
              </label>

              {/* Option 5: Supprimer un Handicap */}
              <label 
                className={`p-3 rounded-lg border cursor-pointer transition flex items-start gap-3 md:col-span-2 ${
                  selectedAdvanceType === 'remove_hindrance'
                    ? 'bg-cyan-950/60 border-cyan-400 shadow-md shadow-cyan-950/30'
                    : 'bg-[#090e15] border-slate-800 hover:border-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="advanceType"
                  value="remove_hindrance"
                  checked={selectedAdvanceType === 'remove_hindrance'}
                  onChange={() => setSelectedAdvanceType('remove_hindrance')}
                  className="mt-1 text-cyan-500 focus:ring-cyan-500"
                />
                <div>
                  <div className="text-xs font-bold font-orbitron text-white">Supprimer / Réduire un Handicap</div>
                  <div className="text-[11px] text-slate-400 font-mono-tech mt-0.5">
                    Supprime définitivement un Handicap Mineur ou passe un Handicap Majeur en Mineur (ou économise 2 avancées).
                  </div>
                </div>
              </label>
            </div>

            {/* Dynamic Configuration Panel for Chosen Option */}
            <div className="bg-[#090e15] border border-cyan-500/30 rounded-lg p-4 space-y-3">
              {/* DETAIL OPTION 1: CHOISIR UN ATOUT */}
              {selectedAdvanceType === 'edge' && (
                <div className="space-y-2">
                  <div className="text-xs font-bold font-orbitron text-cyan-400 uppercase">
                    Sélectionner l'Atout à débloquer :
                  </div>
                  <select
                    value={selectedEdgeId}
                    onChange={(e) => setSelectedEdgeId(e.target.value)}
                    required
                    className="w-full bg-[#060a0f] border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono-tech text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="">-- Choisir un Atout SWADE ({EDGES_CATALOG.length} disponibles) --</option>
                    {EDGES_CATALOG.map(ed => (
                      <option key={ed.id} value={ed.id}>
                        {ed.name} [{ed.category}] — Prérequis : {ed.requirements}
                      </option>
                    ))}
                  </select>

                  {selectedEdgeId && (
                    <div className="p-3 bg-[#060a0f] border border-slate-800 rounded text-xs font-mono-tech text-slate-300">
                      {EDGES_CATALOG.find(e => e.id === selectedEdgeId)?.description}
                    </div>
                  )}
                </div>
              )}

              {/* DETAIL OPTION 2: DEUX COMPETENCES SOUS ATTRIBUT */}
              {selectedAdvanceType === 'two_skills_under' && (
                <div className="space-y-3">
                  <div className="text-xs font-bold font-orbitron text-cyan-400 uppercase">
                    Sélectionner 2 compétences à augmenter d'un cran :
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-mono-tech text-slate-400 block mb-1">Première compétence :</label>
                      <select
                        value={skill1}
                        onChange={(e) => setSkill1(e.target.value)}
                        required
                        className="w-full bg-[#060a0f] border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono-tech text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="">-- Choisir Compétence 1 --</option>
                        {Object.keys(character.skills).map(sk => (
                          <option key={sk} value={sk}>
                            {sk} (actuel : {character.skills[sk] || '0'})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono-tech text-slate-400 block mb-1">Seconde compétence :</label>
                      <select
                        value={skill2}
                        onChange={(e) => setSkill2(e.target.value)}
                        required
                        className="w-full bg-[#060a0f] border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono-tech text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="">-- Choisir Compétence 2 --</option>
                        {Object.keys(character.skills).filter(s => s !== skill1).map(sk => (
                          <option key={sk} value={sk}>
                            {sk} (actuel : {character.skills[sk] || '0'})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* DETAIL OPTION 3: UNE COMPETENCE >= ATTRIBUT */}
              {selectedAdvanceType === 'one_skill_equal_or_over' && (
                <div className="space-y-2">
                  <div className="text-xs font-bold font-orbitron text-cyan-400 uppercase">
                    Sélectionner la compétence supérieure ou égale à son Attribut :
                  </div>
                  <select
                    value={singleSkill}
                    onChange={(e) => setSingleSkill(e.target.value)}
                    required
                    className="w-full bg-[#060a0f] border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono-tech text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="">-- Choisir une Compétence --</option>
                    {Object.keys(character.skills).map(sk => (
                      <option key={sk} value={sk}>
                        {sk} (actuel : {character.skills[sk] || '0'})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* DETAIL OPTION 4: AUGMENTER UN ATTRIBUT */}
              {selectedAdvanceType === 'attribute' && (
                <div className="space-y-2">
                  <div className="text-xs font-bold font-orbitron text-cyan-400 uppercase">
                    Sélectionner l'Attribut à faire progresser (+1 cran) :
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {(['agilite', 'astuce', 'ame', 'force', 'vigueur'] as Array<keyof CharacterAttributes>).map(attr => {
                      const cur = character.attributes[attr];
                      const nxt = stepDie(cur, 1);
                      return (
                        <button
                          key={attr}
                          type="button"
                          onClick={() => setSelectedAttribute(attr)}
                          className={`p-2 rounded border text-center transition cursor-pointer font-mono-tech text-xs ${
                            selectedAttribute === attr
                              ? 'bg-cyan-500 text-black font-bold border-cyan-300'
                              : 'bg-[#060a0f] border-slate-700 text-slate-300 hover:text-white'
                          }`}
                        >
                          <div className="text-[10px] uppercase text-slate-400">{attributeLabels[attr]}</div>
                          <div className="font-bold text-sm">{cur} ➔ {nxt}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* DETAIL OPTION 5: SUPPRIMER UN HANDICAP */}
              {selectedAdvanceType === 'remove_hindrance' && (
                <div className="space-y-2">
                  <div className="text-xs font-bold font-orbitron text-cyan-400 uppercase">
                    Sélectionner le Handicap à surmonter ou éliminer :
                  </div>
                  {character.hindrances.length === 0 ? (
                    <div className="text-slate-500 font-mono-tech text-xs">
                      Aucun handicap actif sur ce personnage.
                    </div>
                  ) : (
                    <select
                      value={selectedHindranceId}
                      onChange={(e) => setSelectedHindranceId(e.target.value)}
                      required
                      className="w-full bg-[#060a0f] border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono-tech text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="">-- Choisir un Handicap à supprimer --</option>
                      {character.hindrances.map(h => (
                        <option key={h.id} value={h.id}>
                          {h.name} ({h.severity})
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              )}
            </div>

            {/* Submit Action */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-mono-tech text-slate-400">
                L’Avancée sera enregistrée dans l'historique et mettra à jour la fiche automatiquement.
              </span>
              <button
                type="submit"
                className="px-5 py-2.5 bg-cyan-950 border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-900 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-950/40"
              >
                <Check className="w-4 h-4" /> Valider l'Avancée #{currentAdvances + 1}
              </button>
            </div>
          </form>
        )}

        {/* ============================================================== */}
        {/* TAB 2: JOURNAL D'AVANCEMENT & HISTORIQUE DES PROGRESSIONS      */}
        {/* ============================================================== */}
        {activeTab === 'history' && (
          <div className="space-y-3">
            {!character.advancesHistory || character.advancesHistory.length === 0 ? (
              <div className="text-center py-12 text-slate-500 font-mono-tech text-xs border border-dashed border-slate-800 rounded-lg">
                Aucune avancée enregistrée pour cet agent. Il est actuellement au Rang Novice (0 avancée).
              </div>
            ) : (
              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {character.advancesHistory.map((adv, idx) => (
                  <div
                    key={adv.id || idx}
                    className="p-3 bg-[#090e15] border border-slate-800 rounded-lg font-mono-tech text-xs flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-bold text-[10px]">
                          Avancée #{adv.advanceNumber}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          Rang {adv.rank}
                        </span>
                      </div>
                      <div className="font-bold text-white mt-1">
                        {adv.description}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        {new Date(adv.date).toLocaleDateString()} {new Date(adv.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-emerald-400 font-bold text-[11px] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Appliquée
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: REGLES OFFICIELLES SWADE (P. 54)                         */}
        {/* ============================================================== */}
        {activeTab === 'rules' && (
          <div className="space-y-4 font-mono-tech text-xs leading-relaxed text-slate-300 bg-[#090e15] p-4 rounded-lg border border-slate-800">
            <h4 className="text-sm font-bold font-orbitron text-cyan-400 uppercase">
              RÈGLES DE PROGRESSION SAVAGE WORLDS ADVENTURE EDITION (SWADE P. 54)
            </h4>

            <p>
              Au fur et à mesure qu’un personnage obtient des Progressions, son Rang augmente. 
              Chaque Rang donne accès à des Atouts et des capacités plus puissantes.
            </p>

            <div className="bg-[#060a0f] p-3 rounded border border-slate-800">
              <div className="font-bold text-white mb-1.5 uppercase text-xs">Échelle des Rangs :</div>
              <ul className="space-y-1 text-slate-400">
                <li>• <strong>0 à 3 Avancées</strong> : Rang Novice (Street Cred 2)</li>
                <li>• <strong>4 à 7 Avancées</strong> : Rang Aguerri / Seasoned (Street Cred 3)</li>
                <li>• <strong>8 à 11 Avancées</strong> : Rang Vétéran / Veteran (Street Cred 4)</li>
                <li>• <strong>12 à 15 Avancées</strong> : Rang Héroïque / Heroic (Street Cred 5)</li>
                <li>• <strong>16+ Avancées</strong> : Rang Légendaire / Legendary (Street Cred 6)</li>
              </ul>
            </div>

            <div className="bg-[#060a0f] p-3 rounded border border-slate-800">
              <div className="font-bold text-white mb-1.5 uppercase text-xs">Options lors d’une Progression :</div>
              <ul className="space-y-1.5 text-slate-400">
                <li>• <strong>Choisir un nouvel Atout</strong> pour lequel le personnage remplit les prérequis.</li>
                <li>• <strong>Augmenter d'un cran deux Compétences</strong> dont les valeurs sont inférieures à leur Attribut lié (ou apprendre au d4).</li>
                <li>• <strong>Augmenter d'un cran une Compétence</strong> dont la valeur est déjà égale ou supérieure à son Attribut lié.</li>
                <li>• <strong>Augmenter d'un cran un Attribut</strong> : <em>« Vous ne pouvez choisir cette option qu’une fois par Rang. Un personnage Légendaire peut augmenter un Attribut une Progression sur deux. »</em></li>
                <li>• <strong>Supprimer définitivement un Handicap Mineur</strong> ou passer un Handicap Majeur en Mineur.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Bottom Close Action */}
        <div className="mt-6 pt-3 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-mono-tech cursor-pointer"
          >
            Fermer le Gestionnaire d'Avancement
          </button>
        </div>
      </div>
    </div>
  );
};
