import {
  ArchetypeDefinition,
  ArmorItem,
  EdgeDefinition,
  GearItem,
  HindranceDefinition,
  ImplantItem,
  PowerLevelConfig,
  RaceDefinition,
  WeaponItem,
  DroneItem
} from '../types/character';

export const POWER_LEVELS: PowerLevelConfig[] = [
  {
    id: 'voyou',
    name: 'Vulgaire Voyou',
    credits: 5000,
    implantBudget: 0,
    description: 'Une petite frappe des bas-fonds. Budget serré (5 000 cr), pas de matériel de pointe fourni.'
  },
  {
    id: 'soldat',
    name: 'Soldat des Rues (Standard)',
    credits: 10000,
    implantBudget: 10000,
    description: 'Niveau par défaut d’Interface Zero : 10 000 cr d’équipement et 10 000 cr réservés aux implants.'
  },
  {
    id: 'hyperchrome',
    name: 'Guerrier Hyperchrome',
    credits: 30000,
    implantBudget: 20000,
    description: 'Vétéran chromé de la guerre d’entreprise : 30 000 cr d’équipement et 20 000 cr d’implants de qualité.'
  },
  {
    id: 'elite',
    name: 'Agent d’Élite / Spécialiste',
    credits: 60000,
    implantBudget: 50000,
    description: 'Ressources de mégacorporation : 60 000 cr de matériel et 50 000 cr de cyber-matos de grade Milware.'
  }
];

export const ATTRIBUTES_LIST = [
  { id: 'agilite', name: 'Agilité', shortName: 'AGI', description: 'Coordination motrice, souplesse, dextérité manuelle et réflexes.' },
  { id: 'ame', name: 'Âme', shortName: 'ÂME', description: 'Force spirituelle, sang-froid, empathie et volonté d’acier.' },
  { id: 'force', name: 'Force', shortName: 'FOR', description: 'Puissance musculaire brute et capacité d’emport.' },
  { id: 'intellect', name: 'Intellect', shortName: 'INT', description: 'Logique, mémoire, vivacité d’esprit et connaissances techniques.' },
  { id: 'vigueur', name: 'Vigueur', shortName: 'VIG', description: 'Endurance, résistance physique, seuil de Cybertension et système immunitaire.' }
];

export const BASE_SKILLS = [
  'Athlétisme',
  'Combat',
  'Connaissance générale',
  'Discrétion',
  'Hacking',
  'Hyper combat',
  'Intimidation',
  'Jeu',
  'Navigation',
  'Perception',
  'Persuasion',
  'Pilotage',
  'Programmation',
  'Provocation',
  'Recherche',
  'Réparation',
  'Soins',
  'Survie',
  'Tir'
];

export const RACES: RaceDefinition[] = [
  {
    id: 'humain',
    name: 'Humain Naturel',
    category: 'Humain',
    description: 'Le modèle biologique original, adaptable et déterminé.',
    racialTraits: ['Atout gratuit : commence avec 1 Atout supplémentaire de son choix.'],
    freeEdges: ['Adaptable']
  },
  {
    id: 'humain_2_0',
    name: 'Humain 2.0',
    category: 'Transhumain',
    description: 'Conçu in vitro avec sélection génétique ultra-rigoureuse.',
    racialTraits: [
      'Génome Optimisé : commence avec Intellect d6 et Savant d6.',
      'Attirant : +1 aux jets de Persuasion.',
      'Système immunitaire supérieur : +4 contre poisons et maladies.',
      'Arrogant (Handicap Majeur) : sentiment inné de supériorité biologique.'
    ],
    bonusAttribute: 'intellect',
    bonusSkills: { 'Connaissance générale': 'd6' }
  },
  {
    id: 'androide',
    name: 'Androïde Châssis Synthétique',
    category: 'Synthétique',
    description: 'Conscience artificielle encapsulée dans un châssis en matériaux composites.',
    racialTraits: [
      'Blindage intégré : +2 Armure naturelle.',
      'Double Processeur : Intellect commence à d6.',
      'Sans âme biologique : immunisé aux maladies, poisons, asphyxie.',
      'Vulnérabilité IEM : subit +4 de dégâts des attaques à impulsion électromagnétique.',
      'Recharge obligatoire : doit se recharger 4h par 24h.'
    ],
    inherentArmor: 2,
    bonusAttribute: 'intellect'
  },
  {
    id: 'bioroide',
    name: 'Bioroïde Synthétique Organique',
    category: 'Transhumain',
    description: 'Organisme cultivé artificiellement, indiscernable d’un humain à l’œil nu.',
    racialTraits: [
      'Bio-processeur : commence avec Intellect d6.',
      'Programme natif : +2 aux tests de Programmation.',
      'Protocole d’obéissance latent (Handicap Mineur).',
      'Sans signature génétique enregistrée.'
    ],
    bonusAttribute: 'intellect',
    bonusSkills: { 'Programmation': 'd6' }
  },
  {
    id: 'cyborg',
    name: 'Cyborg Intégral',
    category: 'Synthétique',
    description: 'Cerveau humain enchâssé dans une coque mécanique complète.',
    racialTraits: [
      'Châssis renforcé : +2 Armure naturelle sur tout le corps, Résistance +1.',
      'Vigueur d6 innée.',
      'Tolérance cybernétique de base.',
      'Maintenance coûteuse : nécessite 500 cr de lubrifiants/pièces par mois.',
      'Sens tactile altéré : -1 aux manipulations fines délicates.'
    ],
    inherentArmor: 2,
    sizeModifier: 1,
    bonusAttribute: 'vigueur',
    cybertensionModifier: 4
  },
  {
    id: 'hybride_feroce',
    name: 'Hybride Féroce (Canin/Félin)',
    category: 'Hybride',
    description: 'Épissage génétique combinant ADN humain et prédateur alpha.',
    racialTraits: [
      'Griffes & Crocs : Attaque naturelle FOR+d6.',
      'Musculature de prédateur : Force commence à d6.',
      'Sens hyper-développés : +2 en Perception auditive et olfactive.',
      'Pulsant d’agressivité : -1 aux interactions sociales policées.'
    ],
    bonusAttribute: 'force',
    bonusSkills: { 'Combat': 'd6' }
  },
  {
    id: 'hybride_furtif',
    name: 'Hybride Furtif (Chiroptère/Rongeur)',
    category: 'Hybride',
    description: 'Chouette ou rat urbain, idéal pour les infiltrations silencieuses.',
    racialTraits: [
      'Réflexes furtifs : Discrétion et Athlétisme commencent à d6.',
      'Vision nocturne : ignore les malus d’obscurité partielle.',
      'Gabarit fin : Résistance -1.'
    ],
    bonusSkills: { 'Discrétion': 'd6', 'Athlétisme': 'd6' }
  },
  {
    id: 'hybride_puissant',
    name: 'Hybride Puissant (Ursidé/Bovin)',
    category: 'Hybride',
    description: 'Colosse génétiquement augmenté pour la puissance brute et le terrassement.',
    racialTraits: [
      'Gros gabarit : Taille +1, Résistance +1.',
      'Vigueur d6 et Force d6 de départ.',
      'Lenteur : Allure 5 (au lieu de 6), coût d’Agilité augmenté.'
    ],
    sizeModifier: 1,
    bonusAttribute: 'force',
    paceModifier: -1
  },
  {
    id: 'hybride_rapide',
    name: 'Hybride Rapide (Simien/Guépard)',
    category: 'Hybride',
    description: 'Vitesse pure et motricité acrobatique au-dessus de la moyenne.',
    racialTraits: [
      'Vitesse fulgurante : Allure 8, dé de course d8.',
      'Agilité commence à d6.',
      'Ossature allégée : Résistance -1.'
    ],
    bonusAttribute: 'agilite',
    paceModifier: 2
  },
  {
    id: 'simulacre_soldat',
    name: 'Simulacre Soldat de Choc',
    category: 'Simulacre',
    description: 'Cloné et programmé dans des cuves pour mourir sur les lignes de front corpos.',
    racialTraits: [
      'Combattant né : Combat d6 et Force d6.',
      'Endurance martiale : Vigueur commence à d6.',
      'Conditionnement militaire : +2 contre la peur.',
      'Temps d’emprunt : durée de vie limitée (Handicap Majeur).'
    ],
    bonusAttribute: 'vigueur',
    bonusSkills: { 'Combat': 'd6' }
  },
  {
    id: 'simulacre_luxe',
    name: 'Simulacre de Compagnie & Influence',
    category: 'Simulacre',
    description: 'Morphologie sculptée pour plaire, séduire et infiltrer les hautes sphères.',
    racialTraits: [
      'Charisme magnétique : +2 en Persuasion et Séduction.',
      'Esprit vif : Intellect commence à d6.',
      'Conditionnement d’agrément (Handicap Mineur).',
      'Temps d’emprunt (Handicap Majeur).'
    ],
    bonusAttribute: 'intellect',
    bonusSkills: { 'Persuasion': 'd6' }
  }
];

