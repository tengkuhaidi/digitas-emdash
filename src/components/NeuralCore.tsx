import React, { useRef, useLayoutEffect, useEffect } from "react";
// @ts-ignore
import { HL } from "./hairline-kernel.js";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

// Core constants for NeuralCore isometric compute stack
const N = 4;
const W = 92;
const D = 92;
const H_L = 9;
const G_REST = 6;
const TIERS = ["ingest · io", "latent · embed", "tensor · core", "agent · router"];

export interface NeuralCoreProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: number;
  theme?: "light" | "dark";
  label?: string;
  onRead?: (text: string) => void;
}

export const NeuralCore = React.forwardRef<HTMLDivElement, NeuralCoreProps>(function NeuralCore(
  { intensity = 0.65, theme = "dark", label = "Enterprise AI Neural Core Processor Stack", onRead, style, ...attrs },
  ref
) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useIsoLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Clean previous content
    el.innerHTML = "";
    el.setAttribute("data-hairline", "neural-core");
    el.setAttribute("role", "img");
    el.setAttribute("aria-label", label);
    if (theme) el.setAttribute("data-hairline-theme", theme);

    const doc = el.ownerDocument;
    const svg = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 400 320");
    svg.setAttribute("aria-hidden", "true");
    el.appendChild(svg);

    // Map intensity to lift range (14 to 38)
    let maxLift = 14 + (intensity ?? 0.5) * 24;

    const read = {
      textContent: "rest",
    };

    // Camera setup
    const C = (HL as any).Cam(45, 0.5, 1.72);
    const Z_MAX = N * (H_L + G_REST) + 38;
    (HL as any).fit(
      C,
      [
        [-W / 2, -D / 2, -4],
        [W / 2, -D / 2, -4],
        [-W / 2, D / 2, -4],
        [W / 2, D / 2, -4],
        [-W / 2, -D / 2, Z_MAX],
        [W / 2, D / 2, Z_MAX],
      ],
      200,
      166
    );

    const P = (HL as any).proj(C);
    const front = (HL as any).facing(C);

    const [baseRing, baseInner] = (HL as any).rings(-W / 2 - 4, -D / 2 - 4, W / 2 + 4, D / 2 + 4, 14, 1.8);
    const [layerRing, layerInner] = (HL as any).rings(-W / 2, -D / 2, W / 2, D / 2, 12, 1.4);

    const g = (HL as any).mk("g", {}, svg);
    (HL as any).reflect(svg, g, P, front, baseRing, -4, 14);

    // Base substrate chassis
    const subSolid = (HL as any).mk("g", {}, g);
    const subSil = (HL as any).mk("path", { class: "sil" }, subSolid);
    const subCr = (HL as any).mk("path", { class: "lo" }, subSolid);
    subSil.setAttribute(
      "d",
      (HL as any).poly((HL as any).hull((HL as any).ringAt(P, baseRing, -4).concat((HL as any).ringAt(P, baseRing, 0))))
    );
    subCr.setAttribute("d", (HL as any).open((HL as any).ringAt(P, (HL as any).run(baseInner, front), 0)));

    // 4 Layers
    const layers: any[] = [];
    for (let i = 0; i < N; i++) {
      const grp = (HL as any).mk("g", {}, g);
      const sil = (HL as any).mk("path", { class: i === 2 ? "hi" : "sil" }, grp);
      const crease = (HL as any).mk("path", { class: "lo" }, grp);
      const busLine = (HL as any).mk("path", { class: "lo dash" }, grp);
      const coreMatrix: any[] = [];
      for (let r = -1; r <= 1; r++) {
        for (let c = -1; c <= 1; c++) {
          coreMatrix.push({
            r,
            c,
            dot: (HL as any).mk("circle", { r: 1.15, class: r === 0 && c === 0 ? "dot" : "dot off" }, grp),
          });
        }
      }
      layers.push({
        i,
        grp,
        sil,
        crease,
        busLine,
        coreMatrix,
        lift: (HL as any).tween(0),
      });
    }

    function hit([sx, sy]: [number, number]) {
      const wp = (HL as any).unproj(C, sx, sy, 0);
      if (!wp || Math.abs(wp[0]) > W / 2 + 8 || Math.abs(wp[1]) > D / 2 + 8) return -1;
      let best = -1;
      let bestDist = Infinity;
      for (let i = 0; i < N; i++) {
        const dy = sy - P(0, 0, i * (H_L + G_REST) + H_L / 2)[1];
        if (Math.abs(dy) < 22 && Math.abs(dy) < bestDist) {
          bestDist = Math.abs(dy);
          best = i;
        }
      }
      return best;
    }

    let activeIdx = -1;
    const bag = (HL as any).disposer();

    bag.add(
      (HL as any).pointer(el, {
        move(pt: [number, number]) {
          const idx = hit(pt);
          if (idx !== activeIdx) {
            activeIdx = idx;
            const now = performance.now();
            for (let i = 0; i < N; i++) {
              const dist = Math.abs(i - idx);
              const tgt = idx === -1 ? 0 : i === idx ? maxLift : dist === 1 ? maxLift * 0.35 : 0;
              (HL as any).tset(layers[i].lift, tgt, now, dist * 45);
              layers[i].sil.classList.toggle("hi", idx === -1 ? i === 2 : i === idx);
            }
            const readText = idx !== -1 ? TIERS[idx] : "rest";
            read.textContent = readText;
            onRead?.(readText);
            loop.wake();
          }
        },
        leave() {
          activeIdx = -1;
          const now = performance.now();
          for (let i = 0; i < N; i++) {
            (HL as any).tset(layers[i].lift, 0, now, i * 35);
            layers[i].sil.classList.toggle("hi", i === 2);
          }
          read.textContent = "rest";
          onRead?.("rest");
          loop.wake();
        },
      })
    );

    const loop = (HL as any).register(el, (_dt: number, now: number) => {
      let moving = false;
      for (let i = 0; i < N; i++) {
        const ly = layers[i];
        const baseZ = i * (H_L + G_REST);
        const curLift = (HL as any).tval(ly.lift, now);
        if (!(HL as any).tdone(ly.lift, now)) moving = true;
        const z0 = baseZ + curLift;
        const z1 = z0 + H_L;
        ly.sil.setAttribute(
          "d",
          (HL as any).poly((HL as any).hull((HL as any).ringAt(P, layerRing, z0).concat((HL as any).ringAt(P, layerRing, z1))))
        );
        ly.crease.setAttribute("d", (HL as any).open((HL as any).ringAt(P, (HL as any).run(layerInner, front), z1)));
        ly.busLine.setAttribute(
          "d",
          curLift > 2 && i > 0
            ? (HL as any).seg(P(-W / 2 + 8, -D / 2 + 8, baseZ), P(-W / 2 + 8, -D / 2 + 8, z0))
            : ""
        );
        for (const d of ly.coreMatrix) {
          (HL as any).place(d.dot, P(d.c * 18, d.r * 18, z1));
        }
      }
      return moving;
    });

    return () => {
      bag.dispose();
      loop.unregister();
    };
  }, [intensity, theme, label, onRead]);

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      style={{ aspectRatio: "5 / 4", ...style }}
      {...attrs}
    />
  );
});
