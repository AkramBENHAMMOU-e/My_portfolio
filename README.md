# Portfolio - Développeur Software & IA

Portfolio professionnel avec design "Clean & Corporate" minimaliste et moderne.

## Technologies utilisées

- **Vite** - Build tool rapide
- **TypeScript** - Typage statique
- **React** - Bibliothèque UI
- **React Router** - Routing
- **shadcn-ui** - Composants UI
- **Tailwind CSS** - Styling
- **Inter Font** - Typographie moderne

## Déveloiement sur Vercel

Le projet est configuré et prêt pour le déploiement sur Vercel.

### Déploiement automatique

1. **Via GitHub/GitLab/Bitbucket** :
   - Connectez votre dépôt à Vercel
   - Vercel détectera automatiquement le framework Vite
   - Le déploiement se lancera automatiquement

2. **Via Vercel CLI** :
   ```bash
   npm i -g vercel
   vercel
   ```

### Configuration

Le fichier `vercel.json` configure :
- ✅ Build command : `npm run build`
- ✅ Output directory : `dist`
- ✅ Rewrites pour React Router (SPA)
- ✅ Cache des assets statiques

### Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run start` - Alias pour `npm run dev`
- `npm run build` - Build de production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Lance ESLint

### Variables d'environnement

Aucune variable d'environnement requise pour ce projet.

### Structure du projet

```
src/
├── components/     # Composants React
├── pages/         # Pages de l'application
├── hooks/         # Hooks personnalisés
├── lib/           # Utilitaires
└── assets/        # Images et ressources statiques
```
