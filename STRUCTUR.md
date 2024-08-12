my-project/
├── public/                         # Fichiers publics, accessibles directement depuis l'URL
│   ├── index.html                  # Fichier HTML principal
│   └── favicon.ico                 # Favicon du site
├── src/                            # Source principale du frontend
│   ├── assets/                     # Fichiers statiques (images, polices, etc.)
│   ├── components/                 # Composants réutilisables de l'UI
│   │   ├── Button.jsx
│   │   └── ...
│   ├── hooks/                      # Custom React hooks
│   │   └── useAuth.js              # Hook pour l'authentification
│   ├── layouts/                    # Layouts pour structurer les pages
│   │   ├── MainLayout.jsx
│   │   └── ...
│   ├── pages/                      # Pages principales de l'application
│   │   ├── Home.jsx
│   │   ├── Battle.jsx
│   │   └── ...
│   ├── styles/                     # Fichiers de style (CSS/Tailwind)
│   │   └── tailwind.css            # Configuration principale de Tailwind
│   ├── utils/                      # Utilitaires JavaScript
│   │   ├── supabaseClient.js       # Configuration du client Supabase
│   │   ├── blockchain.js           # Interaction avec les smart contracts Ethereum/Polygon
│   │   └── ...
│   ├── App.jsx                     # Composant principal de l'application
│   ├── main.jsx                    # Point d'entrée de l'application
│   └── index.css                   # Styles globaux
├── blockchain/                     # Fichiers liés à la blockchain
│   ├── contracts/                  # Smart contracts (Solidity)
│   │   ├── BattleContract.sol
│   │   └── ...
│   ├── scripts/                    # Scripts pour le déploiement et les interactions avec la blockchain
│   │   ├── deploy.js
│   │   └── interact.js
│   ├── artifacts/                  # Artefacts générés après la compilation des contrats
│   └── hardhat.config.js           # Configuration de Hardhat (ou Truffle)
├── backend/                        # Backend (API, gestion des données, etc.)
│   ├── functions/                  # Fonctions Serverless ou API routes
│   │   └── getBattleStats.js
│   ├── models/                     # Modèles de données pour PostgreSQL
│   │   └── battle.js
│   ├── services/                   # Services pour l'accès aux données (ex: Supabase)
│   │   └── battleService.js
│   ├── supabase/                   # Scripts de configuration et migration de la base de données
│   │   ├── schema.sql
│   │   └── migrations/
│   └── index.js                    # Point d'entrée du backend (par exemple, Express.js)
├── .env                            # Variables d'environnement
├── package.json                    # Dépendances et scripts NPM
├── tailwind.config.js              # Configuration Tailwind
├── postcss.config.js               # Configuration PostCSS
├── vite.config.js                  # Configuration de Vite
├── hardhat.config.js               # Configuration de Hardhat pour la blockchain
├── README.md                       # Documentation du projet
└── tsconfig.json                   # Configuration TypeScript (si TypeScript est utilisé)
