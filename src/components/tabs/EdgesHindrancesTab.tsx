import React, { useState } from 'react';
import { CharacterSheetData, EdgeDefinition, HindranceDefinition } from '../../types/character';
import { EDGES_CATALOG, HINDRANCES_CATALOG } from '../../data/interfaceZeroData';
import { Award, AlertOctagon, Trash2, Search, Filter } from 'lucide-react';

interface EdgesHindrancesTabProps {
  character: CharacterSheetData;
  onChange: (updated: CharacterSheetData) => void;
}

export const EdgesHindrancesTab: React.FC<EdgesHindrancesTabProps> = ({ character, onChange }) => {
  const [selectedEdgeCategory, setSelectedEdgeCategory] = useState<string>('all');
  const [edgeSearch, setEdgeSearch] = useState<string>('');
  const [selectedHindranceSeverity, setSelectedHindranceSeverity] = useState<string>('all');
  const [hindranceSearch, setHindranceSearch] = useState<string>('');

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
    // Category match
    if (selectedEdgeCategory === 'cyber') {
      if (!e.isCyber) return false;
    } else if (selectedEdgeCategory !== 'all') {
      if (e.category !== selectedEdgeCategory) return false;
    }

    // Search query match
    if (edgeSearch.trim()) {
      const q = edgeSearch.toLowerCase();
      const matchName = e.name.toLowerCase().includes(q);
      const matchReq = e.requirements.toLowerCase().includes(q);
      const matchDesc = e.description.toLowerCase().includes(q);
      const matchCat = e.category.toLowerCase().includes(q);
      if (!matchName && !matchReq && !matchDesc && !matchCat) return false;
    }

    return true;
  });

  const filteredHindrancesCatalog = HINDRANCES_CATALOG.filter(h => {
    // Severity match
    if (selectedHindranceSeverity !== 'all') {
      if (selectedHindranceSeverity === 'Majeur' && h.severity === 'Mineur') return false;
      if (selectedHindranceSeverity === 'Mineur' && h.severity === 'Majeur') return false;
      if (selectedHindranceSeverity === 'Mineur/Majeur' && h.severity !== 'Mineur/Majeur') return false;
    }

    // Search query match
    if (hindranceSearch.trim()) {
      const q = hindranceSearch.toLowerCase();
      const matchName = h.name.toLowerCase().includes(q);
      const matchDesc = h.description.toLowerCase().includes(q);
      if (!matchName && !matchDesc) return false;
    }

    return true;
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
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {character.edges.map(edge => (
                <div key={edge.id} className="p-2.5 rounded border border-slate-800 bg-[#0d141e] flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-bold text-white font-mono-tech">{edge.name}</span>
                      <span className="text-[9px] uppercase px-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                        {edge.category}
                      </span>
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
                    className="p-1 hover:text-red-400 text-slate-500 transition cursor-pointer shrink-0"
                    title="Retirer cet atout"
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
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {character.hindrances.map(hind => (
                <div key={hind.id} className="p-2.5 rounded border border-slate-800 bg-[#0d141e] flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white font-mono-tech">{hind.name}</span>
                      <span className={`text-[9px] uppercase px-1 rounded font-mono-tech ${
                        hind.severity === 'Majeur'
                          ? 'bg-red-950 text-red-300 border border-red-500/50'
                          : hind.severity === 'Mineur'
                          ? 'bg-amber-950 text-amber-300 border border-amber-500/50'
                          : 'bg-purple-950 text-purple-300 border border-purple-500/50'
                      }`}>
                        {hind.severity}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1 leading-snug">{hind.description}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveHindrance(hind.id)}
                    className="p-1 hover:text-red-400 text-slate-500 transition cursor-pointer shrink-0"
                    title="Retirer ce handicap"
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
        <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4 flex flex-col">
          <div className="border-b border-slate-800 pb-3 mb-3 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold font-orbitron text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-400" />
                CATALOGUE ATOUTS SWADE ({filteredEdgesCatalog.length})
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2 top-2.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Rechercher un atout..."
                  value={edgeSearch}
                  onChange={e => setEdgeSearch(e.target.value)}
                  className="w-full bg-[#070b10] border border-slate-700 rounded pl-7 pr-2 py-1 text-xs text-slate-200 placeholder-slate-500 font-mono-tech focus:border-cyan-500 focus:outline-none"
                />
              </div>
              <div className="relative">
                <Filter className="w-3.5 h-3.5 absolute left-2 top-2.5 text-slate-500" />
                <select
                  value={selectedEdgeCategory}
                  onChange={e => setSelectedEdgeCategory(e.target.value)}
                  className="w-full bg-[#070b10] border border-slate-700 rounded pl-7 pr-2 py-1 text-xs text-slate-200 font-mono-tech focus:border-cyan-500 focus:outline-none cursor-pointer"
                >
                  <option value="all">Toutes les Catégories</option>
                  <option value="Arrière-plan">Arrière-plan ({EDGES_CATALOG.filter(e => e.category === 'Arrière-plan').length})</option>
                  <option value="Combat">Combat ({EDGES_CATALOG.filter(e => e.category === 'Combat').length})</option>
                  <option value="Commandement">Commandement ({EDGES_CATALOG.filter(e => e.category === 'Commandement').length})</option>
                  <option value="Pouvoir">Pouvoir ({EDGES_CATALOG.filter(e => e.category === 'Pouvoir').length})</option>
                  <option value="Professionnel">Professionnel ({EDGES_CATALOG.filter(e => e.category === 'Professionnel').length})</option>
                  <option value="Social">Social ({EDGES_CATALOG.filter(e => e.category === 'Social').length})</option>
                  <option value="Étrange">Étrange ({EDGES_CATALOG.filter(e => e.category === 'Étrange').length})</option>
                  <option value="Légendaire">Légendaire ({EDGES_CATALOG.filter(e => e.category === 'Légendaire').length})</option>
                  <option value="cyber">Cyber / Interface Zero ({EDGES_CATALOG.filter(e => e.isCyber).length})</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto pr-1 flex-1">
            {filteredEdgesCatalog.length === 0 ? (
              <div className="text-center py-8 text-slate-500 font-mono-tech text-xs">
                Aucun atout ne correspond à votre filtre.
              </div>
            ) : (
              filteredEdgesCatalog.map(e => {
                const isSelected = character.edges.some(ce => ce.id === e.id || ce.name === e.name);

                return (
                  <div key={e.id} className="p-2.5 rounded border border-slate-800 bg-[#090e15] hover:border-slate-700 transition flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-bold text-white font-mono-tech">{e.name}</span>
                        <span className="text-[9px] uppercase px-1 rounded bg-slate-800/80 text-slate-400">
                          {e.category}
                        </span>
                        {e.isCyber && (
                          <span className="text-[9px] uppercase px-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                            Cyber
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-cyan-400/80 font-mono-tech mt-0.5">Prérequis : {e.requirements}</div>
                      <div className="text-[11px] text-slate-400 mt-1 leading-snug">{e.description}</div>
                    </div>
                    {isSelected ? (
                      <span className="text-[11px] text-cyan-400 font-mono-tech shrink-0 px-2 py-1 bg-cyan-950/40 rounded border border-cyan-800/40">
                        Actif
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleAddEdge(e)}
                        className="px-2.5 py-1 bg-cyan-950 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900 rounded text-xs font-mono-tech shrink-0 cursor-pointer transition active:scale-95"
                      >
                        + Ajouter
                      </button>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Hindrances Catalog */}
        <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4 flex flex-col">
          <div className="border-b border-slate-800 pb-3 mb-3 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold font-orbitron text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertOctagon className="w-4 h-4 text-red-400" />
                CATALOGUE HANDICAPS SWADE ({filteredHindrancesCatalog.length})
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2 top-2.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Rechercher un handicap..."
                  value={hindranceSearch}
                  onChange={e => setHindranceSearch(e.target.value)}
                  className="w-full bg-[#070b10] border border-slate-700 rounded pl-7 pr-2 py-1 text-xs text-slate-200 placeholder-slate-500 font-mono-tech focus:border-red-500 focus:outline-none"
                />
              </div>
              <div className="relative">
                <Filter className="w-3.5 h-3.5 absolute left-2 top-2.5 text-slate-500" />
                <select
                  value={selectedHindranceSeverity}
                  onChange={e => setSelectedHindranceSeverity(e.target.value)}
                  className="w-full bg-[#070b10] border border-slate-700 rounded pl-7 pr-2 py-1 text-xs text-slate-200 font-mono-tech focus:border-red-500 focus:outline-none cursor-pointer"
                >
                  <option value="all">Toutes les Gravités</option>
                  <option value="Majeur">Majeurs</option>
                  <option value="Mineur">Mineurs</option>
                  <option value="Mineur/Majeur">Modulables (Mineur / Majeur)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto pr-1 flex-1">
            {filteredHindrancesCatalog.length === 0 ? (
              <div className="text-center py-8 text-slate-500 font-mono-tech text-xs">
                Aucun handicap ne correspond à votre filtre.
              </div>
            ) : (
              filteredHindrancesCatalog.map(h => {
                const isSelected = character.hindrances.some(ch => ch.id === h.id || ch.name === h.name);

                return (
                  <div key={h.id} className="p-2.5 rounded border border-slate-800 bg-[#090e15] hover:border-slate-700 transition flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-bold text-white font-mono-tech">{h.name}</span>
                        <span className={`text-[9px] uppercase px-1 rounded font-mono-tech ${
                          h.severity === 'Majeur'
                            ? 'bg-red-950/80 text-red-300 border border-red-500/40'
                            : h.severity === 'Mineur'
                            ? 'bg-amber-950/80 text-amber-300 border border-amber-500/40'
                            : 'bg-purple-950/80 text-purple-300 border border-purple-500/40'
                        }`}>
                          {h.severity}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 leading-snug">{h.description}</div>
                    </div>
                    {isSelected ? (
                      <span className="text-[11px] text-red-400 font-mono-tech shrink-0 px-2 py-1 bg-red-950/40 rounded border border-red-800/40">
                        Actif
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleAddHindrance(h)}
                        className="px-2.5 py-1 bg-red-950/60 border border-red-500/50 text-red-300 hover:bg-red-900 rounded text-xs font-mono-tech shrink-0 cursor-pointer transition active:scale-95"
                      >
                        + Ajouter
                      </button>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
