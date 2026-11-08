import React from 'react';
import { CharacterSheetData } from '../types/character';
import { calculateDerivedStats } from '../utils/characterGenerator';
import { Shield, Zap, Activity, Cpu, Award, Weight, HeartPulse } from 'lucide-react';

interface DerivedTraitsBarProps {
  character: CharacterSheetData;
  onUpdateCharacter?: (updated: CharacterSheetData) => void;
}

export const DerivedTraitsBar: React.FC<DerivedTraitsBarProps> = ({ character, onUpdateCharacter }) => {
  const stats = calculateDerivedStats(character);

  const strainRatio = Math.min(100, Math.round((stats.strainCurrent / Math.max(1, stats.strainMax)) * 100));
  const isStrainOverload = stats.strainCurrent > stats.strainMax;

  const toggleWound = (index: number) => {
    if (!onUpdateCharacter) return;
    const newWounds = character.wounds === index ? index - 1 : index;
    onUpdateCharacter({ ...character, wounds: Math.max(0, Math.min(3, newWounds)) });
  };

  const toggleFatigue = (index: number) => {
    if (!onUpdateCharacter) return;
    const newFatigue = character.fatigue === index ? index - 1 : index;
    onUpdateCharacter({ ...character, fatigue: Math.max(0, Math.min(2, newFatigue)) });
  };

  const updateBennies = (delta: number) => {
    if (!onUpdateCharacter) return;
    onUpdateCharacter({ ...character, bennies: Math.max(0, character.bennies + delta) });
  };

  return (
    <div className="bg-[#0b1017] border border-cyan-500/30 rounded-lg p-3.5 shadow-xl relative overflow-hidden mb-6">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      {/* Top row: derived metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* Allure */}
        <div className="bg-[#0f1722] border border-slate-800 rounded p-2.5 flex flex-col justify-between hover:border-cyan-500/50 transition">
          <div className="flex items-center justify-between text-xs text-cyan-400 font-mono-tech uppercase">
            <span>Allure (Pace)</span>
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-2xl font-bold font-orbitron text-white">{stats.pace}</span>
            <span className="text-xs text-slate-400 font-mono-tech">+{stats.runningDie} course</span>
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Base 6 + modificateurs</div>
        </div>

        {/* Parade */}
        <div className="bg-[#0f1722] border border-slate-800 rounded p-2.5 flex flex-col justify-between hover:border-cyan-500/50 transition">
          <div className="flex items-center justify-between text-xs text-cyan-400 font-mono-tech uppercase">
            <span>Parade (Parry)</span>
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-2xl font-bold font-orbitron text-white">{stats.parry}</span>
            <span className="text-xs text-slate-400 font-mono-tech">2 + (Combat/2)</span>
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Défense en corps-à-corps</div>
        </div>

        {/* Résistance */}
        <div className="bg-[#0f1722] border border-slate-800 rounded p-2.5 flex flex-col justify-between hover:border-cyan-500/50 transition">
          <div className="flex items-center justify-between text-xs text-cyan-400 font-mono-tech uppercase">
            <span>Résistance</span>
            <Shield className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-2xl font-bold font-orbitron text-amber-400">{stats.toughnessTotal}</span>
            <span className="text-xs text-slate-300 font-mono-tech">({stats.toughnessArmor} armure)</span>
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Base: {stats.toughnessBase} + {stats.toughnessArmor} armure</div>
        </div>

        {/* Cybertension */}
        <div className={`bg-[#0f1722] border rounded p-2.5 flex flex-col justify-between transition ${
          isStrainOverload ? 'border-red-500/80 bg-red-950/20' : 'border-slate-800 hover:border-cyan-500/50'
        }`}>
          <div className="flex items-center justify-between text-xs font-mono-tech uppercase">
            <span className={isStrainOverload ? 'text-red-400 font-bold' : 'text-cyan-400'}>Cybertension</span>
            <Zap className={`w-3.5 h-3.5 ${isStrainOverload ? 'text-red-400 animate-pulse' : 'text-yellow-400'}`} />
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className={`text-2xl font-bold font-orbitron ${isStrainOverload ? 'text-red-400' : 'text-white'}`}>
              {stats.strainCurrent}
            </span>
            <span className="text-xs text-slate-400 font-mono-tech">/ {stats.strainMax} max</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1.5">
            <div 
              className={`h-full transition-all duration-300 ${
                isStrainOverload ? 'bg-red-500' : strainRatio > 75 ? 'bg-amber-400' : 'bg-cyan-400'
              }`}
              style={{ width: `${Math.min(100, strainRatio)}%` }}
            />
          </div>
        </div>

        {/* Firewall */}
        <div className="bg-[#0f1722] border border-slate-800 rounded p-2.5 flex flex-col justify-between hover:border-cyan-500/50 transition">
          <div className="flex items-center justify-between text-xs text-cyan-400 font-mono-tech uppercase">
            <span>Firewall TAP</span>
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-2xl font-bold font-orbitron text-emerald-400">{stats.firewall}</span>
            <span className="text-xs text-slate-400 font-mono-tech">Défense TAP</span>
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Bouclier cybernétique</div>
        </div>

        {/* Street Cred */}
        <div className="bg-[#0f1722] border border-slate-800 rounded p-2.5 flex flex-col justify-between hover:border-cyan-500/50 transition">
          <div className="flex items-center justify-between text-xs text-cyan-400 font-mono-tech uppercase">
            <span>Street Cred</span>
            <Award className="w-3.5 h-3.5 text-pink-400" />
          </div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-2xl font-bold font-orbitron text-pink-400">{stats.streetCred}</span>
            <span className="text-xs text-slate-400 font-mono-tech">{character.rank}</span>
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Réputation des bas-fonds</div>
        </div>
      </div>

      {/* Bottom row: Wounds, Fatigue, Bennies, Encumbrance */}
      <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech">
        {/* Blessures */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400 flex items-center gap-1">
            <HeartPulse className="w-3.5 h-3.5 text-red-400" /> Blessures (-1 à -3) :
          </span>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => toggleWound(w)}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition border cursor-pointer ${
                  character.wounds >= w
                    ? 'bg-red-950/80 border-red-500 text-red-300'
                    : 'bg-slate-900 border-slate-700 text-slate-500 hover:border-slate-500'
                }`}
              >
                -{w}
              </button>
            ))}
            {character.wounds > 0 && (
              <span className="text-red-400 text-[10px] ml-1">Malus : -{character.wounds}</span>
            )}
          </div>
        </div>

        {/* Fatigue */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Fatigue :</span>
          <div className="flex items-center gap-1.5">
            {[1, 2].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => toggleFatigue(f)}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition border cursor-pointer ${
                  character.fatigue >= f
                    ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                    : 'bg-slate-900 border-slate-700 text-slate-500 hover:border-slate-500'
                }`}
              >
                -{f}
              </button>
            ))}
          </div>
        </div>

        {/* Bennies / Jetons */}
        <div className="flex items-center gap-2">
          <span className="text-cyan-400">Jetons (Bennies) :</span>
          <div className="flex items-center gap-1 bg-slate-900 border border-cyan-500/30 rounded px-1.5 py-0.5">
            <button
              type="button"
              onClick={() => updateBennies(-1)}
              className="text-slate-400 hover:text-cyan-300 px-1 font-bold text-sm"
              disabled={character.bennies <= 0}
            >
              -
            </button>
            <span className="text-white font-bold px-1.5 font-orbitron">{character.bennies}</span>
            <button
              type="button"
              onClick={() => updateBennies(1)}
              className="text-slate-400 hover:text-cyan-300 px-1 font-bold text-sm"
            >
              +
            </button>
          </div>
        </div>

        {/* Encombrement */}
        <div className="flex items-center gap-1.5 text-slate-400">
          <Weight className="w-3.5 h-3.5 text-cyan-400" />
          <span>Charge :</span>
          <span className={`font-bold ${stats.isOverloaded ? 'text-red-400' : 'text-slate-200'}`}>
            {stats.carriedWeight} kg
          </span>
          <span>/ {stats.maxWeight} kg</span>
          {stats.isOverloaded && (
            <span className="text-red-400 bg-red-950/80 border border-red-500/50 px-1.5 py-0.2 rounded text-[10px]">
              Surcharge (-2)
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
