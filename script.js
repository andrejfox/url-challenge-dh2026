/* ---------- Portfolio navigation behavior ---------- */

(function () {
  'use strict';

  const nav = document.querySelector('.nav');
  function updateNav() {
    if (!nav) {
      return;
    }
    nav.classList.toggle('scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');

  function updateActiveLink() {
    let current = '';
    sections.forEach(function (sec) {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.getAttribute('id');
      }
    });
    navAnchors.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // Text scramble animation for hero title
  const scrambleEl = document.querySelector('.hero__title--scramble');
  if (scrambleEl) {
    const targetText = scrambleEl.getAttribute('data-target');
    const chars = 'ÄÖÜßñáéíóúâêîôûãõ!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    let frame = 0;
    const frameRate = 50;
    const frameStart = 20;
    const frameEnd = frameStart + targetText.length * 8;

    function updateScramble() {
      let output = '';
      for (let i = 0; i < targetText.length; i++) {
        const frameForChar = frameStart + i * 8;
        if (frame >= frameForChar) {
          const elapsedFrames = frame - frameForChar;
          if (elapsedFrames > 7) {
            output += targetText[i];
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        } else {
          output += ' ';
        }
      }
      scrambleEl.textContent = output;
    }

    function animate() {
      updateScramble();
      frame++;
      if (frame <= frameEnd) {
        requestAnimationFrame(animate);
      } else {
        scrambleEl.textContent = targetText;
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', animate);
    } else {
      animate();
    }
  }
})();
