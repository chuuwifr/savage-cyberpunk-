import React, { useState } from 'react';
import { CharacterAttributes, CharacterSheetData, DieType } from '../../types/character';
import { ATTRIBUTES_LIST, BASE_SKILLS } from '../../data/interfaceZeroData';
import { DIE_ORDER, DIE_VALUES, stepDie } from '../../utils/characterGenerator';
import { Brain, Cpu, Plus, Trash2, Search, HelpCircle } from 'lucide-react';

interface AttributesSkillsTabProps {
  character: CharacterSheetData;
  onChange: (updated: CharacterSheetData) => void;
}

// Linked attribute map for skills
const SKILL_LINKED_ATTRIBUTE: Record<string, keyof CharacterAttributes> = {
  'Athlétisme': 'agilite',
  'Combat': 'agilite',
  'Connaissance générale': 'intellect',
  'Discrétion': 'agilite',
  'Hacking': 'intellect',
  'Hyper combat': 'agilite',
  'Intimidation': 'ame',
  'Jeu': 'intellect',
  'Navigation': 'intellect',
  'Perception': 'ame',
  'Persuasion': 'ame',
  'Pilotage': 'agilite',
  'Programmation': 'intellect',
  'Provocation': 'intellect',
  'Recherche': 'intellect',
  'Réparation': 'intellect',
  'Soins': 'intellect',
  'Survie': 'ame',
  'Tir': 'agilite'
};

