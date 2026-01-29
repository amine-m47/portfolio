#!/bin/bash
# Script pour initialiser le portfolio sur Git
# À exécuter une seule fois

# Initialiser le repository Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit: Portfolio professionnel Amine Mahmoudy

- Page d'accueil avec présentation
- Pages compétences détaillées
- Pages projets académiques et professionnels
- CV en ligne et téléchargeable
- Page de contact avec formulaire
- Design responsive et professionnel
- Menu sticky et navigation intuitive"

# Instructions pour l'utilisateur
echo "✅ Repository initialisé avec succès!"
echo ""
echo "Prochaines étapes:"
echo "1. Créer un repository sur GitHub"
echo "2. Ajouter le remote: git remote add origin https://github.com/amine-mahmoudy/portfolio.git"
echo "3. Pousser les changements: git push -u origin main"
echo ""
echo "🎉 Votre portfolio sera alors en ligne!"
