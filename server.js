const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

// Activer la compression pour toutes les réponses textuelles
app.use(compression());

// Définir le répertoire des fichiers statiques
app.use(express.static(path.join(__dirname, 'build')));

// Configurer les en-têtes de cache pour les images WebP
app.get('*.webp', (req, res, next) => {
  res.setHeader('Cache-Control', 'max-age=31536000, public');
  next();
});

// Configurer les en-têtes de cache pour les fichiers CSS
app.get('*.css', (req, res, next) => {
  res.setHeader('Cache-Control', 'max-age=31536000, public');
  next();
});

// Gérer toutes les autres routes pour servir l'application React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});