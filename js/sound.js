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
  async function playHover() {
    if (!enabled || !throttle(80)) return;
    try {
      const ac = getCtx();
      if (ac.state === 'suspended') await ac.resume();

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

  /* Bubble pop — galéria Tvorba
     Pomalý, hlboký bublinkový efekt — teplý a jemný
     280Hz → 55Hz za 380ms, mäkký lowpass, pomalý útok */
  async function playBubble() {
    if (!enabled || !throttle(260)) return;
    try {
      const ac = getCtx();
      if (ac.state === 'suspended') await ac.resume();

      const osc    = ac.createOscillator();
      const gain   = ac.createGain();
      const filter = ac.createBiquadFilter();

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ac.destination);

      // Hlboký, pomalý frekvenčný pokles = "plopp" s dychom
      osc.type = 'sine';
      osc.frequency.setValueAtTime(280, ac.currentTime);
      osc.frequency.exponentialRampToValueAtTime(55, ac.currentTime + 0.38);

      // Mäkký lowpass — zaoblený, teplý tón
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(480, ac.currentTime);
      filter.frequency.exponentialRampToValueAtTime(80, ac.currentTime + 0.38);

      // Pomalý útok, dlhý jemný fade-out
      gain.gain.setValueAtTime(0, ac.currentTime);
      gain.gain.linearRampToValueAtTime(0.072, ac.currentTime + 0.028);
      gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.38);

      osc.start(ac.currentTime);
      osc.stop(ac.currentTime + 0.40);
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
