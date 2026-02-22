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

  const cursorHalo = document.createElement('div');
  cursorHalo.className = 'cursor-halo';
  document.body.appendChild(cursorHalo);

  function setHaloPosition(event) {
    cursorHalo.style.left = event.clientX + 'px';
    cursorHalo.style.top = event.clientY + 'px';
    document.body.classList.add('halo-active');
  }

  window.addEventListener('mousemove', setHaloPosition, { passive: true });
  window.addEventListener('mousedown', function () {
    document.body.classList.add('halo-click');
  });
  window.addEventListener('mouseup', function () {
    document.body.classList.remove('halo-click');
  });
  window.addEventListener('mouseleave', function () {
    document.body.classList.remove('halo-active');
  });
})();
