// Données extraites et synchronisées du TECH COMPENDIUM (https://chuuwifr.github.io/cyberpunk-catalogue/)
// Contient les 328 matériels et armes avec double profil SWADE / Interface Zéro 2.0 et Cyberpunk RED.

export interface CompendiumItem {
  id: string;
  name: string;
  category: 'handguns' | 'longarms' | 'heavy' | 'melee' | 'armor' | 'weapon_mods' | 'cyberware' | 'drones_vehicles' | 'gear_tap' | 'pharma' | string;
  categoryLabel: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'very_rare' | 'legendary' | string;
  rarityLabel: string;
  manufacturer: string;
  origin: string;
  description: string;
  flavorQuote?: string;
  imageUrl?: string;
  fallbackIcon?: string;
  red?: {
    priceEb?: number;
    availability?: string;
    damage?: string;
    rof?: number;
    ammo?: string;
    magazine?: number;
    concealable?: boolean;
    sp?: number;
    humanityLoss?: string;
    installReq?: string;
  };
  iz: {
    priceCredits: number;
    quality?: string;
    cybertension?: number;
    damage?: string;
    range?: string;
    ap?: number;
    armorBonus?: number;
    weightKg?: number;
    firewall?: number;
    notes?: string;
  };
  tags?: string[];
}