export const ARCHETYPES: ArchetypeDefinition[] = [
  {
    id: 'ronin',
    name: 'Rônin (Samouraï des Rues)',
    description: 'Guerrier mercenaire d’élite au code d’honneur rigide, alliant lames monofilament et cyberware réflexe.',
    quote: '« Mon acier tranche les câbles aussi vite que les promesses corpos. »',
    suggestedRace: 'humain',
    attributes: { agilite: 'd8', ame: 'd6', force: 'd8', intellect: 'd4', vigueur: 'd8' },
    skills: { 'Combat': 'd8', 'Tir': 'd6', 'Athlétisme': 'd6', 'Intimidation': 'd6', 'Perception': 'd6', 'Discrétion': 'd4' },
    edges: ['Combattant réflexe', 'Guerrier augmenté', 'Blocage'],
    hindrances: ['Code d’honneur (Majeur)', 'Recherché (Mineur)', 'Têtu (Mineur)'],
    suggestedImplants: ['cablage_reflexe_1', 'lames_sous_cutanees', 'blindage_sous_cutane_1', 'tap_standard'],
    suggestedWeapons: ['katana_monofilament', 'pistolet_ares_predator'],
    suggestedArmor: ['manteau_tactique_renforce'],
    suggestedGear: ['medkit_militaire', 'stimpack_x2', 'munition_ap_x50'],
    creditsRemaining: 1800,
    tacticalRole: 'DPS Mêlée & Percée frontale'
  },
  {
    id: 'hacker',
    name: 'Hacker & Cyber-Opérateur TAP',
    description: 'Maître du flux binaire, infiltre les réseaux corpo, surcharge les implants ennemis et contrôle les systèmes de sécurité.',
    quote: '« Votre firewall est une porte ouverte avec un panneau "Bienvenue". »',
    suggestedRace: 'humain',
    attributes: { agilite: 'd6', ame: 'd6', force: 'd4', intellect: 'd10', vigueur: 'd6' },
    skills: { 'Hacking': 'd10', 'Programmation': 'd8', 'Recherche': 'd6', 'Perception': 'd6', 'Tir': 'd4', 'Discrétion': 'd6' },
    edges: ['As du Clavier', 'Maître du TAP', 'Interférence'],
    hindrances: ['Curieux (Majeur)', 'Physique chétif (Mineur)', 'Paranoïaque (Mineur)'],
    suggestedImplants: ['tap_militaire_gnet', 'processeur_synaptique', 'prise_de_donnees', 'biomoniteur'],
    suggestedWeapons: ['smg_micro_uzi', 'taser_hyper_choc'],
    suggestedArmor: ['veste_civile_kevlar'],
    suggestedGear: ['cyberdeck_deckmaster_x', 'logiciel_brise_glace', 'dactylo_passe_partout', 'cable_fibre_optique'],
    creditsRemaining: 2200,
    tacticalRole: 'Cyberguerre, Surveillance & Contrôle de zone'
  },
  {
    id: 'chasseur_primes',
    name: 'Chasseur de Primes',
    description: 'Traqueur méthodique des fugitifs et agents renégats dans le labyrinthe des mégalopoles.',
    quote: '« Vivant, c’est 10 000 crédits. Mort, c’est 5 000 et moins de paperasse. »',
    suggestedRace: 'humain_2_0',
    attributes: { agilite: 'd8', ame: 'd6', force: 'd6', intellect: 'd6', vigueur: 'd6' },
    skills: { 'Tir': 'd8', 'Combat': 'd6', 'Perception': 'd8', 'Recherche': 'd6', 'Intimidation': 'd6', 'Athlétisme': 'd6' },
    edges: ['Sang-froid', 'Tir de précision', 'Pisteur urbain'],
    hindrances: ['Cupide (Majeur)', 'Ennemi corpo (Mineur)', 'Cynique (Mineur)'],
    suggestedImplants: ['oeil_optique_smartlink', 'telemetre_laser', 'tap_standard', 'filtre_pulmonaire'],
    suggestedWeapons: ['fusil_sniper_barret_cyber', 'pistolet_ares_predator'],
    suggestedArmor: ['combinaison_tactique_urbaine'],
    suggestedGear: ['menottes_titanium_x3', 'fusil_grappin', 'balises_tracantes_x5', 'drone_mouche_espion'],
    creditsRemaining: 1500,
    tacticalRole: 'Tir à distance & Neutralisation ciblée'
  },
  {
    id: 'pilote_drone',
    name: 'Pilote de Drone (Rigger)',
    description: 'Commande une escouade de drones d’assaut et de reconnaissance via interface neuronale directe.',
    quote: '« Pourquoi risquer ma peau quand mes araignées de combat peuvent faire le ménage ? »',
    suggestedRace: 'bioroide',
    attributes: { agilite: 'd8', ame: 'd6', force: 'd4', intellect: 'd8', vigueur: 'd6' },
    skills: { 'Pilotage': 'd10', 'Tir': 'd6', 'Réparation': 'd8', 'Perception': 'd6', 'Hacking': 'd6', 'Athlétisme': 'd4' },
    edges: ['Pilote né', 'Lien machine', 'Réflexes de combat'],
    hindrances: ['Dépendant aux stimulants (Mineur)', 'Prudent à l’excès (Majeur)'],
    suggestedImplants: ['tap_militaire_gnet', 'interface_rigger_directe', 'oeil_optique_smartlink'],
    suggestedWeapons: ['pistolet_mitrailleur_p90', 'drone_araignee_assaut'],
    suggestedArmor: ['veste_civile_kevlar'],
    suggestedGear: ['console_rigger_remote', 'drone_araignee_assaut', 'drone_rotor_recon', 'boite_outils_nanotech'],
    creditsRemaining: 1900,
    tacticalRole: 'Appui-feu polyvalent & Reconnaissance tactique'
  },
  {
    id: 'ex_soldat',
    name: 'Ex-Soldat Vétéran',
    description: 'Survivant endurci des guerres corporatistes en Eurasie ou en Amérique du Sud, habitué aux armes lourdes.',
    quote: '« La guerre ne change jamais. Seul le calibre augmente. »',
    suggestedRace: 'simulacre_soldat',
    attributes: { agilite: 'd6', ame: 'd6', force: 'd8', intellect: 'd4', vigueur: 'd10' },
    skills: { 'Tir': 'd8', 'Combat': 'd8', 'Athlétisme': 'd6', 'Intimidation': 'd6', 'Survie': 'd6', 'Perception': 'd4' },
    edges: ['Dur à cuire', 'Soldat aguerri', 'Balançage automatique'],
    hindrances: ['Flashbacks traumatiques (Majeur)', 'Méfiant (Mineur)', 'Borgne (Mineur)'],
    suggestedImplants: ['bras_cybernetique_renforce', 'blindage_sous_cutane_1', 'pompe_adrenaline', 'tap_standard'],
    suggestedWeapons: ['fusil_assaut_fn_scar_cyber', 'fusil_pompe_combat_auto'],
    suggestedArmor: ['armure_combat_titanium'],
    suggestedGear: ['grenades_flashbang_x4', 'grenades_frag_x2', 'trousse_trauma_urgence'],
    creditsRemaining: 800,
    tacticalRole: 'Tank lourd & Puissance de feu continue'
  },
  {
    id: 'cybermoine',
    name: 'Cybermoine Transhumain',
    description: 'Disciple d’un culte syncrétique unissant méditation zen, cybernétique extrême et arts martiaux létaux.',
    quote: '« Le chrome libère l’esprit des faiblesses de la chair périssable. »',
    suggestedRace: 'cyborg',
    attributes: { agilite: 'd8', ame: 'd8', force: 'd8', intellect: 'd6', vigueur: 'd6' },
    skills: { 'Combat': 'd10', 'Athlétisme': 'd8', 'Perception': 'd6', 'Discrétion': 'd6', 'Persuasion': 'd4' },
    edges: ['Arts Martiaux Supérieurs', 'Frappe éclair', 'Méditation cybernétique'],
    hindrances: ['Vœu monastique (Majeur)', 'Pauvreté choisie (Mineur)', 'Pacifiste envers les innocents (Mineur)'],
    suggestedImplants: ['bras_cybernetique_renforce', 'jambes_cybernetiques_ressort', 'filtre_pulmonaire', 'tap_standard'],
    suggestedWeapons: ['baton_choc_energise', 'lames_sous_cutanees'],
    suggestedArmor: ['robe_monastique_kevlar'],
    suggestedGear: ['bâtonnets_encens_synthetique', 'medkit_premier_secours', 'rosa_cyber'],
    creditsRemaining: 3400,
    tacticalRole: 'Spécialiste corps-à-corps & Esquive'
  },
  {
    id: 'arnaqueur',
    name: 'Arnaqueur & Manipulateur (Face)',
    description: 'Orateur de génie capable d’embobiner un PDG de corpo ou un parrain de la mafia d’une seule poignée de main.',
    quote: '« La vérité est une marchandise comme une autre, et mon prix est très raisonnable. »',
    suggestedRace: 'simulacre_luxe',
    attributes: { agilite: 'd6', ame: 'd8', force: 'd4', intellect: 'd8', vigueur: 'd6' },
    skills: { 'Persuasion': 'd10', 'Provocation': 'd8', 'Jeu': 'd8', 'Connaissance générale': 'd6', 'Perception': 'd6', 'Tir': 'd4' },
    edges: ['Charismatique', 'Belle personne', 'Connexions dans la pègre'],
    hindrances: ['Cupide (Majeur)', 'Recherché par un cartel (Mineur)', 'Menteur compulsif (Mineur)'],
    suggestedImplants: ['modulateur_vocal_synthese', 'detecteur_micro_expressions', 'tap_standard', 'biomoniteur'],
    suggestedWeapons: ['derringer_dissimule_titanium', 'taser_hyper_choc'],
    suggestedArmor: ['costume_trois_pieces_tisse_aramide'],
    suggestedGear: ['fausse_carte_identite_x3', 'brouilleur_micro_frequence', 'cigares_cubains_synthetiques'],
    creditsRemaining: 4500,
    tacticalRole: 'Social, Infiltration diplomatique & Négociation'
  },
  {
    id: 'flic_secteur',
    name: 'Flic de Secteur (Détective GCPD)',
    description: 'Policier de quartier désabusé mais tenace patrouillant dans les zones de non-droit urbaines.',
    quote: '« La loi s’arrête au 40e étage. En bas, il n’y a que moi et mon pompe. »',
    suggestedRace: 'humain',
    attributes: { agilite: 'd6', ame: 'd8', force: 'd6', intellect: 'd6', vigueur: 'd6' },
    skills: { 'Tir': 'd8', 'Perception': 'd8', 'Intimidation': 'd6', 'Combat': 'd6', 'Recherche': 'd6', 'Pilotage': 'd6' },
    edges: ['Inspecteur chevronné', 'Dur au mal', 'Commandement'],
    hindrances: ['Idéaliste têtu (Majeur)', 'Ennemi parmi ses supérieurs (Mineur)', 'Fumeur invétéré (Mineur)'],
    suggestedImplants: ['oeil_optique_smartlink', 'enregistreur_audio_occipital', 'tap_standard'],
    suggestedWeapons: ['revolver_magnum_44_cyber', 'fusil_pompe_combat_auto'],
    suggestedArmor: ['gilet_pare_balles_police_lourd'],
    suggestedGear: ['insigne_police_officiel', 'menottes_haute_securite', 'lampe_torche_tactique', 'stimpack_x2'],
    creditsRemaining: 1200,
    tacticalRole: 'Investigation & Appui polyvalent'
  },
  {
    id: 'contrebandier',
    name: 'Contrebandier & Livreur Express',
    description: 'Pilote clandestin capable d’acheminer n’importe quoi à travers les check-points corpo à bord de son aéroglisseur custom.',
    quote: '« Si ça rentre dans ma soute, c’est déjà à destination. »',
    suggestedRace: 'humain',
    attributes: { agilite: 'd8', ame: 'd6', force: 'd6', intellect: 'd6', vigueur: 'd6' },
    skills: { 'Pilotage': 'd10', 'Tir': 'd6', 'Réparation': 'd6', 'Navigation': 'd6', 'Discrétion': 'd6', 'Perception': 'd4' },
    edges: ['Pilote d’élite', 'Chanceux', 'Sens de l’orientation'],
    hindrances: ['Dette envers un syndicat du crime (Majeur)', 'Audacieux (Mineur)', 'Pari compulsif (Mineur)'],
    suggestedImplants: ['reflexes_pilote_synaptiques', 'compartiment_secret_cyber', 'tap_standard'],
    suggestedWeapons: ['pistolet_mitrailleur_p90', 'canon_scié'],
    suggestedArmor: ['blouson_cuir_renforce'],
    suggestedGear: ['balise_antidétection', 'kit_faux_papiers_vehicule', 'boite_fusibles_secours'],
    creditsRemaining: 2600,
    tacticalRole: 'Mobilité, Extraction & Évasion'
  },
  {
    id: 'zeek',
    name: 'Zeek (Psionique Éveillé)',
    description: 'Mutant doté de pouvoirs psioniques traqué par les mégacorpos pour ses talents de télépathie et télékinésie.',
    quote: '« Vos pensées font autant de bruit qu’une alarme d’incendie. »',
    suggestedRace: 'humain_2_0',
    attributes: { agilite: 'd6', ame: 'd10', force: 'd4', intellect: 'd8', vigueur: 'd6' },
    skills: { 'Combat': 'd4', 'Perception': 'd8', 'Persuasion': 'd6', 'Intimidation': 'd6', 'Athlétisme': 'd6' },
    edges: ['Background Arcane (Psionique)', 'Volonté de fer', 'Puissance mentale accrue'],
    hindrances: ['Recherché par la corpo Psi (Majeur)', 'Maux de tête chroniques (Mineur)', 'Secret lourd (Mineur)'],
    suggestedImplants: ['tap_standard', 'biomoniteur_vital', 'stabilisateur_synaptique'],
    suggestedWeapons: ['pistolet_leger_silencieux', 'dague_ceramique'],
    suggestedArmor: ['manteau_tactique_renforce'],
    suggestedGear: ['bloqueurs_ondes_psi', 'stimulants_mentaux_x3', 'masque_respiratoire'],
    creditsRemaining: 2100,
    tacticalRole: 'Pouvoirs télépathiques, Soutien mental & Détection'
  },
  {
    id: 'rafistoleur',
    name: 'Rafistoleur & Cyber-Mécanicien',
    description: 'Génie du fer à souder, capable de réparer un membre cybernétique en pleine fusillade ou de booster une arme de fortune.',
    quote: '« Donnez-moi du ruban adhésif, une puce et 5 minutes, et ça repartira. »',
    suggestedRace: 'humain',
    attributes: { agilite: 'd6', ame: 'd6', force: 'd6', intellect: 'd10', vigueur: 'd6' },
    skills: { 'Réparation': 'd10', 'Programmation': 'd8', 'Tir': 'd6', 'Hacking': 'd6', 'Connaissance générale': 'd6', 'Combat': 'd4' },
    edges: ['Bricoleur de génie', 'MacGyver des rues', 'Ingénieux'],
    hindrances: ['Obsédé par la techno (Majeur)', 'Gourmand en pièces (Mineur)', 'Maladroit en public (Mineur)'],
    suggestedImplants: ['bras_cybernetique_outils_integres', 'optique_zoom_microscopique', 'tap_standard'],
    suggestedWeapons: ['pistolet_clous_industriel_modifie', 'cle_a_molette_choc'],
    suggestedArmor: ['combinaison_atelier_renforcee'],
    suggestedGear: ['valise_outils_cyberdoc', 'micro_soudeur_plasma', 'pieces_detachees_x10', 'drone_reparateur_nano'],
    creditsRemaining: 3100,
    tacticalRole: 'Maintenance, Crafting & Support matériel'
  },
  {
    id: 'ganger',
    name: 'Ganger des Bas-Fonds',
    description: 'Survivant brutal des guerres de territoire urbaines, arborant tatouages néons et armes improvisées dévastatrices.',
    quote: '« Ici, c’est notre territoire. Paye le péage ou laisse tes organes. »',
    suggestedRace: 'hybride_feroce',
    attributes: { agilite: 'd6', ame: 'd6', force: 'd8', intellect: 'd4', vigueur: 'd8' },
    skills: { 'Combat': 'd8', 'Intimidation': 'd8', 'Tir': 'd6', 'Athlétisme': 'd6', 'Discrétion': 'd4' },
    edges: ['Brute épaisse', 'Bagarreur de ruelle', 'Résistance à la douleur'],
    hindrances: ['Sanguinaire (Majeur)', 'Tatouages de gang reconnaissables (Mineur)', 'Illétré techno (Mineur)'],
    suggestedImplants: ['dents_acier_renforcees', 'muscles_synthetiques_1', 'tap_standard_gutterware'],
    suggestedWeapons: ['tronconneuse_de_poche', 'fusil_a_pompe_double_canon'],
    suggestedArmor: ['cuirasse_cloutee_metal'],
    suggestedGear: ['bombe_peinture_spray_x3', 'cocktails_molotov_x2', 'drogue_combat_slam_x2'],
    creditsRemaining: 1100,
    tacticalRole: 'Choc rapproché & Harcèlement'
  },
  {
    id: 'idole',
    name: 'Idole Virtuelle / Pop-Star Holo',
    description: 'Icône des médias de masse avec des millions d’abonnés sur le TAP, suivie jour et nuit par des drones caméras.',
    quote: '« Souriez ! Vous êtes en direct devant 40 millions de spectateurs ! »',
    suggestedRace: 'simulacre_luxe',
    attributes: { agilite: 'd6', ame: 'd10', force: 'd4', intellect: 'd6', vigueur: 'd6' },
    skills: { 'Persuasion': 'd10', 'Provocation': 'd8', 'Athlétisme': 'd6', 'Perception': 'd6', 'Tir': 'd4' },
    edges: ['Célébrité mondiale', 'Milliard d’adeptes', 'Provocateur né'],
    hindrances: ['Harceleur obsessionnel (Majeur)', 'Vaniteux (Mineur)', 'Peur de la laideur (Mineur)'],
    suggestedImplants: ['modulateur_vocal_synthese', 'peau_caméléon_holographique', 'tap_militaire_gnet'],
    suggestedWeapons: ['pistolet_or_et_platine', 'taser_bijou'],
    suggestedArmor: ['robe_de_soiree_kevlar_luminescente'],
    suggestedGear: ['drone_camera_streaming_4k', 'cosmetiques_haute_definition', 'carte_vip_boite_de_nuit'],
    creditsRemaining: 8000,
    tacticalRole: 'Buffs d’équipe, Distraction & Manipulation médiatique'
  },
  {
    id: 'rat_rues',
    name: 'Rat des Rues (Gamin de l’Asphalte)',
    description: 'Gamin agile et invisible ayant grandi dans les conduits d’aération des mégatours, maître du pickpocket et de l’évasion.',
    quote: '« Vous ne pouvez pas frapper ce que vous ne pouvez même pas voir. »',
    suggestedRace: 'hybride_furtif',
    attributes: { agilite: 'd10', ame: 'd6', force: 'd4', intellect: 'd6', vigueur: 'd6' },
    skills: { 'Discrétion': 'd10', 'Athlétisme': 'd8', 'Perception': 'd8', 'Combat': 'd4', 'Tir': 'd6' },
    edges: ['Insaisissable', 'Acrobate urbain', 'Passe-muraille'],
    hindrances: ['Chétif (Mineur)', 'Curiosité insatiable (Majeur)', 'Méfiant envers les adultes (Mineur)'],
    suggestedImplants: ['ligaments_ameliores_allure', 'oeil_optique_smartlink', 'tap_standard'],
    suggestedWeapons: ['arbalete_de_poing_silencieuse', 'couteau_surin_monomoleculaire'],
    suggestedArmor: ['sweat_a_capuche_renforce_aramide'],
    suggestedGear: ['kit_crochetage_electronique', 'corde_grappin_fine', 'granules_fumigenes_x4'],
    creditsRemaining: 1400,
    tacticalRole: 'Infiltration pure & Reconnaissance discrète'
  },
  {
    id: 'agent',
    name: 'Agent Infiltrateur Corpo',
    description: 'Professionnel froid et méthodique travaillant pour les opérations secrètes d’un mégagroupe transnational.',
    quote: '« Votre contrat d’existence vient d’être unilatéralement résilié. »',
    suggestedRace: 'humain_2_0',
    attributes: { agilite: 'd8', ame: 'd6', force: 'd6', intellect: 'd8', vigueur: 'd6' },
    skills: { 'Tir': 'd8', 'Discrétion': 'd8', 'Hacking': 'd6', 'Combat': 'd6', 'Perception': 'd6', 'Persuasion': 'd6' },
    edges: ['Assassin silencieux', 'Sang-froid', 'Connexions corpo'],
    hindrances: ['Loyauté corpo sous contrat (Majeur)', 'Sans pitié (Mineur)', 'Secret professionnel (Mineur)'],
    suggestedImplants: ['cablage_reflexe_1', 'peau_cameleon_stealth', 'tap_militaire_gnet', 'filtre_pulmonaire'],
    suggestedWeapons: ['pistolet_silencieux_laser', 'dague_monomoleculaire'],
    suggestedArmor: ['combinaison_stealth_thermo_optique'],
    suggestedGear: ['brouilleur_micro_ondes', 'balise_auto_destruction', 'puce_donnees_encryptee'],
    creditsRemaining: 4000,
    tacticalRole: 'Infiltration létale & Élimination ciblée'
  },
  {
    id: 'journaliste',
    name: 'Journaliste d’Investigation Clandestin',
    description: 'Chasseur de vérité armé de caméras espions, risquant sa peau pour exposer les atrocités des corporations.',
    quote: '« Ils peuvent payer les tribunaux, mais ils ne peuvent pas faire taire le réseau mondial. »',
    suggestedRace: 'humain',
    attributes: { agilite: 'd6', ame: 'd8', force: 'd4', intellect: 'd8', vigueur: 'd6' },
    skills: { 'Recherche': 'd10', 'Perception': 'd8', 'Persuasion': 'd8', 'Hacking': 'd6', 'Discrétion': 'd6', 'Tir': 'd4' },
    edges: ['Investigateur acharné', 'Réseau d’informateurs', 'Courageux'],
    hindrances: ['Ennemi des corpos (Majeur)', 'Paranoïa justifiée (Mineur)', 'Têtu (Mineur)'],
    suggestedImplants: ['enregistreur_audio_occipital', 'oeil_optique_smartlink', 'tap_standard'],
    suggestedWeapons: ['pistolet_compact_dissimule', 'bombe_lacrymogene'],
    suggestedArmor: ['veste_civile_kevlar'],
    suggestedGear: ['micro_drone_cam_4k', 'disque_dur_quantique_blindé', 'kit_survie_press_pass'],
    creditsRemaining: 2300,
    tacticalRole: 'Collecte d’indices, Révélations & Espionnage'
  }
];

