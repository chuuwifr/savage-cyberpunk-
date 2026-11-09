import React, { useState } from 'react';
import { CharacterSheetData } from '../types/character';
import { generateFillableCharacterPdf, downloadPdfBlob } from '../utils/pdfExport';
import {
  Cpu,
  FileDown,
  Dices,
  Plus,
  Save,
  Check,
  FolderArchive,
  Layers,
  Shield,
  Crosshair,
  User,
  Sparkles,
  Coins,
  TrendingUp
} from 'lucide-react';

interface HeaderProps {
  characters: CharacterSheetData[];
  activeCharacter: CharacterSheetData;
  onSelectCharacter: (id: string) => void;
  onCreateNew: () => void;
  onOpenRandomModal: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenBankModal?: () => void;
  onOpenAdvancementModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  characters,
  activeCharacter,
  onSelectCharacter,
  onCreateNew,
  onOpenRandomModal,
  activeTab,
  onTabChange,
  onOpenBankModal,
  onOpenAdvancementModal
}) => {
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportSuccess, setExportSuccess] = useState<boolean>(false);

  const handleExportPdf = async () => {
    try {
      setIsExporting(true);
      const pdfBytes = await generateFillableCharacterPdf(activeCharacter);
      const filename = `Fiche_SWADE_IZ_${activeCharacter.alias.replace(/\s+/g, '_')}_${activeCharacter.name.replace(/\s+/g, '_')}.pdf`;
      downloadPdfBlob(pdfBytes, filename);
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to export fillable PDF:', err);
      alert('Erreur lors de la génération du PDF. Consultez la console.');
    } finally {
      setIsExporting(false);
    }
  };

  const navTabs = [
    { id: 'concept', label: 'Archétype & Identité', icon: User },
    { id: 'stats', label: 'Attributs & Compétences', icon: Cpu },
    { id: 'implants', label: 'Cyber-Matos & Implants', icon: Sparkles, count: activeCharacter.implants.length },
    { id: 'equipment', label: 'Équipement & Armes', icon: Crosshair },
    { id: 'edges', label: 'Atouts & Handicaps', icon: Shield },
    { id: 'builds', label: 'Sauvegardes & Builds', icon: FolderArchive, count: characters.length }
  ];

  return (
    <header className="border-b border-cyan-500/30 bg-[#070b10] sticky top-0 z-40 backdrop-blur-md">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Brand & HUD Status */}
        <div className="flex items-center gap-3">
          <div className="relative p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/60 shadow-lg shadow-cyan-500/20 text-cyan-400">
            <Cpu className="w-6 h-6 animate-pulse" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold font-orbitron text-white tracking-wider flex items-center gap-1.5">
                <span className="text-cyan-400">INTERFACE</span> ZERO
                <span className="text-xs bg-cyan-950 border border-cyan-500/50 text-cyan-300 px-1.5 py-0.2 rounded font-mono-tech">
                  SWADE
                </span>
              </h1>
            </div>
            <div className="text-[11px] text-slate-400 font-mono-tech flex items-center gap-2">
              <span className="text-emerald-400">● SYSTÈME EN LIGNE</span>
              <span>// GÉNÉRATEUR CYBERPUNK 2.0 / 3.0</span>
            </div>
          </div>
        </div>

        {/* Central Active Build Switcher */}
        <div className="flex items-center gap-2 bg-[#0b1017] border border-slate-800 rounded-lg p-1.5">
          <span className="text-xs font-mono-tech text-slate-400 pl-2">Build Actif :</span>
          <select
            value={activeCharacter.id}
            onChange={e => onSelectCharacter(e.target.value)}
            className="bg-[#0f1722] border border-slate-700 rounded px-2.5 py-1 text-xs text-cyan-300 font-mono-tech font-bold focus:outline-none focus:border-cyan-400 max-w-[210px] truncate"
          >
            {characters.map(c => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.alias})
              </option>
            ))}
          </select>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Malmart Bank Balance Quick Access */}
          {onOpenBankModal && (
            <button
              type="button"
              onClick={onOpenBankModal}
              className="px-3 py-1.5 bg-[#0b1017] border border-amber-500/50 hover:border-amber-400 text-amber-400 rounded text-xs font-mono-tech font-bold flex items-center gap-1.5 shadow-sm shadow-amber-500/10 transition cursor-pointer"
              title="Gérer et personnaliser le solde Malmart Bank"
            >
              <Coins className="w-4 h-4 text-amber-400" />
              <span>{activeCharacter.credits.toLocaleString()} cr</span>
            </button>
          )}

          {/* SWADE Rank & Advances Quick Access */}
          {onOpenAdvancementModal && (
            <button
              type="button"
              onClick={onOpenAdvancementModal}
              className="px-3 py-1.5 bg-[#0b1017] border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 rounded text-xs font-mono-tech font-bold flex items-center gap-1.5 shadow-sm shadow-cyan-500/10 transition cursor-pointer"
              title="Gérer la progression et les avancées SWADE"
            >
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>{activeCharacter.rank} ({activeCharacter.advances || 0})</span>
            </button>
          )}

          {/* Quick random generator */}
          <button
            type="button"
            onClick={onOpenRandomModal}
            className="px-3 py-1.5 bg-cyan-950 border border-cyan-500/50 hover:bg-cyan-900 text-cyan-300 rounded text-xs font-mono-tech uppercase font-bold flex items-center gap-1.5 shadow-sm shadow-cyan-500/20 transition cursor-pointer"
            title="Ouvrir la matrice de génération aléatoire"
          >
            <Dices className="w-4 h-4 text-cyan-400" />
            <span>Aléatoire</span>
          </button>

          {/* New blank build */}
          <button
            type="button"
            onClick={onCreateNew}
            className="px-3 py-1.5 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 rounded text-xs font-mono-tech uppercase flex items-center gap-1.5 transition cursor-pointer"
            title="Créer un nouveau build vierge"
          >
            <Plus className="w-4 h-4 text-slate-400" />
            <span>Nouveau</span>
          </button>

          {/* Fillable PDF Export */}
          <button
            type="button"
            onClick={handleExportPdf}
            disabled={isExporting}
            className="px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded text-xs font-mono-tech uppercase flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition cursor-pointer disabled:opacity-50"
            title="Exporter une véritable fiche PDF officielle interactive remplissable"
          >
            {isExporting ? (
              <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : exportSuccess ? (
              <Check className="w-4 h-4 text-black" />
            ) : (
              <FileDown className="w-4 h-4 text-black" />
            )}
            <span>{exportSuccess ? 'PDF Téléchargé !' : isExporting ? 'Génération...' : 'Export PDF'}</span>
          </button>
        </div>
      </div>

      {/* Tabs Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto gap-1 border-t border-slate-800/80 pt-1 pb-1 scrollbar-none">
        {navTabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`px-3.5 py-2 text-xs font-mono-tech uppercase whitespace-nowrap flex items-center gap-2 rounded-md transition cursor-pointer ${
                isActive
                  ? 'bg-cyan-950/80 text-cyan-300 font-bold border border-cyan-500/50 shadow-sm shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
              <span>{tab.label}</span>
              {typeof tab.count === 'number' && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                  isActive ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </header>
  );
};