export const COMPENDIUM_ITEMS: CompendiumItem[] = [
  {
    "id": "axolotl-cortex",
    "name": "Axolotl (Réducteur de Délai Neuronal)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Dogtown Black Market",
    "origin": "Cyberpunk Wiki",
    "description": "Implant neural bio-synthétique de pointe originaire des ateliers clandestins de Dogtown. À chaque élimination d'ennemi, l'Axolotl purge instantanément les tampons thermiques et synaptiques de tous les implants cybernétiques actifs, réduisant drastiquement leurs délais de recharge.",
    "flavorQuote": "« Pourquoi attendre que ton chrome refroidisse quand le sang de tes ennemis peut servir de liquide de refroidissement ? »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/90/SubdermalCoProcessor.png/revision/latest?cb=20210528115501",
    "fallbackIcon": "Cpu",
    "red": {
      "priceEb": 10000,
      "availability": "Exotique",
      "humanityLoss": "4d6 (14)",
      "concealable": true,
      "installReq": "Charcudoc spécialisé / Clinique"
    },
    "iz": {
      "priceCredits": 12500,
      "quality": "Milware",
      "cybertension": 4,
      "weightKg": 0.2,
      "notes": "À chaque adversaire neutralisé, recharge immédiatement 1 round de délai sur tous les cyber-implants actifs (Sandevistan, Berserk, Camouflage) et récupère 1 point de Cybertension temporaire."
    },
    "tags": [
      "cortex frontal",
      "iconique",
      "cooldown",
      "recharge",
      "phantom liberty",
      "cyberware"
    ]
  },
  {
    "id": "bioconductor-cortex",
    "name": "Bioconducteur Cérébral (Bioconductor)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Dynalar Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Système de dérivation synaptique reliant directement les fonctions motrices au cyberdeck. Permet aux netrunners d'exécuter des programmes de combat même lorsque leur réserve de RAM est totalement épuisée, en drainant directement leur endurance vitale.",
    "flavorQuote": "« Quand la mémoire tampon sature, la volonté prend le relais. À vos risques et périls cérébraux. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/42/BioConductors.png/revision/latest?cb=20230925192348",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 2000,
      "availability": "Très coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3500,
      "quality": "Hyperchrome",
      "cybertension": 3,
      "weightKg": 0.3,
      "notes": "Permet de lancer des programmes TAP ou sorts cybernétiques en dépensant 2 points de Souffle/Vigueur par point de RAM manquant lorsque la mémoire vive est à zéro."
    },
    "tags": [
      "cortex frontal",
      "netrunner",
      "ram",
      "overdrive",
      "cyberware"
    ]
  },
  {
    "id": "camillo-ram-manager",
    "name": "Gestionnaire de RAM Camillo",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Camillo Corp",
    "origin": "Cyberpunk Wiki",
    "description": "Puce mémoire de secours ultra-rapide. Dès que la mémoire vive du cyberdeck tombe sous les 20%, un condensateur supraconducteur réinjecte instantanément un paquet de RAM fraîche pour éviter la coupure de flux.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/df/CamilloRamManager.png/revision/latest?cb=20230925174523",
    "fallbackIcon": "Cpu",
    "red": {
      "priceEb": 2500,
      "availability": "Très coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 4200,
      "quality": "Corpware",
      "cybertension": 2,
      "firewall": 2,
      "weightKg": 0.1,
      "notes": "Une fois par combat, lorsque la RAM tombe à 0 ou 1, restaure immédiatement 30% de la RAM max (minimum 3 RAM) en action gratuite."
    },
    "tags": [
      "cortex frontal",
      "ram",
      "netrunner",
      "camillo",
      "cyberware"
    ]
  },
  {
    "id": "cox2-cybersomatic-optimizer",
    "name": "Optimiseur Cybersomatique COX-2",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "NetWatch",
    "origin": "Cyberpunk Wiki",
    "description": "Implant neural ultra-dense développé pour les agents d'intervention lourde de NetWatch. Il synchronise l'intensité cérébrale avec les protocoles d'attaque virtuelle, permettant à tous les quickhacks d'infliger des chocs critiques dévastateurs.",
    "flavorQuote": "« Conçu pour que chaque octet envoyé frappe avec la force d'un marteau de forgeron. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/42/BioConductors.png/revision/latest?cb=20230925192348",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 8500,
      "availability": "Exotique",
      "humanityLoss": "4d6 (14)",
      "concealable": true,
      "installReq": "Hôpital / Charcudoc NetWatch"
    },
    "iz": {
      "priceCredits": 11000,
      "quality": "Milware",
      "cybertension": 4,
      "weightKg": 0.2,
      "notes": "Tous les programmes offensifs TAP et cyberattaques bénéficient de l'Atout Coup Précis : chaque Relance sur le jet de Netrunning ajoute +1d6 dégâts psychiques additionnels."
    },
    "tags": [
      "cortex frontal",
      "iconique",
      "critique",
      "netwatch",
      "cyberware"
    ]
  },
  {
    "id": "ex-disk-cortex",
    "name": "Disque d'Extension Synaptique (Ex-Disk)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Coprocesseur de mémoire flash à semi-conducteurs étendant la capacité tampon de n'importe quel système neural ou cyberdeck embarqué de 4 à 6 unités de RAM supplémentaires.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/05/ExDisk.png/revision/latest?cb=20230928104613",
    "fallbackIcon": "Cpu",
    "red": {
      "priceEb": 1000,
      "availability": "Coûteux",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 1800,
      "quality": "Hyperchrome",
      "cybertension": 2,
      "firewall": 1,
      "weightKg": 0.1,
      "notes": "Augmente la réserve maximale de RAM du personnage de +3 unités et confère +1 aux jets de programmation TAP."
    },
    "tags": [
      "cortex frontal",
      "ram",
      "memoire",
      "zetatech",
      "cyberware"
    ]
  },
  {
    "id": "kerenzikov-boost-system",
    "name": "Système Amplificateur de Kerenzikov",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Module de synchronisation dédié venant s'accoupler au système Kerenzikov. Il élimine la pénalité d'endurance lors des tirs en mouvement et prolonge la dilatation temporelle perçue par le tireur.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/dd/KerenziovBoostSystem.png/revision/latest?cb=20230927062938",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 1500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 2600,
      "quality": "Milware",
      "cybertension": 2,
      "weightKg": 0.2,
      "notes": "Nécessite l'implant Kerenzikov. Confère +1 Parade additionnelle et permet de tirer à cadence maximale sans pénalité de recul lors de l'activation de la glissade réflexe."
    },
    "tags": [
      "cortex frontal",
      "kerenzikov",
      "militech",
      "reflexes",
      "cyberware"
    ]
  },
  {
    "id": "mechatronic-core",
    "name": "Noyau Méchatronique Anti-Drones",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "BioDyne",
    "origin": "Cyberpunk Wiki",
    "description": "Puce d'analyse balistique spécialisée pré-chargée avec les plans structurels de tous les blindages robotiques civils et militaires de Night City, optimisant les dégâts contre les drones, méchas et tourelles de +40%.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/ab/MechatronicCore.png/revision/latest?cb=20210618191028",
    "fallbackIcon": "Cpu",
    "red": {
      "priceEb": 600,
      "availability": "Standard",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 1200,
      "quality": "Streetware",
      "cybertension": 1,
      "weightKg": 0.1,
      "notes": "Confère +2 aux dégâts et +2 PA contre tous les drones, tourelles automatisées, robots de sécurité et véhicules terrestres."
    },
    "tags": [
      "cortex frontal",
      "anti-drone",
      "mecha",
      "biodyne",
      "cyberware"
    ]
  },
  {
    "id": "memory-boost-cortex",
    "name": "Boost de Mémoire Synaptique (Memory Boost)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Dynalar Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Micro-filtre synaptique recyclant les ondes delta résiduelles lors de la mise hors de combat d'un ennemi pour recharger instantanément de la RAM au cyberdeck.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/b5/MemoryBoost.png/revision/latest?cb=20230925180303",
    "fallbackIcon": "Cpu",
    "red": {
      "priceEb": 500,
      "availability": "Standard",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 950,
      "quality": "Standard",
      "cybertension": 1,
      "weightKg": 0.1,
      "notes": "Chaque adversaire neutralisé par une cyberattaque ou une arme à feu restaure immédiatement 1 point de RAM au personnage."
    },
    "tags": [
      "cortex frontal",
      "ram",
      "dynalar",
      "cyberware"
    ]
  },
  {
    "id": "newton-module-cortex",
    "name": "Module de Recyclage Newton",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Microprocesseur propriétaire Arasaka calibré pour accélérer le refroidissement et la redistribution d'énergie de l'ensemble des systèmes cybernétiques corporels après chaque élimination tactique.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/90/SubdermalCoProcessor.png/revision/latest?cb=20210528115501",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 1800,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3200,
      "quality": "Corpware",
      "cybertension": 2,
      "weightKg": 0.2,
      "notes": "Réduit les temps de recharge de tous les implants cybernétiques actifs de 1 round chaque fois qu'un adversaire est neutralisé à moins de 6 cases."
    },
    "tags": [
      "cortex frontal",
      "arasaka",
      "cooldown",
      "cyberware"
    ]
  },
  {
    "id": "quantum-tuner-cortex",
    "name": "Syntoniseur Quantique (Quantum Tuner)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Phantom Liberty Tech",
    "origin": "Cyberpunk Wiki",
    "description": "Relique technologique ultra-secrète développée dans les laboratoires noirs de la FIA sous Dogtown. Dès qu'un implant majeur (Sandevistan, Berserk ou Camouflage Optique) est totalement épuisé, le syntoniseur replie la trame quantique pour réinitialiser instantanément sa charge complète.",
    "flavorQuote": "« Deux fois plus vite, deux fois plus violent. Les lois de la thermodynamique sont un choix, pas une fatalité. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/e1/TimeBank.png/revision/latest?cb=20230925191101",
    "fallbackIcon": "Sparkles",
    "red": {
      "priceEb": 15000,
      "availability": "Exotique",
      "humanityLoss": "4d6 (14)",
      "concealable": true,
      "installReq": "Installation chirurgicale Black-Ops"
    },
    "iz": {
      "priceCredits": 18000,
      "quality": "Milware",
      "cybertension": 5,
      "weightKg": 0.3,
      "notes": "Une fois par combat, lorsque le personnage épuise totalement son implant principal (Sandevistan ou Berserk), sa charge complète est instantanément restaurée en action libre."
    },
    "tags": [
      "cortex frontal",
      "iconique",
      "phantom liberty",
      "fia",
      "quantique",
      "cyberware"
    ]
  },
  {
    "id": "ram-reallocator-cortex",
    "name": "Réallocateur Dynamique de RAM",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Raven Microcyber",
    "origin": "Cyberpunk Wiki",
    "description": "Algorithme d'auto-compression préventif développé par Raven Microcyber. Dès qu'un netrunner tente d'exécuter un programme trop gourmand ou subit un assèchement mémoire, l'implant libère un paquet de mémoire d'urgence compressée.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/df/CamilloRamManager.png/revision/latest?cb=20230925174523",
    "fallbackIcon": "Cpu",
    "red": {
      "priceEb": 3000,
      "availability": "Très coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 4800,
      "quality": "Corpware",
      "cybertension": 3,
      "firewall": 3,
      "weightKg": 0.2,
      "notes": "Restaure immédiatement 4 unités de RAM lorsque la mémoire disponible atteint zéro. Temps de recharge : 3 rounds."
    },
    "tags": [
      "cortex frontal",
      "ram",
      "raven",
      "netrunner",
      "cyberware"
    ]
  },
  {
    "id": "ram-upgrade-cortex",
    "name": "Mise à Niveau de RAM Synaptique",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Barrette de mémoire neurale standard de l'infanterie Militech augmentant la cadence de régénération de la mémoire de base du cyberdeck de +0.25 unités par seconde.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/7/71/RamUpgrade.png/revision/latest?cb=20230925182209",
    "fallbackIcon": "Cpu",
    "red": {
      "priceEb": 300,
      "availability": "Standard",
      "humanityLoss": "1d6 (2)",
      "concealable": true,
      "installReq": "Charcudoc de quartier"
    },
    "iz": {
      "priceCredits": 600,
      "quality": "Standard",
      "cybertension": 1,
      "weightKg": 0.1,
      "notes": "Augmente la vitesse de récupération de RAM de base du cyberdeck (+1 RAM récupérée par tour de combat)."
    },
    "tags": [
      "cortex frontal",
      "ram",
      "militech",
      "standard",
      "cyberware"
    ]
  },
  {
    "id": "self-ice-cortex",
    "name": "Glace Personnelle Autonome (Self-ICE)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "NetWatch",
    "origin": "Cyberpunk Wiki",
    "description": "Sous-programme anti-intrusion embarqué directement dans les axones cérébraux. Il intercepte et neutralise automatiquement la première cyberattaque ou tentative de piratage hostile sans intervention consciente du porteur.",
    "flavorQuote": "« Aucun démon ne franchit ma porte sans se faire désintégrer à la volée. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/99/SelfIce.png/revision/latest?cb=20230928104725",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 1500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 2800,
      "quality": "Milware",
      "cybertension": 2,
      "firewall": 4,
      "weightKg": 0.1,
      "notes": "Bloque et annule automatiquement la première cyberattaque ou tentative de piratage hostile subie lors de chaque affrontement. Confère +2 aux jets de Défense TAP par la suite."
    },
    "tags": [
      "cortex frontal",
      "ice",
      "anti-hack",
      "netwatch",
      "cyberware"
    ]
  },
  {
    "id": "chrome-compressor-os",
    "name": "Compresseur de Chrome (Chrome Compressor)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Dogtown Black Market",
    "origin": "Cyberpunk Wiki",
    "description": "Système d'exploitation radical qui renonce à toute capacité de piratage ou de dilatation temporelle pour canaliser 100% de la bande passante neurale vers l'accueil d'implants corporels massifs (+70 Capacité Cyberware). Le choix suprême des monstres d'acier et des cyber-monstres.",
    "flavorQuote": "« Pourquoi pirater un type quand tu peux lui arracher le thorax à mains nues avec 400 kilos de chrome pur ? »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/7/7c/CyberwareCapacityBooster.png/revision/latest?cb=20230930113934",
    "fallbackIcon": "Cpu",
    "red": {
      "priceEb": 12000,
      "availability": "Exotique",
      "humanityLoss": "4d6 (14)",
      "concealable": false,
      "installReq": "Hôpital chirurgical / Dogtown"
    },
    "iz": {
      "priceCredits": 15000,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 4.5,
      "notes": "Augmente la limite maximale de Cybertension supportable par le personnage de +5 points permanents, mais empêche l'utilisation de tout Cyberdeck ou Sandevistan."
    },
    "tags": [
      "système d'exploitation",
      "iconique",
      "capacite",
      "chrome",
      "dogtown",
      "cyberware"
    ]
  },
  {
    "id": "militech-apogee-sandevistan",
    "name": "Militech « Apogee » Sandevistan",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Le chef-d'œuvre absolu de la division des opérations spéciales de Militech. Ralentit la perception du temps jusqu'à 85%, tout en démultipliant la vitesse des tirs, des mouvements et des coups de mêlée. Activable et désactivable à volonté quel que soit le niveau de charge restant, chaque ennemi abattu rallonge la durée d'activité.",
    "flavorQuote": "« Les balles volent à la vitesse de coquillages sous l'eau. Eux clignent des yeux ; toi, tu as déjà nettoyé la pièce. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/bb/SandevistanApogee.png/revision/latest?cb=20230924192213",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 16000,
      "availability": "Exotique",
      "humanityLoss": "4d6 (14)",
      "concealable": true,
      "installReq": "Centre chirurgical Militech"
    },
    "iz": {
      "priceCredits": 20000,
      "quality": "Milware",
      "cybertension": 4,
      "weightKg": 1.5,
      "notes": "Activable à tout moment. Confère +2 Actions par round sans pénalité de multi-action, Allure +6, Parade +2, et chaque ennemi éliminé pendant l'effet prolonge la durée de 1 round complet."
    },
    "tags": [
      "système d'exploitation",
      "sandevistan",
      "iconique",
      "militech",
      "ralenti",
      "cyberware"
    ]
  },
  {
    "id": "militech-falcon-sandevistan",
    "name": "Militech « Falcon » Sandevistan Mk.5",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Système Sandevistan militaire lourd conçu pour les escouades de choc. Ralentit le temps de 70%, augmente les dégâts critiques de 10% et confère une régénération accélérée pendant toute la durée de la décharge neurale.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/56/SandevistanC4.png/revision/latest?cb=20230925062810",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 8000,
      "availability": "Très coûteux",
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique Militech"
    },
    "iz": {
      "priceCredits": 10500,
      "quality": "Milware",
      "cybertension": 4,
      "weightKg": 1.2,
      "notes": "Ralentit le temps de 70% : Allure +4, Parade +2, Dégâts de mêlée et de tir +2, et guérit 1 niveau de Secoué dès l'activation."
    },
    "tags": [
      "système d'exploitation",
      "sandevistan",
      "militech",
      "cyberware"
    ]
  },
  {
    "id": "qiant-warp-dancer-sandevistan",
    "name": "QianT « Warp Dancer » Sandevistan Mk.5",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "QianT",
    "origin": "Cyberpunk Wiki",
    "description": "Conçu pour les assassins d'élite et duellistes urbains. Il génère une impulsion neurale ultra-violente ralentissant le temps de 90% pendant une courte fenêtre d'action de quelques secondes d'une intensité inouïe.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/8d/SandevistanC3.png/revision/latest?cb=20230925062754",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 11000,
      "availability": "Exotique",
      "humanityLoss": "4d6 (14)",
      "concealable": true,
      "installReq": "Clinique privée"
    },
    "iz": {
      "priceCredits": 14000,
      "quality": "Hyperchrome",
      "cybertension": 4,
      "weightKg": 1,
      "notes": "Durant 2 rounds complets, ralentit le temps à l'extrême : les cibles ciblées sont considérées comme Sans Défense (+4 au toucher, dégâts d'attaque sournoise). Temps de recharge : 4 rounds."
    },
    "tags": [
      "système d'exploitation",
      "sandevistan",
      "qiant",
      "assassin",
      "cyberware"
    ]
  },
  {
    "id": "sandevistan-dynalar",
    "name": "Dynalar Sandevistan Mk.4",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Dynalar Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Le Sandevistan le plus réputé et le plus fiable de Night City. Équilibré entre durée d'utilisation (16s), ralentissement (50%) et temps de recharge modéré, plébiscité par les solos professionnels.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/62/SandevistanC2.png/revision/latest?cb=20230925061549",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 5000,
      "availability": "Coûteux",
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Charcudoc professionnel"
    },
    "iz": {
      "priceCredits": 6500,
      "quality": "Corpware",
      "cybertension": 3,
      "weightKg": 1.1,
      "notes": "Ralentit le temps de 50% : Allure +4, Parade +1, confère un bonus de +2 pour esquiver les tirs ennemis pendant 3 rounds."
    },
    "tags": [
      "système d'exploitation",
      "sandevistan",
      "dynalar",
      "solos",
      "cyberware"
    ]
  },
  {
    "id": "zetatech-sandevistan-os",
    "name": "Zetatech Sandevistan Mk.3",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Modèle accessible aux edgerunners au budget serré. Accélère la transmission des influx spinaux pour des réflexes accrus lors des engagements rapprochés.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/93/SandevistanC1.png/revision/latest?cb=20230925061532",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 2200,
      "availability": "Standard",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique de quartier"
    },
    "iz": {
      "priceCredits": 3000,
      "quality": "Streetware",
      "cybertension": 2,
      "weightKg": 1,
      "notes": "Ralentit le temps de 30% : Allure +2, Parade +1 pendant 2 rounds. Recharge rapide."
    },
    "tags": [
      "système d'exploitation",
      "sandevistan",
      "zetatech",
      "cyberware"
    ]
  },
  {
    "id": "militech-berserk-os",
    "name": "Militech Berserk Militaire Mk.5",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Système d'overdrive métabolique de combat lourd. Enclenche une cascade hormonale et neuro-stimulante bloquant 100% des signaux de douleur, doublant la force brute et permettant les atterrissages de super-héros avec onde de choc dévastatrice.",
    "flavorQuote": "« Les os se ressoudent sous la pression. Plus ils frappent, plus tu deviens inarrêtable. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/56/BerserkC4.png/revision/latest?cb=20230925065430",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 9500,
      "availability": "Très coûteux",
      "humanityLoss": "3d6 (10)",
      "concealable": false,
      "installReq": "Hôpital militaire"
    },
    "iz": {
      "priceCredits": 12000,
      "quality": "Milware",
      "cybertension": 4,
      "weightKg": 2.8,
      "notes": "Durant l'effet Berserk (3 rounds) : Encaissement +4, Force +2 crans, ignore tout malus de blessures, et tout atterrissage depuis une hauteur déclenche une onde de choc de 3d6 PA 2 sur 3 cases."
    },
    "tags": [
      "système d'exploitation",
      "berserk",
      "militech",
      "tank",
      "corps-a-corps",
      "cyberware"
    ]
  },
  {
    "id": "biodyne-berserk-mk4",
    "name": "BioDyne Berserk Mk.4",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "BioDyne",
    "origin": "Cyberpunk Wiki",
    "description": "Implant endocrinien conçu pour les combattants de rue et boxeurs des bas-fonds de Pacífica. Décuple la densité des fibres musculaires et accélère la coagulation des plaies ouvertes.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/c2/BerserkC2.png/revision/latest?cb=20230925065404",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 4500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": false,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 5800,
      "quality": "Hyperchrome",
      "cybertension": 3,
      "weightKg": 2.2,
      "notes": "Durant l'effet Berserk : Dégâts de mêlée +4, Résistance +2, et guérit 1 niveau de fatigue à l'extinction du mode."
    },
    "tags": [
      "système d'exploitation",
      "berserk",
      "biodyne",
      "force",
      "cyberware"
    ]
  },
  {
    "id": "moore-tech-berserk-os",
    "name": "Moore Tech Berserk Industriel Mk.2",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Moore Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Modèle robuste issu des exosquelettes industriels lourds, conçu pour encaisser des impacts répétés sur les chantiers orbitaux et chantiers navals.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/25/BerserkC1.png/revision/latest?cb=20230925065354",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 2000,
      "availability": "Standard",
      "humanityLoss": "2d6 (7)",
      "concealable": false,
      "installReq": "Charcudoc certifié"
    },
    "iz": {
      "priceCredits": 2600,
      "quality": "Standard",
      "cybertension": 2,
      "weightKg": 2,
      "notes": "Durant l'activation : Encaissement +2 et immunité aux bousculades ou renversements pendant 2 rounds."
    },
    "tags": [
      "système d'exploitation",
      "berserk",
      "moore tech",
      "cyberware"
    ]
  },
  {
    "id": "zetatech-berserk-os",
    "name": "Zetatech Berserk Urbain Mk.4",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Berserk à déclenchement ultra-nerveux optimisé pour la vitesse de frappe et la récupération d'endurance en combat rapproché.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/4f/BerserkC3.png/revision/latest?cb=20230925065418",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 3800,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": false,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 4900,
      "quality": "Streetware",
      "cybertension": 3,
      "weightKg": 1.8,
      "notes": "Durant l'effet : Vigueur +1 cran, vitesse de déplacement +2 cases, et régénération de 1 point de souffle par round."
    },
    "tags": [
      "système d'exploitation",
      "berserk",
      "zetatech",
      "cyberware"
    ]
  },
  {
    "id": "militech-canto-mk6",
    "name": "Militech Canto Mk.6 (Corrompu par le Mur Noir)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Militech / Blackwall AI",
    "origin": "Cyberpunk Wiki",
    "description": "Cyberdeck militaire ultra-confidentiel découvert dans les installations désaffectées de Cynosure sous Dogtown. Il abrite un fragment d'IA hostile venue d'au-delà du Mur Noir. Permet de canaliser l'attaque légendaire « Passerelle du Mur Noir », qui incinère le système nerveux central des cibles et se propage d'ennemi en ennemi.",
    "flavorQuote": "« J'entends leurs pensées brûler. Le Mur Noir a faim, et toi, tu tiens la laisse. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/9d/HauntedCyberdeck.png/revision/latest?cb=20230925103117",
    "fallbackIcon": "Terminal",
    "red": {
      "priceEb": 20000,
      "availability": "Exotique",
      "humanityLoss": "4d6 (14)",
      "concealable": true,
      "installReq": "Installation chirurgicale Black-Ops"
    },
    "iz": {
      "priceCredits": 25000,
      "quality": "Milware",
      "cybertension": 5,
      "firewall": 5,
      "weightKg": 2,
      "notes": "Débloque le programme unique Passerelle du Mur Noir : inflige 3d6 PA 6 dégâts mentaux ignorant toute armure corporelle, se propageant automatiquement à 4 cibles supplémentaires à moins de 4 cases. Consomme 12 RAM."
    },
    "tags": [
      "système d'exploitation",
      "cyberdeck",
      "iconique",
      "mur noir",
      "blackwall",
      "canto",
      "cyberware"
    ]
  },
  {
    "id": "netwatch-netdriver-os",
    "name": "Cyberdeck NetWatch Netdriver Mk.5",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "NetWatch",
    "origin": "Cyberpunk Wiki",
    "description": "Le cyberdeck suprême déployé par les agents de NetWatch pour patrouiller le Mur Noir. Processeurs quantiques supraconducteurs capables de lancer des démons de combat simultanément sur tout un sous-réseau sans surcoût de RAM.",
    "flavorQuote": "« Au-delà du Mur Noir dorment des entités monstrueuses. Le Netdriver est la seule grille pare-feu capable de les repousser. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d1/NetWatchNetdriver.png/revision/latest?cb=20230925101710",
    "fallbackIcon": "Terminal",
    "red": {
      "priceEb": 9000,
      "availability": "Exotique",
      "humanityLoss": "3d6 (10)",
      "sp": 15,
      "concealable": true,
      "installReq": "Centre agréé NetWatch"
    },
    "iz": {
      "priceCredits": 11500,
      "quality": "Milware",
      "cybertension": 3,
      "firewall": 10,
      "weightKg": 1.8,
      "notes": "Règles SWADE : Cyberdeck de Maître : Firewall 10, +3 aux jets de Piratage/Cyberespace. Permet de diffuser un programme ou daemon offensif sur jusqu’à 3 cibles distinctes en une seule action sans surcoût de RAM. Capacité 13 RAM."
    },
    "tags": [
      "système d'exploitation",
      "cyberdeck",
      "netwatch",
      "netrunning",
      "mur-noir",
      "multi-cible",
      "quantique",
      "cyberware",
      "tap"
    ]
  },
  {
    "id": "tetratronic-rippler-os",
    "name": "Cyberdeck Tetratronic Rippler (Mk.4 / Mk.5)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Tetratronic",
    "origin": "Cyberpunk Wiki",
    "description": "La console d'intrusion matricielle par excellence des Netrunners d'élite. Conçue pour propager les Daemons offensifs avec un temps de recharge divisé par deux et surcharger les cyberwares ennemis instantanément.",
    "flavorQuote": "« Connectez-vous, surchargez les relais neuronaux et regardez leurs implants griller avant qu’ils n’aient pu dégainer. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/5d/TetratronicRippler.png/revision/latest?cb=20230925092254",
    "fallbackIcon": "Terminal",
    "red": {
      "priceEb": 6500,
      "availability": "Très Cher",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique chirurgicale"
    },
    "iz": {
      "priceCredits": 10500,
      "quality": "Milware",
      "cybertension": 2,
      "firewall": 10,
      "weightKg": 1.2,
      "notes": "Règles SWADE : Firewall 10, 8 slots AMS. +3 aux jets de Hacking (Pénétration de Firewall et Détection d’intrusion). Permet de hacker 2 cibles à la fois sans pénalité et réduit le coût en RAM des daemons de combat de 1."
    },
    "tags": [
      "système d'exploitation",
      "cyberdeck",
      "netrunning",
      "tetratronic",
      "daemons",
      "quickhack",
      "cyberware",
      "tap"
    ]
  },
  {
    "id": "arasaka-shadow-cyberdeck",
    "name": "Arasaka Shadow Mk.4",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Cyberdeck d'infiltration et d'assassinat furtif Arasaka. Masque entièrement la signature électronique de l'opérateur, rendant impossible la traçabilité des intrusions dans les sous-réseaux ennemis.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/ef/ArasakaShadow.png/revision/latest?cb=20210605075722",
    "fallbackIcon": "Terminal",
    "red": {
      "priceEb": 7500,
      "availability": "Très coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique Arasaka"
    },
    "iz": {
      "priceCredits": 9200,
      "quality": "Corpware",
      "cybertension": 3,
      "firewall": 4,
      "weightKg": 1.4,
      "notes": "Les cyberattaques lancées depuis ce deck ne révèlent jamais la position physique du hacker. Confère +3 aux jets de Discrétion dans le cyberespace."
    },
    "tags": [
      "système d'exploitation",
      "cyberdeck",
      "arasaka",
      "furtivite",
      "cyberware"
    ]
  },
  {
    "id": "raven-microcyber-os",
    "name": "Cyberdeck Raven Microcyber (Mk.3 / Mk.4)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Raven Microcyber",
    "origin": "Cyberpunk Wiki",
    "description": "Console portable pour Netrunner de combat avec 8 slots de programmes d'intrusion, dissipateurs thermiques au graphène et bus neural à ultra-faible latence. Spécialisé dans la propagation virale de zone.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/3b/RavenMicrocyber.png/revision/latest?cb=20261028165215",
    "fallbackIcon": "Terminal",
    "red": {
      "priceEb": 3500,
      "availability": "Cher",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 6500,
      "quality": "Hyperchrome",
      "cybertension": 2,
      "firewall": 8,
      "weightKg": 1.3,
      "notes": "Règles SWADE : Firewall 8, 8 slots de programmes (6 AMS intégrés). +2 aux jets de Hacking (Pénétration de Firewall). Rayon de contagion des virus et démons augmenté de +4 cases. Neutralise les tentatives de traçage ennemi pendant 1 tour."
    },
    "tags": [
      "système d'exploitation",
      "cyberdeck",
      "raven",
      "propagation",
      "ice",
      "intrusion",
      "cyberware",
      "tap"
    ]
  },
  {
    "id": "biotech-sigma-cyberdeck",
    "name": "Biotech Sigma (Cyberdeck Bio-Hybride)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Biotechnica",
    "origin": "Cyberpunk Wiki",
    "description": "Architecture cyber-organique révolutionnaire basée sur des réseaux de neurones clonés en cuve. La mémoire vive se régénère en harmonie avec le rythme cardiaque du porteur.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/ce/BiotechSigma.png/revision/latest?cb=20230925092353",
    "fallbackIcon": "Terminal",
    "red": {
      "priceEb": 3500,
      "availability": "Coûteux",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Clinique Biotechnica"
    },
    "iz": {
      "priceCredits": 4400,
      "quality": "Bioware",
      "cybertension": 2,
      "firewall": 2,
      "weightKg": 1.1,
      "notes": "Régénère la RAM 50% plus vite que la normale tant que le personnage n'a subi aucune Blessure. Capacité 8 RAM."
    },
    "tags": [
      "système d'exploitation",
      "cyberdeck",
      "biotechnica",
      "bioware",
      "cyberware"
    ]
  },
  {
    "id": "militech-paraline-os",
    "name": "Militech Paraline de Base",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Le cyberdeck d'entraînement militaire standard fourni aux recrues et mercenaires novices. Basique, fiable, facile à entretenir et à réparer avec des pièces de récupération.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/23/MilitechParaline.png/revision/latest?cb=20230925094313",
    "fallbackIcon": "Terminal",
    "red": {
      "priceEb": 1000,
      "availability": "Standard",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Charcudoc de quartier"
    },
    "iz": {
      "priceCredits": 1200,
      "quality": "Standard",
      "cybertension": 1,
      "firewall": 1,
      "weightKg": 1.2,
      "notes": "Capacité 6 RAM, Firewall 1. Console solide et simple d'utilisation."
    },
    "tags": [
      "système d'exploitation",
      "cyberdeck",
      "militech",
      "standard",
      "cyberware"
    ]
  },
  {
    "id": "gorilla-arms",
    "name": "Bras de Gorille Industriels (Gorilla Arms)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Prothèses brachiales hydrauliques renforcées en alliage de titane et céramique composite. Conçues pour pulvériser les crânes, tordre les barres de fer et arracher les portes blindées comme du carton.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/35/StrongArms.png/revision/latest?cb=20230928072235",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 5000,
      "availability": "Très coûteux",
      "damage": "3d6",
      "rof": 2,
      "humanityLoss": "3d6 (10)",
      "concealable": false,
      "installReq": "Clinique chirurgicale"
    },
    "iz": {
      "priceCredits": 6200,
      "quality": "Milware",
      "cybertension": 3,
      "damage": "Force+d8",
      "ap": 2,
      "weightKg": 5.5,
      "notes": "Force +2 crans (jusqu'à d12+2). Dégâts Force+d8 PA 2. Confère +2 à tous les jets pour enfoncer des portes, arracher des tourelles ou soulever des charges massives."
    },
    "tags": [
      "bras cybernétiques",
      "force",
      "gorilla arms",
      "militech",
      "cyberware"
    ]
  },
  {
    "id": "gorilla-arms-electrifying",
    "name": "Bras de Gorille Électrifiés (IEM)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Bras de gorille dotés de condensateurs supraconducteurs délivrant une décharge électrique à haute tension à chaque frappe d'impact.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/35/StrongArms.png/revision/latest?cb=20230928072235",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 6000,
      "availability": "Très coûteux",
      "damage": "3d6 + IEM",
      "rof": 2,
      "humanityLoss": "3d6 (10)",
      "concealable": false,
      "installReq": "Clinique chirurgicale"
    },
    "iz": {
      "priceCredits": 7500,
      "quality": "Milware",
      "cybertension": 3,
      "damage": "Force+d8+d6",
      "ap": 3,
      "weightKg": 5.8,
      "notes": "Dégâts Force+d8+d6 électrique PA 3. Les cibles mécaniques ou cybernétiques doivent réussir un jet de Vigueur ou subir l'état Secoué/Court-circuit."
    },
    "tags": [
      "bras cybernétiques",
      "gorilla arms",
      "electrique",
      "iem",
      "cyberware"
    ]
  },
  {
    "id": "gorilla-arms-thermal",
    "name": "Bras de Gorille Thermiques",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Équipés d'éléments de chauffe par induction magnéto-thermique, surchauffant les phalanges à plus de 900°C pour cautériser et fondre les blindages.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/35/StrongArms.png/revision/latest?cb=20230928072235",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 6000,
      "availability": "Très coûteux",
      "damage": "3d6 + Brûlure",
      "rof": 2,
      "humanityLoss": "3d6 (10)",
      "concealable": false,
      "installReq": "Clinique chirurgicale"
    },
    "iz": {
      "priceCredits": 7500,
      "quality": "Milware",
      "cybertension": 3,
      "damage": "Force+d8+d6",
      "ap": 4,
      "weightKg": 5.8,
      "notes": "Dégâts Force+d8+d6 thermique PA 4. Inflige le statut Enflammé sur un résultat de 5 ou 6 au dé de dégâts thermiques."
    },
    "tags": [
      "bras cybernétiques",
      "gorilla arms",
      "thermique",
      "feu",
      "cyberware"
    ]
  },
  {
    "id": "gorilla-arms-toxic",
    "name": "Bras de Gorille Toxiques / Chimiques",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Micro-canules sous-cutanées injectant des acides corrosifs et neurotoxines déliquescentes à travers les phalanges lors de chaque impact.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/35/StrongArms.png/revision/latest?cb=20230928072235",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 6000,
      "availability": "Très coûteux",
      "damage": "3d6 + Poison",
      "rof": 2,
      "humanityLoss": "3d6 (10)",
      "concealable": false,
      "installReq": "Clinique chirurgicale"
    },
    "iz": {
      "priceCredits": 7500,
      "quality": "Milware",
      "cybertension": 3,
      "damage": "Force+d8+d4",
      "ap": 2,
      "weightKg": 5.6,
      "notes": "Dégâts Force+d8 PA 2 + Poison virulent (jet de Vigueur à -2 sous peine de subir 1 niveau de Fatigue toxique supplémentaire)."
    },
    "tags": [
      "bras cybernétiques",
      "gorilla arms",
      "toxique",
      "poison",
      "cyberware"
    ]
  },
  {
    "id": "mantis-blades-standard",
    "name": "Lames Mantis (Mantis Blades)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Arasaka / KCD",
    "origin": "Cyberpunk Wiki",
    "description": "Lames rétractables de carbure de titane repliées le long des avant-bras au tranchant monomoléculaire. Se déploient en une fraction de seconde pour des frappes tranchantes foudroyantes et des bonds meurtriers.",
    "flavorQuote": "« Invisibles dans le salon, mortelles dans l’allée. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/89/MantisBlades.png/revision/latest?cb=20230928074951",
    "fallbackIcon": "Sword",
    "red": {
      "priceEb": 4500,
      "availability": "Cher",
      "damage": "3d6+2",
      "rof": 2,
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique chirurgicale"
    },
    "iz": {
      "priceCredits": 5500,
      "quality": "Corpware",
      "cybertension": 2,
      "damage": "Force+d8+1",
      "ap": 4,
      "weightKg": 2.2,
      "notes": "Arme de CàC cybernétique rétractable. Dégâts Force+d8+1 PA 4, Parade +1. Bond d'assaut : permet une attaque de charge franchissant jusqu'à 2 cases supplémentaires d'un bond fulgurant. Déploiement en action gratuite. Jamais considéré désarmé. Dissimulable dans les bras, indétectable aux scanners corporels standards. Règles RED: Dégâts 3d6+2 (CdT 2), Perte d'humanité 2d6 (7)."
    },
    "tags": [
      "cyberware",
      "bras cybernétiques",
      "lames mantis",
      "mêlée",
      "cyber-lames",
      "arasaka",
      "tranchant",
      "perforant",
      "retractable"
    ]
  },
  {
    "id": "mantis-blades-electrifying",
    "name": "Lames Mantis Électrifiées",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Lames Mantis supraconductrices parcourues d'arcs voltaïques paralysant le système moteur et électrocutant les chairs.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/89/MantisBlades.png/revision/latest?cb=20230928074951",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 6500,
      "availability": "Très coûteux",
      "damage": "3d6 + IEM",
      "rof": 2,
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 7900,
      "quality": "Corpware",
      "cybertension": 3,
      "damage": "Force+d8+d6",
      "ap": 4,
      "weightKg": 3.4,
      "notes": "Dégâts Force+d8+d6 électrique PA 4, Parade +1. Neutralise les boucliers et systèmes cybernétiques sur jet de Vigueur échoué."
    },
    "tags": [
      "bras cybernétiques",
      "lames mantis",
      "electrique",
      "cyberware"
    ]
  },
  {
    "id": "mantis-blades-thermal",
    "name": "Lames Mantis Thermiques",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Lames Mantis équipées d'arêtes au plasma thermique chauffées à blanc à plus de 1 100°C, découpant les armures composites comme du beurre.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/89/MantisBlades.png/revision/latest?cb=20230928074951",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 6500,
      "availability": "Très coûteux",
      "damage": "3d6 + Feu",
      "rof": 2,
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 7900,
      "quality": "Corpware",
      "cybertension": 3,
      "damage": "Force+d8+d6",
      "ap": 6,
      "weightKg": 3.4,
      "notes": "Dégâts Force+d8+d6 thermique PA 6, Parade +1. Inflige le statut Enflammé sur 5-6 au dé thermique."
    },
    "tags": [
      "bras cybernétiques",
      "lames mantis",
      "thermique",
      "feu",
      "cyberware"
    ]
  },
  {
    "id": "mantis-blades-toxic",
    "name": "Lames Mantis Toxiques",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Canal central gravé au laser diffusant des agents nécrosants foudroyants directement dans la circulation sanguine de la victime.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/89/MantisBlades.png/revision/latest?cb=20230928074951",
    "fallbackIcon": "Sword",
    "red": {
      "priceEb": 6500,
      "availability": "Très coûteux",
      "damage": "3d6 + Poison",
      "rof": 2,
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 7900,
      "quality": "Corpware",
      "cybertension": 3,
      "damage": "Force+d8+d4",
      "ap": 4,
      "weightKg": 3.3,
      "notes": "Dégâts Force+d8 PA 4, Parade +1. Venin hémotoxique : jet de Vigueur à -2 sous peine de subir 1 niveau de Fatigue persistant."
    },
    "tags": [
      "bras cybernétiques",
      "lames mantis",
      "toxique",
      "poison",
      "cyberware"
    ]
  },
  {
    "id": "maxtac-mantis-blades",
    "name": "Lames Mantis MaxTac (Iconiques)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "MaxTac / Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Lames Mantis ultra-rares confisquées ou modifiées selon les spécifications mortelles des agents de la brigade anti-cyberpsycho MaxTac. Vitesse de déploiement instantanée et pénétration de blindage phénoménale.",
    "flavorQuote": "« Quand MaxTac arrive, ils ne posent pas de questions. Ils découpent. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/89/MantisBlades.png/revision/latest?cb=20230928074951",
    "fallbackIcon": "Sword",
    "red": {
      "priceEb": 12000,
      "availability": "Exotique",
      "damage": "4d6",
      "rof": 2,
      "humanityLoss": "4d6 (14)",
      "concealable": true,
      "installReq": "Chirurgien clandestin d'élite"
    },
    "iz": {
      "priceCredits": 15000,
      "quality": "Milware",
      "cybertension": 4,
      "damage": "Force+d10",
      "ap": 6,
      "weightKg": 3.6,
      "notes": "Dégâts Force+d10 PA 6, Parade +2. Bond d'assaut étendu (+3 cases) et relance gratuite sur un échec au jet de Combat lors d'une charge."
    },
    "tags": [
      "bras cybernétiques",
      "iconique",
      "maxtac",
      "arasaka",
      "lames mantis",
      "cyberware"
    ]
  },
  {
    "id": "monowire-implant",
    "name": "Monocâble Cybernétique (Monowire / Monofouet)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Zetatech / Shogun",
    "origin": "Cyberpunk Wiki",
    "description": "Cordon monomoléculaire en carbone dense et filament de tungstène logé dans un tambour gyroscopique au niveau du poignet. Tranche le métal, la chair et le blindage sans la moindre résistance à mi-distance.",
    "flavorQuote": "« Attention où vous le balancez. Le monofilament ne fait pas la différence entre un membre ennemi et votre propre pouce. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d6/NanoWires.png/revision/latest?cb=20230928080643",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 4500,
      "availability": "Cher",
      "damage": "3d6+1",
      "rof": 2,
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 5800,
      "quality": "Hyperchrome",
      "cybertension": 2,
      "damage": "Agi+d8+1",
      "range": "Allonge 2m (Portée 3)",
      "ap": 6,
      "weightKg": 1,
      "notes": "Allonge 2 cases (3m), Dégâts Agi+d8+1 PA 6, Arme Lourde (AL). Attaque en éventail : permet d'attaquer jusqu'à 3 cibles adjacentes d'un seul revers sans pénalité de multi-action. Sur Relance au jet de Combat : d10 bonus au lieu de d6. Dissimulable dans le poignet. Règles RED: Dégâts 3d6+1 (CdT 2), Perte d'humanité 2d6 (7)."
    },
    "tags": [
      "cyberware",
      "bras cybernétiques",
      "monowire",
      "monofouet",
      "zetatech",
      "shogun",
      "mêlée",
      "fouet",
      "monofilament",
      "allonge",
      "tranchant-absolu"
    ]
  },
  {
    "id": "monowire-electrifying",
    "name": "Monocâble Électrifié",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Monocâble conducteur parcouru d'impulsions électrostatiques paralysantes projetées lors des frappes en fouet.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d6/NanoWires.png/revision/latest?cb=20230928080643",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 6000,
      "availability": "Très coûteux",
      "damage": "3d6 + IEM",
      "rof": 2,
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 7400,
      "quality": "Hyperchrome",
      "cybertension": 3,
      "damage": "d8+d6",
      "ap": 6,
      "weightKg": 1.3,
      "notes": "Allonge 2 cases, Dégâts d8+d6 électrique PA 6. Décharge IEM radiale paralysant les ennemis cybernétiques."
    },
    "tags": [
      "bras cybernétiques",
      "monowire",
      "electrique",
      "cyberware"
    ]
  },
  {
    "id": "monowire-thermal",
    "name": "Monocâble Thermique Incandescent",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Filament surchauffé au point d'émettre un sifflement strident et une lueur orangée aveuglante, calcinant les membres au passage.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d6/NanoWires.png/revision/latest?cb=20230928080643",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 6000,
      "availability": "Très coûteux",
      "damage": "3d6 + Feu",
      "rof": 2,
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 7400,
      "quality": "Hyperchrome",
      "cybertension": 3,
      "damage": "d8+d6",
      "ap": 8,
      "weightKg": 1.3,
      "notes": "Allonge 2 cases, Dégâts d8+d6 feu PA 8. Statut Enflammé sur 5-6 au dé thermique."
    },
    "tags": [
      "bras cybernétiques",
      "monowire",
      "thermique",
      "feu",
      "cyberware"
    ]
  },
  {
    "id": "monowire-toxic",
    "name": "Monocâble Chimique / Toxique",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Revêtement polymère poreux imprégné de neurotoxines synthétiques paralysant les terminaisons nerveuses à la moindre coupure.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d6/NanoWires.png/revision/latest?cb=20230928080643",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 6000,
      "availability": "Très coûteux",
      "damage": "3d6 + Poison",
      "rof": 2,
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 7400,
      "quality": "Hyperchrome",
      "cybertension": 3,
      "damage": "d8+2",
      "ap": 6,
      "weightKg": 1.3,
      "notes": "Allonge 2 cases, Dégâts d8+2 PA 6 + Poison paralysant (jet de Vigueur à -2 pour éviter l'état Secoué)."
    },
    "tags": [
      "bras cybernétiques",
      "monowire",
      "toxique",
      "poison",
      "cyberware"
    ]
  },
  {
    "id": "projectile-launch-system",
    "name": "Système Lance-Projectiles d'Avant-Bras",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Canon pneumatique lourd logé dans l'avant-bras, capable de tirer une volée de micro-missiles autoguidés explosifs causant des ravages colossaux.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/cf/ProjectileLauncher.png/revision/latest?cb=20230928080923",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 5500,
      "availability": "Très coûteux",
      "damage": "6d6 (Explosif)",
      "rof": 1,
      "humanityLoss": "3d6 (10)",
      "concealable": false,
      "installReq": "Clinique chirurgicale"
    },
    "iz": {
      "priceCredits": 7000,
      "quality": "Milware",
      "cybertension": 3,
      "damage": "3d6",
      "range": "10/20/40",
      "ap": 4,
      "weightKg": 4.8,
      "notes": "Portée 10/20/40, Dégâts 3d6 PA 4, Gabarit Moyen. Magasin : 5 micro-roquettes. Système de visée intelligente intégrée."
    },
    "tags": [
      "bras cybernétiques",
      "lance-projectiles",
      "roquettes",
      "militech",
      "lourd",
      "cyberware"
    ]
  },
  {
    "id": "projectile-launch-system-electrifying",
    "name": "Lance-Projectiles IEM Électrifié",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Tire des ogives à détonation électrostatique IEM neutralisant les boucliers énergétiques, les véhicules et les cyborgs lourds.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/cf/ProjectileLauncher.png/revision/latest?cb=20230928080923",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 6500,
      "availability": "Très coûteux",
      "damage": "5d6 (IEM)",
      "rof": 1,
      "humanityLoss": "3d6 (10)",
      "concealable": false,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 8200,
      "quality": "Milware",
      "cybertension": 3,
      "damage": "3d6",
      "range": "10/20/40",
      "ap": 6,
      "weightKg": 5,
      "notes": "Portée 10/20/40, Dégâts 3d6 PA 6 IEM, Gabarit Moyen. Désactive l'électronique et les implants des cibles touchées."
    },
    "tags": [
      "bras cybernétiques",
      "lance-projectiles",
      "iem",
      "electrique",
      "cyberware"
    ]
  },
  {
    "id": "projectile-launch-system-thermal",
    "name": "Lance-Projectiles Thermique Incendiaire",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Tire des roquettes incendiaires à dispersion de thermite et phosphore blanc déclenchant un mur de flammes impénétrable.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/cf/ProjectileLauncher.png/revision/latest?cb=20230928080923",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 6500,
      "availability": "Très coûteux",
      "damage": "5d6 (Feu)",
      "rof": 1,
      "humanityLoss": "3d6 (10)",
      "concealable": false,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 8200,
      "quality": "Milware",
      "cybertension": 3,
      "damage": "3d8",
      "range": "10/20/40",
      "ap": 4,
      "weightKg": 5,
      "notes": "Portée 10/20/40, Dégâts 3d8 thermique, Gabarit Moyen. Inflige automatiquement le statut Enflammé dans la zone d'impact."
    },
    "tags": [
      "bras cybernétiques",
      "lance-projectiles",
      "thermique",
      "feu",
      "cyberware"
    ]
  },
  {
    "id": "projectile-launch-system-toxic",
    "name": "Lance-Projectiles Toxique / Chimique",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Tire des bombes à fragmentation chimique dispersant un nuage d'aérosol neurotoxique persistant dans la zone d'explosion.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/cf/ProjectileLauncher.png/revision/latest?cb=20230928080923",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 6500,
      "availability": "Très coûteux",
      "damage": "4d6 (Gaz/Poison)",
      "rof": 1,
      "humanityLoss": "3d6 (10)",
      "concealable": false,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 8200,
      "quality": "Milware",
      "cybertension": 3,
      "damage": "2d6",
      "range": "10/20/40",
      "ap": 2,
      "weightKg": 4.9,
      "notes": "Portée 10/20/40, Dégâts 2d6 poison persistant, Grand Gabarit. Le nuage persiste 2 rounds ; jet de Vigueur à -2 sous peine d'asphyxie."
    },
    "tags": [
      "bras cybernétiques",
      "lance-projectiles",
      "toxique",
      "gaz",
      "cyberware"
    ]
  },
  {
    "id": "kiroshi-optics-basic",
    "name": "Cyber-Yeux Kiroshi Optiques Basiques",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Kiroshi Optics",
    "origin": "Cyberpunk Wiki",
    "description": "Le grand standard mondial de la vision cybernétique. Scanner optique avec affichage tête haute, télémètre balistique, zoom x10 et vision nocturne.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/55/KiroshiOptics.png/revision/latest?cb=20230930115559",
    "fallbackIcon": "Eye",
    "red": {
      "priceEb": 500,
      "availability": "Standard",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Charcudoc"
    },
    "iz": {
      "priceCredits": 1200,
      "quality": "Standard",
      "cybertension": 1,
      "weightKg": 0.1,
      "notes": "Vigilance +1, Vision nocturne intégrée, zoom x10 (ignore les malus d'obscurité partielle et réduit de 2 points les malus de distance)."
    },
    "tags": [
      "visage",
      "optiques",
      "kiroshi",
      "yeux",
      "cyberware"
    ]
  },
  {
    "id": "kiroshi-the-oracle-optics",
    "name": "Kiroshi « The Oracle » Optiques à Travers les Murs",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kiroshi Optics",
    "origin": "Cyberpunk Wiki",
    "description": "Optiques de pointe intégrant sonar millimétrique et capteurs térahertz mettant en surbrillance les ennemis, tourelles et caméras à travers les cloisons jusqu'à 25 mètres.",
    "flavorQuote": "« Les murs ne protègent plus personne. Tu es le prédateur qui voit à travers la matière. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d7/KiroshiOpticsCombined.png/revision/latest?cb=20230924113946",
    "fallbackIcon": "Eye",
    "red": {
      "priceEb": 3500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 4800,
      "quality": "Corpware",
      "cybertension": 2,
      "weightKg": 0.2,
      "notes": "Détecte et marque les silhouettes à travers le plâtre, le bois et la tôle jusqu'à 12 cases. Vigilance +2."
    },
    "tags": [
      "visage",
      "optiques",
      "oracle",
      "kiroshi",
      "radar",
      "cyberware"
    ]
  },
  {
    "id": "kiroshi-cockatrice-optics",
    "name": "Kiroshi « Cockatrice » Cyber-Optiques (Iconiques)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Kiroshi Optics",
    "origin": "Cyberpunk Wiki",
    "description": "Le pinacle absolu de la recherche optique de Kiroshi. Modèle iconique intégrant un calculateur de tir prédictif hyperspectral augmentant les chances de Coup Critique de +30%.",
    "flavorQuote": "« Un regard suffit pour calculer le point d'impact où l'armure adverse est la plus faible. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/df/Iconic_KiroshiOpticsBare.png/revision/latest?cb=20230924132054",
    "fallbackIcon": "Eye",
    "red": {
      "priceEb": 10000,
      "availability": "Exotique",
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique privée Kiroshi"
    },
    "iz": {
      "priceCredits": 13500,
      "quality": "Milware",
      "cybertension": 3,
      "weightKg": 0.2,
      "notes": "Coup Précis dévastateur : toute Relance sur un jet de Tir ou de Combat inflige +4 dégâts additionnels. Vision thermique et infrarouge intégrées."
    },
    "tags": [
      "visage",
      "optiques",
      "iconique",
      "cockatrice",
      "kiroshi",
      "critique",
      "cyberware"
    ]
  },
  {
    "id": "kiroshi-clairvoyant-optics",
    "name": "Kiroshi « Clairvoyant » Optiques de Ciblage",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Kiroshi Optics",
    "origin": "Cyberpunk Wiki",
    "description": "Verrouille et marque automatiquement tous les ennemis présents dans le champ visuel avec prédiction des trajectoires de tir.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/57/KiroshiOpticsWallhack.png/revision/latest?cb=20230924112309",
    "fallbackIcon": "Eye",
    "red": {
      "priceEb": 2800,
      "availability": "Très coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3900,
      "quality": "Hyperchrome",
      "cybertension": 2,
      "weightKg": 0.2,
      "notes": "+1 à tous les jets de Tir contre les cibles scannées dans le champ de vision. Vigilance +1."
    },
    "tags": [
      "visage",
      "optiques",
      "kiroshi",
      "clairvoyant",
      "cyberware"
    ]
  },
  {
    "id": "kiroshi-doomsayer-optics",
    "name": "Kiroshi « Doomsayer » Analyseur Faiblesses",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kiroshi Optics",
    "origin": "Cyberpunk Wiki",
    "description": "Analyse en temps réel les contraintes métallurgiques et les joints d'armure des adversaires scannés pour exploiter leurs points faibles balistiques.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/54/KiroshiOpticsHunter.png/revision/latest?cb=20230924113647",
    "fallbackIcon": "Eye",
    "red": {
      "priceEb": 2400,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3300,
      "quality": "Corpware",
      "cybertension": 2,
      "weightKg": 0.2,
      "notes": "Confère PA +2 à toutes les attaques d'armes à feu contre les cibles préalablement scannées."
    },
    "tags": [
      "visage",
      "optiques",
      "doomsayer",
      "kiroshi",
      "faiblesses",
      "cyberware"
    ]
  },
  {
    "id": "kiroshi-sentry-optics",
    "name": "Kiroshi « Sentry » Optiques Panoramiques",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Kiroshi Optics",
    "origin": "Cyberpunk Wiki",
    "description": "Élargit le champ de vision périphérique à 220° et alerte le porteur contre les approches furtives et les caméras de sécurité en patrouille.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/63/KiroshiOpticsSensor.png/revision/latest?cb=20230924114152",
    "fallbackIcon": "Eye",
    "red": {
      "priceEb": 1200,
      "availability": "Standard",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 1800,
      "quality": "Standard",
      "cybertension": 1,
      "weightKg": 0.1,
      "notes": "+2 aux jets pour détecter les embuscades et caméras ; immunise contre l'état de Surprise visuelle."
    },
    "tags": [
      "visage",
      "optiques",
      "sentry",
      "kiroshi",
      "vigilance",
      "cyberware"
    ]
  },
  {
    "id": "kiroshi-stalker-optics",
    "name": "Kiroshi « Stalker » Optiques Pénétrantes",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Kiroshi Optics",
    "origin": "Cyberpunk Wiki",
    "description": "Optiques optimisées pour les tireurs d'élite et utilisateurs d'armes Tech. Révèle la silhouette des ennemis retranchés derrière des abris solides.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/ac/KiroshiOpticsPiercing.png/revision/latest?cb=20230923130432",
    "fallbackIcon": "Eye",
    "red": {
      "priceEb": 3000,
      "availability": "Très coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 4200,
      "quality": "Milware",
      "cybertension": 2,
      "weightKg": 0.2,
      "notes": "Réduit de 2 points les malus de couvert des cibles et permet aux armes Tech de tirer à travers les murs sans pénalité de visée."
    },
    "tags": [
      "visage",
      "optiques",
      "stalker",
      "kiroshi",
      "tech",
      "cyberware"
    ]
  },
  {
    "id": "behavioral-imprint-faceplate",
    "name": "Plaque Faciale à Empreinte Comportementale",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "FIA / Dogtown Tech",
    "origin": "Cyberpunk Wiki",
    "description": "Chef-d'œuvre d'espionnage de la FIA obtenu à Dogtown. Matrice polymorphique sous-cutanée capable de remodeler instantanément la structure faciale, la texture de peau et la voix du porteur pour usurper une identité complète.",
    "flavorQuote": "« Un clignement de paupière, et ton pire ennemi voit son propre reflet te saluer. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d8/MaskCW.png/revision/latest?cb=20230930114713",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 12000,
      "availability": "Exotique",
      "humanityLoss": "4d6 (14)",
      "concealable": true,
      "installReq": "Installation chirurgicale d'espionnage FIA"
    },
    "iz": {
      "priceCredits": 16000,
      "quality": "Milware",
      "cybertension": 3,
      "weightKg": 0.4,
      "notes": "+4 à tous les jets de Déguisement, Tromperie et Infiltration. Permet d'effacer immédiatement un niveau d'alerte ou mandat de recherche policier en changeant d'apparence."
    },
    "tags": [
      "visage",
      "iconique",
      "espionnage",
      "fia",
      "phantom liberty",
      "deguisement",
      "cyberware"
    ]
  },
  {
    "id": "titanium-bones-skeleton",
    "name": "Armature Osseuse en Titane (Titanium Bones)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Dynalar Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Revêtement d'alliage de titane poreux greffé à même le périoste. Double la capacité de charge maximale et immunise contre les fractures osseuses.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/49/TitaniumInfusedBones.png/revision/latest?cb=20230928113307",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 1000,
      "availability": "Standard",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique chirurgicale"
    },
    "iz": {
      "priceCredits": 1800,
      "quality": "Standard",
      "cybertension": 1,
      "weightKg": 3,
      "notes": "La Force est considérée comme ayant +2 crans pour le calcul de l'encombrement et du transport de charge. Immunise contre les fractures graves."
    },
    "tags": [
      "squelette",
      "charge",
      "titane",
      "dynalar",
      "cyberware"
    ]
  },
  {
    "id": "dense-marrow-skeleton",
    "name": "Moelle Osseuse Haute Densité (Dense Marrow)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "BioDyne",
    "origin": "Cyberpunk Wiki",
    "description": "Moelle osseuse synthétique augmentant la masse inertielle du squelette pour décupler la puissance d'impact de toutes les attaques au corps-à-corps de +25%.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/c9/DenseMarrow.png/revision/latest?cb=20230928130629",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 2000,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 2900,
      "quality": "Hyperchrome",
      "cybertension": 2,
      "weightKg": 2.5,
      "notes": "Dégâts de corps-à-corps +2 avec toutes les armes de mêlée et attaques à mains nues. Résistance +1."
    },
    "tags": [
      "squelette",
      "corps-a-corps",
      "degats",
      "biodyne",
      "cyberware"
    ]
  },
  {
    "id": "bionic-joints-skeleton",
    "name": "Articulations Bioniques Renforcées",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Rotules et coudes renforcés en céramique auto-lubrifiante, absorbant les chocs et augmentant l'armure corporelle globale.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/fa/BionicJoints.png/revision/latest?cb=20230928123825",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 1500,
      "availability": "Standard",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 2200,
      "quality": "Streetware",
      "cybertension": 1,
      "weightKg": 2,
      "notes": "Armure naturelle +1. Réduit le malus d'encombrement des armures lourdes de 1 point."
    },
    "tags": [
      "squelette",
      "articulations",
      "armure",
      "zetatech",
      "cyberware"
    ]
  },
  {
    "id": "epimorphic-skeleton",
    "name": "Endosquelette Épimorphique (Iconique)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Le summum du blindage squelettique militaire. Remplace l'intégralité du système osseux par un treillis articulé en nanotitanium et carbure de tungstène conférant +13% de santé max et une armure colossale.",
    "flavorQuote": "« Tu peux écraser un camion contre lui, le châssis ne pliera pas. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/cb/Endoskeleton.png/revision/latest?cb=20230928115034",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 10000,
      "availability": "Exotique",
      "humanityLoss": "4d6 (14)",
      "concealable": true,
      "installReq": "Hôpital chirurgical"
    },
    "iz": {
      "priceCredits": 14500,
      "quality": "Milware",
      "cybertension": 4,
      "weightKg": 6,
      "notes": "Encaissement +2, Robustesse naturelle +2, et confère +1 point de Blessure supplémentaire avant d'entrer en Incapacité."
    },
    "tags": [
      "squelette",
      "iconique",
      "endosquelette",
      "militech",
      "robustesse",
      "cyberware"
    ]
  },
  {
    "id": "para-bellum-skeleton",
    "name": "Para Bellum (Amplificateur de Blindage)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Armature sous-jacente calibrée pour dissiper l'énergie cinétique des impacts et augmenter l'efficacité de toutes les armures corporelles portées de +12%.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/e8/T1000.png/revision/latest?cb=20230928110241",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 3000,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 4200,
      "quality": "Corpware",
      "cybertension": 2,
      "weightKg": 2.2,
      "notes": "Augmente l'armure de toute pièce de protection corporelle portée par le personnage de +1 point effectif."
    },
    "tags": [
      "squelette",
      "armure",
      "kang tao",
      "defense",
      "cyberware"
    ]
  },
  {
    "id": "cellular-adapter-skeleton",
    "name": "Adaptateur Cellulaire (Iconique)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Biotechnica",
    "origin": "Cyberpunk Wiki",
    "description": "Greffe nanobiologique complète qui reconfigure les cellules osseuses et le derme, conférant une résistance phénoménale aux explosions, toxines et brûlures.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/9f/PainDistributor.png/revision/latest?cb=20250121064620",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 8500,
      "availability": "Exotique",
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique Biotechnica"
    },
    "iz": {
      "priceCredits": 11000,
      "quality": "Bioware",
      "cybertension": 3,
      "weightKg": 1.5,
      "notes": "Armure naturelle +2. Confère +2 aux jets de Vigueur contre le poison, les acides et les radiations, et réduit de 4 points les dégâts d'explosion."
    },
    "tags": [
      "squelette",
      "iconique",
      "biotechnica",
      "bioware",
      "resilience",
      "cyberware"
    ]
  },
  {
    "id": "scarab-skeleton",
    "name": "Scarabée Réactif (Scarab)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Plaquettes squelettiques rétractables se verrouillant en coque rigide lorsque le corps subit des traumatismes sévères.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/59/RapidMuscleNurish.png/revision/latest?cb=20230928113956",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 2500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3500,
      "quality": "Corpware",
      "cybertension": 2,
      "weightKg": 2.8,
      "notes": "Armure naturelle +3 tant que le personnage subit au moins 1 Blessure."
    },
    "tags": [
      "squelette",
      "scarab",
      "arasaka",
      "armure",
      "cyberware"
    ]
  },
  {
    "id": "spring-joints-skeleton",
    "name": "Articulations à Ressorts Hydrauliques",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Dynalar Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Amortisseurs axiaux miniatures dissipant les micro-ondes de choc lors des impacts de balles et des chutes brutales.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/25/AgileJoints.png/revision/latest?cb=20230928124128",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 2000,
      "availability": "Coûteux",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 2800,
      "quality": "Hyperchrome",
      "cybertension": 2,
      "weightKg": 1.8,
      "notes": "Réduit tous les dégâts physiques reçus de 1 point (minimum 1) et confère Parade +1."
    },
    "tags": [
      "squelette",
      "ressorts",
      "dynalar",
      "amortisseur",
      "cyberware"
    ]
  },
  {
    "id": "kinetic-frame-skeleton",
    "name": "Châssis Cinétique de Déviation",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Moore Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Structure périsomatique absorbant l'énergie cinétique des coups et redistribuant la force vers les muscles moteurs.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/34/BoneMarrowCells.png/revision/latest?cb=20230928112027",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 2500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3600,
      "quality": "Standard",
      "cybertension": 2,
      "weightKg": 2.5,
      "notes": "+2 à tous les jets d'opposition de Force (lutte, désarmement, poussée) et +1 Encaissement."
    },
    "tags": [
      "squelette",
      "cinetique",
      "force",
      "moore tech",
      "cyberware"
    ]
  },
  {
    "id": "rara-avis-skeleton",
    "name": "Rara Avis (Armature Monolithique)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Dogtown Black Market",
    "origin": "Cyberpunk Wiki",
    "description": "Armature squelettique de classe prototype issue des projets secrets de Kurt Hansen. Offre l'augmentation d'armure pure la plus titanesque de Night City (+38 Armure).",
    "flavorQuote": "« Tu deviens une forteresse mobile taillée dans le carbure de bore. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/e8/T1000.png/revision/latest?cb=20230928110241",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 13000,
      "availability": "Exotique",
      "humanityLoss": "4d6 (14)",
      "concealable": false,
      "installReq": "Chirurgien militaire de Dogtown"
    },
    "iz": {
      "priceCredits": 17500,
      "quality": "Milware",
      "cybertension": 4,
      "weightKg": 5.5,
      "notes": "Armure naturelle +3 cumulable avec toutes les armures portées. Réduit de 2 points les dégâts perforants (PA)."
    },
    "tags": [
      "squelette",
      "iconique",
      "rara avis",
      "dogtown",
      "blindage",
      "cyberware"
    ]
  },
  {
    "id": "ram-recoup-skeleton",
    "name": "Récupérateur Squelettique de RAM",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Raven Microcyber",
    "origin": "Cyberpunk Wiki",
    "description": "Capteurs piézo-électriques reliant la charpente osseuse au cyberdeck, convertissant l'onde de choc des blessures en recharge immédiate de RAM.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/1d/CompilingSkeleton.png/revision/latest?cb=20230928120949",
    "fallbackIcon": "Cpu",
    "red": {
      "priceEb": 2200,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3100,
      "quality": "Corpware",
      "cybertension": 2,
      "weightKg": 1.5,
      "notes": "Chaque blessure ou état Secoué causé par un tir ennemi restaure immédiatement 2 points de RAM au cyberdeck."
    },
    "tags": [
      "squelette",
      "ram",
      "raven",
      "netrunner",
      "cyberware"
    ]
  },
  {
    "id": "scar-coalescer-skeleton",
    "name": "Coalesseur de Cicatrices Osseuses",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "BioDyne",
    "origin": "Cyberpunk Wiki",
    "description": "Nanites ostéogéniques durcissant instantanément le squelette lorsque les points de vie chutent sous 50%.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/22/NoPainNoGain.png/revision/latest?cb=20230928103409",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 2800,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3900,
      "quality": "Bioware",
      "cybertension": 2,
      "weightKg": 1.7,
      "notes": "Armure naturelle +3 dès que le personnage a au moins 1 Blessure active."
    },
    "tags": [
      "squelette",
      "coalesseur",
      "biodyne",
      "survie",
      "cyberware"
    ]
  },
  {
    "id": "feen-x-skeleton",
    "name": "Feen-X (Catalyseur Phénix de RAM)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Phantom Liberty Tech",
    "origin": "Cyberpunk Wiki",
    "description": "Catalyseur neural expérimental triplant (+250%) la vitesse de récupération de la mémoire vive dès que la réserve de RAM tombe sous 3 unités.",
    "flavorQuote": "« Même à genoux dans la poussière, ton flux de données renaît de ses cendres. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d3/NeuroMatrix.png/revision/latest?cb=20231206100722",
    "fallbackIcon": "Cpu",
    "red": {
      "priceEb": 8000,
      "availability": "Exotique",
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique Black-Ops"
    },
    "iz": {
      "priceCredits": 11000,
      "quality": "Milware",
      "cybertension": 3,
      "weightKg": 1.2,
      "notes": "Tant que le personnage dispose de moins de 3 points de RAM, il régénère 3 points de RAM supplémentaires à la fin de chaque tour."
    },
    "tags": [
      "squelette",
      "iconique",
      "feen-x",
      "ram",
      "phantom liberty",
      "cyberware"
    ]
  },
  {
    "id": "universal-booster-skeleton",
    "name": "Booster Métabolique Universel",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Biotechnica",
    "origin": "Cyberpunk Wiki",
    "description": "Pompe osmotique réduisant le coût énergétique et l'accumulation d'acide lactique de toutes les activités physiques intenses.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/bf/EnhancedBloodVessels.png/revision/latest?cb=20250121065009",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 1200,
      "availability": "Standard",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 1600,
      "quality": "Bioware",
      "cybertension": 1,
      "weightKg": 1,
      "notes": "+1 aux jets de Vigueur contre la fatigue et réduction de l'épuisement lié aux courses prolongées."
    },
    "tags": [
      "squelette",
      "booster",
      "endurance",
      "biotechnica",
      "cyberware"
    ]
  },
  {
    "id": "ballistic-coprocessor-hand",
    "name": "Coprocesseur Balistique Palmaire",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Capteur dermique palmaire calculant en temps réel les angles de ricochet pour les armes cinétiques standard (Power Weapons).",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/52/PowerGrip.png/revision/latest?cb=20230928134324",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1000,
      "availability": "Standard",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Charcudoc"
    },
    "iz": {
      "priceCredits": 1400,
      "quality": "Streetware",
      "cybertension": 1,
      "weightKg": 0.1,
      "notes": "Permet d'effectuer des tirs avec ricochet sur les parois dures pour ignorer jusqu'à 2 points de malus d'Abri ennemi sans pénalité de visée."
    },
    "tags": [
      "mains",
      "balistique",
      "ricochet",
      "militech",
      "cyberware"
    ]
  },
  {
    "id": "smart-link-hand",
    "name": "Smart Link (Interface d'Armes Intelligentes)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Puce palmaire sans-fil dialoguant avec les micro-projectiles gyroscopiques autoguidés des armes Smart. Verrouille et poursuit les cibles avec précision.",
    "flavorQuote": "« Vise à peu près dans la pièce. Les balles feront le reste du boulot. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/87/SmartLink.png/revision/latest?cb=20210623161930",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2000,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Charcudoc"
    },
    "iz": {
      "priceCredits": 2800,
      "quality": "Corpware",
      "cybertension": 1,
      "weightKg": 0.1,
      "notes": "Active le guidage automatique des armes Smart : ignore le malus de Recul et ajoute +1 à tous les jets de Tir avec armes intelligentes."
    },
    "tags": [
      "mains",
      "smart link",
      "kang tao",
      "armes intelligentes",
      "cyberware"
    ]
  },
  {
    "id": "microgenerator-hand",
    "name": "Microgénérateur Palmaire à Décharge",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Dynalar Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Condensateur haute capacité logé dans la paume qui libère une déflagration électrostatique sur toutes les cibles adjacentes lors du rechargement à sec d'une arme.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/e0/MicroGenerator.png/revision/latest?cb=20230928151144",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 2000,
      "availability": "Coûteux",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 2900,
      "quality": "Hyperchrome",
      "cybertension": 2,
      "weightKg": 0.2,
      "notes": "Lors du rechargement d'une arme à feu vide, libère une IEM électrique de 2d6 PA 2 sur toutes les cibles à 1 case de portée."
    },
    "tags": [
      "mains",
      "microgenerator",
      "iem",
      "dynalar",
      "cyberware"
    ]
  },
  {
    "id": "shock-absorber-hand",
    "name": "Amortisseur de Choc Palmaire",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Vérins miniatures dans les métacarpiens réduisant le recul ressenti des fusils d'assaut et des revolvers lourds de 20%.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/b6/JointLock.png/revision/latest?cb=20230928151931",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1200,
      "availability": "Standard",
      "humanityLoss": "1d6 (2)",
      "concealable": true,
      "installReq": "Charcudoc"
    },
    "iz": {
      "priceCredits": 1600,
      "quality": "Standard",
      "cybertension": 1,
      "weightKg": 0.3,
      "notes": "Réduit les malus de recul de 2 points pour toutes les armes de poing et fusils à tir rapide."
    },
    "tags": [
      "mains",
      "recul",
      "zetatech",
      "stabilite",
      "cyberware"
    ]
  },
  {
    "id": "immovable-force-hand",
    "name": "Force Inébranlable (Immovable Force)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Système de compensation inertielle gyroscopique de calibre militaire éliminant presque totalement le recul des armes automatiques et mitrailleuses lourdes.",
    "flavorQuote": "« Tu tires au calibre 50 comme si c'était un pistolet à billes. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/98/GunStabilizer.png/revision/latest?cb=20230928152648",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 7500,
      "availability": "Exotique",
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique militaire"
    },
    "iz": {
      "priceCredits": 9800,
      "quality": "Milware",
      "cybertension": 3,
      "weightKg": 0.5,
      "notes": "Annule intégralement les pénalités de tir en Rafale ou Tir Automatique pour toutes les armes à feu, et confère +2 pour résister au renversement."
    },
    "tags": [
      "mains",
      "iconique",
      "recul",
      "militech",
      "precision",
      "cyberware"
    ]
  },
  {
    "id": "handle-wrap-hand",
    "name": "Grip Neural pour Armes Blanches (Handle Wrap)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Revêtement haptique palmaire optimisant la prise en main des couteaux, épées et katanas pour une vélocité accrue lors des attaques de lancer ou frappes vives.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/fa/KnifeSharpener.png/revision/latest?cb=20230928152953",
    "fallbackIcon": "Sword",
    "red": {
      "priceEb": 1000,
      "availability": "Standard",
      "humanityLoss": "1d6 (2)",
      "concealable": true,
      "installReq": "Charcudoc"
    },
    "iz": {
      "priceCredits": 1400,
      "quality": "Streetware",
      "cybertension": 1,
      "weightKg": 0.1,
      "notes": "Parade +1 et +1 aux dégâts avec tous les couteaux de lancer, katanas et lames de combat."
    },
    "tags": [
      "mains",
      "lames",
      "katana",
      "arasaka",
      "cyberware"
    ]
  },
  {
    "id": "tattoo-johnnys-special",
    "name": "Tatouage Cybernétique : Johnny's Special",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Cassius Ryder",
    "origin": "Cyberpunk Wiki",
    "description": "Tatouage bioluminescent appliqué par Cassius Ryder représentant le blason du groupe SAMURAI, agissant comme coprocesseur balistique de fortune tout en renforçant le charisme auprès des rebelles.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/f4/CasiusTattoo.png/revision/latest?cb=20230928142353",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 300,
      "availability": "Standard",
      "humanityLoss": "1d6 (1)",
      "concealable": false,
      "installReq": "Salon de tatouage / Charcudoc"
    },
    "iz": {
      "priceCredits": 450,
      "quality": "Streetware",
      "cybertension": 0,
      "weightKg": 0,
      "notes": "+1 en Persuasion/Charisme auprès des edgerunners et rebelles anti-corpos ; fait office de coprocesseur balistique basique."
    },
    "tags": [
      "mains",
      "tatouage",
      "samurai",
      "johnny",
      "cyberware"
    ]
  },
  {
    "id": "tattoo-tyger-claws-dermal",
    "name": "Tatouage Dermique des Tyger Claws",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Tyger Claws",
    "origin": "Cyberpunk Wiki",
    "description": "Tatouage traditionnel de yakuza intégrant des encres polymères conductrices capables de synchroniser les armes Smart tout en brouillant les radars d'armes Smart adverses.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/2c/YakuzaTattoo.png/revision/latest?cb=20230928142343",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 800,
      "availability": "Standard",
      "humanityLoss": "1d6 (2)",
      "concealable": false,
      "installReq": "Charcudoc de Japantown"
    },
    "iz": {
      "priceCredits": 1100,
      "quality": "Streetware",
      "cybertension": 1,
      "weightKg": 0,
      "notes": "Fait office d'interface Smart Link et confère une chance de 50% de dévier les projectiles d'armes Smart tirés contre le porteur."
    },
    "tags": [
      "mains",
      "tatouage",
      "tyger claws",
      "smart link",
      "brouillage",
      "cyberware"
    ]
  },
  {
    "id": "kerenzikov-booster",
    "name": "Accélérateur Réflexe Kerenzikov",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Implant neural spinal de réflexes ultra-rapides. S'active automatiquement lors d'une glissade, d'une esquive ou d'une ruée pour dilater le temps de 60% et permettre de viser et tirer avec une précision chirurgicale en plein mouvement.",
    "flavorQuote": "« Pendant qu'ils essaient encore de comprendre où tu es passé, tu as déjà vidé un chargeur complet dans leur dos. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/1d/Kerenzikov.png/revision/latest?cb=20230929133137",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 2500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3500,
      "quality": "Milware",
      "cybertension": 2,
      "weightKg": 0.3,
      "notes": "Tir réflexe en action libre avec +2 au jet de Tir lors de tout déplacement d'esquive, ruée ou glissade au sol. Initiative +2."
    },
    "tags": [
      "système nerveux",
      "kerenzikov",
      "reflexes",
      "militech",
      "ralenti",
      "cyberware"
    ]
  },
  {
    "id": "synaptic-accelerator-nervous",
    "name": "Accélérateur Synaptique d'Embuscade",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Stimulateur spinal se déclenchant à la milliseconde où un adversaire hostile repère le porteur, ralentissant le temps pour permettre une riposte ou une fuite immédiate.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/a4/SynapticAccelerator.png/revision/latest?cb=20230929133717",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 2000,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 2800,
      "quality": "Hyperchrome",
      "cybertension": 2,
      "weightKg": 0.2,
      "notes": "En cas de détection ennemie lors d'une approche discrète, octroie une action immédiate d'Interruption réussie automatiquement avant que l'alerte ne soit donnée."
    },
    "tags": [
      "système nerveux",
      "embuscade",
      "zetatech",
      "reflexes",
      "cyberware"
    ]
  },
  {
    "id": "reflex-tuner-nervous",
    "name": "Accordeur de Réflexes d'Urgence",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Dynalar Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "S'active lorsque la santé du personnage chute sous les 25%, libérant un afflux neuro-électrique qui ralentit le temps de 60% pour lui sauver la vie.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d4/ReflexRecorder.png/revision/latest?cb=20230929122745",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 1500,
      "availability": "Standard",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Charcudoc"
    },
    "iz": {
      "priceCredits": 2100,
      "quality": "Standard",
      "cybertension": 1,
      "weightKg": 0.2,
      "notes": "Lorsque le personnage subit sa 3e Blessure (état critique), il bénéficie d'un tour complet prioritaire avec Allure +4 et Parade +2."
    },
    "tags": [
      "système nerveux",
      "urgence",
      "dynalar",
      "cyberware"
    ]
  },
  {
    "id": "neofiber-nervous",
    "name": "Néo-Fibre Synthétique (NeoFiber)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "BioDyne",
    "origin": "Cyberpunk Wiki",
    "description": "Remplacement artificiel des fibres nerveuses myélinisées accélérant la transmission neuromusculaire, augmentant l'esquive et la mitigation des tirs.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/e5/NeoFiber.png/revision/latest?cb=20230929133707",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 2500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3400,
      "quality": "Bioware",
      "cybertension": 2,
      "weightKg": 0.3,
      "notes": "+2 pour esquiver les tirs et explosions de zone. Confère l'Atout Esquive instinctive."
    },
    "tags": [
      "système nerveux",
      "esquive",
      "neofiber",
      "biodyne",
      "cyberware"
    ]
  },
  {
    "id": "adrenaline-converter-nervous",
    "name": "Convertisseur d'Adrénaline",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Biotechnica",
    "origin": "Cyberpunk Wiki",
    "description": "Capte la décharge d'adrénaline au début d'un engagement pour restaurer immédiatement de l'endurance et supprimer la fatigue initiale.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/03/DetectorRush.png/revision/latest?cb=20230929124054",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 1500,
      "availability": "Standard",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 2000,
      "quality": "Bioware",
      "cybertension": 1,
      "weightKg": 0.1,
      "notes": "Au premier round de tout combat, annule 1 niveau de Fatigue et confère +2 à l'Initiative."
    },
    "tags": [
      "système nerveux",
      "adrenaline",
      "biotechnica",
      "cyberware"
    ]
  },
  {
    "id": "revulsor-nervous",
    "name": "Révulseur Réflexe (Revulsor)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Dogtown Tech",
    "origin": "Cyberpunk Wiki",
    "description": "Système de réflexe d'agonie de classe militaire. Dès qu'un coup fatal menace d'abattre le porteur, le révulseur paralyse les capteurs sensoriels de l'ennemi et ralentit le temps de 90% pour lui permettre de riposter.",
    "flavorQuote": "« La mort croyait t'avoir eu. Le révulseur lui prouve le contraire. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d4/ReflexRecorder.png/revision/latest?cb=20230929122745",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 10000,
      "availability": "Exotique",
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique clandestine Dogtown"
    },
    "iz": {
      "priceCredits": 13000,
      "quality": "Milware",
      "cybertension": 3,
      "weightKg": 0.3,
      "notes": "Une fois par combat, lorsqu'une blessure devrait mettre le personnage hors de combat, elle est différée et il bénéficie immédiatement d'une attaque de représailles avec relance gratuite."
    },
    "tags": [
      "système nerveux",
      "iconique",
      "revulsor",
      "survie",
      "dogtown",
      "cyberware"
    ]
  },
  {
    "id": "stabber-nervous",
    "name": "Poignardeur Réflexe (Stabber)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Algorithme de projection balistique accélérant les mouvements de bras lors du lancer de couteaux ou d'armes tranchantes légères (+20% chances de critique).",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/ad/OilDispenser.png/revision/latest?cb=20230929133811",
    "fallbackIcon": "Sword",
    "red": {
      "priceEb": 2200,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3000,
      "quality": "Corpware",
      "cybertension": 2,
      "weightKg": 0.2,
      "notes": "Dégâts des couteaux de lancer +2 et portée de lancer augmentée de +2 cases."
    },
    "tags": [
      "système nerveux",
      "couteau",
      "arasaka",
      "lancer",
      "cyberware"
    ]
  },
  {
    "id": "adreno-trigger-nervous",
    "name": "Déclencheur Adrénalinique (Adreno-trigger)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Moore Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Libère une dose massive d'accélérateur hormonal lors de l'entrée en combat, augmentant la vitesse de course de +30% pendant 50 secondes.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/03/DetectorRush.png/revision/latest?cb=20230929124054",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 2500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3400,
      "quality": "Standard",
      "cybertension": 2,
      "weightKg": 0.2,
      "notes": "Allure +3 durant les 3 premiers tours de chaque combat."
    },
    "tags": [
      "système nerveux",
      "vitesse",
      "adrenaline",
      "moore tech",
      "cyberware"
    ]
  },
  {
    "id": "atomic-sensors-nervous",
    "name": "Capteurs Atomiques de Traque",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Capteurs d'ondes de pression atmosphérique augmentant la vitesse de déplacement proportionnellement à la nervosité et la traque des ennemis alentour.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/f0/TroubleFinder.png/revision/latest?cb=20230929125428",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 1800,
      "availability": "Coûteux",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 2400,
      "quality": "Corpware",
      "cybertension": 1,
      "weightKg": 0.2,
      "notes": "Allure +2 tant que des ennemis sont en état d'alerte ou recherchent activement le personnage."
    },
    "tags": [
      "système nerveux",
      "kang tao",
      "capteurs",
      "cyberware"
    ]
  },
  {
    "id": "deep-field-visual-interface",
    "name": "Interface Visuelle en Champ Profond",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "NetWatch",
    "origin": "Cyberpunk Wiki",
    "description": "Système de télémétrie neurale militaire augmentant les dégâts critiques des tirs proportionnellement à la distance séparant le tireur de sa cible (+40% à longue portée).",
    "flavorQuote": "« Plus ils sont loin, plus la balle trouve précisément l'artère jugulaire. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/bb/VisualCortexSupport.png/revision/latest?cb=20230929130541",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 8500,
      "availability": "Exotique",
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique spécialisée"
    },
    "iz": {
      "priceCredits": 11500,
      "quality": "Milware",
      "cybertension": 3,
      "weightKg": 0.2,
      "notes": "+1d6 de dégâts additionnels à portée Longue ou Extrême pour tous les tirs d'armes de précision."
    },
    "tags": [
      "système nerveux",
      "iconique",
      "sniper",
      "longue portee",
      "netwatch",
      "cyberware"
    ]
  },
  {
    "id": "tyrosine-injector-nervous",
    "name": "Injecteur de Tyrosine",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Biotechnica",
    "origin": "Cyberpunk Wiki",
    "description": "Délivre des précurseurs de dopamine et noradrénaline étendant de +100% le temps imparti pour résoudre les protocoles d'intrusion TAP.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/bd/TyrosineInjector.png/revision/latest?cb=20230929132728",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 1000,
      "availability": "Standard",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 1400,
      "quality": "Bioware",
      "cybertension": 1,
      "weightKg": 0.1,
      "notes": "+2 à tous les jets de Netrunning/Piratage pour forcer les verrous de sécurité TAP sans déclencher d'alarme."
    },
    "tags": [
      "système nerveux",
      "tyrosine",
      "piratage",
      "biotechnica",
      "cyberware"
    ]
  },
  {
    "id": "visual-cortex-support-nervous",
    "name": "Soutien du Cortex Visuel",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kiroshi Optics",
    "origin": "Cyberpunk Wiki",
    "description": "Module de calcul balistique neuronal augmentant les chances et la violence des coups critiques à moyenne et longue portée.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/bb/VisualCortexSupport.png/revision/latest?cb=20230929130541",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique Kiroshi"
    },
    "iz": {
      "priceCredits": 3300,
      "quality": "Corpware",
      "cybertension": 2,
      "weightKg": 0.2,
      "notes": "Confère +2 aux dégâts des attaques à distance contre toute cible située à plus de 6 cases."
    },
    "tags": [
      "système nerveux",
      "kiroshi",
      "precision",
      "critique",
      "cyberware"
    ]
  },
  {
    "id": "second-heart",
    "name": "Deuxième Cœur Synthétique (Second Heart)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "BioDyne",
    "origin": "Cyberpunk Wiki",
    "description": "Pompe cardiaque bionique de secours greffée dans la cage thoracique. En cas d'arrêt cardiaque, de blessure létale ou de traumatisme massif, le deuxième cœur s'active instantanément, réinjecte de l'oxygène synthétique et ramène le porteur à la vie avec 100% de santé.",
    "flavorQuote": "« Ils pensent t'avoir abattu. Le deuxième cœur bat, tes yeux se rouvrent, et leur cauchemar commence. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/1e/SecondHeart.png/revision/latest?cb=20230929160656",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 10000,
      "availability": "Exotique",
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Hôpital chirurgical de pointe"
    },
    "iz": {
      "priceCredits": 14000,
      "quality": "Milware",
      "cybertension": 4,
      "weightKg": 2.5,
      "notes": "En cas d'Incapacité ou de coup mortel, stabilise immédiatement le personnage et le ranime avec 1 niveau de Fatigue au lieu de la mort (1 fois par rencontre)."
    },
    "tags": [
      "système circulatoire",
      "iconique",
      "deuxieme coeur",
      "survie",
      "biodyne",
      "cyberware"
    ]
  },
  {
    "id": "blood-pump-circulatory",
    "name": "Pompe Sanguine Réanimatrice (Blood Pump)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Biotechnica",
    "origin": "Cyberpunk Wiki",
    "description": "Pompe cardio-vasculaire automatisée capable d'injecter instantanément une dose de nanites coagulantes et de stimulants hémostatiques pour refermer les plaies en combat.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d9/BloodPump.png/revision/latest?cb=20230929170919",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 2500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3600,
      "quality": "Bioware",
      "cybertension": 2,
      "weightKg": 1.5,
      "notes": "Action libre : guérit instantanément 1 Blessure physique (utilisable 1 fois par affrontement)."
    },
    "tags": [
      "système circulatoire",
      "soins",
      "blood pump",
      "biotechnica",
      "cyberware"
    ]
  },
  {
    "id": "biomonitor-circulatory",
    "name": "Biomoniteur d'Urgence Trauma-Sync",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Trauma Team",
    "origin": "Cyberpunk Wiki",
    "description": "Surveille en permanence le pouls, la pression sanguine et les marqueurs traumatiques. Déclenche automatiquement les injecteurs médicaux dès que la santé tombe sous 35%.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/53/Biomonitor.png/revision/latest?cb=20230929161644",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 1000,
      "availability": "Standard",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Charcudoc"
    },
    "iz": {
      "priceCredits": 1500,
      "quality": "Standard",
      "cybertension": 1,
      "weightKg": 0.4,
      "notes": "S'active sans consommer d'action dès que le personnage subit l'état Secoué ou une Blessure pour lui injecter un stimulant médical d'urgence."
    },
    "tags": [
      "système circulatoire",
      "biomoniteur",
      "trauma team",
      "sante",
      "cyberware"
    ]
  },
  {
    "id": "heal-on-kill-circulatory",
    "name": "Soin à l'Élimination (Heal-On-Kill)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "BioDyne",
    "origin": "Cyberpunk Wiki",
    "description": "Nanites métaboliques captant l'interruption du champ bio-magnétique d'un adversaire éliminé pour injecter des endorphines régénérantes (+10% santé instantanée).",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/56/HealOnKill.png/revision/latest?cb=20230929170735",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 3000,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 4200,
      "quality": "Hyperchrome",
      "cybertension": 2,
      "weightKg": 0.5,
      "notes": "Chaque ennemi abattu élimine immédiatement l'état Secoué ou récupère 1 niveau de Fatigue."
    },
    "tags": [
      "système circulatoire",
      "soin",
      "biodyne",
      "vampire",
      "cyberware"
    ]
  },
  {
    "id": "microrotors-circulatory",
    "name": "Microrotors Cardiovasculaires",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Dynalar Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Turbines miniatures accélérant le débit sanguin et l'oxygénation musculaire, augmentant la cadence de frappe en corps-à-corps de +20%.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/b0/CyberRotors.png/revision/latest?cb=20230929155636",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 1800,
      "availability": "Standard",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 2400,
      "quality": "Streetware",
      "cybertension": 2,
      "weightKg": 0.8,
      "notes": "Cadence de frappe accrue : +1 attaque de corps-à-corps sans malus de multi-action par round."
    },
    "tags": [
      "système circulatoire",
      "vitesse",
      "corps-a-corps",
      "dynalar",
      "cyberware"
    ]
  },
  {
    "id": "feedback-circuit-circulatory",
    "name": "Circuit de Rétroaction Énergétique",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Convertit la décharge capacitive des armes Tech surchargées pour alimenter des micro-défibrillateurs restaurant la vitalité du tireur.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/ca/DischargeConnector.png/revision/latest?cb=20230929163314",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 2500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3500,
      "quality": "Milware",
      "cybertension": 2,
      "weightKg": 0.6,
      "notes": "Chaque tir d'arme Tech tiré à pleine charge restaure 2 points de souffle et réduit la fatigue du tireur."
    },
    "tags": [
      "système circulatoire",
      "tech",
      "energie",
      "militech",
      "cyberware"
    ]
  },
  {
    "id": "adrenaline-booster-circulatory",
    "name": "Booster d'Adrénaline Continue",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Moore Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Glandes surrénales artificielles libérant un flux soutenu d'adrénaline régénérant l'endurance à chaque coup de mêlée porté.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/c7/StaminaRegenBooster.png/revision/latest?cb=20230929165825",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 2200,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3100,
      "quality": "Standard",
      "cybertension": 1,
      "weightKg": 0.4,
      "notes": "Annule l'épuisement musculaire en combat prolongé et confère Vigueur +1 cran."
    },
    "tags": [
      "système circulatoire",
      "adrenaline",
      "endurance",
      "moore tech",
      "cyberware"
    ]
  },
  {
    "id": "black-mamba-circulatory",
    "name": "Mamba Noir (Black Mamba)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Dogtown Black Market",
    "origin": "Cyberpunk Wiki",
    "description": "Modèle expérimental clandestin de Dogtown augmentant tous les dégâts de poison de +20% et immunisant le porteur contre les venins et toxines synthétiques.",
    "flavorQuote": "« Ton sang est un poison plus létal que celui du serpent. Quiconque s'y frotte est déjà mort. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/17/ViralVenom.png/revision/latest?cb=20230929164104",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 9000,
      "availability": "Exotique",
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Charcudoc clandestin Dogtown"
    },
    "iz": {
      "priceCredits": 12000,
      "quality": "Milware",
      "cybertension": 3,
      "weightKg": 0.8,
      "notes": "Dégâts de tous les poisons infligés +4. Confère une immunité totale aux venins, neurotoxines et gaz asphyxiants."
    },
    "tags": [
      "système circulatoire",
      "iconique",
      "poison",
      "mamba",
      "dogtown",
      "cyberware"
    ]
  },
  {
    "id": "clutch-padding-circulatory",
    "name": "Rembourrage d'Embrayage Musculaire",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Gaine vasculaire amortissant les pointes de tension artérielle lors des tirs prolongés avec des armes lourdes ou automatiques.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/7/71/ShockAbsorber.png/revision/latest?cb=20230929162534",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1200,
      "availability": "Standard",
      "humanityLoss": "1d6 (2)",
      "concealable": true,
      "installReq": "Charcudoc"
    },
    "iz": {
      "priceCredits": 1600,
      "quality": "Standard",
      "cybertension": 1,
      "weightKg": 0.3,
      "notes": "Réduit de moitié le coût en endurance du tir soutenu et confère +1 au Tir en tir continu."
    },
    "tags": [
      "système circulatoire",
      "zetatech",
      "tirs",
      "cyberware"
    ]
  },
  {
    "id": "electromag-recycler-circulatory",
    "name": "Recycleur Électromagnétique",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Récupère les résidus magnétiques des armes Smart et Tech pour recharger les réserves énergétiques et soigner le porteur.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/ca/DischargeConnector.png/revision/latest?cb=20230929163314",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 2400,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3300,
      "quality": "Corpware",
      "cybertension": 2,
      "weightKg": 0.5,
      "notes": "Restaure 1 point de vigueur à chaque fois qu'un tir guidé Smart touche sa cible avec succès."
    },
    "tags": [
      "système circulatoire",
      "smart",
      "kang tao",
      "energie",
      "cyberware"
    ]
  },
  {
    "id": "isometric-stabilizer-circulatory",
    "name": "Stabilisateur Isométrique (Iconique)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Dogtown Black Market",
    "origin": "Cyberpunk Wiki",
    "description": "Implant cardio-musculaire de pointe réduisant la consommation d'endurance de toutes les attaques physiques et cybernétiques de -20%.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/7/71/ShockAbsorber.png/revision/latest?cb=20230929162534",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 8500,
      "availability": "Exotique",
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique Dogtown"
    },
    "iz": {
      "priceCredits": 11000,
      "quality": "Milware",
      "cybertension": 3,
      "weightKg": 0.6,
      "notes": "Supprime tous les malus de fatigue musculaire en combat et confère +1 cran en Vigueur permanent."
    },
    "tags": [
      "système circulatoire",
      "iconique",
      "endurance",
      "dogtown",
      "cyberware"
    ]
  },
  {
    "id": "threatevac-circulatory",
    "name": "Évacuateur de Menace (ThreatEvac)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Trauma Team",
    "origin": "Cyberpunk Wiki",
    "description": "Pompe d'urgence Trauma Team libérant une dose phénoménale de neuro-boosters dès que la santé devient critique pour permettre une retraite immédiate (+50% vitesse).",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/88/CatchMeIfYouCan.png/revision/latest?cb=20230929160404",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 1800,
      "availability": "Coûteux",
      "humanityLoss": "1d6 (3)",
      "concealable": true,
      "installReq": "Clinique Trauma Team"
    },
    "iz": {
      "priceCredits": 2500,
      "quality": "Corpware",
      "cybertension": 1,
      "weightKg": 0.4,
      "notes": "Allure +4 dès que le personnage subit 2 Blessures ou plus, facilitant la retraite tactique."
    },
    "tags": [
      "système circulatoire",
      "fuite",
      "trauma team",
      "vitesse",
      "cyberware"
    ]
  },
  {
    "id": "subdermal-armor",
    "name": "Armure Sous-Cutanée Nanotissulaire",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Plaques flexibles en carbure de silicium et fibres aramides insérées directement sous le derme, offrant une protection balistique permanente contre les éclats et petits calibres.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/81/BoringPlating.png/revision/latest?cb=20230929180739",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 1000,
      "availability": "Standard",
      "sp": 4,
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique chirurgicale"
    },
    "iz": {
      "priceCredits": 2200,
      "quality": "Standard",
      "cybertension": 2,
      "armorBonus": 3,
      "weightKg": 3,
      "notes": "Armure naturelle +3 sur tout le corps, cumulable avec les gilets pare-balles et armures corporelles externes."
    },
    "tags": [
      "système tégumentaire",
      "armure sous-cutanée",
      "blindage",
      "militech",
      "cyberware"
    ]
  },
  {
    "id": "optical-camo-implant",
    "name": "Camouflage Optique Subdermique",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Micro-écrans électrochromiques et cristaux réfractifs insérés sous la peau, courbant la lumière visible et infrarouge pour rendre le porteur virtuellement invisible aux yeux et aux caméras.",
    "flavorQuote": "« Un souffle d'air dans le couloir, le cliquetis d'une porte... et un corps s'effondre sans bruit. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/ec/OpticalCamo.png/revision/latest?cb=20230929181756",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 3000,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 4500,
      "quality": "Corpware",
      "cybertension": 2,
      "weightKg": 0.8,
      "notes": "Invisibilité active : -4 à tous les jets de Perception/Vigilance ennemis pour détecter le porteur ; +4 aux jets de Discrétion."
    },
    "tags": [
      "système tégumentaire",
      "camouflage",
      "invisibilite",
      "arasaka",
      "furtivite",
      "cyberware"
    ]
  },
  {
    "id": "chitin-integumentary",
    "name": "Chitine Sous-Cutanée Génétique (Iconique)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Biotechnica",
    "origin": "Cyberpunk Wiki",
    "description": "Coquille sous-cutanée organique issue de gènes d'arthropodes génétiquement modifiés. Confère une armure monumentale et régénère les tissus cutanés en continu.",
    "flavorQuote": "« Les balles s'écrasent comme des moucherons sur ton torse chitineux. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/7/75/Chiton.png/revision/latest?cb=20230929180815",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 12000,
      "availability": "Exotique",
      "sp": 6,
      "humanityLoss": "4d6 (14)",
      "concealable": true,
      "installReq": "Laboratoire chirurgical Biotechnica"
    },
    "iz": {
      "priceCredits": 16000,
      "quality": "Bioware",
      "cybertension": 4,
      "armorBonus": 4,
      "weightKg": 3.5,
      "notes": "Armure naturelle +4, Récupération naturelle +2 aux jets de guérison des Blessures, et régénération de 1 point de souffle par round."
    },
    "tags": [
      "système tégumentaire",
      "iconique",
      "chitine",
      "biotechnica",
      "bioware",
      "armure",
      "cyberware"
    ]
  },
  {
    "id": "pain-editor-integumentary",
    "name": "Éditeur de Douleur (Pain Editor)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "BioDyne",
    "origin": "Cyberpunk Wiki",
    "description": "Puce de filtrage thalamique interceptant les potentiels d'action nociceptifs avant qu'ils n'atteignent le cortex cérébral. Réduit tous les dégâts subis de -7%.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d2/PainReductor.png/revision/latest?cb=20230929200416",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 3500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 4800,
      "quality": "Hyperchrome",
      "cybertension": 2,
      "weightKg": 0.2,
      "notes": "Ignore jusqu'à 2 points de malus de Blessures physiques en combat, permettant de continuer à agir sans faiblir."
    },
    "tags": [
      "système tégumentaire",
      "douleur",
      "biodyne",
      "resilience",
      "cyberware"
    ]
  },
  {
    "id": "painducer-integumentary",
    "name": "Transducteur de Douleur (Painducer)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Moore Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Convertit 30% des dégâts brutaux instantanés en dégâts résiduels lissés sur le temps, empêchant les chocs létaux soudains.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/eb/BloodDepleter.png/revision/latest?cb=20230929193057",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 3000,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 4000,
      "quality": "Standard",
      "cybertension": 2,
      "weightKg": 0.5,
      "notes": "Réduit les dégâts brutaux reçus de 3 points en absorbant le choc sous forme d'énergie thermique différée."
    },
    "tags": [
      "système tégumentaire",
      "moore tech",
      "absorption",
      "cyberware"
    ]
  },
  {
    "id": "cogito-lattice-integumentary",
    "name": "Treillis Cogito (Cogito Lattice)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "NetWatch",
    "origin": "Cyberpunk Wiki",
    "description": "Réseau de nanites dermiques qui se cristallisent en blindage rigide lorsque la RAM du netrunner est basse ou épuisée (+200% Armure).",
    "flavorQuote": "« Plus ton esprit est à sec, plus ton corps se transforme en mur de béton. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/6c/CogitoFrame.png/revision/latest?cb=20231206100750",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 9000,
      "availability": "Exotique",
      "sp": 5,
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique NetWatch"
    },
    "iz": {
      "priceCredits": 12500,
      "quality": "Milware",
      "cybertension": 3,
      "weightKg": 1.5,
      "notes": "Armure naturelle +4 lorsque le personnage a moins de 2 unités de RAM disponibles dans son cyberdeck."
    },
    "tags": [
      "système tégumentaire",
      "iconique",
      "netwatch",
      "ram",
      "blindage",
      "cyberware"
    ]
  },
  {
    "id": "carapace-integumentary",
    "name": "Carapace Réactive Latérale",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Blindage tégumentaire articulé renforçant l'armure dorsale et latérale lors des retraites tactiques et replis sous le feu.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/44/WeirdTankyPlating.png/revision/latest?cb=20230929174657",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 2800,
      "availability": "Coûteux",
      "sp": 4,
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3800,
      "quality": "Corpware",
      "cybertension": 2,
      "weightKg": 2.5,
      "notes": "Armure +4 contre toutes les attaques provenant des flancs ou de l'arrière du personnage."
    },
    "tags": [
      "système tégumentaire",
      "carapace",
      "kang tao",
      "armure",
      "cyberware"
    ]
  },
  {
    "id": "defenzikov-integumentary",
    "name": "Defenzikov (Gaine de Protection Kerenzikov)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Plaquettes d'armure télescopiques se surélevant pour protéger les organes vitaux dès que le système Kerenzikov est activé.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/ed/PlatingGlitch.png/revision/latest?cb=20230929192017",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 2500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3400,
      "quality": "Milware",
      "cybertension": 2,
      "weightKg": 1.8,
      "notes": "Armure +3 pendant toute la durée d'activation de Kerenzikov et durant 1 round après."
    },
    "tags": [
      "système tégumentaire",
      "defenzikov",
      "militech",
      "armure",
      "cyberware"
    ]
  },
  {
    "id": "peripheral-inverse-integumentary",
    "name": "Inverseur Périphérique (Iconique)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Dogtown Black Market",
    "origin": "Cyberpunk Wiki",
    "description": "Modulateur d'impact de Dogtown réduisant drastiquement les dégâts subis des ennemis au corps-à-corps (jusqu'à -45% à bout portant).",
    "flavorQuote": "« Les brutes de Night City pensent qu'en s'approchant ils ont l'avantage. C'est là que tes implants absorbent toute leur force. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/cd/ProximityReducer.png/revision/latest?cb=20230929173352",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 11000,
      "availability": "Exotique",
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique Dogtown"
    },
    "iz": {
      "priceCredits": 14500,
      "quality": "Milware",
      "cybertension": 3,
      "weightKg": 2.2,
      "notes": "Réduit de 4 points les dégâts subis des adversaires situés au contact direct (1 case)."
    },
    "tags": [
      "système tégumentaire",
      "iconique",
      "dogtown",
      "contact",
      "defense",
      "cyberware"
    ]
  },
  {
    "id": "nano-plating-integumentary",
    "name": "Nano-Placage Réactif (Nano-plating)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Couche de nanorobots s'organisant en bouclier instantané absorbant entièrement le premier projectile subi après une ruée ou glissade.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/ab/NanoTechPlates.png/revision/latest?cb=20230929180320",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 3500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 4700,
      "quality": "Corpware",
      "cybertension": 2,
      "weightKg": 1,
      "notes": "Ignore complètement la première attaque à distance subie après avoir effectué une Ruée ou Glissade tactique."
    },
    "tags": [
      "système tégumentaire",
      "nano-plating",
      "arasaka",
      "esquive",
      "cyberware"
    ]
  },
  {
    "id": "countershell-integumentary",
    "name": "Contre-Blindage Énergétique (Countershell)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Active une barrière de protection cinétique d'urgence lorsque le porteur subit un coup critique ou une perte de bouclier.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/c3/SuddenAid.png/revision/latest?cb=20230929195325",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 3000,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 4100,
      "quality": "Streetware",
      "cybertension": 2,
      "weightKg": 1.2,
      "notes": "Confère un bouclier d'énergie temporaire absorbant jusqu'à 8 points de dégâts après avoir subi une Blessure."
    },
    "tags": [
      "système tégumentaire",
      "countershell",
      "zetatech",
      "bouclier",
      "cyberware"
    ]
  },
  {
    "id": "shock-n-awe-integumentary",
    "name": "Choc et Effroi (Shock-n-Awe)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Électrodes sous-cutanées libérant une onde de choc électrostatique de 50 000 volts sur toutes les cibles environnantes lors d'un impact subi.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/35/ElectroshockMechanism.png/revision/latest?cb=20230929194821",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 3500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 4800,
      "quality": "Milware",
      "cybertension": 3,
      "weightKg": 1.5,
      "notes": "En subissant des dégâts, déclenche une IEM électrique radiale de 3d6 PA 4 sur un rayon de 3 cases."
    },
    "tags": [
      "système tégumentaire",
      "choc",
      "iem",
      "militech",
      "foudre",
      "cyberware"
    ]
  },
  {
    "id": "proxishield-integumentary",
    "name": "Proxi-Bouclier Balistique (ProxiShield)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Capteurs de proximité polarisant le champ magnétique sous-cutané pour ralentir les balles tirées à courte portée.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/cd/ProximityReducer.png/revision/latest?cb=20230929173352",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 2500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3500,
      "quality": "Corpware",
      "cybertension": 2,
      "weightKg": 1.6,
      "notes": "Réduit les dégâts reçus de 2 points contre tous les tirs provenant d'ennemis situés à moins de 4 cases."
    },
    "tags": [
      "système tégumentaire",
      "proxishield",
      "kang tao",
      "defense",
      "cyberware"
    ]
  },
  {
    "id": "rangeguard-integumentary",
    "name": "Garde à Distance (RangeGuard)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Trauma Team",
    "origin": "Cyberpunk Wiki",
    "description": "Blindage nanométrique renforçant l'atténuation des tirs lointains et des tirs de snipers ennemis.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/e3/Cw_integumentary_extra.png/revision/latest?cb=20260212095538",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 2500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3500,
      "quality": "Corpware",
      "cybertension": 2,
      "weightKg": 1.6,
      "notes": "Armure naturelle +2 contre les tirs provenant d'ennemis situés à moyenne, longue ou extrême portée."
    },
    "tags": [
      "système tégumentaire",
      "sniper",
      "defense",
      "trauma team",
      "cyberware"
    ]
  },
  {
    "id": "boosted-tendons",
    "name": "Tendons Renforcés Hydropneumatiques (Double Saut)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Dynalar Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Servomoteurs hydropneumatiques intégrés dans les mollets permettant d'effectuer une impulsion aérienne secondaire propulsant le porteur dans les airs (Double Saut).",
    "flavorQuote": "« Les toits de Night City deviennent ton terrain de jeu. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/55/BoostedTendons.png/revision/latest?cb=20230926075449",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 3000,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": false,
      "installReq": "Clinique chirurgicale"
    },
    "iz": {
      "priceCredits": 4200,
      "quality": "Hyperchrome",
      "cybertension": 2,
      "weightKg": 2.8,
      "notes": "Double saut propulsé sans jet d'Athlétisme franchissant jusqu'à 4 mètres de haut ou 6 mètres en longueur. Allure +2."
    },
    "tags": [
      "jambes",
      "double saut",
      "dynalar",
      "agilite",
      "toits",
      "cyberware"
    ]
  },
  {
    "id": "fortified-ankles-legs",
    "name": "Chevilles Fortifiées Hydrauliques (Saut Chargé)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Pistons haute pression emmagasinant l'énergie cinétique pour déclencher un saut vertical surpuissant de plus de 6 mètres et amortir les chutes brutales.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/96/ReinforcedMuscles.png/revision/latest?cb=20230926075549",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 3000,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": false,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 4200,
      "quality": "Streetware",
      "cybertension": 2,
      "weightKg": 3.2,
      "notes": "Saut chargé vertical jusqu'à 6 mètres de haut et amortit les chutes jusqu'à 10 mètres sans subir le moindre dégât."
    },
    "tags": [
      "jambes",
      "saut charge",
      "zetatech",
      "chutes",
      "cyberware"
    ]
  },
  {
    "id": "jenkins-tendons-legs",
    "name": "Tendons de Jenkins (Iconiques)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Modèle de tendons prototype ayant appartenu à l'officier supérieur Arthur Jenkins d'Arasaka. Démultiplie la vitesse de sprint initial et confère une impulsion de course foudroyante.",
    "flavorQuote": "« La vitesse pour écraser vos rivaux dans les couloirs feutrés de la tour Arasaka. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/65/JenkinsTendons.png/revision/latest?cb=20230926081535",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 9000,
      "availability": "Exotique",
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique Arasaka"
    },
    "iz": {
      "priceCredits": 12000,
      "quality": "Milware",
      "cybertension": 3,
      "weightKg": 2.2,
      "notes": "Allure +4, permet de sprinter sans subir de malus d'action et confère +2 pour esquiver les tirs en courant."
    },
    "tags": [
      "jambes",
      "iconique",
      "jenkins",
      "arasaka",
      "sprint",
      "vitesse",
      "cyberware"
    ]
  },
  {
    "id": "leeroy-ligament-system-legs",
    "name": "Système de Ligaments Leeroy (Iconique)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Dogtown Black Market",
    "origin": "Cyberpunk Wiki",
    "description": "Ligaments artificiels modifiés pour les charges kamikazes et assauts effrénés. Accélère la vitesse de course de +20% et immunise contre les ralentissements.",
    "flavorQuote": "« Pas de plan, pas de doute. Fonce tête baissée, ils ne pourront jamais te rattraper. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/0a/IconicJenkinsTendons.png/revision/latest?cb=20230926075537",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 10000,
      "availability": "Exotique",
      "humanityLoss": "3d6 (10)",
      "concealable": true,
      "installReq": "Clinique Dogtown"
    },
    "iz": {
      "priceCredits": 13500,
      "quality": "Milware",
      "cybertension": 3,
      "weightKg": 2.5,
      "notes": "Allure +4, immunise totalement contre les effets de ralentissement et les pénalités de terrain difficile."
    },
    "tags": [
      "jambes",
      "iconique",
      "leeroy",
      "dogtown",
      "assaut",
      "cyberware"
    ]
  },
  {
    "id": "lynx-paws",
    "name": "Pattes de Lynx Silencieuses (Lynx Paws)",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "BioDyne",
    "origin": "Cyberpunk Wiki",
    "description": "Coussinets d'insonorisation acoustique et amortisseurs de polymère sous les pieds rendant les bruits de pas, de course et de chute totalement inaudibles.",
    "flavorQuote": "« Les ombres de Night City ne font pas de bruit. Toi non plus. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/09/CatPaws.png/revision/latest?cb=20230926075604",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 2500,
      "availability": "Coûteux",
      "humanityLoss": "2d6 (7)",
      "concealable": true,
      "installReq": "Clinique"
    },
    "iz": {
      "priceCredits": 3500,
      "quality": "Bioware",
      "cybertension": 1,
      "weightKg": 1.8,
      "notes": "Bruit de pas totalement inaudible (+2 aux jets de Discrétion basés sur le son). Permet de se déplacer accroupi à Allure normale."
    },
    "tags": [
      "jambes",
      "lynx paws",
      "silence",
      "discretion",
      "biodyne",
      "cyberware"
    ]
  },
  {
    "id": "att-add-vantage",
    "name": "Viseur Court Add-Vantage",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Budget Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Viseur reflex holographique économique produit par Budget Arms. Projette un réticule lumineux simple mais net, idéal pour l'acquisition rapide de cibles à courte et moyenne portée.",
    "flavorQuote": "« Pas cher, pas compliqué, il met le point rouge là où la balle va frapper. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/5f/W_att_scope_short_03.png/revision/latest?cb=20211209201930",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 100,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 200,
      "quality": "Streetware",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Viseur Reflex : Réduit de 1 point le malus de Tir Rapide et confère +1 aux jets de Tir à portée Courte."
    },
    "tags": [
      "accessoire",
      "viseur",
      "court",
      "budget arms",
      "optique",
      "weapon_mods"
    ]
  },
  {
    "id": "att-cqo-kanone-mini",
    "name": "Viseur Tactique CQO Kanone MINI Mk.72",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kiroshi Optics",
    "origin": "Cyberpunk Wiki",
    "description": "Viseur holographique miniature haute clarté conçu par Kiroshi Optics pour les opérations en milieu clos (CQC). Son prisme à transmission quantique élimine toute réfraction lumineuse parasite.",
    "flavorQuote": "« Conçu pour les couloirs étroits où chaque milliseconde décide de qui reste debout. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/0f/W_att_scope_short_04.png/revision/latest?cb=20211209205623",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 300,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 600,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Optique CQC de précision : Confère +1 aux jets de Tir à portée Courte et Moyenne. Ignore 1 point de malus d'obscurité ou de fumée légère."
    },
    "tags": [
      "accessoire",
      "viseur",
      "cqc",
      "kiroshi",
      "optique",
      "weapon_mods"
    ]
  },
  {
    "id": "att-clearvue-mk8",
    "name": "Viseur Reflex ClearVue Mk.8",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Viseur panoramique tubulaire à cadre ultra-fin en fibre de carbone offrant un champ visuel dégagé sans angle mort pour armes de poing et pistolets-mitrailleurs.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/4a/W_att_scope_long_03.png/revision/latest?cb=20211210105147",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 150,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 350,
      "quality": "Standard",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Champ large : Confère +1 aux jets de Tir contre les cibles en mouvement rapide."
    },
    "tags": [
      "accessoire",
      "viseur",
      "court",
      "zetatech",
      "reflex",
      "weapon_mods"
    ]
  },
  {
    "id": "att-handyman",
    "name": "Viseur de Fortune « Handyman »",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Artisanal / Street Tech",
    "origin": "Cyberpunk Wiki",
    "description": "Viseur artisanal monté à partir de lentilles de récupération et de diodes LED industrielles. Rude et spartiate, mais redoutablement efficace entre les mains d'un edgerunner débrouillard.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/e9/W_att_scope_short_06.png/revision/latest?cb=20220216184012",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 50,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 100,
      "quality": "Gutterware",
      "cybertension": 0,
      "weightKg": 0.2,
      "notes": "Bricolage de rue : Réduit le malus de visée de 1 point à portée Courte."
    },
    "tags": [
      "accessoire",
      "viseur",
      "artisanal",
      "streetware",
      "weapon_mods"
    ]
  },
  {
    "id": "att-hyakume",
    "name": "Viseur Point Rouge Tsunami « Hyakume »",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Tsunami Defense Systems",
    "origin": "Cyberpunk Wiki",
    "description": "Viseur haut de gamme intégrant un calculateur de point d'impact laser gyrostabilisé conçu par Tsunami Defense Systems pour leurs armes de précision légères.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/52/W_att_scope_short_02.png/revision/latest?cb=20211209205756",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 350,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 700,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.15,
      "notes": "Point rouge gyrostabilisé : +1 au Tir et élimine le premier point de malus de recul lors d'un tir simple."
    },
    "tags": [
      "accessoire",
      "viseur",
      "tsunami",
      "optique",
      "precision",
      "weapon_mods"
    ]
  },
  {
    "id": "att-kanetsugu",
    "name": "Viseur Holographique Arasaka « Kanetsugu »",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Optique de standard corporatiste Arasaka équipant les officiers de sécurité d'élite. Projette une grille réticulaire multicouche intégrant télémétrie et estimation de distance.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/19/W_att_scope_short_07.png/revision/latest?cb=20220216184030",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 400,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 800,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 0.15,
      "notes": "Télémétrie militaire Arasaka : +1 au Tir à portée Courte et Moyenne. Confère +1 pour effectuer un Tir Ciblé (Coup Précis)."
    },
    "tags": [
      "accessoire",
      "viseur",
      "arasaka",
      "holographique",
      "weapon_mods"
    ]
  },
  {
    "id": "att-type-2067",
    "name": "Viseur Optique Kang Tao « Type 2067 »",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Viseur robuste à calibration intelligente Kang Tao, spécialement synchronisé pour optimiser l'alignement balistique des armes cinétiques et intelligentes.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/11/W_att_scope_short_05.png/revision/latest?cb=20211209205516",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 200,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 450,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.15,
      "notes": "Synchronisation Kang Tao : +1 au Tir lors de l'utilisation d'armes Smart ou cinétiques à haute cadence."
    },
    "tags": [
      "accessoire",
      "viseur",
      "kang tao",
      "optique",
      "weapon_mods"
    ]
  },
  {
    "id": "att-e255-percipient",
    "name": "Lunette Tactique Arasaka E255 Percipient",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Lunette grossissement moyen 3x pour fusils d'assaut et carabines de tireur désigné, assurant une clarté optique exceptionnelle dans les engagements à moyenne distance.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/89/W_att_scope_long_02.png/revision/latest?cb=20211210105142",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 250,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": false
    },
    "iz": {
      "priceCredits": 500,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.4,
      "notes": "Grossissement 3x : Réduit de 2 points les malus de distance à portée Moyenne et Longue si le tireur effectue une action de Visée."
    },
    "tags": [
      "accessoire",
      "lunette",
      "longue",
      "arasaka",
      "zoom",
      "weapon_mods"
    ]
  },
  {
    "id": "att-e305-prospecta",
    "name": "Lunette Militaire Arasaka E305 Prospecta",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Optique de combat à télémétrie laser intégrée et zoom variable 4x-8x pour fusils de précision et snipers de surveillance corporatiste.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/eb/W_att_scope_sniper_02.png/revision/latest?cb=20211210004003",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 500,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": false
    },
    "iz": {
      "priceCredits": 1000,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 0.6,
      "notes": "Télémètre laser Arasaka : +2 aux jets de Tir à portée Longue ou Extrême après une action de Visée."
    },
    "tags": [
      "accessoire",
      "lunette",
      "precision",
      "arasaka",
      "sniper",
      "weapon_mods"
    ]
  },
  {
    "id": "att-gaki",
    "name": "Lunette Sniper Arasaka « Gaki »",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Lunette pour fusils de sniper lourds intégrant un filtre antireflet thermique et un compensateur de dérive éolienne automatique.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/65/W_att_scope_sniper_03.png/revision/latest?cb=20220216183543",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 600,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": false
    },
    "iz": {
      "priceCredits": 1200,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 0.7,
      "notes": "Compensateur éolien : Ignore les pénalités de vent et de météo défavorable lors des tirs à longue distance. +2 au Tir avec Visée."
    },
    "tags": [
      "accessoire",
      "lunette",
      "sniper",
      "arasaka",
      "vent",
      "weapon_mods"
    ]
  },
  {
    "id": "att-hpo-kanone-max",
    "name": "Lunette Sniper Lourde HPO Kanone MAX Mk.77",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Le monstre optique de l'armée Militech : zoom 12x à stabilisation magnéto-inertielle conçu pour les snipers antichars et tirs au-delà du kilomètre.",
    "flavorQuote": "« Si vous pouvez voir leur ombre à travers la brume, cette lunette placera la balle entre leurs deux yeux. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/f4/W_att_scope_sniper_01.png/revision/latest?cb=20211210003953",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1000,
      "availability": "Très coûteux",
      "humanityLoss": "0",
      "concealable": false
    },
    "iz": {
      "priceCredits": 2200,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 0.9,
      "notes": "Stabilisation inertielle Militech : Permet d'ignorer entièrement les malus de portée Extrême lors d'une Visée. PA +1 sur tir visé."
    },
    "tags": [
      "accessoire",
      "lunette",
      "sniper",
      "militech",
      "lourd",
      "extreme",
      "weapon_mods"
    ]
  },
  {
    "id": "att-jue",
    "name": "Lunette de Précision Kang Tao « Jue »",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Optique de précision à acquisition thermique Kang Tao, mettant automatiquement en surbrillance le profil thermique des tireurs embusqués.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/ce/W_att_scope_long_05.png/revision/latest?cb=20220216183031",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 500,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": false
    },
    "iz": {
      "priceCredits": 1100,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.5,
      "notes": "Vision thermique intégrée : Ignore jusqu'à 4 points de malus d'obscurité, de brouillard ou de camouflage optique ennemi."
    },
    "tags": [
      "accessoire",
      "lunette",
      "thermique",
      "kang tao",
      "weapon_mods"
    ]
  },
  {
    "id": "att-kairo-sa1",
    "name": "Lunette Hybride Kairo SA-1",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Kiroshi Optics",
    "origin": "Cyberpunk Wiki",
    "description": "Système optique à bascule permettant d'alterner instantanément entre point rouge sans grossissement pour le CQC et zoom 4x pour le tir posé.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/c9/W_att_scope_long_06.png/revision/latest?cb=20231001095412",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 300,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": false
    },
    "iz": {
      "priceCredits": 650,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.45,
      "notes": "Optique à bascule : Le tireur peut choisir à chaque tour entre bonus de visée réflexe (+1 Tir courte portée) ou réduction de portée (Visée 4x)."
    },
    "tags": [
      "accessoire",
      "lunette",
      "kiroshi",
      "hybride",
      "bascule",
      "weapon_mods"
    ]
  },
  {
    "id": "att-mk2x-grandstand",
    "name": "Viseur Agrandisseur Mk.2x Grandstand",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Budget Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Module de grossissement 2x abordable s'alignant derrière un viseur holographique pour doubler la portée pratique sans encombrer l'arme.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/ea/W_att_scope_long_01.png/revision/latest?cb=20211210105136",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 150,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": false
    },
    "iz": {
      "priceCredits": 300,
      "quality": "Standard",
      "cybertension": 0,
      "weightKg": 0.3,
      "notes": "Agrandisseur 2x : Réduit le malus de portée Moyenne de 1 point."
    },
    "tags": [
      "accessoire",
      "lunette",
      "budget arms",
      "2x",
      "weapon_mods"
    ]
  },
  {
    "id": "att-os1-gimleteye",
    "name": "Lunette d'Acquisition Rapide OS-1 GimletEye",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Lunette compacte à prisme grand angle conçue pour les patrouilles de sécurité urbaine, alliant champ panoramique et zoom 3.5x.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/30/W_att_scope_short_01.png/revision/latest?cb=20211209205751",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 250,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": false
    },
    "iz": {
      "priceCredits": 550,
      "quality": "Standard",
      "cybertension": 0,
      "weightKg": 0.4,
      "notes": "Acquisition rapide : +1 au Tir contre les cibles situées à portée Moyenne."
    },
    "tags": [
      "accessoire",
      "lunette",
      "zetatech",
      "panoramique",
      "weapon_mods"
    ]
  },
  {
    "id": "att-so21-saika",
    "name": "Lunette de Tireur d'Élite SO-21 Saika",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Tsunami Defense Systems",
    "origin": "Cyberpunk Wiki",
    "description": "Chef-d'œuvre de l'optique balistique japonaise intégrant des lentilles à nanocristaux synthétiques traitées au diamant pour une définition micrométrique.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/2d/W_att_scope_long_04.png/revision/latest?cb=20211210105158",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 800,
      "availability": "Très coûteux",
      "humanityLoss": "0",
      "concealable": false
    },
    "iz": {
      "priceCredits": 1800,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.65,
      "notes": "Optique de maître tireur : Confère l'Atout Tireur d'élite. Toute Relance sur un jet de Tir ciblé inflige +1d6 dégâts additionnels."
    },
    "tags": [
      "accessoire",
      "lunette",
      "tsunami",
      "sniper",
      "elite",
      "weapon_mods"
    ]
  },
  {
    "id": "att-cs1-taipan",
    "name": "Silencieux Militech CS-1 Taipan",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Modérateur de son militaire compact pour armes de poing et fusils légers. Élimine 95% de la signature acoustique et flash de bouche tout en doublant les dégâts en attaque furtive.",
    "flavorQuote": "« Les morts ne crient pas, et avec ce silencieux, leurs voisins n'entendent rien non plus. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/39/W_silencer_02.png/revision/latest?cb=20211203122147",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 300,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 650,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 0.25,
      "notes": "Suppression acoustique totale : +4 aux jets de Discrétion lors d'un tir embusqué. Attaque surprise inflige +2 dégâts supplémentaires."
    },
    "tags": [
      "accessoire",
      "silencieux",
      "militech",
      "furtivite",
      "discretion",
      "weapon_mods"
    ]
  },
  {
    "id": "att-xc10-strix",
    "name": "Silencieux Tactique XC-10 Strix",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Silencieux multi-chambres avec déflecteurs en tungstène conçu pour absorber les ondes de choc des cartouches à haute pression sans altérer la vélocité balistique.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/11/W_silencer_01.png/revision/latest?cb=20211203122119",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 250,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 500,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.3,
      "notes": "Atténuation sonore avancée : Tir inaudible au-delà de 6 cases. Confère +2 aux tests d'Infiltration lors des tirs."
    },
    "tags": [
      "accessoire",
      "silencieux",
      "arasaka",
      "strix",
      "weapon_mods"
    ]
  },
  {
    "id": "att-xc10-cetus",
    "name": "Modérateur de Son Lourd XC-10 Cetus",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Silencieux lourd surdimensionné pour fusils d'assaut et mitraillettes de gros calibre, refroidissant les gaz de combustion grâce à un gel polymère dissipatif.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/19/W_silencer_03.png/revision/latest?cb=20211203122153",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 350,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": false
    },
    "iz": {
      "priceCredits": 750,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.45,
      "notes": "Dissipation de gros calibre : Réduit le recul de 1 point et supprime le flash lumineux nocturne."
    },
    "tags": [
      "accessoire",
      "silencieux",
      "lourd",
      "zetatech",
      "fusil",
      "weapon_mods"
    ]
  },
  {
    "id": "att-tsx-tocororo",
    "name": "Silencieux Furtif TSX Tocororo",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Budget Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Silencieux cylindrique basique mais très répandu dans les ruelles de Santo Domingo et Heywood, facile à visser sur n'importe quel canon fileté 9mm ou 11mm.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/0c/W_silencer_04.png/revision/latest?cb=20211203122159",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 100,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 250,
      "quality": "Streetware",
      "cybertension": 0,
      "weightKg": 0.2,
      "notes": "Silencieux de rue : Réduit le bruit des tirs (inaudible à plus de 12 cases), +1 aux jets de Discrétion."
    },
    "tags": [
      "accessoire",
      "silencieux",
      "budget arms",
      "streetware",
      "weapon_mods"
    ]
  },
  {
    "id": "att-rc7-strigoi",
    "name": "Frein de Bouche RC-7 Strigoi",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Frein de bouche pour fusils d'assaut doté d'évents latéraux inclinés à 45° qui canalisent les gaz vers l'arrière pour neutraliser le recul horizontal.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/95/W_att_power_05.png/revision/latest?cb=20220216173902",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 150,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 350,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 0.15,
      "notes": "Compensation latérale : Réduit le malus de Tir Automatique de 1 point pour les fusils d'assaut et SMG."
    },
    "tags": [
      "accessoire",
      "frein de bouche",
      "militech",
      "recul",
      "weapon_mods"
    ]
  },
  {
    "id": "att-rc7-zaar",
    "name": "Compensateur de Recul Lourd RC-7 Zaar",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Compensateur d'infanterie lourde Militech conçu pour dompter le recul féroce des mitrailleuses légères et des fusils de combat tactiques.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/66/W_att_power_06.png/revision/latest?cb=20220216173959",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 250,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 600,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 0.25,
      "notes": "Contrôle de recul lourd : Réduit de 2 points le malus de Recul sur toutes les armes automatiques."
    },
    "tags": [
      "accessoire",
      "compensateur",
      "militech",
      "lourd",
      "weapon_mods"
    ]
  },
  {
    "id": "att-rc7-varkolak",
    "name": "Frein de Bouche Anti-Relèvement RC-7 Varkolak",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Buse d'échappement verticale rejetant les gaz vers le haut pour coller le canon vers le bas lors des tirs en rafale continue.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/92/W_att_power_07.png/revision/latest?cb=20220216174036",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 180,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 400,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.15,
      "notes": "Anti-relèvement : Permet d'effectuer des rafales de 3 coups sans subir de dispersion verticale."
    },
    "tags": [
      "accessoire",
      "frein de bouche",
      "arasaka",
      "rafale",
      "weapon_mods"
    ]
  },
  {
    "id": "att-rc7-aswang",
    "name": "Compensateur Haute Vélocité RC-7 Aswang",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Compensateur aérodynamique stabilisant la trajectoire des ogives dès leur sortie de bouche, maximisant la portée pratique.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/90/W_att_power_09.png/revision/latest?cb=20220216174104",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 220,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 500,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.15,
      "notes": "Vélocité accrue : Augmente la portée Courte et Moyenne de l'arme de 2 cases."
    },
    "tags": [
      "accessoire",
      "compensateur",
      "kang tao",
      "portee",
      "weapon_mods"
    ]
  },
  {
    "id": "att-rc7-ifrit",
    "name": "Frein de Bouche Dissipateur RC-7 Ifrit",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Embout en alliage céramique aérospatial dissipant la chaleur des tirs continus et réduisant le flash aveuglant des cartouches magnum.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/b1/W_att_power_10.png/revision/latest?cb=20220216174125",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 200,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 480,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.2,
      "notes": "Dissipation thermique : Empêche la surchauffe de l'arme et élimine tout risque d'enrayement lors de tirs soutenus."
    },
    "tags": [
      "accessoire",
      "frein de bouche",
      "zetatech",
      "chaleur",
      "weapon_mods"
    ]
  },
  {
    "id": "att-rc7-yokai",
    "name": "Compensateur Tactique Arasaka RC-7 Yokai",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Compensateur de précision usiné dans un bloc de titane pour les armes de tireurs d'élite urbains de la corporation Arasaka.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/89/W_att_power_11.png/revision/latest?cb=20220216174145",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 280,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 620,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.18,
      "notes": "Précision Arasaka : +1 à tous les jets de Tir lors d'un tir en semi-automatique posé."
    },
    "tags": [
      "accessoire",
      "compensateur",
      "arasaka",
      "precision",
      "weapon_mods"
    ]
  },
  {
    "id": "att-rc7-kutrub",
    "name": "Frein de Bouche SMG RC-7 Kutrub",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Budget Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Frein de bouche compact conçu spécifiquement pour les pistolets-mitrailleurs à cadence effrénée pour resserrer le cône de dispersion.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/e2/W_att_power_12.png/revision/latest?cb=20220216174312",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 120,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 280,
      "quality": "Standard",
      "cybertension": 0,
      "weightKg": 0.12,
      "notes": "Contrôle SMG : +1 au toucher lors de l'utilisation d'une arme de catégorie Mitraillette en tir continu."
    },
    "tags": [
      "accessoire",
      "frein de bouche",
      "smg",
      "budget arms",
      "weapon_mods"
    ]
  },
  {
    "id": "att-rc7-dybbuk",
    "name": "Compensateur Pistolet RC-7 Dybbuk",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Nokota",
    "origin": "Cyberpunk Wiki",
    "description": "Compensateur de bouche ultra-léger pour armes de poing réduisant le fouet du canon lors des tirs à répétition rapide.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/ea/W_att_power_13.png/revision/latest?cb=20220216174525",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 140,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 320,
      "quality": "Standard",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Stabilité d'arme de poing : Permet de tirer 2 fois par tour avec un pistolet sans pénalité de recul cumulée."
    },
    "tags": [
      "accessoire",
      "compensateur",
      "pistolet",
      "nokota",
      "weapon_mods"
    ]
  },
  {
    "id": "att-rc7-babaroga",
    "name": "Compensateur Lourd Anti-Dispersion RC-7 Babaroga",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Rostović",
    "origin": "Cyberpunk Wiki",
    "description": "Monstrueux compensateur d'origine néo-soviétique Rostović usiné pour les revolvers lourds et canons à main de calibre 12mm et plus.",
    "flavorQuote": "« Quand vous tirez du calibre lourd, le Babaroga s'assure que le recul brise les cibles, pas votre poignet. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/be/W_att_power_14.png/revision/latest?cb=20220216174602",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 400,
      "availability": "Très coûteux",
      "humanityLoss": "0",
      "concealable": false
    },
    "iz": {
      "priceCredits": 900,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 0.35,
      "notes": "Maîtrise des calibres lourds : Annule la condition de Force minimale pour tirer avec les armes de poing très lourdes (ex: Burya, Overture)."
    },
    "tags": [
      "accessoire",
      "compensateur",
      "rostovic",
      "revolver",
      "lourd",
      "weapon_mods"
    ]
  },
  {
    "id": "att-rc7-liger",
    "name": "Compensateur Balistique RC-7 Liger",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Constitutional Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Compensateur équilibré pour fusils à pompe et armes de poing de défense personnelle, améliorant la reprise de visée après chaque coup.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/86/W_att_power_15.png/revision/latest?cb=20220216174623",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 160,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 360,
      "quality": "Standard",
      "cybertension": 0,
      "weightKg": 0.15,
      "notes": "Reprise de visée : Confère +1 au Tir sur la seconde attaque consécutive contre la même cible."
    },
    "tags": [
      "accessoire",
      "compensateur",
      "constitutional arms",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-firecracker",
    "name": "Pétard Explosif (Firecracker) [Mod Chimère]",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Militech (Noyau de Chimère)",
    "origin": "Cyberpunk Wiki",
    "description": "Mod d'arme légendaire forgé à partir du noyau du blindé expérimental Chimère de Dogtown. Convertit instantanément tous les projectiles d'armes cinétiques (Power) en micro-ogives explosives à fragmentation dévastatrice.",
    "flavorQuote": "« Chaque balle tirée claque comme une grenade artisanale au visage de l'ennemi. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/87/ChimeraPowerMod.png/revision/latest?cb=20231002104631",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 5000,
      "availability": "Exotique",
      "damage": "+2d6 Explosif",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 8000,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "+1d6",
      "ap": 2,
      "weightKg": 0.2,
      "notes": "Munitions explosives Chimère : Tous les tirs infligent +1d6 dégâts de zone (Petit Gabarit) à l'impact et PA 2. Les cibles doivent réussir un jet de Vigueur ou être Secouées par l'onde de choc."
    },
    "tags": [
      "mod",
      "chimere",
      "iconique",
      "explosif",
      "cinetique",
      "phantom liberty",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-wallpuncher",
    "name": "Perce-Mur Absolu (Wallpuncher) [Mod Chimère]",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Militech (Noyau de Chimère)",
    "origin": "Cyberpunk Wiki",
    "description": "Module supraconducteur extrait du canon à rail de la Chimère. Permet aux armes Tech de surcharger leur capacité à 200% sans allonger le temps de charge, transperçant blindages et murs sans aucune déperdition de dégâts.",
    "flavorQuote": "« Le béton armé, les portes de coffre-fort... pour cette balle, rien de tout cela n'existe. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/f5/ChimeraTechMod.png/revision/latest?cb=20231002104815",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 5000,
      "availability": "Exotique",
      "damage": "Perfore tous les abris",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 8000,
      "quality": "Milware",
      "cybertension": 0,
      "ap": 6,
      "weightKg": 0.2,
      "notes": "Perforation absolue Chimère : Charge 200% instantanée. Ignore totalement les abris physiques solides (murs de béton, blindages) et confère PA 6."
    },
    "tags": [
      "mod",
      "chimere",
      "iconique",
      "tech",
      "perforation",
      "phantom liberty",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-hackatomy",
    "name": "Hackatomie Neuronale (Hackatomy) [Mod Chimère]",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Militech (Noyau de Chimère)",
    "origin": "Cyberpunk Wiki",
    "description": "Puce d'injection virale militaire programmée à partir des protocoles d'attaque de la Chimère. Chaque balle intelligente qui pénètre un ennemi injecte un quickhack aléatoire (Court-circuit, Surchauffe ou Cyberdysfonctionnement).",
    "flavorQuote": "« Pourquoi choisir entre tirer et hacker quand vos balles font les deux à la fois ? »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/19/ChimeraSmartMod.png/revision/latest?cb=20231002104747",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 5000,
      "availability": "Exotique",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 8000,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 0.2,
      "notes": "Injection virale Smart : Sur un jet de dégâts réussi, la cible subit immédiatement l'effet d'un Court-circuit IEM (dégâts électriques 2d6 ignorant armure) ou désactivation d'un implant cybernétique."
    },
    "tags": [
      "mod",
      "chimere",
      "iconique",
      "smart",
      "quickhack",
      "phantom liberty",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-severance",
    "name": "Sectionnement Net (Severance) [Mod Chimère]",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "legendary",
    "rarityLabel": "Iconique / Légendaire",
    "manufacturer": "Militech (Noyau de Chimère)",
    "origin": "Cyberpunk Wiki",
    "description": "Revêtement plasmique monomoléculaire conçu à partir des broyeurs de la Chimère. Les attaques de lames découpent les membres avec une facilité chirurgicale, tranchant les ennemis affaiblis en une seule frappe.",
    "flavorQuote": "« Une coupe si pure que la cible ne réalise qu'elle est démembrée que quand elle touche le sol. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/46/ChimeraMeleeMod.png/revision/latest?cb=20230923071534",
    "fallbackIcon": "Sword",
    "red": {
      "priceEb": 5000,
      "availability": "Exotique",
      "damage": "Démembrement instantané",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 8000,
      "quality": "Milware",
      "cybertension": 0,
      "ap": 4,
      "weightKg": 0.2,
      "notes": "Sectionnement absolu : En cas de coup porté contre un ennemi déjà Blessé ou sur une Relance de Combat, sectionne un membre ou décapite instantanément la cible."
    },
    "tags": [
      "mod",
      "chimere",
      "iconique",
      "lames",
      "melee",
      "demembrement",
      "phantom liberty",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-big-mag",
    "name": "Chargeur Étendu (Big Mag)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Budget Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Puits de chargement et ressorts à tension constante élargissant la capacité d'emport de cartouches de 50% pour les fusils d'assaut, pistolets-mitrailleurs et mitrailleuses.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/9e/ARSMGLMGMod1.png/revision/latest?cb=20230923071440",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 200,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 400,
      "quality": "Standard",
      "cybertension": 0,
      "weightKg": 0.3,
      "notes": "Augmente la capacité du chargeur de 50% (ex: 30 balles passe à 45 balles), réduisant la fréquence des rechargements en combat."
    },
    "tags": [
      "mod",
      "chargeur",
      "capacite",
      "munition",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-ready-steady",
    "name": "Stabilisateur de Tir Mobile (Ready Steady)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Système de masselottes internes compensant les mouvements de marche et de course pour maintenir le réticule stable pendant les déplacements tactiques.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/29/ARSMGLMGMod2.png/revision/latest?cb=20231005084944",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 250,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 500,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 0.2,
      "notes": "Tir en mouvement : Élimine la pénalité de Course (-2) lors d'un jet de Tir."
    },
    "tags": [
      "mod",
      "stabilite",
      "mouvement",
      "course",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-focus-fire",
    "name": "Tir Focalisé (Focus Fire)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Puce de contrôle de cadence resserrant la dispersion des tirs continus, concentrant l'impact des rafales successives sur le même point de pénétration.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d2/ARSMGLMGMod3.png/revision/latest?cb=20230923071428",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 350,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 750,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Concentration balistique : Chaque balle touchée consécutivement lors d'une même action ajoute +1 point de dégâts (jusqu'à +4)."
    },
    "tags": [
      "mod",
      "rafale",
      "concentration",
      "arasaka",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-pax",
    "name": "Convertisseur Pacificateur Non-Létal (Pax)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Trauma Team / Street Tech",
    "origin": "Cyberpunk Wiki",
    "description": "Modulateur de force cinétique et chemisage en polymère amortissant transformant n'importe quelle arme à feu ou arme blanche en moyen d'action non-létal neutralisant sans tuer.",
    "flavorQuote": "« Parce que parfois, le contrat stipule que la cible doit respirer encore quand vous la livrez. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/02/GenericMod1.png/revision/latest?cb=20230923083705",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 100,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 200,
      "quality": "Standard",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Rend toutes les attaques de l'arme Non-Létales sans infliger de pénalité de dégâts. Idéal pour les captures de primes vivantes."
    },
    "tags": [
      "mod",
      "non-letal",
      "pax",
      "capture",
      "primes",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-pinpoint",
    "name": "Pointeur Gyroscopique de Précision (Pinpoint)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kiroshi Optics",
    "origin": "Cyberpunk Wiki",
    "description": "Micro-laser et capteurs haptiques indiquant la trajectoire parfaite pour toucher les organes vitaux et points articulaires fragiles.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/f1/HGMod1.png/revision/latest?cb=20230923082807",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 300,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 650,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "+1 aux jets de Tir Ciblé visant la tête ou les membres. Réduit de 1 point le malus de Coup Précis."
    },
    "tags": [
      "mod",
      "precision",
      "kiroshi",
      "laser",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-zenith",
    "name": "Accélérateur de Percussion Zénith (Zenith)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Midnight Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Mécanisme de percuteur au silicium déclenchant les tirs avec une latence quasi-nulle dès que la détente commence sa course.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/86/HGMod2.png/revision/latest?cb=20230923071650",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 350,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 700,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Déclenchement instantané : Confère +2 à l'Initiative lorsque le personnage dégaine et tire au même tour."
    },
    "tags": [
      "mod",
      "initiation",
      "vitesse",
      "percussion",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-parallax",
    "name": "Correcteur de Parallaxe (Parallax)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Micro-processeur corrigeant l'alignement entre le plan focal de l'optique et la trajectoire balistique réelle du canon.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/c4/HGMod3.png/revision/latest?cb=20230923071622",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 200,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 450,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Élimine le malus de parallaxe : +1 au Tir à portée Moyenne."
    },
    "tags": [
      "mod",
      "parallaxe",
      "kang tao",
      "optique",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-airstrike",
    "name": "Frappe Aérienne (Airstrike)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Dynalar Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Capteurs barométriques amplifiant la force d'impact des tirs effectués lorsque le tireur est en l'air (sauts, double-sauts ou chutes).",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/3e/MeleeMod1.png/revision/latest?cb=20230923071545",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 300,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 650,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.15,
      "notes": "Dégâts accrus en vol : Confère +2 dégâts et PA +1 lors des tirs effectués en suspension, double saut ou depuis une position surélevée."
    },
    "tags": [
      "mod",
      "aerien",
      "saut",
      "dynalar",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-cyclone",
    "name": "Cycleur Rapide Cyclone",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Casse de culasse fluide et roulements à billes en céramique augmentant la cadence de tir mécanique de l'arme de 20%.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/e1/MeleeMod2.png/revision/latest?cb=20230923071605",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 250,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 500,
      "quality": "Standard",
      "cybertension": 0,
      "weightKg": 0.2,
      "notes": "Cadence accrue : Permet d'ajouter +1 dé lors des jets de tir en Rafale ou Tir Automatique."
    },
    "tags": [
      "mod",
      "cadence",
      "cyclone",
      "zetatech",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-silencio",
    "name": "Chambre d'Insonorisation Silencio",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Street Tech",
    "origin": "Cyberpunk Wiki",
    "description": "Gaine interne de canon garnie de micro-chambres acoustiques étouffant la détonation sans nécessiter de silencieux externe encombrant.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/17/MeleeMod3.png/revision/latest?cb=20230923071555",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 200,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 450,
      "quality": "Streetware",
      "cybertension": 0,
      "weightKg": 0.15,
      "notes": "Atténuation intégrée : Réduit le bruit de détonation de 50% sans allonger le canon de l'arme."
    },
    "tags": [
      "mod",
      "silence",
      "discretion",
      "insonorisation",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-pyro",
    "name": "Munitions Incendiaires Pyro",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Midnight Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Module de chauffe par induction et micro-capsules de phosphore blanc enflammant les cibles au contact des impacts balistiques.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/8b/PowerMod1.png/revision/latest?cb=20230923071707",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 400,
      "availability": "Coûteux",
      "damage": "+1d6 Feu",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 850,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.2,
      "notes": "Dégâts de feu : Inflige le statut Enflammé sur un résultat de 5 ou 6 sur le dé de dégâts. La cible subit 1d6 dégâts de brûlure à son tour."
    },
    "tags": [
      "mod",
      "incendiaire",
      "feu",
      "pyro",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-swiss-cheese",
    "name": "Noyau Perforant « Gruyère » (Swiss Cheese)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Ogives au carbure de tungstène usinées au laser et poudre à combustion ultra-dense transformant les blindages corporels en véritable passoire.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/2a/PowerMod2.png/revision/latest?cb=20231005085832",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 350,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 800,
      "quality": "Milware",
      "cybertension": 0,
      "ap": 2,
      "weightKg": 0.1,
      "notes": "Perforation de blindage : Ajoute PA 2 à toutes les attaques effectuées avec l'arme (se cumule avec le PA de base)."
    },
    "tags": [
      "mod",
      "perforant",
      "pa",
      "militech",
      "blindage",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-critochet",
    "name": "Module de Ricochet Critique (Critochet)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kiroshi Optics",
    "origin": "Cyberpunk Wiki",
    "description": "Capsule d'ogives à déformation contrôlée qui conserve son énergie cinétique lors des rebonds et explose violemment sur la cible indirecte.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/31/PowerMod3.png/revision/latest?cb=20230923082612",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 350,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 750,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Ricochet dévastateur : Les tirs avec ricochet réussis infligent +2 dégâts et bénéficient de l'Atout Coup Précis."
    },
    "tags": [
      "mod",
      "ricochet",
      "cinetique",
      "kiroshi",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-stabilizer",
    "name": "Stabilisateur Gyroscopique Interne",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Constitutional Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Micro-gyroscopes électriques intégrés dans la carcasse réduisant la déviation et le tremblement naturel du tireur.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/7/78/PRSRMod1.png/revision/latest?cb=20231005090013",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 200,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 450,
      "quality": "Standard",
      "cybertension": 0,
      "weightKg": 0.25,
      "notes": "Stabilité générale : +1 à tous les jets de Tir lorsque le tireur n'a pas bougé pendant son tour."
    },
    "tags": [
      "mod",
      "stabilisateur",
      "gyroscope",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-headtoll",
    "name": "Péage Crânien (Headtoll)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Calculateur balistique programmé pour maximiser la cavitation hydrostatique lors des impacts touchant la boîte crânienne.",
    "flavorQuote": "« Un tir à la tête doit être une sentence sans appel. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/ed/PRSRMod2.png/revision/latest?cb=20230923082703",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 600,
      "availability": "Très coûteux",
      "damage": "+4d6 sur Tir Tête",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 1300,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Tir à la tête dévastateur : Tout Tir Ciblé réussi à la tête inflige +4 dégâts supplémentaires en plus des modificateurs habituels."
    },
    "tags": [
      "mod",
      "headshot",
      "arasaka",
      "precision",
      "létal",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-fleetshot",
    "name": "Tir Agile (Fleetshot)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Dynalar Technologies",
    "origin": "Cyberpunk Wiki",
    "description": "Équilibrage dynamique et poignée ultra-légère permettant de sprinter et esquiver sans être ralenti par le poids de l'arme.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/f4/PRSRMod3.png/revision/latest?cb=20230923072110",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 200,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 450,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Mobilité accrue : Allure +2 lorsque l'arme est en main et prête à tirer."
    },
    "tags": [
      "mod",
      "vitesse",
      "dynalar",
      "mobilite",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-better-half",
    "name": "Meilleure Moitié (Better Half)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Midnight Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Système de surpression s'activant automatiquement dès que le chargeur est vidé de sa première moitié, surchauffant les cartouches restantes pour doubler leur pénétration.",
    "flavorQuote": "« Plus le combat dure, plus le canon devient furieux. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/bb/RangedMod3.png/revision/latest?cb=20230923071232",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 400,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 850,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.15,
      "notes": "Seconde moitié létale : Dès que le chargeur est à 50% ou moins de sa capacité, l'arme inflige +2 dégâts et PA +2."
    },
    "tags": [
      "mod",
      "chargeur",
      "finition",
      "degats",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-shuffler",
    "name": "Mélangeur Tactique Éjecteur (Shuffler)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Budget Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Éjecteur de chargeur pneumatique et guide biseauté permettant un rechargement d'urgence en un clin d'œil.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/13/RangedMod1.png/revision/latest?cb=20230923071208",
    "fallbackIcon": "Sliders",
    "red": {
      "priceEb": 150,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 350,
      "quality": "Standard",
      "cybertension": 0,
      "weightKg": 0.15,
      "notes": "Rechargement éclair : Recharger l'arme compte comme une Action Gratuite une fois par combat."
    },
    "tags": [
      "mod",
      "recharge",
      "vitesse",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-equalizer",
    "name": "Égaliseur de Menaces (Equalizer)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Système d'évaluation de menace biométrique sur-calibrant les impacts balistiques contre les ennemis cybernétisés lourdement armés et blindés.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/59/RangedMod2.png/revision/latest?cb=20230923071221",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 450,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 950,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.15,
      "notes": "Anti-élite : Confère +2 aux dégâts contre les boss, lieutenants corpo et adversaires ayant une Résistance de 10 ou plus."
    },
    "tags": [
      "mod",
      "elite",
      "boss",
      "arasaka",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-vivisector",
    "name": "Vivisecteur (Vivisector)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "BioDyne",
    "origin": "Cyberpunk Wiki",
    "description": "Micro-capteurs biométriques ciblant spécifiquement les chairs meurtries pour aggraver les plaies ouvertes.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/f1/ShotgunMod1.png/revision/latest?cb=20230923082641",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 350,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 750,
      "quality": "Bioware",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Achèvement : +1d6 dégâts contre les cibles ayant déjà subi au moins 1 Blessure."
    },
    "tags": [
      "mod",
      "blessure",
      "vivisecteur",
      "biodyne",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-kneel",
    "name": "À Genoux ! (Kneel!) [Mod Pompe]",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Constitutional Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Mod exclusif aux fusils à pompe concentrant la gerbe de chevrotines sur les articulations des genoux des adversaires pour les faucher instantanément.",
    "flavorQuote": "« Visez les jambes. Même les cyberpsys tombent quand ils n'ont plus d'appuis. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/24/ShotgunMod2.png/revision/latest?cb=20231005085958",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 600,
      "availability": "Très coûteux",
      "damage": "Fauchage critique",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 1400,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 0.25,
      "notes": "Fauchage de jambes : Tout tir de fusil à pompe réussi visant les jambes jette la cible à terre et l'immobilise (Secouée + À terre, -2 pour se relever)."
    },
    "tags": [
      "mod",
      "shotgun",
      "pompe",
      "fauchage",
      "jambes",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-condenser",
    "name": "Condensateur Électromagnétique (Condenser)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Condensateur d'énergie compact augmentant l'accélération magnétique des barres d'armature dans les canons à rail.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/06/ShotgunMod3.png/revision/latest?cb=20230923072045",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 250,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 550,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.2,
      "notes": "Accélération Tech : Augmente la vitesse de charge des armes Tech de 25% et confère PA +1."
    },
    "tags": [
      "mod",
      "tech",
      "condensateur",
      "kang tao",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-headhopper",
    "name": "Saut de Tête (Headhopper)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Module de calcul balistique enchaînant les tirs à la tête : chaque élimination critique d'un coup à la tête réaligne le viseur sur la tête de la cible suivante.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/9a/SmartMod1.png/revision/latest?cb=20231005085912",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 450,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 950,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.15,
      "notes": "Enchaînement critique : Tuer un adversaire d'un Tir à la tête confère immédiatement une attaque gratuite de Tir sur une cible adjacente."
    },
    "tags": [
      "mod",
      "enchainement",
      "headshot",
      "arasaka",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-gambiteer",
    "name": "Gambiteur Audacieux (Gambiteer)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Système de compensation inertielle récompensant les manœuvres risquées et glissades sous le feu ennemi.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/dc/SmartMod2.png/revision/latest?cb=20230923071739",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 300,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 650,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Audace tactique : Réussir une esquive ou glissade au sol confère +2 au jet de Tir et +2 aux dégâts lors de la prochaine attaque ce tour-ci."
    },
    "tags": [
      "mod",
      "esquive",
      "glissade",
      "gambiteer",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-disjunctor",
    "name": "Disjoncteur IEM (Disjunctor)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Modulateur haute tension convertissant le faisceau des armes Tech en onde de choc électrostatique neutralisant les drones et prothèses bioniques.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d2/ClampdownTechMod.png/revision/latest?cb=20261023194906",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 400,
      "availability": "Coûteux",
      "damage": "IEM / Choc",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 850,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 0.2,
      "notes": "Choc IEM Tech : Inflige 2d6 dégâts électriques additionnels aux cyborgs et drones, avec jet de Vigueur requis sous peine de court-circuit."
    },
    "tags": [
      "mod",
      "tech",
      "iem",
      "disjoncteur",
      "militech",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-supercharger",
    "name": "Surchargé (Supercharger)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Surchargeur de bobines inductives décuplant la vélocité terminale des munitions Tech lorsqu'elles sont tirées à pleine charge.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/c8/TechMod3.png/revision/latest?cb=20230923072251",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 450,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 950,
      "quality": "Corpware",
      "cybertension": 0,
      "damage": "+1d6 à pleine charge",
      "weightKg": 0.25,
      "notes": "Tir Tech surchargé : À pleine charge, ajoute +1d6 dégâts et PA +2 au projectile."
    },
    "tags": [
      "mod",
      "tech",
      "surcharge",
      "arasaka",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-panorama",
    "name": "Panorama Smart Élargi (Panorama)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Antenne réseau matricielle élargissant le cône de détection et de verrouillage des armes intelligentes pour engager des cibles sur les flancs.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/5f/SmartMod3.png/revision/latest?cb=20230923071919",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 350,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 750,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 0.15,
      "notes": "Verrouillage à 180° : Permet aux armes Smart d'engager des cibles sans avoir besoin de leur faire face directement, ignorant les angles morts."
    },
    "tags": [
      "mod",
      "smart",
      "kang tao",
      "panorama",
      "verrouillage",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-c-thru",
    "name": "Transperçant C-Thru (C-Thru)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Ogives stabilisées au bore enrichi conçues pour traverser plusieurs couches successives de cloisons sans dévier de leur axe balistique.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/1e/TechMod1.png/revision/latest?cb=20230923072137",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 400,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 850,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 0.2,
      "notes": "Perforation de murs : Ignore jusqu'à 4 points de malus d'Abri à travers les parois légères ou moyennes."
    },
    "tags": [
      "mod",
      "tech",
      "murs",
      "militech",
      "perforation",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-bleedout",
    "name": "Hémorragie Continue (Bleedout)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Street Tech",
    "origin": "Cyberpunk Wiki",
    "description": "Gouttière d'écoulement et tranchant cranté micro-denté infligeant des lacérations profondes qui provoquent une perte de sang continue.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/45/BladeMod2.png/revision/latest?cb=20230923071326",
    "fallbackIcon": "Sword",
    "red": {
      "priceEb": 200,
      "availability": "Standard",
      "damage": "Saignement continu",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 450,
      "quality": "Streetware",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Hémorragie sévère : Sur un coup réussi, la cible subit l'effet Saignement (jet de Vigueur chaque tour sous peine de subir 1 niveau de Fatigue)."
    },
    "tags": [
      "mod",
      "mêlée",
      "lames",
      "saignement",
      "hemorragie",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-slice-em-up",
    "name": "Tranchage Net (Slice 'Em Up)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Affûtage au laser moléculaire et traitement thermique au diamant décuplant le tranchant des katanas et lames d'avant-bras.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/bd/BladeMod3.png/revision/latest?cb=20230923071345",
    "fallbackIcon": "Sword",
    "red": {
      "priceEb": 350,
      "availability": "Coûteux",
      "damage": "+2d6 sur critique",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 750,
      "quality": "Corpware",
      "cybertension": 0,
      "ap": 2,
      "weightKg": 0.1,
      "notes": "Tranchant monomoléculaire : Ajoute PA 2 à l'arme et confère +2 aux dégâts tranchants sur une Relance au jet de Combat."
    },
    "tags": [
      "mod",
      "lames",
      "katana",
      "arasaka",
      "tranchant",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-haemocide",
    "name": "Hémocide Anticoagulant (Haemocide)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "BioDyne",
    "origin": "Cyberpunk Wiki",
    "description": "Réservoir microscopique dans le manche diffusant un anticoagulant synthétique foudroyant qui empêche les plaies de se refermer.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/3e/BladeMod1.png/revision/latest?cb=20230923071250",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 400,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 850,
      "quality": "Bioware",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Poison anticoagulant : Les blessures infligées ne peuvent pas être soignées par les nanites d'urgence ou stims médicaux pendant 3 rounds."
    },
    "tags": [
      "mod",
      "lames",
      "anticoagulant",
      "biodyne",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-ko",
    "name": "Commotion Brutale K.O. (K.O.)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Budget Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Insert en plomb haute densité logé dans la tête de frappe des battes, masses et marteaux pour asséner des coups commotionnants.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/60/BluntMod1.png/revision/latest?cb=20230923071507",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 150,
      "availability": "Standard",
      "damage": "Étourdissement",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 350,
      "quality": "Streetware",
      "cybertension": 0,
      "weightKg": 0.4,
      "notes": "Commotion cinétique : Toute frappe réussie force la cible à réussir un jet de Vigueur à -2 sous peine d'être immédiatement Secouée."
    },
    "tags": [
      "mod",
      "contondant",
      "etourdissement",
      "ko",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-bloodbruiser",
    "name": "Meurtrisseur de Crânes (Bloodbruiser)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Rostović",
    "origin": "Cyberpunk Wiki",
    "description": "Bague de frappe en carbure de tungstène conçue pour fracturer les os et causer des traumatismes internes massifs.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/43/BluntMod2.png/revision/latest?cb=20230923071457",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 300,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 650,
      "quality": "Standard",
      "cybertension": 0,
      "damage": "+2",
      "weightKg": 0.35,
      "notes": "Fracture osseuse : +2 aux dégâts de mêlée et réduit l'Armure de la cible de 1 point sur un coup violent."
    },
    "tags": [
      "mod",
      "contondant",
      "marteau",
      "degats",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-barbarian",
    "name": "Fureur Barbare (Barbarian)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Midnight Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Grip à pointes transmettant un micro-choc d'adrénaline au combattant quand la fatigue s'accumule, transformant l'épuisement en rage destructrice.",
    "flavorQuote": "« Plus vous perdez de sang, plus chaque frappe frappe fort. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/ff/BluntMod3.png/revision/latest?cb=20230923071517",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 400,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 800,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.2,
      "notes": "Rage du berserker : Si le personnage a au moins 1 Blessure, il gagne +2 aux dégâts de mêlée et ignore 1 point de malus de blessure."
    },
    "tags": [
      "mod",
      "mêlée",
      "barbare",
      "rage",
      "adrenalinique",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-spinetickler",
    "name": "Chatouilleur d'Épine Électrostatique (Spinetickler)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Électrodes de surface envoyant une décharge de 20 000 volts à travers la lame ou la matraque lors de l'impact physique.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/6a/TechMod2.png/revision/latest?cb=20230923072151",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 250,
      "availability": "Standard",
      "damage": "+1d6 Électrique",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 550,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 0.25,
      "notes": "Décharge électrique : Ajoute +1d6 dégâts électriques à chaque frappe de mêlée. Efficace contre les drones et cyborgs."
    },
    "tags": [
      "mod",
      "electrique",
      "mêlée",
      "militech",
      "choc",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-boomerang",
    "name": "Rappel Magnétique Boomerang",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kiroshi Optics",
    "origin": "Cyberpunk Wiki",
    "description": "Micro-émetteur magnétique et gyroscope de retour rappelant instantanément le couteau ou la hache de lancer dans la main du lanceur.",
    "flavorQuote": "« Ne courez plus après vos lames. Laissez-les revenir d'elles-mêmes. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/24/ThrowMod1.png/revision/latest?cb=20231005085355",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 500,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 1000,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Rappel automatique : L'arme de jet revient instantanément dans la main du tireur après son lancer en Action Gratuite."
    },
    "tags": [
      "mod",
      "lancer",
      "couteau",
      "boomerang",
      "rappel",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-zero-g",
    "name": "Balistique Zéro-G (Zero-G)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Ailerons aérodynamiques microscopiques annulant la retombée gravitationnelle pour une trajectoire de lancer parfaitement tendue.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/7/7a/ThrowMod2.png/revision/latest?cb=20231005085516",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 200,
      "availability": "Standard",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 450,
      "quality": "Standard",
      "cybertension": 0,
      "weightKg": 0.05,
      "notes": "Trajectoire tendue : Double la portée de lancer de l'arme (portée 6/12/24 cases) sans malus gravitationnel."
    },
    "tags": [
      "mod",
      "lancer",
      "portee",
      "zero-g",
      "zetatech",
      "weapon_mods"
    ]
  },
  {
    "id": "mod-javelin",
    "name": "Pointe Perforante Javelot (Javelin)",
    "category": "weapon_mods",
    "categoryLabel": "Accessoires & Mods d'armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Pointe en alliage d'uranium appauvri perforant les casques pare-balles et gilets tactiques lors des attaques de lancer silencieuses.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/14/ThrowMod3.png/revision/latest?cb=20231005085442",
    "fallbackIcon": "Sword",
    "red": {
      "priceEb": 350,
      "availability": "Coûteux",
      "humanityLoss": "0",
      "concealable": true
    },
    "iz": {
      "priceCredits": 750,
      "quality": "Corpware",
      "cybertension": 0,
      "ap": 4,
      "weightKg": 0.1,
      "notes": "Perforation de lancer : Confère PA 4 à toutes les attaques de lancer avec ce couteau ou projectile."
    },
    "tags": [
      "mod",
      "lancer",
      "couteau",
      "perforant",
      "arasaka",
      "weapon_mods"
    ]
  },
  {
    "id": "malorian-3516",
    "name": "Malorian Arms 3516",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Malorian Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Arme de poing iconique conçue sur mesure pour Johnny Silverhand par Eran Malour en 2020. Dotée d’une culasse titane surdimensionnée capable de loger des cartouches d’infanterie lourde semi-blindées.",
    "flavorQuote": "« Si ce truc ne te déboîte pas l’épaule au tir, c’est que t’es un borg. » — Johnny Silverhand",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/5d/Johnny_Silverhand%27s_Malorian_Database_CP2077.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 10000,
      "availability": "Exotique",
      "damage": "4d6+2",
      "rof": 1,
      "ammo": "14mm custom",
      "magazine": 8,
      "concealable": false
    },
    "iz": {
      "priceCredits": 12000,
      "quality": "Milware",
      "cybertension": 2,
      "damage": "2d10",
      "range": "15/30/60",
      "ap": 4,
      "weightKg": 3.2,
      "notes": "PA 4, Semi-auto. Nécessite cyber-bras ou Force d8+ pour tirer sans malus."
    },
    "tags": [
      "iconique",
      "silverhand",
      "14mm",
      "semi-auto",
      "lourd"
    ]
  },
  {
    "id": "aga-thunderbolt",
    "name": "AGA Thunderbolt 12.7mm",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Act of God Armaments",
    "origin": "Interface Zéro 2.0",
    "description": "Arme favorite de Hunter Clark, célèbre chasseur de primes d’Atlantica. Son imposant profil et le rugissement de ses tirs de 12.7 mm inspirent une terreur immédiate dans les ruelles sombres.",
    "flavorQuote": "« La meilleure défense, c’est une offensive écrasante. Quand ils voient ce Thunderbolt à ta hanche, ils réfléchissent à deux fois. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/b1/Mustang_Arms_ARS-5C.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 500,
      "availability": "Coûteux",
      "damage": "4d6",
      "rof": 1,
      "ammo": "Très lourd (.50)",
      "magazine": 11,
      "concealable": false
    },
    "iz": {
      "priceCredits": 150,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d8+1",
      "range": "12/24/48",
      "ap": 4,
      "weightKg": 2,
      "notes": "PA 4, Semi-auto. Bonus de +1 aux jets d’Intimidation quand il est brandi."
    },
    "tags": [
      "revolver",
      "intimidant",
      "lourd",
      "chasseur-de-primes"
    ]
  },
  {
    "id": "unity-ca",
    "name": "Constitutional Arms Unity",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Constitutional Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Le pistolet standard par excellence des forces de police et des citoyens armés de Night City. Équilibre parfait entre fiabilité mécanique, cadence de tir et encombrement minimal.",
    "flavorQuote": "« Simple, sans fioritures. Il ne s’enraye jamais même après avoir baigné dans la boue toxique. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/ec/Unity_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 100,
      "availability": "Partout",
      "damage": "3d6",
      "rof": 2,
      "ammo": "Moyen calibre (9mm)",
      "magazine": 12,
      "concealable": true
    },
    "iz": {
      "priceCredits": 100,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d6",
      "range": "12/24/48",
      "ap": 1,
      "weightKg": 1,
      "notes": "PA 1, Semi-automatique, très facile à dissimuler."
    },
    "tags": [
      "standard",
      "fiable",
      "police",
      "dissimulable"
    ]
  },
  {
    "id": "asfa-watchdog",
    "name": "ASFA Watchdog 10mm",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Amy’s Surplus / Foley Arms",
    "origin": "Interface Zéro 2.0",
    "description": "Pistolet semi-automatique robuste privilégié par les agents de sécurité d’Atlantica. Utilise un système de réduction de recul propriétaire qui accélère la cartouche de 10mm.",
    "flavorQuote": "« L’héritage de Foley Arms survit dans le Watchdog : brutal, économique et toujours prêt à faire parler la poudre. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/50/Nue_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 100,
      "availability": "Partout",
      "damage": "3d6+1",
      "rof": 2,
      "ammo": "Lourd (10mm)",
      "magazine": 12,
      "concealable": true
    },
    "iz": {
      "priceCredits": 100,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d8",
      "range": "12/24/48",
      "ap": 2,
      "weightKg": 1.5,
      "notes": "PA 2, Semi-automatique. Force min. d6."
    },
    "tags": [
      "police",
      "10mm",
      "sécurité",
      "atlantica"
    ]
  },
  {
    "id": "aga-rat-75",
    "name": "AGA Cyberchromium Rat .75",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Act of God Armaments",
    "origin": "Interface Zéro 2.0",
    "description": "L’arme de poing au calibre le plus monstrueux du marché (.75). Usinée en titane pur avec finitions miroir en chrome poli, généralement maniée par des cyber-junkies complètement chromés.",
    "flavorQuote": "« Si tu touches la cible, tu n’as pas besoin de deuxième coup. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/8d/Overture_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1000,
      "availability": "Cher",
      "damage": "5d6",
      "rof": 1,
      "ammo": ".75 Calibre Anti-blindage",
      "magazine": 5,
      "concealable": false
    },
    "iz": {
      "priceCredits": 500,
      "quality": "Hyperchrome",
      "cybertension": 1,
      "damage": "2d10",
      "range": "12/24/48",
      "ap": 4,
      "weightKg": 2,
      "notes": "PA 4, Semi-automatique. Force min. d12 exigée sous peine d’arrachement articulaire."
    },
    "tags": [
      "chrome",
      "calibre-extreme",
      "titane",
      "destructeur"
    ]
  },
  {
    "id": "up-columbus",
    "name": "Urban Punk Columbus Double-Canon",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Urban Punk",
    "origin": "Interface Zéro 2.0",
    "description": "Près de 2 kg d’acier noir massif à double canon superposé. Le canon supérieur tire une fraction de milliseconde avant le canon inférieur pour compenser dynamiquement le recul.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/cf/Palica_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 500,
      "availability": "Coûteux",
      "damage": "3d6+2",
      "rof": 2,
      "ammo": "Moyen calibre",
      "magazine": 12,
      "concealable": false
    },
    "iz": {
      "priceCredits": 350,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d6+1",
      "range": "10/20/40",
      "ap": 1,
      "weightKg": 2,
      "notes": "Semi-automatique, tir double simultané. Look gang emblématique."
    },
    "tags": [
      "double-canon",
      "urban-punk",
      "acier-noir"
    ]
  },
  {
    "id": "arasaka-masamune",
    "name": "Arasaka HJSH-18 Masamune",
    "category": "longarms",
    "categoryLabel": "Fusils & Mitraillettes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil d’assaut d’élite japonais en rafale de trois coups. Équipé d’un récepteur céramique ultraléger et de rails pour optique intelligente Smartlink.",
    "flavorQuote": "« La précision d’un samouraï dans chaque rafale calibrée au millimètre. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/f0/Masamune_Default.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 1000,
      "availability": "Cher",
      "damage": "5d6",
      "rof": 1,
      "ammo": "Fusil (5.56mm)",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 3200,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "damage": "2d8+1",
      "range": "24/48/96",
      "ap": 3,
      "weightKg": 2.5,
      "notes": "PA 3, Tir en rafale, Tir automatique. Compatible Smartgun."
    },
    "tags": [
      "arasaka",
      "rafale",
      "precision",
      "smartlink"
    ]
  },
  {
    "id": "aga-12-maw",
    "name": "Fusil d’Assaut Modulaire AGA-12 MAW",
    "category": "longarms",
    "categoryLabel": "Fusils & Mitraillettes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Act of God Armaments",
    "origin": "Interface Zéro 2.0",
    "description": "Élu « Arme de l’Année 2090 » par le magazine GUNN. Modulaire à l’extrême, il permet de changer le canon et la chambre en quelques secondes entre configuration assaut et appui lourd.",
    "flavorQuote": "« Le futur de l’infanterie moderne est déjà entre vos mains. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/3c/Fabrlca_De_Armes_M-2012_2020.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 2000,
      "availability": "Très Cher",
      "damage": "5d6",
      "rof": 1,
      "ammo": "Fusil sans douille",
      "magazine": 36,
      "concealable": false
    },
    "iz": {
      "priceCredits": 16500,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "damage": "2d8+1",
      "range": "24/48/96",
      "ap": 3,
      "weightKg": 2,
      "notes": "CdT 4, PA 3, Tir auto, Tir en rafale. Existe en config appui lourd avec chargeur 120."
    },
    "tags": [
      "modulaire",
      "arme-de-l-annee",
      "haute-cadence"
    ]
  },
  {
    "id": "foley-taw-2022",
    "name": "Foley Arms TAW 2022",
    "category": "longarms",
    "categoryLabel": "Fusils & Mitraillettes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Foley Arms / Amy Surplus",
    "origin": "Interface Zéro 2.0",
    "description": "Arme d’assaut tactique combinant un fusil bullpup, une arme d’assaut rapproché (pompe) et un lance-grenades 25mm monté sous le canon. L’arme fétiche des forces spéciales combinées.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/26/Copperhead_Military.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 1500,
      "availability": "Cher",
      "damage": "5d6 / Grenade 6d6",
      "rof": 1,
      "ammo": "Multi-calibres",
      "magazine": 45,
      "concealable": false
    },
    "iz": {
      "priceCredits": 5000,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d8+1 (LG 3d6)",
      "range": "25/50/100",
      "ap": 3,
      "weightKg": 2.5,
      "notes": "PA 3, Tir automatique, Tir en rafale + Fusil à pompe intégré + Lance-grenades 25mm."
    },
    "tags": [
      "tactique",
      "lance-grenades",
      "bullpup",
      "polyvalent"
    ]
  },
  {
    "id": "militech-crusher",
    "name": "Militech Crusher 20-Gauge",
    "category": "longarms",
    "categoryLabel": "Fusils & Mitraillettes",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil de combat compact à pompe conçu pour le nettoyage des pièces et les interventions urbaines rapprochées. Prisé par les équipes tactiques d’assaut corporatistes.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/a8/Militech_Crusher_Database_CP2077.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 500,
      "availability": "Coûteux",
      "damage": "5d6",
      "rof": 1,
      "ammo": "Chevrotine 20G",
      "magazine": 8,
      "concealable": false
    },
    "iz": {
      "priceCredits": 400,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "1-3d6",
      "range": "12/24/48",
      "ap": 0,
      "weightKg": 2.2,
      "notes": "Fusil à pompe semi-auto, dispersion létale en milieu clos."
    },
    "tags": [
      "pompe",
      "militech",
      "combat-urbain"
    ]
  },
  {
    "id": "bki-tiger-claw",
    "name": "BKI Tiger Claw Close Assault Shotgun",
    "category": "longarms",
    "categoryLabel": "Fusils & Mitraillettes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Black Knight Industries",
    "origin": "Interface Zéro 2.0",
    "description": "L’ultime arme d’arrêt. Canon scié avec projectiles polymères bio-fragmentables causant un traumatisme tissulaire maximal. Utilisable au corps-à-corps.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/4e/Crusher_Military.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 500,
      "availability": "Coûteux",
      "damage": "4d6",
      "rof": 2,
      "ammo": "Calibre 12 spécial",
      "magazine": 12,
      "concealable": true
    },
    "iz": {
      "priceCredits": 900,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "1-3d4 (PA 2)",
      "range": "15/30/60",
      "ap": 2,
      "weightKg": 2.5,
      "notes": "CdT 2, PA 2. Peut être dégainé et employé en combat de mêlée."
    },
    "tags": [
      "canon-scie",
      "assaut",
      "anti-personnel"
    ]
  },
  {
    "id": "kang-tao-dian",
    "name": "Kang Tao G-58 Dian Smart SMG",
    "category": "longarms",
    "categoryLabel": "Fusils & Mitraillettes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Mitraillette intelligente ultra-rapide équipée d’un micro-processeur de ciblage asservi et de micromunitions à guidage gyroscopique traquant la cible derrière les abris.",
    "flavorQuote": "« Vous n’avez pas besoin de viser juste quand chaque balle sait où aller. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/a4/Dian_Military.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 1000,
      "availability": "Cher",
      "damage": "3d6",
      "rof": 1,
      "ammo": "Smart 9mm",
      "magazine": 30,
      "concealable": true
    },
    "iz": {
      "priceCredits": 2500,
      "quality": "Hyperchrome",
      "cybertension": 1,
      "damage": "2d6+1",
      "range": "15/30/60",
      "ap": 2,
      "weightKg": 1.8,
      "notes": "Arme intelligente (Smartgun auto), ignore 2 points d’abri léger."
    },
    "tags": [
      "smartgun",
      "kang-tao",
      "guidage",
      "smg"
    ]
  },
  {
    "id": "mosquito-storm-2090",
    "name": "PM Mosquito Storm MS-2090",
    "category": "longarms",
    "categoryLabel": "Fusils & Mitraillettes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Wasteland Traders",
    "origin": "Interface Zéro 2.0",
    "description": "Mini-mitraillette compacte à trois canons fixes usinée pour cracher des grappes de munitions sans douille 4.5mm à très haute cadence.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/38/Pulsar_Default.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 500,
      "availability": "Coûteux",
      "damage": "2d6+2",
      "rof": 2,
      "ammo": "4.5mm caseless",
      "magazine": 36,
      "concealable": true
    },
    "iz": {
      "priceCredits": 300,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d6-2",
      "range": "15/30/60",
      "ap": 2,
      "weightKg": 1.5,
      "notes": "CdT 3, PA 2, Tir automatique. Augmente la Street Cred dans les clubs."
    },
    "tags": [
      "caseless",
      "rafale-rapide",
      "compact"
    ]
  },
  {
    "id": "aga-mjolnir-fam",
    "name": "Fusil Antimatériel AGA Mjolnir 30mm",
    "category": "heavy",
    "categoryLabel": "Armes Lourdes & Exotiques",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Act of God Armaments",
    "origin": "Interface Zéro 2.0",
    "description": "Monstre d’artillerie portable de plus de deux mètres de long, monté sur trépied gyrostabilisé avec ordinateur balistique intégré. Conçu pour abattre mécagolems et blindés légers.",
    "flavorQuote": "« Quand Mjolnir frappe, même les dieux de l’acier tombent à genoux. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/7/7d/Grad_Military.png/revision/latest",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 15000,
      "availability": "Exotique",
      "damage": "8d6",
      "rof": 1,
      "ammo": "Obus 30mm APDS",
      "magazine": 10,
      "concealable": false
    },
    "iz": {
      "priceCredits": 450000,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "3d8",
      "range": "50/100/200",
      "ap": 6,
      "weightKg": 43,
      "notes": "PA 6, Arme Lourde (AL), CdT 3. Mouvement impossible pendant le tir sans exo-armure."
    },
    "tags": [
      "antimateriel",
      "30mm",
      "anti-meca",
      "artillerie"
    ]
  },
  {
    "id": "tsunami-nekomata",
    "name": "Tsunami Arms Nekomata Tech Sniper",
    "category": "heavy",
    "categoryLabel": "Armes Lourdes & Exotiques",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Tsunami Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil de précision Tech à induction électromagnétique. Charge ses rails magnétiques pour propulser un projectile de tungstène capable de traverser le béton armé et les blindages lourds.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/25/Nekomata_Military.png/revision/latest",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 5000,
      "availability": "Très Cher",
      "damage": "6d6",
      "rof": 1,
      "ammo": "Flechettes Tech",
      "magazine": 4,
      "concealable": false
    },
    "iz": {
      "priceCredits": 15000,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "3d6",
      "range": "40/80/160",
      "ap": 6,
      "weightKg": 7,
      "notes": "PA 6, Ignore les abris denses, lunette x160 multi-optique incluse."
    },
    "tags": [
      "tech-sniper",
      "perce-blindage",
      "tsunami-arms"
    ]
  },
  {
    "id": "aga-x4-particles",
    "name": "Fusil à Particules AGA X-4",
    "category": "heavy",
    "categoryLabel": "Armes Lourdes & Exotiques",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Act of God Armaments",
    "origin": "Interface Zéro 2.0",
    "description": "Arme à énergie dirigée qui projette des flux d’électrons à une vitesse relativiste avec près d’un gigajoule d’énergie cinétique. Dégage une odeur caractéristique d’ozone pur.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/b8/Igla_Military.png/revision/latest",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 7500,
      "availability": "Super Luxe",
      "damage": "6d6 (Énergie)",
      "rof": 1,
      "ammo": "Cellule hydrogène",
      "magazine": 12,
      "concealable": false
    },
    "iz": {
      "priceCredits": 2000,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "damage": "3d8",
      "range": "24/48/96",
      "ap": 2,
      "weightKg": 6,
      "notes": "PA 2, Arme Lourde (AL). Ignore toutes les armures non classées Lourdes."
    },
    "tags": [
      "energie-dirigee",
      "ozone",
      "particules",
      "anti-blindage"
    ]
  },
  {
    "id": "bki-liberator-minigun",
    "name": "Minigun Black Knight Liberator",
    "category": "heavy",
    "categoryLabel": "Armes Lourdes & Exotiques",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Black Knight Industries",
    "origin": "Interface Zéro 2.0",
    "description": "Système Gatling rotatif à 6 canons à commande électrique tirant des volées dévastatrices de balles perforantes. Doit être monté sur trépied, cardan ou véhicule blindé.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/f9/Defender_Default.png/revision/latest",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 5000,
      "availability": "Très Cher",
      "damage": "5d6",
      "rof": 1,
      "ammo": "Bandes 1000 cartouches",
      "magazine": 1000,
      "concealable": false
    },
    "iz": {
      "priceCredits": 12000,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d8",
      "range": "24/48/96",
      "ap": 3,
      "weightKg": 43,
      "notes": "CdT 6, PA 3, Tir automatique, Arme Lourde (AL). Nécessite monture ou Force d10."
    },
    "tags": [
      "gatling",
      "carnage",
      "vehicule",
      "cadence-extreme"
    ]
  },
  {
    "id": "k-tana-miyamoto",
    "name": "K-Tana Miyamoto Titane-Tungstène",
    "category": "melee",
    "categoryLabel": "Mêlée & Cyber-armes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Shogun Outfitters",
    "origin": "Interface Zéro 2.0",
    "description": "Véritable chef-d’œuvre des forgerons du Techno-Shogunat. Acier feuilleté en titane-tungstène doublé d’un fil de monofilament ultra-vibrant le long du fil.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/7/76/Katana_Default.png/revision/latest",
    "fallbackIcon": "Sword",
    "red": {
      "priceEb": 1000,
      "availability": "Cher",
      "damage": "4d6",
      "rof": 2,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1000,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "damage": "For+d8+2",
      "range": "Mêlée",
      "ap": 4,
      "weightKg": 3,
      "notes": "PA 4, Arme Lourde (AL). Sceau d’artisan en hypertag authentifié."
    },
    "tags": [
      "katana",
      "artisanat-japonais",
      "samourai",
      "vibration"
    ]
  },
  {
    "id": "wt-eviscerator",
    "name": "Épée-Tronçonneuse WT Eviscerator",
    "category": "melee",
    "categoryLabel": "Mêlée & Cyber-armes",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Wasteland Traders",
    "origin": "Interface Zéro 2.0",
    "description": "Arme de guerre urbaine à chaîne dentée en céramique diamantée propulsée par micromoteur électrique. 48h d’autonomie sur batterie rechargeable.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/db/Machete_Default.png/revision/latest",
    "fallbackIcon": "Sword",
    "red": {
      "priceEb": 500,
      "availability": "Coûteux",
      "damage": "4d6",
      "rof": 1,
      "concealable": false
    },
    "iz": {
      "priceCredits": 250,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "For+d10",
      "range": "Mêlée",
      "ap": 2,
      "weightKg": 5,
      "notes": "PA 2, requiert batterie. Intimidation automatique sur les voyous."
    },
    "tags": [
      "tronconneuse",
      "broyage",
      "wasteland"
    ]
  },
  {
    "id": "pack-soldat-choc",
    "name": "Pack Augmentation « Soldat de Choc »",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Kenta Cyber Dynamics",
    "origin": "Interface Zéro 2.0",
    "description": "Suite complète militaire d’augmentations de combat : renforcement musculaire lourd, cyber-jambes à stabilisation et sauts, renfort osseux céramique, suppresseur traumatique et nanites Lifesaver.",
    "flavorQuote": "« Soyez le seigneur du champ de bataille, regardez vos ennemis trembler de peur quand vous ignorez leurs tirs ! »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/07/DenseMarrow.png/revision/latest",
    "fallbackIcon": "Cpu",
    "red": {
      "priceEb": 7500,
      "availability": "Super Luxe",
      "humanityLoss": "6d6 (21)",
      "concealable": false
    },
    "iz": {
      "priceCredits": 50000,
      "quality": "Streetware",
      "cybertension": 10,
      "weightKg": 18,
      "notes": "Force +1 dé, Résistance +1, ignore 1 malus de blessure, stabilisation tir, +2 guérison."
    },
    "tags": [
      "pack-militaire",
      "borg",
      "renfort-osseux",
      "lifesaver"
    ]
  },
  {
    "id": "main-drone-icv",
    "name": "Cyber-Main Drone Détachable",
    "category": "cyberware",
    "categoryLabel": "Cybermatériel",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Helios Corp",
    "origin": "Interface Zéro 2.0",
    "description": "Main cybernétique modulaire capable de se détacher à volonté pour devenir un micro-drone araignée autonome piloté par la pensée via le TAP. Idéal pour espionnage et infiltrations de conduits.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/f6/Drones_Database_CP2077.png/revision/latest",
    "fallbackIcon": "Cpu",
    "red": {
      "priceEb": 1500,
      "availability": "Cher",
      "humanityLoss": "2d6",
      "concealable": true
    },
    "iz": {
      "priceCredits": 2500,
      "quality": "Hyperchrome",
      "cybertension": 2,
      "weightKg": 1.2,
      "notes": "Requiert ICV 1. Drone araignée (Allure 4, Escalade d8, Discrétion d8, Caméra HD)."
    },
    "tags": [
      "espionnage",
      "drone",
      "detachable",
      "icv"
    ]
  },
  {
    "id": "rs-bulwark-riot",
    "name": "Armure Anti-Émeute Ravenlocke Bulwark",
    "category": "armor",
    "categoryLabel": "Armures & Protections",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Ravenlocke Securities",
    "origin": "Interface Zéro 2.0",
    "description": "Armure asservie de choc faisant le pont entre armure personnelle et exosquelette motorisé. Livrée avec bouclier balistique à polycarbonates renforcés et caméra d’épaule sécurisée.",
    "flavorQuote": "« Quand l’émeute éclate dans la Sprawl, mettez le paquet. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/a8/Q115_Custom_Predator_ArmorF.png/revision/latest",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 1200,
      "availability": "Cher",
      "sp": 15,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1200,
      "quality": "Streetware",
      "cybertension": 0,
      "armorBonus": 6,
      "weightKg": 10,
      "notes": "Armure +6 tout le corps. Bouclier inclus (+1 Parade, +2 Armure contre tirs distants)."
    },
    "tags": [
      "anti-emeute",
      "bouclier",
      "ravenlocke",
      "lourd"
    ]
  },
  {
    "id": "bki-ghost-suit-complete",
    "name": "Combinaison Furtive BKI Ghost",
    "category": "armor",
    "categoryLabel": "Armures & Protections",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Black Knight Industries",
    "origin": "Interface Zéro 2.0",
    "description": "Tenue de camouflage active dotée de nanites électroluminescentes GhostCoat™ mimant l’environnement à 360°, d’amortisseurs de signature thermique et d’un suppresseur acoustique.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/90/Q304_netrunner_outfitF.png/revision/latest",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 1000,
      "availability": "Cher",
      "sp": 11,
      "concealable": true
    },
    "iz": {
      "priceCredits": 950,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "armorBonus": 2,
      "weightKg": 7.5,
      "notes": "GhostCoat : -4 au jet de Perception adverse pour détecter visuellement le porteur."
    },
    "tags": [
      "ghostcoat",
      "camouflage-actif",
      "furtif",
      "black-knight"
    ]
  },
  {
    "id": "ed-business-suit",
    "name": "Costume Blindé Executive Decision Business",
    "category": "armor",
    "categoryLabel": "Armures & Protections",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Executive Decision",
    "origin": "Interface Zéro 2.0",
    "description": "Costume trois-pièces taillé sur mesure en nanotissu antibalistique. Permet de négocier une OPA hostile en salle de conseil tout en arrêtant net les balles de petit calibre.",
    "flavorQuote": "« De la cabine d’essayage à la salle de réunion, votre image de marque reste intacte. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/0d/Exec_Role_Infobox_CPRED.png/revision/latest",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 500,
      "availability": "Coûteux",
      "sp": 11,
      "concealable": true
    },
    "iz": {
      "priceCredits": 500,
      "quality": "Streetware",
      "cybertension": 0,
      "armorBonus": 2,
      "weightKg": 2,
      "notes": "+2 Armure (torse, bras, jambes). Holster secret (-2 détection perception arme)."
    },
    "tags": [
      "corpo",
      "chic",
      "holster-dissimule",
      "nanotissu"
    ]
  },
  {
    "id": "bki-achilles-exo",
    "name": "Exoarmure Lourde BKI Achilles",
    "category": "armor",
    "categoryLabel": "Armures & Protections",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Black Knight Industries",
    "origin": "Interface Zéro 2.0",
    "description": "Exosquelette de combat amplificateur avec vérins pneumatiques et blindage lourd en Mythralliage breveté. Décuple la vitesse et la force d’assaut du combattant.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/7/77/Militech_Centaur_Front.jpg/revision/latest",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 8000,
      "availability": "Super Luxe",
      "sp": 18,
      "concealable": false
    },
    "iz": {
      "priceCredits": 12000,
      "quality": "Milware",
      "cybertension": 0,
      "armorBonus": 4,
      "weightKg": 18,
      "notes": "+4 Armure lourde, +2 Allure, +1 type de dé en Force et Agilité. Autonomie 24h."
    },
    "tags": [
      "exosquelette",
      "mythralliage",
      "super-force",
      "militaire"
    ]
  },
  {
    "id": "aquarius-raptor-drone",
    "name": "Drone Chasseur-Tueur Aquarius Raptor",
    "category": "drones_vehicles",
    "categoryLabel": "Drones & Véhicules",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Aquarius Corp / CNA",
    "origin": "Interface Zéro 2.0",
    "description": "Drone aérien d’assaut lourd propulsé par deux microturbines hurlantes. Équipé d’une mitrailleuse lourde ventrale et de nacelles lance-roquettes.",
    "flavorQuote": "« Son sifflement caractéristique sème la panique dans les rangs ennemis avant même le premier tir. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/3b/Militech_Wyvern_Database_CP2077.png/revision/latest",
    "fallbackIcon": "Truck",
    "red": {
      "priceEb": 4000,
      "availability": "Très Cher",
      "damage": "5d6 / Roquettes 6d6",
      "sp": 13,
      "concealable": false
    },
    "iz": {
      "priceCredits": 8200,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 75,
      "notes": "Slots contrôle 1, Armure +2, Mitrailleuse lourde (2d10 PA 4) + Roquettes (2d8+2). Vol 18 cases."
    },
    "tags": [
      "drone-aerien",
      "chasseur-tueur",
      "roquettes",
      "mitrailleuse"
    ]
  },
  {
    "id": "helios-eye-borg",
    "name": "Micro-Drone Espion Helios Eye Borg",
    "category": "drones_vehicles",
    "categoryLabel": "Drones & Véhicules",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Helios Corp",
    "origin": "Interface Zéro 2.0",
    "description": "Drone sphérique de la taille d’une bille en nanopolymère. Roule et grimpe sur les murs à haute vitesse en retransmettant le flux vidéo direct vers le TAP du propriétaire.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/93/Bell_Spy-Eye_18.png/revision/latest",
    "fallbackIcon": "Truck",
    "red": {
      "priceEb": 250,
      "availability": "Bon Marché",
      "concealable": true
    },
    "iz": {
      "priceCredits": 250,
      "quality": "Streetware",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Taille -2. Marche sur les murs, optiques thermiques et vision nocturne, -2 pour être touché."
    },
    "tags": [
      "espion",
      "micro-drone",
      "discret",
      "exploration"
    ]
  },
  {
    "id": "toyota-locust-jump",
    "name": "Moto JUMP Toyota Locust Quad Turbo",
    "category": "drones_vehicles",
    "categoryLabel": "Drones & Véhicules",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Toyota Corp",
    "origin": "Interface Zéro 2.0",
    "description": "Élue « Moto la plus sexy » pendant quatre années consécutives. Propulseurs de saut pneumatique ACR Titan permettant des bonds verticaux jusqu’à 16 mètres au-dessus du trafic et des barricades.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/96/Brennan_Apollo_%28sportbike%29_CP2077.jpg/revision/latest",
    "fallbackIcon": "Truck",
    "red": {
      "priceEb": 25000,
      "availability": "Super Luxe",
      "sp": 10,
      "concealable": false
    },
    "iz": {
      "priceCredits": 4800,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 210,
      "notes": "Acc/VM 50/90, Résistance 5(1). Saut vertical jusqu’à 8 cases (16m), ignore terrain difficile."
    },
    "tags": [
      "moto-jump",
      "propulseurs",
      "course-urbaine",
      "turbo"
    ]
  },
  {
    "id": "quadra-turbo-r",
    "name": "Quadra Turbo-R V-Tech 2077",
    "category": "drones_vehicles",
    "categoryLabel": "Drones & Véhicules",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Quadra",
    "origin": "Cyberpunk Wiki",
    "description": "Muscle car légendaire survitaminée par un moteur turbo V-Tech à injection synthétique et échappement sport. Blindage composite discret et intérieur cuir ergonomique.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/84/Quadra_Turbo-R_V-Tech_Database_CP2077.png/revision/latest",
    "fallbackIcon": "Truck",
    "red": {
      "priceEb": 50000,
      "availability": "Super Luxe",
      "sp": 20,
      "concealable": false
    },
    "iz": {
      "priceCredits": 45000,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 1400,
      "notes": "Acc/VM 45/95, Résistance 12(6), Airbags, cockpit insonorisé et filtre pare-balles."
    },
    "tags": [
      "muscle-car",
      "v-tech",
      "vitesse-pure",
      "night-city"
    ]
  },
  {
    "id": "meca-aga-grizzly",
    "name": "Mécagolem Géant AGA Grizzly",
    "category": "drones_vehicles",
    "categoryLabel": "Drones & Véhicules",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Act of God Armaments",
    "origin": "Interface Zéro 2.0",
    "description": "Colosse d’assaut de 9 mètres de haut blindé à l’épreuve des obus de 120mm. Embarque un canon laser Extractor 50MW, des canons Thunderbolt 50mm jumelés et une tronçonneuse industrielle Eviscerator.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/2e/Csaba-szilagyi-csaba-szilagyi-militech-hmg-8.jpg/revision/latest",
    "fallbackIcon": "Truck",
    "red": {
      "priceEb": 500000,
      "availability": "Exotique",
      "damage": "Canon 8d6 / Laser 10d6",
      "sp": 26,
      "concealable": false
    },
    "iz": {
      "priceCredits": 9650000,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 8500,
      "notes": "Châssis Moyen (9m), Résistance 26(13), Laser 50MW (3d10 PA 20 AL) + Canons 50mm + Tronçonneuse (For+2d10 PA 7)."
    },
    "tags": [
      "meca-geant",
      "guerre-lourde",
      "laser-50mw",
      "super-armure"
    ]
  },
  {
    "id": "tapp-ether-iff",
    "name": "T-APP Ether Combat IFF",
    "category": "gear_tap",
    "categoryLabel": "Netrunning & T-APP",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "NetWatch / Malmart T-APP Store",
    "origin": "Interface Zéro 2.0",
    "description": "Application TAP de repérage tactique et d’identification ami-ennemi. Projette des balises holographiques sur le champ de vision partagé de l’escouade pour éviter les tirs fratricides.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/aa/Icon_Quickhack_TakeControl.png/revision/latest",
    "fallbackIcon": "Terminal",
    "red": {
      "priceEb": 200,
      "availability": "Partout",
      "concealable": true
    },
    "iz": {
      "priceCredits": 500,
      "quality": "Streetware",
      "cybertension": 0,
      "weightKg": 0,
      "notes": "Requiert 1 AMS. Les alliés ne subissent de dommages collatéraux que sur un échec critique."
    },
    "tags": [
      "t-app",
      "hud",
      "visée",
      "escouade"
    ]
  },
  {
    "id": "tapp-firewall-4th-dim",
    "name": "T-APP Firewall 4th Dimension Security",
    "category": "gear_tap",
    "categoryLabel": "Netrunning & T-APP",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "4th Dimension Security Systems",
    "origin": "Interface Zéro 2.0",
    "description": "Pare-feu neural multicouche haut de gamme qui bloque les sondages d’ICE agressive et les vers tueurs comme Jormungand avant qu’ils n’atteignent le système nerveux de l’utilisateur.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/96/CyberdeckSplinter.png/revision/latest",
    "fallbackIcon": "Terminal",
    "red": {
      "priceEb": 1000,
      "availability": "Cher",
      "concealable": true
    },
    "iz": {
      "priceCredits": 400,
      "quality": "Milware",
      "cybertension": 0,
      "firewall": 3,
      "weightKg": 0,
      "notes": "+3 au Firewall de votre TAP (non cumulable avec une autre T-APP de Firewall). Requiert 1 AMS."
    },
    "tags": [
      "pare-feu",
      "securite-neurale",
      "anti-hack"
    ]
  },
  {
    "id": "trauma-team-kit",
    "name": "BioDesign OmniProbe & Kit Trauma Pro",
    "category": "gear_tap",
    "categoryLabel": "Netrunning & T-APP",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Trauma Team / BioDesign",
    "origin": "Cyberpunk RED / IZ Hybrid",
    "description": "Station d’analyse médicale et de perfusion rapide. Analyse immédiatement le flux sanguin, les toxines et les surcharges neuro-cybernétiques.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/6f/Vest_08_rich_02F.png/revision/latest",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 500,
      "availability": "Coûteux",
      "concealable": false
    },
    "iz": {
      "priceCredits": 1250,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 3,
      "notes": "+2 aux jets de Soins / Premiers secours, stabilise automatiquement un patient en état critique."
    },
    "tags": [
      "medical",
      "trauma-team",
      "soins",
      "diagnostic"
    ]
  },
  {
    "id": "afterburn-stim",
    "name": "Stimulant Neural Afterburn (8-Ball)",
    "category": "pharma",
    "categoryLabel": "Drogues & Soins",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Nouveau Brésil / Labos Clandestins",
    "origin": "Interface Zéro 2.0",
    "description": "Cocktail neurochimique stimulant d’hyper-caïne et de méthamphétamines. Décuple la vitesse synaptique et les réflexes moteurs au détriment de l’instinct de survie.",
    "flavorQuote": "« Tu veux des réflexes surhumains et une énergie infinie pour la nuit ? Un seul snif et tu sautes partout ! » — Malmart 2090",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/33/OxyBooster.png/revision/latest",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 100,
      "availability": "Partout",
      "humanityLoss": "1d6",
      "concealable": true
    },
    "iz": {
      "priceCredits": 25,
      "quality": "Gutterware",
      "cybertension": 0,
      "weightKg": 0.05,
      "notes": "Durée 1d4 h. Booste les compétences d’Agilité d’un dé, ignore malus de fatigue. Addiction -2 Âme."
    },
    "tags": [
      "stimulant",
      "agilite",
      "reflexes",
      "street-chem"
    ]
  },
  {
    "id": "black-lace-combat",
    "name": "Black Lace Mil-Grade Painblocker",
    "category": "pharma",
    "categoryLabel": "Drogues & Soins",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka / Zetatech Clandestin",
    "origin": "Cyberpunk Wiki",
    "description": "Analgésique puissant utilisé pour transformer les soldats en machines insensibles à la douleur. Confère une immunité temporaire à la peur et à l’étourdissement.",
    "flavorQuote": "« Tu pourrais te faire couper un bras sans même t’en apercevoir avant la fin du combat. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/db/BlackLace.png/revision/latest",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 200,
      "availability": "Coûteux",
      "humanityLoss": "2d6",
      "concealable": true
    },
    "iz": {
      "priceCredits": 400,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.05,
      "notes": "Ignore 2 points de malus de blessures, immunisé aux tests de Terreur et d’Intimidation."
    },
    "tags": [
      "antidouleur",
      "combat",
      "adrenale",
      "militaire"
    ]
  },
  {
    "id": "tank-n-spank-rage",
    "name": "Cocktail Supersonique Tank-n-Spank",
    "category": "pharma",
    "categoryLabel": "Drogues & Soins",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Doc Pango Clandestine Lab",
    "origin": "Interface Zéro 2.0",
    "description": "La plus brutale des drogues de pouvoir urbaines. Décuple la force brute et la résistance au choc, mais détruit les fibres musculaires dès la dissipation des effets.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/a9/BonesMcCoy70.png/revision/latest",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 500,
      "availability": "Cher",
      "humanityLoss": "3d6",
      "concealable": true
    },
    "iz": {
      "priceCredits": 600,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 0.1,
      "notes": "Durée 1d4 h. Force augmentée d’un type de dé, dégâts relance 1d8 au lieu de 1d6. Crash : 1d4 dégâts/heure."
    },
    "tags": [
      "berserk",
      "force-extreme",
      "stim-lourd",
      "dangereux"
    ]
  },
  {
    "id": "skippy-yukimura",
    "name": "Skippy (HJKE-11 Yukimura Intelligent)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Arasaka / Custom IA",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet intelligent iconique doté d’une véritable IA conversationnelle facétieuse (hologramme de cartouche à lunettes chantante). Deux modes de ciblage automatique : « Chiot Pacifique » (neutralisation non-létale) ou « Tueur sans Pitié » (tête).",
    "flavorQuote": "« Bip-bop-boubip ! Merci d’avoir choisi Skippy, votre pistolet intelligent préféré. Chanter \"Disturbia\" en tirant est fortement recommandé ! » — Skippy",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/67/Yukimura_Skippy.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 12000,
      "availability": "Exotique",
      "damage": "4d6 (Smart)",
      "rof": 1,
      "ammo": "Smart 9mm",
      "magazine": 30,
      "concealable": true
    },
    "iz": {
      "priceCredits": 15000,
      "quality": "Milware",
      "cybertension": 1,
      "damage": "2d8+1",
      "range": "12/24/48",
      "ap": 2,
      "weightKg": 1.5,
      "notes": "Règles SWADE : Arme Intelligente (ignore 2 pts d’abri). Choix en action gratuite entre Tir ciblé tête (+4 dégâts) ou non-létal aux jambes sans malus."
    },
    "tags": [
      "skippy",
      "ia-parlante",
      "smartgun",
      "iconique",
      "arasaka"
    ]
  },
  {
    "id": "overwatch-grad",
    "name": "Overwatch (Techtronika SPT32 Grad Custom)",
    "category": "longarms",
    "categoryLabel": "Fusils & Mitraillettes",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Techtronika / Panam Palmer",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil de précision antimatière lourd personnalisé par Panam Palmer pour le clan nomade Aldecaldos. Doté d’un imposant silencieux artisanal et d’une culasse haute vélocité perforant les parois blindées.",
    "flavorQuote": "« Si tu vises juste, le type dans la forteresse d’en face ne saura jamais d’où est venue la mort. » — Panam Palmer",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/c3/Grad_Panam.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 10000,
      "availability": "Exotique",
      "damage": "6d6",
      "rof": 1,
      "ammo": "Calibre .50 Anti-blindage",
      "magazine": 4,
      "concealable": false
    },
    "iz": {
      "priceCredits": 25000,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d10+1",
      "range": "50/100/200",
      "ap": 6,
      "weightKg": 8,
      "notes": "Règles SWADE : Arme Lourde (AL), Tir statique. Silencieux militaire (-2 aux jets de Perception pour localiser). Traverse les parois et véhicules légers sans atténuation."
    },
    "tags": [
      "overwatch",
      "panam-palmer",
      "antimatiere",
      "silencieux",
      "sniper"
    ]
  },
  {
    "id": "comrades-hammer-burya",
    "name": "Comrade’s Hammer (RT-46 Burya Modifié)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Rostović",
    "origin": "Cyberpunk Wiki",
    "description": "Revolver Tech d’origine néo-soviétique customisé pour chambrer un projectile explosif artisanal démesuré. Ne tire qu’un seul coup à la fois mais pulvérise tout sur sa trajectoire.",
    "flavorQuote": "« Un seul coup pour abattre le capitalisme. Et tout le bâtiment avec. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/21/Burya_Comrade.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 8000,
      "availability": "Exotique",
      "damage": "8d6 (Explosif)",
      "rof": 1,
      "ammo": "Obus Tech custom",
      "magazine": 1,
      "concealable": false
    },
    "iz": {
      "priceCredits": 18000,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "3d8+2",
      "range": "10/20/40",
      "ap": 4,
      "weightKg": 3.5,
      "notes": "Règles SWADE : Arme Lourde (AL), Petite zone d’effet (PG). Force min. d8 requise sous peine d’être Secoué par le recul. 1 action complète pour recharger."
    },
    "tags": [
      "revolver-tech",
      "explosif",
      "comrades-hammer",
      "degats-colossaux"
    ]
  },
  {
    "id": "widow-maker-achilles",
    "name": "Faiseur de Veuves (Widow Maker)",
    "category": "longarms",
    "categoryLabel": "Fusils & Mitraillettes",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Militech / Nash Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil Tech M-179e Achilles modifié tirant deux projectiles de tungstène par salve avec un revêtement chimique toxique hautement corrosif.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/7/76/Achilles_Nash.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 9000,
      "availability": "Exotique",
      "damage": "5d6 + Toxique",
      "rof": 1,
      "ammo": "Fléchettes Tech M-179",
      "magazine": 12,
      "concealable": false
    },
    "iz": {
      "priceCredits": 14000,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "damage": "2d8+2",
      "range": "24/48/96",
      "ap": 3,
      "weightKg": 4.5,
      "notes": "Règles SWADE : Tir en rafale (3RB), PA 3. Cible touchée doit réussir un jet de Vigueur à -2 ou subir 1d6 dégâts chimiques chaque tour."
    },
    "tags": [
      "widow-maker",
      "tech-rifle",
      "poison",
      "acide"
    ]
  },
  {
    "id": "lizzie-omaha",
    "name": "Lizzie (Pistolet Tech Omaha Mox)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech / The Mox",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet Tech Omaha rose et chrome aux armoiries du Lizzie’s Bar. Système d’induction magnétique surcadencé tirant une cartouche supplémentaire lors des tirs chargés.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/90/Omaha_Suzie.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1200,
      "availability": "Cher",
      "damage": "3d6+1",
      "rof": 2,
      "ammo": "Tech 9mm",
      "magazine": 15,
      "concealable": true
    },
    "iz": {
      "priceCredits": 1800,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d6+1",
      "range": "12/24/48",
      "ap": 2,
      "weightKg": 1.2,
      "notes": "Règles SWADE : PA 2, Tir en rafale (3RB). Le tir chargé confère +1 au jet de Tir et ignore 2 points de blindage."
    },
    "tags": [
      "lizzie",
      "mox",
      "tech-pistol",
      "rose-chrome"
    ]
  },
  {
    "id": "fenrir-lexington",
    "name": "Fenrir (PM Lexington Incendiaire)",
    "category": "longarms",
    "categoryLabel": "Fusils & Mitraillettes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech / Maelstrom Mod",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet-mitrailleur M-10AF customisé par le gang Maelstrom avec injection de liquide pyrophorique sur les rainures de canon. Enflamme instantanément la cible.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/09/Saratoga_Maelstrom.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 1500,
      "availability": "Cher",
      "damage": "4d6 (Feu)",
      "rof": 1,
      "ammo": "9mm Incendiaire",
      "magazine": 30,
      "concealable": true
    },
    "iz": {
      "priceCredits": 2200,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d6+2",
      "range": "12/24/48",
      "ap": 1,
      "weightKg": 2,
      "notes": "Règles SWADE : CdT 3, Tir auto. La cible prend feu sur 5+ (2d6 dégâts de flammes au début de chaque tour adverse)."
    },
    "tags": [
      "fenrir",
      "incendiaire",
      "maelstrom",
      "mitraillette"
    ]
  },
  {
    "id": "divided-we-stand",
    "name": "Divided We Stand (D5 Sidewinder Smart)",
    "category": "longarms",
    "categoryLabel": "Fusils & Mitraillettes",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Nokota / 6th Street",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil d’assaut intelligent customisé par les vétérans du gang 6th Street. Processeur balistique multicible capable de verrouiller et d’engager jusqu’à 5 cibles distinctes simultanément.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/c9/Sidewinder_Divided.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 11000,
      "availability": "Exotique",
      "damage": "5d6 (Smart)",
      "rof": 1,
      "ammo": "Smart 5.56mm",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 16000,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "damage": "2d8+1",
      "range": "24/48/96",
      "ap": 2,
      "weightKg": 3.5,
      "notes": "Règles SWADE : Arme Intelligente. Peut répartir ses attaques de Tir automatique sur jusqu’à 3 cibles distinctes sans malus d’actions multiples."
    },
    "tags": [
      "smart-rifle",
      "multicible",
      "6th-street",
      "nokota"
    ]
  },
  {
    "id": "satori-katana",
    "name": "Satori (Katana de Saburo Arasaka)",
    "category": "melee",
    "categoryLabel": "Mêlée & Cyber-lames",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Arasaka Ancestral",
    "origin": "Cyberpunk Wiki",
    "description": "Sabre d’apparat ancestral de Saburo Arasaka forgé à la main au Japon au début du XXe siècle. Sa trempe moléculaire unique démultiplie l’énergie cinétique lors des frappes chirurgicales.",
    "flavorQuote": "« Une frappe parfaite ne demande pas de force brute, seulement de la clarté d’esprit. » — Saburo Arasaka",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/a9/Katana_Saburo.png/revision/latest",
    "fallbackIcon": "Sword",
    "red": {
      "priceEb": 20000,
      "availability": "Exotique",
      "damage": "4d6 (Crit +5d6)",
      "rof": 2,
      "concealable": false
    },
    "iz": {
      "priceCredits": 30000,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "For+d8+4",
      "range": "Mêlée",
      "ap": 4,
      "weightKg": 2,
      "notes": "Règles SWADE : PA 4, Parade +1. Sur une Relance au jet de Combat, inflige 2d10 points de dégâts supplémentaires au lieu du d6 habituel !"
    },
    "tags": [
      "satori",
      "katana-ancestral",
      "saburo-arasaka",
      "critique-letal"
    ]
  },
  {
    "id": "jinchu-maru",
    "name": "Jinchu-Maru (Katana de Sandayu Oda)",
    "category": "melee",
    "categoryLabel": "Mêlée & Cyber-lames",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Arasaka Cyber-Armory",
    "origin": "Cyberpunk Wiki",
    "description": "Katana de combat cybernétique conçu pour Sandayu Oda, garde du corps d’élite d’Hanako Arasaka. S’interface directement avec le système nerveux pour harmoniser les frappes avec les accélérateurs temporels.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/84/Katana_Takemura.png/revision/latest",
    "fallbackIcon": "Sword",
    "red": {
      "priceEb": 8000,
      "availability": "Super Luxe",
      "damage": "4d6+1",
      "rof": 2,
      "concealable": false
    },
    "iz": {
      "priceCredits": 12000,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "damage": "For+d8+2",
      "range": "Mêlée",
      "ap": 3,
      "weightKg": 2.2,
      "notes": "Règles SWADE : PA 3. Si un implant Kerenzikov ou Sandevistan est activé, octroie +2 en Parade et une relance gratuite sur chaque attaque ratée."
    },
    "tags": [
      "jinchu-maru",
      "oda",
      "katana-tactique",
      "sandevistan-synergy"
    ]
  },
  {
    "id": "sir-john-phallustiff",
    "name": "Sir John Phallustiff",
    "category": "melee",
    "categoryLabel": "Mêlée & Cyber-lames",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Meredith Stout / Militech Repurposed",
    "origin": "Cyberpunk Wiki",
    "description": "Matraque contondante vibrante en polymère haute densité armée d’un générateur de micro-impulsions électriques. Neutralise les adversaires les plus coriaces avec une touche d’insolence légendaire.",
    "flavorQuote": "« La négociation musclée prend parfois des formes inattendues au No-Tell Motel. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/0d/Dildo_Stout.png/revision/latest",
    "fallbackIcon": "Sword",
    "red": {
      "priceEb": 800,
      "availability": "Coûteux",
      "damage": "3d6 (Non-létal)",
      "rof": 2,
      "concealable": true
    },
    "iz": {
      "priceCredits": 600,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "For+d6",
      "range": "Mêlée",
      "ap": 0,
      "weightKg": 1.2,
      "notes": "Règles SWADE : Dégâts non-létaux. La cible doit réussir un jet de Vigueur à -2 ou être automatiquement Secouée et assommée."
    },
    "tags": [
      "sir-john",
      "contondant",
      "electrique",
      "non-letal",
      "iconique"
    ]
  },
  {
    "id": "slaught-o-matic",
    "name": "Budget Arms Slaught-O-Matic Jetable",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Budget Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet jetable en plastique bon marché vendu dans des distributeurs automatiques de rue pour le prix d’un sandwich de soja. Videz le chargeur et jetez-le dans la benne.",
    "flavorQuote": "« Achetez, tirez, jetez ! Garanti jusqu’à ce que le plastique fonde. » — Slogan Budget Arms",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/4f/Slaughtomatic_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 50,
      "availability": "Partout",
      "damage": "3d6",
      "rof": 2,
      "ammo": "9mm bon marché",
      "magazine": 36,
      "concealable": true
    },
    "iz": {
      "priceCredits": 50,
      "quality": "Gutterware",
      "cybertension": 0,
      "damage": "2d6",
      "range": "10/20/40",
      "ap": 0,
      "weightKg": 0.8,
      "notes": "Règles SWADE : Non rechargeable. S’enraye et casse définitivement sur un résultat de 1 sur le dé de Tir."
    },
    "tags": [
      "jetable",
      "budget-arms",
      "plastique",
      "distributeur"
    ]
  },
  {
    "id": "rostovic-satara",
    "name": "Rostović DB-2 Satara Double-Canon Tech",
    "category": "longarms",
    "categoryLabel": "Fusils & Mitraillettes",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Rostović",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil à pompe Tech double canon à bobines électromagnétiques d’inspiration serbe. Ses cartouches magnétisées traversent les barricades métalliques comme si c’était du papier.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/85/Satara_Military.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 1500,
      "availability": "Cher",
      "damage": "5d6 (Tech)",
      "rof": 1,
      "ammo": "Chevrotine Calibre 12 Tech",
      "magazine": 2,
      "concealable": false
    },
    "iz": {
      "priceCredits": 3500,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "damage": "3d6",
      "range": "10/20/40",
      "ap": 3,
      "weightKg": 4.5,
      "notes": "Règles SWADE : PA 3. Tir double simultané (3d6+2 dégâts). Traverse les couvertures moyennes (portes blindées, murs de briques) sans malus de dégâts."
    },
    "tags": [
      "satara",
      "pompe-tech",
      "perce-couverture",
      "rostovic"
    ]
  },
  {
    "id": "tsunami-ashura",
    "name": "Tsunami Ashura Smart Sniper Rifle",
    "category": "heavy",
    "categoryLabel": "Armes Lourdes & Exotiques",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Tsunami Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil de précision intelligent de pointe tirant des micromissiles à propulsion vectorielle. Chaque balle contourne les obstacles pour frapper les zones vitales non protégées.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/8f/Ashura_Default.png/revision/latest",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 4500,
      "availability": "Très Cher",
      "damage": "6d6 (Smart)",
      "rof": 1,
      "ammo": "Micromissiles Ashura",
      "magazine": 1,
      "concealable": false
    },
    "iz": {
      "priceCredits": 15000,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d10",
      "range": "40/80/160",
      "ap": 4,
      "weightKg": 6,
      "notes": "Règles SWADE : PA 4, Arme Intelligente guidée (+2 au jet de Tir, ignore tout abri sauf couverture hermétique à 360°)."
    },
    "tags": [
      "ashura",
      "smart-sniper",
      "tsunami-arms",
      "micromissiles"
    ]
  },
  {
    "id": "militech-saratoga",
    "name": "Militech M221 Saratoga SMG",
    "category": "longarms",
    "categoryLabel": "Fusils & Mitraillettes",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Mitraillette d’assaut d’infanterie compacte et polyvalente. Équipement standard des troupes de sécurité corporatistes de Militech à travers le globe.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/a8/Saratoga_Military.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 500,
      "availability": "Coûteux",
      "damage": "3d6",
      "rof": 1,
      "ammo": "9mm Mil-Spec",
      "magazine": 30,
      "concealable": true
    },
    "iz": {
      "priceCredits": 450,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d6",
      "range": "12/24/48",
      "ap": 1,
      "weightKg": 2,
      "notes": "Règles SWADE : CdT 3, PA 1, Tir automatique, Tir en rafale. Très bonne fiabilité de terrain."
    },
    "tags": [
      "saratoga",
      "smg",
      "militech",
      "standard"
    ]
  },
  {
    "id": "militech-kevlar-vest",
    "name": "Gilet Tactique Kevlar Militech",
    "category": "armor",
    "categoryLabel": "Armures & Protections",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Gilet pare-balles de patrouille en kevlar et polycarbonates thermoformés. Protège le torse et les organes vitaux contre les armes légères et les éclats.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/c5/Vest_01_basic_02F.png/revision/latest",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 300,
      "availability": "Partout",
      "sp": 12,
      "concealable": true
    },
    "iz": {
      "priceCredits": 300,
      "quality": "Streetware",
      "cybertension": 0,
      "armorBonus": 3,
      "weightKg": 3.5,
      "notes": "Règles SWADE : +3 Armure (torse). Se dissimule facilement sous une veste ou trench sans pénalité."
    },
    "tags": [
      "kevlar",
      "gilet-pare-balles",
      "militech",
      "protection-legere"
    ]
  },
  {
    "id": "nomad-leather-jacket",
    "name": "Veste de Cuir Renforcé « Nomad Style »",
    "category": "armor",
    "categoryLabel": "Armures & Protections",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Aldecaldos / Terres Dévastées",
    "origin": "Cyberpunk Wiki",
    "description": "Veste de motard en synthécuir lourd doublée de bandes d’aramide et de plaques céramiques au niveau des épaules et du dos. Résiste aux impacts et aux tempêtes de sable toxique.",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/cd/Jacket_12_old_01F.png/revision/latest",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 400,
      "availability": "Coûteux",
      "sp": 11,
      "concealable": true
    },
    "iz": {
      "priceCredits": 350,
      "quality": "Streetware",
      "cybertension": 0,
      "armorBonus": 2,
      "weightKg": 4,
      "notes": "Règles SWADE : +2 Armure (torse, bras). Bonus de +1 aux jets de Survie en environnement désertique ou terres dévastées."
    },
    "tags": [
      "nomad",
      "cuir-renforce",
      "aldecaldos",
      "survie"
    ]
  },
  {
    "id": "maxdoc-mk3",
    "name": "Inhalateur Hypodermique MaxDoc Mk.3",
    "category": "pharma",
    "categoryLabel": "Drogues & Soins",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Biotechnica / Trauma Team",
    "origin": "Cyberpunk Wiki",
    "description": "Nébuliseur d’aérosol médical haute pression contenant des coagulants sanguins de synthèse et des nanites tissulaires. Permet de stabiliser un combattant au milieu de la fusillade.",
    "flavorQuote": "« Une bonne aspiration et vos poumons brûlent, mais votre hémorragie s’arrête net. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/9b/FirstAidWhiff.png/revision/latest",
    "fallbackIcon": "Activity",
    "red": {
      "priceEb": 50,
      "availability": "Partout",
      "concealable": true
    },
    "iz": {
      "priceCredits": 50,
      "quality": "Streetware",
      "cybertension": 0,
      "weightKg": 0.2,
      "notes": "Règles SWADE : Action gratuite pour inhaler. Annule immédiatement 1 niveau de Blessure fraîche ou retire instantanément l’état Secoué."
    },
    "tags": [
      "soin",
      "inhalateur",
      "maxdoc",
      "urgence",
      "trauma-team"
    ]
  },
  {
    "id": "yaiba-kusanagi",
    "name": "Moto Yaiba Kusanagi CT-3X",
    "category": "drones_vehicles",
    "categoryLabel": "Drones & Véhicules",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Yaiba / Techno-Shogunat",
    "origin": "Cyberpunk Wiki",
    "description": "La moto sportive la plus rapide et désirée de Night City. Développée avec le Techno-Shogunat japonais, sa carrosserie rouge aérodynamique dissimule un moteur électrique délivrant 183 chevaux.",
    "flavorQuote": "« 0 à 100 en deux secondes. À cette vitesse, la police de Night City ne voit même pas votre plaque. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/ed/Yaiba_Kusanagi_CT-3X_Database_CP2077.png/revision/latest",
    "fallbackIcon": "Truck",
    "red": {
      "priceEb": 22000,
      "availability": "Super Luxe",
      "sp": 10,
      "concealable": false
    },
    "iz": {
      "priceCredits": 28000,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 220,
      "notes": "Règles SWADE : Acc/VM 40/95, Résistance 8(2). Bonus de +2 aux jets de Conduite pour manœuvres d’urgence, carénage titane léger."
    },
    "tags": [
      "kusanagi",
      "moto-sportive",
      "yaiba",
      "techno-shogunat",
      "vitesse"
    ]
  },
  {
    "id": "arasaka-tamayura",
    "name": "Arasaka Tamayura 9mm",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Arasaka Corporation",
    "origin": "Cyberpunk Wiki",
    "description": "Arme de poing de service officielle conçue pour la garde rapprochée de la famille Arasaka et les cadres corporatifs de haut rang. D’une finition noire épurée, elle allie une précision chirurgicale à un mécanisme de culasse fluide.",
    "flavorQuote": "« Entre les mains d’un agent de la sécurité corpo, le Tamayura n’est pas une arme, c’est une sentence. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/2b/Nue_Tamayura_2077.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 100,
      "availability": "Partout",
      "damage": "3d6",
      "rof": 2,
      "ammo": "Moyen calibre (9mm)",
      "magazine": 12,
      "concealable": true
    },
    "iz": {
      "priceCredits": 150,
      "quality": "Corpware",
      "cybertension": 0,
      "damage": "2d6",
      "range": "12/24/48",
      "ap": 1,
      "weightKg": 1.1,
      "notes": "Règles SWADE : Semi-auto, PA 1. Bonus de +1 aux jets de Tir quand équipé d’un Smartlink Arasaka. Finition anti-reflet."
    },
    "tags": [
      "arasaka",
      "service-corpo",
      "9mm",
      "smartlink",
      "dissimulable"
    ]
  },
  {
    "id": "dying-night",
    "name": "Dying Night (Lexington Custom de V)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech / Wilson Gun Shop",
    "origin": "Cyberpunk Wiki",
    "description": "Version personnalisée du M-10AF Lexington offerte par Robert Wilson du 2nd Amendment à V. Peinture custom noire et jaune avec gravures « Never Fade Away », temps de rechargement réduit et cadence de tir accrue.",
    "flavorQuote": "« C’est un bijou qui t’attendait dans l’armurerie, V. Prends-en soin, il ne te laissera jamais tomber. » — Robert Wilson",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/ea/Lexington_Wilson.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 500,
      "availability": "Rare",
      "damage": "3d6+1",
      "rof": 3,
      "ammo": "9mm Parabellum",
      "magazine": 21,
      "concealable": true
    },
    "iz": {
      "priceCredits": 450,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d6+1",
      "range": "12/24/48",
      "ap": 2,
      "weightKg": 1.2,
      "notes": "Règles SWADE : Semi-auto, Tir Continu 2, PA 2. Rechargement rapide : changer de chargeur est une action gratuite."
    },
    "tags": [
      "iconique",
      "v",
      "dying-night",
      "wilson",
      "rechargement-rapide"
    ]
  },
  {
    "id": "crash-overture",
    "name": "Crash (Overture Custom de River Ward)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Malorian Arms / River Ward Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Le revolver lourd Overture modifié par le détective River Ward du NCPD. Doté d’un canon renforcé compensé et d’un mode de tir rafale automatique dévastateur lors des tirs de suppression en combat rapproché.",
    "flavorQuote": "« Night City broie ceux qui hésitent. Quand je sors Crash, l’hésitation change de camp. » — River Ward",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/58/Overture_River.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1000,
      "availability": "Très Rare",
      "damage": "4d6",
      "rof": 1,
      "ammo": "Très Lourd (.45/.50)",
      "magazine": 6,
      "concealable": false
    },
    "iz": {
      "priceCredits": 850,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d8+1",
      "range": "12/24/48",
      "ap": 3,
      "weightKg": 2.2,
      "notes": "Règles SWADE : Semi-auto, PA 3. Tir chargé : permet de lâcher une décharge de 3 coups dévastatrice infligeant 2d8+3 (PA 4). Force min. d6."
    },
    "tags": [
      "iconique",
      "river-ward",
      "ncpd",
      "revolver-lourd",
      "rafale"
    ]
  },
  {
    "id": "archangel-overture",
    "name": "Archangel (Overture Custom de Kerry Eurodyne)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Malorian Arms / Kerry Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Magnifique revolver Overture plaqué or et ivoire orné de motifs baroques appartenant au rockerboy Kerry Eurodyne. Ses munitions à pointe creuse provoquent des étourdissements neuro-électriques.",
    "flavorQuote": "« Une note fausse et tout s’écroule. Un coup au but avec Archangel et le concert est terminé. » — Kerry Eurodyne",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/25/Overture_Kerry.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1500,
      "availability": "Exotique",
      "damage": "4d6",
      "rof": 1,
      "ammo": ".45 Magnum Custom",
      "magazine": 6,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1200,
      "quality": "Corpware",
      "cybertension": 0,
      "damage": "2d8+2",
      "range": "15/30/60",
      "ap": 3,
      "weightKg": 2.1,
      "notes": "Règles SWADE : PA 3, Semi-auto. Sur un jet de dégâts avec Relance, la cible doit réussir un jet de Vigueur à -2 ou être Secouée et Étourdie."
    },
    "tags": [
      "iconique",
      "kerry-eurodyne",
      "samurai",
      "revolver",
      "electrique"
    ]
  },
  {
    "id": "genjiroh-yukimura",
    "name": "Genjiroh (Yukimura Smart Kiji d’Arasaka)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Arasaka Corporation",
    "origin": "Cyberpunk Wiki",
    "description": "Modèle d’élite du pistolet intelligent Yukimura réservé à la garde d’honneur Kiji d’Arasaka. Tire 4 micro-projectiles gyroscopiques autoguidés simultanément par salve avec décharges électriques.",
    "flavorQuote": "« L’œil n’a pas besoin de viser quand l’esprit d’Arasaka guide chaque balle vers le point faible. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/84/Yukimura_Kiji.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2500,
      "availability": "Exotique",
      "damage": "3d6+2",
      "rof": 2,
      "ammo": "Smart 9mm Gyro",
      "magazine": 30,
      "concealable": true
    },
    "iz": {
      "priceCredits": 2200,
      "quality": "Corpware",
      "cybertension": 1,
      "damage": "2d6+2",
      "range": "15/30/60",
      "ap": 3,
      "weightKg": 1.4,
      "notes": "Règles SWADE : Arme Smart : ignore jusqu’à 2 points de malus d’illumination/couvert. Tire une salve de 4 tirs (Tir Continu 2) avec dégâts électrifiés (PA 3)."
    },
    "tags": [
      "iconique",
      "arasaka",
      "kiji",
      "smart",
      "salve-electrique"
    ]
  },
  {
    "id": "ajax-m251s",
    "name": "Midnight Arms M251s Ajax",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Midnight Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil d’assaut militaire robuste de calibre 7.62mm adopté par les mercenaires vétérans, dont Morgan Blackhand. Réputé pour sa solidité à toute épreuve face aux tempêtes de poussière des Badlands.",
    "flavorQuote": "« En plein milieu d’une fusillade dans une tempête de sable, le bling-bling ne sert à rien. Tu veux un Ajax. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/f3/Ajax_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 500,
      "availability": "Partout",
      "damage": "5d6",
      "rof": 1,
      "ammo": "Fusil standard (7.62mm)",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 600,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d8",
      "range": "24/48/96",
      "ap": 2,
      "weightKg": 3.5,
      "notes": "Règles SWADE : Semi-auto, Tir Continu 3 (CdT 3). PA 2. Fiable : ignore les résultats d’enrayement lors des échecs critiques standard."
    },
    "tags": [
      "fusil-assaut",
      "militaire",
      "7.62mm",
      "fiable",
      "midnight-arms"
    ]
  },
  {
    "id": "moron-labe",
    "name": "Moron Labe (Ajax Custom M251s)",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Midnight Arms / Anton Kolev Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil d’assaut Ajax lourdement customisé par Anton Kolev. Équipé d’une culasse allégée surcadencée et d’un canon ventilé sciant littéralement les cibles avec une chance accrue de démembrement.",
    "flavorQuote": "« ΜΟΛΩΝ ΛΑΒΕ : Viens les chercher si t’en as le courage, punk. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d4/Ajax_Moron.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2000,
      "availability": "Très Rare",
      "damage": "5d6+2",
      "rof": 2,
      "ammo": "Fusil lourd (7.62mm)",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1800,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d8+2",
      "range": "24/48/96",
      "ap": 3,
      "weightKg": 3.8,
      "notes": "Règles SWADE : Tir Continu 3, PA 3. Démembrement : Sur une Relance aux dégâts, inflige +1d6 supplémentaire et applique la table des Blessures."
    },
    "tags": [
      "iconique",
      "moron-labe",
      "ajax",
      "demembrement",
      "cadence"
    ]
  },
  {
    "id": "achilles-m179",
    "name": "Militech M-179 Achilles Tech Rifle",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil électromagnétique semi-automatique capable de surcharger ses fléchettes à sabot tungstène pour traverser les murs de béton, les cloisons renforcées et les blindages de véhicules légers.",
    "flavorQuote": "« Derrière une porte blindée ou un mur en kevlar ? Ça ne fait aucune différence pour un tir d’Achilles. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/f3/Achilles_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1000,
      "availability": "Rare",
      "damage": "5d6",
      "rof": 1,
      "ammo": "Tech Fléchettes 5.7mm",
      "magazine": 12,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1400,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d8+2",
      "range": "30/60/120",
      "ap": 4,
      "weightKg": 4.5,
      "notes": "Règles SWADE : Arme Tech : le tir chargé pénètre jusqu’à 10cm de béton ou d’acier (PA 6, dégâts 2d10). Semi-auto."
    },
    "tags": [
      "tech",
      "militech",
      "perce-armure",
      "flechettes",
      "charge"
    ]
  },
  {
    "id": "kyubi-tsunami",
    "name": "Tsunami Arms Kyubi",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Tsunami Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Carabine de tireur d’élite de dernière génération combinant une vitesse de bouche supersonique et une ergonomie modulable. Très populaire parmi les unités de reconnaissance d’Arasaka et de Kang Tao.",
    "flavorQuote": "« Neuf queues, neuf opportunités de frappe mortelle avant même que l’écho ne parvienne aux survivants. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/6e/Kyubi_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1000,
      "availability": "Rare",
      "damage": "5d6",
      "rof": 1,
      "ammo": "6.5mm Match Grade",
      "magazine": 20,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1100,
      "quality": "Corpware",
      "cybertension": 0,
      "damage": "2d8+1",
      "range": "30/60/120",
      "ap": 3,
      "weightKg": 3.6,
      "notes": "Règles SWADE : Semi-auto, PA 3. Viseur match intégré (+1 aux jets de Tir à moyenne et longue distance). Tir de précision mortel."
    },
    "tags": [
      "tsunami",
      "precision",
      "tireur-elite",
      "supersonique",
      "match"
    ]
  },
  {
    "id": "carnage-budget-arms",
    "name": "Budget Arms Carnage",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Budget Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil à pompe à répétition manuelle de calibre 4 monstrueux. Son recul peut désarticuler le poignet d’un utilisateur non chromé, mais son impact à bout portant pulvérise net n’importe quel assaillant.",
    "flavorQuote": "« Pas besoin de viser. Appuie sur la détente, et contemple la pulvérisation organique. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/ba/Carnage_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 500,
      "availability": "Partout",
      "damage": "5d6",
      "rof": 1,
      "ammo": "Calibre 4 Lourd",
      "magazine": 5,
      "concealable": false
    },
    "iz": {
      "priceCredits": 400,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "1-3d6",
      "range": "10/20/40",
      "ap": 2,
      "weightKg": 5,
      "notes": "Règles SWADE : Répétition manuelle, PA 2. Recul violent : Force d8 requise ou jet de Vigueur sous peine d’être Secoué. +2 au Tir à bout portant."
    },
    "tags": [
      "pompe",
      "calibre-4",
      "recul-monstre",
      "budget-arms",
      "puissance"
    ]
  },
  {
    "id": "the-headsman",
    "name": "The Headsman (Tactician Custom M2038)",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Version légendaire du fusil de combat Tactician dont le nombre de plombs a été doublé tout en resserrant le groupement balistique pour une létalité chirurgicale à portée moyenne.",
    "flavorQuote": "« Le bourreau n’a pas besoin de hache quand il dispose d’un canon scié de grade militaire. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/ea/Tactician_Headsman.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1500,
      "availability": "Rare",
      "damage": "5d6+2",
      "rof": 1,
      "ammo": "Calibre 12 Magnum",
      "magazine": 8,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1300,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d8+2",
      "range": "12/24/48",
      "ap": 3,
      "weightKg": 4.2,
      "notes": "Règles SWADE : Semi-auto, PA 3. Double décharge : inflige 3d8 de dégâts à courte portée avec gabarit conique."
    },
    "tags": [
      "iconique",
      "headsman",
      "fusil-combat",
      "tactician",
      "double-decharge"
    ]
  },
  {
    "id": "ba-xing-chong",
    "name": "Ba Xing Chong (Micro-Missiles d’Adam Smasher)",
    "category": "heavy",
    "categoryLabel": "Armes Lourdes & Exotiques",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Kang Tao / Adam Smasher Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Le monstre personnel d’Adam Smasher. Fusil intelligent lourd à 8 tubes rotatifs tirant une salve concentrée de micro-roquettes explosives guidées par IA qui traquent et annihilent les cibles biologiques ou blindées.",
    "flavorQuote": "« Tu crois que t’es spécial parce que t’es rapide ? Mes missiles s’en fichent de ta vitesse. » — Adam Smasher",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/2a/Zhuo_Eight_Star.png/revision/latest",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 10000,
      "availability": "Exotique",
      "damage": "8d6",
      "rof": 1,
      "ammo": "Micro-Missiles Smart",
      "magazine": 8,
      "concealable": false
    },
    "iz": {
      "priceCredits": 15000,
      "quality": "Corpware",
      "cybertension": 2,
      "damage": "3d8+2",
      "range": "20/40/80",
      "ap": 8,
      "weightKg": 9.5,
      "notes": "Règles SWADE : Arme Smart guidée (ignore le couvert). Petits Gabarits d’Explosion (PGE). Dégâts de Déflagration PA 8. Nécessite Force d10 ou cyber-armure."
    },
    "tags": [
      "iconique",
      "adam-smasher",
      "micro-missiles",
      "smart",
      "apocalyptique"
    ]
  },
  {
    "id": "kang-tao-zhuo",
    "name": "Kang Tao L-69 Zhuo Smart Shotgun",
    "category": "heavy",
    "categoryLabel": "Armes Lourdes & Exotiques",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil intelligent octocanons conçu pour neutraliser jusqu’à huit cibles distinctes en une seule pression de détente grâce à son processeur d’acquisition balistique distribuée.",
    "flavorQuote": "« Huit cibles verrouillées. Huit menaces rayées de la carte en 0.4 seconde. L’efficacité chinoise signée Kang Tao. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/eb/Zhuo_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2500,
      "availability": "Rare",
      "damage": "4d6 (Multi-cible)",
      "rof": 2,
      "ammo": "Smart Pellets 12G",
      "magazine": 8,
      "concealable": false
    },
    "iz": {
      "priceCredits": 2800,
      "quality": "Corpware",
      "cybertension": 1,
      "damage": "2d6+2",
      "range": "12/24/48",
      "ap": 2,
      "weightKg": 4.8,
      "notes": "Règles SWADE : Smartlink requis : peut répartir ses 8 tirs entre 1 à 4 cibles distinctes sans malus d’actions multiples."
    },
    "tags": [
      "smart",
      "kang-tao",
      "multi-cibles",
      "octocanon",
      "high-tech"
    ]
  },
  {
    "id": "errata-thermal-katana",
    "name": "Errata (Katana Thermique Surchauffé)",
    "category": "melee",
    "categoryLabel": "Armes de Corps à Corps",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka / Forge de Kabuki",
    "origin": "Cyberpunk Wiki",
    "description": "Katana monomoléculaire doté d’une résistance thermique intégrée chauffant le fil de la lame à plus de 1200°C. Cautérise et tranche les chairs et les blindages synthétiques instantanément.",
    "flavorQuote": "« Une lame qui brûle aussi fort que la colère qui l’anime. Elle ne laisse derrière elle que des cendres fumantes. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/6e/Katana_E3.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 2000,
      "availability": "Rare",
      "damage": "4d6 (Thermique)",
      "rof": 2,
      "concealable": false
    },
    "iz": {
      "priceCredits": 2100,
      "quality": "Corpware",
      "cybertension": 0,
      "damage": "For+d8+4",
      "range": "CàC",
      "ap": 6,
      "weightKg": 1.5,
      "notes": "Règles SWADE : PA 6, Parade +1. Dégâts de feu : toute cible touchée a 1 chance sur 6 de s’enflammer (d10 de dégâts de brûlure continus)."
    },
    "tags": [
      "iconique",
      "katana",
      "thermique",
      "flammes",
      "monomoleculaire"
    ]
  },
  {
    "id": "cocktail-stick-katana",
    "name": "Cocktail Stick (Katana Mox Tyger Claws)",
    "category": "melee",
    "categoryLabel": "Armes de Corps à Corps",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Mox Custom / Tyger Claws",
    "origin": "Cyberpunk Wiki",
    "description": "Katana à lame laquée rose néon et manche gainé de cuir violet retrouvé dans les loges du Lizzie’s Bar. Sous son apparence flashy et désinvolte se cache un alliage d’acier carbone mortel.",
    "flavorQuote": "« T’aimes le rose bonbon ? Attends de voir la couleur de ton sang sur le manche. » — Evelyn Parker",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/41/Katana_Cocktail.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 1000,
      "availability": "Rare",
      "damage": "3d6+2",
      "rof": 2,
      "concealable": false
    },
    "iz": {
      "priceCredits": 900,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "For+d8+2",
      "range": "CàC",
      "ap": 3,
      "weightKg": 1.2,
      "notes": "Règles SWADE : PA 3, Parade +1. Léger et équilibré : réduit le malus de combat à deux armes de 1 point."
    },
    "tags": [
      "iconique",
      "mox",
      "tyger-claws",
      "rose-neon",
      "lame-equilibre"
    ]
  },
  {
    "id": "cottonmouth-cane",
    "name": "Cottonmouth (Canne Électro-Toxique de Fingers)",
    "category": "melee",
    "categoryLabel": "Armes de Corps à Corps",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Ripperdoc Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Canne de marche ornée d’une tête de vipère dissimulant un diffuseur de neurotoxines et une batterie haute tension capable d’administrer des chocs électriques paralysants.",
    "flavorQuote": "« Fingers sait comment calmer les clients récalcitrants. Une décharge dans les reins, et ils signent pour n’importe quel implant. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d6/Cane_Fingers.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 500,
      "availability": "Peu commun",
      "damage": "2d6+2",
      "rof": 2,
      "concealable": true
    },
    "iz": {
      "priceCredits": 450,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "For+d6+1",
      "range": "CàC",
      "ap": 2,
      "weightKg": 1,
      "notes": "Règles SWADE : Dissimulée (semble ordinaire). Dégâts non létaux/létaux au choix. Décharge électrique + poison : jet de Vigueur requis sous peine d’être Étourdi."
    },
    "tags": [
      "iconique",
      "fingers",
      "canne",
      "poison",
      "electrique",
      "dissimulable"
    ]
  },
  {
    "id": "sasquatch-hammer",
    "name": "Marteau de Chantier de Sasquatch",
    "category": "melee",
    "categoryLabel": "Armes de Corps à Corps",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Animals Heavy Forge",
    "origin": "Cyberpunk Wiki",
    "description": "Marteau pneumatique industriel de près de 30 kilos réusiné par Sasquatch des Animals. Équipé d’un contrepoids cinétique amplifiant la force d’impact au point de briser les os à travers les armures de combat.",
    "flavorQuote": "« Vous les petits punks avec votre chrome agile, vous oubliez la loi de base : la masse multipliée par la vitesse. » — Sasquatch",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d1/Hammer_Sasquatch.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 800,
      "availability": "Rare",
      "damage": "5d6",
      "rof": 1,
      "concealable": false
    },
    "iz": {
      "priceCredits": 750,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "For+d10+2",
      "range": "CàC",
      "ap": 4,
      "weightKg": 28,
      "notes": "Règles SWADE : Arme lourde à 2 mains. Nécessite Force d10+. Fracassement : ignore la protection des boucliers anti-émeute et inflige +2 dégâts aux véhicules."
    },
    "tags": [
      "iconique",
      "animals",
      "sasquatch",
      "marteau-lourd",
      "fracassement"
    ]
  },
  {
    "id": "rayfield-caliburn",
    "name": "Hypercar Rayfield Caliburn",
    "category": "drones_vehicles",
    "categoryLabel": "Drones & Véhicules",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Rayfield UK",
    "origin": "Cyberpunk Wiki",
    "description": "La supercar la plus rapide de Night City. Châssis monocoque aérodynamique en fibre de carbone tressée avec propulseurs d’appoint au plasma et habitacle pressurisé sans vitres CrystalDome.",
    "flavorQuote": "« 336 km/h sur l’autoroute des Badlands. La poussière n’a même pas le temps de se déposer sur la carrosserie. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/fb/Rayfield_Caliburn_Database_CP2077.png/revision/latest",
    "fallbackIcon": "Truck",
    "red": {
      "priceEb": 157000,
      "availability": "Super Luxe",
      "sp": 15,
      "concealable": false
    },
    "iz": {
      "priceCredits": 160000,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "weightKg": 1450,
      "notes": "Règles SWADE : Acc/VM 50/140, Résistance 12(4), Maniabilité +2. Système CrystalDome hermétique blindé (immunité aux gaz et flashs lumineux)."
    },
    "tags": [
      "hypercar",
      "caliburn",
      "rayfield",
      "vitesse-pure",
      "crystaldome"
    ]
  },
  {
    "id": "rayfield-aerondight",
    "name": "Rayfield Aerondight « Guinevere »",
    "category": "drones_vehicles",
    "categoryLabel": "Drones & Véhicules",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Rayfield UK",
    "origin": "Cyberpunk Wiki",
    "description": "Le symbole ultime du triomphe corporatiste et néo-militariste. Seuls quelques oligarques et présidents de mégacorporations possèdent cette merveille de 6 mètres de long plaquée titane blanc et or.",
    "flavorQuote": "« Si vous devez demander son prix, c’est que vous n’avez pas votre place dans les tours corporatives. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/c4/Rayfield_Aerondight_%22Guinevere%22_Database_CP2077.png/revision/latest",
    "fallbackIcon": "Truck",
    "red": {
      "priceEb": 225000,
      "availability": "Super Luxe",
      "sp": 20,
      "concealable": false
    },
    "iz": {
      "priceCredits": 250000,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 2200,
      "notes": "Règles SWADE : Acc/VM 30/110, Résistance 16(6), Blindage lourd militaire. Mini-bar chirurgical, terminal de téléconférence sécurisé quantique."
    },
    "tags": [
      "limousine",
      "aerondight",
      "prestige",
      "ultra-luxe",
      "corpo"
    ]
  },
  {
    "id": "militech-manticore-av",
    "name": "Aérodyne Lourd Militech Manticore AV",
    "category": "drones_vehicles",
    "categoryLabel": "Drones & Véhicules",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Véhicule aérien d’assaut tactique à poussée vectorielle déployé par les escadrons de réaction d’urgence Trauma Team International et les troupes de choc d’Arasaka / Militech.",
    "flavorQuote": "« Quand le Manticore surgit des nuages de smog avec ses turbines hurlantes, les fusillades au sol cessent immédiatement. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/97/Militech_Manticore_Database_CP2077.png/revision/latest",
    "fallbackIcon": "Truck",
    "red": {
      "priceEb": 500000,
      "availability": "Exotique",
      "sp": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 450000,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 4500,
      "notes": "Règles SWADE : Vol stationnaire VTOL, Acc/VM 40/150, Résistance 22(8), Blindage lourd. Équipé d’une tourelle automatique jumelée (PA 4)."
    },
    "tags": [
      "aerodyne",
      "av",
      "trauma-team",
      "vtol",
      "militech",
      "blindage-lourd"
    ]
  },
  {
    "id": "zetatech-octant-drone",
    "name": "Drone Tactique Lourd Zetatech Octant",
    "category": "drones_vehicles",
    "categoryLabel": "Drones & Véhicules",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Zetatech",
    "origin": "Cyberpunk Wiki",
    "description": "Drone de sécurité et d’interception à rotor caréné équipé de capteurs thermiques 360° et d’un support d’armement polyvalent pour mitrailleuse légère ou lance-grenades flash.",
    "flavorQuote": "« L’œil vigilant au-dessus des complexes de Corpo Plaza. Rien ne franchit son périmètre sans être catalogué. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/1a/Zetatech_Octant_Database_CP2077.png/revision/latest",
    "fallbackIcon": "Truck",
    "red": {
      "priceEb": 8000,
      "availability": "Rare",
      "sp": 12,
      "concealable": false
    },
    "iz": {
      "priceCredits": 7500,
      "quality": "Milware",
      "cybertension": 1,
      "damage": "2d8",
      "range": "24/48/96",
      "ap": 2,
      "weightKg": 65,
      "notes": "Règles SWADE : Drone de combat : Vol VM 25, Résistance 9(3). Pilotage autonome d8 (Tir d8, Détection d10). Équipé d’un PM 9mm lourd."
    },
    "tags": [
      "drone",
      "octant",
      "zetatech",
      "surveillance",
      "combat-aerien"
    ]
  },
  {
    "id": "edgerunner-jacket-david",
    "name": "Veste d’Edgerunner en Aramide « Yellow Flash »",
    "category": "armor",
    "categoryLabel": "Blindages & Protections",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Street Tailor / Edgerunner Custom",
    "origin": "Cyberpunk Wiki",
    "description": "La célèbre veste jaune fluo de secouriste de la NCSF renforcée de plaques d’aramide et de nanofibres balistiques, devenue l’emblème de la rébellion urbaine de David Martinez à Santo Domingo.",
    "flavorQuote": "« Rester en vie à Night City, c’est aller plus vite que les balles et avoir assez de cran pour ne jamais regarder en arrière. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/1f/MQ049_martinez_jacketM.png/revision/latest",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 300,
      "availability": "Partout",
      "sp": 11,
      "concealable": true
    },
    "iz": {
      "priceCredits": 400,
      "quality": "Streetware",
      "cybertension": 0,
      "weightKg": 2.5,
      "notes": "Règles SWADE : Armure +2 (Torse et Bras). Ignifugée et isolante contre les chocs électriques légers (+2 aux jets de résistance électrique)."
    },
    "tags": [
      "iconique",
      "david-martinez",
      "edgerunner",
      "aramide",
      "streetware"
    ]
  },
  {
    "id": "maxtac-heavy-cuirass",
    "name": "Cuirasse Tactique d’Intervention MaxTac Heavy",
    "category": "armor",
    "categoryLabel": "Blindages & Protections",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "NCPD / Militech SpecOps",
    "origin": "Cyberpunk Wiki",
    "description": "Blindage composite lourd en céramique et carbure de bore utilisé par la division Maximum Force Tactical Response (MaxTac) pour traquer et abattre les cyberpsychos surchromés.",
    "flavorQuote": "« Quand MaxTac débarque sur les lieux, on ne négocie plus avec le suspect. On nettoie la zone. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d5/SQ030_MaxTac_ChestM_Icon_CP2077.png/revision/latest",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 2000,
      "availability": "Rare",
      "sp": 15,
      "concealable": false
    },
    "iz": {
      "priceCredits": 2800,
      "quality": "Milware",
      "cybertension": 0,
      "weightKg": 8,
      "notes": "Règles SWADE : Armure +4 (Torse, Bras, Jambes). Réduit les dégâts de tirs balistiques et d’explosions de 4 points. Encombrant : -1 aux jets d’Athlétisme."
    },
    "tags": [
      "maxtac",
      "anti-cyberpsycho",
      "blindage-lourd",
      "ncpd",
      "ceramique"
    ]
  },
  {
    "id": "trauma-team-uniform",
    "name": "Combinaison Blindée d’Urgence Trauma Team",
    "category": "armor",
    "categoryLabel": "Blindages & Protections",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Trauma Team International",
    "origin": "Cyberpunk Wiki",
    "description": "Uniforme complet vert et blanc en fibres composites pare-balles hermétique aux agents toxiques et intégrant des ports de connexion directe pour défibrillateurs et perfusions de plasma.",
    "flavorQuote": "« 7 minutes pour extraire le patient ou tout le quartier finit sous un tapis de feu de couverture. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/06/Trauma_Team_OutfitM.png/revision/latest",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 1200,
      "availability": "Rare",
      "sp": 13,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1500,
      "quality": "Corpware",
      "cybertension": 0,
      "weightKg": 5,
      "notes": "Règles SWADE : Armure +3 (Corps complet). Système d’auto-hémostase d’urgence : confère un jet gratuit pour stabiliser un allié mourant sans matériel."
    },
    "tags": [
      "trauma-team",
      "medical",
      "auto-hemostase",
      "hermetique",
      "composite"
    ]
  },
  {
    "id": "netrunner-arasaka-suit",
    "name": "Combinaison Cryogénique de Netrunning Arasaka",
    "category": "armor",
    "categoryLabel": "Blindages & Protections",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka Sub-Net",
    "origin": "Cyberpunk Wiki",
    "description": "Seconde peau thermo-régulatrice équipée de micro-canaux de fluide caloporteur pour dissiper la surchauffe cérébrale intense générée par les cyberdecks militaires lors des plongées profondes dans le Net.",
    "flavorQuote": "« Sans combinaison caloporteuse, votre cerveau bout dans votre boîte crânienne en moins de vingt secondes de combat ICE. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/a1/Netrunner_01_Set_JumpsuitF.png/revision/latest",
    "fallbackIcon": "Shield",
    "red": {
      "priceEb": 800,
      "availability": "Rare",
      "sp": 7,
      "concealable": true
    },
    "iz": {
      "priceCredits": 1200,
      "quality": "Corpware",
      "cybertension": 1,
      "weightKg": 1.8,
      "notes": "Règles SWADE : Armure +1 (légère). Refroidissement neural : confère +2 aux jets d’encaissement de surchauffe/dégâts cybernétiques cérébraux."
    },
    "tags": [
      "netrunner",
      "cryogenique",
      "arasaka",
      "anti-surchauffe",
      "combinaison"
    ]
  },
  {
    "id": "arasaka-jke-x2-kenshin",
    "name": "Arasaka JKE-X2 Kenshin",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka Corporation",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet Tech semi-automatique emblématique d’Arasaka. Utilisé par les agents de protection rapprochée pour sa capacité à saturer les points vitaux à travers les cloisons légères grâce à des tirs chargés électromagnétiques.",
    "flavorQuote": "« Élégance japonaise et force brute électromagnétique réunies dans la paume de votre main. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/2b/Kenshin_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 500,
      "availability": "Rare",
      "damage": "3d6",
      "rof": 2,
      "ammo": "Tech 9mm",
      "magazine": 12,
      "concealable": true
    },
    "iz": {
      "priceCredits": 400,
      "quality": "Corpware",
      "cybertension": 0,
      "damage": "2d6+1",
      "range": "12/24/48",
      "ap": 3,
      "weightKg": 1.1,
      "notes": "Règles SWADE : Arme Tech semi-auto, PA 3. Tir chargé : perce jusqu’à 5cm de blindage (PA 5). Rafale de 2 coups précise."
    },
    "tags": [
      "tech",
      "arasaka",
      "kenshin",
      "charge",
      "perce-blindage"
    ]
  },
  {
    "id": "constitutional-arms-liberty",
    "name": "Constitutional Arms Liberty",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Constitutional Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet cinétique puissant de calibre moyen réputé pour sa robustesse mécanique et son profil anguleux. L’arme de référence de la sécurité privée et des tireurs sportifs de Night City.",
    "flavorQuote": "« La liberté ne se mendie pas, elle se négocie à la cadence de six cents coups par minute. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/19/Liberty_Military1.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 100,
      "availability": "Partout",
      "damage": "3d6",
      "rof": 2,
      "ammo": "9mm Parabellum",
      "magazine": 12,
      "concealable": true
    },
    "iz": {
      "priceCredits": 120,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d6",
      "range": "12/24/48",
      "ap": 1,
      "weightKg": 1.2,
      "notes": "Règles SWADE : Semi-auto, PA 1. Fiable et universel. Bonus de ricochet avec coprocesseur balistique."
    },
    "tags": [
      "liberty",
      "power",
      "fiable",
      "polyvalent",
      "standard"
    ]
  },
  {
    "id": "darra-dr12-quasar",
    "name": "Darra Polytechnic DR-12 Quasar",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Darra Polytechnic",
    "origin": "Cyberpunk Wiki",
    "description": "Revolver Tech automatique doté d’un barillet surdimensionné de 20 cartouches. Capable de vider ses munitions à une vitesse phénoménale tout en accélérant magnétiquement chaque balle à travers les murs.",
    "flavorQuote": "« Vingt cartouches dans un revolver ? Chez Darra, on appelle ça le progrès populaire. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/e2/Quasar_Military.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 500,
      "availability": "Coûteux",
      "damage": "4d6",
      "rof": 1,
      "ammo": ".45 Tech",
      "magazine": 20,
      "concealable": false
    },
    "iz": {
      "priceCredits": 450,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d8",
      "range": "15/30/60",
      "ap": 4,
      "weightKg": 2.3,
      "notes": "Règles SWADE : Revolver Tech automatique. Capable de tir continu (CdT 2) en chargeant les projectiles qui traversent le couvert."
    },
    "tags": [
      "tech",
      "quasar",
      "revolver-auto",
      "darra",
      "20-coups"
    ]
  },
  {
    "id": "darra-dr5-nova",
    "name": "Darra Polytechnic DR-5 Nova",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Darra Polytechnic",
    "origin": "Cyberpunk Wiki",
    "description": "Revolver lourd traditionnel à barillet 6 coups apprécié pour son claquement assourdissant et son pouvoir d’arrêt phénoménal dans les couloirs étroits de Watson.",
    "flavorQuote": "« Simple, brutal et pas cher. Six balles suffisent amplement si tu sais viser. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/06/Nova_Military.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 100,
      "availability": "Partout",
      "damage": "4d6",
      "rof": 1,
      "ammo": ".44 Magnum",
      "magazine": 6,
      "concealable": false
    },
    "iz": {
      "priceCredits": 150,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d8",
      "range": "12/24/48",
      "ap": 2,
      "weightKg": 1.8,
      "notes": "Règles SWADE : Revolver lourd 6 coups, PA 2. Dégâts d’impact massifs à courte portée."
    },
    "tags": [
      "nova",
      "revolver",
      "magnum",
      "lourd",
      "darra"
    ]
  },
  {
    "id": "kang-tao-a22b-chao",
    "name": "Kang Tao A-22B Chao Smart Pistol",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kang Tao",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet intelligent compact conçu pour les agents de renseignement de Kang Tao. Ses micro-projectiles gyroscopiques traquent la trajectoire du regard du tireur pour contourner les obstacles.",
    "flavorQuote": "« Ne vous souciez pas des angles morts. Le Chao s’occupe de trouver le chemin le plus court vers la tempe ennemie. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/26/Chao_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 500,
      "availability": "Rare",
      "damage": "3d6",
      "rof": 2,
      "ammo": "Smart 9mm",
      "magazine": 30,
      "concealable": true
    },
    "iz": {
      "priceCredits": 600,
      "quality": "Corpware",
      "cybertension": 1,
      "damage": "2d6",
      "range": "12/24/48",
      "ap": 2,
      "weightKg": 1.1,
      "notes": "Règles SWADE : Arme Smart : micro-missiles autoguidés annulant 2 points de malus d’illumination ou de couvert. Cadence de tir soutenue."
    },
    "tags": [
      "smart",
      "chao",
      "kang-tao",
      "autoguidage",
      "intelligent"
    ]
  },
  {
    "id": "militech-m76e-omaha",
    "name": "Militech M-76e Omaha",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "uncommon",
    "rarityLabel": "Peu commun",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet Tech de dotation tactique tirant des salves de trois projectiles électromagnétiques ultra-véloces. Une référence militaire éprouvée lors des conflits corpo.",
    "flavorQuote": "« Trois impacts en un seul point d’entrée. Aucune armure de combat n’y résiste bien longtemps. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/fe/Omaha_Military.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 500,
      "availability": "Partout",
      "damage": "3d6",
      "rof": 2,
      "ammo": "Tech 9mm",
      "magazine": 15,
      "concealable": true
    },
    "iz": {
      "priceCredits": 400,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d6+1",
      "range": "12/24/48",
      "ap": 3,
      "weightKg": 1.3,
      "notes": "Règles SWADE : Arme Tech : tir en rafale de 3 coups simultanés (2d6+2, PA 4) lors d’un tir chargé pénétrant le couvert."
    },
    "tags": [
      "tech",
      "omaha",
      "militech",
      "salve-3-coups",
      "militaire"
    ]
  },
  {
    "id": "militech-ticon",
    "name": "Militech Ticon Tech Pistol",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Arme de poing Tech lourde conçue pour percer le blindage des drones de patrouille et des cyber-soldats d’élite. Boîtier titane et bobines magnétiques supraconductrices.",
    "flavorQuote": "« Quand les pistolets légers ricochent sur les plaques d’acier, le Ticon fait parler la physique quantique. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d4/Ticon_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1000,
      "availability": "Rare",
      "damage": "4d6",
      "rof": 2,
      "ammo": "Tech 10mm",
      "magazine": 15,
      "concealable": false
    },
    "iz": {
      "priceCredits": 800,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d8",
      "range": "15/30/60",
      "ap": 4,
      "weightKg": 1.7,
      "notes": "Règles SWADE : Pistolet Tech de poing lourd. Pénètre le blindage des drones et mécas de sécurité (PA 4)."
    },
    "tags": [
      "tech",
      "ticon",
      "militech",
      "lourd",
      "anti-blindage"
    ]
  },
  {
    "id": "tsunami-kappa",
    "name": "Tsunami Kappa Smart Pistol",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Tsunami Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet intelligent japonais ultra-léger développé pour les assassins corpo. Son processeur cible automatiquement les articulations et la boîte crânienne.",
    "flavorQuote": "« Silencieux, précis et implacable comme l’eau qui s’infiltre dans les failles de votre armure. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/49/Kappa_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 500,
      "availability": "Rare",
      "damage": "3d6",
      "rof": 2,
      "ammo": "Smart 9mm",
      "magazine": 24,
      "concealable": true
    },
    "iz": {
      "priceCredits": 550,
      "quality": "Corpware",
      "cybertension": 1,
      "damage": "2d6",
      "range": "12/24/48",
      "ap": 2,
      "weightKg": 1,
      "notes": "Règles SWADE : Pistolet Smart compact japonais. Verrouillage ultra-rapide des points vitaux."
    },
    "tags": [
      "smart",
      "kappa",
      "tsunami",
      "precision",
      "furtif"
    ]
  },
  {
    "id": "techtronika-rt46-burya",
    "name": "Techtronika RT-46 Burya Standard",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Techtronika",
    "origin": "Cyberpunk Wiki",
    "description": "Le revolver Tech standard le plus craint de l’Est. Sa cartouche magnétique accélérée à plusieurs kilomètres par seconde traverse les cloisons renforcées comme du carton pâte.",
    "flavorQuote": "« La tempête d’acier soviétique. Un tir, un trou béant de la taille d’une assiette. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/2f/Burya_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1000,
      "availability": "Rare",
      "damage": "4d6+2",
      "rof": 1,
      "ammo": "Tech Lourd (.50)",
      "magazine": 4,
      "concealable": false
    },
    "iz": {
      "priceCredits": 900,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d8+2",
      "range": "15/30/60",
      "ap": 5,
      "weightKg": 2.5,
      "notes": "Règles SWADE : Canon à main néo-soviétique. Les tirs traversent murs et blindages corporels comme du papier (PA 5). Force d8 requise."
    },
    "tags": [
      "tech",
      "burya",
      "techtronika",
      "perce-murs",
      "canon-a-main"
    ]
  },
  {
    "id": "plan-b-liberty",
    "name": "Plan B (Pistolet de Dexter DeShawn)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Constitutional Arms / Dex Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Le pistolet Liberty plaqué or personnel de Dexter DeShawn. Modifié avec un lecteur de puce financière qui puise directement des Eurodollars de votre compte bancaire pour les convertir en balles cinétiques.",
    "flavorQuote": "« Le Plan B, c’est payer pour voir. Et à Night City, chaque seconde de vie a un prix. » — Dexter DeShawn",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/db/Liberty_Dex.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1000,
      "availability": "Exotique",
      "damage": "3d6+1",
      "rof": 2,
      "ammo": "Eurodollars (€$)",
      "magazine": 21,
      "concealable": true
    },
    "iz": {
      "priceCredits": 1200,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d6+1",
      "range": "12/24/48",
      "ap": 2,
      "weightKg": 1.3,
      "notes": "Règles SWADE : Iconique : chaque tir déduit 1 €$/c$ de votre solde au lieu de munitions standard. Chance accrue d’Hémorragie."
    },
    "tags": [
      "iconique",
      "dexter-deshawn",
      "or",
      "eurodollars",
      "liberty"
    ]
  },
  {
    "id": "pride-liberty",
    "name": "Pride (Pistolet de Rogue Amendiares)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Constitutional Arms / Rogue Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Arme de signature de la reine des fixers de l’Afterlife, Rogue Amendiares. Finition noir mat anti-reflet et culasse équilibrée au millimètre pour des coups critiques mortels sur cibles étourdies.",
    "flavorQuote": "« Cinquante ans dans le business et je respire toujours. Pride y est pour beaucoup. » — Rogue Amendiares",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/03/Liberty_Rogue.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2500,
      "availability": "Exotique",
      "damage": "4d6",
      "rof": 2,
      "ammo": "9mm Match",
      "magazine": 12,
      "concealable": true
    },
    "iz": {
      "priceCredits": 2200,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d8+1",
      "range": "15/30/60",
      "ap": 3,
      "weightKg": 1.2,
      "notes": "Règles SWADE : Iconique : +2 aux dégâts contre les cibles à terre ou étourdies. Sur un coup critique/Relance, inflige +2d6 dégâts bonus."
    },
    "tags": [
      "iconique",
      "rogue",
      "afterlife",
      "critique",
      "pride"
    ]
  },
  {
    "id": "kongou-liberty",
    "name": "Kongou (Pistolet de Yorinobu Arasaka)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Arasaka Custom / Yorinobu",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet d’apparat chromé orné d’idéogrammes royaux récupéré dans la suite de Yorinobu au Konpeki Plaza. Intègre un calculateur de trajectoire permettant des ricochets létaux sans implant balistique.",
    "flavorQuote": "« Pour renverser un empire de l’intérieur, il faut commencer par s’armer avec ses plus beaux bijoux. » — Yorinobu Arasaka",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/1f/Liberty_Yorinobu.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2000,
      "availability": "Rare",
      "damage": "3d6+2",
      "rof": 2,
      "ammo": "9mm Gold",
      "magazine": 12,
      "concealable": true
    },
    "iz": {
      "priceCredits": 1800,
      "quality": "Corpware",
      "cybertension": 0,
      "damage": "2d6+2",
      "range": "12/24/48",
      "ap": 2,
      "weightKg": 1.1,
      "notes": "Règles SWADE : Iconique : permet les tirs de ricochet avancés même sans implant de coprocesseur balistique."
    },
    "tags": [
      "iconique",
      "yorinobu",
      "konpeki",
      "ricochet",
      "arasaka"
    ]
  },
  {
    "id": "chaos-kenshin",
    "name": "Chaos (Pistolet Tech de Royce / Maelstrom)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka / Maelstrom Mod",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet Kenshin salement bidouillé par Royce à l’usine All Foods. Son microprocesseur piraté altère aléatoirement la nature chimique et thermique des munitions à chaque rechargement.",
    "flavorQuote": "« Tu veux savoir ce que tu vas te prendre ? Même moi je sais pas avant d’avoir appuyé sur la détente ! » — Royce",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/64/Kenshin_Royce.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1500,
      "availability": "Rare",
      "damage": "3d6+1 (Élémentaire)",
      "rof": 2,
      "ammo": "Tech 9mm",
      "magazine": 12,
      "concealable": true
    },
    "iz": {
      "priceCredits": 1300,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d6+2",
      "range": "12/24/48",
      "ap": 3,
      "weightKg": 1.4,
      "notes": "Règles SWADE : Iconique : à chaque rechargement, change aléatoirement de type de dégâts (Feu, Choc Électrique, Poison, ou Saignement)."
    },
    "tags": [
      "iconique",
      "royce",
      "maelstrom",
      "chaos",
      "elementaire"
    ]
  },
  {
    "id": "doom-doom-nova",
    "name": "Doom Doom (Revolver Nova de Dum Dum)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Darra Polytechnic / Maelstrom Mod",
    "origin": "Cyberpunk Wiki",
    "description": "Revolver Nova customisé avec 4 percuteurs décalés. Chaque pression sur la détente propulse une gerbe de 4 cartouches simultanées, infligeant des blessures atroces et pulvérisant les membres.",
    "flavorQuote": "« C’est pas du tir, c’est du jazz pour les oreilles de Maelstrom. Boom-boom-doom. » — Dum Dum",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/0b/Nova_Doom_Doom.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1500,
      "availability": "Rare",
      "damage": "4d6+1",
      "rof": 1,
      "ammo": ".44 Magnum",
      "magazine": 6,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1400,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d8+2",
      "range": "12/24/48",
      "ap": 3,
      "weightKg": 2.1,
      "notes": "Règles SWADE : Iconique : tire une décharge de 4 plombs simultanés par coup, augmentant les chances de démembrement et de projection en arrière."
    },
    "tags": [
      "iconique",
      "dum-dum",
      "maelstrom",
      "nova",
      "quadruple-tir"
    ]
  },
  {
    "id": "amnesty-overture",
    "name": "Amnesty (Revolver de Cassidy / Aldecaldos)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Malorian Arms / Aldecaldo Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Le revolver Overture modifié par Cassidy, l’as de la gâchette des Aldecaldos. Mécanisme de détente adouci au diamant garantissant une réactivité supersonique au dégainé.",
    "flavorQuote": "« Si tu touches la bouteille avant qu’elle ne touche le sol, Amnesty t’appartient. » — Cassidy",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/54/Overture_Cassidy.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2000,
      "availability": "Très Rare",
      "damage": "4d6+2",
      "rof": 1,
      "ammo": ".45 Match",
      "magazine": 6,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1900,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d8+2",
      "range": "15/30/60",
      "ap": 4,
      "weightKg": 2,
      "notes": "Règles SWADE : Iconique : détente allégée augmentant la vitesse de maniement (+1 à l’Initiative) et éliminant le malus de tir rapide."
    },
    "tags": [
      "iconique",
      "cassidy",
      "aldecaldos",
      "quickdraw",
      "overture"
    ]
  },
  {
    "id": "her-majesty-unity",
    "name": "Her Majesty (Pistolet Furtif d’Alex / Phantom Liberty)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Constitutional Arms / FIA Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet Unity d’opération clandestine utilisé par l’agente Alex de la FIA dans Dogtown. Silencieux intégral prismatique et viseur holographique garantissant une élimination propre et inaudible.",
    "flavorQuote": "« Dans ce métier, le silence est la seule assurance vie valable. Sa Majesté ne déçoit jamais. » — Alex",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/5e/Unity_Agent.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 3000,
      "availability": "Exotique",
      "damage": "3d6+2",
      "rof": 2,
      "ammo": "9mm Subsonique",
      "magazine": 12,
      "concealable": true
    },
    "iz": {
      "priceCredits": 2600,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d6+2",
      "range": "12/24/48",
      "ap": 3,
      "weightKg": 1.1,
      "notes": "Règles SWADE : Iconique : silencieux intégral parfait. Les tirs depuis la furtivité bénéficient de +2 au Tir et infligent +1d8 dégâts critiques."
    },
    "tags": [
      "iconique",
      "phantom-liberty",
      "alex",
      "fia",
      "silencieux",
      "furtif"
    ]
  },
  {
    "id": "pariah-ticon",
    "name": "Pariah (Pistolet Tech Silencieux de Solomon Reed)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Militech / Reed FIA Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Le pistolet Tech personnel de l’agent dormant Solomon Reed. Une merveille d’ingénierie combinant propulsion électromagnétique haute vélocité et étouffeur de décharge acoustique.",
    "flavorQuote": "« On peut tout pardonner à un soldat, sauf d’échouer dans l’ombre. » — Solomon Reed",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/6a/Ticon_Reed.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 3500,
      "availability": "Exotique",
      "damage": "4d6",
      "rof": 2,
      "ammo": "Tech 10mm",
      "magazine": 15,
      "concealable": false
    },
    "iz": {
      "priceCredits": 3000,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d8+2",
      "range": "15/30/60",
      "ap": 5,
      "weightKg": 1.8,
      "notes": "Règles SWADE : Iconique : le seul pistolet Tech silencieux au monde. Traverse les parois avec PA 6 tout en restant complètement inaudible."
    },
    "tags": [
      "iconique",
      "phantom-liberty",
      "solomon-reed",
      "tech-silencieux",
      "fia"
    ]
  },
  {
    "id": "bald-eagle-metel",
    "name": "Bald Eagle (Revolver Explosif du Colonel Hansen)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Techtronika / Barghest Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Revolver d’ordonnance brutal du maître de Dogtown, Kurt Hansen. Chambré pour des obus miniaturisés de 12.7mm explosifs capables de broyer les rotules et d’estropier les cibles en un tir.",
    "flavorQuote": "« Dogtown ne respecte qu’une seule autorité : celle qui a le canon le plus imposant. » — Colonel Kurt Hansen",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/e4/Metel_Kurt.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 3000,
      "availability": "Exotique",
      "damage": "5d6",
      "rof": 1,
      "ammo": "12.7mm Explosif",
      "magazine": 6,
      "concealable": false
    },
    "iz": {
      "priceCredits": 2800,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d10",
      "range": "15/30/60",
      "ap": 5,
      "weightKg": 2.8,
      "notes": "Règles SWADE : Iconique : munitions explosives à haute pression. Tire sur les membres pour briser les genoux et projeter la cible au sol (PA 5)."
    },
    "tags": [
      "iconique",
      "phantom-liberty",
      "kurt-hansen",
      "barghest",
      "explosif"
    ]
  },
  {
    "id": "ogou-chao-smart",
    "name": "Ogou (Pistolet Smart Explosif des Voodoo Boys)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Kang Tao / Voodoo Boys Mod",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet intelligent Chao reconfiguré par les netrunners de Pacifica. Tire une salve de micro-projectiles autoguidés explosifs provoquant des démembrements massifs et de la terreur.",
    "flavorQuote": "« L’esprit d’Ogou chevauche chaque missile qui quitte ce canon pour consumer nos ennemis. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/ce/Chao_VooDoo.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2500,
      "availability": "Très Rare",
      "damage": "4d6 (Explosif)",
      "rof": 2,
      "ammo": "Smart 9mm",
      "magazine": 30,
      "concealable": true
    },
    "iz": {
      "priceCredits": 2400,
      "quality": "Streetware",
      "cybertension": 1,
      "damage": "2d6+2",
      "range": "12/24/48",
      "ap": 3,
      "weightKg": 1.2,
      "notes": "Règles SWADE : Iconique Voodoo : tire une salve de micro-projectiles autoguidés explosifs provoquant des démembrements massifs."
    },
    "tags": [
      "iconique",
      "phantom-liberty",
      "voodoo-boys",
      "ogou",
      "smart-explosif"
    ]
  },
  {
    "id": "death-and-taxes-nue",
    "name": "Death and Taxes (Pistolet de Maiko Maeda)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Tsunami Arms / Maiko Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet Nue modifié arborant une finition blanche et turquoise raffinée. Tire deux balles jumelées à chaque pression en échange d’une impulsion biotique prélevée sur la santé du porteur.",
    "flavorQuote": "« Il n’y a que deux certitudes à Night City : les taxes des corpos et la mort qui frappe à votre porte. » — Maiko Maeda",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/b/be/Nue_Maiko.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2000,
      "availability": "Rare",
      "damage": "4d6",
      "rof": 2,
      "ammo": "9mm Match",
      "magazine": 12,
      "concealable": true
    },
    "iz": {
      "priceCredits": 1800,
      "quality": "Corpware",
      "cybertension": 0,
      "damage": "2d8",
      "range": "15/30/60",
      "ap": 3,
      "weightKg": 1.2,
      "notes": "Règles SWADE : Iconique : tire 2 balles par coup consommant une seule munition, au prix d’une légère ponction de santé du porteur."
    },
    "tags": [
      "iconique",
      "maiko",
      "clouds",
      "double-coup",
      "nue"
    ]
  },
  {
    "id": "seraph-liberty-padre",
    "name": "Seraph (Pistolet Incendiaire du Padre)",
    "category": "handguns",
    "categoryLabel": "Armes de poing",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Constitutional Arms / Padre Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Pistolet Liberty gravé de prières sacrées et de symboles religieux des Valentino, offert par Sebastian « Padre » Ibarra. Ses munitions sanctifiées embrasent instantanément les pécheurs.",
    "flavorQuote": "« Que le feu du Seigneur purifie les rues corrompues de Heywood. Va en paix, mon enfant. » — Padre",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/cd/Liberty_Padre.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2000,
      "availability": "Rare",
      "damage": "3d6+2 (Incendiaire)",
      "rof": 2,
      "ammo": "9mm Incendiaire",
      "magazine": 12,
      "concealable": true
    },
    "iz": {
      "priceCredits": 1800,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d6+2",
      "range": "12/24/48",
      "ap": 2,
      "weightKg": 1.2,
      "notes": "Règles SWADE : Iconique : gravures sacrées des Valentino. Bénédiction de feu : toute balle tirée a de fortes chances d’embraser la cible."
    },
    "tags": [
      "iconique",
      "padre",
      "valentinos",
      "incendiaire",
      "heywood"
    ]
  },
  {
    "id": "arasaka-senkoh-lx",
    "name": "Arasaka Senkoh LX Tech SMG",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka Corporation",
    "origin": "Cyberpunk Wiki",
    "description": "Mitraillette Tech à haute cadence d’Arasaka. Utilisée pour le nettoyage de couloirs et la sécurité rapprochée de Corpo Plaza. Ses salves de 3 coups chargées pulvérisent le couvert.",
    "flavorQuote": "« La vitesse du rayon de lumière appliquée à la guerre urbaine d’Arasaka. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/32/Senkoh_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1000,
      "availability": "Rare",
      "damage": "3d6",
      "rof": 3,
      "ammo": "Tech 9mm",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 850,
      "quality": "Corpware",
      "cybertension": 0,
      "damage": "2d6+1",
      "range": "15/30/60",
      "ap": 3,
      "weightKg": 2.8,
      "notes": "Règles SWADE : Mitraillette Tech à haute cadence. Rafale de 3 coups chargée qui traverse les barricades de combat urbain (PA 4)."
    },
    "tags": [
      "tech",
      "senkoh",
      "arasaka",
      "rafale-rapide",
      "smg"
    ]
  },
  {
    "id": "arasaka-shigure",
    "name": "Arasaka Shigure Submachine Gun",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Arasaka Corporation",
    "origin": "Cyberpunk Wiki",
    "description": "Mitraillette d’intervention compacte standard déployée par les escadrons de sécurité Arasaka. Cadence de tir soutenue et recul remarquablement maîtrisé.",
    "flavorQuote": "« Une pluie d’automne mortelle s’abat sur quiconque ose violer la propriété corporatiste. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/ff/Saratoga_Arasaka_2077.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 500,
      "availability": "Partout",
      "damage": "2d6+2",
      "rof": 3,
      "ammo": "9mm Parabellum",
      "magazine": 32,
      "concealable": false
    },
    "iz": {
      "priceCredits": 450,
      "quality": "Corpware",
      "cybertension": 0,
      "damage": "2d6",
      "range": "12/24/48",
      "ap": 1,
      "weightKg": 2.6,
      "notes": "Règles SWADE : PM d’intervention tactique Arasaka. Cadence de tir soutenue (CdT 3), stabilité exemplaire lors des déplacements."
    },
    "tags": [
      "shigure",
      "arasaka",
      "smg",
      "cadence",
      "securite"
    ]
  },
  {
    "id": "arasaka-tki20-shingen",
    "name": "Arasaka TKI-20 Shingen Smart SMG",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Arasaka Corporation",
    "origin": "Cyberpunk Wiki",
    "description": "Mitraillette intelligente à guidage gyroscopique capable de verrouiller jusqu’à trois adversaires en simultané. Les munitions contournent le mobilier pour frapper dans le dos.",
    "flavorQuote": "« Pourquoi chercher à viser quand les micro-processeurs de bord calculent la trajectoire parfaite pour vous ? »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/ec/Shingen_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1500,
      "availability": "Rare",
      "damage": "3d6",
      "rof": 3,
      "ammo": "Smart 9mm",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1400,
      "quality": "Corpware",
      "cybertension": 1,
      "damage": "2d6",
      "range": "15/30/60",
      "ap": 2,
      "weightKg": 2.5,
      "notes": "Règles SWADE : Mitraillette intelligente à rafales de 3 coups guidées. Verrouillage instantané jusqu’à 3 cibles simultanées."
    },
    "tags": [
      "smart",
      "shingen",
      "arasaka",
      "multi-cibles",
      "guidage"
    ]
  },
  {
    "id": "prototype-shingen-mark-v",
    "name": "Prototype Shingen: Mark V (Smart Incendiaire)",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Arasaka Sub-Div Prototype",
    "origin": "Cyberpunk Wiki",
    "description": "Prototype volé dans les entrepôts industriels d’Arasaka. Tire des micro-projectiles autoguidés explosifs et incendiaires qui s’allument en plein vol pour incinérer les cibles.",
    "flavorQuote": "« Les ingénieurs d’Arasaka ont conçu l’enfer portatif. Il suffit d’appuyer sur la détente pour l’admirer. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/c9/Shingen_Prototype.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 3500,
      "availability": "Exotique",
      "damage": "3d6+2 (Explosif)",
      "rof": 3,
      "ammo": "Smart Incendiaire",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 3200,
      "quality": "Corpware",
      "cybertension": 1,
      "damage": "2d6+2",
      "range": "15/30/60",
      "ap": 3,
      "weightKg": 2.7,
      "notes": "Règles SWADE : Iconique : tire des micro-projectiles autoguidés explosifs et incendiaires provoquant des brûlures continues."
    },
    "tags": [
      "iconique",
      "prototype",
      "shingen",
      "incendiaire",
      "arasaka"
    ]
  },
  {
    "id": "budget-arms-guillotine",
    "name": "Budget Arms Guillotine",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Budget Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Mitraillette ultra-économique des bas-fonds de Night City. Composée de polymères recyclés, elle vomit du plomb à une cadence effrénée au détriment de toute précision balistique.",
    "flavorQuote": "« Pas chère, jetable, et ça fait un bruit d’enfer dans une ruelle sombre. La reine du ghetto. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/aa/Guillotine_Default.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 100,
      "availability": "Partout",
      "damage": "2d6",
      "rof": 3,
      "ammo": "9mm",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 90,
      "quality": "Gutterware",
      "cybertension": 0,
      "damage": "2d6-1",
      "range": "10/20/40",
      "ap": 0,
      "weightKg": 2.2,
      "notes": "Règles SWADE : Mitraillette bon marché des gangs de rue. Qualité Gutterware mais cadence de tir brutale (CdT 3)."
    },
    "tags": [
      "guillotine",
      "budget-arms",
      "economique",
      "ghetto",
      "smg"
    ]
  },
  {
    "id": "darra-ds1-pulsar",
    "name": "Darra Polytechnic DS1 Pulsar",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Darra Polytechnic",
    "origin": "Cyberpunk Wiki",
    "description": "Mitraillette populaire légère chambrée en 9mm, omniprésente parmi les Valentinos et les Scavengers pour les attaques éclairs en véhicule.",
    "flavorQuote": "« La pulsation du beat urbain au rythme de trente balles par seconde. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/5/55/Pulsar_Military.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 100,
      "availability": "Partout",
      "damage": "2d6+1",
      "rof": 3,
      "ammo": "9mm",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 120,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d6",
      "range": "12/24/48",
      "ap": 1,
      "weightKg": 2.4,
      "notes": "Règles SWADE : PM léger semi-automatique et automatique (CdT 3), très populaire dans les zones de non-droit."
    },
    "tags": [
      "pulsar",
      "darra",
      "smg",
      "cadence",
      "populaire"
    ]
  },
  {
    "id": "buzzsaw-pulsar",
    "name": "Buzzsaw (Pulsar Perforant Iconique)",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Darra Polytechnic / Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Version modifiée du Pulsar utilisant des cartouches d’infanterie lourdement chargées en poudre et à pointe tungstène. Coupe à travers le métal et le béton armé.",
    "flavorQuote": "« La scie circulaire balistique. Se cacher derrière un mur ne sert plus à rien. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/cb/Pulsar_Buzzsaw.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1200,
      "availability": "Rare",
      "damage": "3d6",
      "rof": 3,
      "ammo": "AP 9mm",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1100,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d6+1",
      "range": "12/24/48",
      "ap": 4,
      "weightKg": 2.5,
      "notes": "Règles SWADE : Iconique : bien qu’étant une arme cinétique classique, ses balles perforantes traversent les murs épais comme une arme Tech (PA 4)."
    },
    "tags": [
      "iconique",
      "buzzsaw",
      "perforant",
      "scie",
      "pulsar"
    ]
  },
  {
    "id": "yinglong-dian",
    "name": "Yinglong (Smart SMG EMP Iconique)",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Kang Tao Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Le chef-d’œuvre des armes intelligentes de Kang Tao. Chaque impact de balle autoguidée a une chance de déclencher une décharge IEM EMP dévastatrice grillant les circuits cybernétiques.",
    "flavorQuote": "« Le dragon de foudre céleste de la mythologie chinoise s’incarne dans cette arme d’anéantissement technologique. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/38/Dian_Yinglong.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 3000,
      "availability": "Exotique",
      "damage": "3d6+2 (EMP)",
      "rof": 3,
      "ammo": "Smart EMP 9mm",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 2800,
      "quality": "Corpware",
      "cybertension": 1,
      "damage": "2d6+2",
      "range": "15/30/60",
      "ap": 3,
      "weightKg": 2.9,
      "notes": "Règles SWADE : Iconique : génère une décharge électromagnétique (EMP) à l’impact désactivant le cybermatériel et les drones ennemis."
    },
    "tags": [
      "iconique",
      "yinglong",
      "smart",
      "emp",
      "kang-tao"
    ]
  },
  {
    "id": "problem-solver-saratoga",
    "name": "Problem Solver (Saratoga 85 Coups Iconique)",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Militech / Raffen Shiv Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Mitraillette Saratoga modifiée par les nomades hors-la-loi Raffen Shiv. Équipée d’un énorme chargeur tambour de 85 balles et d’une cadence de tir démentielle qui vide le chargeur en deux secondes.",
    "flavorQuote": "« Un problème à Night City ? Si quatre-vingt-cinq balles ne suffisent pas à le résoudre, c’est que t’étais déjà mort. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/9d/Saratoga_Raffen.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1500,
      "availability": "Très Rare",
      "damage": "3d6",
      "rof": 4,
      "ammo": "9mm Caseless",
      "magazine": 85,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1400,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d6+1",
      "range": "12/24/48",
      "ap": 2,
      "weightKg": 3.4,
      "notes": "Règles SWADE : Iconique : chargeur tambour géant de 85 coups et cadence de tir hallucinante (CdT 4). Vider un chargeur en 2 secondes."
    },
    "tags": [
      "iconique",
      "problem-solver",
      "saratoga",
      "tambour",
      "85-coups"
    ]
  },
  {
    "id": "erebus-haunted-smg",
    "name": "Erebus (SMG Hanté par le Mur Noir / Phantom Liberty)",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Militech Clandestine / Rogue AI",
    "origin": "Cyberpunk Wiki",
    "description": "Arme expérimentale clandestine habitée par une intelligence artificielle renégate issue des abysses du Mur Noir. Les tirs murmurent dans le cerveau des victimes et les consument de l’intérieur.",
    "flavorQuote": "« Ce n’est pas du métal. C’est une cage abritant une horreur numérique qui a faim de conscience humaine. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/a/ab/Borg4a_HauntedGun.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 10000,
      "availability": "Exotique",
      "damage": "4d6 (Cyber-Enfer)",
      "rof": 3,
      "ammo": "Blackwall Infused",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 12000,
      "quality": "Milware",
      "cybertension": 3,
      "damage": "2d8+2",
      "range": "15/30/60",
      "ap": 8,
      "weightKg": 3.2,
      "notes": "Règles SWADE : Iconique Mur Noir : les projectiles sont habités par des IA prédatrices qui consument le système nerveux de la cible (mort instantanée sous 33% PV, PA 8)."
    },
    "tags": [
      "iconique",
      "phantom-liberty",
      "mur-noir",
      "erebus",
      "ia-renegate"
    ]
  },
  {
    "id": "raiju-senkoh",
    "name": "Raiju (Senkoh Prototype Barghest Iconique)",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Arasaka / Barghest SpecOps",
    "origin": "Cyberpunk Wiki",
    "description": "Prototype du Senkoh modifié par les armuriers de Barghest à Dogtown. Tire en mode full automatique continu tout en conservant la capacité de transpercer les parois sans charge préalable.",
    "flavorQuote": "« La bête du tonnerre est lâchée dans Dogtown. Rien ne résiste à sa morsure électrique. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/e/e5/Senkoh_Prototype.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2500,
      "availability": "Très Rare",
      "damage": "3d6+2",
      "rof": 3,
      "ammo": "Tech 9mm",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 2200,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d6+2",
      "range": "15/30/60",
      "ap": 5,
      "weightKg": 2.9,
      "notes": "Règles SWADE : Iconique : tire en full automatique sans avoir besoin de charger l’arme pour transpercer les obstacles (PA 5). Tirs critiques accrus."
    },
    "tags": [
      "iconique",
      "phantom-liberty",
      "raiju",
      "barghest",
      "senkoh"
    ]
  },
  {
    "id": "guts-carnage-edgerunners",
    "name": "Guts (Fusil à Pompe de Rebecca / Edgerunners)",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Budget Arms / Rebecca Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Le fusil à pompe Carnage vert et rose personnalisé par Rebecca de la bande de David Martinez. Recul titanesque capable de propulser son utilisateur en arrière s’il n’est pas ancré au sol ou d’amortir une chute verticale.",
    "flavorQuote": "« Pourquoi réfléchir quand tu peux juste pulvériser tout ce qui se trouve devant ton canon ? » — Rebecca",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/2b/Carnage_Edgerunners.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2000,
      "availability": "Exotique",
      "damage": "6d6",
      "rof": 1,
      "ammo": "Calibre 4 Heavy Slug",
      "magazine": 8,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1900,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "3d6+2",
      "range": "10/20/40",
      "ap": 3,
      "weightKg": 5.5,
      "notes": "Règles SWADE : Iconique Rebecca : recul monumental projetant le tireur vers l’arrière s’il n’est pas ancré (ou amortit une chute de 10m). Dégâts dévastateurs (PA 3)."
    },
    "tags": [
      "iconique",
      "edgerunners",
      "rebecca",
      "guts",
      "pompe-monstre"
    ]
  },
  {
    "id": "mox-carnage-judy",
    "name": "Mox (Fusil à Pompe de Judy Alvarez)",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Budget Arms / Judy Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil Carnage optimisé par la spécialiste en neuro-danses Judy Alvarez. Canon scié renforcé, finition violette ornée du logo des Mox et groupement balistique serré augmentant les tirs critiques.",
    "flavorQuote": "« Les Mox ne cherchent pas la guerre, mais si quelqu’un s’en prend à une fille du Lizzie’s, voici la réponse. » — Judy Alvarez",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/db/Carnage_Mox.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1500,
      "availability": "Très Rare",
      "damage": "5d6",
      "rof": 1,
      "ammo": "Calibre 4 Mox",
      "magazine": 4,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1300,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d8+2",
      "range": "10/20/40",
      "ap": 3,
      "weightKg": 4.8,
      "notes": "Règles SWADE : Iconique Judy : canon plus court, groupement serré augmentant les dégâts critiques et le rechargement tactique rapide."
    },
    "tags": [
      "iconique",
      "judy-alvarez",
      "mox",
      "carnage",
      "lizzies"
    ]
  },
  {
    "id": "bloody-maria-tactician",
    "name": "Bloody Maria (Fusil de Dino Reyes)",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Militech / Reyes Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil Tactician customisé offert par Dino Reyes, le fixer du centre-ville. Équipé d’un étranglement d’évacuation de gaz projetant les cibles au sol dès le premier impact balistique.",
    "flavorQuote": "« Une bonne négociation corpo commence toujours avec Bloody Maria posée sur la table en acajou. » — Dino Reyes",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/8f/Tactician_Dino.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 1500,
      "availability": "Rare",
      "damage": "5d6+1",
      "rof": 1,
      "ammo": "Calibre 12 Mag",
      "magazine": 8,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1400,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d8+2",
      "range": "12/24/48",
      "ap": 3,
      "weightKg": 4.4,
      "notes": "Règles SWADE : Iconique : augmente drastiquement les chances de projeter la cible au sol et de neutraliser les assaillants d’un tir de barrage."
    },
    "tags": [
      "iconique",
      "dino-reyes",
      "tactician",
      "bloody-maria",
      "pompe-lourd"
    ]
  },
  {
    "id": "dezerter-shotgun",
    "name": "Dezerter (Fusil Double-Canon de Dogtown / Phantom Liberty)",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Rostović / Barghest Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil double-canon de fabrication néo-soviétique réusiné par les déserteurs de Barghest. Décharge ses deux tubes simultanément avec une telle énergie thermique que la cible prend feu instantanément.",
    "flavorQuote": "« Si tu abandonnes ton poste à Dogtown, assure-toi d’avoir au moins le Dezerter pour couvrir ta fuite. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/4d/Testera_Nicolas.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2500,
      "availability": "Très Rare",
      "damage": "6d6 (Double charge)",
      "rof": 1,
      "ammo": "Calibre 8 Lourd",
      "magazine": 2,
      "concealable": false
    },
    "iz": {
      "priceCredits": 2200,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "3d8",
      "range": "10/20/40",
      "ap": 4,
      "weightKg": 4.2,
      "notes": "Règles SWADE : Iconique : décharge les deux canons en même temps. Enflamme la cible à bout portant (brûlure garantie, PA 4)."
    },
    "tags": [
      "iconique",
      "phantom-liberty",
      "dezerter",
      "double-canon",
      "incendiaire"
    ]
  },
  {
    "id": "carmen-umbra-rifle",
    "name": "Carmen (Fusil d’Assaut des Barghest / Phantom Liberty)",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Midnight Arms / Barghest Mod",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil d’assaut Umbra compact allégé pour les manœuvres d’assaut rapide dans les ruines de Dogtown. Confère une précision et une cadence de tir surnaturelles lorsque l’utilisateur sprinte ou glisse.",
    "flavorQuote": "« Carmen ne demande qu’une chose : que tu ne t’arrêtes jamais de bouger. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/02/Umbra_Bebe.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 2000,
      "availability": "Rare",
      "damage": "5d6",
      "rof": 2,
      "ammo": "5.56mm",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1700,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d8+1",
      "range": "24/48/96",
      "ap": 2,
      "weightKg": 3.2,
      "notes": "Règles SWADE : Iconique : bonus de +2 aux tirs effectués en sprintant ou en glissant. Cadence de tir et précision en mouvement décuplées."
    },
    "tags": [
      "iconique",
      "phantom-liberty",
      "carmen",
      "barghest",
      "assaut-mobile"
    ]
  },
  {
    "id": "hercules-3ax-smart",
    "name": "Hercules 3AX (Fusil Smart Neurotoxique / Phantom Liberty)",
    "category": "longarms",
    "categoryLabel": "Armes d’épaule & Fusils",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Kang Tao Prototype",
    "origin": "Cyberpunk Wiki",
    "description": "Fusil d’assaut intelligent prototype développé dans les laboratoires secrets de Kang Tao. Tire des fléchettes autoguidées saturées d’acide neurotoxique qui explosent à l’impact en mares corrosives.",
    "flavorQuote": "« Les douze travaux d’Hercule réduits à une simple pression sur la détente. Les cibles fondent sur place. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/17/Hercules_Prototype.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 4000,
      "availability": "Exotique",
      "damage": "5d6 (Acide/Poison)",
      "rof": 2,
      "ammo": "Smart Neuro-Darts",
      "magazine": 30,
      "concealable": false
    },
    "iz": {
      "priceCredits": 3800,
      "quality": "Corpware",
      "cybertension": 1,
      "damage": "2d8+2",
      "range": "24/48/96",
      "ap": 4,
      "weightKg": 4.1,
      "notes": "Règles SWADE : Iconique : fléchettes intelligentes autoguidées qui explosent en flaques d’acide neurotoxique à l’impact (PA 4)."
    },
    "tags": [
      "iconique",
      "phantom-liberty",
      "hercules",
      "smart",
      "neurotoxique"
    ]
  },
  {
    "id": "ofive-grad-sniper",
    "name": "O’Five (Sniper Lourd Explosif de Buck Arnold)",
    "category": "heavy",
    "categoryLabel": "Armes Lourdes & Exotiques",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Techtronika / 6th Street Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Le fusil de sniper antimatériel lourd Grad remporté contre Buck d’Arroyo. Chambré pour des obus de calibre .50 explosifs capables d’annihiler des tourelles ou des transports blindés en deux tirs.",
    "flavorQuote": "« Si tu survis à un coup de poing de Buck, c’est que t’as pas encore goûté à son sniper O’Five. » — Buck Arnold",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/fb/Grad_Buck.png/revision/latest",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 3000,
      "availability": "Très Rare",
      "damage": "6d6+2 (Explosif)",
      "rof": 1,
      "ammo": ".50 Cal BMG Explosif",
      "magazine": 4,
      "concealable": false
    },
    "iz": {
      "priceCredits": 2700,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "2d10+2",
      "range": "50/100/200",
      "ap": 6,
      "weightKg": 8.5,
      "notes": "Règles SWADE : Iconique : chaque balle explose à l’impact (Petit Gabarit d’Explosion, PA 6). Peut détruire des véhicules blindés légers."
    },
    "tags": [
      "iconique",
      "ofive",
      "sniper-explosif",
      "buck-arnold",
      "antimateriel"
    ]
  },
  {
    "id": "breakthrough-nekomata",
    "name": "Breakthrough (Nekomata Tech Sniper Wall-Piercing)",
    "category": "heavy",
    "categoryLabel": "Armes Lourdes & Exotiques",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Tsunami Arms Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Version légendaire du sniper Nekomata perfectionnée pour percer les fortifications corporatistes les plus denses. Ses fléchettes tungstène traversent le béton armé sans aucune déperdition cinétique.",
    "flavorQuote": "« Aucune forteresse n’est imprenable quand vos balles ignorent les lois de la matière. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/6/61/Nekomata_Breakthrough.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 3500,
      "availability": "Exotique",
      "damage": "6d6",
      "rof": 1,
      "ammo": "Tech Fléchettes 6.5mm",
      "magazine": 4,
      "concealable": false
    },
    "iz": {
      "priceCredits": 3200,
      "quality": "Corpware",
      "cybertension": 0,
      "damage": "2d10+2",
      "range": "50/100/200",
      "ap": 8,
      "weightKg": 5.2,
      "notes": "Règles SWADE : Iconique : tir électromagnétique perçant n’importe quelle épaisseur de mur ou blindage lourd sans diminution de dégâts (PA 8)."
    },
    "tags": [
      "iconique",
      "breakthrough",
      "nekomata",
      "tech-sniper",
      "perce-tout"
    ]
  },
  {
    "id": "yasha-ashura-sniper",
    "name": "Yasha (Ashura Smart Sniper Rifle Élite)",
    "category": "heavy",
    "categoryLabel": "Armes Lourdes & Exotiques",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Tsunami Arms Special Edition",
    "origin": "Cyberpunk Wiki",
    "description": "Édition commémorative d’élite du fusil Ashura peinte aux couleurs blanc et pourpre impérial. Guidage par capteurs neuronaux contournant tous les obstacles balistiques pour viser la boîte crânienne.",
    "flavorQuote": "« Les démons Yasha de la mythologie ne frappaient jamais au hasard. Ce fusil non plus. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/87/Ashura_Twitch.png/revision/latest",
    "fallbackIcon": "Crosshair",
    "red": {
      "priceEb": 4000,
      "availability": "Exotique",
      "damage": "5d6+2",
      "rof": 1,
      "ammo": "Smart Sniper Gyro",
      "magazine": 1,
      "concealable": false
    },
    "iz": {
      "priceCredits": 3600,
      "quality": "Corpware",
      "cybertension": 1,
      "damage": "2d10",
      "range": "50/100/200",
      "ap": 4,
      "weightKg": 4.9,
      "notes": "Règles SWADE : Iconique : verrouillage infaillible à longue portée. Les munitions contournent le relief et atteignent directement la tête."
    },
    "tags": [
      "iconique",
      "yasha",
      "ashura",
      "smart-sniper",
      "tsunami"
    ]
  },
  {
    "id": "constitutional-arms-defender",
    "name": "Constitutional Arms Defender LMG",
    "category": "heavy",
    "categoryLabel": "Armes Lourdes & Exotiques",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Constitutional Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Mitrailleuse légère de combat d’infanterie alimentée par bande de 100 cartouches. Conçue pour offrir un tir de suppression continu écrasant lors des assauts sur positions fortifiées.",
    "flavorQuote": "« Le bruit du Defender qui crache ses cent cartouches suffit à clouer au sol la moitié d’un régiment. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/00/Constitutional_Arms_Defender_Database_CP2077.png/revision/latest",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 2000,
      "availability": "Rare",
      "damage": "5d6",
      "rof": 3,
      "ammo": "7.62mm Belt",
      "magazine": 100,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1800,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d8+1",
      "range": "30/60/120",
      "ap": 3,
      "weightKg": 7.2,
      "notes": "Règles SWADE : Mitrailleuse légère de combat. Tir Continu 3 (CdT 3). Capacité de 100 balles pour tirs de suppression soutenus."
    },
    "tags": [
      "lmg",
      "defender",
      "suppression",
      "100-balles",
      "constitutional-arms"
    ]
  },
  {
    "id": "wild-dog-defender",
    "name": "Wild Dog (LMG Custom du Colonel Hansen / Phantom Liberty)",
    "category": "heavy",
    "categoryLabel": "Armes Lourdes & Exotiques",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Constitutional Arms / Barghest Mod",
    "origin": "Cyberpunk Wiki",
    "description": "Mitrailleuse Defender suralimentée appartenant à Kurt Hansen. Son mécanisme d’échappement thermique transforme la surchauffe en cadence de tir exponentielle et en coups critiques incendiaires.",
    "flavorQuote": "« Plus vous tirez avec le Chien Sauvage, plus sa morsure devient brûlante. » — Colonel Kurt Hansen",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/d/d3/Defender_Kurt.png/revision/latest",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 4000,
      "availability": "Exotique",
      "damage": "5d6+2",
      "rof": 3,
      "ammo": "7.62mm Incendiaire",
      "magazine": 100,
      "concealable": false
    },
    "iz": {
      "priceCredits": 3800,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d8+3",
      "range": "30/60/120",
      "ap": 4,
      "weightKg": 7.8,
      "notes": "Règles SWADE : Iconique : la cadence de tir et les chances de coup critique augmentent à mesure que l’arme chauffe pendant un tir continu (PA 4)."
    },
    "tags": [
      "iconique",
      "phantom-liberty",
      "kurt-hansen",
      "wild-dog",
      "lmg"
    ]
  },
  {
    "id": "militech-mk31-hmg",
    "name": "Militech MK.31 Heavy Machine Gun (.50 BMG)",
    "category": "heavy",
    "categoryLabel": "Armes Lourdes & Exotiques",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Militech",
    "origin": "Cyberpunk Wiki",
    "description": "Mitrailleuse lourde fixe d’affût arrachable à deux mains par les soldats cybernétisés. Crache des cartouches d’infanterie lourde .50 BMG pulvérisant véhicules, murs et drones.",
    "flavorQuote": "« Si vous avez la force de l’arracher de sa tourelle, vous devenez vous-même une tourelle blindée ambulante. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/f/fe/Militech_Mk._31_HMG_Database_CP2077.png/revision/latest",
    "fallbackIcon": "Flame",
    "red": {
      "priceEb": 5000,
      "availability": "Très Rare",
      "damage": "6d6",
      "rof": 2,
      "ammo": ".50 BMG",
      "magazine": 300,
      "concealable": false
    },
    "iz": {
      "priceCredits": 4500,
      "quality": "Milware",
      "cybertension": 0,
      "damage": "2d10+2",
      "range": "40/80/160",
      "ap": 6,
      "weightKg": 18,
      "notes": "Règles SWADE : Mitrailleuse lourde d’infanterie. Nécessite Force d10 ou cyber-bras pour tirer debout sans malus (PA 6)."
    },
    "tags": [
      "hmg",
      "militech",
      "50-bmg",
      "arrachable",
      "artillerie-lourde"
    ]
  },
  {
    "id": "tsumetogi-katana",
    "name": "Tsumetogi (Katana Électrifié de Hiromi Sato)",
    "category": "melee",
    "categoryLabel": "Armes de Corps à Corps",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Tyger Claws / Arasaka Smith",
    "origin": "Cyberpunk Wiki",
    "description": "Katana de maître appartenant au boss du club Clouds. Sa lame monomoléculaire parcourue d’un courant haute tension électrocute les ennemis tout en immunisant son porteur contre les chocs.",
    "flavorQuote": "« Chaque coup délivre la foudre de Kabuki. La lame ne fait qu’un avec les éclairs de la cité. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/95/Katana_Hiromi.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 2500,
      "availability": "Rare",
      "damage": "4d6 (Électrique)",
      "rof": 2,
      "concealable": false
    },
    "iz": {
      "priceCredits": 2300,
      "quality": "Corpware",
      "cybertension": 0,
      "damage": "For+d8+3",
      "range": "CàC",
      "ap": 4,
      "weightKg": 1.4,
      "notes": "Règles SWADE : Iconique : décharges électriques continues (PA 4, Parade +1). Confère une résistance de +2 contre les dégâts électriques."
    },
    "tags": [
      "iconique",
      "tsumetogi",
      "clouds",
      "katana",
      "electrique"
    ]
  },
  {
    "id": "byakko-katana",
    "name": "Byakko (Katana de Wakako Okada)",
    "category": "melee",
    "categoryLabel": "Armes de Corps à Corps",
    "rarity": "legendary",
    "rarityLabel": "Exotique / Légendaire",
    "manufacturer": "Arasaka Ancestral / Wakako Gift",
    "origin": "Cyberpunk Wiki",
    "description": "Katana d’honneur offert par la fixer suprême de Westbrook, Wakako Okada. Équipé d’amplificateurs cinétiques permettant d’effectuer un bond d’attaque fulgurant vers la cible à portée.",
    "flavorQuote": "« Le tigre blanc rugit dans l’ombre de Japantown. Une récompense digne du meilleur mercenaire de la ville. » — Wakako Okada",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/2/20/Katana_Wakako.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 3000,
      "availability": "Exotique",
      "damage": "4d6",
      "rof": 2,
      "concealable": false
    },
    "iz": {
      "priceCredits": 2800,
      "quality": "Corpware",
      "cybertension": 0,
      "damage": "For+d8+3",
      "range": "CàC",
      "ap": 4,
      "weightKg": 1.3,
      "notes": "Règles SWADE : Iconique : permet d’effectuer un bond d’attaque de 4 mètres directement au corps à corps sans consommer de mouvement (PA 4)."
    },
    "tags": [
      "iconique",
      "byakko",
      "wakako-okada",
      "bond-assaut",
      "katana"
    ]
  },
  {
    "id": "black-unicorn-katana",
    "name": "Black Unicorn (Katana Néo-Médiéval Kaer Morhen)",
    "category": "melee",
    "categoryLabel": "Armes de Corps à Corps",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Kaer Morhen Cyber-Forge",
    "origin": "Cyberpunk Wiki",
    "description": "Katana d’acier noir forgé selon d’antiques légendes de chasseurs de monstres. Manche gravé de runes magiques et garde renforcée déviant les attaques ennemies.",
    "flavorQuote": "« L’acier pour les hommes, l’argent pour les monstres, et le chrome pour les cyberpsychos. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/c/cb/Katana_GoG.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 1500,
      "availability": "Rare",
      "damage": "3d6+2",
      "rof": 2,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1400,
      "quality": "Corpware",
      "cybertension": 0,
      "damage": "For+d8+2",
      "range": "CàC",
      "ap": 3,
      "weightKg": 1.4,
      "notes": "Règles SWADE : Iconique : lame en alliage spécial néo-médiéval augmentant la Parade de +2 et les dégâts de contre-attaque."
    },
    "tags": [
      "iconique",
      "witcher",
      "black-unicorn",
      "katana",
      "parade"
    ]
  },
  {
    "id": "scalpel-katana",
    "name": "Scalpel (Katana Chirurgical de Dennis)",
    "category": "melee",
    "categoryLabel": "Armes de Corps à Corps",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Dennis Cranmer Custom",
    "origin": "Cyberpunk Wiki",
    "description": "Katana chirurgical d’une finesse extrême. Lorsqu’il est couplé à un implant Sandevistan, sa lame vibre à haute fréquence pour trancher les artères et infliger des hémorragies fatales.",
    "flavorQuote": "« Une incision nette, propre, sans bavure. La chirurgie de combat selon Dennis. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/3/33/Katana_Surgeon.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 2000,
      "availability": "Rare",
      "damage": "4d6",
      "rof": 2,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1900,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "For+d8+3",
      "range": "CàC",
      "ap": 4,
      "weightKg": 1.2,
      "notes": "Règles SWADE : Iconique : lorsque le Sandevistan est actif, les chances de coup critique augmentent de 50% et infligent des saignements mortels."
    },
    "tags": [
      "iconique",
      "scalpel",
      "sandevistan-synergy",
      "chirurgical",
      "katana"
    ]
  },
  {
    "id": "stinger-scorpion-knife",
    "name": "Stinger (Couteau de Combat de Scorpion)",
    "category": "melee",
    "categoryLabel": "Armes de Corps à Corps",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Aldecaldo Nomads / Scorpion",
    "origin": "Cyberpunk Wiki",
    "description": "Le poignard tactique de Scorpion des Aldecaldos. Trempé dans les venins des créatures mutées des Badlands, il inflige un poison chimique débilitant à chaque estocade.",
    "flavorQuote": "« Le désert enseigne la patience, mais quand Scorpion frappait, c’était toujours mortel. » — Mitch Anderson",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/0/0b/Knife_Stinger.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 800,
      "availability": "Rare",
      "damage": "2d6+2 (Poison)",
      "rof": 2,
      "concealable": true
    },
    "iz": {
      "priceCredits": 750,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "For+d6+2",
      "range": "6/12/24",
      "ap": 3,
      "weightKg": 0.6,
      "notes": "Règles SWADE : Iconique : lame enduite de poison neurotoxique des sables. Jet de Vigueur à -2 sous peine de paralysie partielle."
    },
    "tags": [
      "iconique",
      "scorpion",
      "aldecaldos",
      "poignard",
      "poison"
    ]
  },
  {
    "id": "headhunter-punk-knife",
    "name": "Headhunter (Couteau de Lancer des Voodoo Boys)",
    "category": "melee",
    "categoryLabel": "Armes de Corps à Corps",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Voodoo Boys Forge",
    "origin": "Cyberpunk Wiki",
    "description": "Couteau d’équilibrage parfait pour le lancer à longue distance. Marque la cible touchée pour guider la prochaine attaque directement dans le crâne de la victime.",
    "flavorQuote": "« Un lancer parfait, un marqueur indélébile. La tête est déjà dans le sac. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/8/8a/Punk_Knife_Iconic.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 1000,
      "availability": "Rare",
      "damage": "3d6",
      "rof": 2,
      "concealable": true
    },
    "iz": {
      "priceCredits": 950,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "For+d6+2",
      "range": "6/12/24",
      "ap": 4,
      "weightKg": 0.7,
      "notes": "Règles SWADE : Iconique : marque la cible au premier tir. Le prochain tir dans la tête inflige des dégâts critiques doublés (PA 4)."
    },
    "tags": [
      "iconique",
      "headhunter",
      "lancer",
      "voodoo-boys",
      "critique"
    ]
  },
  {
    "id": "blue-fang-knife",
    "name": "Blue Fang (Couteau Étourdissant Neurotoxique)",
    "category": "melee",
    "categoryLabel": "Armes de Corps à Corps",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Pacifica Tech",
    "origin": "Cyberpunk Wiki",
    "description": "Poignard de combat teinté de bleu cobalt imprégné d’un anesthésiant neural instantané. En plein vol ou au contact, frapper la tête fige immédiatement l’ennemi.",
    "flavorQuote": "« Le croc bleu s’enfonce sans un cri. La proie s’effondre avant même d’avoir compris. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/1/10/Neurotoxin_Knife_Iconic.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 1000,
      "availability": "Rare",
      "damage": "2d6+2 (Stun)",
      "rof": 2,
      "concealable": true
    },
    "iz": {
      "priceCredits": 900,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "For+d6+1",
      "range": "6/12/24",
      "ap": 2,
      "weightKg": 0.5,
      "notes": "Règles SWADE : Iconique : étourdit instantanément la cible touchée à la tête pendant 1 round entier (incapacité totale d’agir)."
    },
    "tags": [
      "iconique",
      "blue-fang",
      "etourdissement",
      "pacifica",
      "lancer"
    ]
  },
  {
    "id": "budget-arms-cut-o-matic",
    "name": "Budget Arms Cut-o-Matic (Épée-Tronçonneuse)",
    "category": "melee",
    "categoryLabel": "Armes de Corps à Corps",
    "rarity": "common",
    "rarityLabel": "Commun",
    "manufacturer": "Budget Arms",
    "origin": "Cyberpunk Wiki",
    "description": "Épée-tronçonneuse industrielle alimentée par un petit moteur à combustion interne deux-temps. Ses dents en diamant synthétique broient le blindage et les chairs.",
    "flavorQuote": "« Rien de tel que le rugissement d’un moteur de tronçonneuse pour dissiper les doutes dans une rixe de bar. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/9/9a/Budget_Arms_Cut-o-Matic_Database_CP2077.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 500,
      "availability": "Partout",
      "damage": "4d6",
      "rof": 1,
      "concealable": false
    },
    "iz": {
      "priceCredits": 400,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "For+d8+3",
      "range": "CàC",
      "ap": 4,
      "weightKg": 4.8,
      "notes": "Règles SWADE : Épée-tronçonneuse à moteur. Fracasse les os et réduit les armures de 1 point à chaque coup réussi (PA 4)."
    },
    "tags": [
      "cut-o-matic",
      "tronconneuse",
      "budget-arms",
      "brutal",
      "broyage"
    ]
  },
  {
    "id": "tinker-bell-baton",
    "name": "Tinker Bell (Matraque Étourdissante de Peter Pan)",
    "category": "melee",
    "categoryLabel": "Armes de Corps à Corps",
    "rarity": "rare",
    "rarityLabel": "Rare",
    "manufacturer": "Custom Non-Lethal",
    "origin": "Cyberpunk Wiki",
    "description": "Matraque électrique télescopique modifiée avec un condensateur haute capacité qui libère une décharge neuro-musculaire plongeant instantanément la cible dans le coma.",
    "flavorQuote": "« Un coup de baguette de la fée Clochette et tout le monde s’endort sagement dans le pays imaginaire. »",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/4/42/Baton_Tinker_Bell.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 1000,
      "availability": "Rare",
      "damage": "3d6 (Non-létal)",
      "rof": 2,
      "concealable": true
    },
    "iz": {
      "priceCredits": 850,
      "quality": "Streetware",
      "cybertension": 0,
      "damage": "For+d6+2",
      "range": "CàC",
      "ap": 2,
      "weightKg": 1.1,
      "notes": "Règles SWADE : Iconique non-létal : puissante charge électrique qui plonge la cible dans l’inconscience sans infliger de blessure fatale."
    },
    "tags": [
      "iconique",
      "tinker-bell",
      "non-letal",
      "matraque",
      "choc"
    ]
  },
  {
    "id": "gold-plated-baseball-bat",
    "name": "Batte de Baseball Plaquée Or (de Denny / Kerry)",
    "category": "melee",
    "categoryLabel": "Armes de Corps à Corps",
    "rarity": "very_rare",
    "rarityLabel": "Très Rare",
    "manufacturer": "Denny Custom / Samurai",
    "origin": "Cyberpunk Wiki",
    "description": "Batte en bois d’ébène précieux plaquée d’or pur 24 carats retrouvée dans la villa de Denny. Conçue à l’origine pour fracasser le ciment coulé dans la piscine de son ex.",
    "flavorQuote": "« Le rock’n roll ne meurt jamais, et le crâne de ceux qui lui manquent de respect non plus. » — Denny",
    "imageUrl": "https://static.wikia.nocookie.net/cyberpunk/images/7/76/Baseball_Bat_Denny.png/revision/latest",
    "fallbackIcon": "Zap",
    "red": {
      "priceEb": 1200,
      "availability": "Très Rare",
      "damage": "3d6+2",
      "rof": 2,
      "concealable": false
    },
    "iz": {
      "priceCredits": 1100,
      "quality": "Hyperchrome",
      "cybertension": 0,
      "damage": "For+d8+1",
      "range": "CàC",
      "ap": 2,
      "weightKg": 1.6,
      "notes": "Règles SWADE : Iconique : batte en bois précieux plaquée or. Chance d’étourdissement et d’hémorragie interne sur coup puissant (PA 2)."
    },
    "tags": [
      "iconique",
      "denny",
      "samurai",
      "or-24k",
      "batte-baseball"
    ]
  }
];