export const IMPLANTS_CATALOG: ImplantItem[] = [
  // TAP & Réseau
  {
    id: 'tap_standard',
    name: 'TAP Basique (Trend Access Point)',
    category: 'tap',
    grade: 'streetware',
    strain: 1,
    cost: 1000,
    description: 'Interface neurale standard avec réalité augmentée, navigateur holographique et communication sécurisée.',
    effectsSummary: 'Firewall de base 4, accès réseau direct et flux AR permanent.',
    firewallBonus: 0
  },
  {
    id: 'tap_militaire_gnet',
    name: 'TAP Tactique Militaire G-Net',
    category: 'tap',
    grade: 'milware',
    strain: 2,
    cost: 8500,
    description: 'TAP renforcé avec pare-feu militaire anti-intrusion et module de cryptographie quantique.',
    effectsSummary: 'Firewall +2, réduction des malus de piratage subis.',
    firewallBonus: 2
  },
  {
    id: 'tap_standard_gutterware',
    name: 'TAP Bricolé Gutterware',
    category: 'tap',
    grade: 'gutterware',
    strain: 2,
    cost: 500,
    description: 'TAP de seconde main reflashé avec des pilotes instables mais fonctionnels.',
    effectsSummary: 'Firewall -1, sensible aux interférences magnétiques.',
    firewallBonus: -1
  },

  // Neural & Cerveau
  {
    id: 'processeur_synaptique',
    name: 'Processeur Synaptique Accéléré',
    category: 'neural',
    grade: 'hyperchrome',
    strain: 2,
    cost: 12000,
    description: 'Coprocesseur biologique augmentant la vitesse de calcul cérébrale.',
    effectsSummary: 'Intellect +1 cran (ou +2 aux jets de programmation/hacking).',
    skillBonus: { 'Hacking': 2, 'Programmation': 2 }
  },
  {
    id: 'prise_de_donnees',
    name: 'Prise de Données Cérébrale (Datajack)',
    category: 'neural',
    grade: 'streetware',
    strain: 1,
    cost: 1500,
    description: 'Port physique crânien permettant le transfert filaire ultra-rapide sans passer par le wifi.',
    effectsSummary: '+2 aux tests de Hacking filaire, insensible aux brouilleurs radio.'
  },
  {
    id: 'biomoniteur_vital',
    name: 'Biomoniteur Médical Intégré',
    category: 'neural',
    grade: 'streetware',
    strain: 1,
    cost: 2000,
    description: 'Sonde neurale surveillant le pouls, toxines, hémorragies et niveau de stress.',
    effectsSummary: '+2 aux jets d’Encaissement et signale instantanément les empoisonnements.'
  },
  {
    id: 'modulateur_vocal_synthese',
    name: 'Modulateur Vocal Polyphonique',
    category: 'neural',
    grade: 'streetware',
    strain: 1,
    cost: 3500,
    description: 'Implant laryngé capable d’imiter n’importe quelle voix enregistrée ou de générer des fréquences hypnotiques.',
    effectsSummary: '+2 en Persuasion ou Provocation lors de dialogues vocaux.'
  },

  // Sensoriel / Yeux & Oreilles
  {
    id: 'oeil_optique_smartlink',
    name: 'Œil Cybernétique avec Smartlink',
    category: 'sensory',
    grade: 'streetware',
    strain: 1,
    cost: 4000,
    description: 'Prothèse oculaire haute définition connectée à l’arme pour visée assistée.',
    effectsSummary: '+1 aux jets de Tir avec armes compatibles Smartlink, ignore 1 point de malus d’obscurité.'
  },
  {
    id: 'telemetre_laser',
    name: 'Télémètre Laser & Vision Thermique',
    category: 'sensory',
    grade: 'streetware',
    strain: 1,
    cost: 5000,
    description: 'Capteurs thermographiques permettant de voir à travers la fumée et les cloisons légères.',
    effectsSummary: 'Ignore totalement l’obscurité et le brouillard dans un rayon de 50m.'
  },
  {
    id: 'enregistreur_audio_occipital',
    name: 'Enregistreur Audio & Filtrage Fréquence',
    category: 'sensory',
    grade: 'streetware',
    strain: 1,
    cost: 2500,
    description: 'Oreilles bioniques capables d’isoler une conversation à 100 mètres.',
    effectsSummary: '+2 aux jets de Perception auditive, immunité aux bruits assourdissants.'
  },

  // Musculosquelettique / Vitesse & Force
  {
    id: 'cablage_reflexe_1',
    name: 'Câblage Réflexe Nodal (Niveau 1)',
    category: 'musculoskeletal',
    grade: 'streetware',
    strain: 2,
    cost: 8000,
    description: 'Câbles supraconducteurs le long de la moelle épinière pour une vitesse de réaction fulgurante.',
    effectsSummary: 'Agilité +1 cran (ou +2 aux cartes d’initiative).',
    parryBonus: 1
  },
  {
    id: 'cablage_reflexe_2',
    name: 'Câblage Réflexe Boosté (Niveau 2)',
    category: 'musculoskeletal',
    grade: 'milware',
    strain: 3,
    cost: 18000,
    description: 'Version militaire overclockée : réflexes presque prophétiques.',
    effectsSummary: 'Agilité +2 crans, Parade +1, retire automatiquement 1 secousse par round.',
    parryBonus: 1
  },
  {
    id: 'muscles_synthetiques_1',
    name: 'Fibres Musculaires Renforcées (Niveau 1)',
    category: 'musculoskeletal',
    grade: 'streetware',
    strain: 2,
    cost: 7500,
    description: 'Tressage de polymères myomères augmentant considérablement la force de contraction.',
    effectsSummary: 'Force +1 cran, capacité de charge +50%.',
    attributeBonus: { force: 1 }
  },
  {
    id: 'ligaments_ameliores_allure',
    name: 'Ligaments Améliorés & Tendons Carbone',
    category: 'musculoskeletal',
    grade: 'streetware',
    strain: 1,
    cost: 4500,
    description: 'Remplacement des tendons d’Achille et rotules par des ressorts en titane.',
    effectsSummary: 'Allure +2, dé de course augmenté d’un cran.',
    paceBonus: 2
  },

  // Cutané & Dermal
  {
    id: 'blindage_sous_cutane_1',
    name: 'Blindage Sous-Cutané (Plaques Carbone)',
    category: 'dermal',
    grade: 'streetware',
    strain: 2,
    cost: 6000,
    description: 'Plaques d’aramide et composite implantées sous l’épiderme.',
    effectsSummary: '+2 de Résistance (Armure naturelle empilable avec armure portée).',
    armorBonus: 2
  },
  {
    id: 'blindage_sous_cutane_2',
    name: 'Blindage Sous-Cutané Lourd (Alliage Titane)',
    category: 'dermal',
    grade: 'milware',
    strain: 4,
    cost: 15000,
    description: 'Armature sous-dermique militaire absorbant les impacts balistiques majeurs.',
    effectsSummary: '+4 de Résistance (Armure naturelle empilable).',
    armorBonus: 4
  },
  {
    id: 'peau_cameleon_stealth',
    name: 'Peau Caméléon Thermo-Optique',
    category: 'dermal',
    grade: 'hyperchrome',
    strain: 2,
    cost: 14000,
    description: 'Chromatophores nanotechnologiques reproduisant la texture et température de l’environnement.',
    effectsSummary: '+4 aux tests de Discrétion lorsque stationnaire, +2 en mouvement.',
    skillBonus: { 'Discrétion': 2 }
  },

  // Membres & Armes intégrées
  {
    id: 'bras_cybernetique_renforce',
    name: 'Bras Cybernétique Renforcé',
    category: 'limbs',
    grade: 'streetware',
    strain: 2,
    cost: 7000,
    description: 'Membre bionique industriel complet avec squelette en acier chromé.',
    effectsSummary: 'Force du bras égale à d10, résiste aux chutes et broyages.',
    armorBonus: 1
  },
  {
    id: 'jambes_cybernetiques_ressort',
    name: 'Paire de Jambes Cybernétiques Sautueuses',
    category: 'limbs',
    grade: 'streetware',
    strain: 2,
    cost: 9000,
    description: 'Prothèses complètes équipées d’amortisseurs hydrauliques.',
    effectsSummary: 'Allure +2, triple la distance de saut horizontal et vertical.',
    paceBonus: 2
  },
  {
    id: 'lames_sous_cutanees',
    name: 'Lames Rétractables d’Avant-Bras (Monofilament)',
    category: 'limbs',
    grade: 'streetware',
    strain: 1,
    cost: 5000,
    description: 'Lames dissimulées jaillissant des poignets sur simple impulsion nerveuse.',
    effectsSummary: 'Dégâts FOR+d8, Pénétration d’Armure 2, arme indétectable aux fouilles visuelles.'
  },
  {
    id: 'compartiment_secret_cyber',
    name: 'Compartiment Secret Dissimulé',
    category: 'limbs',
    grade: 'streetware',
    strain: 1,
    cost: 2000,
    description: 'Cavité hermétique protégée contre les scanners à rayons X.',
    effectsSummary: 'Permet de cacher une arme de poing ou un cyberdeck sans risque de détection.'
  },

  // Organes & Nanoware
  {
    id: 'filtre_pulmonaire',
    name: 'Filtre Pulmonaire & Branchie Chimique',
    category: 'organs',
    grade: 'streetware',
    strain: 1,
    cost: 3000,
    description: 'Organe de filtration neutralisant gaz lacrymogènes, toxines aéroportées et fumées.',
    effectsSummary: '+4 contre gaz toxiques et permet de respirer sous l’eau pendant 20 minutes.'
  },
  {
    id: 'pompe_adrenaline',
    name: 'Pompe à Adrénaline Synthétique',
    category: 'organs',
    grade: 'streetware',
    strain: 2,
    cost: 6500,
    description: 'Injecteur biochimique autonome se déclenchant lors d’un état de crise.',
    effectsSummary: 'Permet d’ignorer 1 point de malus de blessures pendant 5 rounds par combat.'
  },
  {
    id: 'nano_reparation_system',
    name: 'Système Nano-Réparateur de Sang',
    category: 'nanoware',
    grade: 'hyperchrome',
    strain: 2,
    cost: 16000,
    description: 'Colonie de nanites circulant dans le sang pour réparer instantanément les vaisseaux brisés.',
    effectsSummary: 'Jet naturel de guérison toutes les heures au lieu de chaque jour.'
  }
];

