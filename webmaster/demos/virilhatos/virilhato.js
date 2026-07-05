/* Virilhato's — menu mobile (hambúrguer + drawer). Progressive enhancement. */
(function () {
  var header = document.querySelector('header');
  var toggle = document.querySelector('.menu-toggle');
  if (!header || !toggle) return;

  function close() { header.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }

  toggle.addEventListener('click', function () {
    var open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  header.querySelectorAll('.nav-wrap a').forEach(function (a) { a.addEventListener('click', close); });
  window.addEventListener('resize', function () { if (window.innerWidth > 820) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  /* hero video: respeita prefers-reduced-motion (mostra o poster estático) */
  var video = document.querySelector('.hero-video');
  if (video && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.removeAttribute('autoplay');
    video.addEventListener('loadeddata', function () { video.pause(); });
    try { video.pause(); } catch (e) {}
  }
})();
