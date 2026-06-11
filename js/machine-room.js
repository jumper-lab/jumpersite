// Sala de Máquinas — protótipo
// 1) Console de telemetria: eventos REAIS do visitante (pageview, scroll,
//    seções, cliques, visibilidade), processados 100% no navegador.
//    Nada é enviado a servidor algum neste protótipo.
// 2) Frota de agentes: telemetria simulada a partir de rotinas reais da operação.

(function () {
  'use strict';

  /* ============================================================
     1. CONSOLE DE TELEMETRIA
     ============================================================ */
  const stream = document.querySelector('[data-mr-stream]');
  const emqEl = document.querySelector('[data-mr-emq]');
  if (stream && emqEl) {
    const MAX_ROWS = 28;
    let emq = 0;

    const ts = () => {
      const d = new Date();
      return d.toTimeString().slice(0, 8) + '.' + String(d.getMilliseconds()).padStart(3, '0');
    };

    function push(evt, params, ok) {
      const row = document.createElement('div');
      row.className = 'mr-row';
      const t = document.createElement('span'); t.className = 't'; t.textContent = ts();
      const e = document.createElement('span'); e.className = 'e'; e.textContent = evt;
      row.append(t, e);
      if (params) {
        const p = document.createElement('span'); p.className = 'p'; p.textContent = params;
        row.append(p);
      }
      if (ok) {
        const k = document.createElement('span'); k.className = 'ok'; k.textContent = ok;
        row.append(k);
      }
      stream.append(row);
      while (stream.children.length > MAX_ROWS) stream.firstChild.remove();
    }

    // EMQ sobe conforme o visitante entrega mais sinal — é o pitch do tracking
    function bumpEmq(delta) {
      emq = Math.min(9.8, emq + delta);
      emqEl.textContent = emq.toFixed(1);
      emqEl.classList.add('bump');
      setTimeout(() => emqEl.classList.remove('bump'), 600);
    }

    // ---- sequência de boot: dados reais da sessão ----
    const ref = document.referrer ? new URL(document.referrer).hostname : 'direto';
    const lang = navigator.language || 'pt-BR';
    const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').split('/').pop() || '—';
    const sid = 's_' + Math.random().toString(36).slice(2, 8);
    const device = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop';

    const boot = [
      [0,    () => { push('session_start', 'id=' + sid); bumpEmq(4.2); }],
      [550,  () => { push('pageview', 'path=/ ref=' + ref); bumpEmq(0.9); }],
      [1300, () => { push('enrich', device + ' · ' + window.innerWidth + '×' + window.innerHeight + ' · ' + lang + ' · ' + tz); bumpEmq(1.3); }],
      [2100, () => { push('relay', 'edge → server-side', '✓'); bumpEmq(0.8); }],
      [2900, () => { push('capi', 'match + dedup event_id', '✓✓'); bumpEmq(1.0); }],
    ];
    boot.forEach(([delay, fn]) => setTimeout(fn, delay));

    // ---- scroll depth real ----
    const marks = [25, 50, 75, 100];
    let next = 0;
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const depth = (h.scrollTop + window.innerHeight) / h.scrollHeight * 100;
      while (next < marks.length && depth >= marks[next]) {
        push('scroll_' + marks[next], 'profundidade ' + marks[next] + '%', '✓');
        bumpEmq(0.15);
        next++;
      }
    }, { passive: true });

    // ---- seções vistas (IntersectionObserver real) ----
    const seen = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting && !seen.has(en.target.id)) {
          seen.add(en.target.id);
          push('section_view', '#' + en.target.id, '✓');
          bumpEmq(0.1);
        }
      });
    }, { threshold: 0.35 });
    document.querySelectorAll('section[id]').forEach((s) => io.observe(s));

    // ---- cliques reais em CTAs e links ----
    document.addEventListener('click', (ev) => {
      const a = ev.target.closest('a, button');
      if (!a) return;
      const label = (a.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 26) || a.href || 'elemento';
      push('cta_click', '"' + label + '"', '✓');
      bumpEmq(0.2);
    }, { capture: true });

    // ---- visibilidade da aba ----
    document.addEventListener('visibilitychange', () => {
      push(document.hidden ? 'tab_hidden' : 'tab_visible', 'sessão preservada');
    });

    // ---- heartbeat de engajamento ----
    let beats = 0;
    setInterval(() => {
      if (document.hidden) return;
      beats++;
      push('heartbeat', 't=' + beats * 20 + 's · sessão ativa', '✓');
    }, 20000);
  }

  /* ============================================================
     2. FROTA DE AGENTES — relógios e última atividade
     Conteúdo simulado no protótipo (rotinas reais da operação).
     ============================================================ */
  const cards = document.querySelectorAll('[data-ops-agent]');
  if (cards.length) {
    cards.forEach((card) => {
      const v = card.querySelector('.ops-log .v');
      const when = card.querySelector('.ops-log .when');
      if (!v || !when) return;
      const outputs = JSON.parse(card.getAttribute('data-ops-outputs') || '[]');
      let minutes = parseInt(card.getAttribute('data-ops-min') || '5', 10);
      let idx = 0;

      const renderWhen = () => { when.textContent = minutes <= 1 ? 'agora há pouco' : 'há ' + minutes + ' min'; };
      renderWhen();

      // o tempo passa; de vez em quando o agente "entrega" algo novo
      setInterval(() => {
        minutes++;
        if (outputs.length > 1 && Math.random() < 0.22) {
          idx = (idx + 1) % outputs.length;
          v.textContent = outputs[idx];
          v.classList.add('flash');
          setTimeout(() => v.classList.remove('flash'), 900);
          minutes = 1;
        }
        renderWhen();
      }, 14000);
    });
  }
})();