export const AttributesSkillsTab: React.FC<AttributesSkillsTabProps> = ({ character, onChange }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [newSkillName, setNewSkillName] = useState<string>('');

  // Calculate attribute points spent (each step above d4 = 1 point)
  const calculateAttrPointsSpent = () => {
    let spent = 0;
    for (const die of Object.values(character.attributes)) {
      const idx = DIE_ORDER.indexOf(die as DieType);
      spent += Math.max(0, idx); // d4 is 0 pts above base
    }
    return spent;
  };

  const handleAttributeStep = (attrKey: keyof CharacterAttributes, delta: number) => {
    const current = character.attributes[attrKey];
    const updatedDie = stepDie(current, delta);
    onChange({
      ...character,
      attributes: {
        ...character.attributes,
        [attrKey]: updatedDie
      }
    });
  };

  const handleSkillStep = (skillName: string, delta: number) => {
    const current = character.skills[skillName] || '0';
    let newDie: DieType | '0';

    if (current === '0') {
      newDie = delta > 0 ? 'd4' : '0';
    } else {
      const idx = DIE_ORDER.indexOf(current as DieType);
      const nextIdx = idx + delta;
      if (nextIdx < 0) {
        newDie = '0';
      } else {
        newDie = DIE_ORDER[Math.min(DIE_ORDER.length - 1, nextIdx)];
      }
    }

    const newSkills = { ...character.skills };
    if (newDie === '0') {
      delete newSkills[skillName];
    } else {
      newSkills[skillName] = newDie;
    }

    onChange({
      ...character,
      skills: newSkills
    });
  };

  const handleAddCustomSkill = () => {
    if (!newSkillName.trim()) return;
    const clean = newSkillName.trim();
    if (character.skills[clean]) return;

    onChange({
      ...character,
      skills: {
        ...character.skills,
        [clean]: 'd4'
      }
    });
    setNewSkillName('');
  };

  const attrPointsSpent = calculateAttrPointsSpent();
  const maxAttrPoints = 5;

  // Filter skills list: show all base skills + any custom skills added
  const allSkillKeys = Array.from(new Set([...BASE_SKILLS, ...Object.keys(character.skills)]));
  const filteredSkills = allSkillKeys.filter(sk =>
    sk.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => a.localeCompare(b));

  return (
    <div className="space-y-6">
      {/* ATTRIBUTES SECTION */}
      <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-cyan-400" />
            <h3 className="text-sm font-bold font-orbitron text-white uppercase tracking-wider">
              LES 5 ATTRIBUTS DE BASE (SWADE)
            </h3>
          </div>
          <div className="flex items-center gap-2 font-mono-tech text-xs">
            <span className="text-slate-400">Points dépensés :</span>
            <span className={`font-bold px-2 py-0.5 rounded ${
              attrPointsSpent > maxAttrPoints
                ? 'bg-red-950 text-red-400 border border-red-500/50'
                : 'bg-cyan-950 text-cyan-300 border border-cyan-500/50'
            }`}>
              {attrPointsSpent} / {maxAttrPoints} pts
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {ATTRIBUTES_LIST.map(att => {
            const currentDie = character.attributes[att.id as keyof CharacterAttributes];
            const dieIdx = DIE_ORDER.indexOf(currentDie);

            return (
              <div
                key={att.id}
                className="bg-[#0d141e] border border-slate-800 rounded-lg p-3.5 flex flex-col justify-between hover:border-cyan-500/40 transition"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-tech text-cyan-400 uppercase font-bold">
                    <span>{att.name}</span>
                    <span className="text-[11px] text-slate-500">{att.shortName}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {att.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-2xl font-bold font-orbitron text-amber-400 tracking-wider">
                    {currentDie.toUpperCase()}
                  </span>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleAttributeStep(att.id as keyof CharacterAttributes, -1)}
                      disabled={dieIdx <= 0}
                      className="w-7 h-7 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center font-bold text-sm transition cursor-pointer"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAttributeStep(att.id as keyof CharacterAttributes, 1)}
                      disabled={dieIdx >= DIE_ORDER.length - 1}
                      className="w-7 h-7 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center font-bold text-sm transition cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <h3 className="text-sm font-bold font-orbitron text-white uppercase tracking-wider">
              COMPÉTENCES & TALENTS CYBERPUNK
            </h3>
          </div>

          {/* Search bar & Add custom skill */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Filtrer compétences..."
                className="bg-[#070b10] border border-slate-700 rounded pl-8 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 font-mono-tech w-44"
              />
            </div>

            <div className="flex items-center gap-1">
              <input
                type="text"
                value={newSkillName}
                onChange={e => setNewSkillName(e.target.value)}
                placeholder="Nouvelle compétence..."
                className="bg-[#070b10] border border-slate-700 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 font-mono-tech w-36"
                onKeyDown={e => e.key === 'Enter' && handleAddCustomSkill()}
              />
              <button
                type="button"
                onClick={handleAddCustomSkill}
                className="px-2.5 py-1.5 bg-cyan-950 border border-cyan-500/50 text-cyan-300 rounded hover:bg-cyan-900 text-xs font-mono-tech flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Ajouter
              </button>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {filteredSkills.map(skName => {
            const currentVal = character.skills[skName] || '0';
            const isAcquired = currentVal !== '0';
            const linkedAttr = SKILL_LINKED_ATTRIBUTE[skName] || 'intellect';
            const attrVal = character.attributes[linkedAttr] || 'd4';

            return (
              <div
                key={skName}
                className={`p-2.5 rounded-lg border flex items-center justify-between transition ${
                  isAcquired
                    ? 'bg-[#0d1724] border-cyan-500/40 text-slate-100 shadow-sm'
                    : 'bg-[#070b10]/60 border-slate-800/80 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xs font-bold font-mono-tech ${isAcquired ? 'text-white' : 'text-slate-400'}`}>
                      {skName}
                    </span>
                    {BASE_SKILLS.includes(skName) && (
                      <span className="text-[9px] uppercase px-1 rounded bg-slate-800 text-slate-400">
                        {SKILL_LINKED_ATTRIBUTE[skName]?.slice(0, 3)}
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono-tech mt-0.5">
                    Lié à : {linkedAttr.toUpperCase()} ({attrVal.toUpperCase()})
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-sm font-bold font-orbitron w-9 text-right ${
                    isAcquired ? 'text-cyan-400' : 'text-slate-600'
                  }`}>
                    {isAcquired ? currentVal.toUpperCase() : '-'}
                  </span>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleSkillStep(skName, -1)}
                      disabled={currentVal === '0'}
                      className="w-6 h-6 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 disabled:opacity-20 disabled:pointer-events-none flex items-center justify-center font-bold text-xs cursor-pointer"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSkillStep(skName, 1)}
                      disabled={currentVal === 'd12'}
                      className="w-6 h-6 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 disabled:opacity-20 disabled:pointer-events-none flex items-center justify-center font-bold text-xs cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
