import React, { useState } from 'react';
import { ARCHETYPES, POWER_LEVELS, RACES } from '../data/interfaceZeroData';
import { generateRandomCharacter } from '../utils/characterGenerator';
import { CharacterSheetData, PowerLevel } from '../types/character';
import { Dices, Sparkles, X, ShieldAlert, Cpu } from 'lucide-react';

interface RandomGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCharacterGenerated: (newChar: CharacterSheetData) => void;
}

export const RandomGeneratorModal: React.FC<RandomGeneratorModalProps> = ({
  isOpen,
  onClose,
  onCharacterGenerated
}) => {
  const [selectedArchetype, setSelectedArchetype] = useState<string>('random');
  const [selectedRace, setSelectedRace] = useState<string>('random');
  const [selectedPowerLevel, setSelectedPowerLevel] = useState<PowerLevel>('soldat');
  const [extraImplants, setExtraImplants] = useState<number>(1);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const newChar = generateRandomCharacter({
        archetypeId: selectedArchetype === 'random' ? undefined : selectedArchetype,
        raceId: selectedRace === 'random' ? undefined : selectedRace,
        powerLevel: selectedPowerLevel,
        randomImplantsCount: extraImplants
      });
      setIsGenerating(false);
      onCharacterGenerated(newChar);
      onClose();
    }, 250);
  };

  const handleFullRandom = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const newChar = generateRandomCharacter({
        powerLevel: selectedPowerLevel,
        randomImplantsCount: Math.floor(Math.random() * 3) + 1
      });
      setIsGenerating(false);
      onCharacterGenerated(newChar);
      onClose();
    }, 250);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#0b1017] border border-cyan-500/50 rounded-xl max-w-2xl w-full p-6 shadow-2xl relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-400">
              <Dices className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-orbitron text-white flex items-center gap-2">
                MATRICE DE GÉNÉRATION ALÉATOIRE
              </h2>
              <p className="text-xs text-slate-400 font-mono-tech">
                Synthèse procédurale de mercenaires cyberpunks conformes aux règles SWADE & Interface Zero.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options Form */}
        <div className="space-y-4">
          {/* Power Level selection */}
          <div>
            <label className="block text-xs font-mono-tech text-cyan-400 uppercase mb-2">
              1. Niveau de Puissance & Budget de Départ
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {POWER_LEVELS.map(lvl => (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setSelectedPowerLevel(lvl.id)}
                  className={`p-3 rounded-lg border text-left transition cursor-pointer ${
                    selectedPowerLevel === lvl.id
                      ? 'border-cyan-400 bg-cyan-950/40 text-white shadow-sm shadow-cyan-500/20'
                      : 'border-slate-800 bg-[#0d141e] text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm font-orbitron text-slate-200">{lvl.name}</div>
                  <div className="text-[11px] text-cyan-300 font-mono-tech mt-0.5">
                    {lvl.credits.toLocaleString()} cr équipement {lvl.implantBudget > 0 ? `+ ${lvl.implantBudget.toLocaleString()} cr implants` : ''}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">{lvl.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Archetype selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono-tech text-cyan-400 uppercase mb-1.5">
                2. Archétype Cyberpunk
              </label>
              <select
                value={selectedArchetype}
                onChange={e => setSelectedArchetype(e.target.value)}
                className="w-full bg-[#0d141e] border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 font-mono-tech"
              >
                <option value="random">🎲 Tirage Aléatoire (16 Archétypes)</option>
                {ARCHETYPES.map(arc => (
                  <option key={arc.id} value={arc.id}>
                    {arc.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Race selection */}
            <div>
              <label className="block text-xs font-mono-tech text-cyan-400 uppercase mb-1.5">
                3. Espèce / Transhumain
              </label>
              <select
                value={selectedRace}
                onChange={e => setSelectedRace(e.target.value)}
                className="w-full bg-[#0d141e] border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 font-mono-tech"
              >
                <option value="random">🎲 Tirage Aléatoire / Recommandé</option>
                {RACES.map(rc => (
                  <option key={rc.id} value={rc.id}>
                    {rc.name} ({rc.category})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Extra Implants Slider */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-mono-tech text-cyan-400 uppercase flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> 4. Implants cybernétiques additionnels aléatoires
              </label>
              <span className="text-xs font-mono-tech text-amber-400 font-bold">
                +{extraImplants} implant{extraImplants > 1 ? 's' : ''} bonus
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="4"
              value={extraImplants}
              onChange={e => setExtraImplants(parseInt(e.target.value))}
              className="w-full accent-cyan-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono-tech mt-1">
              <span>0 (Pack standard seul)</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4 (Sur-chromé)</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleFullRandom}
            disabled={isGenerating}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-pink-500/50 bg-pink-950/30 text-pink-300 hover:bg-pink-900/40 font-mono-tech text-xs uppercase flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            Tirage 100% Chaos Aléatoire
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 font-mono-tech text-xs uppercase transition cursor-pointer"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg border border-cyan-400 bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono-tech text-xs uppercase flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 transition cursor-pointer"
            >
              <Dices className="w-4 h-4" />
              {isGenerating ? 'Compilation...' : 'Générer le Personnage'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
