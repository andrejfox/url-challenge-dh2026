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
})();
