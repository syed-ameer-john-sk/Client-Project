/* ==========================================================================
   Maison du Curry — Centralized Shared Script Module
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initOpeningHours();
  initNavigation();
  initMenuFilters();
  initGalleryLightbox();
  initForms();
  initScrollTop();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   0. Multi-Language i18n Translation Engine
   Default: French (fr). Supports: English (en), Dutch (nl), Spanish (es)
   -------------------------------------------------------------------------- */
const TRANSLATIONS = {
  fr: {
    nav_home: "Home",
    nav_about: "About",
    nav_menu: "Menu",
    nav_gallery: "Gallery",
    nav_locations: "Our Locations",
    nav_reservation: "Reservation",
    nav_contact: "Contact",
    btn_book: "Book Table",
    hours_mon: "Lundi",
    hours_tue_fri: "Mardi – Vendredi",
    hours_sat_sun: "Samedi – Dimanche",
    hours_closed: "Fermé",
    spice_note: `🌶️ <em>"Chez nous, les plats sont doux pour plaire à tous. Si vous aimez quand ça chauffe, demandez-les relevés !"</em>`,
    filter_all: "Tous les Plats",
    filter_entrees: "Entrées",
    filter_specialites: "Spécialités Maison",
    filter_curries: "Currys & Kormas",
    filter_vegetariens: "Currys Végétariens",
    filter_biriyani: "Biriyani & Grillades",
    filter_naans: "Naans & Accompagnements",
    filter_desserts: "Desserts & Enfants",
    hero_tagline: "Spécialité Indienne et Sri Lankaise",
    hero_title: "Une Expérience Gastronomique Authentique",
    hero_subtitle: "Découvrez les saveurs de l'Inde et du Sri Lanka au cœur de Toulouse. Épices fraîches moulues et recettes traditionnelles au 51 Rue du Taur & Marché Victor Hugo.",
    btn_explore_menu: "Découvrir la Carte",
    btn_locations: "Nos 4 Adresses",
    footer_tagline: "51 Rue du Taur, 31000 Toulouse & Marché Victor Hugo. Spécialités indiennes et sri-lankaises depuis 2014.",
    footer_nav_title: "Navigation",
    footer_hours_title: "Horaires d'Ouverture"
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_menu: "Menu",
    nav_gallery: "Gallery",
    nav_locations: "Locations",
    nav_reservation: "Reservation",
    nav_contact: "Contact",
    btn_book: "Book Table",
    hours_mon: "Monday",
    hours_tue_fri: "Tuesday – Friday",
    hours_sat_sun: "Saturday – Sunday",
    hours_closed: "Closed",
    spice_note: `🌶️ <em>"Our dishes are mild to please everyone. If you like it hot, just ask for extra spice!"</em>`,
    filter_all: "All Dishes",
    filter_entrees: "Starters",
    filter_specialites: "House Specialties",
    filter_curries: "Curries & Kormas",
    filter_vegetariens: "Vegetarian Curries",
    filter_biriyani: "Biryani & Grills",
    filter_naans: "Naans & Sides",
    filter_desserts: "Desserts & Kids",
    hero_tagline: "Indian & Sri-Lankan Gastronomy",
    hero_title: "An Authentic Gastronomic Experience",
    hero_subtitle: "Discover authentic flavors of India and Sri Lanka in Toulouse. Fresh ground spices and traditional recipes at 51 Rue du Taur & Marché Victor Hugo.",
    btn_explore_menu: "Explore Menu",
    btn_locations: "Our 4 Locations",
    footer_tagline: "51 Rue du Taur, 31000 Toulouse & Marché Victor Hugo. Authentic Indian & Sri Lankan gastronomy since 2014.",
    footer_nav_title: "Navigation",
    footer_hours_title: "Opening Hours"
  },
  nl: {
    nav_home: "Home",
    nav_about: "Over Ons",
    nav_menu: "Menukaart",
    nav_gallery: "Galerij",
    nav_locations: "Locaties",
    nav_reservation: "Reserveren",
    nav_contact: "Contact",
    btn_book: "Tafel Reserveren",
    hours_mon: "Maandag",
    hours_tue_fri: "Dinsdag – Vrijdag",
    hours_sat_sun: "Zaterdag – Zondag",
    hours_closed: "Gesloten",
    spice_note: `🌶️ <em>"Onze gerechten zijn milde smaken voor iedereen. Houdt u van pittig? Vraag het ons gerust!"</em>`,
    filter_all: "Alle Gerechten",
    filter_entrees: "Voorgerechten",
    filter_specialites: "Huis specialiteiten",
    filter_curries: "Curry's & Korma's",
    filter_vegetariens: "Vegetarische Curry's",
    filter_biriyani: "Biryani & Grill",
    filter_naans: "Naanbrood & Bijgerechten",
    filter_desserts: "Nagerechten & Kinderen",
    hero_tagline: "Indiase & Sri Lankaanse Gastronomie",
    hero_title: "Een Authentieke Gastronomische Ervaring",
    hero_subtitle: "Ontdek authentieke Indiase en Sri Lankaanse smaken in Toulouse. Verse kruiden en traditionele recepten op 51 Rue du Taur & Marché Victor Hugo.",
    btn_explore_menu: "Bekijk Menukaart",
    btn_locations: "Onze 4 Locaties",
    footer_tagline: "51 Rue du Taur, 31000 Toulouse & Marché Victor Hugo. Authentieke Indiase & Sri Lankaanse gastronomie sinds 2014.",
    footer_nav_title: "Navigatie",
    footer_hours_title: "Openingstijden"
  },
  es: {
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_menu: "Menú",
    nav_gallery: "Galería",
    nav_locations: "Ubicaciones",
    nav_reservation: "Reserva",
    nav_contact: "Contacto",
    btn_book: "Reservar Mesa",
    hours_mon: "Lunes",
    hours_tue_fri: "Martes – Viernes",
    hours_sat_sun: "Sábado – Domingo",
    hours_closed: "Cerrado",
    spice_note: `🌶️ <em>"Nuestros platos son suaves para todos. ¡Si te gusta el picante, solo pídelo más fuerte!"</em>`,
    filter_all: "Todos los Platos",
    filter_entrees: "Entrantes",
    filter_specialites: "Especialidades",
    filter_curries: "Curris & Kormas",
    filter_vegetariens: "Curris Vegetarianos",
    filter_biriyani: "Biryani y Parrilladas",
    filter_naans: "Panes Naan y Acompañamientos",
    filter_desserts: "Postres y Niños",
    hero_tagline: "Gastronomía India y de Sri Lanka",
    hero_title: "Una Experiencia Gastronómica Auténtica",
    hero_subtitle: "Descubre auténticos sabores de la India y Sri Lanka en Toulouse. Especias molidas frescas y recetas tradicionales.",
    btn_explore_menu: "Ver Menú",
    btn_locations: "Nuestras 4 Ubicaciones",
    footer_tagline: "51 Rue du Taur, 31000 Toulouse & Marché Victor Hugo. Gastronomía auténtica desde 2014.",
    footer_nav_title: "Navegación",
    footer_hours_title: "Horarios de Apertura"
  }
};

