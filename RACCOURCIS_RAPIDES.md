🚀 RACCOURCIS RAPIDES - Portfolio Amine Mahmoudy
=================================================

Localisation : c:\BUT\s5\Portfolio\portfolio-site\


⚡ ACTIONS RAPIDES
===================

1️⃣ LANCER LE SITE LOCALEMENT

Option A : Double-clic sur index.html
  → Ouvre le site dans le navigateur par défaut

Option B : Terminal Python
  cd c:\BUT\s5\Portfolio\portfolio-site
  python -m http.server 8000
  → Ouvrir http://localhost:8000

Option C : Drag & Drop
  → Traîner index.html dans le navigateur


2️⃣ MODIFIER DU CONTENU RAPIDE

Modifier la page d'accueil :
  → Ouvrir index.html
  → Chercher "Découvrir mes compétences"
  → Modifier le texte
  → Ctrl+S
  → F5 (refresh navigateur)

Modifier les compétences :
  → Ouvrir competences.html
  → Chercher la section souhaitée
  → Modifier la liste ou description
  → Ctrl+S
  → F5

Modifier les projets :
  → Ouvrir projets.html
  → Chercher le projet
  → Changer la description
  → Ctrl+S
  → F5

Modifier le CV :
  → Ouvrir cv.html
  → Chercher la section "EXPÉRIENCE" par exemple
  → Ajouter/modifier les infos
  → Ctrl+S
  → F5


3️⃣ AJOUTER TES IMAGES

Photo de profil :
  1. Préparer une photo 300x300px JPG ou PNG
  2. La renommer "profile.jpg"
  3. La mettre dans : assets/images/profile.jpg
  4. Rafraîchir la page (F5)
  → Elle s'affichera automatiquement !

CV en PDF :
  1. Exporter ton CV depuis Word/LibreOffice en PDF
  2. La renommer "cv_amine_mahmoudy.pdf"
  3. La mettre dans : assets/cv/cv_amine_mahmoudy.pdf
  4. Tester le bouton "Télécharger le PDF"
  → Il téléchargera le fichier !


4️⃣ METTRE À JOUR GIT

Après avoir fait des modifications :

  git status
  → Voir les fichiers modifiés

  git add .
  → Ajouter tous les changements

  git commit -m "Description du changement"
  → Créer un commit
  → Ex : "Ajouter photo de profil"

  git push origin main
  → Envoyer vers GitHub
  → Voir les changements en ligne après quelques sec


5️⃣ TESTER LES PERFORMANCES

Ouvrir DevTools : F12 ou Ctrl+Shift+I

Onglet "Lighthouse" :
  → Cliquer "Analyze page load"
  → Voir le score (target: > 80)
  → Identifier les problèmes

Onglet "Console" :
  → Vérifier qu'il n'y a pas d'erreurs rouges
  → Aider à déboguer

Onglet "Network" :
  → Voir la taille du chargement
  → Identifier les fichiers lents
  → Tester la vitesse

Onglet "Responsive Design" (Ctrl+Shift+M) :
  → Tester sur différentes tailles
  → Mobile (320px), Tablet (768px), Desktop


6️⃣ VÉRIFIER LES LIENS

Pour chaque page, cliquer sur :
  ✓ Logo AM (retour accueil)
  ✓ Accueil dans le menu
  ✓ Compétences dans le menu
  ✓ Projets dans le menu
  ✓ CV dans le menu
  ✓ Contact dans le menu
  ✓ Boutons CTA
  ✓ Liens sociaux (LinkedIn, GitHub)
  ✓ Footer


7️⃣ ORTHOGRAPHE & GRAMMAIRE

Outils recommandés :
  • Antidote (payant, excellent)
  • Grammarly (gratuit web)
  • LanguageTool (gratuit)
  • Word (simple mais basique)

Points à vérifier :
  [ ] Pas d'accents manquants
  [ ] Pas de "et cetera" (écrire "etc")
  [ ] Pas d'espaces avant ponctuation (sauf : ; ? !)
  [ ] Cohérence majuscules/minuscules
  [ ] Pas de répétitions de mots


8️⃣ OPTIMISATIONS RAPIDES

Ajouter favicon :
  1. Créer une petite image 32x32px (ICO ou PNG)
  2. La renommer "favicon.ico"
  3. La mettre dans assets/images/
  4. Ajouter à index.html dans <head> :
     <link rel="icon" href="assets/images/favicon.ico">

Ajouter meta description :
  1. Ouvrir chaque HTML
  2. Ajouter dans <head> :
     <meta name="description" content="Mon description">

Minifier CSS/JS (optionnel) :
  1. Copier le contenu de styles.css
  2. Aller sur https://cssnano.co/
  3. Coller le code, copier la version minifiée
  4. Remplacer le contenu dans styles.css


9️⃣ TROUBLESHOOTING RAPIDE

Les images ne s'affichent pas :
  → Vérifier le chemin (assets/images/...)
  → Vérifier les majuscules/minuscules
  → Vider le cache (Ctrl+Shift+Delete)
  → F5 pour rafraîchir

Le CSS ne s'applique pas :
  → Vérifier que styles.css existe
  → F5 puis Ctrl+F5 (hard refresh)
  → Vérifier la console (F12)