export const WEAPONS_CATALOG: WeaponItem[] = [
  // Mêlée
  {
    id: 'katana_monofilament',
    name: 'Katana Monofilament Carbone',
    category: 'Cac',
    range: 'Contact',
    damage: 'FOR+d8+2',
    rof: 1,
    shots: '-',
    minStr: 'd6',
    weight: 2,
    cost: 2500,
    ap: 4,
    notes: 'PA 4, Parade +1, Tranchant absolu'
  },
  {
    id: 'dague_monomoleculaire',
    name: 'Dague Monomoléculaire',
    category: 'Cac',
    range: 'Contact',
    damage: 'FOR+d4+2',
    rof: 1,
    shots: '-',
    minStr: 'd4',
    weight: 0.5,
    cost: 800,
    ap: 2,
    notes: 'PA 2, Facile à dissimuler (+2)'
  },
  {
    id: 'baton_choc_energise',
    name: 'Matraque Énergétique à Impulsion',
    category: 'Cac',
    range: 'Contact',
    damage: 'FOR+d6',
    rof: 1,
    shots: '20 charges',
    minStr: 'd4',
    weight: 1.5,
    cost: 600,
    notes: 'Non létal, test de Vigueur à -2 ou Secoué/Inconscient'
  },
  {
    id: 'cle_a_molette_choc',
    name: 'Clé Lourde Modifiée',
    category: 'Cac',
    range: 'Contact',
    damage: 'FOR+d6',
    rof: 1,
    shots: '-',
    minStr: 'd6',
    weight: 3,
    cost: 100,
    notes: 'Outil improvisé résistant'
  },

  // Pistolets
  {
    id: 'pistolet_ares_predator',
    name: 'Pistolet Lourd Ares Predator V',
    category: 'Pistolet',
    range: '12/24/48',
    damage: '2d6+1',
    rof: 1,
    shots: 15,
    minStr: 'd6',
    weight: 2,
    cost: 1200,
    ap: 2,
    notes: 'PA 2, Smartlink intégré, Semi-auto'
  },
  {
    id: 'pistolet_leger_silencieux',
    name: 'Pistolet Léger Silencieux Street-Ghost',
    category: 'Pistolet',
    range: '10/20/40',
    damage: '2d6-1',
    rof: 1,
    shots: 12,
    minStr: 'd4',
    weight: 1,
    cost: 750,
    ap: 1,
    notes: 'Silencieux intégré, PA 1, quasi inaudible'
  },
  {
    id: 'revolver_magnum_44_cyber',
    name: 'Revolver Ruger Super-Magnum .44',
    category: 'Pistolet',
    range: '15/30/60',
    damage: '2d8',
    rof: 1,
    shots: 6,
    minStr: 'd8',
    weight: 2.5,
    cost: 1500,
    ap: 2,
    notes: 'PA 2, Recul lourd, Arrêt net'
  },
  {
    id: 'taser_hyper_choc',
    name: 'Taser Balistique Neuro-Dart',
    category: 'Pistolet',
    range: '5/10/20',
    damage: 'Spécial',
    rof: 1,
    shots: 4,
    minStr: 'd4',
    weight: 1,
    cost: 450,
    notes: 'Non létal, cible Secouée et -2 à tous les jets pendant 3 rounds'
  },

  // PM & SMG
  {
    id: 'smg_micro_uzi',
    name: 'Pistolet-Mitrailleur Micro-Uzi Cyber',
    category: 'Pistolet-mitrailleur',
    range: '12/24/48',
    damage: '2d6',
    rof: 3,
    shots: 30,
    minStr: 'd6',
    weight: 2.5,
    cost: 1100,
    ap: 1,
    notes: 'Tir automatique, PA 1'
  },
  {
    id: 'pistolet_mitrailleur_p90',
    name: 'PM FN P90 Bullpup Tactique',
    category: 'Pistolet-mitrailleur',
    range: '12/24/48',
    damage: '2d6+1',
    rof: 3,
    shots: 50,
    minStr: 'd6',
    weight: 3,
    cost: 1800,
    ap: 2,
    notes: 'PA 2, Grande capacité de chargeur (50 billes)'
  },

  // Fusils
  {
    id: 'fusil_assaut_fn_scar_cyber',
    name: 'Fusil d’Assaut FN SCAR-2090',
    category: 'Fusil',
    range: '24/48/96',
    damage: '2d8',
    rof: 3,
    shots: 30,
    minStr: 'd6',
    weight: 4,
    cost: 2600,
    ap: 2,
    notes: 'PA 2, Sélecteur de tir (Coup par coup / Rafale 3 / Auto)'
  },
  {
    id: 'fusil_sniper_barret_cyber',
    name: 'Fusil de Sniper Lourd Barrett Cyber-Calibre',
    category: 'Fusil',
    range: '50/100/200',
    damage: '2d10',
    rof: 1,
    shots: 10,
    minStr: 'd8',
    weight: 8,
    cost: 4500,
    ap: 4,
    notes: 'PA 4, Lunette thermique zoom x10, Bipied déployable'
  },

  // Pompes & Lourds
  {
    id: 'fusil_pompe_combat_auto',
    name: 'Fusil de Pompe Automatique Pancor Jackhammer',
    category: 'Fusil à pompe',
    range: '12/24/48',
    damage: '1-3d6',
    rof: 2,
    shots: 10,
    minStr: 'd8',
    weight: 4.5,
    cost: 2200,
    notes: '+2 au Tir à courte portée, dispersion'
  },
  {
    id: 'grenades_frag_x2',
    name: 'Lot de Grenades à Fragmentation (x2)',
    category: 'Grenade',
    range: '5/10/20',
    damage: '3d6',
    rof: 1,
    shots: 2,
    minStr: 'd4',
    weight: 1,
    cost: 300,
    ap: 2,
    notes: 'Gabarit Moyen d’explosion, PA 2'
  }
];

