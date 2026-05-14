/* =============================================================
   distortion.js — SVG feTurbulence vlnová deformácia na hover
   Aplikuje sa na <img> vo vnútri .strip-item cez inline SVG filter
   #strip-wave (definovaný v index.html).
   ============================================================= */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init() {
    if (prefersReduced) return;

    const dispMap    = document.querySelector('#strip-wave feDisplacementMap');
    const turbulence = document.querySelector('#strip-wave feTurbulence');
    if (!dispMap || !turbulence) return;

    const items = document.querySelectorAll('.strip-item');
    if (!items.length) return;

    let currentScale = 0;
    let targetScale  = 0;
    let time         = 0;
    let rafId        = null;
    let activeImg    = null;

    function tick() {
      time += 0.02;
      currentScale += (targetScale - currentScale) * 0.07;

      // Jemne živá frekvencia — plynulé vlnenie, nie statické
      const fx = 0.014 + Math.sin(time * 0.9)  * 0.004;
      const fy = 0.019 + Math.cos(time * 0.65) * 0.004;
      turbulence.setAttribute('baseFrequency', fx.toFixed(4) + ' ' + fy.toFixed(4));
      dispMap.setAttribute('scale', (currentScale * 16).toFixed(2));

      if (Math.abs(targetScale - currentScale) > 0.002 || targetScale > 0.001) {
        rafId = requestAnimationFrame(tick);
      } else {
        if (activeImg) {
          activeImg.style.filter = '';
          activeImg = null;
        }
        currentScale = 0;
        rafId = null;
      }
    }

    items.forEach(item => {
      const img = item.querySelector('img');
      if (!img) return;

      item.addEventListener('mouseenter', () => {
        if (activeImg && activeImg !== img) activeImg.style.filter = '';
        activeImg = img;
        img.style.filter = 'url(#strip-wave)';
        targetScale = 1;
        if (!rafId) rafId = requestAnimationFrame(tick);
      });

      item.addEventListener('mouseleave', () => {
        targetScale = 0;
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
