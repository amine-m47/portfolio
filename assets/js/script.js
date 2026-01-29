// ===== NAVBAR ACTIVE STATE =====
document.addEventListener('DOMContentLoaded', function() {
    // Mettre à jour le lien actif dans la navbar
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-menu a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== MOBILE MENU TOGGLE =====
const navToggle = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.navbar-menu');

if (navToggle) {
    navToggle.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.navbar-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.style.display = 'none';
        });
    });
}

// ===== INTERSECTION OBSERVER POUR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les cartes
document.querySelectorAll('.competence-card, .projet-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// ===== COPY EMAIL TO CLIPBOARD =====
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Email copié dans le presse-papiers !');
    });
}

// ===== RESPONSIVE NAVBAR =====
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navMenu) {
        navMenu.style.display = 'flex';
    }
});

// ===== SCROLL TO TOP =====
window.addEventListener('scroll', function() {
    const scrollTop = document.querySelector('.scroll-top');
    if (!scrollTop && window.scrollY > 300) {
        const btn = document.createElement('button');
        btn.textContent = '↑';
        btn.className = 'scroll-top';
        btn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 50%;
            width: 45px;
            height: 45px;
            cursor: pointer;
            z-index: 999;
            transition: all 0.3s ease;
            font-size: 1.2rem;
            font-weight: bold;
        `;
        document.body.appendChild(btn);
        
        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else if (scrollTop && window.scrollY <= 300) {
        scrollTop.remove();
    }
});

// ===== FORM VALIDATION =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const nom = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const sujet = document.getElementById('sujet').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation simple
        if (!nom || !email || !sujet || !message) {
            alert('Veuillez remplir tous les champs obligatoires');
            e.preventDefault();
            return false;
        }
        
        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide');
            e.preventDefault();
            return false;
        }
    });
}

// ===== ACTIVE LINK HIGHLIGHTING =====
function updateActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');
        
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

updateActiveLink();
window.addEventListener('hashchange', updateActiveLink);
