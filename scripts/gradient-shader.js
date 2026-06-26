// scripts/gradient-shader.js
// WebGL2 Liquid Gradient Background with Simplex Noise

(function () {
  'use strict';

  const canvas = document.getElementById('gradient-canvas');
  if (!canvas) return;

  // Try WebGL2 then WebGL1 — silently fall back if unavailable
  let gl = null;
  try {
    gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  } catch (e) {
    gl = null;
  }

  // Fallback: Rich multi-layer CSS gradient animation (for systems without WebGL)
  if (!gl) {
    // Canvas can't use pseudo-elements, so replace it with a div
    const fallback = document.createElement('div');
    fallback.id = 'gradient-fallback';
    fallback.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 0;
      background: #050510; overflow: hidden; pointer-events: none;
    `;

    // Create animated color blobs
    const blob1 = document.createElement('div');
    blob1.className = 'gradient-blob gradient-blob-1';
    const blob2 = document.createElement('div');
    blob2.className = 'gradient-blob gradient-blob-2';
    const blob3 = document.createElement('div');
    blob3.className = 'gradient-blob gradient-blob-3';

    fallback.appendChild(blob1);
    fallback.appendChild(blob2);
    fallback.appendChild(blob3);

    canvas.replaceWith(fallback);

    const style = document.createElement('style');
    style.textContent = `
      .gradient-blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.6;
        will-change: transform;
      }

      .gradient-blob-1 {
        width: 60vmax; height: 60vmax;
        top: -20%; left: -10%;
        background: radial-gradient(circle, rgba(123, 47, 247, 0.7), transparent 70%);
        animation: blobMove1 20s ease-in-out infinite alternate;
      }

      .gradient-blob-2 {
        width: 50vmax; height: 50vmax;
        top: 30%; right: -15%;
        background: radial-gradient(circle, rgba(0, 255, 135, 0.5), transparent 70%);
        animation: blobMove2 25s ease-in-out infinite alternate;
      }

      .gradient-blob-3 {
        width: 55vmax; height: 55vmax;
        bottom: -20%; left: 20%;
        background: radial-gradient(circle, rgba(255, 45, 170, 0.5), transparent 70%);
        animation: blobMove3 22s ease-in-out infinite alternate;
      }

      @keyframes blobMove1 {
        0%   { transform: translate(0, 0) scale(1); }
        33%  { transform: translate(15vw, 20vh) scale(1.15); }
        66%  { transform: translate(-10vw, 10vh) scale(0.9); }
        100% { transform: translate(20vw, -15vh) scale(1.1); }
      }

      @keyframes blobMove2 {
        0%   { transform: translate(0, 0) scale(1.1); }
        33%  { transform: translate(-20vw, -15vh) scale(0.9); }
        66%  { transform: translate(10vw, -20vh) scale(1.15); }
        100% { transform: translate(-15vw, 15vh) scale(1); }
      }

      @keyframes blobMove3 {
        0%   { transform: translate(0, 0) scale(0.95); }
        33%  { transform: translate(20vw, -10vh) scale(1.1); }
        66%  { transform: translate(-15vw, -15vh) scale(1); }
        100% { transform: translate(10vw, 20vh) scale(1.15); }
      }
    `;
    document.head.appendChild(style);
    return;
  }

  // --- Shader Sources ---
  const vertexSource = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  // Fragment shader — muted palette, darker overall
  const fragmentSource = `
    precision highp float;

    uniform float u_time;
    uniform float u_scroll;
    uniform vec2 u_resolution;

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                         -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                               + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m * m * m * m;
      vec3 x  = 2.0 * fract(p * C.www) - 1.0;
      vec3 h  = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
      vec3 g;
      g.x  = a0.x  * x0.x   + h.x  * x0.y;
      g.yz = a0.yz * x12.xz  + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      for (int i = 0; i < 5; i++) {
        value += amplitude * snoise(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
      }
      return value;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      float aspect = u_resolution.x / u_resolution.y;
      vec2 p = vec2(uv.x * aspect, uv.y);

      float time   = u_time * 0.12;
      float scroll = u_scroll * 0.3;

      float n1 = fbm(p * 1.1 + vec2(time * 0.25,  scroll + time * 0.08));
      float n2 = fbm(p * 0.7 + vec2(-time * 0.18, scroll * 0.5 + time * 0.12));
      float n3 = snoise(p * 1.8 + vec2(time * 0.32, -scroll * 0.25));

      // Muted, cinematic palette — no pure neons
      vec3 deepVoid   = vec3(0.020, 0.020, 0.063);  // #050510
      vec3 deepBlue   = vec3(0.035, 0.048, 0.130);  // #090c21
      vec3 indigo     = vec3(0.220, 0.110, 0.580);  // #381c94 muted purple
      vec3 teal       = vec3(0.000, 0.480, 0.320);  // #007a52 dark teal
      vec3 wine       = vec3(0.500, 0.090, 0.320);  // #801752 deep magenta

      float blend1 = smoothstep(-0.3, 0.6, n1);
      float blend2 = smoothstep(-0.2, 0.5, n2);
      float blend3 = smoothstep(0.0,  0.7, n3);

      vec3 color = deepVoid;
      color = mix(color, deepBlue, smoothstep(-0.5, 0.5, n1));
      color = mix(color, indigo,   blend1 * 0.55);
      color = mix(color, teal,     blend2 * 0.28);
      color = mix(color, wine,     blend3 * 0.22);

      // Vignette
      float vignette = 1.0 - smoothstep(0.3, 1.3, length(uv - 0.5) * 1.8);
      color *= mix(0.2, 1.0, vignette);

      // Subtle pulse — kept very gentle
      color *= 0.88 + 0.12 * sin(time * 0.4);

      // Darken significantly so text stays legible
      color *= 0.40;

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  function compileShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertexShader || !fragmentShader) return;

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

  gl.useProgram(program);

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1, 1, -1, -1, 1,
    -1, 1, 1, -1, 1, 1
  ]), gl.STATIC_DRAW);

  const a_position = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(a_position);
  gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);

  const u_time = gl.getUniformLocation(program, 'u_time');
  const u_scroll = gl.getUniformLocation(program, 'u_scroll');
  const u_resolution = gl.getUniformLocation(program, 'u_resolution');

  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  resize();
  window.addEventListener('resize', resize);

  let scrollNormalized = 0;
  window.addEventListener('scroll', () => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    scrollNormalized = docH > 0 ? window.scrollY / docH : 0;
  }, { passive: true });

  const startTime = performance.now();
  function render() {
    const elapsed = (performance.now() - startTime) / 1000;
    gl.uniform1f(u_time, elapsed);
    gl.uniform1f(u_scroll, scrollNormalized);
    gl.uniform2f(u_resolution, canvas.width, canvas.height);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(render);
  }
  render();
})();