import React, { useState, useEffect } from 'react';
import { CharacterSheetData } from './types/character';
import {
  getActiveCharacterId,
  getSavedCharacters,
  saveSingleCharacter,
  setActiveCharacterId
} from './utils/storage';
import { createEmptyCharacter, generateRandomCharacter } from './utils/characterGenerator';
import { Header } from './components/Header';
import { DerivedTraitsBar } from './components/DerivedTraitsBar';
import { RandomGeneratorModal } from './components/RandomGeneratorModal';
import { ConceptTab } from './components/tabs/ConceptTab';
import { AttributesSkillsTab } from './components/tabs/AttributesSkillsTab';
import { ImplantsTab } from './components/tabs/ImplantsTab';
import { EquipmentTab } from './components/tabs/EquipmentTab';
import { EdgesHindrancesTab } from './components/tabs/EdgesHindrancesTab';
import { SavedBuildsTab } from './components/tabs/SavedBuildsTab';
import { MalmartBankModal } from './components/MalmartBankModal';
import { SWADEAdvancementModal } from './components/SWADEAdvancementModal';

export default function App() {
  const [characters, setCharacters] = useState<CharacterSheetData[]>([]);
  const [activeCharacterId, setActiveCharId] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('concept');
  const [isRandomModalOpen, setIsRandomModalOpen] = useState<boolean>(false);
  const [isBankModalOpen, setIsBankModalOpen] = useState<boolean>(false);
  const [isAdvancementModalOpen, setIsAdvancementModalOpen] = useState<boolean>(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    const loaded = getSavedCharacters();
    setCharacters(loaded);

    const storedActiveId = getActiveCharacterId();
    if (storedActiveId && loaded.some(c => c.id === storedActiveId)) {
      setActiveCharId(storedActiveId);
    } else if (loaded.length > 0) {
      setActiveCharId(loaded[0].id);
      setActiveCharacterId(loaded[0].id);
    } else {
      const defaultChar = generateRandomCharacter({ archetypeId: 'ronin' });
      setCharacters([defaultChar]);
      setActiveCharId(defaultChar.id);
      saveSingleCharacter(defaultChar);
      setActiveCharacterId(defaultChar.id);
    }
  }, []);

  const activeCharacter = characters.find(c => c.id === activeCharacterId) || characters[0];

  const handleUpdateActiveCharacter = (updated: CharacterSheetData) => {
    const updatedList = saveSingleCharacter(updated);
    setCharacters(updatedList);
  };

  const handleSelectCharacter = (id: string) => {
    setActiveCharId(id);
    setActiveCharacterId(id);
  };

  const handleCreateNewBlank = () => {
    const newChar = createEmptyCharacter();
    const updatedList = saveSingleCharacter(newChar);
    setCharacters(updatedList);
    setActiveCharId(newChar.id);
    setActiveCharacterId(newChar.id);
    setActiveTab('concept');
  };

  const handleCharacterGenerated = (newChar: CharacterSheetData) => {
    const updatedList = saveSingleCharacter(newChar);
    setCharacters(updatedList);
    setActiveCharId(newChar.id);
    setActiveCharacterId(newChar.id);
    setActiveTab('concept');
  };

  if (!activeCharacter) {
    return (
      <div className="min-h-screen bg-[#06090e] flex items-center justify-center text-cyan-400 font-mono-tech">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          <span>INITIALISATION DE LA MATRICE INTERFACE ZERO...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#06090e] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black relative cyber-grid">
      {/* Subtle scanline overlay */}
      <div className="fixed inset-0 cyber-scanlines pointer-events-none z-50 opacity-40" />

      {/* Main App Header */}
      <Header
        characters={characters}
        activeCharacter={activeCharacter}
        onSelectCharacter={handleSelectCharacter}
        onCreateNew={handleCreateNewBlank}
        onOpenRandomModal={() => setIsRandomModalOpen(true)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenBankModal={() => setIsBankModalOpen(true)}
        onOpenAdvancementModal={() => setIsAdvancementModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        {/* Derived traits HUD bar is always visible at top */}
        <DerivedTraitsBar
          character={activeCharacter}
          onUpdateCharacter={handleUpdateActiveCharacter}
          onOpenAdvancementModal={() => setIsAdvancementModalOpen(true)}
          onOpenBankModal={() => setIsBankModalOpen(true)}
        />

        {/* Tab views */}
        <div className="transition-all duration-200">
          {activeTab === 'concept' && (
            <ConceptTab
              character={activeCharacter}
              onChange={handleUpdateActiveCharacter}
              onOpenAdvancementModal={() => setIsAdvancementModalOpen(true)}
              onOpenBankModal={() => setIsBankModalOpen(true)}
            />
          )}

          {activeTab === 'stats' && (
            <AttributesSkillsTab
              character={activeCharacter}
              onChange={handleUpdateActiveCharacter}
            />
          )}

          {activeTab === 'implants' && (
            <ImplantsTab
              character={activeCharacter}
              onChange={handleUpdateActiveCharacter}
            />
          )}

          {activeTab === 'equipment' && (
            <EquipmentTab
              character={activeCharacter}
              onChange={handleUpdateActiveCharacter}
              onOpenBankModal={() => setIsBankModalOpen(true)}
            />
          )}

          {activeTab === 'edges' && (
            <EdgesHindrancesTab
              character={activeCharacter}
              onChange={handleUpdateActiveCharacter}
            />
          )}

          {activeTab === 'builds' && (
            <SavedBuildsTab
              characters={characters}
              activeCharacterId={activeCharacterId}
              onSelectCharacter={handleSelectCharacter}
              onCharactersUpdated={setCharacters}
              onCreateNew={handleCreateNewBlank}
              onOpenRandomModal={() => setIsRandomModalOpen(true)}
            />
          )}
        </div>
      </main>

      {/* Cyberpunk Footer */}
      <footer className="border-t border-slate-900 bg-[#04060a] py-4 text-center text-xs text-slate-500 font-mono-tech relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            INTERFACE ZERO 2.0 / 3.0 © Gun Metal Games • Savage Worlds Adventure Edition (SWADE) © Pinnacle Entertainment Group
          </span>
          <span className="text-cyan-500/80">
            Export PDF AcroForm Remplissable • Multi-Builds LocalStorage
          </span>
        </div>
      </footer>

      {/* Procedural Random Generator Modal */}
      <RandomGeneratorModal
        isOpen={isRandomModalOpen}
        onClose={() => setIsRandomModalOpen(false)}
        onCharacterGenerated={handleCharacterGenerated}
      />

      {/* Malmart Bank Balance & Transactions Modal */}
      <MalmartBankModal
        isOpen={isBankModalOpen}
        onClose={() => setIsBankModalOpen(false)}
        character={activeCharacter}
        onChange={handleUpdateActiveCharacter}
      />

      {/* SWADE Experience & Advancement Modal */}
      <SWADEAdvancementModal
        isOpen={isAdvancementModalOpen}
        onClose={() => setIsAdvancementModalOpen(false)}
        character={activeCharacter}
        onChange={handleUpdateActiveCharacter}
      />
    </div>
  );
}
