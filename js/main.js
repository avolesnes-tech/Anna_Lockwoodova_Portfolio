/* =============================================================
   main.js — IntersectionObserver, scroll efekty, nav, formulár
   ============================================================= */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -----------------------------------------------------------
     1. SCROLL REVEAL — IntersectionObserver
     ----------------------------------------------------------- */
  function initReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    if (prefersReduced) {
      // Okamžite zobraz všetko
      revealEls.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Raz revealed = hotovo
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealEls.forEach(el => observer.observe(el));
  }


  /* -----------------------------------------------------------
     2. STICKY NAV — backdrop pri scrolle
     ----------------------------------------------------------- */
  function initNav() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    let lastScroll = 0;

    function onScroll() {
      const scrollY = window.scrollY;

      // Backdrop efekt
      if (scrollY > 20) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }

      lastScroll = scrollY;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Inicializácia
  }


  /* -----------------------------------------------------------
     3. AKTÍVNA SEKCIA — zvýrazni nav link
     ----------------------------------------------------------- */
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id], div[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              const href = link.getAttribute('href');
              if (href === `#${id}`) {
                link.classList.add('nav__link--active');
              } else {
                link.classList.remove('nav__link--active');
              }
            });
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: '-72px 0px 0px 0px'
      }
    );

    sections.forEach(s => observer.observe(s));
  }


  /* -----------------------------------------------------------
     4. LEAF PARALLAX
     ----------------------------------------------------------- */
  function initParallax() {
    if (prefersReduced) return;

    const leaves = document.querySelectorAll('.leaf-parallax');
    if (!leaves.length) return;

    function onScroll() {
      const scrollY = window.scrollY;
      leaves.forEach(leaf => {
        const rate = parseFloat(leaf.dataset.parallaxRate) || 0.15;
        leaf.style.transform = `translateY(${scrollY * rate}px)`;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }


  /* -----------------------------------------------------------
     5. HAMBURGER MENU
     ----------------------------------------------------------- */
  function initMobileMenu() {
    const btn  = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;

    window.toggleMobileMenu = function () {
      const isOpen = menu.classList.contains('mobile-menu--open');

      if (isOpen) {
        menu.classList.remove('mobile-menu--open');
        btn.classList.remove('hamburger--open');
        btn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      } else {
        menu.classList.add('mobile-menu--open');
        btn.classList.add('hamburger--open');
        btn.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    };

    window.closeMobileMenu = function () {
      menu.classList.remove('mobile-menu--open');
      btn.classList.remove('hamburger--open');
      btn.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    // Escape klávesa
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('mobile-menu--open')) {
        window.closeMobileMenu();
        btn.focus();
      }
    });
  }


  /* -----------------------------------------------------------
     6. KONTAKTNÝ FORMULÁR
     ----------------------------------------------------------- */
  function initContactForm() {
    const form    = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const success = document.getElementById('formSuccess');
    if (!form) return;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Loading stav
      submitBtn.textContent = 'Odosielam';
      submitBtn.classList.add('btn--submit-loading');
      submitBtn.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          // Úspech
          form.style.display = 'none';
          success.classList.add('form-success--visible');
        } else {
          // Chyba servera
          submitBtn.textContent = 'Skúste znova →';
          submitBtn.classList.remove('btn--submit-loading');
          submitBtn.disabled = false;
        }
      } catch {
        // Sieťová chyba
        submitBtn.textContent = 'Skúste znova →';
        submitBtn.classList.remove('btn--submit-loading');
        submitBtn.disabled = false;
      }
    });
  }


  /* -----------------------------------------------------------
     7. SMOOTH SCROLL pre kotviace linky
     ----------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const id = link.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();

        const navHeight = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

        if (prefersReduced) {
          window.scrollTo({ top });
        } else {
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }


  /* -----------------------------------------------------------
     8. JAZYKOVÝ TOGGLE — shell (texty sa doplnia neskôr)
     ----------------------------------------------------------- */
  window.setLang = function (lang) {
    const btns = document.querySelectorAll('.nav__lang-btn');
    btns.forEach(btn => {
      btn.classList.toggle('nav__lang-btn--active', btn.getAttribute('lang') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('lang') === lang ? 'true' : 'false');
    });
    document.documentElement.setAttribute('lang', lang);
    // TODO: implementácia prekladov v ďalšej fáze
  };


  /* -----------------------------------------------------------
     INIT — spusti všetko po načítaní DOM
     ----------------------------------------------------------- */
  function init() {
    initReveal();
    initNav();
    initActiveNav();
    initParallax();
    initMobileMenu();
    initContactForm();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
