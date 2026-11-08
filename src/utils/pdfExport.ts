import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { CharacterSheetData } from '../types/character';
import { calculateDerivedStats } from './characterGenerator';
import { RACES, ARCHETYPES } from '../data/interfaceZeroData';

export async function generateFillableCharacterPdf(character: CharacterSheetData): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  
  // Cyberpunk Palette
  const darkBg = rgb(0.04, 0.06, 0.09);
  const cardBg = rgb(0.07, 0.1, 0.15);
  const cyanNeon = rgb(0.0, 0.94, 1.0);
  const textWhite = rgb(0.95, 0.98, 1.0);
  const textMuted = rgb(0.6, 0.7, 0.8);
  const borderCyan = rgb(0.0, 0.6, 0.75);
  const amberAccent = rgb(1.0, 0.7, 0.1);

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontCourier = await pdfDoc.embedFont(StandardFonts.CourierBold);

  const form = pdfDoc.getForm();
  const derived = calculateDerivedStats(character);
  const race = RACES.find(r => r.id === character.raceId)?.name || character.raceId;
  const archetype = ARCHETYPES.find(a => a.id === character.archetypeId)?.name || character.archetypeId;

  // PAGE 1: Identity, Attributes, Derived Traits, Skills, Edges & Hindrances
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page1.getSize();

  // Draw background
  page1.drawRectangle({
    x: 0,
    y: 0,
    width,
    height,
    color: darkBg
  });

  // Top Cyber Header Banner
  page1.drawRectangle({
    x: 20,
    y: height - 65,
    width: width - 40,
    height: 45,
    color: cardBg,
    borderColor: cyanNeon,
    borderWidth: 1.5
  });

  page1.drawText('INTERFACE ZERO 2.0 / SWADE', {
    x: 35,
    y: height - 42,
    size: 15,
    font: fontCourier,
    color: cyanNeon
  });

  page1.drawText('DOSSIER AGENT // FICHE DE PERSONNAGE OFFICIELLE INTERACTIVE', {
    x: 35,
    y: height - 57,
    size: 7.5,
    font: fontRegular,
    color: textMuted
  });

  page1.drawText(`STATUS: ACTIF | CYBERTENSION: ${derived.strainCurrent}/${derived.strainMax}`, {
    x: width - 245,
    y: height - 42,
    size: 9,
    font: fontCourier,
    color: amberAccent
  });

  // Helper to create styled AcroForm text fields
  let fieldIndex = 0;
  const addAcroField = (
    name: string,
    label: string,
    initialValue: string,
    x: number,
    y: number,
    w: number,
    h: number = 18,
    isMultiline: boolean = false
  ) => {
    fieldIndex++;
    page1.drawText(label.toUpperCase(), {
      x,
      y: y + h + 2,
      size: 6.5,
      font: fontBold,
      color: cyanNeon
    });

    const textField = form.createTextField(`${name}_${fieldIndex}`);
    textField.setText(initialValue || '');
    if (isMultiline) {
      textField.enableMultiline();
    }
    textField.addToPage(page1, {
      x,
      y,
      width: w,
      height: h,
      textColor: textWhite,
      backgroundColor: cardBg,
      borderColor: borderCyan,
      borderWidth: 0.8,
      font: fontRegular
    });
  };

  // IDENTITY BLOCK
  const idY = height - 120;
  addAcroField('char_name', 'Nom Complet', character.name, 25, idY, 175);
  addAcroField('char_alias', 'Alias / Indicatif', character.alias, 210, idY, 110);
  addAcroField('char_concept', 'Concept', character.concept, 330, idY, 240);

  const idY2 = height - 152;
  addAcroField('char_race', 'Espèce / Transhumain', race, 25, idY2, 130);
  addAcroField('char_archetype', 'Archétype', archetype, 165, idY2, 130);
  addAcroField('char_rank', 'Rang & Avancées', `${character.rank} (${character.advances} avancées)`, 305, idY2, 135);
  addAcroField('char_credits', 'Crédits (CR)', `${character.credits.toLocaleString()} cr`, 450, idY2, 120);

  // DERIVED STATS HUD BAR (Allure, Parade, Résistance, Cybertension, Firewall, Street Cred)
  const hudY = height - 215;
  page1.drawRectangle({
    x: 25,
    y: hudY,
    width: width - 50,
    height: 48,
    color: cardBg,
    borderColor: amberAccent,
    borderWidth: 1.2
  });

  const hudStats = [
    { label: 'ALLURE', val: `${derived.pace} (dé ${derived.runningDie})` },
    { label: 'PARADE', val: `${derived.parry}` },
    { label: 'RÉSISTANCE', val: `${derived.toughnessTotal} (${derived.toughnessArmor})` },
    { label: 'CYBERTENSION', val: `${derived.strainCurrent} / ${derived.strainMax}` },
    { label: 'FIREWALL', val: `${derived.firewall}` },
    { label: 'STREET CRED', val: `${derived.streetCred}` }
  ];

  const colWidth = (width - 50) / hudStats.length;
  hudStats.forEach((st, idx) => {
    const colX = 25 + (idx * colWidth);
    page1.drawText(st.label, {
      x: colX + 8,
      y: hudY + 32,
      size: 7,
      font: fontBold,
      color: cyanNeon
    });
    page1.drawText(st.val, {
      x: colX + 8,
      y: hudY + 14,
      size: 13,
      font: fontCourier,
      color: textWhite
    });
    if (idx < hudStats.length - 1) {
      page1.drawLine({
        start: { x: colX + colWidth, y: hudY + 5 },
        end: { x: colX + colWidth, y: hudY + 43 },
        color: borderCyan,
        thickness: 0.5
      });
    }
  });

  // ATTRIBUTES COLUMN (Left: x: 25 to 180)
  const attrY = height - 240;
  page1.drawText('// ATTRIBUTS DE BASE', {
    x: 25,
    y: attrY,
    size: 9,
    font: fontCourier,
    color: cyanNeon
  });

  const attrs = [
    { id: 'AGILITÉ', val: character.attributes.agilite },
    { id: 'ÂME', val: character.attributes.ame },
    { id: 'FORCE', val: character.attributes.force },
    { id: 'INTELLECT', val: character.attributes.intellect },
    { id: 'VIGUEUR', val: character.attributes.vigueur }
  ];

  attrs.forEach((att, idx) => {
    const yPos = attrY - 26 - (idx * 26);
    page1.drawRectangle({
      x: 25,
      y: yPos,
      width: 155,
      height: 22,
      color: cardBg,
      borderColor: borderCyan,
      borderWidth: 0.8
    });
    page1.drawText(att.id, {
      x: 35,
      y: yPos + 7,
      size: 8,
      font: fontBold,
      color: textWhite
    });
    page1.drawText(att.val.toUpperCase(), {
      x: 145,
      y: yPos + 6,
      size: 10,
      font: fontCourier,
      color: amberAccent
    });
  });

  // JAUGE DE VITALITÉ (Blessures, Fatigue, Jetons)
  const vitY = attrY - 170;
  page1.drawText('// STATUS VITAL', {
    x: 25,
    y: vitY,
    size: 9,
    font: fontCourier,
    color: cyanNeon
  });

  page1.drawRectangle({
    x: 25,
    y: vitY - 50,
    width: 155,
    height: 44,
    color: cardBg,
    borderColor: borderCyan,
    borderWidth: 0.8
  });
  page1.drawText(`BLESSURES (-3 max): [ ] -1  [ ] -2  [ ] -3`, {
    x: 32,
    y: vitY - 22,
    size: 7,
    font: fontRegular,
    color: textWhite
  });
  page1.drawText(`FATIGUE (-2 max) : [ ] -1  [ ] -2`, {
    x: 32,
    y: vitY - 34,
    size: 7,
    font: fontRegular,
    color: textWhite
  });
  page1.drawText(`JETONS (BENNIES) : [ ${character.bennies} ]`, {
    x: 32,
    y: vitY - 45,
    size: 7.5,
    font: fontBold,
    color: amberAccent
  });

  // SKILLS COLUMN (Center: x: 195 to 380)
  const skillY = height - 240;
  page1.drawText('// COMPÉTENCES ACQUISES', {
    x: 195,
    y: skillY,
    size: 9,
    font: fontCourier,
    color: cyanNeon
  });

  const skillEntries = Object.entries(character.skills)
    .filter(([_, val]) => val !== '0')
    .sort((a, b) => a[0].localeCompare(b[0]));

  const maxSkills = Math.min(skillEntries.length, 14);
  for (let i = 0; i < maxSkills; i++) {
    const [skName, skVal] = skillEntries[i];
    const yPos = skillY - 22 - (i * 20);
    page1.drawRectangle({
      x: 195,
      y: yPos,
      width: 180,
      height: 17,
      color: cardBg,
      borderColor: rgb(0.12, 0.2, 0.28),
      borderWidth: 0.5
    });
    page1.drawText(skName, {
      x: 202,
      y: yPos + 5,
      size: 7.5,
      font: fontRegular,
      color: textWhite
    });
    page1.drawText(skVal.toUpperCase(), {
      x: 350,
      y: yPos + 4,
      size: 8.5,
      font: fontCourier,
      color: cyanNeon
    });
  }

  // EDGES & HINDRANCES (Right column: x: 390 to width - 25)
  const edgeY = height - 240;
  page1.drawText('// ATOUTS (EDGES)', {
    x: 390,
    y: edgeY,
    size: 9,
    font: fontCourier,
    color: cyanNeon
  });

  const edgesText = character.edges.map(e => `• ${e.name} : ${e.description.slice(0, 70)}...`).join('\n') || 'Aucun atout enregistré';
  addAcroField('char_edges', '', edgesText, 390, edgeY - 110, width - 415, 105, true);

  const hindY = edgeY - 130;
  page1.drawText('// HANDICAPS (HINDRANCES)', {
    x: 390,
    y: hindY,
    size: 9,
    font: fontCourier,
    color: rgb(1.0, 0.3, 0.4)
  });

  const hindsText = character.hindrances.map(h => `• ${h.name} (${h.severity}) : ${h.description.slice(0, 65)}...`).join('\n') || 'Aucun handicap';
  addAcroField('char_hindrances', '', hindsText, 390, hindY - 85, width - 415, 80, true);

  // BOTTOM OF PAGE 1: WEAPONS TABLE
  const wepY = height - 525;
  page1.drawText('// ARSENAL & ARMES DE COMBAT', {
    x: 25,
    y: wepY,
    size: 9,
    font: fontCourier,
    color: cyanNeon
  });

  // Weapon table header
  page1.drawRectangle({
    x: 25,
    y: wepY - 18,
    width: width - 50,
    height: 16,
    color: rgb(0.1, 0.2, 0.3)
  });
  page1.drawText('ARME', { x: 30, y: wepY - 13, size: 7, font: fontBold, color: cyanNeon });
  page1.drawText('PORTÉE', { x: 175, y: wepY - 13, size: 7, font: fontBold, color: cyanNeon });
  page1.drawText('DÉGÂTS', { x: 235, y: wepY - 13, size: 7, font: fontBold, color: cyanNeon });
  page1.drawText('ROF', { x: 295, y: wepY - 13, size: 7, font: fontBold, color: cyanNeon });
  page1.drawText('TIRS', { x: 330, y: wepY - 13, size: 7, font: fontBold, color: cyanNeon });
  page1.drawText('PA', { x: 370, y: wepY - 13, size: 7, font: fontBold, color: cyanNeon });
  page1.drawText('NOTES / PROPRIÉTÉS', { x: 405, y: wepY - 13, size: 7, font: fontBold, color: cyanNeon });

  for (let i = 0; i < 4; i++) {
    const w = character.weapons[i];
    const rowY = wepY - 36 - (i * 18);
    page1.drawRectangle({
      x: 25,
      y: rowY,
      width: width - 50,
      height: 16,
      color: i % 2 === 0 ? cardBg : darkBg,
      borderColor: rgb(0.1, 0.15, 0.22),
      borderWidth: 0.5
    });
    if (w) {
      page1.drawText(w.name.slice(0, 26), { x: 30, y: rowY + 5, size: 7, font: fontRegular, color: textWhite });
      page1.drawText(w.range, { x: 175, y: rowY + 5, size: 7, font: fontCourier, color: textWhite });
      page1.drawText(w.damage, { x: 235, y: rowY + 5, size: 7, font: fontCourier, color: amberAccent });
      page1.drawText(`${w.rof}`, { x: 295, y: rowY + 5, size: 7, font: fontCourier, color: textWhite });
      page1.drawText(`${w.shots}`, { x: 330, y: rowY + 5, size: 7, font: fontCourier, color: textWhite });
      page1.drawText(w.ap ? `${w.ap}` : '-', { x: 370, y: rowY + 5, size: 7, font: fontCourier, color: cyanNeon });
      page1.drawText(w.notes.slice(0, 32), { x: 405, y: rowY + 5, size: 6.5, font: fontRegular, color: textMuted });
    }
  }

  // ARMURE & TAP SECTION (Page 1 Bottom)
  const armY = height - 635;
  page1.drawText('// PROTECTIONS & SYSTÈME TAP', {
    x: 25,
    y: armY,
    size: 9,
    font: fontCourier,
    color: cyanNeon
  });

  const armorSummary = character.armor.map(a => `${a.name} (+${a.armorBonus} Armure, ${a.coverage})`).join(' | ') || 'Aucune armure corporelle';
  addAcroField('char_armor', 'Armure Portée & Protection', armorSummary, 25, armY - 30, width - 50, 22);

  const tapSummary = `Modèle : ${character.tapModel} | Firewall : ${derived.firewall} | Apps : ${character.tapApps.join(', ')}`;
  addAcroField('char_tap_system', 'Interface Trend Access Point (TAP)', tapSummary, 25, armY - 75, width - 50, 22);

  // FOOTER PAGE 1
  page1.drawText('SWADE Interface Zero 2.0 // Générateur Cyberpunk - Document de référence jouable & remplissable', {
    x: 25,
    y: 18,
    size: 6.5,
    font: fontRegular,
    color: textMuted
  });
  page1.drawText('PAGE 1 / 2', {
    x: width - 75,
    y: 18,
    size: 7,
    font: fontCourier,
    color: cyanNeon
  });

  // PAGE 2: Cyberware, Bioware & Nanoware, Gear, Drones, Notes & Background
  const page2 = pdfDoc.addPage([595.28, 841.89]);
  page2.drawRectangle({
    x: 0,
    y: 0,
    width,
    height,
    color: darkBg
  });

  // Page 2 Header Banner
  page2.drawRectangle({
    x: 20,
    y: height - 55,
    width: width - 40,
    height: 38,
    color: cardBg,
    borderColor: cyanNeon,
    borderWidth: 1.2
  });

  page2.drawText('INTERFACE ZERO // INVENTAIRE CYBERNÉTIQUE, MATÉRIEL & DONNÉES BIOMÉTRIQUES', {
    x: 35,
    y: height - 37,
    size: 10,
    font: fontCourier,
    color: cyanNeon
  });

  // IMPLANTS & CYBERWARE TABLE
  const impY = height - 85;
  page2.drawText('// MATRICE DES IMPLANTS (CYBER / BIO / NANO)', {
    x: 25,
    y: impY,
    size: 9,
    font: fontCourier,
    color: cyanNeon
  });

  // Table header
  page2.drawRectangle({
    x: 25,
    y: impY - 18,
    width: width - 50,
    height: 16,
    color: rgb(0.1, 0.2, 0.3)
  });
  page2.drawText('IMPLANT / PROTHÈSE', { x: 30, y: impY - 13, size: 7, font: fontBold, color: cyanNeon });
  page2.drawText('GRADE', { x: 190, y: impY - 13, size: 7, font: fontBold, color: cyanNeon });
  page2.drawText('TENSION', { x: 250, y: impY - 13, size: 7, font: fontBold, color: cyanNeon });
  page2.drawText('COÛT', { x: 300, y: impY - 13, size: 7, font: fontBold, color: cyanNeon });
  page2.drawText('EFFETS TECHNIQUES & SYSTÈME', { x: 350, y: impY - 13, size: 7, font: fontBold, color: cyanNeon });

  for (let i = 0; i < 8; i++) {
    const imp = character.implants[i];
    const rowY = impY - 36 - (i * 20);
    page2.drawRectangle({
      x: 25,
      y: rowY,
      width: width - 50,
      height: 18,
      color: i % 2 === 0 ? cardBg : darkBg,
      borderColor: rgb(0.1, 0.15, 0.22),
      borderWidth: 0.5
    });
    if (imp) {
      page2.drawText(imp.name.slice(0, 30), { x: 30, y: rowY + 5, size: 7.5, font: fontRegular, color: textWhite });
      page2.drawText(imp.grade.toUpperCase(), { x: 190, y: rowY + 5, size: 6.5, font: fontCourier, color: amberAccent });
      page2.drawText(`${imp.strain} pts`, { x: 250, y: rowY + 5, size: 7, font: fontCourier, color: textWhite });
      page2.drawText(`${imp.cost} cr`, { x: 300, y: rowY + 5, size: 7, font: fontCourier, color: textWhite });
      page2.drawText(imp.effectsSummary.slice(0, 48), { x: 350, y: rowY + 5, size: 6.5, font: fontRegular, color: textMuted });
    }
  }

  // GEAR & DRONES SECTION
  const gearY = height - 290;
  page2.drawText('// ÉQUIPEMENT DIVERS & LOGISTIQUE', {
    x: 25,
    y: gearY,
    size: 9,
    font: fontCourier,
    color: cyanNeon
  });

  const gearText = character.gear.map(g => `• ${g.name} (${g.weight}kg, ${g.cost}cr) - ${g.notes}`).join('\n') || 'Aucun équipement supplémentaire';
  const droneText = character.drones.map(d => `• [DRONE] ${d.name} (${d.weapons}, Allure: ${d.pace}, ${d.notes})`).join('\n');
  const fullInvText = `${gearText}\n${droneText ? '\n' + droneText : ''}`;

  const invField = form.createTextField(`char_inventory_field`);
  invField.setText(fullInvText);
  invField.enableMultiline();
  invField.addToPage(page2, {
    x: 25,
    y: gearY - 145,
    width: width - 50,
    height: 135,
    textColor: textWhite,
    backgroundColor: cardBg,
    borderColor: borderCyan,
    borderWidth: 0.8,
    font: fontRegular
  });

  // CHARGE & CAPACITÉ D'EMPORT HUD
  page2.drawText(`POIDS TOTAL EMBARQUÉ : ${derived.carriedWeight} kg / CAPACITÉ MAXIMALE : ${derived.maxWeight} kg ${derived.isOverloaded ? '(ENCOMBRÉ -2)' : '(NORMAL)'}`, {
    x: 25,
    y: gearY - 158,
    size: 7.5,
    font: fontCourier,
    color: derived.isOverloaded ? rgb(1.0, 0.3, 0.3) : amberAccent
  });

  // APPEARANCE & BACKGROUND (Bottom Page 2)
  const bioY = height - 485;
  page2.drawText('// DESCRIPTION PHYSIQUE & HISTORIQUE PERSONNEL', {
    x: 25,
    y: bioY,
    size: 9,
    font: fontCourier,
    color: cyanNeon
  });

  const bioField = form.createTextField(`char_bio_field`);
  const fullBio = `APPARENCE :\n${character.appearance}\n\nHISTORIQUE & DOSSIER CORPO :\n${character.background}\n\nNOTES & OBJECTIFS :\n${character.notes}`;
  bioField.setText(fullBio);
  bioField.enableMultiline();
  bioField.addToPage(page2, {
    x: 25,
    y: 40,
    width: width - 50,
    height: bioY - 55,
    textColor: textWhite,
    backgroundColor: cardBg,
    borderColor: borderCyan,
    borderWidth: 0.8,
    font: fontRegular
  });

  // FOOTER PAGE 2
  page2.drawText('INTERFACE ZERO 2.0 // SYSTÈME SAVAGE WORLDS ADVENTURE EDITION - FORMAT ACROFORM INTERACTIF', {
    x: 25,
    y: 18,
    size: 6.5,
    font: fontRegular,
    color: textMuted
  });
  page2.drawText('PAGE 2 / 2', {
    x: width - 75,
    y: 18,
    size: 7,
    font: fontCourier,
    color: cyanNeon
  });

  return await pdfDoc.save();
}

export function downloadPdfBlob(pdfBytes: Uint8Array, filename: string): void {
  const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
