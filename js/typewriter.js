/* =============================================================
   typewriter.js — Typewriter efekt pre hero tagline
   ============================================================= */

(function () {
  'use strict';

  // Rešpektujeme prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const container = document.getElementById('heroTagline');
  if (!container) return;

  // Text, ktorý sa píše — dve čiary
  const lines = [
    'Robím weby ako umenie —',
    's dôrazom na zámer, cit a detail.'
  ];

  // Rýchlosť písania (ms na znak)
  const CHAR_SPEED   = 52;
  const PAUSE_LINE   = 620;  // pauza medzi riadkami
  const PAUSE_END    = 400;  // pauza pred zmiznutím kurzora

  // Ak user preferuje redukovaný pohyb — zobraz text okamžite
  if (prefersReduced) {
    lines.forEach((line, i) => {
      const span = document.createElement('span');
      span.className = 'hero__tagline-line';
      span.textContent = line;
      container.appendChild(span);
      if (i < lines.length - 1) container.appendChild(document.createElement('br'));
    });
    return;
  }

  // Vytvor elementy pre obe čiary
  const lineEls = lines.map((_, i) => {
    const span = document.createElement('span');
    span.className = 'hero__tagline-line';
    container.appendChild(span);
    if (i < lines.length - 1) container.appendChild(document.createElement('br'));
    return span;
  });

  // Kurzor
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  container.appendChild(cursor);

  // Písanie znakov — Promise-based, čistá sekvencia
  function typeChars(el, text, speed) {
    return new Promise(resolve => {
      let i = 0;
      function next() {
        if (i < text.length) {
          el.textContent += text[i];
          i++;
          setTimeout(next, speed + (Math.random() * 20 - 10)); // ľudská variabilita
        } else {
          resolve();
        }
      }
      next();
    });
  }

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Spusti sekvenciu s oneskorením (meno sa zobrazí skôr)
  async function runTypewriter() {
    await wait(820); // čaká kým prebehne fadeIn mena + linka

    // Píše riadok 1
    await typeChars(lineEls[0], lines[0], CHAR_SPEED);
    await wait(PAUSE_LINE);

    // Píše riadok 2
    await typeChars(lineEls[1], lines[1], CHAR_SPEED);
    await wait(PAUSE_END);

    // Kurzor zabliká 3× a zmizne
    cursor.classList.add('typewriter-cursor--done');
    await wait(1400);
    cursor.remove();
  }

  runTypewriter();

})();
