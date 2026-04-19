// Jumper animated gradient — "silk fold" shader, tweakable
// Uniforms controllable at runtime via window.JumperGradient.set({ ... })

(function () {
  const FRAG = `
    precision highp float;
    uniform vec2  u_res;
    uniform float u_time;

    // tweakable uniforms
    uniform float u_speed;        // 0.01..0.20   fold drift speed
    uniform float u_curl;         // 0.0..1.5     side-to-side curl amplitude
    uniform vec2  u_origin;       // 0..1 x and 0..1 y   source of the fold (default .95,.10)
    uniform float u_vignette;     // 0..1         black-corner intensity
    uniform float u_contrast;     // 0.6..1.6     band spread
    uniform float u_highlight;    // 0..1         cream highlight mix
    uniform float u_grain;        // 0..0.08
    uniform float u_palette;      // 0,1,2        0=organic-06(wine/orange), 1=organic-01(pure orange), 2=organic-03(purple)

    // ---- simplex 2D noise (Ashima) ----
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                         -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m; m = m*m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    vec3 paletteA(float t) {
      // organic-06 — wine → red → orange → cream
      vec3 c0 = vec3(0.00, 0.00, 0.00);
      vec3 c1 = vec3(0.12, 0.04, 0.10);
      vec3 c2 = vec3(0.45, 0.06, 0.18);
      vec3 c3 = vec3(0.85, 0.18, 0.10);
      vec3 c4 = vec3(0.98, 0.42, 0.22);
      vec3 c5 = vec3(1.00, 0.86, 0.74);
      vec3 col = c0;
      col = mix(col, c1, smoothstep(0.00, 0.18, t));
      col = mix(col, c2, smoothstep(0.22, 0.42, t));
      col = mix(col, c3, smoothstep(0.44, 0.62, t));
      col = mix(col, c4, smoothstep(0.64, 0.82, t));
      col = mix(col, c5, smoothstep(0.86, 1.00, t) * u_highlight);
      return col;
    }
    vec3 paletteB(float t) {
      // organic-01 — pure Jumper orange
      vec3 c0 = vec3(0.00, 0.00, 0.00);
      vec3 c1 = vec3(0.10, 0.03, 0.02);
      vec3 c2 = vec3(0.40, 0.10, 0.04);
      vec3 c3 = vec3(0.98, 0.28, 0.13);  // jumper orange
      vec3 c4 = vec3(1.00, 0.55, 0.25);
      vec3 c5 = vec3(1.00, 0.92, 0.82);
      vec3 col = c0;
      col = mix(col, c1, smoothstep(0.00, 0.15, t));
      col = mix(col, c2, smoothstep(0.20, 0.40, t));
      col = mix(col, c3, smoothstep(0.42, 0.64, t));
      col = mix(col, c4, smoothstep(0.66, 0.84, t));
      col = mix(col, c5, smoothstep(0.88, 1.00, t) * u_highlight);
      return col;
    }
    vec3 paletteC(float t) {
      // organic-03 — purple → violet → warm accent
      vec3 c0 = vec3(0.00, 0.00, 0.00);
      vec3 c1 = vec3(0.08, 0.03, 0.14);
      vec3 c2 = vec3(0.26, 0.08, 0.42);
      vec3 c3 = vec3(0.51, 0.26, 0.65);  // jumper purple
      vec3 c4 = vec3(0.85, 0.45, 0.55);
      vec3 c5 = vec3(0.99, 0.80, 0.70);
      vec3 col = c0;
      col = mix(col, c1, smoothstep(0.00, 0.16, t));
      col = mix(col, c2, smoothstep(0.22, 0.42, t));
      col = mix(col, c3, smoothstep(0.46, 0.66, t));
      col = mix(col, c4, smoothstep(0.70, 0.86, t));
      col = mix(col, c5, smoothstep(0.90, 1.00, t) * u_highlight);
      return col;
    }

    vec3 getPalette(float t) {
      if (u_palette < 0.5) return paletteA(t);
      if (u_palette < 1.5) return paletteB(t);
      return paletteC(t);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_res.xy;
      float ar = u_res.x / u_res.y;
      vec2 p = vec2(uv.x * ar, uv.y);
      vec2 origin = vec2(ar * u_origin.x, u_origin.y);

      float t = u_time * u_speed;

      vec2 w = vec2(
        snoise(p * 0.8 + vec2(0.0, t * 0.7)),
        snoise(p * 0.8 + vec2(4.3, t * 0.9 + 2.1))
      ) * 0.28;

      vec2 d2 = (p - origin) + w;
      float wave = sin(d2.y * 3.6 + t * 1.8) * 0.22 * u_curl;
      float d = length(vec2(d2.x + wave, d2.y * 0.95));

      float fold = 1.0 - smoothstep(0.05, 1.15 / u_contrast, d);
      float band = smoothstep(0.35, 0.55, fold) - smoothstep(0.62, 0.82, fold) * 0.6;
      float v = fold * 0.88 + band * 0.35;
      v *= 0.92 + 0.08 * sin(t * 1.1);

      vec3 col = getPalette(clamp(v, 0.0, 1.0));

      float g = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
      col += (g - 0.5) * u_grain;

      float vig = smoothstep(1.3, 0.1, length(uv - vec2(0.2, 0.8)));
      col *= (1.0 - u_vignette) + u_vignette * (0.25 + 1.0 * vig);

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  const VERT = `attribute vec2 a_pos; void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }`;

  // default parameters
  const DEFAULTS = {
    speed: 0.05,
    curl: 0,
    originX: 0.72,
    originY: 0.6,
    vignette: 0,
    contrast: 1.0,
    highlight: 1.0,
    grain: 0.08,
    palette: 1,
  };

  const instances = [];
  let params = Object.assign({}, DEFAULTS);

  function cssFallback(canvas) {
    canvas.style.display = 'none';
    const host = canvas.parentElement;
    if (host) host.classList.add('jumper-gradient-fallback');
  }

  function init(canvas) {
    const gl = canvas.getContext('webgl', { antialias: true, premultipliedAlpha: false })
            || canvas.getContext('experimental-webgl');
    if (!gl) { cssFallback(canvas); return; }

    function compile(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn('shader compile failed', gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    }
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) { cssFallback(canvas); return; }
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { cssFallback(canvas); return; }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      res:       gl.getUniformLocation(prog, 'u_res'),
      time:      gl.getUniformLocation(prog, 'u_time'),
      speed:     gl.getUniformLocation(prog, 'u_speed'),
      curl:      gl.getUniformLocation(prog, 'u_curl'),
      origin:    gl.getUniformLocation(prog, 'u_origin'),
      vignette:  gl.getUniformLocation(prog, 'u_vignette'),
      contrast:  gl.getUniformLocation(prog, 'u_contrast'),
      highlight: gl.getUniformLocation(prog, 'u_highlight'),
      grain:     gl.getUniformLocation(prog, 'u_grain'),
      palette:   gl.getUniformLocation(prog, 'u_palette'),
    };

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let lastW = 0, lastH = 0, pending = false;
    function resize() {
      const w = canvas.clientWidth | 0;
      const h = canvas.clientHeight | 0;
      const cw = Math.max(1, (w * dpr) | 0);
      const ch = Math.max(1, (h * dpr) | 0);
      if (cw === lastW && ch === lastH) return;
      lastW = cw; lastH = ch;
      canvas.width = cw; canvas.height = ch;
      gl.viewport(0, 0, cw, ch);
      gl.uniform2f(uniforms.res, cw, ch);
    }
    resize();
    const ro = new ResizeObserver(() => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => { pending = false; resize(); });
    });
    ro.observe(canvas);

    function applyParams() {
      gl.useProgram(prog);
      gl.uniform1f(uniforms.speed, params.speed);
      gl.uniform1f(uniforms.curl, params.curl);
      gl.uniform2f(uniforms.origin, params.originX, params.originY);
      gl.uniform1f(uniforms.vignette, params.vignette);
      gl.uniform1f(uniforms.contrast, params.contrast);
      gl.uniform1f(uniforms.highlight, params.highlight);
      gl.uniform1f(uniforms.grain, params.grain);
      gl.uniform1f(uniforms.palette, params.palette);
    }
    applyParams();

    const start = performance.now();
    let running = true;
    function frame() {
      if (!running) return;
      gl.useProgram(prog);
      gl.uniform1f(uniforms.time, (performance.now() - start) / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !running) { running = true; requestAnimationFrame(frame); }
        else if (!e.isIntersecting) { running = false; }
      });
    });
    io.observe(canvas);

    instances.push({ canvas, applyParams });
  }

  // public API
  window.JumperGradient = {
    defaults: DEFAULTS,
    get: () => Object.assign({}, params),
    set: (patch) => {
      params = Object.assign({}, params, patch);
      instances.forEach(i => i.applyParams());
    },
    reset: () => {
      params = Object.assign({}, DEFAULTS);
      instances.forEach(i => i.applyParams());
    }
  };

  function boot() {
    document.querySelectorAll('canvas[data-jumper-gradient]').forEach(init);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
