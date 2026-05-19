/* =============================================================
   cursor.js — Custom kurzor (desktop only)
   ============================================================= */

(function () {
  'use strict';

  // Len na zariadeniach s myšou
  const hasHover = window.matchMedia('(hover: hover)').matches;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const cursorEl = document.getElementById('cursor');
  if (!cursorEl || !hasHover) return;

  let mouseX = -100;
  let mouseY = -100;
  let curX   = -100;
  let curY   = -100;
  let rafId  = null;
  let initialized = false;

  // Ak prefers-reduced-motion, stále zobrazíme kurzor ale bez lag-u
  const LAG = prefersReduced ? 1 : 0.12; // 0.12 = jemné zaostávanie

  // Pohyb myši — pri prvom pohybe okamžite skočíme na pozíciu (žiadne dobiehanie)
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!initialized) {
      curX = mouseX;
      curY = mouseY;
      initialized = true;
    }
  });

  // Animačná slučka — smooth following
  function animate() {
    curX += (mouseX - curX) * LAG;
    curY += (mouseY - curY) * LAG;

    cursorEl.style.transform = `translate(calc(${curX}px - 50%), calc(${curY}px - 50%))`;

    rafId = requestAnimationFrame(animate);
  }

  // Hover stavy
  function addHoverListeners() {
    // Linky a tlačidlá — zväčší krúžok
    const clickables = document.querySelectorAll(
      'a, button, .project-card, .service-card, .atelier-grid__item, [role="button"], input, textarea, label'
    );

    clickables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorEl.classList.add('cursor--hover');
        cursorEl.classList.remove('cursor--image');
      });
      el.addEventListener('mouseleave', () => {
        cursorEl.classList.remove('cursor--hover');
      });
    });

    // Obrázky projektov — zobraz "Zobraziť"
    const images = document.querySelectorAll(
      '.project-card__image-wrap, .atelier-grid__item'
    );

    images.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorEl.classList.add('cursor--image');
        cursorEl.classList.remove('cursor--hover');
      });
      el.addEventListener('mouseleave', () => {
        cursorEl.classList.remove('cursor--image');
      });
    });
  }

  // Keď myš vstúpi do okna (napr. prepnutie záložky), okamžite snap na pozíciu
  document.addEventListener('mouseenter', e => {
    curX = e.clientX;
    curY = e.clientY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    initialized = true;
    cursorEl.style.opacity = '1';
  });

  document.addEventListener('mouseleave', () => {
    cursorEl.style.opacity = '0';
  });

  // Štart
  animate();

  // Hover listenery — po načítaní DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addHoverListeners);
  } else {
    addHoverListeners();
  }

})();
