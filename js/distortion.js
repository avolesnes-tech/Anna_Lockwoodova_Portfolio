/* =============================================================
   distortion.js — entry-burst vlnová deformácia na hover
   Efekt sa spustí raz pri mouseenter, rýchlo vyvrcholí
   a sám sa utlmí — obrázok sa stabilizuje čisto.
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
    let time         = 0;
    let phase        = 'idle'; // 'rising' | 'falling' | 'idle'
    let rafId        = null;
    let activeImg    = null;

    function tick() {
      time += 0.025;

      if (phase === 'rising') {
        currentScale += (1.0 - currentScale) * 0.07; // pomalší nástup
        if (currentScale > 0.72) phase = 'falling';
      } else if (phase === 'falling') {
        currentScale *= 0.90; // hladší, pomalší útlm
      }

      const fx = 0.011 + Math.sin(time * 0.8)  * 0.002;
      const fy = 0.015 + Math.cos(time * 0.55) * 0.002;
      turbulence.setAttribute('baseFrequency', fx.toFixed(4) + ' ' + fy.toFixed(4));
      dispMap.setAttribute('scale', (currentScale * 10).toFixed(2)); // −30% amplitúda

      if (currentScale > 0.004) {
        rafId = requestAnimationFrame(tick);
      } else {
        dispMap.setAttribute('scale', '0');
        if (activeImg) {
          activeImg.style.filter = '';
          activeImg = null;
        }
        currentScale = 0;
        phase = 'idle';
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
        currentScale = 0;
        phase = 'rising';
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(tick);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
