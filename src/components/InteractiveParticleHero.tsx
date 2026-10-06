import { useEffect, useRef } from "react";

const SRC = "/images/hero-particle-head.webp";
const TARGET = 5500; // ponytail: dense point cloud for clear human profile and headphones definition
const RADIUS = 190;

type P = { nx: number; ny: number; ox: number; oy: number; x: number; y: number; vx: number; vy: number; size: number; baseAlpha: number; currentAlpha: number; currentSize: number; ph: number };

export function InteractiveParticleHero() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const section = canvas.closest("section") as HTMLElement;
    const ctx = canvas.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let parts: P[] = [];
    let w = 0, h = 0, dpr = 1, raf = 0, visible = true, dead = false;
    const ptr = { x: -9999, y: -9999, active: false };

    const layout = () => {
      // Zoomed in scale & shifted slightly to the right so face profile/headphones clear the centered text
      const iw = w < 640 ? w * 2.2 : w < 1024 ? w * 1.7 : Math.max(1300, w * 0.95);
      const k = iw / 1200;
      // Centered layout: left silhouette headphone and right facial profile balance evenly around center
      const xOffset = 0;
      const left = w / 2 - iw / 2 + xOffset;
      const top = h / 2 - (673 * k) / 2 + (w < 640 ? 10 : 0);
      for (const p of parts) {
        p.ox = left + p.nx * iw; p.oy = top + p.ny * 673 * k;
        p.size = (0.9 + (p.baseAlpha) * 1.2) * Math.max(0.9, k * 1.1);
        if (!p.x && !p.y) { p.x = p.ox; p.y = p.oy; }
      }
    };
    const resize = () => {
      const r = section.getBoundingClientRect();
      w = r.width; h = r.height; dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      layout();
    };

    const img = new Image();
    img.onload = () => {
      if (dead) return;
      const off = document.createElement("canvas");
      off.width = 1200; off.height = 673;
      const o = off.getContext("2d", { willReadFrequently: true })!;
      o.drawImage(img, 0, 0, 1200, 673);
      const d = o.getImageData(0, 0, 1200, 673).data;
      const step = 3, cand: P[] = [];
      for (let y = 0; y < 673; y += step) for (let x = 0; x < 1200; x += step) {
        const i = (y * 1200 + x) * 4;
        const lum = (0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2]) / 255;
        if (lum > 0.28) cand.push({ nx: x / 1200, ny: y / 673, ox: 0, oy: 0, x: 0, y: 0, vx: 0, vy: 0, size: 1, baseAlpha: lum, currentAlpha: 0, currentSize: 1, ph: Math.random() * 6.28 });
      }
      const keep = Math.min(1, TARGET / cand.length);
      parts = cand.filter(() => Math.random() < keep);
      resize();
    };
    img.src = SRC;

    const move = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      ptr.x = e.clientX - r.left; ptr.y = e.clientY - r.top; ptr.active = true;
    };
    const leave = () => { ptr.active = false; };
    section.addEventListener("pointermove", move);
    section.addEventListener("pointerdown", move);
    section.addEventListener("pointerleave", leave);
    section.addEventListener("pointerup", (e) => e.pointerType === "touch" && leave());
    section.addEventListener("pointercancel", leave);
    const ro = new ResizeObserver(resize); ro.observe(section);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(section);

    const R2 = RADIUS * RADIUS;
    const frame = (t: number) => {
      const light = document.documentElement.classList.contains("light");
      raf = requestAnimationFrame(frame);
      if (!visible || !parts.length) return;
      const s = t / 1000;
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        const breathe = reduce ? 0 : Math.sin(s * 0.9 + p.ph) ;
        let tx = p.ox + (reduce ? 0 : breathe * 0.8), ty = p.oy + (reduce ? 0 : Math.cos(s * 0.7 + p.ph) * 0.8);
        let ta = p.baseAlpha * (0.45 + 0.1 * breathe), ts = p.size, f = 0;
        if (ptr.active) {
          const dx = p.ox - ptr.x, dy = p.oy - ptr.y, d2 = dx * dx + dy * dy;
          if (d2 < R2) {
            const d = Math.sqrt(d2) || 1;
            f = 1 - d / RADIUS; f = f * f * (3 - 2 * f); // smoothstep
            ta = ta + (1 - ta) * f; ts = p.size * (1 + 1.6 * f);
            const push = 26 * f; // lens: dots bulge away from pointer
            tx += (dx / d) * push; ty += (dy / d) * push;
          }
        }
        // spring
        p.vx = (p.vx + (tx - p.x) * 0.12) * 0.78; p.vy = (p.vy + (ty - p.y) * 0.12) * 0.78;
        p.x += p.vx; p.y += p.vy;
        p.currentAlpha += (ta - p.currentAlpha) * 0.15;
        p.currentSize += (ts - p.currentSize) * 0.15;
        // white -> cyan tint by magnification
        const m = Math.min(1, (p.currentSize / p.size - 1) / 1.6);
        const a = p.currentAlpha;
        ctx.fillStyle = light
          ? `rgba(${30 - 20 * m | 0},${40 + 70 * m | 0},${50 + 130 * m | 0},${(a * 0.75).toFixed(3)})`
          : `rgba(${255 - 130 * m | 0},${255 - 20 * m | 0},255,${a.toFixed(3)})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.currentSize, 0, 6.2832); ctx.fill();
      }
    };
    raf = requestAnimationFrame(frame);

    return () => {
      dead = true; cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerdown", move);
      section.removeEventListener("pointerleave", leave);
      section.removeEventListener("pointercancel", leave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}
