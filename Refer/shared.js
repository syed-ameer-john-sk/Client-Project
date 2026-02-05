// Consultant sur Mesure - Shared JavaScript
const translations = {
    en: {
        nav_home: "Home", nav_companies: "For Companies", nav_careers: "Careers", nav_commitments: "Commitments", nav_about: "About", nav_contact: "Contact",
        companies_label: "For Companies", companies_title: "Secure Your Clinical Research Projects", companies_subtitle: "Partner with us to access qualified consultants who integrate seamlessly into your teams.",
        services_label: "Our Services", services_title: "Tailored Solutions for Your Needs",
        s1_title: "Clinical Research Associates", s1_text: "Experienced CRAs for monitoring clinical trials and ensuring data integrity.",
        s2_title: "Data Management", s2_text: "Expert data managers for database design and clinical data quality.",
        s3_title: "Regulatory Affairs", s3_text: "Specialists in regulatory submissions and compliance across jurisdictions.",
        s4_title: "Quality Assurance", s4_text: "QA professionals for auditing and GCP/GMP compliance.",
        s5_title: "Medical Writing", s5_text: "Skilled writers for clinical study reports and regulatory documents.",
        s6_title: "Project Management", s6_text: "Experienced managers for complex clinical programs.",
        process_label: "How We Work", process_title: "Our Partnership Process",
        p1_title: "Understand", p1_text: "We analyze your project requirements and expertise needs.",
        p2_title: "Match", p2_text: "We identify the perfect consultant from our vetted network.",
        p3_title: "Integrate", p3_text: "We ensure smooth onboarding into your team.",
        p4_title: "Support", p4_text: "We provide ongoing support throughout the mission.",
        careers_label: "Careers", careers_title: "Build Your Career in Life Sciences", careers_subtitle: "Join our network of professionals working on meaningful missions with leading companies.",
        benefits_label: "Why Join Us", benefits_title: "Benefits of Our Network",
        b1_title: "Quality Missions", b1_text: "Work with leading pharmaceutical, biotech, and cosmetic companies.",
        b2_title: "Career Growth", b2_text: "Continuous learning opportunities and skill development.",
        b3_title: "Competitive Rates", b3_text: "Fair compensation reflecting your expertise and experience.",
        b4_title: "Support System", b4_text: "Ongoing support and guidance throughout your assignments.",
        roles_label: "Opportunities", roles_title: "Roles We Recruit",
        cta_careers_label: "Ready to Join?", cta_careers_title: "Submit Your Application", cta_careers_text: "Send us your CV and tell us about your experience. We'll match you with the right opportunities.", cta_careers_btn: "Apply Now →",
        commitments_label: "Our Commitments", commitments_title: "Principles That Guide Us", commitments_subtitle: "Our values and commitments define how we work with partners and consultants.",
        values_label: "Our Values", values_title: "What We Stand For",
        v1_title: "Quality First", v1_text: "We never compromise on the quality of our consultants or services.",
        v2_title: "Transparency", v2_text: "Clear communication and honest relationships with all stakeholders.",
        v3_title: "Accountability", v3_text: "We stay engaged throughout every mission and take responsibility.",
        v4_title: "Partnership", v4_text: "We build long-term relationships, not transactional arrangements.",
        about_label: "About Us", about_title: "Expert Partners in Clinical Research", about_subtitle: "Connecting life sciences companies with qualified professionals since our founding.",
        story_label: "Our Story", story_title: "How We Started",
        story_text: "Consultant sur Mesure was founded with a clear mission: to revolutionize how life sciences companies find and work with clinical research professionals. Our founders, with decades of experience in pharmaceutical and biotech industries, saw a gap between what companies needed and what traditional staffing agencies offered. We built a boutique consulting firm focused on quality over quantity, expertise over generics, and long-term partnerships over transactional placements.",
        mission_label: "Our Mission", mission_title: "What Drives Us",
        mission_text: "To connect pharmaceutical, biomedical, and cosmetic companies with the most qualified clinical research experts, ensuring project success through personalized matching and ongoing support.",
        team_label: "Our Team", team_title: "The People Behind Our Success",
        contact_label: "Contact Us", contact_title: "Let's Start a Conversation", contact_subtitle: "Tell us about your needs and we'll get back to you within 24 hours.",
        form_name: "Your Name", form_email: "Email Address", form_company: "Company (Optional)", form_subject: "Subject", form_message: "Your Message", form_submit: "Send Message", form_sending: "Sending...",
        form_success: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        form_error: "Sorry, there was an error sending your message. Please try again or email us directly.",
        contact_info_label: "Contact Information", contact_info_title: "Get in Touch",
        cta_label: "Ready to Start?", cta_title: "Let's Discuss Your Project", cta_text: "Tell us about your needs and discover how we can help secure talent for your projects.", cta_btn: "Contact Us →",
        footer_text: "Expert Consulting Partner for Clinical Research.", footer_nav: "Navigation", footer_contact: "Contact", footer_legal: "Legal", footer_privacy: "Privacy Policy", footer_terms: "Terms of Service"
    },
    fr: {
        nav_home: "Accueil", nav_companies: "Entreprises", nav_careers: "Carrières", nav_commitments: "Engagements", nav_about: "À Propos", nav_contact: "Contact",
        companies_label: "Pour les Entreprises", companies_title: "Sécurisez Vos Projets de Recherche Clinique", companies_subtitle: "Partenez avec nous pour accéder à des consultants qualifiés.",
        services_label: "Nos Services", services_title: "Solutions Sur Mesure pour Vos Besoins",
        s1_title: "Attachés de Recherche Clinique", s1_text: "ARC expérimentés pour le monitoring des essais cliniques.",
        s2_title: "Gestion des Données", s2_text: "Experts en conception et qualité des données cliniques.",
        s3_title: "Affaires Réglementaires", s3_text: "Spécialistes des soumissions et conformité réglementaire.",
        s4_title: "Assurance Qualité", s4_text: "Professionnels AQ pour l'audit et la conformité GCP/GMP.",
        s5_title: "Rédaction Médicale", s5_text: "Rédacteurs pour les rapports d'études et documents réglementaires.",
        s6_title: "Gestion de Projet", s6_text: "Chefs de projet pour programmes cliniques complexes.",
        process_label: "Notre Méthode", process_title: "Notre Processus de Partenariat",
        p1_title: "Comprendre", p1_text: "Nous analysons vos besoins et l'expertise requise.",
        p2_title: "Matcher", p2_text: "Nous identifions le consultant idéal de notre réseau.",
        p3_title: "Intégrer", p3_text: "Nous assurons une intégration fluide dans votre équipe.",
        p4_title: "Accompagner", p4_text: "Nous fournissons un soutien continu tout au long de la mission.",
        careers_label: "Carrières", careers_title: "Construisez Votre Carrière dans les Sciences de la Vie", careers_subtitle: "Rejoignez notre réseau de professionnels travaillant sur des missions significatives.",
        benefits_label: "Pourquoi Nous Rejoindre", benefits_title: "Avantages de Notre Réseau",
        b1_title: "Missions de Qualité", b1_text: "Travaillez avec des entreprises pharma, biotech et cosmétiques leaders.",
        b2_title: "Évolution de Carrière", b2_text: "Opportunités de formation continue et développement des compétences.",
        b3_title: "Tarifs Compétitifs", b3_text: "Rémunération équitable reflétant votre expertise.",
        b4_title: "Système de Support", b4_text: "Accompagnement continu tout au long de vos missions.",
        roles_label: "Opportunités", roles_title: "Postes que Nous Recrutons",
        cta_careers_label: "Prêt à Nous Rejoindre?", cta_careers_title: "Soumettez Votre Candidature", cta_careers_text: "Envoyez-nous votre CV et parlez-nous de votre expérience.", cta_careers_btn: "Postuler →",
        commitments_label: "Nos Engagements", commitments_title: "Principes Qui Nous Guident", commitments_subtitle: "Nos valeurs définissent notre façon de travailler.",
        values_label: "Nos Valeurs", values_title: "Ce Que Nous Défendons",
        v1_title: "Qualité d'Abord", v1_text: "Nous ne compromettons jamais la qualité de nos consultants.",
        v2_title: "Transparence", v2_text: "Communication claire et relations honnêtes avec tous.",
        v3_title: "Responsabilité", v3_text: "Nous restons engagés et assumons nos responsabilités.",
        v4_title: "Partenariat", v4_text: "Nous construisons des relations durables.",
        about_label: "À Propos", about_title: "Partenaires Experts en Recherche Clinique", about_subtitle: "Connectant les entreprises des sciences de la vie avec des professionnels qualifiés.",
        story_label: "Notre Histoire", story_title: "Comment Nous Avons Commencé",
        story_text: "Consultant sur Mesure a été fondé avec une mission claire : révolutionner la façon dont les entreprises trouvent des professionnels de la recherche clinique.",
        mission_label: "Notre Mission", mission_title: "Ce Qui Nous Motive",
        mission_text: "Connecter les entreprises pharmaceutiques, biomédicales et cosmétiques avec les experts les plus qualifiés.",
        team_label: "Notre Équipe", team_title: "Les Personnes Derrière Notre Succès",
        contact_label: "Contactez-Nous", contact_title: "Commençons une Conversation", contact_subtitle: "Parlez-nous de vos besoins et nous vous répondrons sous 24 heures.",
        form_name: "Votre Nom", form_email: "Adresse Email", form_company: "Entreprise (Optionnel)", form_subject: "Sujet", form_message: "Votre Message", form_submit: "Envoyer", form_sending: "Envoi en cours...",
        form_success: "Merci ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.",
        form_error: "Désolé, une erreur s'est produite. Veuillez réessayer ou nous contacter directement.",
        contact_info_label: "Informations de Contact", contact_info_title: "Nous Contacter",
        cta_label: "Prêt à Démarrer?", cta_title: "Discutons de Votre Projet", cta_text: "Parlez-nous de vos besoins.", cta_btn: "Contactez-Nous →",
        footer_text: "Partenaire Conseil Expert en Recherche Clinique.", footer_nav: "Navigation", footer_contact: "Contact", footer_legal: "Mentions Légales", footer_privacy: "Confidentialité", footer_terms: "CGU"
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
                el.textContent = translations[lang][key];
            }
        }
    });
}

if (langBtn) {
    langBtn.addEventListener('click', () => applyLanguage(currentLang === 'en' ? 'fr' : 'en'));
}
applyLanguage(currentLang);

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

// Scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
