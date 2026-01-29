# 📖 Guide de Déploiement - Portfolio sur GitHub

Ce guide te montrera comment mettre ton portfolio en ligne sur GitHub Pages ou tout autre plateforme.

## 🎯 Étape 1 : Initialiser le Repository Git Localement

### Ouvrir un terminal/PowerShell dans le dossier portfolio-site

```powershell
# Se placer dans le dossier du portfolio
cd C:\BUT\s5\Portfolio\portfolio-site

# Initialiser Git
git init

# Configurer ton identité Git (une seule fois)
git config user.name "Amine Mahmoudy"
git config user.email "amine.mahmoudy@gmail.com"

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit: Portfolio professionnel"
```

## 🐙 Étape 2 : Créer un Repository sur GitHub

1. **Aller sur GitHub** : https://github.com
2. **Se connecter** ou **créer un compte**
3. **Cliquer** sur le "+" en haut à droite → "New repository"
4. **Nommer le repository** : `portfolio`
5. **Description** (optionnel) : "Mon portfolio professionnel"
6. **Cocher** "Public" (pour que le site soit accessible)
7. **Laisser** "Initialize this repository with..." unchecked
8. **Cliquer** sur "Create repository"

## 🔗 Étape 3 : Connecter Local à GitHub

Après avoir créé le repository, GitHub t'affichera des instructions. Utilise ces commandes :

```powershell
# Ajouter le remote (remplacer par ton URL GitHub)
git remote add origin https://github.com/amine-mahmoudy/portfolio.git

# Renommer la branche si nécessaire
git branch -M main

# Pousser les fichiers vers GitHub
git push -u origin main
```

## 🚀 Étape 4 : Activer GitHub Pages

### Option 1 : GitHub Pages (Gratuit)

1. **Aller** dans "Settings" du repository
2. **Sélectionner** "Pages" (dans le menu de gauche)
3. **Source** : Choisir "Deploy from a branch"
4. **Branch** : Sélectionner `main` et `/root`
5. **Cliquer** sur "Save"
6. **Attendre** quelques minutes
7. **Ton site sera accessible** à : `https://amine-mahmoudy.github.io/portfolio`

### Option 2 : Netlify (Recommandé, très simple)

1. **Aller** sur https://www.netlify.com
2. **Se connecter** avec GitHub
3. **Cliquer** "New site from Git"
4. **Autoriser** Netlify à accéder à tes repositories
5. **Sélectionner** le repository "portfolio"
6. **Laisser** les paramètres par défaut
7. **Cliquer** "Deploy site"
8. **Ton site sera accessible** à : `https://[random-name].netlify.app`

### Option 3 : Vercel (Très rapide)

1. **Aller** sur https://vercel.com
2. **Se connecter** avec GitHub
3. **Cliquer** "New Project"
4. **Importer** le repository "portfolio"
5. **Cliquer** "Deploy"
6. **Ton site sera en ligne** en quelques secondes !

## 📝 Étape 5 : Configurer un Domaine Personnalisé (Optionnel)

### Acheter un domaine

- Providers populaires : **OVH**, **Ionos**, **Namecheap**, **GoDaddy**
- Budget : ~10€/an pour .fr

### Lier le domaine à GitHub Pages

