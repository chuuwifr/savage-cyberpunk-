import React from 'react';
import { CharacterSheetData, PowerLevel } from '../../types/character';
import { ARCHETYPES, POWER_LEVELS, RACES } from '../../data/interfaceZeroData';
import { User, Shield, Terminal, BookOpen, Quote, TrendingUp, Coins, Sparkles, ChevronRight, Award, Wallet } from 'lucide-react';
import { getRankFromAdvances, getRankProgress } from '../../utils/swadeRules';

interface ConceptTabProps {
  character: CharacterSheetData;
  onChange: (updated: CharacterSheetData) => void;
  onOpenAdvancementModal?: () => void;
  onOpenBankModal?: () => void;
}

export const ConceptTab: React.FC<ConceptTabProps> = ({ 
  character, 
  onChange,
  onOpenAdvancementModal,
  onOpenBankModal 
}) => {
  const currentRace = RACES.find(r => r.id === character.raceId) || RACES[0];
  const currentArchetype = ARCHETYPES.find(a => a.id === character.archetypeId) || ARCHETYPES[0];

  const advancesCount = character.advancesCount || 0;
  const currentRank = character.rank || getRankFromAdvances(advancesCount);
  const rankProgress = getRankProgress(advancesCount);

  const handleTextChange = (field: keyof CharacterSheetData, value: any) => {
    onChange({ ...character, [field]: value });
  };

  const handleArchetypeChange = (archId: string) => {
    const arch = ARCHETYPES.find(a => a.id === archId);
    if (!arch) return;
    onChange({
      ...character,
      archetypeId: archId,
      concept: `${arch.name} - ${currentRace.name}`,
      notes: `${arch.description}\n\nDevise : ${arch.quote}\nRôle tactique : ${arch.tacticalRole}`
    });
  };

  const handleRaceChange = (raceId: string) => {
    const rc = RACES.find(r => r.id === raceId);
    if (!rc) return;
    onChange({
      ...character,
      raceId,
      concept: `${currentArchetype.name} - ${rc.name}`
    });
  };

  return (
    <div className="space-y-6">
      {/* Identity Card */}
      <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-5">
        <h3 className="text-sm font-bold font-orbitron text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <User className="w-4 h-4" /> IDENTITÉ & PROFIL DE L’AGENT
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-mono-tech text-slate-400 uppercase mb-1">
              Nom Officiel (ou de naissance)
            </label>
            <input
              type="text"
              value={character.name}
              onChange={e => handleTextChange('name', e.target.value)}
              className="w-full bg-[#070b10] border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400 font-mono-tech"
              placeholder="ex: Kenshi Takahashi"
            />
          </div>

          <div>
            <label className="block text-xs font-mono-tech text-cyan-400 uppercase mb-1">
              Alias / Indicatif de Rue
            </label>
            <input
              type="text"
              value={character.alias}
              onChange={e => handleTextChange('alias', e.target.value)}
              className="w-full bg-[#070b10] border border-cyan-500/40 rounded px-3 py-2 text-sm text-cyan-300 font-bold focus:outline-none focus:border-cyan-400 font-mono-tech"
              placeholder="ex: Razor-Byte"
            />
          </div>

          <div>
            <label className="block text-xs font-mono-tech text-slate-400 uppercase mb-1">
              Concept Global
            </label>
            <input
              type="text"
              value={character.concept}
              onChange={e => handleTextChange('concept', e.target.value)}
              className="w-full bg-[#070b10] border border-slate-700 rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 font-mono-tech"
              placeholder="ex: Rônin corpo en quête de vengeance"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {/* Archétype */}
          <div>
            <label className="block text-xs font-mono-tech text-slate-400 uppercase mb-1">
              Archétype (16 classes)
            </label>
            <select
              value={character.archetypeId}
              onChange={e => handleArchetypeChange(e.target.value)}
              className="w-full bg-[#070b10] border border-slate-700 rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 font-mono-tech"
            >
              {ARCHETYPES.map(arc => (
                <option key={arc.id} value={arc.id}>
                  {arc.name}
                </option>
              ))}
            </select>
          </div>

          {/* Espèce */}
          <div>
            <label className="block text-xs font-mono-tech text-slate-400 uppercase mb-1">
              Espèce / Transhumain
            </label>
            <select
              value={character.raceId}
              onChange={e => handleRaceChange(e.target.value)}
              className="w-full bg-[#070b10] border border-slate-700 rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 font-mono-tech"
            >
              {RACES.map(rc => (
                <option key={rc.id} value={rc.id}>
                  {rc.name}
                </option>
              ))}
            </select>
          </div>

          {/* Niveau de puissance */}
          <div>
            <label className="block text-xs font-mono-tech text-slate-400 uppercase mb-1">
              Niveau de Puissance
            </label>
            <select
              value={character.powerLevel}
              onChange={e => handleTextChange('powerLevel', e.target.value as PowerLevel)}
              className="w-full bg-[#070b10] border border-slate-700 rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 font-mono-tech"
            >
              {POWER_LEVELS.map(lvl => (
                <option key={lvl.id} value={lvl.id}>
                  {lvl.name}
                </option>
              ))}
            </select>
          </div>

          {/* Rang SWADE Actuel */}
          <div>
            <label className="block text-xs font-mono-tech text-slate-400 uppercase mb-1">
              Rang SWADE Actuel
            </label>
            <select
              value={character.rank}
              onChange={e => handleTextChange('rank', e.target.value)}
              className="w-full bg-[#070b10] border border-slate-700 rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 font-mono-tech"
            >
              <option value="Novice">Novice (0-3 av.)</option>
              <option value="Aguerri">Aguerri (4-7 av.)</option>
              <option value="Vétéran">Vétéran (8-11 av.)</option>
              <option value="Héroïque">Héroïque (12-15 av.)</option>
              <option value="Légendaire">Légendaire (16+ av.)</option>
            </select>
          </div>
        </div>

        {/* Interactive SWADE Progression & Malmart Bank Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 pt-4 border-t border-slate-800">
          {/* SWADE Advancement Interactive Card */}
          <div className="bg-[#070b10] border border-cyan-500/30 rounded-lg p-3.5 flex flex-col justify-between hover:border-cyan-400/60 transition group">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono-tech text-cyan-300 font-bold uppercase tracking-wider">
                    Progression SWADE (Règles p. 54)
                  </span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded font-mono-tech font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {currentRank} • {advancesCount} Avancée{advancesCount > 1 ? 's' : ''}
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800 my-2">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${rankProgress.percent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono-tech">
                <span>Avancées dans ce rang : <strong className="text-slate-200">{rankProgress.currentInRank}/{rankProgress.requiredInRank}</strong></span>
                <span>Prochain rang : <strong className="text-cyan-400">{rankProgress.nextRank || 'Plafond Max'}</strong></span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800/80">
              <span className="text-[11px] text-slate-500 font-mono-tech">
                {character.advancesHistory && character.advancesHistory.length > 0 
                  ? `${character.advancesHistory.length} progression(s) validée(s)`
                  : 'Aucune progression enregistrée'}
              </span>
              {onOpenAdvancementModal && (
                <button
                  type="button"
                  onClick={onOpenAdvancementModal}
                  className="px-3 py-1 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 rounded text-xs font-mono-tech flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Gérer l'Avancement</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Malmart Bank Balance Interactive Card */}
          <div className="bg-[#070b10] border border-amber-500/30 rounded-lg p-3.5 flex flex-col justify-between hover:border-amber-400/60 transition group">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono-tech text-amber-300 font-bold uppercase tracking-wider">
                    Compte Malmart Bank
                  </span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded font-mono-tech font-bold bg-amber-950/80 text-amber-300 border border-amber-800/80">
                  ID: #{character.id.slice(-6).toUpperCase()}
                </span>
              </div>

              <div className="flex items-baseline justify-between mt-1 mb-2">
                <div>
                  <div className="text-[10px] text-slate-400 font-mono-tech uppercase">Solde Disponible</div>
                  <div className="text-2xl font-bold font-orbitron text-amber-400">
                    {character.credits.toLocaleString()} <span className="text-xs text-amber-500/80 font-mono-tech">crédits</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400 font-mono-tech uppercase">Transactions</div>
                  <div className="text-xs font-mono-tech text-slate-300">
                    {character.bankHistory ? character.bankHistory.length : 0} opération(s)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800/80">
              <span className="text-[11px] text-slate-500 font-mono-tech">
                Prêts, primes de contrat & saisie libre
              </span>
              {onOpenBankModal && (
                <button
                  type="button"
                  onClick={onOpenBankModal}
                  className="px-3 py-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:border-amber-400 rounded text-xs font-mono-tech flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Coins className="w-3.5 h-3.5" />
                  <span>Personnaliser le Solde</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Selected Archetype & Race Deep Dive Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Archétype Details */}
        <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono-tech text-cyan-400 uppercase">
              Archétype : {currentArchetype.name}
            </span>
            <span className="text-[11px] bg-cyan-950 text-cyan-300 border border-cyan-800 px-2 py-0.5 rounded font-mono-tech">
              {currentArchetype.tacticalRole}
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            {currentArchetype.description}
          </p>
          <div className="bg-[#070b10] border-l-2 border-amber-400 p-2.5 text-xs italic text-amber-200/90 flex items-start gap-2">
            <Quote className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
            <span>{currentArchetype.quote}</span>
          </div>
        </div>

        {/* Race Details */}
        <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono-tech text-cyan-400 uppercase">
              Espèce : {currentRace.name} ({currentRace.category})
            </span>
            {currentRace.inherentArmor && (
              <span className="text-[11px] bg-slate-800 text-amber-300 border border-amber-600/50 px-2 py-0.5 rounded font-mono-tech">
                Armure innée +{currentRace.inherentArmor}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-2">
            {currentRace.description}
          </p>
          <div className="space-y-1">
            {currentRace.racialTraits.map((tr, idx) => (
              <div key={idx} className="text-[11px] text-slate-400 font-mono-tech flex items-start gap-1.5">
                <span className="text-cyan-400 font-bold">›</span> {tr}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background & Appearance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4">
          <label className="block text-xs font-bold font-mono-tech text-cyan-400 uppercase mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Historique & Dossier Corporatiste
          </label>
          <textarea
            rows={5}
            value={character.background}
            onChange={e => handleTextChange('background', e.target.value)}
            className="w-full bg-[#070b10] border border-slate-700 rounded p-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 font-mono-tech leading-relaxed"
            placeholder="Détails du passé de l'agent, anciennes affiliations corpos, ennemis jurés..."
          />
        </div>

        <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4">
          <label className="block text-xs font-bold font-mono-tech text-cyan-400 uppercase mb-2 flex items-center gap-2">
            <Terminal className="w-4 h-4" /> Apparence & Marques Distinctives
          </label>
          <textarea
            rows={5}
            value={character.appearance}
            onChange={e => handleTextChange('appearance', e.target.value)}
            className="w-full bg-[#070b10] border border-slate-700 rounded p-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 font-mono-tech leading-relaxed"
            placeholder="Description vestimentaire, style néon, cicatrices de chirurgie cybernétique, démarche..."
          />
        </div>
      </div>
    </div>
  );
};
