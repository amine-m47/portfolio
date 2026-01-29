# 🔄 Refactoring Portfolio - Page Unifiée

## Changement Principal

**Avant :** Deux pages séparées
- `competences.html` (compétences avec listes basiques)
- `projets.html` (projets avec tags génériques)
- Lien unidirectionnel faible

**Après :** Une seule page unifiée
- `portfolio.html` (nouvelle page maître)
- Navigation intelligente avec sommaire sticky
- **Liens bidirectionnels cliquables** entre compétences et projets

---

## 📋 Structure de `portfolio.html`

### 1. Sommaire Latéral (Sticky)
```
┌─────────────────┐
│   Sommaire      │
├─────────────────┤
│ Compétences     │
│ • Réseaux...    │ ← liens cliquables
│ • Sécurité...   │   avec scroll smooth
│ • Linux...      │
│               │
│ Projets         │
│ • Proxy FTP...  │ ← navigation
│ • Stage...      │   rapide
└─────────────────┘
```

### 2. Compétences Détaillées (avec ancres)
Chaque compétence affiche :
- **Titre + ID unique** (ex: `#comp-reseaux`)
- **Description concise**
- **Concepts maîtrisés** (liste détaillée)
- **Niveau** (Intermédiaire/Avancé)
- **Évolution** (comment acquis)
- ✨ **Projets liés** (boutons cliquables vers projets)

```html
<div id="comp-reseaux" class="competence-detail">
    <h3>🌐 Fondamentaux des Réseaux <span class="competence-id">COMP-RES-001</span></h3>
    <p class="competence-description">Compréhension du modèle OSI/TCP-IP</p>
    
    <div class="competence-projects">
        <a href="#proj-proxy-ftp" class="project-link">Proxy FTP</a>
        <a href="#proj-flux-reseau" class="project-link">Analyse flux réseau</a>
    </div>
</div>
```

### 3. Projets Complets (avec ancres)
Chaque projet affiche :
- **Titre + dates + organisation**
- **Description contextuelle** (2-3 phrases)
- **Détails techniques** (ce qui a été fait)
- ✨ **Compétences développées** (tags cliquables)

```html
<div id="proj-proxy-ftp" class="projet-complet">
    <h3>Proxy FTP Actif/Passif en C</h3>
    <div class="projet-meta">
        <span>📅 Décembre 2024 - Février 2025</span>
        <span>🏫 IUT Paul Sabatier</span>
    </div>
    
    <div class="projet-competences-liees">
        <a href="#comp-reseaux" class="competence-link">Fondamentaux Réseaux</a>
        <a href="#comp-firewall" class="competence-link">Sécurité Réseau</a>
        <a href="#comp-programmation" class="competence-link">Programmation C</a>
    </div>
</div>
```

---

## 🎨 Styles Spécifiques

### Ancres et ID
```css
scroll-margin-top: 100px;  /* Décalage pour navbar sticky */
```