export const ARMOR_CATALOG: ArmorItem[] = [
  {
    id: 'veste_civile_kevlar',
    name: 'Veste Civile Tissée Kevlar',
    category: 'Civil',
    armorBonus: 2,
    coverage: 'Torse, Bras',
    weight: 2,
    cost: 600,
    notes: 'Aspect vestimentaire tout à fait banal, passe inaperçue.'
  },
  {
    id: 'blouson_cuir_renforce',
    name: 'Blouson de Motard en Cuir Synthétique Blindé',
    category: 'Civil',
    armorBonus: 2,
    coverage: 'Torse, Bras',
    weight: 3,
    cost: 800,
    notes: 'Résistant aux coupures et abrasions.'
  },
  {
    id: 'manteau_tactique_renforce',
    name: 'Manteau Tactique Renforcé (Style Blade Runner)',
    category: 'Léger',
    armorBonus: 3,
    coverage: 'Torse, Bras, Jambes',
    weight: 4,
    cost: 1800,
    notes: 'Élégant, nombreuses poches intérieures discrètes.'
  },
  {
    id: 'combinaison_tactique_urbaine',
    name: 'Combinaison Tactique d’Intervention Urbaine',
    category: 'Moyen',
    armorBonus: 4,
    coverage: 'Corps complet',
    weight: 6,
    cost: 3200,
    notes: 'Isolation thermique et poches modulaires MOLLE.'
  },
  {
    id: 'armure_combat_titanium',
    name: 'Armure de Combat Lourde Titanium Militaire',
    category: 'Lourd',
    armorBonus: 6,
    coverage: 'Corps complet',
    weight: 12,
    cost: 7500,
    notes: 'Exige FOR d8. -1 à l’Agilité sans renforcement myomère.'
  },
  {
    id: 'costume_trois_pieces_tisse_aramide',
    name: 'Costume 3 Pièces Haute-Couture Aramide',
    category: 'Civil',
    armorBonus: 2,
    coverage: 'Torse, Jambes',
    weight: 1.5,
    cost: 3500,
    notes: '+1 aux jets de Persuasion en milieu corporatiste huppé.'
  }
];

