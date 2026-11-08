import React, { useState } from 'react';
import { CharacterSheetData, EdgeDefinition, HindranceDefinition } from '../../types/character';
import { EDGES_CATALOG, HINDRANCES_CATALOG } from '../../data/interfaceZeroData';
import { Award, AlertOctagon, Plus, Trash2, ShieldCheck, Zap } from 'lucide-react';

interface EdgesHindrancesTabProps {
  character: CharacterSheetData;
  onChange: (updated: CharacterSheetData) => void;
}

export const EdgesHindrancesTab: React.FC<EdgesHindrancesTabProps> = ({ character, onChange }) => {
  const [selectedEdgeCategory, setSelectedEdgeCategory] = useState<string>('all');

  const handleAddEdge = (edge: EdgeDefinition) => {
    if (character.edges.some(e => e.id === edge.id || e.name === edge.name)) return;
    onChange({
      ...character,
      edges: [...character.edges, edge]
    });
  };

  const handleRemoveEdge = (edgeId: string) => {
    onChange({
      ...character,
      edges: character.edges.filter(e => e.id !== edgeId)
    });
  };

  const handleAddHindrance = (hindrance: HindranceDefinition) => {
    if (character.hindrances.some(h => h.id === hindrance.id || h.name === hindrance.name)) return;
    onChange({
      ...character,
      hindrances: [...character.hindrances, hindrance]
    });
  };

  const handleRemoveHindrance = (hindranceId: string) => {
    onChange({
      ...character,
      hindrances: character.hindrances.filter(h => h.id !== hindranceId)
    });
  };

  const filteredEdgesCatalog = EDGES_CATALOG.filter(e => {
    if (selectedEdgeCategory === 'all') return true;
    if (selectedEdgeCategory === 'cyber') return e.isCyber;
    return e.category === selectedEdgeCategory;
  });

  return (
    <div className="space-y-6">
      {/* ACTIVE EDGES & HINDRANCES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Active Edges */}
        <div className="bg-[#0b1017] border border-cyan-500/30 rounded-lg p-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <h3 className="text-xs font-bold font-orbitron text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" /> ATOUTS ACTIFS ({character.edges.length})
            </h3>
            <span className="text-[11px] text-slate-400 font-mono-tech">Bonus & Capacités spéciales</span>
          </div>

          {character.edges.length === 0 ? (
            <div className="text-center py-6 text-slate-500 font-mono-tech text-xs">
              Aucun atout sélectionné pour le moment.
            </div>
          ) : (
            <div className="space-y-2">
              {character.edges.map(edge => (
                <div key={edge.id} className="p-2.5 rounded border border-slate-800 bg-[#0d141e] flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white font-mono-tech">{edge.name}</span>
                      {edge.isCyber && (
                        <span className="text-[9px] uppercase px-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-600/40">
                          Cyber
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono-tech mt-0.5">
                      Prérequis: {edge.requirements}
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1 leading-snug">{edge.description}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveEdge(edge.id)}
                    className="p-1 hover:text-red-400 text-slate-500 transition cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Active Hindrances */}
        <div className="bg-[#0b1017] border border-red-500/30 rounded-lg p-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <h3 className="text-xs font-bold font-orbitron text-red-400 uppercase tracking-wider flex items-center gap-2">
              <AlertOctagon className="w-4 h-4" /> HANDICAPS ACTIFS ({character.hindrances.length})
            </h3>
            <span className="text-[11px] text-slate-400 font-mono-tech">Défauts & Vulnérabilités</span>
          </div>

          {character.hindrances.length === 0 ? (
            <div className="text-center py-6 text-slate-500 font-mono-tech text-xs">
              Aucun handicap sélectionné.
            </div>
          ) : (
            <div className="space-y-2">
              {character.hindrances.map(hind => (
                <div key={hind.id} className="p-2.5 rounded border border-slate-800 bg-[#0d141e] flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white font-mono-tech">{hind.name}</span>
                      <span className={`text-[9px] uppercase px-1 rounded font-mono-tech ${
                        hind.severity === 'Majeur'
                          ? 'bg-red-950 text-red-300 border border-red-500/50'
                          : 'bg-amber-950 text-amber-300 border border-amber-500/50'
                      }`}>
                        {hind.severity}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1 leading-snug">{hind.description}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveHindrance(hind.id)}
                    className="p-1 hover:text-red-400 text-slate-500 transition cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CATALOGS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Edges Catalog */}
        <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <h4 className="text-xs font-bold font-orbitron text-white uppercase tracking-wider">
              CATALOGUE DES ATOUTS (EDGES)
            </h4>
            <select
              value={selectedEdgeCategory}
              onChange={e => setSelectedEdgeCategory(e.target.value)}
              className="bg-[#070b10] border border-slate-700 rounded px-2 py-1 text-xs text-slate-200 font-mono-tech"
            >
              <option value="all">Tous les Atouts</option>
              <option value="cyber">Cyber / TAP</option>
              <option value="Combat">Combat</option>
              <option value="Professionnel">Professionnel</option>
              <option value="Social">Social</option>
            </select>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
            {filteredEdgesCatalog.map(e => {
              const isSelected = character.edges.some(ce => ce.id === e.id || ce.name === e.name);

              return (
                <div key={e.id} className="p-2.5 rounded border border-slate-800 bg-[#090e15] flex items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white font-mono-tech">{e.name}</span>
                      {e.isCyber && (
                        <span className="text-[9px] uppercase px-1 rounded bg-cyan-950 text-cyan-300">
                          Cyber
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono-tech">Prérequis: {e.requirements}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{e.description}</div>
                  </div>
                  {isSelected ? (
                    <span className="text-[11px] text-cyan-400 font-mono-tech shrink-0">Sélectionné</span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleAddEdge(e)}
                      className="px-2 py-1 bg-cyan-950 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900 rounded text-xs font-mono-tech shrink-0 cursor-pointer"
                    >
                      + Ajouter
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Hindrances Catalog */}
        <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <h4 className="text-xs font-bold font-orbitron text-white uppercase tracking-wider">
              CATALOGUE DES HANDICAPS (HINDRANCES)
            </h4>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
            {HINDRANCES_CATALOG.map(h => {
              const isSelected = character.hindrances.some(ch => ch.id === h.id || ch.name === h.name);

              return (
                <div key={h.id} className="p-2.5 rounded border border-slate-800 bg-[#090e15] flex items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white font-mono-tech">{h.name}</span>
                      <span className="text-[9px] uppercase px-1 rounded bg-slate-800 text-slate-300">
                        {h.severity}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{h.description}</div>
                  </div>
                  {isSelected ? (
                    <span className="text-[11px] text-red-400 font-mono-tech shrink-0">Sélectionné</span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleAddHindrance(h)}
                      className="px-2 py-1 bg-red-950/60 border border-red-500/50 text-red-300 hover:bg-red-900 rounded text-xs font-mono-tech shrink-0 cursor-pointer"
                    >
                      + Ajouter
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
