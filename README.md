
# React + Vite - Projet Liste de Tâches

Ce modèle fournit une configuration minimale pour faire fonctionner React dans Vite avec HMR (Hot Module Replacement) et quelques règles ESLint, en plus d'introduire une simple application de liste de tâches.

## Plugins Officiels

Actuellement, deux plugins officiels sont disponibles :

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utilise [Babel](https://babeljs.io/) pour le Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utilise [SWC](https://swc.rs/) pour le Fast Refresh.

## Fonctionnalité de la Liste de Tâches

Cette application React utilise les hooks et la gestion d'état pour créer et gérer une liste de tâches. Les utilisateurs peuvent ajouter de nouvelles tâches, les voir s'afficher dans une liste, et les supprimer individuellement.

### Composant `App`

Le composant `App` est le composant principal qui gère l'état de la liste des tâches, permettant aux utilisateurs d'ajouter de nouvelles tâches via un formulaire et de les afficher dans une liste. Chaque tâche est unique grâce à l'utilisation de l'ID généré par `nanoid`.

### Composant `ListItem`

Le composant `ListItem` affiche individuellement chaque tâche avec un bouton pour supprimer cette tâche de la liste. Il reçoit les données de l'élément (`itemData`) et une fonction de suppression (`deleteTodo`) comme props du parent `App`.

## Comment Démarrer

1. Clonez ce dépôt.
2. Installez les dépendances en exécutant `npm install`.
3. Lancez le projet en mode développement avec `npm run dev`.
4. Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l'application dans votre navigateur.