export const GEAR_CATALOG: GearItem[] = [
  { id: 'cyberdeck_deckmaster_x', name: 'Cyberdeck DeckMaster Quantum-X', category: 'Électronique', weight: 2, cost: 5000, notes: '+2 en Hacking cybernétique en immersion.' },
  { id: 'dactylo_passe_partout', name: 'Séquenceur de Passe Électronique (Maglock)', category: 'Électronique', weight: 0.5, cost: 1200, notes: 'Permet de court-circuiter les portes à badge.' },
  { id: 'medkit_militaire', name: 'Trousse Trauma Medkit Militaire', category: 'Médical', weight: 2, cost: 800, notes: '+2 aux tests de Soins, comprend hémostatiques d’urgence.' },
  { id: 'stimpack_x2', name: 'Lot de Stimpacks de Combats (x2)', category: 'Médical', weight: 0.5, cost: 400, notes: 'Annule instantanément 1 niveau de fatigue ou secousse.' },
  { id: 'munition_ap_x50', name: 'Boîte de Munitions Perforantes AP (x50)', category: 'Munitions', weight: 1, cost: 350, notes: 'Confère PA 2 aux tirs avec arme balistique.' },
  { id: 'lunettes_hud_tactique', name: 'Lunettes HUD Réalité Augmentée', category: 'Électronique', weight: 0.2, cost: 900, notes: 'Affiche la trajectoire des tirs et le statut de l’équipe.' },
  { id: 'boite_outils_nanotech', name: 'Mallette d’Outils Nanotechnologiques', category: 'Outil', weight: 3, cost: 1500, notes: 'Outils auto-ajustables pour toute réparation électronique.' },
  { id: 'menottes_titanium_x3', name: 'Menottes en Titane Trempé (x3)', category: 'Survie', weight: 1, cost: 300, notes: 'Résistance de rupture FOR d12+4.' },
  { id: 'fusil_grappin', name: 'Pistolet Lance-Grappin Magnétique', category: 'Survie', weight: 1.5, cost: 650, notes: 'Câble de 30m en fil monofilament pouvant porter 300 kg.' }
];

