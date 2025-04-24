# LineUp - Frontend

Application web moderne construite avec React, TypeScript et Vite.

## 🚀 Technologies utilisées

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Mantine UI
- Zustand (Gestion d'état)
- React Router DOM
- Axios

## 📋 Prérequis

- Node.js (version recommandée : >= 18)
- npm ou yarn

## 🛠️ Installation

1. Clonez le dépôt :
```bash
git clone [url-du-repo]
cd lineup-front
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn
```

3. Créez un fichier `.env` à la racine du projet avec les variables suivantes :
```
VITE_API_URL=http://localhost:3000/api
```

## 🖥️ Commandes disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile le projet pour la production
- `npm run lint` : Vérifie le code avec ESLint
- `npm run preview` : Prévisualise la version de production en local

## 📁 Structure du projet

```
src/
├── assets/         # Ressources statiques
├── core/           # Logique métier
│   ├── domain/    # Entités et modèles
│   ├── infrastructure/  # Services et configuration
│   └── useCases/  # Logique applicative et hooks
└── presentation/  # Composants UI
    ├── components/ # Composants réutilisables
    ├── layouts/    # Layouts de l'application
    └── pages/      # Pages de l'application
```

## 🔒 Fonctionnalités

- Authentification utilisateur
- Gestion des configurations
- Interface responsive
- Gestion des tickets
- Statistiques et tableaux de bord

## 🌐 Configuration de l'API

L'application se connecte à une API REST définie dans le fichier `.env`. Assurez-vous que l'API est en cours d'exécution sur le port spécifié.

## 👥 Contribution

1. Créez une branche (`git checkout -b feature/amelioration`)
2. Committez vos changements (`git commit -m 'feat: Ajout d'une nouvelle fonctionnalité'`)
3. Poussez vers la branche (`git push origin feature/amelioration`)
4. Ouvrez une Pull Request

## 📝 License

MIT