// Consultant sur Mesure - Shared JavaScript

const translations = {
    en: {
        nav_home: "Home", nav_companies: "For Companies", nav_careers: "Careers", nav_commitments: "Commitments", nav_about: "About", nav_contact: "Contact",
        motto: "Your research, our operational commitment!",

        // HOMEPAGE REDESIGN
        hero_title: "The alliance of clinical expertise and digital innovation",
        hero_subtitle: "We support laboratories, CROs and biotechs by securing clinical operations and modernising their processes.",

        who_title: "Who We Are",
        who_block1: "A tailor-made consulting firm",
        who_block2: "Dedicated to Labs, CROs and Biotechs",
        who_block3: "Acting as a right-hand operational partner, not a simple provider",
        who_block4: "Commitment to Excellence",
        who_block5: "Innovative Solutions",
        who_block6: "Global Reach",

        expertise_title: "Our Expertise",
        exp_left_title: "Clinical Operations",
        exp_left_list: "• Clinical Research Associates (CRA)\n• Regulatory support\n• Medical writing",
        exp_left_text: "Experienced experts to secure the quality and execution of your clinical trials.",

        exp_right_title: "Digital Transformation",
        exp_right_list: "• Digital audits\n• Zero-paper processes\n• eCRF / CTMS implementation\n• Team training",
        exp_right_text: "We modernise your workflows to improve performance, compliance and efficiency.",

        why_title: "Why Choose Us",
        why_1_title: "Agile structure", why_1_text: "Small, fast and flexible",
        why_2_title: "Double vision", why_2_text: "Human expertise + digital efficiency",
        why_3_title: "Quality driven", why_3_text: "High standards, no compromise",
        why_4_title: "International standards", why_4_text: "Aligned with global clinical requirements",

        promise_text: "We secure your projects, your data, and your timelines.",
        conviction_text: "Our approach is based on a simple conviction: The quality of clinical execution depends above all on the human, scientific and operational quality of the resources mobilized.",

        comp_pillar1_title: "Clinical Operations Support",
        comp_pillar1_text: "Securing the execution and quality of your clinical trials with certified experts.",
        comp_pillar1_list: "• Clinical Research Associates (CRA)\n• Clinical Project Managers\n• Quality & Audits\n• Regulatory Affairs Support",
        comp_pillar2_title: "Digital Transformation",
        comp_pillar2_text: "Modernizing your clinical processes for higher efficiency and compliance.",
        comp_pillar2_list: "• Digital Audits & Strategy\n• eCRF / CTMS Implementation\n• Zero-Paper Transition\n• Systems Training",

        q_label: "Mission Fit Self-Assessment",
        q_intro: "Help us understand your needs by answering 5 quick questions.",
        form_attach: "Attach contact page and",
        btn_submit_comp: "Review My Profile",

        // Careers
        careers_label: "Careers",
        careers_title: "Build Your Career in Life Sciences",
        careers_subtitle: "Join our network of professionals working on meaningful missions with leading companies.",
        job_openings: "Active Opportunities",
        job_level_senior: "Senior",
        job_level_mid: "Mid-Level",
        job_type_freelance: "Consultancy / Freelance",
        btn_apply: "Apply for this role",

        // About
        ceo_about_title: "About Korka SALL",
        ceo_about_subtitle: "CEO & Founder – Consultant sur Mesure",
        ceo_bio: "With over 10 years of experience in the pharmaceutical industry, biotechs, and CROs, Korka SALL has built a career dedicated to clinical excellence and operational innovation.",
        ceo_exp_title: "Core Expertise",
        ceo_exp_text: "• Clinical Research Associate (CRA)\n• Clinical Project Manager\n• Lead Auditor\n• Clinical Operations Strategy\n• Digital Transformation Specialist",
        ceo_mission: "My mission is based on three pillars: Commitment, Quality, and Transparency. We reveal and secure the human capital necessary for the success of your international clinical trials.",
        team_see_title: "Meet the Team",

        // Footer & Contact
        footer_text: "Expert Consulting Partner for Clinical Research.",
        contact_info_title: "Get in Touch",
        contact_address: "44 rue Jean Mermoz, 78600 Maison-Laffitte",
        contact_phone: "06 09 67 09 43",
        contact_email: "rhconsultantsurmesure@gmail.com"
    },
    fr: {
        nav_home: "Accueil", nav_companies: "Entreprises", nav_careers: "Carrières", nav_commitments: "Engagements", nav_about: "À Propos", nav_contact: "Contact",
        motto: "Votre recherche, notre engagement opérationnel!",

        // HOMEPAGE REDESIGN
        hero_title: "Expertise pour <br> <span class='text-highlight'>la Recherche Clinique</span> <br> <span class='ampersand'>&</span> les Sciences de la Vie",
        hero_subtitle: "Nous accompagnons les laboratoires, CRO et biotechs en sécurisant les opérations cliniques et en modernisant leurs processus.",

        who_title: "Qui Sommes-Nous",
        who_block1: "Un cabinet de conseil sur mesure",
        who_block2: "Dédié aux Labos, CRO et Biotechs",
        who_block3: "Agissant comme un partenaire opérationnel de confiance, pas un simple prestataire",
        who_block4: "Engagement d'Excellence",
        who_block5: "Solutions Innovantes",
        who_block6: "Portée Mondiale",

        expertise_title: "Notre Expertise",
        exp_left_title: "Opérations Cliniques",
        exp_left_list: "• Attachés de Recherche Clinique (ARC)\n• Support réglementaire\n• Rédaction médicale",
        exp_left_text: "Des experts expérimentés pour sécuriser la qualité et l'exécution de vos essais cliniques.",

        exp_right_title: "Transformation Digitale",
        exp_right_list: "• Audits digitaux\n• Processus zéro papier\n• Implémentation eCRF / CTMS\n• Formation des équipes",
        exp_right_text: "Nous modernisons vos flux de travail pour améliorer la performance, la conformité et l'efficacité.",

        why_title: "Pourquoi Nous Choisir",
        why_1_title: "Structure agile", why_1_text: "Petite, rapide et flexible",
        why_2_title: "Double vision", why_2_text: "Expertise humaine + efficacité digitale",
        why_3_title: "Orienté qualité", why_3_text: "Standards élevés, aucun compromis",
        why_4_title: "Standards internationaux", why_4_text: "Aligné sur les exigences cliniques mondiales",

        promise_text: "Nous sécurisons vos projets, vos données et vos délais.",
        conviction_text: "Notre approche repose sur une conviction simple : La qualité de l'exécution clinique dépend avant tout de la qualité humaine, scientifique et opérationnelle des ressources mobilisées.",

        // Company Page
        comp_sectors_title: "Consultant Sur Mesure opère exclusivement dans les secteurs suivants :",
        comp_sectors_list: "• Industrie Pharmaceutique\n• Biotechnologie\n• Dispositifs Médicaux\n• Cosmétique soumise à des exigences réglementaires strictes",
        comp_profiles_title: "Profils couverts :",
        comp_profiles_list: "• Attachés de Recherche Clinique (ARC)\n• Chefs de Projet Clinique\n• Data Managers\n• Profils Support aux Opérations Cliniques\n• Fonctions transverses liées aux essais cliniques",

        q1: "1. De quel type d'expertise avez-vous besoin ?",
        q1_opts: "(Opérations Cliniques / Qualité / Réglementaire / Data / Autre)",
        q2: "2. Quand avez-vous besoin de support ?",
        q2_opts: "(Immédiat / Sous 1–3 mois / Planifié)",
        q3: "3. Où est basé le projet ?",
        q3_opts: "(France / Europe / International)",
        q4: "4. Quelle est la durée prévue ?",
        q4_opts: "(Court terme / Long terme / Pas encore défini)",
        q5: "5. Quel est le défi principal aujourd'hui ?",
        q5_opts: "(Retard d'exécution / Pression de conformité / Problème de capacité / Autre)",
        form_attach: "Joindre la page contact et",
        btn_submit_comp: "Envoyer",

        comp_pillar1_title: "Support aux Opérations Cliniques",
        comp_pillar1_text: "Sécuriser l'exécution et la qualité de vos essais cliniques avec des experts certifiés.",
        comp_pillar1_list: "• Attachés de Recherche Clinique (ARC)\n• Chefs de Projet Clinique\n• Qualité & Audits\n• Support aux Affaires Réglementaires",
        comp_pillar2_title: "Transformation Digitale",
        comp_pillar2_text: "Moderniser vos processus cliniques pour une plus grande efficacité et conformité.",
        comp_pillar2_list: "• Audits Digitaux & Stratégie\n• Implémentation eCRF / CTMS\n• Transition Zéro-Papier\n• Formation aux Systèmes",

        q_label: "Auto-Évaluation Mission Fit",
        q_intro: "Aidez-nous à comprendre vos besoins en répondant à 5 questions rapides.",
        form_attach: "Accéder au formulaire de contact et",
        btn_submit_comp: "Vérifier Mon Profil",

        // Carrières
        careers_label: "Carrières",
        careers_title: "Construisez Votre Carrière dans les Sciences de la Vie",
        careers_subtitle: "Rejoignez notre réseau de professionnels travaillant sur des missions significatives.",
        job_openings: "Opportunités Actuelles",
        job_level_senior: "Sénior",
        job_level_mid: "Confirmé",
        job_type_freelance: "Conseil / Freelance",
        btn_apply: "Postuler à cette offre",

        // À Propos
        ceo_about_title: "À propos de Korka SALL",
        ceo_about_subtitle: "CEO & Fondatrice – Consultant sur Mesure",
        ceo_bio: "Avec plus de 10 ans d'expérience dans l'industrie pharmaceutique, les biotechs et les CRO, Korka SALL a bâti une carrière dédiée à l'excellence clinique et à l'innovation opérationnelle.",
        ceo_exp_title: "Expertise Clé",
        ceo_exp_text: "• Attachée de Recherche Clinique (ARC)\n• Chef de Projet Clinique\n• Lead Auditor\n• Stratégie des Opérations Cliniques\n• Spécialiste Transformation Digitale",
        ceo_mission: "Ma mission repose sur trois piliers : Engagement, Qualité et Transparence. Nous révélons et sécurisons le capital humain nécessaire au succès de vos essais cliniques internationaux.",
        team_see_title: "Rencontrez l'équipe",

        // Footer & Contact
        footer_text: "Partenaire Conseil Expert en Recherche Clinique.",
        contact_info_title: "Nous Contacter",
        contact_address: "44 rue Jean Mermoz, 78600 Maison-Laffitte",
        contact_phone: "06 09 67 09 43",
        contact_email: "rhconsultantsurmesure@gmail.com",
        contact_linkedin: "https://www.linkedin.com/company/consultant-sur-mesure/",
        ceo_linkedin: "https://linkedin.com/in/korka-sall-kebe"
    }
};

