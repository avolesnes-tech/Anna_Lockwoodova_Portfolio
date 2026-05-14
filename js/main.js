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
     9. STARFIELD — Canvas mlhovina hviezd vedľa "Prečo si vybrať mňa"
        Každá hviezda má radial-gradient glow, sine-wave twinkle
        a gaussian Y-distribúciu (Milky Way band).
        Reveal animácia: hviezdy sa objavujú zľava doprava.
     ----------------------------------------------------------- */
  function initStarfield() {
    const container = document.querySelector('.starfield');
    if (!container) return;

    // Vytvor canvas a nastav HiDPI
    const canvas = document.createElement('canvas');
    const dpr    = Math.min(window.devicePixelRatio || 1, 2);
    const W      = container.offsetWidth  || 280;
    const H      = container.offsetHeight || 72;

    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = '100%';
    canvas.style.height = '100%';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // ── Generuj hviezdy s Milky Way distribúciou ──────────────
    const TOTAL = 160;
    const stars = [];
    const cy = H * 0.5;    // centrum pásu
    const sigma = H * 0.32; // šírka gaussiánu

    // Box-Muller pre gaussian Y
    function gauss() {
      const u = 1 - Math.random();
      const v = Math.random();
      return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    }

    for (let i = 0; i < TOTAL; i++) {
      const x = Math.random() * W;
      const y = Math.max(1, Math.min(H - 1, cy + gauss() * sigma));

      // Kategória hviezdy: 55% tiny, 30% medium, 15% bright
      const roll = Math.random();
      let r, peak, glowR;
      if (roll < 0.55) {
        r = 0.6 + Math.random() * 0.6;   peak = 0.52 + Math.random() * 0.39; glowR = 0;
      } else if (roll < 0.85) {
        r = 1.2 + Math.random() * 1.0;   peak = 0.78 + Math.random() * 0.39; glowR = r * 2.2;
      } else {
        r = 2.2 + Math.random() * 1.3;   peak = Math.min(1, 0.90 + Math.random() * 0.20); glowR = r * 3.5;
      }

      stars.push({
        x, y, r, peak, glowR,
        phase : Math.random() * Math.PI * 2,   // fáza blikania
        speed : 0.25 + Math.random() * 0.6,    // rýchlosť blikania
        reveal: x / W,                          // 0–1: kedy sa objaví (ľava → pravá)
      });
    }

    // ── Vykresli jednu hviezdu ────────────────────────────────
    function drawStar(s, progress, time) {
      if (progress <= 0) return;

      // Twinkle: sínusoida ± 20% jasu, iba pre stredné a jasné
      const twinkle = s.glowR > 0
        ? 1 - 0.22 * (0.5 + 0.5 * Math.sin(time * s.speed + s.phase))
        : 1;
      const alpha = Math.min(1, progress * 2.5) * s.peak * twinkle;
      const scale = Math.min(1, progress * 2);
      const rad   = s.r * scale;

      ctx.save();

      if (s.glowR > 0 && rad > 0.3) {
        // Glow: tight radial gradient — star-like, not blob-like
        const glowEdge = rad + s.glowR * scale;
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowEdge);
        g.addColorStop(0,    `rgba(255,255,255,${alpha})`);
        g.addColorStop(0.12, `rgba(200,220,255,${alpha * 0.85})`);
        g.addColorStop(0.40, `rgba(100,140,255,${alpha * 0.38})`);
        g.addColorStop(1,    `rgba(37,64,184,0)`);

        ctx.beginPath();
        ctx.arc(s.x, s.y, glowEdge, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      // Core hviezdy — čistá biela bodka
      ctx.beginPath();
      ctx.arc(s.x, s.y, Math.max(0.25, rad), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fill();

      ctx.restore();
    }

    // ── Animačná slučka ───────────────────────────────────────
    let startTime = null;
    let rafId     = null;
    let running   = false;
    const REVEAL_DUR = 2.2; // sekundy kým sa objavia všetky hviezdy

    function render(ts) {
      if (!startTime) startTime = ts;
      const elapsed = (ts - startTime) / 1000;

      ctx.clearRect(0, 0, W, H);

      for (const s of stars) {
        // Každá hviezda sa objaví keď elapsed presiahne jej reveal threshold
        const revealProgress = Math.max(0,
          (elapsed - s.reveal * REVEAL_DUR) / 0.5
        );
        drawStar(s, revealProgress, elapsed);
      }

      if (running) rafId = requestAnimationFrame(render);
    }

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

    // Pauza keď nie je viditeľné (výkon)
    const visObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { start(); }
        else                  { stop();  }
      });
    }, { threshold: 0.1 });

    visObserver.observe(container);

    // Redukovaný pohyb: jednorazový statický render
    if (prefersReduced) {
      container.classList.add('starfield--visible');
      startTime = 0;
      ctx.clearRect(0, 0, W, H);
      for (const s of stars) drawStar(s, 1, 0);
    }
  }


  /* -----------------------------------------------------------
     10. CARD TILT — 3D perspektívny náklon karty pri hover
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
  function init() {
    initReveal();
    initNav();
    initActiveNav();
    initParallax();
    initMobileMenu();
    initContactForm();
    initSmoothScroll();
    initStarfield();
    initCardTilt();
    initSignature();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
