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

    const leaves        = document.querySelectorAll('.leaf-parallax');
    const dioramaLayers = document.querySelectorAll('[data-diorama-speed]');
    if (!leaves.length && !dioramaLayers.length) return;

    function onScroll() {
      const scrollY = window.scrollY;

      leaves.forEach(leaf => {
        const rate = parseFloat(leaf.dataset.parallaxRate) || 0.15;
        leaf.style.transform = `translateY(${scrollY * rate}px)`;
      });

      dioramaLayers.forEach(layer => {
        const speed = parseFloat(layer.dataset.dioramaSpeed) || 0.06;
        layer.style.transform = `translateY(${scrollY * speed}px)`;
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
     9. DOT WAVE — jemné pohybujúce sa bodky vedľa "Prečo si vybrať mňa"
        Transparentný canvas, vlnový pohyb, CSS mask fade na okrajoch.
        Bez viditeľného obdĺžnika — bodky sa strácajú do prázdna.
     ----------------------------------------------------------- */
  function initStarfield() {
    const container = document.querySelector('.starfield');
    if (!container) return;

    const canvas = document.createElement('canvas');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W   = container.offsetWidth  || 280;
    const H   = container.offsetHeight || 72;

    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = '100%';
    canvas.style.height = '100%';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // ── Generuj bodky — organicky rozmiestnené v páse ─────────
    const COLS = 22;
    const dots = [];

    for (let i = 0; i < COLS; i++) {
      // 2–3 bodky na stĺpec, náhodná Y v strednom páse
      const count = 2 + Math.floor(Math.random() * 2);
      for (let j = 0; j < count; j++) {
        const x = (i / (COLS - 1)) * W;
        dots.push({
          x,
          baseY : H * 0.2 + Math.random() * H * 0.6,
          r     : 0.9 + Math.random() * 1.1,
          alpha : 0.18 + Math.random() * 0.32,
          phase : Math.random() * Math.PI * 2,
          speed : 0.28 + Math.random() * 0.38,
          amp   : 2.5 + Math.random() * 4,   // amplitúda vlny v px
        });
      }
    }

    // ── Vykresli frame ────────────────────────────────────────
    function render(ts) {
      ctx.clearRect(0, 0, W, H);
      const t = ts / 1000;

      for (const d of dots) {
        // Horizontálny fade — bodky miznú na okrajoch
        const fadeL = Math.min(1, d.x / (W * 0.16));
        const fadeR = Math.min(1, (W - d.x) / (W * 0.16));
        const alpha = d.alpha * fadeL * fadeR;
        if (alpha < 0.01) continue;

        const y = d.baseY + Math.sin(t * d.speed + d.phase) * d.amp;

        ctx.beginPath();
        ctx.arc(d.x, y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(22,36,90,${alpha.toFixed(3)})`;
        ctx.fill();
      }

      if (running) rafId = requestAnimationFrame(render);
    }

    let rafId  = null;
    let running = false;

    function start() {
      if (running) return;
      running = true;
      container.classList.add('starfield--visible');
      rafId = requestAnimationFrame(render);
    }

    function stop() {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
    }

    const visObserver = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting ? start() : stop());
    }, { threshold: 0.1 });

    visObserver.observe(container);

    // Redukovaný pohyb: statický jednorazový render
    if (prefersReduced) {
      container.classList.add('starfield--visible');
      ctx.clearRect(0, 0, W, H);
      render(0);
      running = false;
    }
  }


  /* -----------------------------------------------------------
     10. GALLERY FOCUS — just-in-time will-change pre atelier pop-out
         Pridáme will-change len na aktívny hover, hneď po exit odstránime.
         Tým šetríme GPU pamäť — žiadne zbytočné compositor vrstvy.
     ----------------------------------------------------------- */
  function initGalleryFocus() {
    if (prefersReduced) return;
    const items = document.querySelectorAll('.strip-item');
    if (!items.length) return;

    // Desktop: just-in-time will-change
    items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.willChange = 'transform, box-shadow, filter';
      });
      item.addEventListener('mouseleave', () => {
        setTimeout(() => { item.style.willChange = 'auto'; }, 780);
      });
    });

    // Mobile: scroll-triggered bubble pop cez IntersectionObserver
    if (window.matchMedia('(max-width: 768px)').matches) {
      const popObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          // Zabráni opakovanému triggeru počas toho istého scrollu
          if (el.dataset.popped === '1') return;
          el.dataset.popped = '1';

          el.classList.add('strip-item--scroll-pop');
          el.addEventListener('animationend', () => {
            el.classList.remove('strip-item--scroll-pop');
            // Reset — umožní znova po 2s (napr. ak sa scrolluje hore-dole)
            setTimeout(() => { delete el.dataset.popped; }, 2000);
          }, { once: true });
        });
      }, { threshold: 0.35, rootMargin: '0px 0px -40px 0px' });

      items.forEach(item => popObserver.observe(item));
    }
  }


  /* -----------------------------------------------------------
     11. CARD TILT — 3D perspektívny náklon karty pri hover
         rotateX ± 6°, rotateY ± 8°, counter-parallax thumbnail
     ----------------------------------------------------------- */
  function initCardTilt() {
    if (prefersReduced) return;
    const cards = document.querySelectorAll('.project-card');
    if (!cards.length) return;

    cards.forEach(card => {
      const img = card.querySelector('.project-card__image-wrap img');

      // Načítaj base tilt z CSS custom property
      const tiltDeg = parseFloat(
        getComputedStyle(card).getPropertyValue('--card-tilt')
      ) || 0;

      card.addEventListener('mouseenter', () => {
        card.classList.add('card-tilt--active');
      });

      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
        const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);

        const rotY =  dx * 8;
        const rotX = -dy * 6;
        const shadowX = dx * 8;
        const shadowY = dy * 8 + 10;
        const shadowBlur = 20 + (Math.abs(dx) + Math.abs(dy)) * 14;
        const shadowAlpha = 0.14 + (Math.abs(dx) + Math.abs(dy)) * 0.05;

        card.style.transition = 'none';
        card.style.transform =
          `rotate(${tiltDeg}deg) perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px)`;
        card.style.boxShadow =
          `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(22,36,90,${shadowAlpha.toFixed(2)})`;

        if (img) {
          img.style.transition = 'none';
          img.style.transform = `translate(${-dx * 10}px, ${-dy * 8}px) scale(1.07)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        card.classList.remove('card-tilt--active');
        card.style.transition = 'transform 0.6s cubic-bezier(0.22,0.61,0.36,1), box-shadow 0.6s ease';
        card.style.transform = `rotate(${tiltDeg}deg)`;
        card.style.boxShadow = '';

        if (img) {
          img.style.transition = 'transform 0.6s cubic-bezier(0.22,0.61,0.36,1)';
          img.style.transform = '';
        }
      });
    });
  }


  /* -----------------------------------------------------------
     SIGNATURE — cleanup will-change po dokončení pen-write animácie
     Uvoľní GPU vrstvu, ktorú by inak browser držal celý čas.
     ----------------------------------------------------------- */
  function initSignature() {
    const logo = document.querySelector('.nav__logo');
    if (!logo) return;
    logo.addEventListener('animationend', () => {
      logo.dataset.signed = 'true';
    }, { once: true });
  }


  /* -----------------------------------------------------------
     INIT — spusti všetko po načítaní DOM
     ----------------------------------------------------------- */
  /* -----------------------------------------------------------
     12. 3D UNFOLD — Service karty vstávajú zo stola
         Karty štartujú rotateX(82°) — ležia flat v perspektíve.
         Pri scrolle sa jedna po druhej postavia so spring easing.
     ----------------------------------------------------------- */
  function initServiceCards3D() {
    if (prefersReduced) return;

    const grid  = document.querySelector('.services-grid');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.service-card'));
    if (!cards.length) return;

    // Vyrad karty z generického reveal systému — preberáme kontrolu
    cards.forEach((card, i) => {
      card.classList.remove('reveal');
      card.style.setProperty('--card-delay', `${i * 90}ms`);
    });

    grid.classList.add('grid--3d-active');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.service-card').forEach(card => {
          card.classList.add('card--unfolded');
        });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    observer.observe(grid);
  }


  /* -----------------------------------------------------------
     13. BOTANICKÁ LINKA — scroll-driven SVG vinič
         Vine stem sa kreslí cez stroke-dashoffset driven by scroll.
         Lístky a kvetina sa objavujú postupne pri threshold progress.
     ----------------------------------------------------------- */
  function initBotanicalProgress() {
    if (prefersReduced) return;

    const svg    = document.getElementById('botanicalProgress');
    if (!svg) return;

    const stem   = svg.querySelector('.vine-stem');
    const leaves = svg.querySelectorAll('.vine-leaf');
    const flower = svg.querySelector('.vine-flower');
    if (!stem) return;

    requestAnimationFrame(() => {
      const pathLen = stem.getTotalLength();
      stem.style.strokeDasharray  = pathLen;
      stem.style.strokeDashoffset = pathLen;
      svg.style.opacity = '1';

      function onScroll() {
        const scrolled  = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress  = maxScroll > 0 ? Math.min(scrolled / maxScroll, 1) : 0;

        stem.style.strokeDashoffset = pathLen * (1 - progress);

        leaves.forEach(leaf => {
          const t  = parseFloat(leaf.dataset.threshold) || 0;
          const lp = Math.max(0, Math.min(1, (progress - t) / 0.09));
          leaf.style.opacity = lp * 0.65;
        });

        if (flower) {
          const fp = Math.max(0, Math.min(1, (progress - 0.88) / 0.12));
          flower.style.opacity   = fp * 0.85;
          flower.style.transform = `scale(${0.2 + fp * 0.8})`;
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    });
  }


  /* -----------------------------------------------------------
     INIT — spusti všetko po načítaní DOM
     ----------------------------------------------------------- */
  function init() {
    initServiceCards3D(); // musí byť pred initReveal — vyradí karty z reveal systému
    initReveal();
    initNav();
    initActiveNav();
    initParallax();
    initMobileMenu();
    initContactForm();
    initSmoothScroll();
    initStarfield();
    initGalleryFocus();
    initCardTilt();
    initSignature();
    initBotanicalProgress();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
