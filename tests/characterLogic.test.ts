import test from 'node:test';
import assert from 'node:assert';
import { calculateDerivedStats, stepDie, generateRandomCharacter, createEmptyCharacter } from '../src/utils/characterGenerator.ts';

test('stepDie increments and decrements correctly within bounds', () => {
  assert.strictEqual(stepDie('d4', 1), 'd6');
  assert.strictEqual(stepDie('d6', 1), 'd8');
  assert.strictEqual(stepDie('d8', 1), 'd10');
  assert.strictEqual(stepDie('d10', 1), 'd12');
  assert.strictEqual(stepDie('d12', 1), 'd12'); // Max cap
  assert.strictEqual(stepDie('d4', -1), 'd4'); // Min cap
  assert.strictEqual(stepDie('d8', -1), 'd6');
});

test('calculateDerivedStats computes Pace, Parry and Toughness correctly', () => {
  const char = createEmptyCharacter();
  char.attributes.vigueur = 'd8'; // 8 -> base toughness = 2 + 4 = 6
  char.attributes.force = 'd6';
  char.skills['Combat'] = 'd8'; // 8 -> base parry = 2 + 4 = 6

  const derived = calculateDerivedStats(char);
  assert.strictEqual(derived.pace, 6);
  assert.strictEqual(derived.parry, 6);
  assert.strictEqual(derived.toughnessBase, 6);
  assert.strictEqual(derived.strainMax, 8); // Vigueur d8 = 8 strain max
  assert.strictEqual(derived.firewall, 4); // Base 4
  assert.strictEqual(derived.streetCred, 2); // Novice = 2
});

test('calculateDerivedStats properly accounts for implants strain and armor', () => {
  const char = createEmptyCharacter();
  char.attributes.vigueur = 'd6'; // Max strain = 6
  char.implants = [
    {
      id: 'subdermal_armor',
      name: 'Blindage sous-cutané',
      category: 'dermal',
      grade: 'streetware',
      strain: 2,
      cost: 6000,
      description: 'Plaques d’aramide',
      effectsSummary: '+2 Résistance',
      armorBonus: 2
    },
    {
      id: 'reflex_wiring',
      name: 'Câblage réflexe',
      category: 'musculoskeletal',
      grade: 'gutterware', // x2 strain!
      strain: 2,
      cost: 4000,
      description: 'Câbles supraconducteurs',
      effectsSummary: 'Parade +1',
      parryBonus: 1
    }
  ];

  const derived = calculateDerivedStats(char);
  // Strain: streetware (2) + gutterware (2 * 2 = 4) = 6
  assert.strictEqual(derived.strainCurrent, 6);
  assert.strictEqual(derived.strainMax, 6);
  assert.strictEqual(derived.toughnessArmor, 2);
  assert.strictEqual(derived.parry, 5); // Base 2 + (Combat d4=4 / 2) + 1 from implant = 5
});

test('generateRandomCharacter produces complete functional character sheet', () => {
  const char = generateRandomCharacter({ archetypeId: 'hacker', powerLevel: 'soldat' });
  assert.ok(char.id);
  assert.ok(char.name);
  assert.ok(char.alias);
  assert.strictEqual(char.archetypeId, 'hacker');
  assert.ok(char.attributes.intellect);
  assert.ok(char.skills['Hacking']);
  assert.ok(char.implants.length > 0);
  assert.ok(char.weapons.length > 0);
  assert.ok(char.armor.length > 0);
  assert.ok(char.edges.length > 0);
  assert.ok(char.hindrances.length > 0);
  assert.strictEqual(char.bennies, 3);
});
