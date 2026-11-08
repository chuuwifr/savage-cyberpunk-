import React, { useRef } from 'react';
import { CharacterSheetData } from '../../types/character';
import { ARCHETYPES, RACES } from '../../data/interfaceZeroData';
import { calculateDerivedStats } from '../../utils/characterGenerator';
import {
  cloneCharacter,
  deleteCharacter,
  exportCharactersToJson,
  importCharactersFromJson
} from '../../utils/storage';
import {
  FolderArchive,
  Download,
  Upload,
  Copy,
  Trash2,
  CheckCircle,
  Plus,
  Zap,
  Calendar,
  Sparkles
} from 'lucide-react';

interface SavedBuildsTabProps {
  characters: CharacterSheetData[];
  activeCharacterId: string;
  onSelectCharacter: (id: string) => void;
  onCharactersUpdated: (list: CharacterSheetData[]) => void;
  onCreateNew: () => void;
  onOpenRandomModal: () => void;
}

export const SavedBuildsTab: React.FC<SavedBuildsTabProps> = ({
  characters,
  activeCharacterId,
  onSelectCharacter,
  onCharactersUpdated,
  onCreateNew,
  onOpenRandomModal
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDelete = (id: string, name: string) => {
    if (characters.length <= 1) {
      alert('Impossible de supprimer le dernier build. Créez-en un nouveau d’abord.');
      return;
    }
    if (confirm(`Voulez-vous vraiment effacer le build "${name}" ?`)) {
      const updated = deleteCharacter(id);
      onCharactersUpdated(updated);
    }
  };

  const handleClone = (char: CharacterSheetData) => {
    const cloned = cloneCharacter(char);
    const updated = [cloned, ...characters];
    onCharactersUpdated(updated);
    onSelectCharacter(cloned.id);
  };

  const handleExportAll = () => {
    exportCharactersToJson(characters);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      try {
        const content = event.target?.result as string;
        const imported = importCharactersFromJson(content);
        onCharactersUpdated(imported);
        if (imported.length > 0) {
          onSelectCharacter(imported[0].id);
        }
        alert(`${imported.length} builds de personnages importés avec succès !`);
      } catch (err: any) {
        alert('Erreur lors de l’import JSON : ' + err.message);
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-6">
      {/* Top action header */}
      <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold font-orbitron text-white uppercase tracking-wider flex items-center gap-2">
            <FolderArchive className="w-5 h-5 text-cyan-400" />
            GESTIONNAIRE DE BUILDS SIMULTANÉS ({characters.length} AGENTS SAUVEGARDÉS)
          </h3>
          <p className="text-xs text-slate-400 font-mono-tech mt-1">
            Sauvegarde automatique permanente dans le stockage local de votre navigateur.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onCreateNew}
            className="px-3.5 py-2 bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 rounded text-xs font-mono-tech flex items-center gap-1.5 transition cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 text-cyan-400" /> Nouveau Vierge
          </button>

          <button
            type="button"
            onClick={onOpenRandomModal}
            className="px-3.5 py-2 bg-cyan-950 border border-cyan-500/50 hover:bg-cyan-900 text-cyan-300 rounded text-xs font-mono-tech flex items-center gap-1.5 transition cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Tirage Aléatoire
          </button>

          <button
            type="button"
            onClick={handleExportAll}
            className="px-3.5 py-2 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 rounded text-xs font-mono-tech flex items-center gap-1.5 transition cursor-pointer"
            title="Exporter tous les builds au format JSON"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" /> Exporter JSON
          </button>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-3.5 py-2 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 rounded text-xs font-mono-tech flex items-center gap-1.5 transition cursor-pointer"
            title="Importer une sauvegarde JSON"
          >
            <Upload className="w-3.5 h-3.5 text-pink-400" /> Importer JSON
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".json"
            className="hidden"
          />
        </div>
      </div>

      {/* Characters Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map(char => {
          const isActive = char.id === activeCharacterId;
          const stats = calculateDerivedStats(char);
          const archetype = ARCHETYPES.find(a => a.id === char.archetypeId);
          const race = RACES.find(r => r.id === char.raceId);
          const updatedDate = new Date(char.updatedAt || char.createdAt).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
          });

          return (
            <div
              key={char.id}
              className={`p-4 rounded-xl border transition flex flex-col justify-between ${
                isActive
                  ? 'bg-[#0e1726] border-cyan-400 shadow-lg shadow-cyan-500/10'
                  : 'bg-[#090e15] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Header with status badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded uppercase bg-slate-800 text-slate-300">
                    {char.rank} ({char.powerLevel})
                  </span>
                  {isActive && (
                    <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/50 text-cyan-300 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> ACTIF
                    </span>
                  )}
                </div>

                {/* Name & Alias */}
                <h4 className="text-base font-bold font-orbitron text-white truncate">
                  {char.name}
                </h4>
                <div className="text-xs text-cyan-400 font-mono-tech font-bold mt-0.5">
                  « {char.alias} »
                </div>

                {/* Concept & Archetype */}
                <div className="text-xs text-slate-400 mt-2 font-mono-tech">
                  {archetype?.name || char.archetypeId} • {race?.name || char.raceId}
                </div>

                {/* Derived snapshot */}
                <div className="grid grid-cols-4 gap-1.5 mt-3 pt-3 border-t border-slate-800/80 text-center font-mono-tech">
                  <div className="bg-[#060a0f] p-1.5 rounded">
                    <div className="text-[9px] text-slate-500">PARADE</div>
                    <div className="text-xs font-bold text-slate-200">{stats.parry}</div>
                  </div>
                  <div className="bg-[#060a0f] p-1.5 rounded">
                    <div className="text-[9px] text-slate-500">RÉSIST.</div>
                    <div className="text-xs font-bold text-amber-400">{stats.toughnessTotal}</div>
                  </div>
                  <div className="bg-[#060a0f] p-1.5 rounded">
                    <div className="text-[9px] text-slate-500">TENSION</div>
                    <div className="text-xs font-bold text-cyan-400">{stats.strainCurrent}/{stats.strainMax}</div>
                  </div>
                  <div className="bg-[#060a0f] p-1.5 rounded">
                    <div className="text-[9px] text-slate-500">FIREWALL</div>
                    <div className="text-xs font-bold text-emerald-400">{stats.firewall}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono-tech mt-3">
                  <Calendar className="w-3 h-3" /> Mis à jour : {updatedDate}
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                {!isActive ? (
                  <button
                    type="button"
                    onClick={() => onSelectCharacter(char.id)}
                    className="flex-1 py-1.5 bg-cyan-950 border border-cyan-500/50 hover:bg-cyan-900 text-cyan-300 rounded text-xs font-mono-tech font-bold transition cursor-pointer"
                  >
                    Activer ce build
                  </button>
                ) : (
                  <span className="text-xs text-slate-400 font-mono-tech italic">
                    Éditeur en cours
                  </span>
                )}

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleClone(char)}
                    className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-slate-700 transition cursor-pointer"
                    title="Dupliquer ce build"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(char.id, char.name)}
                    className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-900 transition cursor-pointer"
                    title="Supprimer ce build"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
