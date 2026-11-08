import React, { useState } from 'react';
import { ArmorItem, CharacterSheetData, DroneItem, GearItem, WeaponItem } from '../../types/character';
import { ARMOR_CATALOG, DRONES_CATALOG, GEAR_CATALOG, WEAPONS_CATALOG } from '../../data/interfaceZeroData';
import { calculateDerivedStats } from '../../utils/characterGenerator';
import { Crosshair, Shield, Package, Radio, Plus, Trash2, Coins, Weight } from 'lucide-react';

interface EquipmentTabProps {
  character: CharacterSheetData;
  onChange: (updated: CharacterSheetData) => void;
}

export const EquipmentTab: React.FC<EquipmentTabProps> = ({ character, onChange }) => {
  const [subTab, setSubTab] = useState<'weapons' | 'armor' | 'gear' | 'drones'>('weapons');
  const derived = calculateDerivedStats(character);

  const handleAddWeapon = (weapon: WeaponItem) => {
    onChange({
      ...character,
      weapons: [...character.weapons, { ...weapon, id: `${weapon.id}_${Date.now()}` }]
    });
  };

  const handleRemoveWeapon = (index: number) => {
    const updated = [...character.weapons];
    updated.splice(index, 1);
    onChange({ ...character, weapons: updated });
  };

  const handleAddArmor = (armor: ArmorItem) => {
    onChange({
      ...character,
      armor: [...character.armor, { ...armor, id: `${armor.id}_${Date.now()}` }]
    });
  };

  const handleRemoveArmor = (index: number) => {
    const updated = [...character.armor];
    updated.splice(index, 1);
    onChange({ ...character, armor: updated });
  };

  const handleAddGear = (gear: GearItem) => {
    onChange({
      ...character,
      gear: [...character.gear, { ...gear, id: `${gear.id}_${Date.now()}`, quantity: 1 }]
    });
  };

  const handleRemoveGear = (index: number) => {
    const updated = [...character.gear];
    updated.splice(index, 1);
    onChange({ ...character, gear: updated });
  };

  const handleAddDrone = (drone: DroneItem) => {
    onChange({
      ...character,
      drones: [...character.drones, { ...drone, id: `${drone.id}_${Date.now()}` }]
    });
  };

  const handleRemoveDrone = (index: number) => {
    const updated = [...character.drones];
    updated.splice(index, 1);
    onChange({ ...character, drones: updated });
  };

  const handleCreditsChange = (newVal: number) => {
    onChange({ ...character, credits: Math.max(0, newVal) });
  };

  return (
    <div className="space-y-6">
      {/* Top Bar: Financials & Weight */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Solde Crédits */}
        <div className="bg-[#0b1017] border border-cyan-500/40 rounded-lg p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Coins className="w-5 h-5 text-amber-400" />
            <div>
              <div className="text-xs text-slate-400 font-mono-tech uppercase">Solde Bancaire Disponible</div>
              <div className="text-xl font-bold font-orbitron text-amber-400">
                {character.credits.toLocaleString()} cr
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => handleCreditsChange(character.credits - 500)}
              className="px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-300 hover:text-white"
            >
              -500
            </button>
            <button
              type="button"
              onClick={() => handleCreditsChange(character.credits + 500)}
              className="px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-cyan-300 hover:text-white"
            >
              +500
            </button>
          </div>
        </div>

        {/* Valeur inventaire */}
        <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-3.5 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-mono-tech uppercase">Valeur Matériel Porté</div>
            <div className="text-xl font-bold font-orbitron text-slate-200">
              {derived.totalGearCost.toLocaleString()} cr
            </div>
          </div>
          <Package className="w-5 h-5 text-cyan-400" />
        </div>

        {/* Poids / Encombrement */}
        <div className={`p-3.5 rounded-lg border flex items-center justify-between ${
          derived.isOverloaded ? 'bg-red-950/30 border-red-500/70' : 'bg-[#0b1017] border-slate-800'
        }`}>
          <div>
            <div className="text-xs text-slate-400 font-mono-tech uppercase">Charge Transportée</div>
            <div className={`text-xl font-bold font-orbitron ${derived.isOverloaded ? 'text-red-400' : 'text-slate-200'}`}>
              {derived.carriedWeight} kg <span className="text-xs font-normal text-slate-500">/ {derived.maxWeight} kg</span>
            </div>
          </div>
          <Weight className={`w-5 h-5 ${derived.isOverloaded ? 'text-red-400 animate-pulse' : 'text-slate-400'}`} />
        </div>
      </div>

      {/* Sub-tab Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-2">
        <button
          type="button"
          onClick={() => setSubTab('weapons')}
          className={`px-4 py-2 rounded-t-lg font-mono-tech text-xs uppercase flex items-center gap-2 transition cursor-pointer ${
            subTab === 'weapons'
              ? 'bg-cyan-950/60 border-t-2 border-cyan-400 text-cyan-300 font-bold'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
          }`}
        >
          <Crosshair className="w-4 h-4" /> Armes & Arsenal ({character.weapons.length})
        </button>
        <button
          type="button"
          onClick={() => setSubTab('armor')}
          className={`px-4 py-2 rounded-t-lg font-mono-tech text-xs uppercase flex items-center gap-2 transition cursor-pointer ${
            subTab === 'armor'
              ? 'bg-cyan-950/60 border-t-2 border-cyan-400 text-cyan-300 font-bold'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
          }`}
        >
          <Shield className="w-4 h-4" /> Armures & Protections ({character.armor.length})
        </button>
        <button
          type="button"
          onClick={() => setSubTab('gear')}
          className={`px-4 py-2 rounded-t-lg font-mono-tech text-xs uppercase flex items-center gap-2 transition cursor-pointer ${
            subTab === 'gear'
              ? 'bg-cyan-950/60 border-t-2 border-cyan-400 text-cyan-300 font-bold'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
          }`}
        >
          <Package className="w-4 h-4" /> Équipement & Électronique ({character.gear.length})
        </button>
        <button
          type="button"
          onClick={() => setSubTab('drones')}
          className={`px-4 py-2 rounded-t-lg font-mono-tech text-xs uppercase flex items-center gap-2 transition cursor-pointer ${
            subTab === 'drones'
              ? 'bg-cyan-950/60 border-t-2 border-cyan-400 text-cyan-300 font-bold'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
          }`}
        >
          <Radio className="w-4 h-4" /> Drones & Véhicules ({character.drones.length})
        </button>
      </div>

      {/* WEAPONS SECTION */}
      {subTab === 'weapons' && (
        <div className="space-y-4">
          <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4">
            <h4 className="text-xs font-bold font-orbitron text-cyan-400 uppercase tracking-wider mb-3">
              TABLEAU DE VOTRE ARSENAL ACTIF
            </h4>

            {character.weapons.length === 0 ? (
              <div className="text-center py-6 text-slate-500 font-mono-tech text-xs">
                Aucune arme équipée. Ajoutez-en depuis le tableau de référence ci-dessous.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono-tech text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 text-[11px] uppercase">
                      <th className="pb-2">Arme</th>
                      <th className="pb-2">Catégorie</th>
                      <th className="pb-2">Portée</th>
                      <th className="pb-2">Dégâts</th>
                      <th className="pb-2">Cadence (RoF)</th>
                      <th className="pb-2">Tirs</th>
                      <th className="pb-2">PA</th>
                      <th className="pb-2">Poids</th>
                      <th className="pb-2">Propriétés</th>
                      <th className="pb-2 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {character.weapons.map((w, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/40">
                        <td className="py-2.5 font-bold text-white">{w.name}</td>
                        <td className="py-2.5 text-slate-400">{w.category}</td>
                        <td className="py-2.5 text-slate-300">{w.range}</td>
                        <td className="py-2.5 text-amber-400 font-bold">{w.damage}</td>
                        <td className="py-2.5 text-slate-300">{w.rof}</td>
                        <td className="py-2.5 text-slate-300">{w.shots}</td>
                        <td className="py-2.5 text-cyan-400">{w.ap ? `PA ${w.ap}` : '-'}</td>
                        <td className="py-2.5 text-slate-400">{w.weight} kg</td>
                        <td className="py-2.5 text-slate-400 text-[11px]">{w.notes}</td>
                        <td className="py-2.5 text-right">
                          <button
                            type="button"
                            onClick={() => handleRemoveWeapon(idx)}
                            className="p-1 hover:text-red-400 text-slate-500 transition cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Reference Catalog */}
          <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4">
            <h4 className="text-xs font-bold font-orbitron text-white uppercase tracking-wider mb-3">
              TABLEAU DE RÉFÉRENCE DES ARMES D’INTERFACE ZERO
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {WEAPONS_CATALOG.map(w => (
                <div key={w.id} className="p-3 rounded-lg border border-slate-800 bg-[#090e15] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white font-mono-tech">{w.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono-tech">
                      {w.damage} | Portée: {w.range} | PA: {w.ap || 0} | {w.weight} kg
                    </div>
                    <div className="text-[10px] text-amber-400 font-mono-tech mt-0.5">{w.cost.toLocaleString()} cr</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAddWeapon(w)}
                    className="px-2.5 py-1 bg-cyan-950 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900 rounded text-xs font-mono-tech flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Ajouter
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ARMOR SECTION */}
      {subTab === 'armor' && (
        <div className="space-y-4">
          <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4">
            <h4 className="text-xs font-bold font-orbitron text-cyan-400 uppercase tracking-wider mb-3">
              PROTECTIONS & ARMURES PORTÉES
            </h4>

            {character.armor.length === 0 ? (
              <div className="text-center py-6 text-slate-500 font-mono-tech text-xs">
                Aucune protection corporelle équipée.
              </div>
            ) : (
              <div className="space-y-2">
                {character.armor.map((a, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-slate-800 bg-[#0d141e] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white font-mono-tech flex items-center gap-2">
                        <span>{a.name}</span>
                        <span className="text-[11px] text-amber-400 font-bold bg-amber-950/60 border border-amber-500/40 px-1.5 py-0.2 rounded">
                          +{a.armorBonus} Armure
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono-tech mt-0.5">
                        Couverture: {a.coverage} | Poids: {a.weight} kg | {a.cost.toLocaleString()} cr
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono-tech">{a.notes}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveArmor(idx)}
                      className="p-1 hover:text-red-400 text-slate-500 transition cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Reference Armor Catalog */}
          <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4">
            <h4 className="text-xs font-bold font-orbitron text-white uppercase tracking-wider mb-3">
              CATALOGUE DES ARMURES D’INTERFACE ZERO
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ARMOR_CATALOG.map(a => (
                <div key={a.id} className="p-3 rounded-lg border border-slate-800 bg-[#090e15] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white font-mono-tech">{a.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono-tech">
                      +{a.armorBonus} Armure ({a.coverage}) | {a.weight} kg
                    </div>
                    <div className="text-[10px] text-amber-400 font-mono-tech mt-0.5">{a.cost.toLocaleString()} cr</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAddArmor(a)}
                    className="px-2.5 py-1 bg-cyan-950 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900 rounded text-xs font-mono-tech flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Équiper
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* GEAR SECTION */}
      {subTab === 'gear' && (
        <div className="space-y-4">
          <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4">
            <h4 className="text-xs font-bold font-orbitron text-cyan-400 uppercase tracking-wider mb-3">
              INVENTAIRE DU MATÉRIEL & ACCESSOIRES
            </h4>

            {character.gear.length === 0 ? (
              <div className="text-center py-6 text-slate-500 font-mono-tech text-xs">
                Aucun équipement dans votre sacoche.
              </div>
            ) : (
              <div className="space-y-2">
                {character.gear.map((g, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-slate-800 bg-[#0d141e] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white font-mono-tech">{g.name}</div>
                      <div className="text-[11px] text-slate-400 font-mono-tech">
                        {g.category} | {g.weight} kg | {g.cost.toLocaleString()} cr
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono-tech">{g.notes}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveGear(idx)}
                      className="p-1 hover:text-red-400 text-slate-500 transition cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4">
            <h4 className="text-xs font-bold font-orbitron text-white uppercase tracking-wider mb-3">
              TABLEAU DES ACCESSOIRES CYBERPUNK
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {GEAR_CATALOG.map(g => (
                <div key={g.id} className="p-3 rounded-lg border border-slate-800 bg-[#090e15] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white font-mono-tech">{g.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono-tech">{g.notes}</div>
                    <div className="text-[10px] text-amber-400 font-mono-tech mt-0.5">{g.cost.toLocaleString()} cr ({g.weight} kg)</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAddGear(g)}
                    className="px-2.5 py-1 bg-cyan-950 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900 rounded text-xs font-mono-tech flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Prendre
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* DRONES SECTION */}
      {subTab === 'drones' && (
        <div className="space-y-4">
          <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4">
            <h4 className="text-xs font-bold font-orbitron text-cyan-400 uppercase tracking-wider mb-3">
              DRONES SOUS CONTRÔLE DE VOTRE TAP
            </h4>

            {character.drones.length === 0 ? (
              <div className="text-center py-6 text-slate-500 font-mono-tech text-xs">
                Aucun drone enregistré dans votre réseau.
              </div>
            ) : (
              <div className="space-y-3">
                {character.drones.map((d, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg border border-cyan-500/30 bg-[#0d141e] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white font-mono-tech">{d.name}</div>
                      <div className="text-[11px] text-slate-300 font-mono-tech mt-1">
                        Résistance: {d.toughness} ({d.armor} armure) | Allure: {d.pace} | Armes: {d.weapons}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono-tech mt-0.5">{d.notes}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveDrone(idx)}
                      className="p-1 hover:text-red-400 text-slate-500 transition cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-4">
            <h4 className="text-xs font-bold font-orbitron text-white uppercase tracking-wider mb-3">
              CATALOGUE DES DRONES AUTONOMES D’INTERFACE ZERO
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {DRONES_CATALOG.map(d => (
                <div key={d.id} className="p-3 rounded-lg border border-slate-800 bg-[#090e15] flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-white font-mono-tech">{d.name}</div>
                    <div className="text-[11px] text-cyan-300 font-mono-tech mt-1">Armes: {d.weapons}</div>
                    <div className="text-[10px] text-slate-400 font-mono-tech mt-1">{d.notes}</div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-amber-400 font-mono-tech font-bold">{d.cost.toLocaleString()} cr</span>
                    <button
                      type="button"
                      onClick={() => handleAddDrone(d)}
                      className="px-2.5 py-1 bg-cyan-950 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900 rounded text-xs font-mono-tech flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> Acquérir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
