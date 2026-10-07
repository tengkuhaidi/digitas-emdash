import React, { useRef, useLayoutEffect, useEffect } from "react";
// @ts-ignore
import { HL } from "./hairline-kernel.js";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

const COLS = 4;
const ROWS = 4;
const CW = 16;
const CD = 16;
const GAP = 6;
const W_TOTAL = COLS * CW + (COLS - 1) * GAP;
const D_TOTAL = ROWS * CD + (ROWS - 1) * GAP;
const CR_R = 3;
const CR_B = 1.0;

const BASE_H = [
  [8, 14, 22, 32],
  [12, 20, 34, 48],
  [18, 28, 46, 64],
  [26, 40, 60, 82],
];

const METRICS = ["telemetry · ga4", "rank · top 3", "index · 100%", "traffic · surge"];

export interface GrowthMatrixProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: number;
  theme?: "light" | "dark";
  label?: string;
  onRead?: (text: string) => void;
}

export const GrowthMatrix = React.forwardRef<HTMLDivElement, GrowthMatrixProps>(function GrowthMatrix(
  { intensity = 0.65, theme = "dark", label = "Interactive isometric growth telemetry and traffic surge bar matrix", onRead, style, ...attrs },
  ref
) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useIsoLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.innerHTML = "";
    el.setAttribute("data-hairline", "growth-matrix");
    el.setAttribute("role", "img");
    el.setAttribute("aria-label", label);
    if (theme) el.setAttribute("data-hairline-theme", theme);

    const doc = el.ownerDocument;
    const svg = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 400 320");
    svg.setAttribute("aria-hidden", "true");
    el.appendChild(svg);

    let maxGain = 12 + (intensity ?? 0.5) * 22;

    const read = { textContent: "rest" };

    const C = (HL as any).Cam(45, 0.5, 1.7);
    const Z_MAX = 110;
    (HL as any).fit(
      C,
      [
        [-W_TOTAL / 2 - 6, -D_TOTAL / 2 - 6, -4],
        [W_TOTAL / 2 + 6, -D_TOTAL / 2 - 6, -4],
        [-W_TOTAL / 2 - 6, D_TOTAL / 2 + 6, -4],
        [W_TOTAL / 2 + 6, D_TOTAL / 2 + 6, -4],
        [-W_TOTAL / 2, -D_TOTAL / 2, Z_MAX],
        [W_TOTAL / 2, D_TOTAL / 2, Z_MAX],
      ],
      200,
      166
    );

    const P = (HL as any).proj(C);
    const front = (HL as any).facing(C);

    const [baseRing, baseInner] = (HL as any).rings(-W_TOTAL / 2 - 6, -D_TOTAL / 2 - 6, W_TOTAL / 2 + 6, D_TOTAL / 2 + 6, 12, 1.6);
    const [barRing, barInner] = (HL as any).rings(-CW / 2, -CD / 2, CW / 2, CD/2, CR_R, CR_B);

    const g = (HL as any).mk("g", {}, svg);
    (HL as any).reflect(svg, g, P, front, baseRing, -4, 14);

    const subSolid = (HL as any).mk("g", {}, g);
    const subSil = (HL as any).mk("path", { class: "sil" }, subSolid);
    const subCr = (HL as any).mk("path", { class: "lo" }, subSolid);
    subSil.setAttribute(
      "d",
      (HL as any).poly((HL as any).hull((HL as any).ringAt(P, baseRing, -4).concat((HL as any).ringAt(P, baseRing, 0))))
    );
    subCr.setAttribute("d", (HL as any).open((HL as any).ringAt(P, (HL as any).run(baseInner, front), 0)));

    const bars: any[] = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = -W_TOTAL / 2 + c * (CW + GAP) + CW / 2;
        const y = -D_TOTAL / 2 + r * (CD + GAP) + CD / 2;
        const baseH = BASE_H[r][c];

        const grp = (HL as any).mk("g", {}, g);
        const sil = (HL as any).mk("path", { class: r === 3 && c === 3 ? "hi" : "sil" }, grp);
        const crease = (HL as any).mk("path", { class: "lo" }, grp);
        const dot = (HL as any).mk("circle", { r: 1.0, class: r === 3 && c === 3 ? "dot" : "dot off" }, grp);

        bars.push({
          r,
          c,
          x,
          y,
          baseH,
          grp,
          sil,
          crease,
          dot,
          surge: (HL as any).tween(0),
          order: r + c,
        });
      }
    }

    bars.sort((a, b) => a.order - b.order);
    bars.forEach((b) => g.appendChild(b.grp));

    function hit([sx, sy]: [number, number]) {
      const wp = (HL as any).unproj(C, sx, sy, 0);
      if (!wp) return -1;
      const xRel = wp[0] + W_TOTAL / 2;
      const yRel = wp[1] + D_TOTAL / 2;
      if (xRel < 0 || xRel > W_TOTAL || yRel < 0 || yRel > D_TOTAL) return -1;

      const c = (HL as any).clamp(Math.floor(xRel / (CW + GAP)), 0, COLS - 1);
      const r = (HL as any).clamp(Math.floor(yRel / (CD + GAP)), 0, ROWS - 1);
      return r * COLS + c;
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
            const hitR = idx !== -1 ? Math.floor(idx / COLS) : -1;
            const hitC = idx !== -1 ? idx % COLS : -1;

            for (const bar of bars) {
              if (idx === -1) {
                (HL as any).tset(bar.surge, 0, now, (bar.r + bar.c) * 30);
                bar.sil.classList.toggle("hi", bar.r === 3 && bar.c === 3);
                bar.dot.setAttribute("class", bar.r === 3 && bar.c === 3 ? "dot" : "dot off");
              } else {
                const dist = Math.hypot(bar.r - hitR, bar.c - hitC);
                const isHover = bar.r === hitR && bar.c === hitC;
                const gain = isHover ? maxGain : Math.max(0, maxGain * (1 - dist * 0.38));
                (HL as any).tset(bar.surge, gain, now, dist * 35);
                bar.sil.classList.toggle("hi", isHover);
                bar.dot.setAttribute("class", isHover ? "dot" : "dot off");
              }
            }
            const readText = idx !== -1 ? METRICS[hitR] || "traffic · surge" : "rest";
            read.textContent = readText;
            onRead?.(readText);
            loop.wake();
          }
        },
        leave() {
          activeIdx = -1;
          const now = performance.now();
          for (const bar of bars) {
            (HL as any).tset(bar.surge, 0, now, (bar.r + bar.c) * 25);
            bar.sil.classList.toggle("hi", bar.r === 3 && bar.c === 3);
            bar.dot.setAttribute("class", bar.r === 3 && bar.c === 3 ? "dot" : "dot off");
          }
          read.textContent = "rest";
          onRead?.("rest");
          loop.wake();
        },
      })
    );

    const loop = (HL as any).register(el, (_dt: number, now: number) => {
      let moving = false;
      for (const b of bars) {
        const extra = (HL as any).tval(b.surge, now);
        if (!(HL as any).tdone(b.surge, now)) moving = true;
        const h = b.baseH + extra;

        const rPts0 = barRing.map((pt: any) => P(b.x + pt.u, b.y + pt.v, 0));
        const rPts1 = barRing.map((pt: any) => P(b.x + pt.u, b.y + pt.v, h));
        b.sil.setAttribute("d", (HL as any).poly((HL as any).hull(rPts0.concat(rPts1))));

        const innerRun = (HL as any).run(barInner, front);
        b.crease.setAttribute("d", (HL as any).open(innerRun.map((pt: any) => P(b.x + pt.u, b.y + pt.v, h))));
        (HL as any).place(b.dot, P(b.x, b.y, h));
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
