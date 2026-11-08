# SWADE Interface Zero - Générateur Cyberpunk

Générateur et gestionnaire de personnages cyberpunk pour **Savage Worlds Adventure Edition (SWADE)** et **Interface Zero 2.0 / 3.0**.

## 🚀 Déploiement sur GitHub Pages

L'application est 100% prête pour GitHub Pages avec :
- Chemins relatifs automatiques (`base: './'`) compatibles avec tous les sous-dossiers de dépôts (`https://<username>.github.io/<repo>/`).
- Workflow GitHub Actions prêt à l'emploi (`.github/workflows/deploy.yml`).
- Support de l'historique et des routes avec `404.html` et `.nojekyll`.

### Étapes d'activation sur GitHub :
1. Poussez ce projet sur votre dépôt GitHub (`git push origin main`).
2. Rendez-vous sur votre dépôt GitHub dans **Settings** > **Pages**.
3. Dans la section **Build and deployment** :
   - Sous **Source**, sélectionnez **GitHub Actions**.
4. Le workflow se lance automatiquement à chaque `push` sur la branche `main` (ou `master`) et déploie le site en quelques secondes !

---

## 🛠️ Développement Local

```bash
# Installation des dépendances
npm install

# Démarrer le serveur de développement (port 3000)
npm run dev

# Compiler le projet pour la production (génère dist/ avec 404.html et .nojekyll)
npm run build

# Prévisualiser la version de production localement
npm run preview
```

---

## 🎮 Fonctionnalités Principales

- **Génération Aléatoire & Procédurale** :
  - 16 archétypes officiels (Rônin, Hacker, Chasseur de primes, Pilote de drone, Ex-soldat, Cybermoine, etc.).
  - 11 espèces et transhumains (Humain 2.0, Androïdes, Cyborgs, Hybrides, Simulacres).
  - 4 niveaux de puissance avec budgets dédiés au matos et aux implants.
- **Calculs des Traits Dérivés en Temps Réel** :
  - Allure (Pace), Parade (Parry), Résistance (Toughness avec décomposition de l'armure).
  - Jauge de Cybertension (Strain) selon la qualité du matériel (*Gutterware*, *Streetware*, *Hyperchrome*, *Milware*).
  - Firewall TAP, Street Cred, gestion des Blessures, Fatigue et Jetons (Bennies).
- **Catalogue & Matrice d'Équipement** :
  - Implants, armes balistiques/énergétiques, armures, accessoires, drones.
- **Export PDF Remplissable (AcroForm)** :
  - Génère une fiche officielle interactive 2 pages éditable dans Adobe Acrobat, Preview, Chrome, etc.
- **Sauvegarde Multi-Builds** :
  - Gestion de multiples fiches en simultané dans `localStorage` avec export/import JSON.