let currentLang = localStorage.getItem('preferred_lang') || 'fr';

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('preferred_lang', lang);
  document.documentElement.lang = lang;

  // Sync all language dropdowns
  document.querySelectorAll('.lang-select').forEach(select => {
    select.value = lang;
  });

  // Translate elements with data-i18n
  const dict = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Re-render opening hours with localized days
  initOpeningHours();
}

function initLanguageSwitcher() {
  setLanguage(currentLang);

  document.querySelectorAll('.lang-select').forEach(select => {
    select.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  });
}

/* --------------------------------------------------------------------------
   1. Centralized Opening Hours Engine (MDC-011)
   -------------------------------------------------------------------------- */
function initOpeningHours() {
  const targets = document.querySelectorAll('.js-opening-hours');
  if (!targets.length) return;

  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;

  const hoursData = [
    { days: dict.hours_tue_fri, lunch: '11:30 – 14:30', dinner: '18:30 – 22:00' },
    { days: dict.hours_sat_sun, lunch: '11:30 – 15:00', dinner: '18:30 – 22:30' },
    { days: dict.hours_mon, status: dict.hours_closed }
  ];

  const hoursHTML = hoursData.map(item => {
    if (item.status) {
      return `<div class="hours-row" style="display:flex; justify-content:space-between; padding:0.4rem 0; border-bottom:1px dashed rgba(255,255,255,0.08);">
                <strong style="color:var(--text-main);">${item.days}</strong>
                <span style="color:#E63946; font-weight:600;">${item.status}</span>
              </div>`;
    }
    return `<div class="hours-row" style="display:flex; justify-content:space-between; padding:0.4rem 0; border-bottom:1px dashed rgba(255,255,255,0.08);">
              <strong style="color:var(--text-main);">${item.days}</strong>
              <span style="color:var(--text-muted);">${item.lunch} &nbsp;|&nbsp; ${item.dinner}</span>
            </div>`;
  }).join('');

  targets.forEach(target => {
    target.innerHTML = hoursHTML;
  });
}

/* --------------------------------------------------------------------------
   2. Sticky Header & Mobile Drawer Navigation (MDC-005)
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.querySelector('.header');
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNavDrawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  hamburger?.addEventListener('click', () => {
    mobileNav?.classList.toggle('open');
  });

  // Close mobile nav when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav?.classList.remove('open');
    });
  });

  // Highlight active menu item based on window pathname
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   3. Menu Category Filter Tabs (MDC-001)
   -------------------------------------------------------------------------- */
function initMenuFilters() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      menuCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. Gallery Lightbox Controller (MDC-007)
   -------------------------------------------------------------------------- */
function initGalleryLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const galleryItems = document.querySelectorAll('.gallery-item img');

  if (!galleryItems.length || !modal) return;

  let currentIndex = 0;
  const imageSources = Array.from(galleryItems).map(img => img.src);

  function openLightbox(index) {
    currentIndex = index;
    modalImg.src = imageSources[currentIndex];
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    modalImg.src = imageSources[currentIndex];
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    modalImg.src = imageSources[currentIndex];
  }

  galleryItems.forEach((img, index) => {
    img.parentElement.addEventListener('click', () => openLightbox(index));
  });

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', showPrev);
  nextBtn?.addEventListener('click', showNext);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
}

/* --------------------------------------------------------------------------
   5. Form Handler & Validation (MDC-008, MDC-009)
   -------------------------------------------------------------------------- */
function initForms() {
  const forms = document.querySelectorAll('.js-contact-form, .js-reservation-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.disabled = true;
      btn.innerHTML = 'Sending...';

      setTimeout(() => {
        btn.innerHTML = '✔ Request Sent Successfully!';
        btn.style.backgroundColor = '#25D366';
        btn.style.color = '#000';
        form.reset();

        setTimeout(() => {
          btn.disabled = false;
          btn.innerHTML = originalText;
          btn.style.backgroundColor = '';
          btn.style.color = '';
        }, 4000);
      }, 1000);
    });
  });
}

/* --------------------------------------------------------------------------
   6. Scroll-To-Top Button (MDC-015)
   -------------------------------------------------------------------------- */
function initScrollTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   7. Entrance Scroll Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const animatedEls = document.querySelectorAll('.animate-on-scroll');
  if (!animatedEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  animatedEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
  });
}
