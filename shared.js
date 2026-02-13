// Consultant sur Mesure - Shared JavaScript

const translations = {
    en: {
        nav_home: "Home", nav_companies: "For Companies", nav_careers: "Careers", nav_commitments: "Commitments", nav_about: "About", nav_contact: "Contact",
        motto: "Your research, our operational commitment!",

        // HOMEPAGE
        hero_title: "Secure your clinical operations with human and agile expertise.",
        hero_subtitle: "We support laboratories, CROs and biotechs by securing clinical operations and modernining their processes.",
        btn_companies: "For Companies →",
        btn_careers: "Careers →",
        who_title: "Who We Are",
        who_block1: "A tailor-made consulting firm",
        who_block2: "Dedicated to Labs, CROs and Biotechs",
        who_block3: "Acting as a right-hand operational partner, not a simple provider",
        who_block4: "Commitment to Excellence",
        who_block5: "Innovative Solutions",
        who_block6: "Global Reach",
        expertise_title: "Our Expertise",
        exp_left_title: "Clinical Operations",
        exp_left_list: "<li><strong>Clinical Research Associates (CRA):</strong> Monitors trained to the latest ICH-GCP standards for flawless data quality.</li><li><strong>Regulatory support:</strong> Expert guidance ensuring full compliance with current regulations.</li><li><strong>Medical writing:</strong> Protocols and CSR reports delivered with strict adherence to your timelines.</li>",
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
        testimonials_label: "Testimonials",
        testimonials_title: "What Our Partners Say",
        testimonial_1: "Consultant sur Mesure provided us with an exceptional CRA who seamlessly integrated into our team. <strong>Their commitment to quality is unmatched.</strong>",
        testimonial_1_role: "Clinical Director",
        testimonial_2: "<strong>The personalized approach and deep understanding of our needs made all the difference.</strong> Highly recommend for any life sciences project.",
        testimonial_2_role: "R&D Manager",
        testimonial_3: "Their ongoing support throughout the mission sets them apart. <strong>A true partner, not just a staffing agency.</strong>",
        testimonial_3_role: "HR Director",
        cta_label: "Take the Next Step",
        cta_title: "Discover Our Commitments",
        cta_text: "Learn about the principles that guide everything we do. Understand how we differentiate ourselves in the Life Sciences consulting market.",
        cta_btn: "Our Commitments →",

        // COMPANIES PAGE
        companies_label: "For Companies",
        companies_title: "Secure Your Clinical Research Projects",
        companies_subtitle: "Partner with us to access qualified consultants who integrate seamlessly into your teams.",
        services_label: "Our Services",
        services_title: "Tailored Solutions for Your Needs",
        comp_pillar1_title: "Clinical Operations Support",
        comp_pillar1_text: "Securing the execution and quality of your clinical trials with certified experts.",
        comp_pillar1_list: "• Clinical Research Associates (CRA)\n• Clinical Project Managers\n• Quality & Audits\n• Regulatory Affairs Support",
        comp_pillar2_title: "Digital Transformation",
        comp_pillar2_text: "Modernizing your clinical processes for higher efficiency and compliance.",
        comp_pillar2_list: "• Digital Audits & Strategy\n• eCRF / CTMS Implementation\n• Zero-Paper Transition\n• Systems Training",
        q_label: "Mission Fit Self-Assessment",
        q_intro: "Help us understand your needs by answering 5 quick questions.",
        q1: "1. What type of expertise do you need?",
        q1_opts: "(Select an option)",
        q2: "2. When do you need support?",
        q2_opts: "(Select an option)",
        q3: "3. Where is the project based?",
        q3_opts: "e.g. France, Europe, International",
        q4: "4. What is the expected duration?",
        q4_opts: "(Select an option)",
        q5: "5. What is the main challenge today?",
        q5_opts: "(Select an option)",
        form_attach: "Attach contact page and",
        btn_submit_comp: "Review My Profile",
        process_label: "How We Work",
        process_title: "Our Partnership Process",
        p1_title: "Understand", p1_text: "We analyze your project requirements and expertise needs.",
        p2_title: "Match", p2_text: "We identify the perfect consultant from our vetted network.",
        p3_title: "Integrate", p3_text: "We ensure smooth onboarding into your team.",
        p4_title: "Support", p4_text: "We provide ongoing support throughout the mission.",

        // CAREERS PAGE
        careers_label: "Careers",
        careers_title: "Build Your Career in Life Sciences",
        careers_subtitle: "Join our network of professionals working on meaningful missions with leading companies.",
        benefits_label: "Why Join Us",
        benefits_title: "Benefits of Our Network",
        b1_title: "Quality Missions", b1_text: "Work with leading pharmaceutical, biotech, and cosmetic companies.",
        b2_title: "Career Growth", b2_text: "Continuous learning opportunities and skill development.",
        b3_title: "Competitive Rates", b3_text: "Fair compensation reflecting your expertise and experience.",
        b4_title: "Support System", b4_text: "Ongoing support and guidance throughout your assignments.",
        jobs_label: "Open Opportunities",
        jobs_title: "Join Emerging Missions",
        job_openings: "Active Opportunities",
        job_level_senior: "Senior",
        job_level_mid: "Mid-Level",
        job_type_freelance: "Consultancy / Freelance",
        cta_careers_label: "Ready to Join?",
        cta_careers_title: "Submit Your Application",
        cta_careers_text: "Send us your CV and tell us about your experience. We'll match you with the right opportunities.",
        btn_apply: "Apply Now →",

        // ABOUT PAGE
        about_label: "About Us",
        about_title: "Expert Partners in Clinical Research",
        about_subtitle: "Connecting life sciences companies with qualified professionals since our founding.",
        story_label: "Our Story",
        story_title: "How We Started",
        story_text: "Consultant sur Mesure was founded with a clear mission: to revolutionize how life sciences companies find and work with clinical research professionals. We built a boutique consulting firm focused on quality and long-term partnerships.",
        mission_label: "Our Mission",
        mission_title: "What Drives Us",
        mission_text: "To connect pharmaceutical, biomedical, and cosmetic companies with the most qualified clinical research experts, ensuring project success through personalized matching.",
        ceo_about_label: "Leadership",
        ceo_name: "Korka SALL",
        ceo_about_title: "About Korka SALL",
        ceo_about_subtitle: "CEO & Founder – Consultant sur Mesure",
        ceo_bio: "With over 10 years of experience in the pharmaceutical industry, biotechs, and CROs, Korka SALL has built a career dedicated to clinical excellence and operational innovation.",
        ceo_exp_title: "Core Expertise",
        ceo_exp_text: "• Clinical Research Associate (CRA)\n• Clinical Project Manager\n• Lead Auditor\n• Clinical Operations Strategy\n• Digital Transformation Specialist",
        ceo_mission: "My mission is based on three pillars: Commitment, Quality, and Transparency. We reveal and secure the human capital necessary for the success of your international clinical trials.",
        team_see_title: "Meet the Team",

        // CONTACT PAGE
        contact_label: "Contact Us",
        contact_title: "Let’s discuss your next clinical project.",
        contact_subtitle: "Tell us about your needs and we'll get back to you within 24 hours.",
        form_name: "Your Name",
        form_email: "Email Address",
        form_company: "Company (Optional)",
        form_subject: "Subject",
        form_message: "Your Message",
        form_submit: "Send Message",
        contact_info_label: "Contact Information",
        contact_info_title: "Get in Touch",
        contact_address: "44 rue Jean Mermoz, 78600 Maison-Laffitte",
        contact_phone: "06 09 67 09 43",
        contact_email: "rhconsultantsurmesure@gmail.com",

        // COMMITMENTS PAGE
        commitments_label: "Our Commitments",
        commitments_title: "Principles That Guide Us",
        commitments_subtitle: "Our values and commitments define how we work with partners and consultants.",
        values_label: "Our Values",
        values_title: "What We Stand For",
        v1_title: "Quality First", v1_text: "We never compromise on the quality of our consultants or services.",
        v2_title: "Transparency", v2_text: "Clear communication and honest relationships with all stakeholders.",
        v3_title: "Accountability", v3_text: "We stay engaged throughout every mission and take responsibility.",
        v4_title: "Partnership", v4_text: "We build long-term relationships, not transactional arrangements.",

        // FOOTER
        footer_text: "Expert Consulting Partner for Clinical Research.",
        footer_nav: "Navigation",
        footer_contact: "Contact",
        footer_legal: "Legal",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        brand_sub: "Expert Consulting Partner"
    },
    fr: {
        nav_home: "Accueil", nav_companies: "Entreprises", nav_careers: "Carrières", nav_commitments: "Engagements", nav_about: "À Propos", nav_contact: "Contact",
        motto: "Votre recherche, notre engagement opérationnel!",

        // HOMEPAGE
        hero_title: "Sécurisez vos opérations cliniques avec une expertise humaine et agile.",
        hero_subtitle: "Nous accompagnons les laboratoires, CRO et biotechs en sécurisant les opérations cliniques et en modernisant leurs processus.",
        btn_companies: "Entreprises →",
        btn_careers: "Carrières →",
        who_title: "Qui Sommes-Nous",
        who_block1: "Un cabinet de conseil sur mesure",
        who_block2: "Dédié aux Labos, CRO et Biotechs",
        who_block3: "Agissant comme un partenaire opérationnel de confiance, pas un simple prestataire",
        who_block4: "Engagement d'Excellence",
        who_block5: "Solutions Innovantes",
        who_block6: "Portée Mondiale",
        expertise_title: "Notre Expertise",
        exp_left_title: "Opérations Cliniques",
        exp_left_list: "<li><strong>Attachés de Recherche Clinique (ARC) :</strong> Des moniteurs formés aux dernières normes ICH-GCP pour une qualité de données irréprochable.</li><li><strong>Support réglementaire :</strong> Une expertise garantissant une conformité totale avec les réglementations actuelles.</li><li><strong>Rédaction médicale :</strong> Protocoles et rapports d'étude clinique (CSR) livrés dans le strict respect de vos délais.</li>",
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
        testimonials_label: "Témoignages",
        testimonials_title: "Ce que disent nos partenaires",
        testimonial_1: "Consultant sur Mesure nous a fourni un ARC exceptionnel qui s'est parfaitement intégré à notre équipe. <strong>Leur engagement envers la qualité est inégalé.</strong>",
        testimonial_1_role: "Directeur Clinique",
        testimonial_2: "<strong>L'approche personnalisée et la compréhension approfondie de nos besoins ont fait toute la différence.</strong> Fortement recommandé pour tout projet en sciences de la vie.",
        testimonial_2_role: "Responsable R&D",
        testimonial_3: "Leur soutien continu tout au long de la mission les distingue. <strong>Un véritable partenaire, pas seulement une agence de staffing.</strong>",
        testimonial_3_role: "Directeur RH",
        cta_label: "Passez à l'étape suivante",
        cta_title: "Découvrez nos engagements",
        cta_text: "Découvrez les principes qui guident tout ce que nous faisons. Comprenez comment nous nous différencions sur le marché du conseil en sciences de la vie.",
        cta_btn: "Nos Engagements →",

        // COMPANIES PAGE
        companies_label: "Entreprises",
        companies_title: "Sécurisez vos projets de recherche clinique",
        companies_subtitle: "Associez-vous à nous pour accéder à des consultants qualifiés qui s'intègrent parfaitement à vos équipes.",
        services_label: "Nos Services",
        services_title: "Des solutions adaptées à vos besoins",
        comp_pillar1_title: "Support aux Opérations Cliniques",
        comp_pillar1_text: "Sécuriser l'exécution et la qualité de vos essais cliniques avec des experts certifiés.",
        comp_pillar1_list: "• Attachés de Recherche Clinique (ARC)\n• Chefs de Projet Clinique\n• Qualité & Audits\n• Support aux Affaires Réglementaires",
        comp_pillar2_title: "Transformation Digitale",
        comp_pillar2_text: "Moderniser vos processus cliniques pour une plus grande efficacité et conformité.",
        comp_pillar2_list: "• Audits Digitaux & Stratégie\n• Implémentation eCRF / CTMS\n• Transition Zéro-Papier\n• Formation aux Systèmes",
        q_label: "Auto-Évaluation Mission Fit",
        q_intro: "Aidez-nous à comprendre vos besoins en répondant à 5 questions rapides.",
        q1: "1. De quel type d'expertise avez-vous besoin ?",
        q1_opts: "(Option de sélection)",
        q2: "2. Quand avez-vous besoin de support ?",
        q2_opts: "(Option de sélection)",
        q3: "3. Où est basé le projet ?",
        q3_opts: "ex. France, Europe, International",
        q4: "4. Quelle est la durée prévue ?",
        q4_opts: "(Option de sélection)",
        q5: "5. Quel est le défi principal aujourd'hui ?",
        q5_opts: "(Option de sélection)",
        form_attach: "Accéder au formulaire de contact et",
        btn_submit_comp: "Vérifier Mon Profil",
        process_label: "Comment nous travaillons",
        process_title: "Notre processus de partenariat",
        p1_title: "Comprendre", p1_text: "Nous analysons vos exigences de projet et vos besoins en expertise.",
        p2_title: "Mise en relation", p2_text: "Nous identifions le consultant idéal au sein de notre réseau vérifié.",
        p3_title: "Intégration", p3_text: "Nous assurons une intégration fluide dans votre équipe.",
        p4_title: "Support", p4_text: "Nous fournissons un soutien continu tout au long de la mission.",

        // CAREERS PAGE
        careers_label: "Carrières",
        careers_title: "Construisez Votre Carrière dans les Sciences de la Vie",
        careers_subtitle: "Rejoignez notre réseau de professionnels travaillant sur des missions significatives.",
        benefits_label: "Pourquoi nous rejoindre",
        benefits_title: "Avantages de notre réseau",
        b1_title: "Missions de qualité", b1_text: "Travaillez avec les leaders de l'industrie pharmaceutique, biotech et cosmétique.",
        b2_title: "Évolution de carrière", b2_text: "Opportunités d'apprentissage continu et développement des compétences.",
        b3_title: "Tarifs compétitifs", b3_text: "Rémunération équitable reflétant votre expertise et expérience.",
        b4_title: "Système de support", b4_text: "Soutien et conseils continus tout au long de vos missions.",
        jobs_label: "Opportunités Actuelles",
        jobs_title: "Rejoignez des missions émergentes",
        job_openings: "Opportunités Actuelles",
        job_level_senior: "Sénior",
        job_level_mid: "Confirmé",
        job_type_freelance: "Conseil / Freelance",
        cta_careers_label: "Prêt à rejoindre ?",
        cta_careers_title: "Soumettez votre candidature",
        cta_careers_text: "Envoyez-nous votre CV et parlez-nous de votre expérience. Nous vous proposerons des opportunités adaptées.",
        btn_apply: "Postuler Maintenant →",

        // ABOUT PAGE
        about_label: "À Propos",
        about_title: "Partenaires experts en recherche clinique",
        about_subtitle: "Connecter les entreprises des sciences de la vie avec des professionnels qualifiés depuis notre fondation.",
        story_label: "Notre Histoire",
        story_title: "Comment nous avons commencé",
        story_text: "Consultant sur Mesure a été fondé avec une mission claire : révolutionner la façon dont les entreprises trouvent des professionnels de la recherche clinique. Nous avons bâti un cabinet axé sur la qualité.",
        mission_label: "Notre Mission",
        mission_title: "Ce qui nous anime",
        mission_text: "Connecter les entreprises pharmaceutiques, biomédicales et cosmétiques avec les experts les plus qualifiés, garantissant le succès des projets.",
        ceo_about_label: "Direction",
        ceo_name: "Korka SALL",
        ceo_about_title: "À propos de Korka SALL",
        ceo_about_subtitle: "CEO & Fondatrice – Consultant sur Mesure",
        ceo_bio: "Avec plus de 10 ans d'expérience dans l'industrie pharmaceutique, les biotechs et les CRO, Korka SALL a bâti une carrière dédiée à l'excellence clinique.",
        ceo_exp_title: "Expertise Clé",
        ceo_exp_text: "• Attachée de Recherche Clinique (ARC)\n• Chef de Projet Clinique\n• Lead Auditor\n• Stratégie des Opérations Cliniques\n• Spécialiste Transformation Digitale",
        ceo_mission: "Ma mission repose sur trois piliers : Engagement, Qualité et Transparence. Nous sécurisons le capital humain nécessaire au succès de vos essais cliniques.",
        team_see_title: "Rencontrez l'équipe",

        // CONTACT PAGE
        contact_label: "Contactez-nous",
        contact_title: "Discutons de votre prochain projet clinique.",
        contact_subtitle: "Faites-nous part de vos besoins et nous vous répondrons sous 24 heures.",
        form_name: "Votre Nom",
        form_email: "Adresse Email",
        form_company: "Entreprise (Optionnel)",
        form_subject: "Sujet",
        form_message: "Votre Message",
        form_submit: "Envoyer le message",
        contact_info_label: "Informations de contact",
        contact_info_title: "Nous Contacter",
        contact_address: "44 rue Jean Mermoz, 78600 Maison-Laffitte",
        contact_phone: "06 09 67 09 43",
        contact_email: "rhconsultantsurmesure@gmail.com",

        // COMMITMENTS PAGE
        commitments_label: "Nos Engagements",
        commitments_title: "Les principes qui nous guident",
        commitments_subtitle: "Nos valeurs and nos engagements définissent notre façon de travailler avec nos partenaires and consultants.",
        values_label: "Nos Valeurs",
        values_title: "Ce que nous défendons",
        v1_title: "La qualité d'abord", v1_text: "Nous ne faisons jamais de compromis sur la qualité de nos consultants ou services.",
        v2_title: "Transparence", v2_text: "Une communication claire et des relations honnêtes avec toutes les parties prenantes.",
        v3_title: "Responsabilité", v3_text: "Nous restons impliqués tout au long de chaque mission et assumons nos responsabilités.",
        v4_title: "Partenariat", v4_text: "Nous construisons des relations à long terme, pas des arrangements transactionnels.",

        // FOOTER
        footer_text: "Partenaire Conseil Expert en Recherche Clinique.",
        footer_nav: "Navigation",
        footer_contact: "Contact",
        footer_legal: "Juridique",
        footer_privacy: "Politique de confidentialité",
        footer_terms: "Conditions d'utilisation",
        brand_sub: "Partenaire Conseil Expert"
    }
};

let currentLang = localStorage.getItem('site_lang') || 'en';
const langBtn = document.getElementById('langBtn');

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    if (langBtn) langBtn.textContent = lang === 'en' ? 'FR' : 'EN'; // Show target language
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
