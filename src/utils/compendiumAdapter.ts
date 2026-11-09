import { CharacterSheetData, WeaponItem, ArmorItem, GearItem, ImplantItem, DroneItem } from '../types/character';
import { CompendiumItem } from '../data/compendiumItems';

export function equipCompendiumItem(
  item: CompendiumItem,
  character: CharacterSheetData,
  autoDeductCredits: boolean = true
): { updatedChar: CharacterSheetData; categoryType: 'weapons' | 'armor' | 'implants' | 'gear' | 'drones' } {
  const cost = item.iz.priceCredits || 0;
  const newCredits = autoDeductCredits ? Math.max(0, character.credits - cost) : character.credits;

  // 1. WEAPONS
  if (['handguns', 'longarms', 'heavy', 'melee'].includes(item.category)) {
    let cat = 'Pistolet';
    if (item.category === 'melee') cat = 'Mêlée';
    else if (item.category === 'heavy') cat = 'Lourd';
    else if (item.category === 'longarms') cat = 'Fusil';
    else if (item.category === 'handguns') cat = 'Pistolet';

    const weapon: WeaponItem = {
      id: `${item.id}_${Date.now()}`,
      name: item.name,
      category: cat,
      range: item.iz.range || (item.category === 'melee' ? 'CàC' : '12/24/48'),
      damage: item.iz.damage || item.red?.damage || '2d6',
      rof: item.red?.rof || 1,
      shots: item.red?.magazine || 1,
      minStr: item.iz.notes?.includes('Force d') ? (item.iz.notes.match(/Force d\d+/)?.[0] || 'd6') : 'd6',
      weight: item.iz.weightKg ?? 1.5,
      cost: cost,
      notes: item.iz.notes || item.description,
      ap: item.iz.ap,
      imageUrl: item.imageUrl,
      rarity: item.rarityLabel,
      manufacturer: item.manufacturer,
      origin: item.origin,
      flavorQuote: item.flavorQuote,
      tags: item.tags
    };

    return {
      updatedChar: {
        ...character,
        credits: newCredits,
        weapons: [...character.weapons, weapon]
      },
      categoryType: 'weapons'
    };
  }

  // 2. ARMOR
  if (item.category === 'armor') {
    const armor: ArmorItem = {
      id: `${item.id}_${Date.now()}`,
      name: item.name,
      category: item.iz.armorBonus && item.iz.armorBonus >= 6 ? 'Lourd' : 'Moyen',
      armorBonus: item.iz.armorBonus ?? Math.max(1, Math.round((item.red?.sp || 10) / 3)),
      coverage: 'Torse, Bras, Jambes',
      weight: item.iz.weightKg ?? 5,
      cost: cost,
      notes: item.iz.notes || item.description,
      imageUrl: item.imageUrl,
      rarity: item.rarityLabel,
      manufacturer: item.manufacturer,
      origin: item.origin,
      flavorQuote: item.flavorQuote,
      tags: item.tags
    };

    return {
      updatedChar: {
        ...character,
        credits: newCredits,
        armor: [...character.armor, armor]
      },
      categoryType: 'armor'
    };
  }

  // 3. CYBERWARE / IMPLANTS
  if (item.category === 'cyberware') {
    let implantCat: 'neural' | 'sensory' | 'organs' | 'dermal' | 'musculoskeletal' = 'neural';
    const tagStr = (item.tags || []).join(' ').toLowerCase();
    if (tagStr.includes('cortex') || tagStr.includes('système nerveux') || tagStr.includes('sandevistan') || tagStr.includes('berserk')) {
      implantCat = 'neural';
    } else if (tagStr.includes('optique') || tagStr.includes('kiroshi') || tagStr.includes('yeux') || tagStr.includes('auditif') || tagStr.includes('oreille')) {
      implantCat = 'sensory';
    } else if (tagStr.includes('armure') || tagStr.includes('sous-cutan') || tagStr.includes('peau')) {
      implantCat = 'dermal';
    } else if (tagStr.includes('bras') || tagStr.includes('jambe') || tagStr.includes('tendon') || tagStr.includes('squelette')) {
      implantCat = 'musculoskeletal';
    } else if (tagStr.includes('coeur') || tagStr.includes('poumon') || tagStr.includes('sang') || tagStr.includes('organ')) {
      implantCat = 'organs';
    }

    const implant: ImplantItem = {
      id: `${item.id}_${Date.now()}`,
      name: item.name,
      category: implantCat,
      grade: item.iz.quality === 'Milware' ? 'milware' : item.iz.quality === 'Gutterware' ? 'gutterware' : 'streetware',
      strain: item.iz.cybertension ?? 1,
      cost: cost,
      description: item.description,
      effectsSummary: item.iz.notes || item.description,
      armorBonus: item.iz.armorBonus,
      imageUrl: item.imageUrl,
      manufacturer: item.manufacturer,
      rarity: item.rarityLabel,
      flavorQuote: item.flavorQuote
    };

    return {
      updatedChar: {
        ...character,
        credits: newCredits,
        implants: [...character.implants, implant]
      },
      categoryType: 'implants'
    };
  }

  // 4. DRONES & VEHICLES
  if (item.category === 'drones_vehicles') {
    const drone: DroneItem = {
      id: `${item.id}_${Date.now()}`,
      name: item.name,
      size: 'Moyen',
      pace: '12',
      toughness: item.iz.armorBonus ? 10 + item.iz.armorBonus : 12,
      armor: item.iz.armorBonus || 4,
      weapons: item.iz.damage || 'Mitrailleuse ou Canon embarqué',
      cost: cost,
      sensor: 'Capteurs tactiques avancés',
      notes: item.iz.notes || item.description,
      imageUrl: item.imageUrl,
      rarity: item.rarityLabel,
      manufacturer: item.manufacturer,
      origin: item.origin,
      flavorQuote: item.flavorQuote,
      tags: item.tags
    };

    return {
      updatedChar: {
        ...character,
        credits: newCredits,
        drones: [...character.drones, drone]
      },
      categoryType: 'drones'
    };
  }

  // 5. GEAR, MODS, PHARMA, TAP
  const gearCat = item.category === 'weapon_mods' 
    ? 'Mod' 
    : item.category === 'pharma' 
    ? 'Drogue' 
    : item.category === 'gear_tap' 
    ? 'TAP' 
    : 'Divers';

  const existingIdx = character.gear.findIndex(g => g.name === item.name);
  if (existingIdx >= 0) {
    const updatedGear = [...character.gear];
    const qty = updatedGear[existingIdx].quantity || 1;
    updatedGear[existingIdx] = {
      ...updatedGear[existingIdx],
      quantity: qty + 1
    };
    return {
      updatedChar: {
        ...character,
        credits: newCredits,
        gear: updatedGear
      },
      categoryType: 'gear'
    };
  } else {
    const gear: GearItem = {
      id: `${item.id}_${Date.now()}`,
      name: item.name,
      category: gearCat,
      weight: item.iz.weightKg ?? 0.2,
      cost: cost,
      notes: item.iz.notes || item.description,
      quantity: 1,
      imageUrl: item.imageUrl,
      rarity: item.rarityLabel,
      manufacturer: item.manufacturer,
      origin: item.origin,
      flavorQuote: item.flavorQuote,
      tags: item.tags
    };

    return {
      updatedChar: {
        ...character,
        credits: newCredits,
        gear: [...character.gear, gear]
      },
      categoryType: 'gear'
    };
  }
}