export const DRONES_CATALOG: DroneItem[] = [
  {
    id: 'drone_mouche_espion',
    name: 'Micro-Drone Mouche Clandestine',
    size: 'Minuscule (-4 pour être touché)',
    pace: 'Vol 12 (Flottement)',
    toughness: 2,
    armor: 0,
    weapons: 'Micro-caméra 4K, micro-laser écoute',
    cost: 1500,
    sensor: 'Thermique, Optique',
    notes: 'Parfait pour s’infiltrer par les conduits d’aération.'
  },
  {
    id: 'drone_araignee_assaut',
    name: 'Drone Araignée Rampant d’Assaut Arach-9',
    size: 'Petit (-1 pour être touché)',
    pace: 'Course 8, Grimpette 8',
    toughness: 6,
    armor: 3,
    weapons: 'Pistolet-mitrailleur intégré (2d6, TdA 3, 60 coups)',
    cost: 5500,
    sensor: 'Radar 360°, Sonar, Infrarouge',
    notes: 'Capable de marcher aux plafonds et de verrouiller une zone.'
  },
  {
    id: 'drone_rotor_recon',
    name: 'Quadricoptère de Surveillance Sky-Eye',
    size: 'Moyen (Taille 0)',
    pace: 'Vol 20',
    toughness: 8,
    armor: 2,
    weapons: 'Taser balistique orientable',
    cost: 3800,
    sensor: 'Smartlink relais d’escouade (+1 Tir pour les alliés)',
    notes: 'Autonomie de 6 heures, mode patrouille autonome.'
  }
];

