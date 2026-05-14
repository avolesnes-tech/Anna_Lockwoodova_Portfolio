/* =============================================================
   sound.js — Web Audio API hover micro-sounds
   Syntetický burst bez externých súborov.
   Vypnutie: localStorage.setItem('soundEnabled', 'false')
   Toggle: window.toggleSound()
   ============================================================= */

(function () {
  'use strict';

  let ctx = null;
  let enabled = localStorage.getItem('soundEnabled') !== 'false';
  let lastPlay = 0;

  function getCtx() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return ctx;
  }

  function playHover() {
    if (!enabled) return;

    // Throttle: max 1× per 80ms (rýchly pohyb myši)
    const now = Date.now();
    if (now - lastPlay < 80) return;
    lastPlay = now;

    try {
      const ac = getCtx();
      if (ac.state === 'suspended') ac.resume();

      const osc  = ac.createOscillator();
      const gain = ac.createGain();
      osc.connect(gain);
      gain.connect(ac.destination);

      // Jemný sine burst: 820Hz → 620Hz, 40ms, fade-out
      osc.type = 'sine';
      osc.frequency.setValueAtTime(820, ac.currentTime);
      osc.frequency.exponentialRampToValueAtTime(620, ac.currentTime + 0.04);

      gain.gain.setValueAtTime(0.05, ac.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.04);

      osc.start(ac.currentTime);
      osc.stop(ac.currentTime + 0.05);
    } catch (_) {
      // AudioContext môže byť blokovaný v niektorých prehliadačoch
    }
  }

  function init() {
    const triggers = document.querySelectorAll('.nav__link, .project-card, .atelier-item, .btn');
    triggers.forEach(el => el.addEventListener('mouseenter', playHover));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.toggleSound = function () {
    enabled = !enabled;
    localStorage.setItem('soundEnabled', String(enabled));
    return enabled;
  };

  window.isSoundEnabled = function () { return enabled; };
})();
