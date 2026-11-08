import React, { useState } from 'react';
import { CharacterSheetData, ImplantCategory, ImplantGrade, ImplantItem } from '../../types/character';
import { IMPLANTS_CATALOG, POWER_LEVELS } from '../../data/interfaceZeroData';
import { calculateDerivedStats } from '../../utils/characterGenerator';
import { Cpu, Zap, Plus, Trash2, Dices, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

interface ImplantsTabProps {
  character: CharacterSheetData;
  onChange: (updated: CharacterSheetData) => void;
}

const CATEGORY_LABELS: Record<ImplantCategory, string> = {
  tap: 'Interface TAP & Réseau',
  neural: 'Système Neural & Mental',
  sensory: 'Sensoriel (Yeux & Oreilles)',
  musculoskeletal: 'Musculosquelettique & Réflexes',
  dermal: 'Blindage Cutané & Dermal',
  limbs: 'Membres & Prothèses Bioniques',
  organs: 'Organes Internes',
  nanoware: 'Nanoware & Nanites',
  bioware: 'Bioware & Mutations Génétiques'
};

const GRADE_INFO: Record<ImplantGrade, { name: string; strainMod: string; costMod: string; desc: string; badgeClass: string }> = {
  gutterware: {
    name: 'Gutterware (Bricolé / Occase)',
    strainMod: 'x2 Tension',
    costMod: '-50% Coût',
    desc: 'Matériel de récupération instable.',
    badgeClass: 'bg-red-950/80 text-red-300 border-red-500/50'
  },
  streetware: {
    name: 'Streetware (Standard)',
    strainMod: 'x1 Tension',
    costMod: 'Coût normal',
    desc: 'Qualité standard du marché noir.',
    badgeClass: 'bg-slate-800 text-slate-300 border-slate-600'
  },
  hyperchrome: {
    name: 'Hyperchrome (Haut de gamme)',
    strainMod: '-1 Tension (min 1)',
    costMod: '+100% Coût (x2)',
    desc: 'Qualité de luxe chromée.',
    badgeClass: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/50'
  },
  milware: {
    name: 'Milware (Militaire)',
    strainMod: '1/2 Tension',
    costMod: '+200% Coût (x3)',
    desc: 'Technologie militaire classifiée.',
    badgeClass: 'bg-amber-950/80 text-amber-300 border-amber-500/50'
  }
};

export const ImplantsTab: React.FC<ImplantsTabProps> = ({ character, onChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const derived = calculateDerivedStats(character);
  const powerConfig = POWER_LEVELS.find(p => p.id === character.powerLevel) || POWER_LEVELS[1];

  const handleInstallImplant = (implant: ImplantItem) => {
    // Check if already installed
    if (character.implants.some(i => i.id === implant.id)) return;
    onChange({
      ...character,
      implants: [...character.implants, { ...implant }]
    });
  };

  const handleUninstallImplant = (implantId: string) => {
    onChange({
      ...character,
      implants: character.implants.filter(i => i.id !== implantId)
    });
  };

  const handleGradeChange = (implantId: string, newGrade: ImplantGrade) => {
    onChange({
      ...character,
      implants: character.implants.map(imp => {
        if (imp.id === implantId) {
          return { ...imp, grade: newGrade };
        }
        return imp;
      })
    });
  };

  const handleRandomImplants = () => {
    const uninstalled = IMPLANTS_CATALOG.filter(i => !character.implants.some(ci => ci.id === i.id));
    if (uninstalled.length === 0) return;

    // Pick 1-2 random implants
    const shuffled = [...uninstalled].sort(() => 0.5 - Math.random());
    const picked = shuffled.slice(0, 2);

    onChange({
      ...character,
      implants: [...character.implants, ...picked]
    });
  };

  const filteredCatalog = IMPLANTS_CATALOG.filter(imp => {
    if (selectedCategory !== 'all' && imp.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner: Strain & Implant Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Strain Gauge */}
        <div className={`p-4 rounded-lg border ${
          derived.strainCurrent > derived.strainMax
            ? 'bg-red-950/30 border-red-500/70'
            : 'bg-[#0b1017] border-cyan-500/40'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Zap className={`w-4 h-4 ${derived.strainCurrent > derived.strainMax ? 'text-red-400 animate-bounce' : 'text-yellow-400'}`} />
              <span className="text-xs font-bold font-orbitron text-white uppercase tracking-wider">
                SEUIL DE CYBERTENSION
              </span>
            </div>
            <span className="text-xs font-mono-tech font-bold text-slate-300">
              {derived.strainCurrent} / {derived.strainMax} points
            </span>
          </div>

          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
            <div
              className={`h-full transition-all duration-300 ${
                derived.strainCurrent > derived.strainMax
                  ? 'bg-red-500'
                  : derived.strainCurrent >= derived.strainMax * 0.8
                  ? 'bg-amber-400'
                  : 'bg-cyan-400'
              }`}
              style={{ width: `${Math.min(100, (derived.strainCurrent / Math.max(1, derived.strainMax)) * 100)}%` }}
            />
          </div>

          <div className="text-[11px] text-slate-400 font-mono-tech flex items-center justify-between">
            <span>Max sécurisé : Dé de Vigueur ({derived.strainMax})</span>
            {derived.strainCurrent > derived.strainMax && (
              <span className="text-red-400 font-bold flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> Surcharge cybernétique critique !
              </span>
            )}
          </div>
        </div>

        {/* Budget & Grade info */}
        <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold font-orbitron text-white uppercase tracking-wider">
                BUDGET CYBER ({powerConfig.name})
              </span>
            </div>
            <button
              type="button"
              onClick={handleRandomImplants}
              className="text-[11px] font-mono-tech bg-cyan-950 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900 px-2 py-1 rounded flex items-center gap-1.5 transition cursor-pointer"
            >
              <Dices className="w-3.5 h-3.5" /> Tirage Aléatoire (+2 Implants)
            </button>
          </div>

          <div className="mt-2 text-xs font-mono-tech text-slate-300 flex items-center justify-between">
            <span>Coût total des implants installés :</span>
            <span className="text-amber-400 font-bold font-orbitron">{derived.totalCyberCost.toLocaleString()} cr</span>
          </div>
          <div className="text-[11px] text-slate-500 font-mono-tech mt-1">
            Budget alloué par le niveau de puissance : {powerConfig.implantBudget.toLocaleString()} cr
          </div>
        </div>
      </div>

      {/* Installed Implants List */}
      <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <h3 className="text-sm font-bold font-orbitron text-white uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" /> MATRICE DES IMPLANTS INSTALLÉS ({character.implants.length})
          </h3>
          <span className="text-xs font-mono-tech text-slate-400">
            Modifiez la qualité de chaque pièce pour ajuster le coût et la Cybertension
          </span>
        </div>

        {character.implants.length === 0 ? (
          <div className="text-center py-8 text-slate-500 font-mono-tech text-xs border border-dashed border-slate-800 rounded-lg">
            Aucun implant cybernétique installé pour le moment. Sélectionnez des modules dans le catalogue ci-dessous ou lancez un tirage aléatoire.
          </div>
        ) : (
          <div className="space-y-2.5">
            {character.implants.map(imp => {
              const grade = GRADE_INFO[imp.grade || 'streetware'];

              return (
                <div
                  key={imp.id}
                  className="bg-[#0d141e] border border-slate-800 rounded-lg p-3 hover:border-cyan-500/40 transition flex flex-col md:flex-row md:items-center justify-between gap-3"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white font-mono-tech">{imp.name}</span>
                      <span className="text-[10px] uppercase font-mono-tech px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        {CATEGORY_LABELS[imp.category]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{imp.effectsSummary}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {/* Grade Selector */}
                    <div>
                      <select
                        value={imp.grade}
                        onChange={e => handleGradeChange(imp.id, e.target.value as ImplantGrade)}
                        className={`text-xs font-mono-tech rounded px-2.5 py-1 border focus:outline-none ${grade.badgeClass}`}
                      >
                        <option value="gutterware">Gutterware (x2 tension, -50% prix)</option>
                        <option value="streetware">Streetware (Normal)</option>
                        <option value="hyperchrome">Hyperchrome (-1 tension, x2 prix)</option>
                        <option value="milware">Milware (1/2 tension, x3 prix)</option>
                      </select>
                    </div>

                    {/* Stats badge */}
                    <div className="text-right font-mono-tech">
                      <div className="text-xs text-yellow-400 font-bold">{imp.strain} pts tension</div>
                      <div className="text-[11px] text-slate-400">{imp.cost.toLocaleString()} cr</div>
                    </div>

                    {/* Uninstall button */}
                    <button
                      type="button"
                      onClick={() => handleUninstallImplant(imp.id)}
                      className="p-1.5 rounded hover:bg-red-950/80 text-slate-400 hover:text-red-400 transition cursor-pointer"
                      title="Désinstaller cet implant"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Catalog & Shop Section */}
      <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
          <h3 className="text-sm font-bold font-orbitron text-white uppercase tracking-wider flex items-center gap-2">
            <Plus className="w-4 h-4 text-cyan-400" /> CATALOGUE D’IMPLANTS CYBERPUNK (INTERFACE ZERO)
          </h3>

          {/* Category filter */}
          <div className="flex items-center gap-2">
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="bg-[#070b10] border border-slate-700 rounded px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 font-mono-tech"
            >
              <option value="all">Toutes les catégories ({IMPLANTS_CATALOG.length})</option>
              {Object.entries(CATEGORY_LABELS).map(([catKey, catLabel]) => (
                <option key={catKey} value={catKey}>
                  {catLabel}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredCatalog.map(imp => {
            const isInstalled = character.implants.some(i => i.id === imp.id);

            return (
              <div
                key={imp.id}
                className={`p-3.5 rounded-lg border transition flex flex-col justify-between ${
                  isInstalled
                    ? 'bg-[#0d1926] border-cyan-500/50 shadow-sm'
                    : 'bg-[#090e15] border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold font-mono-tech text-white">{imp.name}</span>
                    <span className="text-[10px] font-mono-tech px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400">
                      {CATEGORY_LABELS[imp.category]}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{imp.description}</p>
                  <div className="text-[11px] text-cyan-300 font-mono-tech mt-2 bg-slate-900/80 p-1.5 rounded border border-slate-800">
                    ⚡ Effet : {imp.effectsSummary}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-xs font-mono-tech">
                    <span className="text-yellow-400 font-bold">{imp.strain} pts tension</span>
                    <span className="text-slate-500 mx-1.5">|</span>
                    <span className="text-slate-300">{imp.cost.toLocaleString()} cr</span>
                  </div>

                  {isInstalled ? (
                    <span className="text-xs text-cyan-400 font-mono-tech font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Installé
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleInstallImplant(imp)}
                      className="px-3 py-1 bg-cyan-950 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900 hover:border-cyan-400 rounded text-xs font-mono-tech flex items-center gap-1 transition cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> Installer
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
