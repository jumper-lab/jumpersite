/* ═══════════════════════════════════════════════════════════════
   O GRIFO DOURADO — Menu Mobile
   JS mínimo: hamburger toggle + drawer + acessibilidade
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-list');
  var overlay = document.querySelector('.nav-overlay');

  if (!toggle || !navList) return;

  // Cria overlay se não existir
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
  }

  function openMenu() {
    navList.classList.add('open');
    overlay.classList.add('visible');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navList.classList.remove('open');
    overlay.classList.remove('visible');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Toggle no clique
  toggle.addEventListener('click', toggleMenu);

  // Fecha ao clicar no overlay
  overlay.addEventListener('click', closeMenu);

  // Fecha ao clicar num link
  navList.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Fecha com Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navList.classList.contains('open')) {
      closeMenu();
      toggle.focus();
    }
  });

  // Fecha ao redimensionar para desktop
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (window.innerWidth > 820 && navList.classList.contains('open')) {
        closeMenu();
      }
    }, 100);
  });
})();