let currentLang = localStorage.getItem('site_lang') || 'en';
const langBtn = document.getElementById('langBtn');

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    if (langBtn) langBtn.textContent = lang.toUpperCase();
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key]; // Changed from textContent to innerHTML
            }
        }
    });
}

if (langBtn) {
    langBtn.addEventListener('click', () => applyLanguage(currentLang === 'en' ? 'fr' : 'en'));
}
applyLanguage(currentLang);

// Header scroll effect
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Slider Logic
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-arrow.prev');
const nextBtn = document.querySelector('.slider-arrow.next');
const progressBar = document.querySelector('.progress-bar');

if (slides.length > 0) {
    let currentSlide = 0;
    let autoPlayTimer;
    let progressValue = 0;

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
        progressValue = 0;
        if (progressBar) progressBar.style.width = '0%';
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); resetAutoPlay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); resetAutoPlay(); });
    dots.forEach((dot, idx) => dot.addEventListener('click', () => { goToSlide(idx); resetAutoPlay(); }));

    function startAutoPlay() {
        autoPlayTimer = setInterval(() => {
            progressValue += 1;
            if (progressBar) progressBar.style.width = progressValue + '%';
            if (progressValue >= 100) goToSlide(currentSlide + 1);
        }, 50);
    }
    function resetAutoPlay() { clearInterval(autoPlayTimer); startAutoPlay(); }
    startAutoPlay();
}

// Scroll animations & Counters
const animateCounter = (el) => {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target + (el.parentElement.querySelector('.stat-label')?.textContent.includes('%') ? '' : '+');
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 16);
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const counter = entry.target.querySelector('.stat-number');
            if (counter && counter.dataset.count) animateCounter(counter);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
