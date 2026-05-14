/* =============================================================
   sound.js — Web Audio API hover micro-sounds
   playHover()  — jemný klik pre nav/tlačidlá
   playBubble() — "bubble pop" pre galériu
   Toggle: window.toggleSound()
   ============================================================= */

(function () {
  'use strict';

  let ctx = null;
  let enabled = localStorage.getItem('soundEnabled') !== 'false';
  let lastPlay = 0;

  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  }

  function throttle(ms) {
    const now = Date.now();
    if (now - lastPlay < ms) return false;
    lastPlay = now;
    return true;
  }

  /* Jemný klik — nav linky, tlačidlá */
  function playHover() {
    if (!enabled || !throttle(80)) return;
    try {
      const ac = getCtx();
      if (ac.state === 'suspended') ac.resume();

      const osc  = ac.createOscillator();
      const gain = ac.createGain();
      osc.connect(gain);
      gain.connect(ac.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(820, ac.currentTime);
      osc.frequency.exponentialRampToValueAtTime(620, ac.currentTime + 0.04);

      gain.gain.setValueAtTime(0.05, ac.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.04);

      osc.start(ac.currentTime);
      osc.stop(ac.currentTime + 0.05);
    } catch (_) {}
  }

  /* Bubble pop — galéria obrázkov
     Tón: mäkký "plopp" — rýchly útok, exponenciálny pokles frekvencie
     Podobný fyzikálnemu prasku bubliny (600Hz → 120Hz, 90ms) */
  function playBubble() {
    if (!enabled || !throttle(120)) return;
    try {
      const ac = getCtx();
      if (ac.state === 'suspended') ac.resume();

      const osc    = ac.createOscillator();
      const gain   = ac.createGain();
      const filter = ac.createBiquadFilter();

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ac.destination);

      // Sine + rýchly frekvenčný pokles = "plopp"
      osc.type = 'sine';
      osc.frequency.setValueAtTime(560, ac.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ac.currentTime + 0.09);

      // Lowpass filter zmäkčí zvuk — menej syčivý, viac zaoblený
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(900, ac.currentTime);
      filter.frequency.exponentialRampToValueAtTime(200, ac.currentTime + 0.09);

      // Krátky útok + rýchly fade-out
      gain.gain.setValueAtTime(0, ac.currentTime);
      gain.gain.linearRampToValueAtTime(0.10, ac.currentTime + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.09);

      osc.start(ac.currentTime);
      osc.stop(ac.currentTime + 0.10);
    } catch (_) {}
  }

  function init() {
    document.querySelectorAll('.nav__link, .project-card, .btn')
      .forEach(el => el.addEventListener('mouseenter', playHover));

    document.querySelectorAll('.strip-item')
      .forEach(el => el.addEventListener('mouseenter', playBubble));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.toggleSound  = function () {
    enabled = !enabled;
    localStorage.setItem('soundEnabled', String(enabled));
    return enabled;
  };
  window.isSoundEnabled = function () { return enabled; };
})();
