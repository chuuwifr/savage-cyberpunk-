import React, { useState, useMemo } from 'react';
import { ArmorItem, CharacterSheetData, DroneItem, GearItem, WeaponItem } from '../../types/character';
import { COMPENDIUM_ITEMS, CompendiumItem } from '../../data/compendiumItems';
import { equipCompendiumItem } from '../../utils/compendiumAdapter';
import { calculateDerivedStats } from '../../utils/characterGenerator';
import { 
  Crosshair, 
  Shield, 
  Package, 
  Radio, 
  Plus, 
  Trash2, 
  Coins, 
  Weight, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  Zap, 
  SlidersHorizontal,
  Flame,
  Minus,
  Sparkles,
  ExternalLink,
  Cpu,
  Layers,
  X,
  Info,
  Maximize2
} from 'lucide-react';

interface EquipmentTabProps {
  character: CharacterSheetData;
  onChange: (updated: CharacterSheetData) => void;
}

export const EquipmentTab: React.FC<EquipmentTabProps> = ({ character, onChange }) => {
  const [viewMode, setViewMode] = useState<'compendium' | 'active_inventory'>('compendium');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'rarity' | 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc' | 'weight'>('rarity');
  const [autoDeductCredits, setAutoDeductCredits] = useState<boolean>(true);
  const [activeSystemView, setActiveSystemView] = useState<'both' | 'swade' | 'red'>('both');
  const [modalItem, setModalItem] = useState<CompendiumItem | null>(null);
  const [equipFeedback, setEquipFeedback] = useState<string | null>(null);

  const derived = calculateDerivedStats(character);

  // Extract all distinct manufacturers for filter dropdown
  const manufacturers = useMemo(() => {
    const set = new Set<string>();
    COMPENDIUM_ITEMS.forEach(it => {
      if (it.manufacturer) set.add(it.manufacturer);
    });
    return Array.from(set).sort();
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: COMPENDIUM_ITEMS.length,
      handguns: 0,
      longarms: 0,
      heavy: 0,
      melee: 0,
      weapon_mods: 0,
      cyberware: 0,
      armor: 0,
      drones_vehicles: 0,
      gear_tap: 0,
      pharma: 0
    };
    COMPENDIUM_ITEMS.forEach(it => {
      if (counts[it.category] !== undefined) {
        counts[it.category]++;
      }
    });
    return counts;
  }, []);

  // Filtered & Sorted Compendium Items
  const filteredCompendium = useMemo(() => {
    const list = COMPENDIUM_ITEMS.filter(it => {
      const matchCat = selectedCategory === 'all' || it.category === selectedCategory;
      const matchRarity = selectedRarity === 'all' || it.rarity === selectedRarity;
      const matchMfg = selectedManufacturer === 'all' || it.manufacturer === selectedManufacturer;
      
      const q = searchTerm.toLowerCase().trim();
      const matchSearch = q === '' ||
        it.name.toLowerCase().includes(q) ||
        it.description.toLowerCase().includes(q) ||
        (it.manufacturer && it.manufacturer.toLowerCase().includes(q)) ||
        (it.iz.notes && it.iz.notes.toLowerCase().includes(q)) ||
        (it.tags && it.tags.some(t => t.toLowerCase().includes(q)));

      return matchCat && matchRarity && matchMfg && matchSearch;
    });

    // Sorting
    const rarityWeights: Record<string, number> = {
      legendary: 5,
      very_rare: 4,
      rare: 3,
      uncommon: 2,
      common: 1
    };

    list.sort((a, b) => {
      if (sortBy === 'rarity') {
        const rA = rarityWeights[a.rarity] || 0;
        const rB = rarityWeights[b.rarity] || 0;
        if (rB !== rA) return rB - rA;
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'price-asc') return (a.iz.priceCredits || 0) - (b.iz.priceCredits || 0);
      if (sortBy === 'price-desc') return (b.iz.priceCredits || 0) - (a.iz.priceCredits || 0);
      if (sortBy === 'weight') return (b.iz.weightKg || 0) - (a.iz.weightKg || 0);
      return 0;
    });

    return list;
  }, [selectedCategory, selectedRarity, selectedManufacturer, searchTerm, sortBy]);

  // Handle Equipping from Compendium
  const handleEquip = (item: CompendiumItem) => {
    const { updatedChar, categoryType } = equipCompendiumItem(item, character, autoDeductCredits);
    onChange(updatedChar);

    const typeNames: Record<string, string> = {
      weapons: 'Armes actives',
      armor: 'Armures corporelles',
      implants: 'Cyberware & Implants',
      gear: 'Sacoche & Accessoires',
      drones: 'Drones connectés'
    };
    setEquipFeedback(`« ${item.name} » ajouté à vos ${typeNames[categoryType]} !`);
    setTimeout(() => setEquipFeedback(null), 3000);
  };

  // Inventory removal handlers
  const handleRemoveWeapon = (index: number) => {
    const updated = [...character.weapons];
    updated.splice(index, 1);
    onChange({ ...character, weapons: updated });
  };

  const handleRemoveArmor = (index: number) => {
    const updated = [...character.armor];
    updated.splice(index, 1);
    onChange({ ...character, armor: updated });
  };

  const handleUpdateGearQty = (index: number, delta: number) => {
    const updated = [...character.gear];
    const current = updated[index].quantity || 1;
    const newQty = current + delta;
    if (newQty <= 0) {
      updated.splice(index, 1);
    } else {
      updated[index] = { ...updated[index], quantity: newQty };
    }
    onChange({ ...character, gear: updated });
  };

  const handleRemoveGear = (index: number) => {
    const updated = [...character.gear];
    updated.splice(index, 1);
    onChange({ ...character, gear: updated });
  };

  const handleRemoveDrone = (index: number) => {
    const updated = [...character.drones];
    updated.splice(index, 1);
    onChange({ ...character, drones: updated });
  };

  const handleCreditsChange = (newVal: number) => {
    onChange({ ...character, credits: Math.max(0, newVal) });
  };

  // Rarity color mappings
  const getRarityBadge = (rarity: string, label: string) => {
    switch (rarity) {
      case 'legendary':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm shadow-amber-500/20">{label}</span>;
      case 'very_rare':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/50">{label}</span>;
      case 'rare':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/50">{label}</span>;
      case 'uncommon':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/50">{label}</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700">{label}</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Toast Feedback */}
      {equipFeedback && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0d1726] border-2 border-cyan-400 text-cyan-200 px-4 py-3 rounded-lg shadow-2xl shadow-cyan-950 flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-cyan-400" />
          <span className="font-mono-tech text-xs">{equipFeedback}</span>
        </div>
      )}

      {/* Top Banner: Financials, Equipment Value & Weight */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Solde Crédits */}
        <div className="bg-[#0b1017] border border-cyan-500/40 rounded-lg p-3.5 flex items-center justify-between shadow-lg shadow-cyan-950/20">
          <div className="flex items-center gap-2.5">
            <Coins className="w-5 h-5 text-amber-400" />
            <div>
              <div className="text-[10px] text-slate-400 font-mono-tech uppercase tracking-wider">Solde Malmart Bank</div>
              <div className="text-xl font-bold font-orbitron text-amber-400">
                {character.credits.toLocaleString()} <span className="text-xs text-amber-500/80">cr</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => handleCreditsChange(character.credits - 500)}
              className="px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-300 hover:text-white cursor-pointer"
              title="Retirer 500 cr"
            >
              -500
            </button>
            <button
              type="button"
              onClick={() => handleCreditsChange(character.credits + 500)}
              className="px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-cyan-300 hover:text-white cursor-pointer"
              title="Ajouter 500 cr"
            >
              +500
            </button>
          </div>
        </div>

        {/* Valeur Tech Portée */}
        <div className="bg-[#0b1017] border border-slate-800 rounded-lg p-3.5 flex items-center justify-between">
          <div>
            <div className="text-[10px] text-slate-400 font-mono-tech uppercase tracking-wider">Valeur Tech Équipée</div>
            <div className="text-xl font-bold font-orbitron text-slate-200">
              {derived.totalGearCost.toLocaleString()} <span className="text-xs text-slate-500">cr</span>
            </div>
          </div>
          <Package className="w-5 h-5 text-cyan-400" />
        </div>

        {/* Charge & Encombrement */}
        <div className={`p-3.5 rounded-lg border flex items-center justify-between transition ${
          derived.isOverloaded ? 'bg-red-950/40 border-red-500 shadow-lg shadow-red-950/50' : 'bg-[#0b1017] border-slate-800'
        }`}>
          <div>
            <div className="text-[10px] text-slate-400 font-mono-tech uppercase tracking-wider flex items-center gap-1.5">
              <span>Charge & Encombrement</span>
              {derived.isOverloaded && (
                <span className="text-[10px] text-red-400 font-bold flex items-center gap-0.5">
                  <AlertTriangle className="w-3 h-3 inline" /> ENCOMBRÉ (-2)
                </span>
              )}
            </div>
            <div className={`text-xl font-bold font-orbitron ${derived.isOverloaded ? 'text-red-400' : 'text-slate-200'}`}>
              {derived.carriedWeight} <span className="text-xs font-normal text-slate-500">/ {derived.maxWeight} kg</span>
            </div>
          </div>
          <Weight className={`w-5 h-5 ${derived.isOverloaded ? 'text-red-400 animate-pulse' : 'text-slate-400'}`} />
        </div>
      </div>

      {/* Main Switcher: Tech Compendium Browser VS Active Inventory */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode('compendium')}
            className={`px-4 py-2 rounded-lg font-mono-tech text-xs uppercase flex items-center gap-2 transition cursor-pointer ${
              viewMode === 'compendium'
                ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30'
                : 'bg-[#090e15] border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Catalogue Tech Compendium (325+)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('active_inventory')}
            className={`px-4 py-2 rounded-lg font-mono-tech text-xs uppercase flex items-center gap-2 transition cursor-pointer ${
              viewMode === 'active_inventory'
                ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30'
                : 'bg-[#090e15] border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Inventaire Porté ({character.weapons.length + character.armor.length + character.gear.length + character.drones.length})</span>
          </button>
        </div>

        {/* Global Toolbar Options */}
        <div className="flex items-center gap-4 text-xs font-mono-tech">
          <label className="flex items-center gap-2 cursor-pointer text-slate-300 select-none">
            <input
              type="checkbox"
              checked={autoDeductCredits}
              onChange={(e) => setAutoDeductCredits(e.target.checked)}
              className="rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-cyan-500"
            />
            <span>Déduire crédits à l'achat</span>
          </label>
          <a
            href="https://chuuwifr.github.io/cyberpunk-catalogue/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 hover:underline"
            title="Ouvrir la page source originale"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden md:inline">cyberpunk-catalogue en direct</span>
          </a>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 1. TECH COMPENDIUM BROWSER (MERGED WITH USER GITHUB CATALOGUE) */}
      {/* ============================================================== */}
      {viewMode === 'compendium' && (
        <div className="space-y-4">
          {/* Filter Bar: Search, Manufacturer & Sort */}
          <div className="bg-[#090e15] border border-slate-800 rounded-lg p-3.5 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-cyan-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Recherche rapide (nom, corpo, dégâts, smartgun, AP...)"
                  className="w-full bg-[#060a0f] border border-slate-700 rounded-md pl-9 pr-8 py-2 text-xs text-slate-200 font-mono-tech placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs cursor-pointer"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Manufacturer filter */}
              <div>
                <select
                  value={selectedManufacturer}
                  onChange={(e) => setSelectedManufacturer(e.target.value)}
                  className="w-full bg-[#060a0f] border border-slate-700 rounded-md px-3 py-2 text-xs text-slate-200 font-mono-tech focus:outline-none focus:border-cyan-400 cursor-pointer"
                >
                  <option value="all">Tous les fabricants / Corpos ({manufacturers.length})</option>
                  {manufacturers.map(mfg => (
                    <option key={mfg} value={mfg}>{mfg}</option>
                  ))}
                </select>
              </div>

              {/* Sort by */}
              <div className="flex items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full bg-[#060a0f] border border-slate-700 rounded-md px-3 py-2 text-xs text-slate-200 font-mono-tech focus:outline-none focus:border-cyan-400 cursor-pointer"
                >
                  <option value="rarity">Trier : Rareté (Légendaire d'abord)</option>
                  <option value="name-asc">Trier : Nom (A-Z)</option>
                  <option value="name-desc">Trier : Nom (Z-A)</option>
                  <option value="price-asc">Trier : Prix Crédits (Croissant)</option>
                  <option value="price-desc">Trier : Prix Crédits (Décroissant)</option>
                  <option value="weight">Trier : Poids (Plus lourd)</option>
                </select>

                {/* System View mode toggle */}
                <div className="flex rounded-md border border-slate-700 overflow-hidden shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveSystemView('both')}
                    className={`px-2 py-1 text-[11px] font-mono-tech ${activeSystemView === 'both' ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
                    title="Afficher profils SWADE & Cyberpunk RED"
                  >
                    Tous
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSystemView('swade')}
                    className={`px-2 py-1 text-[11px] font-mono-tech ${activeSystemView === 'swade' ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
                    title="Afficher profil Savage Worlds / Interface Zéro"
                  >
                    SWADE
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSystemView('red')}
                    className={`px-2 py-1 text-[11px] font-mono-tech ${activeSystemView === 'red' ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
                    title="Afficher profil Cyberpunk RED"
                  >
                    RED
                  </button>
                </div>
              </div>
            </div>

            {/* Category Pills matching chuuwifr.github.io/cyberpunk-catalogue */}
            <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-800/80">
              {[
                { id: 'all', label: 'Tout le Matériel', count: categoryCounts.all },
                { id: 'handguns', label: 'Armes de poing', count: categoryCounts.handguns },
                { id: 'longarms', label: 'Fusils & Mitraillettes', count: categoryCounts.longarms },
                { id: 'heavy', label: 'Armes Lourdes & Exotiques', count: categoryCounts.heavy },
                { id: 'melee', label: 'Mêlée & Cyber-lames', count: categoryCounts.melee },
                { id: 'weapon_mods', label: 'Accessoires & Mods', count: categoryCounts.weapon_mods },
                { id: 'cyberware', label: 'Cybermatériel & Implants', count: categoryCounts.cyberware },
                { id: 'armor', label: 'Armures & Protections', count: categoryCounts.armor },
                { id: 'drones_vehicles', label: 'Drones & Véhicules', count: categoryCounts.drones_vehicles },
                { id: 'gear_tap', label: 'Netrunning & T-APP', count: categoryCounts.gear_tap },
                { id: 'pharma', label: 'Drogues & Soins', count: categoryCounts.pharma },
              ].map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 rounded-md text-xs font-mono-tech flex items-center gap-1.5 transition cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/30'
                      : 'bg-[#0d141e] border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`px-1.5 py-0.2 rounded text-[10px] ${selectedCategory === cat.id ? 'bg-black/30 text-black font-bold' : 'bg-slate-900 text-slate-400'}`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Rarity Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/60 text-xs font-mono-tech">
              <span className="text-slate-400 text-[11px] uppercase tracking-wider">Rareté :</span>
              {[
                { id: 'all', label: 'Toutes' },
                { id: 'common', label: 'Commun', color: 'hover:border-slate-500' },
                { id: 'uncommon', label: 'Peu commun', color: 'hover:border-emerald-500' },
                { id: 'rare', label: 'Rare', color: 'hover:border-blue-500' },
                { id: 'very_rare', label: 'Très Rare', color: 'hover:border-purple-500' },
                { id: 'legendary', label: 'Exotique / Légendaire', color: 'hover:border-amber-500' }
              ].map(r => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setSelectedRarity(r.id)}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-mono-tech transition cursor-pointer ${
                    selectedRarity === r.id
                      ? 'bg-white text-black font-bold'
                      : `bg-[#060a0f] border border-slate-800 text-slate-400 hover:text-white ${r.color}`
                  }`}
                >
                  {r.label}
                </button>
              ))}
              <span className="ml-auto text-[11px] text-slate-500">
                {filteredCompendium.length} / {COMPENDIUM_ITEMS.length} matériels
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCompendium.map(item => {
              const canAfford = !autoDeductCredits || character.credits >= (item.iz.priceCredits || 0);

              return (
                <div
                  key={item.id}
                  className="bg-[#0b1017] border border-slate-800/90 rounded-lg p-4 flex flex-col justify-between hover:border-slate-700 transition relative overflow-hidden group shadow-lg"
                >
                  {/* Top Rarity Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${
                    item.rarity === 'legendary' ? 'bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600' :
                    item.rarity === 'very_rare' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                    item.rarity === 'rare' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                    item.rarity === 'uncommon' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                    'bg-slate-700'
                  }`} />

                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {getRarityBadge(item.rarity, item.rarityLabel)}
                        <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400">
                          {item.categoryLabel}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold font-orbitron text-amber-400">
                          {item.iz.priceCredits ? `${item.iz.priceCredits.toLocaleString()} cr` : `${item.red?.priceEb?.toLocaleString()} €$`}
                        </span>
                      </div>
                    </div>

                    {/* Image / Icon Banner */}
                    <div className="relative w-full h-32 rounded bg-[#060a0f] border border-slate-800/80 mb-3 overflow-hidden flex items-center justify-center">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-contain p-2 transition duration-300 group-hover:scale-105"
                          onError={(e) => {
                            // Fallback on image load error (due to wikia CORS or broken link)
                            (e.target as HTMLElement).style.display = 'none';
                            const parent = (e.target as HTMLElement).parentElement;
                            if (parent) {
                              const fallback = parent.querySelector('.fallback-placeholder');
                              if (fallback) (fallback as HTMLElement).style.display = 'flex';
                            }
                          }}
                        />
                      ) : null}
                      <div className="fallback-placeholder hidden flex-col items-center justify-center text-slate-600">
                        <Crosshair className="w-8 h-8 mb-1 text-slate-500" />
                        <span className="text-[10px] font-mono-tech">{item.categoryLabel}</span>
                      </div>

                      {/* Manufacturer tag badge */}
                      <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono-tech text-cyan-300 border border-cyan-500/30">
                        {item.manufacturer}
                      </span>
                    </div>

                    {/* Item Title & Origin */}
                    <h3 className="text-sm font-bold font-orbitron text-white leading-tight mb-1">
                      {item.name}
                    </h3>
                    <div className="text-[10px] font-mono-tech text-slate-400 mb-2">
                      Origine : <span className="text-slate-300">{item.origin}</span>
                    </div>

                    {/* Flavor Quote */}
                    {item.flavorQuote && (
                      <p className="text-[10px] italic text-slate-400 font-mono-tech mb-2.5 bg-[#070b10] p-1.5 rounded border border-slate-900 border-l-2 border-l-cyan-400">
                        {item.flavorQuote}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-[11px] text-slate-300 font-mono-tech leading-relaxed mb-3 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Technical Profile Box (SWADE // Interface Zéro) */}
                    {(activeSystemView === 'both' || activeSystemView === 'swade') && (
                      <div className="bg-[#080d14] border border-cyan-500/30 rounded p-2 mb-2 font-mono-tech text-[10px]">
                        <div className="text-cyan-400 font-bold text-[9px] uppercase tracking-wider mb-1 flex items-center justify-between">
                          <span>SWADE // INTERFACE ZÉRO 2.0</span>
                          {item.iz.quality && <span className="text-amber-400">{item.iz.quality}</span>}
                        </div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-slate-300">
                          {item.iz.damage && (
                            <div>Dégâts : <strong className="text-amber-400">{item.iz.damage}</strong></div>
                          )}
                          {item.iz.range && (
                            <div>Portée : <span className="text-slate-200">{item.iz.range}</span></div>
                          )}
                          {item.iz.ap !== undefined && (
                            <div>Pénétration : <strong className="text-cyan-400">{item.iz.ap ? `PA ${item.iz.ap}` : 'Aucune'}</strong></div>
                          )}
                          {item.iz.armorBonus !== undefined && (
                            <div>Armure : <strong className="text-emerald-400">+{item.iz.armorBonus}</strong></div>
                          )}
                          {item.iz.cybertension !== undefined && item.iz.cybertension > 0 && (
                            <div>Cybertension : <strong className="text-purple-400">{item.iz.cybertension} pt(s)</strong></div>
                          )}
                          {item.iz.weightKg !== undefined && (
                            <div>Poids : <span className="text-slate-400">{item.iz.weightKg} kg</span></div>
                          )}
                        </div>
                        {item.iz.notes && (
                          <div className="mt-1 text-[9px] text-slate-400 border-t border-slate-800 pt-1">
                            {item.iz.notes}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Technical Profile Box (Cyberpunk RED) */}
                    {(activeSystemView === 'both' || activeSystemView === 'red') && item.red && (
                      <div className="bg-[#0e0a12] border border-red-500/30 rounded p-2 mb-2 font-mono-tech text-[10px]">
                        <div className="text-red-400 font-bold text-[9px] uppercase tracking-wider mb-1 flex items-center justify-between">
                          <span>CYBERPUNK RED REF</span>
                          <span>{item.red.priceEb?.toLocaleString()} €$</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-slate-300">
                          {item.red.damage && (
                            <div>Dégâts : <strong className="text-red-300">{item.red.damage}</strong></div>
                          )}
                          {item.red.rof && (
                            <div>RoF : <span className="text-slate-300">{item.red.rof}</span></div>
                          )}
                          {item.red.magazine && (
                            <div>Chargeur : <span className="text-slate-300">{item.red.magazine} tirs</span></div>
                          )}
                          {item.red.sp && (
                            <div>SP : <strong className="text-emerald-300">{item.red.sp}</strong></div>
                          )}
                          {item.red.humanityLoss && (
                            <div>Perte Hum : <span className="text-purple-300">{item.red.humanityLoss}</span></div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.slice(0, 4).map((t, i) => (
                          <span key={i} className="px-1.5 py-0.2 rounded bg-[#060a0f] border border-slate-800 text-[9px] text-slate-400 font-mono-tech">
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions: Details & Equip Button */}
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => setModalItem(item)}
                      className="px-2.5 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded text-xs font-mono-tech flex items-center gap-1 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" /> Fiche
                    </button>
                    <button
                      type="button"
                      onClick={() => handleEquip(item)}
                      className={`px-3 py-1.5 rounded text-xs font-mono-tech font-bold flex items-center gap-1.5 cursor-pointer transition ${
                        canAfford
                          ? 'bg-cyan-950 border border-cyan-400 text-cyan-300 hover:bg-cyan-900 shadow-md shadow-cyan-950/40'
                          : 'bg-slate-900 border border-slate-800 text-slate-500 hover:text-slate-400'
                      }`}
                    >
                      <Plus className="w-4 h-4" /> Équiper
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCompendium.length === 0 && (
            <div className="text-center py-12 text-slate-500 font-mono-tech text-sm border border-dashed border-slate-800 rounded-lg">
              Aucun matériel ne correspond aux filtres actifs dans le Tech Compendium.
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* 2. ACTIVE INVENTORY TAB (WEAPONS, ARMOR, GEAR, DRONES)        */}
      {/* ============================================================== */}
      {viewMode === 'active_inventory' && (
        <div className="space-y-6">
          {/* Active Arsenal */}
          <div className="bg-[#0b1017] border border-cyan-500/40 rounded-lg p-4">
            <h4 className="text-xs font-bold font-orbitron text-cyan-400 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Crosshair className="w-4 h-4" /> ARSENAL ÉQUIPÉ ({character.weapons.length})
              </span>
              <button
                type="button"
                onClick={() => setViewMode('compendium')}
                className="text-[11px] text-cyan-400 hover:underline cursor-pointer flex items-center gap-1"
              >
                + Ajouter depuis le Compendium
              </button>
            </h4>

            {character.weapons.length === 0 ? (
              <div className="text-center py-6 text-slate-500 font-mono-tech text-xs border border-dashed border-slate-800 rounded">
                Aucune arme dans l'arsenal. Choisissez un modèle dans le Compendium.
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
                      <th className="pb-2">Cadence</th>
                      <th className="pb-2">Tirs</th>
                      <th className="pb-2">PA</th>
                      <th className="pb-2">Poids</th>
                      <th className="pb-2">Spécifications</th>
                      <th className="pb-2 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {character.weapons.map((w, idx) => (
                      <tr key={w.id || idx} className="hover:bg-slate-900/40">
                        <td className="py-2.5 font-bold text-white flex items-center gap-2">
                          {w.imageUrl && (
                            <img src={w.imageUrl} alt="" className="w-6 h-6 object-contain rounded bg-slate-950" />
                          )}
                          <span>{w.name}</span>
                        </td>
                        <td className="py-2.5 text-slate-400">{w.category}</td>
                        <td className="py-2.5 text-slate-300">{w.range}</td>
                        <td className="py-2.5 text-amber-400 font-bold">{w.damage}</td>
                        <td className="py-2.5 text-slate-300">{w.rof}</td>
                        <td className="py-2.5 text-slate-300">{w.shots}</td>
                        <td className="py-2.5 text-cyan-400">{w.ap ? `PA ${w.ap}` : '-'}</td>
                        <td className="py-2.5 text-slate-400">{w.weight} kg</td>
                        <td className="py-2.5 text-slate-400 text-[11px] max-w-xs truncate" title={w.notes}>
                          {w.notes}
                        </td>
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

          {/* Active Armor */}
          <div className="bg-[#0b1017] border border-emerald-500/40 rounded-lg p-4">
            <h4 className="text-xs font-bold font-orbitron text-emerald-400 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" /> ARMURES & PROTECTIONS PORTÉES ({character.armor.length})
              </span>
              <span className="text-[11px] font-mono-tech text-amber-400">
                Bonus Total : +{derived.toughnessArmor} Armure
              </span>
            </h4>

            {character.armor.length === 0 ? (
              <div className="text-center py-6 text-slate-500 font-mono-tech text-xs border border-dashed border-slate-800 rounded">
                Aucune armure équipée.
              </div>
            ) : (
              <div className="space-y-2">
                {character.armor.map((a, idx) => (
                  <div key={a.id || idx} className="p-3 rounded-lg border border-slate-800 bg-[#0d141e] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white font-mono-tech flex items-center gap-2">
                        <span>{a.name}</span>
                        <span className="text-[11px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/40 px-1.5 py-0.2 rounded">
                          +{a.armorBonus} Armure
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono-tech mt-1">
                        Couverture : {a.coverage} | Poids : {a.weight} kg | {a.cost.toLocaleString()} cr
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono-tech mt-0.5">{a.notes}</div>
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

          {/* Active Gear / Consumables */}
          <div className="bg-[#0b1017] border border-amber-500/40 rounded-lg p-4">
            <h4 className="text-xs font-bold font-orbitron text-amber-400 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Package className="w-4 h-4" /> MATÉRIEL, MODS & DROGUES EN SACOCHE ({character.gear.length})
              </span>
            </h4>

            {character.gear.length === 0 ? (
              <div className="text-center py-6 text-slate-500 font-mono-tech text-xs border border-dashed border-slate-800 rounded">
                Aucun équipement ou consommable dans le sac.
              </div>
            ) : (
              <div className="space-y-2">
                {character.gear.map((g, idx) => {
                  const qty = g.quantity || 1;
                  const totalWeight = Math.round(g.weight * qty * 10) / 10;
                  return (
                    <div key={g.id || idx} className="p-3 rounded-lg border border-slate-800 bg-[#0d141e] flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-white font-mono-tech flex items-center gap-2">
                          <span>{g.name}</span>
                          <span className="text-[10px] text-slate-400 bg-slate-900 border border-slate-800 px-1.5 py-0.2 rounded">
                            {g.category}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-300 font-mono-tech mt-0.5">
                          Poids: {g.weight} kg (Total: {totalWeight} kg) | Prix: {g.cost.toLocaleString()} cr/u
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono-tech mt-0.5 truncate">{g.notes}</div>
                      </div>

                      {/* Quantity & Actions */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-[#060a0f] border border-slate-700 rounded px-1">
                          <button
                            type="button"
                            onClick={() => handleUpdateGearQty(idx, -1)}
                            className="p-1 text-slate-400 hover:text-white cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold font-mono-tech text-amber-400">
                            x{qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleUpdateGearQty(idx, 1)}
                            className="p-1 text-slate-400 hover:text-white cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveGear(idx)}
                          className="p-1.5 hover:text-red-400 text-slate-500 transition cursor-pointer"
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

          {/* Active Drones */}
          <div className="bg-[#0b1017] border border-purple-500/40 rounded-lg p-4">
            <h4 className="text-xs font-bold font-orbitron text-purple-400 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Radio className="w-4 h-4" /> DRONES & VÉHICULES CONNECTÉS ({character.drones.length})
              </span>
            </h4>

            {character.drones.length === 0 ? (
              <div className="text-center py-6 text-slate-500 font-mono-tech text-xs border border-dashed border-slate-800 rounded">
                Aucun drone ou véhicule connecté au TAP.
              </div>
            ) : (
              <div className="space-y-2">
                {character.drones.map((d, idx) => (
                  <div key={d.id || idx} className="p-3 rounded-lg border border-purple-500/30 bg-[#0d141e] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white font-mono-tech">{d.name}</div>
                      <div className="text-[11px] text-slate-300 font-mono-tech mt-1">
                        Résistance: {d.toughness} ({d.armor} armure) | Allure: {d.pace} | Armes: {d.weapons}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono-tech mt-0.5">{d.notes}</div>
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
        </div>
      )}

      {/* ============================================================== */}
      {/* 3. MODAL FICHE DÉTAILLÉE DU COMPENDIUM                        */}
      {/* ============================================================== */}
      {modalItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0b1017] border-2 border-cyan-500/60 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
            <button
              type="button"
              onClick={() => setModalItem(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded bg-slate-900 border border-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {getRarityBadge(modalItem.rarity, modalItem.rarityLabel)}
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-xs font-mono-tech text-slate-300">
                  {modalItem.categoryLabel}
                </span>
                <span className="text-xs font-mono-tech text-cyan-400 ml-auto">
                  {modalItem.manufacturer}
                </span>
              </div>

              <h2 className="text-xl font-bold font-orbitron text-white">
                {modalItem.name}
              </h2>

              {modalItem.imageUrl && (
                <div className="w-full h-48 bg-[#060a0f] rounded-lg border border-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={modalItem.imageUrl}
                    alt={modalItem.name}
                    className="max-h-full max-w-full object-contain p-4"
                  />
                </div>
              )}

              {modalItem.flavorQuote && (
                <div className="bg-[#070b10] border-l-4 border-l-cyan-400 p-3 rounded text-xs italic font-mono-tech text-cyan-200">
                  {modalItem.flavorQuote}
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold font-orbitron text-slate-400 uppercase mb-1">
                  Description Technique
                </h4>
                <p className="text-xs text-slate-300 font-mono-tech leading-relaxed">
                  {modalItem.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {/* SWADE Profile */}
                <div className="bg-[#080d14] border border-cyan-500/30 rounded-lg p-3 font-mono-tech text-xs">
                  <div className="text-cyan-400 font-bold text-xs uppercase mb-2">
                    Profil Savage Worlds // Interface Zéro 2.0
                  </div>
                  <div className="space-y-1 text-slate-300">
                    <div>Prix : <strong className="text-amber-400">{modalItem.iz.priceCredits?.toLocaleString()} cr</strong></div>
                    {modalItem.iz.quality && <div>Qualité : <span>{modalItem.iz.quality}</span></div>}
                    {modalItem.iz.damage && <div>Dégâts : <strong className="text-amber-400">{modalItem.iz.damage}</strong></div>}
                    {modalItem.iz.range && <div>Portée : <span>{modalItem.iz.range}</span></div>}
                    {modalItem.iz.ap !== undefined && <div>PA (Armure) : <strong className="text-cyan-400">{modalItem.iz.ap ? `PA ${modalItem.iz.ap}` : 'Aucune'}</strong></div>}
                    {modalItem.iz.armorBonus !== undefined && <div>Armure : <strong className="text-emerald-400">+{modalItem.iz.armorBonus}</strong></div>}
                    {modalItem.iz.cybertension !== undefined && <div>Cybertension : <strong className="text-purple-400">{modalItem.iz.cybertension} pt(s)</strong></div>}
                    {modalItem.iz.weightKg !== undefined && <div>Poids : <span>{modalItem.iz.weightKg} kg</span></div>}
                    {modalItem.iz.notes && <div className="mt-2 text-[11px] text-slate-400 border-t border-slate-800 pt-1">{modalItem.iz.notes}</div>}
                  </div>
                </div>

                {/* Cyberpunk RED Profile */}
                {modalItem.red && (
                  <div className="bg-[#0e0a12] border border-red-500/30 rounded-lg p-3 font-mono-tech text-xs">
                    <div className="text-red-400 font-bold text-xs uppercase mb-2">
                      Profil Cyberpunk RED
                    </div>
                    <div className="space-y-1 text-slate-300">
                      <div>Prix : <strong className="text-red-300">{modalItem.red.priceEb?.toLocaleString()} €$</strong></div>
                      {modalItem.red.availability && <div>Disponibilité : <span>{modalItem.red.availability}</span></div>}
                      {modalItem.red.damage && <div>Dégâts : <strong className="text-red-300">{modalItem.red.damage}</strong></div>}
                      {modalItem.red.rof && <div>RoF (Cadence) : <span>{modalItem.red.rof}</span></div>}
                      {modalItem.red.magazine && <div>Chargeur : <span>{modalItem.red.magazine} balles</span></div>}
                      {modalItem.red.sp && <div>SP (Armure) : <strong className="text-emerald-300">{modalItem.red.sp}</strong></div>}
                      {modalItem.red.humanityLoss && <div>Perte d'Humanité : <span className="text-purple-300">{modalItem.red.humanityLoss}</span></div>}
                    </div>
                  </div>
                )}
              </div>

              {/* Tags */}
              {modalItem.tags && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {modalItem.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono-tech">
                      #{t}
                    </span>
                  ))}
                </div>
              )}

              {/* Bottom Equip Action */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalItem(null)}
                  className="px-4 py-2 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded text-xs font-mono-tech cursor-pointer"
                >
                  Fermer
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleEquip(modalItem);
                    setModalItem(null);
                  }}
                  className="px-5 py-2 bg-cyan-950 border border-cyan-400 text-cyan-300 hover:bg-cyan-900 rounded text-xs font-mono-tech font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-950/50"
                >
                  <Plus className="w-4 h-4" /> Équiper ce Matériel dans la Fiche
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
