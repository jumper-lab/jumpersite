/* ============================================
   webmaster.js — LP Jumper Webmaster (protótipo Fable, ato II)
   Camada 1: lógica de produto (nichos, datas, WhatsApp, contador)
   Camada 2: cinematografia GSAP/Lenis (progressive enhancement —
   sem GSAP ou com prefers-reduced-motion, a página é 100% estática e legível)
   ============================================ */
(function () {
  'use strict';

  /* ================= CAMADA 1 — PRODUTO ================= */

  var NICHES = {
    food:   { chip: 'Restaurante', term: 'um restaurante',             search: 'um restaurante', model: 'Food Menu',     modelFor: 'pra restaurantes, padarias e delivery', demo: '/webmaster/demos/virilhatos/' },
    clean:  { chip: 'Clínica',     term: 'uma clínica',                search: 'uma clínica',    model: 'Clean Service', modelFor: 'pra clínicas e consultórios', demo: '/webmaster/demos/salles/' },
    fit:    { chip: 'Academia',    term: 'uma academia',               search: 'uma academia',   model: 'Fit Studio',    modelFor: 'pra academias, estúdios e personais' },
    legal:  { chip: 'Advocacia',   term: 'um escritório de advocacia', search: 'um advogado',    model: 'Pro Legal',     modelFor: 'pra advogados, contadores e consultores' },
    shop:   { chip: 'Loja',        term: 'uma loja',                   search: 'uma loja',       model: 'Shop Front',    modelFor: 'pra lojas físicas e comércio', demo: '/webmaster/demos/grifo-dourado/' },
    beauty: { chip: 'Beleza',      term: 'um espaço de estética',      search: 'um salão',       model: 'Beauty Clinic', modelFor: 'pra estética, clínicas e salões' }
  };
  var ORDER = ['food', 'clean', 'fit', 'legal', 'shop', 'beauty'];
  var current = 'food';

  function cloneMini(key) {
    var t = document.getElementById('mini-' + key);
    return t ? t.content.firstElementChild.cloneNode(true) : null;
  }

  var utm = (function () {
    var p = new URLSearchParams(window.location.search);
    var bits = [p.get('utm_source'), p.get('utm_campaign')].filter(Boolean);
    return bits.length ? ' [' + bits.join('/') + ']' : '';
  })();

  function waHref(niche, model) {
    var msg = 'Olá! Vi o Jumper Webmaster e quero meu site por R$ 2.980*. Tenho ' + NICHES[niche].term + '.';
    if (model) msg += ' Quero começar com o modelo ' + model + '.';
    msg += utm;
    return 'https://wa.me/5521964369191?text=' + encodeURIComponent(msg);
  }

  function refreshWaLinks() {
    document.querySelectorAll('.js-wa').forEach(function (a) {
      a.href = waHref(current, a.getAttribute('data-model') || null);
    });
  }

  var heroScreen = document.getElementById('hero-screen');
  var baAfter = document.getElementById('ba-after');
  var buildScreen = document.getElementById('build-screen');

  function setNiche(key) {
    current = key;
    document.body.setAttribute('data-niche', key);

    document.querySelectorAll('[data-niche-btn]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-niche-btn') === key));
    });

    [heroScreen, baAfter, buildScreen].forEach(function (mount) {
      if (!mount) return;
      mount.classList.add('swap');
      var mini = cloneMini(key);
      setTimeout(function () {
        mount.innerHTML = '';
        if (mini) mount.appendChild(mini);
        mount.classList.remove('swap');
      }, 180);
    });

    document.querySelectorAll('.js-model-name').forEach(function (el) { el.textContent = NICHES[key].model; });
    document.querySelectorAll('.js-model-for').forEach(function (el) { el.textContent = NICHES[key].modelFor; });
    document.querySelectorAll('.js-niche-search').forEach(function (el) { el.textContent = NICHES[key].search; });
    document.querySelectorAll('.model-card').forEach(function (c) {
      c.classList.toggle('is-active', c.getAttribute('data-model-key') === key);
    });
    refreshWaLinks();
  }

  document.querySelectorAll('[data-niche-btn]').forEach(function (b) {
    b.addEventListener('click', function () { setNiche(b.getAttribute('data-niche-btn')); });
  });

  /* grid de modelos */
  var grid = document.getElementById('models-grid');
  if (grid) {
    ORDER.forEach(function (key) {
      var card = document.createElement('div');
      card.className = 'model-card';
      card.setAttribute('data-model-key', key);
      var screen = document.createElement('div');
      screen.className = 'model-screen';
      if (NICHES[key].demo) {
        /* vitrine acesa: o card mostra o SITE REAL (iframe escalado como miniatura) */
        screen.className += ' has-preview';
        var frame = document.createElement('iframe');
        frame.className = 'model-preview';
        frame.src = NICHES[key].demo;
        frame.loading = 'lazy';
        frame.tabIndex = -1;
        frame.setAttribute('scrolling', 'no');
        frame.setAttribute('aria-hidden', 'true');
        frame.setAttribute('title', 'Prévia do site ' + NICHES[key].model);
        screen.appendChild(frame);
        var over = document.createElement('a');
        over.className = 'model-preview-link';
        over.href = NICHES[key].demo;
        over.target = '_blank';
        over.rel = 'noopener';
        over.setAttribute('data-cta', 'preview-' + key);
        over.setAttribute('aria-label', 'Ver o site ' + NICHES[key].model + ' ao vivo');
        over.innerHTML = '<span class="model-preview-badge">Ver ao vivo ↗</span>';
        screen.appendChild(over);
      } else {
        var mini = cloneMini(key);
        if (mini) screen.appendChild(mini);
      }
      var info = document.createElement('div');
      info.className = 'model-info';
      var demoLink = NICHES[key].demo
        ? '<a class="model-demo" data-cta="demo-' + key + '" target="_blank" rel="noopener" href="' + NICHES[key].demo + '">Ver demo ao vivo</a>'
        : '';
      info.innerHTML =
        '<h3>' + NICHES[key].model + '</h3>' +
        '<p>' + NICHES[key].modelFor + '</p>' +
        '<div class="model-actions">' +
          '<a class="model-cta js-wa" data-model="' + NICHES[key].model + '" data-cta="modelo-' + key + '" target="_blank" rel="noopener" href="#">Começar com este modelo</a>' +
          demoLink +
        '</div>';
      card.appendChild(screen);
      card.appendChild(info);
      grid.appendChild(card);
    });
  }

  /* datas reais */
  function fmtLong(d) {
    return d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
  }
  var D0 = new Date();
  function dayDate(n) { return new Date(D0.getTime() + n * 864e5); }
  function fill(cls, txt) {
    document.querySelectorAll('.' + cls).forEach(function (el) { el.textContent = txt; });
  }
  fill('js-d0', fmtLong(D0));
  fill('js-d7', fmtLong(dayDate(7)));
  fill('js-d14', fmtLong(dayDate(14)));
  fill('js-d0-day', String(D0.getDate()).padStart(2, '0'));
  fill('js-d7-day', String(dayDate(7).getDate()).padStart(2, '0'));
  fill('js-d14-day', String(dayDate(14).getDate()).padStart(2, '0'));

  /* contador de vagas (?vagas=N) */
  var vagas = 47;
  var qs = new URLSearchParams(window.location.search).get('vagas');
  if (qs && !isNaN(qs)) vagas = Math.max(0, Math.min(50, parseInt(qs, 10)));
  fill('js-vagas', String(vagas));
  document.querySelectorAll('.js-lot-fill').forEach(function (el) {
    el.style.width = ((50 - vagas) / 50 * 100) + '%';
  });

  /* antes/depois */
  var range = document.getElementById('ba-range');
  var before = document.getElementById('ba-before');
  var handle = document.getElementById('ba-handle');
  if (range && before && handle) {
    var setBa = function (v) {
      before.style.clipPath = 'inset(0 ' + (100 - v) + '% 0 0)';
      handle.style.left = v + '%';
    };
    range.addEventListener('input', function () { setBa(range.value); });
    setBa(50);
  }

  /* prova ao vivo */
  window.addEventListener('load', function () {
    setTimeout(function () {
      try {
        var nav = performance.getEntriesByType('navigation')[0];
        if (nav && nav.loadEventEnd > 0) {
          fill('js-load', (nav.loadEventEnd / 1000).toFixed(1).replace('.', ',') + 's');
        }
        var bytes = performance.getEntriesByType('resource').reduce(function (sum, r) {
          return sum + (r.transferSize || 0);
        }, 0) + (nav ? (nav.transferSize || 0) : 0);
        if (bytes > 0) fill('js-weight', Math.max(1, Math.round(bytes / 1024)) + ' KB');
      } catch (e) { /* medidores são cosméticos */ }
    }, 0);
  });

  /* tracking (Pixel/GA4 — plugar IDs ao publicar) */
  document.addEventListener('click', function (ev) {
    var el = ev.target.closest('[data-cta]');
    if (!el) return;
    var pos = el.getAttribute('data-cta') || 'cta';
    if (typeof fbq === 'function') fbq('track', 'Lead', { content_name: 'webmaster_' + pos });
    if (typeof gtag === 'function') gtag('event', 'click_cta', { id: 'webmaster_' + pos, niche: current });
  });

  setNiche('food');

  /* ---------- dois cortes: traffic (leve, padrão) × flagship (pirotécnico) ---------- */
  var params = new URLSearchParams(window.location.search);
  /* corte padrão = traffic (leve, mobile-safe, roda o tráfego pago).
     O corte flagship (scroll-video do Sobrevoo) é acessível por ?cut=flagship. */
  var CUT = params.get('cut') === 'flagship' ? 'flagship' : 'traffic';
  document.body.setAttribute('data-cut', CUT);

  /* ================= CAMADA 2 — CINEMATOGRAFIA ================= */

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  /* reveals básicos: IO puro, funciona com ou sem GSAP */
  if (!reduced && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-anim');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
    document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
  }

  if (reduced || !hasGsap) return; /* página estática completa a partir daqui */

  var gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger);
  var ST = window.ScrollTrigger;

  /* ---------- Lenis: scroll com inércia ---------- */
  var lenis = null;
  if (typeof window.Lenis === 'function') {
    lenis = new window.Lenis({ lerp: 0.11, wheelMultiplier: 1 });
    lenis.on('scroll', ST.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    /* âncoras internas passam pelo Lenis */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (ev) {
        var target = document.querySelector(a.getAttribute('href'));
        if (target) { ev.preventDefault(); lenis.scrollTo(target, { offset: -64 }); }
      });
    });
  }

  /* ---------- O SOBREVOO: scroll-video (image sequence no canvas) ----------
     Técnica AirPods: os 46 frames são desenhados no canvas conforme o scroll.
     Só no corte flagship + desktop; traffic/mobile ficam no poster estático. */
  (function sobrevoo() {
    if (CUT !== 'flagship' || window.innerWidth < 900) return;
    var sec = document.querySelector('.wm-sobrevoo');
    var canvas = document.getElementById('sv-canvas');
    if (!sec || !canvas) return;
    var ctx = canvas.getContext('2d');
    var FRAMES = 48;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var imgs = [];
    var state = { i: 0 };
    var pad = function (n) { return ('00' + n).slice(-3); };

    function sizeCanvas() {
      var r = canvas.getBoundingClientRect();
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      draw(state.i);
    }
    function draw(i) {
      var img = imgs[Math.max(0, Math.min(FRAMES - 1, Math.round(i)))];
      if (!img || !img.complete || !img.naturalWidth) return;
      var cw = canvas.width, ch = canvas.height;
      var ir = img.naturalWidth / img.naturalHeight, cr = cw / ch;
      var dw, dh, dx, dy;
      if (cr > ir) { dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2; }
      else { dh = ch; dw = ch * ir; dy = 0; dx = (cw - dw) / 2; }
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    }

    /* captions HTML: abertura fade-out no 1º quarto, fecho fade-in no último */
    var capIn = document.getElementById('sv-cap-in');
    var capOut = document.getElementById('sv-cap-out');
    function driveCaptions(p) {
      if (capIn) capIn.style.opacity = String(Math.max(0, 1 - p / 0.22));
      if (capOut) capOut.style.opacity = String(Math.max(0, (p - 0.74) / 0.22));
    }

    var booted = false;
    function boot() {
      if (booted) return;
      booted = true;
      sec.classList.add('is-live');   /* .sv-pin passa a 100vh → refresh obrigatório */
      sizeCanvas();
      driveCaptions(0);
      gsap.to(state, {
        i: FRAMES - 1,
        ease: 'none',
        onUpdate: function () { draw(state.i); },
        scrollTrigger: {
          trigger: sec,
          start: 'top top',
          end: '+=260%',
          pin: '.sv-pin',
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: function (self) { driveCaptions(self.progress); },
          onEnter: function () { var h = sec.querySelector('.sv-hint'); if (h) h.classList.add('gone'); }
        }
      });
      ST.refresh();
    }

    for (var i = 0; i < FRAMES; i++) {
      (function (idx) {
        var im = new Image();
        im.decoding = 'async';
        im.onload = function () { if (idx === 0) boot(); };
        im.src = '/webmaster/sobrevoo/frames/frame-' + pad(idx) + '.jpg';
        imgs[idx] = im;
      })(i);
    }
    if (imgs[0] && imgs[0].complete) boot();
    window.addEventListener('resize', sizeCanvas);
  })();

  /* ---------- util: quebrar texto em palavras preservando <b>/<em> ---------- */
  function splitWords(el) {
    var frag = document.createDocumentFragment();
    Array.prototype.slice.call(el.childNodes).forEach(function walk(node) {
      if (node.nodeType === 3) {
        node.textContent.split(/(\s+)/).forEach(function (part) {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); }
          else {
            var s = document.createElement('span');
            s.className = 'w';
            s.textContent = part;
            frag.appendChild(s);
          }
        });
      } else if (node.nodeType === 1) {
        var innerFrag = document.createDocumentFragment();
        Array.prototype.slice.call(node.childNodes).forEach(function (child) {
          var sub = document.createElement('div');
          sub.appendChild(child.cloneNode(true));
          splitWords(sub);
          while (sub.firstChild) innerFrag.appendChild(sub.firstChild);
        });
        node.innerHTML = '';
        node.appendChild(innerFrag);
        frag.appendChild(node.cloneNode(true));
      }
    });
    el.innerHTML = '';
    el.appendChild(frag);
  }

  /* ---------- HERO: entrada orquestrada + preço que despenca ---------- */
  var headline = document.querySelector('.wm-headline');
  if (headline) splitWords(headline);

  var priceEl = document.querySelector('.wm-price-num');
  var wasEl = document.querySelector('.wm-price-was');

  var intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro
    .from('.wm-hero .sec-eyebrow', { y: 16, opacity: 0, duration: 0.5 }, 0.05)
    .from('.wm-headline .w', { y: 34, opacity: 0, duration: 0.7, stagger: 0.045 }, 0.15)
    .from('.wm-price-pair', { y: 24, opacity: 0, duration: 0.6 }, 0.55)
    .from('.wm-claim, .wm-picker, .wm-ctas, .wm-fineprint, .wm-hero-rail', {
      y: 18, opacity: 0, duration: 0.55, stagger: 0.08
    }, 0.7)
    .from('.wm-phone', { y: 46, opacity: 0, duration: 0.9, ease: 'power2.out' }, 0.5)
    .from('.wm-phone-tag', { y: 12, opacity: 0, duration: 0.5 }, 1.05);

  /* o preço cai de 7.000 pra 2.980 na frente do prospect */
  if (priceEl) {
    var price = { v: 7000 };
    intro.to(price, {
      v: 2980,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: function () {
        priceEl.textContent = Math.round(price.v).toLocaleString('pt-BR');
      },
      onComplete: function () { if (wasEl) wasEl.classList.add('struck'); }
    }, 0.75);
  }

  /* parallax sutil do telefone no scroll */
  gsap.to('.wm-phone', {
    y: -40,
    ease: 'none',
    scrollTrigger: { trigger: '.wm-hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  /* ---------- ESPELHO: o texto acende conforme o scroll ---------- */
  var scene = document.querySelector('.wm-scene');
  if (scene) {
    scene.classList.remove('rv');
    splitWords(scene);
    gsap.fromTo('.wm-scene .w',
      { opacity: 0.14 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: 'none',
        scrollTrigger: { trigger: scene, start: 'top 78%', end: 'bottom 42%', scrub: true }
      });
  }

  /* ---------- A CONSTRUÇÃO: 14 dias em um scroll (desktop) ---------- */
  var buildPin = document.querySelector('.build-pin');
  if (buildPin && window.innerWidth >= 900) {
    document.body.classList.add('has-build');

    var dayNum = document.getElementById('build-day-num');
    var dateEl = document.getElementById('build-date');
    var state = { day: 0 };

    var steps = gsap.utils.toArray('.build-step');
    var files = gsap.utils.toArray('.bfile');
    var wires = gsap.utils.toArray('.build-wire > i');
    var logs = gsap.utils.toArray('.build-log span');

    gsap.set(steps, { opacity: 0, y: 22 });
    gsap.set(steps[0], { opacity: 1, y: 0 });
    gsap.set('.build-screen', { clipPath: 'inset(0 0 100% 0)' });
    gsap.set('.build-done', { opacity: 0, y: 14 });
    gsap.set(logs, { opacity: 0 });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: buildPin,
        start: 'top top',
        end: '+=320%',
        pin: true,
        scrub: 0.6,
        anticipatePin: 1
      },
      defaults: { ease: 'none' }
    });

    function stepSwap(from, to, at) {
      tl.to(steps[from], { opacity: 0, y: -22, duration: 0.06 }, at);
      tl.to(steps[to], { opacity: 1, y: 0, duration: 0.06 }, at + 0.02);
    }

    /* relógio de dias: 0 → 14, com data real acompanhando */
    tl.to(state, {
      day: 14,
      duration: 1,
      onUpdate: function () {
        var d = Math.round(state.day);
        if (dayNum) dayNum.textContent = String(d).padStart(2, '0');
        if (dateEl) dateEl.textContent = fmtLong(dayDate(d));
      }
    }, 0);
    tl.to('#build-fill', { width: '100%', duration: 1 }, 0);

    /* fase 1 → 2: os arquivos do cliente voam pro telefone
       (todos "moram" no centro do stage; nascem espalhados e convergem) */
    stepSwap(0, 1, 0.10);
    var scatter = [
      { x: -250, y: -170 }, { x: -290, y: 30 }, { x: 235, y: -150 },
      { x: 255, y: 120 }, { x: -200, y: 200 }
    ];
    files.forEach(function (f, i) {
      var s = scatter[i % scatter.length];
      tl.fromTo(f,
        { x: s.x, y: s.y, opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.04 },
        0.12 + i * 0.045);
      tl.to(f, { x: 0, y: 0, opacity: 0, scale: 0.7, duration: 0.1, ease: 'power1.in' }, 0.2 + i * 0.045);
    });

    /* fase 2 → 3: a IA constrói — log + wireframe + pintura */
    stepSwap(1, 2, 0.42);
    logs.forEach(function (l, i) {
      tl.to(l, { opacity: 1, duration: 0.03 }, 0.44 + i * 0.045);
    });
    wires.forEach(function (w, i) {
      tl.from(w, { scaleX: 0, transformOrigin: 'left center', duration: 0.05 }, 0.46 + i * 0.04);
    });
    tl.to('.build-wire', { opacity: 0, duration: 0.1 }, 0.72);
    tl.to('.build-screen', { clipPath: 'inset(0 0 0% 0)', duration: 0.22 }, 0.68);

    /* fase 3 → 4: no ar */
    stepSwap(2, 3, 0.88);
    tl.to('.build-phone', { scale: 1.03, duration: 0.1, ease: 'power1.out' }, 0.9);
    tl.to('.build-done', { opacity: 1, y: 0, duration: 0.08 }, 0.92);
  }

  /* ---------- MODELOS: galeria horizontal pinada (desktop) ---------- */
  var modelsSec = document.querySelector('.wm-models');
  if (modelsSec && grid && window.innerWidth >= 1080) {
    document.body.classList.add('has-track');
    var getX = function () { return -(grid.scrollWidth - modelsSec.querySelector('.wrap').offsetWidth); };
    gsap.to(grid, {
      x: getX,
      ease: 'none',
      scrollTrigger: {
        trigger: modelsSec,
        start: 'top top',
        end: function () { return '+=' + (-getX() + window.innerHeight * 0.4); },
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true
      }
    });
  }

  /* ---------- contagens que sobem quando entram em cena ---------- */
  gsap.utils.toArray('[data-count-to]').forEach(function (el) {
    var to = parseFloat(el.getAttribute('data-count-to'));
    var prefix = el.getAttribute('data-count-prefix') || '';
    var suffix = el.getAttribute('data-count-suffix') || '';
    var obj = { v: 0 };
    gsap.to(obj, {
      v: to,
      duration: 1.4,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: function () {
        el.textContent = prefix + Math.round(obj.v).toLocaleString('pt-BR') + suffix;
      }
    });
  });

  ST.refresh();
})();
