/* =============================================
   DragonHack 2026 – URL Challenge
   Minimal JS: nav scroll state + mobile menu
   ============================================= */

(function () {
  'use strict';

  /* ---------- Nav: add .scrolled class on scroll ---------- */
  const nav = document.querySelector('.nav');
  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ---------- Mobile hamburger menu ---------- */
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks  = document.querySelector('.nav__links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });

    /* Close mobile menu when a link is tapped */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Active nav link on scroll ---------- */
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