Le formulaire ne fonctionne pas :
  → C'est normal ! Il ouvre le client email
  → Pour un vrai backend, voir GUIDE_AMELIORATIONS.md

Les liens ne fonctionnent pas :
  → Vérifier que les fichiers .html existent
  → Vérifier l'orthographe du lien
  → Utiliser des chemins relatifs

Le menu est cassé :
  → Rafraîchir (F5)
  → Vérifier la console (F12 → Console)
  → Réinstaller script.js si besoin


🔟 PARTAGER LE PORTFOLIO

Une fois en ligne :

Par email :
  Bonjour,
  Voici mon portfolio professionnel : [URL]
  N'hésitez pas à le consulter !
  Cordialement,
  Amine

Sur LinkedIn :
  "J'ai créé mon portfolio professionnel ! 
  Découvrez mes compétences en sécurité systèmes & réseaux
  ainsi que mes projets académiques et professionnels.
  [Lien vers le site]"

En entretien :
  "Je vous ai préparé une présentation de mon profil [montrer le site]"

En candidature :
  "Vous trouverez plus de détails sur mon portfolio à [URL]"


⏰ PLANNING SUGGÉRÉ
===================

Jour 1 (Aujourd'hui) :
  [ ] Ajouter photo de profil
  [ ] Ajouter CV PDF
  [ ] Tester localement

Jour 2 :
  [ ] Initialiser Git
  [ ] Créer repo GitHub
  [ ] Pousser le code

Jour 3 :
  [ ] Activer GitHub Pages OU déployer sur Netlify
  [ ] Vérifier le site en ligne
  [ ] Partager le lien

Avant S6 :
  [ ] Mettre à jour régulièrement
  [ ] Ajouter nouveaux projets
  [ ] Préparer ta présentation orale
  [ ] Faire une démo fluide


📊 CHECKLIST AVANT DÉPLOIEMENT
================================

Contenu :
  [ ] Photo de profil présente
  [ ] CV PDF téléchargeable
  [ ] Pas de texte generic
  [ ] Orthographe vérifiée
  [ ] Liens à jour

Design :
  [ ] Responsive testé
  [ ] Couleurs cohérentes
  [ ] Polices correctes
  [ ] Espacements réguliers
  [ ] Pas de rupture visuelle

Fonctionnalité :
  [ ] Tous les liens fonctionnent
  [ ] Formulaire validé
  [ ] Pas d'erreurs console (F12)
  [ ] Animations fluides
  [ ] Menu fonctionne

Performance :
  [ ] Lighthouse > 80
  [ ] Chargement < 2s
  [ ] Pas de requêtes non-essentielles
  [ ] Images optimisées

SEO (optionnel) :
  [ ] Meta description
  [ ] Favicon
  [ ] Alt text sur images
  [ ] Sitemap.xml


📞 SUPPORT RAPIDE
==================

Erreur : "404 Not Found"
  → Vérifier que le fichier existe
  → Vérifier l'orthographe du chemin
  → Rafraîchir la page

Erreur : "Uncaught SyntaxError"
  → Vérifier le code JavaScript
  → Chercher les accolades manquantes
  → Aller sur la ligne indiquée

Erreur : "Failed to load resource"
  → Le fichier n'est pas trouvé
  → Vérifier le chemin
  → Vérifier que le fichier existe

Problème : "Site lent"
  → Compresser les images
  → Minifier CSS/JS
  → Réduire les requêtes externes
  → Utiliser cache navigateur


🎯 PRIORITÉS
=============

Ordre de importance :

1️⃣ CRITIQUE (Faire immédiatement)
   [ ] Ajouter photo
   [ ] Ajouter CV PDF
   [ ] Vérifier tous les liens

2️⃣ IMPORTANT (Avant déploiement)
   [ ] Tester sur mobile
   [ ] Vérifier orthographe
   [ ] Initialiser Git

3️⃣ RECOMMANDÉ (Après déploiement)
   [ ] Ajouter Google Analytics
   [ ] Ajouter favicon
   [ ] Domaine personnalisé

4️⃣ OPTIONNEL (Plus tard)
   [ ] Mode sombre
   [ ] Blog technique
   [ ] Galerie projets


💡 PRO TIPS
===========

Utiliser les DevTools :
  F12 = meilleur ami du développeur
  → Déboguer rapidement
  → Tester responsive
  → Vérifier performances
  → Inspecter éléments

Utiliser Git efficacement :
  git log → voir l'historique
  git diff → voir les changements
  git revert → annuler un commit
  git branch → créer des branches

Tester en production :
  → Toujours tester avant de pousser
  → Vérifier sur vraie connexion
  → Tester sur différents appareils
  → Vérifier sur différents navigateurs

Garder le code propre :
  → Indenter correctement
  → Commenter le code complexe
  → Nommer les variables clairement
  → Supprimer le code inutile


═══════════════════════════════════════════════════════════════

Documentation complète disponible :
  • README.md - Vue d'ensemble
  • DEPLOIEMENT.md - Guide détaillé
  • GUIDE_AMELIORATIONS.md - Idées futures
  • CHECKLIST.md - Points de vérification

Questions ? Consulte ces fichiers !

Bon développement ! 🚀