1. **Dans GitHub** : Settings → Pages
2. **Custom domain** : Entrer ton domaine
3. **Ajouter un certificat SSL** (c'est gratuit et automatique)

### Exemple pour Netlify

1. **Dans Netlify** : Site settings → Domain management
2. **Ajouter un domaine personnalisé**
3. **Configurer les DNS** selon les instructions

## 🔄 Étape 6 : Mettre à Jour le Portfolio

À chaque modification :

```powershell
# Voir les fichiers modifiés
git status

# Ajouter les changements
git add .

# Créer un commit
git commit -m "Description de la modification"

# Pousser vers GitHub
git push origin main
```

### Exemples de messages de commit

```powershell
git commit -m "Add project images and descriptions"
git commit -m "Update CV with new experience"
git commit -m "Improve mobile responsiveness"
git commit -m "Fix typos in competences page"
git commit -m "Optimize images for better performance"
```

## 📋 Checklist de Déploiement

Avant de pousser sur GitHub :

- [ ] ✅ Ajouter la **photo de profil** dans `assets/images/profile.jpg`
- [ ] ✅ Ajouter le **CV PDF** dans `assets/cv/cv_amine_mahmoudy.pdf`
- [ ] ✅ Vérifier **tous les liens** (internes et externes)
- [ ] ✅ Tester le site en **local** (ouvrir index.html)
- [ ] ✅ Vérifier **l'orthographe** et la grammaire
- [ ] ✅ Tester sur **mobile** et **tablet**
- [ ] ✅ Vérifier les **performances** (F12 → Lighthouse)

## 🧪 Tester le Site Localement

Avant de le pousser en ligne :

### Avec Python
```powershell
# Python 3.x
python -m http.server 8000

# Puis ouvrir http://localhost:8000
```

### Avec Node.js
```powershell
# Installer http-server (une seule fois)
npm install -g http-server

# Lancer le serveur
http-server

# Puis ouvrir http://localhost:8080
```

### Diriger un navigateur
- Firefox/Chrome/Edge : Appuyer sur `F12` pour ouvrir les DevTools
- Vérifier la console pour les erreurs
- Tester le responsive design (F12 → Device toolbar)

## 🔍 Vérifier que Tout Fonctionne

Après le déploiement :

1. **Accéder** au site depuis l'URL publique
2. **Vérifier** que tous les liens fonctionnent
3. **Tester** la navigation sur mobile
4. **Envoyer** un email via le formulaire de contact
5. **Vérifier** que les images s'affichent

## 📞 En Cas de Problème

### Le site ne s'affiche pas
- Vérifier que le deployment sur GitHub Pages est activé
- Attendre 5 minutes (le déploiement peut prendre du temps)
- Vérifier dans Settings → Pages que le déploiement est réussi

### Les images ne s'affichent pas
- Vérifier que `assets/images/profile.jpg` existe
- Vérifier les chemins des images (case sensitive sur Linux)
- Utiliser des chemins relatifs : `assets/images/...` (pas `./assets/...`)

### Le formulaire de contact ne fonctionne pas
- C'est normal ! Il ouvre juste le client email par défaut
- Pour un vrai backend, voir GUIDE_AMELIORATIONS.md

### Les styles ne s'affichent pas correctement
- Vider le cache : Ctrl+Shift+Delete
- Ou appuyer sur Ctrl+F5 pour forcer le rechargement
- Vérifier que `assets/css/styles.css` existe

## 🎓 Ressources Utiles

### Git & GitHub
- GitHub Hello World : https://guides.github.com/activities/hello-world/
- Git Cheat Sheet : https://git-scm.com/docs

### Déploiement
- GitHub Pages : https://pages.github.com
- Netlify : https://www.netlify.com
- Vercel : https://vercel.com

### Domaines
- OVH : https://www.ovh.com/fr/domaines/
- Ionos : https://www.ionos.fr/domaines
- Namecheap : https://www.namecheap.com

## 💡 Astuces Professionnelles

1. **Ajouter un badge au README**
   ```markdown
   [![Netlify Status](https://api.netlify.com/api/v1/badges/...)](https://app.netlify.com/sites/your-site/)
   ```

2. **Configurer un CNAME** pour GitHub Pages
   - Créer un fichier `CNAME` avec le domaine
   - Ajouter : `mon-portfolio.com`

3. **Ajouter un fichier .github/workflows** pour CI/CD
   - Déploiement automatique à chaque push
   - Vérification des tests avant déploiement

4. **Utiliser des branches** pour les expériences
   ```powershell
   git checkout -b nouvelle-feature
   # Faire les modifications
   git add .
   git commit -m "New feature"
   git push origin nouvelle-feature
   # Puis créer une Pull Request sur GitHub
   ```

## ✨ Prochaines Étapes

1. ✅ Initialiser Git localement
2. ✅ Créer le repository GitHub
3. ✅ Pousser le code
4. ✅ Activer GitHub Pages ou Netlify
5. ✅ Vérifier que le site fonctionne
6. ✅ Configurer un domaine personnalisé (optionnel)
7. ✅ Ajouter Google Analytics (optionnel)
8. ✅ Mettre à jour régulièrement

---

**Besoin d'aide ?** Consulte le README.md ou le GUIDE_AMELIORATIONS.md !

**Bon déploiement ! 🚀**
