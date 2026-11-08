import { CharacterSheetData } from '../types/character';
import { generateRandomCharacter } from './characterGenerator';

const STORAGE_KEY_CHARACTERS = 'iz_swade_characters_v1';
const STORAGE_KEY_ACTIVE_ID = 'iz_swade_active_char_id';

export function getSavedCharacters(): CharacterSheetData[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CHARACTERS);
    if (!raw) {
      // Seed default characters so the user immediately has 3 rich builds ready to explore
      const defaultRonin = generateRandomCharacter({ archetypeId: 'ronin', powerLevel: 'soldat' });
      defaultRonin.name = 'Kenshi "Razor-Byte" Takahashi';
      defaultRonin.alias = 'Razor-Byte';

      const defaultHacker = generateRandomCharacter({ archetypeId: 'hacker', powerLevel: 'soldat' });
      defaultHacker.name = 'Elena "Cipher" Rostova';
      defaultHacker.alias = 'Cipher';

      const defaultChasseur = generateRandomCharacter({ archetypeId: 'chasseur_primes', powerLevel: 'hyperchrome' });
      defaultChasseur.name = 'Marcus "Viper-X" Vance';
      defaultChasseur.alias = 'Viper-X';

      const initialList = [defaultRonin, defaultHacker, defaultChasseur];
      saveCharactersList(initialList);
      localStorage.setItem(STORAGE_KEY_ACTIVE_ID, defaultRonin.id);
      return initialList;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to load saved characters from localStorage:', err);
    return [];
  }
}

export function saveCharactersList(characters: CharacterSheetData[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_CHARACTERS, JSON.stringify(characters));
  } catch (err) {
    console.error('Failed to save characters to localStorage:', err);
  }
}

export function saveSingleCharacter(character: CharacterSheetData): CharacterSheetData[] {
  const current = getSavedCharacters();
  const index = current.findIndex(c => c.id === character.id);
  const updatedChar = { ...character, updatedAt: Date.now() };

  let newList: CharacterSheetData[];
  if (index >= 0) {
    newList = [...current];
    newList[index] = updatedChar;
  } else {
    newList = [updatedChar, ...current];
  }

  saveCharactersList(newList);
  return newList;
}

export function deleteCharacter(id: string): CharacterSheetData[] {
  const current = getSavedCharacters();
  const filtered = current.filter(c => c.id !== id);
  saveCharactersList(filtered);

  // If deleted was active, set another active
  const activeId = getActiveCharacterId();
  if (activeId === id && filtered.length > 0) {
    setActiveCharacterId(filtered[0].id);
  }
  return filtered;
}

export function cloneCharacter(sourceChar: CharacterSheetData): CharacterSheetData {
  const clone: CharacterSheetData = {
    ...JSON.parse(JSON.stringify(sourceChar)),
    id: `iz-char-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    name: `${sourceChar.name} (Copie)`,
    alias: `${sourceChar.alias}-v2`,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  saveSingleCharacter(clone);
  return clone;
}

export function getActiveCharacterId(): string | null {
  return localStorage.getItem(STORAGE_KEY_ACTIVE_ID);
}

export function setActiveCharacterId(id: string): void {
  localStorage.setItem(STORAGE_KEY_ACTIVE_ID, id);
}

export function exportCharactersToJson(characters: CharacterSheetData[]): void {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(characters, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `swade_iz_personnages_backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function importCharactersFromJson(jsonString: string): CharacterSheetData[] {
  const parsed = JSON.parse(jsonString);
  if (!Array.isArray(parsed)) {
    throw new Error('Le fichier JSON doit contenir une liste de personnages valide.');
  }
  saveCharactersList(parsed);
  if (parsed.length > 0) {
    setActiveCharacterId(parsed[0].id);
  }
  return parsed;
}