export const EDGES_CATALOG: EdgeDefinition[] = [
  { id: 'combattant_reflexe', name: 'Combattant Réflexe', category: 'Combat', requirements: 'Novice, Agilité d8', description: 'Tire des cartes supplémentaires pour l’initiative et garde la meilleure.' },
  { id: 'guerrier_augmente', name: 'Guerrier Augmenté', category: 'Cyber', requirements: 'Novice, Au moins 2 implants cybernétiques', description: '+1 en Parade et +1 en Résistance lorsque les implants fonctionnent.', isCyber: true },
  { id: 'blocage', name: 'Blocage', category: 'Combat', requirements: 'Novice, Combat d8', description: '+1 à la valeur de Parade face aux attaques de mêlée.' },
  { id: 'as_clavier', name: 'As du Clavier', category: 'Professionnel', requirements: 'Novice, Hacking d8, Intellect d8', description: '+2 à tous les jets de Hacking et réduit de moitié le temps nécessaire aux intrusions.' },
  { id: 'maitre_tap', name: 'Maître du TAP', category: 'Cyber', requirements: 'Novice, Intellect d8', description: 'Augmente de +2 le Firewall de votre TAP et permet d’exécuter 2 programmes simultanés.', isCyber: true },
  { id: 'interference', name: 'Interférence', category: 'Cyber', requirements: 'Novice, Hacking d6', description: 'Inflige un malus de -2 aux hackers ennemis tentant d’infiltrer votre réseau personnel.' },
  { id: 'sang_froid', name: 'Sang-Froid', category: 'Combat', requirements: 'Novice, Tir d8', description: 'Ignore 2 points de malus liés au recul, à la visée précipitée ou au tir en mouvement.' },
  { id: 'tir_precision', name: 'Tir de Précision', category: 'Combat', requirements: 'Novice, Tir d8', description: 'Lors d’une visée, ajoute +2 aux dégâts ou réduit l’armure de la cible de 2.' },
  { id: 'pilote_ne', name: 'Pilote Né', category: 'Professionnel', requirements: 'Novice, Agilité d8, Pilotage d8', description: '+2 à tous les jets de Pilotage et ignore les pénalités de terrain difficile.' },
  { id: 'lien_machine', name: 'Lien Machine', category: 'Cyber', requirements: 'Novice, Interface Rigger', description: 'Contrôle les drones et véhicules avec la pensée sans temps de latence (+2 aux jets de manœuvre).', isCyber: true },
  { id: 'dur_a_cuire', name: 'Dur à Cuire', category: 'Combat', requirements: 'Novice, Vigueur d8', description: 'Se remet plus facilement des blessures et bénéficie d’un jet de survie à +2 si Inconscient.' },
  { id: 'charismatique', name: 'Charismatique', category: 'Social', requirements: 'Novice, Âme d8', description: 'Bénéficie d’une relance gratuite sur les tests de Persuasion et Séduction.' },
  { id: 'tolerance_cybernetique', name: 'Tolérance Cybernétique', category: 'Cyber', requirements: 'Novice, Vigueur d8', description: 'Augmente votre seuil maximal de Cybertension de +2 points.', isCyber: true },
  { id: 'bricoleur_genie', name: 'Bricoleur de Génie', category: 'Professionnel', requirements: 'Novice, Réparation d8', description: 'Réduit de moitié le coût et le temps des réparations mécaniques et cybernétiques.' },
  { id: 'arts_martiaux_sup', name: 'Arts Martiaux Supérieurs', category: 'Combat', requirements: 'Novice, Combat d8', description: 'Mains nues considérées comme armes létales FOR+d6, ignore 1 point d’armure adverse.' }
];

export const HINDRANCES_CATALOG: HindranceDefinition[] = [
  { id: 'code_honneur', name: 'Code d’Honneur', severity: 'Majeur', description: 'Tient toujours sa parole, refuse d’attaquer un ennemi désarmé et protège ses clients au péril de sa vie.' },
  { id: 'recherche_syndicat', name: 'Recherché par la Mafia', severity: 'Majeur', description: 'Une prime substantielle a été mise sur votre tête par un cartel criminel ou un mégacorp.' },
  { id: 'curieux', name: 'Curieux Insatiable', severity: 'Majeur', description: 'Ne peut résister à l’envie d’ouvrir un fichier encrypté ou d’explorer une pièce sécurisée.' },
  { id: 'cupide', name: 'Cupide', severity: 'Majeur', description: 'L’argent est votre seule boussole morale. Prêt à renégocier un contrat pour le plus offrant.' },
  { id: 'ennemi_corpo', name: 'Ennemi Corpo', severity: 'Mineur/Majeur', description: 'Une mégacorporation spécifique traque vos agissements et pirate vos comptes bancaires.' },
  { id: 'physique_chetif', name: 'Chétif', severity: 'Mineur', description: 'Résistance réduite de 1 en raison d’une constitution physique fragile.' },
  { id: 'tetu', name: 'Têtu comme une mule', severity: 'Mineur', description: 'Refuse de suivre les ordres d’autrui et insiste toujours pour avoir le dernier mot.' },
  { id: 'paranoiaque', name: 'Paranoïaque', severity: 'Mineur', description: 'Vérifie chaque boisson, change de cyberdeck chaque semaine et ne dort que d’un œil.' },
  { id: 'dependance_slam', name: 'Dépendance Chimique (Slam / Neuro-Boost)', severity: 'Majeur', description: 'Doit consommer sa dose sous 24h sous peine de tremblements et malus de -2 à tous les jets.' },
  { id: 'arrogant', name: 'Arrogant', severity: 'Majeur', description: 'Méprise ouvertement ceux qu’il estime intellectuellement ou biologiquement inférieurs.' }
];