### Liens Cliquables
- **Compétences vers Projets** : Style bleu clair (#e3f2fd)
- **Projets vers Compétences** : Style orange clair (#fff3e0)
- Effet hover : changement de couleur + animation

### Highlights
Quand tu cliques sur un lien :
1. Scroll smooth vers la cible
2. Animation flash de 2 secondes
3. Retour à la normale

```javascript
element.classList.add('highlight');
// Animation avec keyframe @highlightPulse
setTimeout(() => element.classList.remove('highlight'), 2000);
```

---

## 🔗 Navigation Améliorée

### Sommaire Dynamique
Généré automatiquement par JavaScript :
- Parcourt tous les `.competence-detail`
- Crée des liens vers `#comp-*`
- Idem pour les projets vers `#proj-*`

```javascript
const competences = document.querySelectorAll('.competence-detail');
competences.forEach(comp => {
    const id = comp.id;
    const title = comp.querySelector('h3').textContent;
    const li = document.createElement('li');
    li.innerHTML = `<a href="#${id}">${title}</a>`;
    competencesNav.appendChild(li);
});
```

### Sommaire Sticky
```css
.portfolio-nav {
    position: sticky;
    top: 100px;  /* Décalage pour navbar */
    height: fit-content;
}
```

---

## 📊 9 Compétences Détaillées

| ID | Compétence | Projets Liés |
|-----|-----------|-------------|
| COMP-RES-001 | Fondamentaux Réseaux | Proxy FTP, Analyse flux |
| COMP-RES-002 | Routage & Commutation | Architecture Cisco, Analyse flux |
| COMP-RES-003 | Firewall | Proxy FTP, Analyse flux, Sécurisation |
| COMP-SEC-001 | Cryptographie | Transfert fichiers, Sécurisation |
| COMP-SEC-002 | Admin Linux | Sécurisation, Transfert fichiers |
| COMP-SEC-003 | Virtualisation | Sécurisation |
| COMP-SEC-004 | Monitoring | Sécurisation |
| COMP-DEV-001 | Programmation | Proxy FTP, Transfert fichiers, Stage |
| COMP-SOFT-001 | Communication | Tous les projets |

---

## 🎯 7 Projets + Expériences

| ID | Projet | Durée | Compétences |
|---|--------|-------|-----------|
| proj-apprentissage | Apprentissage Fonroche | Oct 2025-Cours | Linux, Firewall, Crypto, Monitoring, Virtualisation |
| proj-stage-vitesco | Stage Vitesco | Avr-Jun 2025 | Programmation C, Sécurité, Linux, Équipe |
| proj-proxy-ftp | Proxy FTP | Déc 2024-Fév 2025 | Réseaux, Firewall, Programmation C |
| proj-transfert-fichiers | Service Transfert | Déc 2024 | Crypto, Sécurité, Permissions Linux |
| proj-flux-reseau | Analyse Flux | Nov-Déc 2024 | Réseaux, Routage, Firewall |
| proj-securisation | Sécurisation | Déc 2024 | Admin Linux, Monitoring, Virtualisation, Crypto |
| proj-architecture-cisco | Architecture Cisco | Ongoing | Routage, Protocoles, Firewall |

---

## 🔄 Transitivité Bidirectionnelle

### Flux de Navigation

**Scénario 1 : Découvrir une compétence**
1. Utilisateur clique sur "Compétences" dans sommaire
2. Voir la liste des 9 compétences
3. Cliquer sur une compétence → détails complets
4. Dans "Appliquée dans les projets" → clique sur un projet
5. Scroll vers le projet avec highlight

**Scénario 2 : Explorer un projet**
1. Utilisateur voit "Apprenti Ingénieur"
2. Clique sur tag "Administration Linux"
3. Scroll vers `#comp-linux`
4. Lire détails complets de la compétence
5. Voir "Appliquée dans les projets" → revenir au projet

---

## 📱 Responsive Design

### Desktop (768px+)
- Sommaire latéral sticky (250px)
- Contenu fluide à droite
- Gap de 2rem

### Tablette/Mobile (-768px)
- Sommaire horizontal (flexbox)
- Contenu pleine largeur
- Sommaire accessible en scroll

```css
@media (max-width: 768px) {
    .portfolio-container {
        grid-template-columns: 1fr;  /* Une colonne */
    }
    .portfolio-nav {
        position: static;  /* Plus de sticky */
        display: flex;     /* Flex layout */
        flex-wrap: wrap;   /* Multi-ligne */
    }
}
```

---

## ✨ Fonctionnalités JavaScript

### 1. Sommaire Dynamique
- Parcourt automatiquement les compétences/projets
- Crée les liens d'ancrage
- Pas de hardcoding

### 2. Navigation Active
- Détecte quelle section est visible
- Met en surbrillance le lien actif dans le sommaire
- Update au scroll

### 3. Smooth Scroll
- Tous les clics sur liens d'ancrage → scroll smooth
- Décalage de 100px pour la navbar

### 4. Highlight Animation
- Flash de 2 secondes quand on arrive sur la cible
- Retour progressif à la couleur normale
- Keyframe CSS pour les performances

---

## 🎓 Avantages Pédagogiques

### Pour le Portfolio
- ✅ **Cohérence** : une seule page pour tout
- ✅ **Transitivité** : lien bidirectionnel clair
- ✅ **Exploration** : découvrir relations compétences/projets
- ✅ **Professionnalisme** : sommaire + navigation sticky

### Pour la Présentation
- 🎤 Montrer un projet → "Voici les compétences développées" → clic → détails
- 🎤 Expliquer une compétence → "Elle est appliquée ici" → clic → projet

### Pour les Recruteurs
- 👁️ Voir rapidement toutes les compétences
- 👁️ Vérifier que chaque compétence est appliquée
- 👁️ Naviguer facilement entre détails

---

## 📝 Contenu des Compétences

Chaque compétence inclut :

1. **Titre + Emoji** (visuel)
2. **ID unique** (référence)
3. **Description courte** (contexte)
4. **Concepts maîtrisés** (liste de 3-5 points)
5. **Niveau** (Avancé, Intermédiaire, etc.)
6. **Évolution** (comment / quand acquis)
7. **Projets liés** (boutons cliquables)

---

## 📝 Contenu des Projets

Chaque projet inclut :

1. **Titre + Dates + Lieu** (en-tête)
2. **Description contextuelle** (2-3 phrases)
3. **Détails techniques** (ce qui a été fait)
4. **Compétences développées** (tags cliquables)

---

## 🚀 Prochaines Améliorations

1. **Filtrer par compétence** : Bouton pour montrer uniquement projets avec "Linux"
2. **Timeline visuelle** : Chronologie des projets avec dates
3. **Statistiques** : Graphiques en radar des compétences (avec Chart.js)
4. **Animations avancées** : Parallax, revealOnScroll amélioré
5. **Thème dark** : Toggle pour mode sombre
6. **Impression** : PDF généré depuis la page

---

## 📚 Fichiers Modifiés

- ✅ **portfolio.html** (nouveau - 500+ lignes)
- ✅ **index.html** (liens mis à jour)
- ✅ **cv.html** (navigation mise à jour)
- ✅ **contact.html** (navigation mise à jour)
- ✅ **competences.html** (ancien - peut être supprimé)
- ✅ **projets.html** (ancien - peut être supprimé)

---

**Tu peux maintenant tester la navigation avec les clics sur les compétences/projets ! 🎯**
