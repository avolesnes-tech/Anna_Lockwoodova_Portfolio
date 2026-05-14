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
      osc.frequency.setValueAtTime(440, ac.currentTime);
      osc.frequency.exponentialRampToValueAtTime(90, ac.currentTime + 0.12);

      // Lowpass filter — mäkký, zaoblený tón
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(700, ac.currentTime);
      filter.frequency.exponentialRampToValueAtTime(150, ac.currentTime + 0.12);

      // Pomalší útok + dlhší jemný fade-out = tichší "dych"
      gain.gain.setValueAtTime(0, ac.currentTime);
      gain.gain.linearRampToValueAtTime(0.062, ac.currentTime + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.12);

      osc.start(ac.currentTime);
      osc.stop(ac.currentTime + 0.13);
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
