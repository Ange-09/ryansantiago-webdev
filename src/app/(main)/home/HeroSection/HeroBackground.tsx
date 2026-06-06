"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroBackground.module.css";

// Vertex shader — full-screen quad
const VS_SOURCE = `
  attribute vec4 aVertexPosition;
  void main() {
    gl_Position = aVertexPosition;
  }
`;

const FS_SOURCE = `
  precision highp float;
  uniform vec2  iResolution;
  uniform float iTime;

  const float overallSpeed      = 0.10;
  const float gridSmoothWidth   = 0.015;
  const float axisWidth         = 0.05;
  const float majorLineWidth    = 0.025;
  const float minorLineWidth    = 0.0125;
  const float scale             = 5.0;
  const float minLineWidth      = 0.008;
  const float maxLineWidth      = 0.14;
  const float lineSpeed         = .5  * overallSpeed;
  const float lineAmplitude     = 0.9;
  const float lineFrequency     = 0.2;
  const float warpSpeed         = 0.2  * overallSpeed;
  const float warpFrequency     = 0.5;
  const float warpAmplitude     = 0.9;
  const float offsetFrequency   = 0.5;
  const float offsetSpeed       = 1.33 * overallSpeed;
  const float minOffsetSpread   = 0.5;
  const float maxOffsetSpread   = 1.8;
  const int   linesPerGroup     = 14;

  /* Gold accent  — #c8a84a */
  const vec4 goldLine    = vec4(0.784, 0.659, 0.290, 1.0);
  /* Silver-blue accent — #a8c0d8 */
  const vec4 silverLine  = vec4(0.659, 0.753, 0.847, 1.0);

  #define drawSmoothLine(pos, hw, t) smoothstep(hw, 0.0, abs(pos - (t)))
  #define drawCrispLine(pos, hw, t)  smoothstep(hw + gridSmoothWidth, hw, abs(pos - (t)))
  #define drawCircle(pos, r, coord)  smoothstep(r + gridSmoothWidth, r, length(coord - (pos)))

  float random(float t) {
    return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
  }

  float getPlasmaY(float x, float hFade, float offset) {
    return random(x * lineFrequency + iTime * lineSpeed) * hFade * lineAmplitude + offset;
  }

  void main() {
    vec2 uv    = gl_FragCoord.xy / iResolution.xy;
    vec2 space = (gl_FragCoord.xy - iResolution.xy * 0.5) / iResolution.x * 2.0 * scale;

    float hFade = 1.0 - (cos(uv.x * 6.28318) * 0.5 + 0.5);
    float vFade = 1.0 - (cos(uv.y * 6.28318) * 0.5 + 0.5);

    /* Warp space for organic movement */
    space.y += random(space.x * warpFrequency + iTime * warpSpeed)           * warpAmplitude * (0.5 + hFade);
    space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0)     * warpAmplitude * hFade;

    /* Start fully transparent — section background shows through */
    vec4 col = vec4(0.0);

    for (int l = 0; l < linesPerGroup; l++) {
      float nli          = float(l) / float(linesPerGroup);
      float offsetTime   = iTime * offsetSpeed;
      float offsetPos    = float(l) + space.x * offsetFrequency;
      float rand         = random(offsetPos + offsetTime) * 0.5 + 0.5;
      float halfWidth    = mix(minLineWidth, maxLineWidth, rand * hFade) * 0.5;
      float offset       = random(offsetPos + offsetTime * (1.0 + nli))
                             * mix(minOffsetSpread, maxOffsetSpread, hFade);

      float linePos      = getPlasmaY(space.x, hFade, offset);
      float line         = drawSmoothLine(linePos, halfWidth, space.y) * 0.5
                         + drawCrispLine(linePos, halfWidth * 0.15, space.y);

      float cx           = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
      vec2  cp           = vec2(cx, getPlasmaY(cx, hFade, offset));
      float circle       = drawCircle(cp, 0.012, space) * 3.5;

      line += circle;

      /* Alternate between gold (even) and silver-blue (odd) lines */
      vec4 lineCol = (mod(float(l), 2.0) < 1.0) ? goldLine : silverLine;

      /* Accumulate — alpha driven by line intensity only */
      float alpha = clamp(line * rand * 0.55, 0.0, 1.0);
      col.rgb += lineCol.rgb * alpha;
      col.a   += alpha;
    }

    col.a = clamp(col.a, 0.0, 1.0);
    gl_FragColor = col;
  }
`;

function loadShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function initShaderProgram(
  gl: WebGLRenderingContext,
  vs: string,
  fs: string,
): WebGLProgram | null {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vs);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fs);
  if (!vertexShader || !fragmentShader) return null;

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Program link error:", gl.getProgramInfoLog(program));
    return null;
  }
  return program;
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // alpha: true so the canvas composites over the section background
    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
    });
    if (!gl) return;

    // Blend line pixels over whatever is behind the canvas
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const program = initShaderProgram(gl, VS_SOURCE, FS_SOURCE);
    if (!program) return;

    // Full-screen quad
    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const attrPos = gl.getAttribLocation(program, "aVertexPosition");
    const uRes = gl.getUniformLocation(program, "iResolution");
    const uTime = gl.getUniformLocation(program, "iTime");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const startTime = performance.now();
    let rafId: number;

    const render = () => {
      const t = (performance.now() - startTime) / 1000;

      // Clear to fully transparent each frame
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.vertexAttribPointer(attrPos, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(attrPos);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
  );
}
