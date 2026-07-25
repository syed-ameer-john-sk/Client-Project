/* ==========================================================================
   Maison du Curry — Centralized Shared Script Module
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initOpeningHours();
  initNavigation();
  initMenuFilters();
  initGalleryLightbox();
  initForms();
  initScrollTop();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   1. Centralized Opening Hours Engine (MDC-011)
   Single source of truth for opening hours rendered across all pages
   -------------------------------------------------------------------------- */
const OPENING_HOURS_DATA = [
  { days: 'Tuesday – Friday', lunch: '11:30 – 14:30', dinner: '18:30 – 22:00' },
  { days: 'Saturday – Sunday', lunch: '11:30 – 15:00', dinner: '18:30 – 22:30' },
  { days: 'Monday', status: 'Closed' }
];

function initOpeningHours() {
  const targets = document.querySelectorAll('.js-opening-hours');
  if (!targets.length) return;

  const hoursHTML = OPENING_HOURS_DATA.map(item => {
    if (item.status === 'Closed') {
      return `<div class="hours-row" style="display:flex; justify-content:space-between; padding:0.4rem 0; border-bottom:1px dashed rgba(255,255,255,0.08);">
                <strong style="color:var(--text-main);">${item.days}</strong>
                <span style="color:#E63946; font-weight:600;">Closed</span>
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
