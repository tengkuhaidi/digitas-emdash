import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { Branches } from "@lucasmarkes/hairline/react";

const spring = { type: "spring", stiffness: 260, damping: 26 } as const;
const Fig = Branches as ComponentType<{ intensity?: number; theme?: "dark"; label?: string }>;

const STEPS = [
  { n: "01", t: "Audit Root Cause", d: "Trace the real bottleneck across people, spreadsheets and legacy systems." },
  { n: "02", t: "Event-Driven Automation", d: "Pipelines and self-healing workers replace every manual handoff." },
  { n: "03", t: "Zero-Human Bottleneck", d: "Autonomous agents run the workflow end to end, escalating only exceptions." },
];
const POINTS = [
  "Eliminate manual operations and copy-paste workflows",
  "Legacy ERP integrations without a rewrite",
  "Event-driven pipelines with retries and audit trails",
  "Self-healing background workers",
  "Autonomous AI agents that act, not just answer",
];

export function AutonomousSystemsSection() {
  return (
    <section id="autonomous" className="px-5 py-20 sm:py-28" style={{ background: "var(--cf-bg)" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={spring}
        className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-3xl border p-6 sm:p-10 lg:grid-cols-2 lg:items-center"
        style={{ borderColor: "var(--cf-border)", background: "radial-gradient(70% 60% at 0% 0%, var(--cf-glow), transparent 70%), var(--cf-card)", ["--hairline-plate" as string]: "#09090b" }}
      >
        <div>
          <p className="cf-mono mb-4 text-xs uppercase tracking-widest" style={{ color: "var(--cf-accent)" }}>SYSTEMS SPECIALTY // BOTTLENECK ELIMINATION</p>
          <h2 className="cf-display text-balance" style={{ fontWeight: 700, fontSize: "clamp(1.85rem, 4.2vw, 3rem)", letterSpacing: "-0.04em", lineHeight: 1.02, color: "var(--cf-fg)" }}>
            Autonomous Systems &amp; Complex Workflow Engineering
          </h2>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--cf-muted)" }}>
            Messy workflow, tangled integration, process that only works because someone stays late. We find the root cause, then automate it until nobody has to touch it.
          </p>
          <ul className="mt-6 grid gap-2.5">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px]" style={{ color: "var(--cf-fg)" }}>
                <span className="cf-mono mt-0.5 text-xs" style={{ color: "var(--cf-accent)" }} aria-hidden>→</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="rounded-[20px] border px-4 py-2" style={{ borderColor: "var(--cf-border)", background: "var(--cf-bg)" }}>
            <Fig intensity={0.7} theme="dark" label="Interactive workflow branches" />
          </div>
          <ol className="mt-4 grid gap-2 sm:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.n} className="rounded-2xl border p-4 transition-colors hover:[border-color:var(--cf-dim)]" style={{ borderColor: "var(--cf-border)", background: "var(--cf-bg)" }}>
                <span className="cf-mono text-[11px]" style={{ color: "var(--cf-dim)" }}>{s.n}</span>
                <p className="cf-display mt-1 text-sm font-semibold leading-tight" style={{ color: "var(--cf-fg)" }}>{s.t}</p>
                <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "var(--cf-muted)" }}>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </motion.div>
    </section>
  );
}
