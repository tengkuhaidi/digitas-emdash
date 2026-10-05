import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { Terminal, Phone, Laptop, Dish, Terrain, Router } from "@lucasmarkes/hairline/react";

const spring = { type: "spring", stiffness: 300, damping: 26 } as const;

type Fig = ComponentType<{ intensity?: number; theme?: "dark"; label?: string }>;

const SERVICES: {
  n: string;
  title: string;
  body: string;
  tags: string[];
  Fig: Fig;
  label: string;
  span: string;
  accent?: string;
}[] = [
  {
    n: "01",
    title: "Full-Stack Systems & Web Engineering",
    body: "High-converting web experiences and resilient digital systems built on Cloudflare Edge with end-to-end typed contracts.",
    tags: ["Next.js Edge", "TypeScript", "D1 SQL"],
    Fig: Terminal as Fig,
    label: "Interactive isometric terminal",
    span: "lg:col-span-6",
    accent: "Production-grade output, live on the edge",
  },
  {
    n: "02",
    title: "Enterprise AI Implementation",
    body: "Custom LLM integrations, deterministic agent workflows, and local model routing designed for zero-downtime reliability.",
    tags: ["Autonomous Agents", "Vector Search", "Model Routing"],
    Fig: Router as Fig,
    label: "Interactive isometric AI router",
    span: "lg:col-span-6",
    accent: "Deterministic agentic pipelines",
  },
  {
    n: "03",
    title: "Product UI/UX & Design Systems",
    body: "High-fidelity interfaces for complex dashboards and web apps, documented as design systems your team can extend.",
    tags: ["Figma Systems", "Web Dashboards", "Design Tokens"],
    Fig: Laptop as Fig,
    label: "Interactive isometric laptop",
    span: "lg:col-span-4",
  },
  {
    n: "04",
    title: "Mobile Apps Engineering",
    body: "Native and cross-platform mobile apps with fluid gestures, offline-first sync, and rock-solid store deployment.",
    tags: ["React Native", "Flutter", "iOS & Android"],
    Fig: Phone as Fig,
    label: "Interactive isometric mobile phone",
    span: "lg:col-span-4",
  },
  {
    n: "05",
    title: "Digital Marketing & Growth Architecture",
    body: "Programmatic SEO infrastructure and reliable GA4 telemetry: fast indexing on autopilot with zero ad burn.",
    tags: ["Instant Indexing", "GA4 Telemetry", "Programmatic SEO"],
    Fig: Dish as Fig,
    label: "Interactive isometric satellite dish",
    span: "lg:col-span-4",
  },
  {
    n: "06",
    title: "Brand Identity & Graphic Systems",
    body: "Cohesive visual identities that scale from favicon to pitch deck: logo marks, color tokens, and typography.",
    tags: ["Visual Identity", "Color Tokens", "Pitch Decks"],
    Fig: Terrain as Fig,
    label: "Interactive isometric terrain of pillars",
    span: "lg:col-span-12",
  },
];

export function ServicesBento() {
  return (
    <section id="services" className="px-5 py-20 sm:py-28" style={{ background: "var(--cf-bg)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="cf-mono mb-4 text-xs uppercase tracking-widest" style={{ color: "var(--cf-accent)" }}>Capabilities</p>
          <h2 className="cf-display text-balance" style={{ fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.045em", lineHeight: 1, color: "var(--cf-fg)" }}>
            Web, systems, design and growth. One team.
          </h2>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--cf-muted)" }}>
            Move your pointer over any figure. Six disciplines engineered as a natural extension of your product team.
          </p>
        </div>

        {/* Bento Grid: 2 Large Anchors (6+6), 3 Middle Pillars (4+4+4), 1 Panoramic Footer Anchor (12) */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12 items-stretch">
          {SERVICES.map(({ n, title, body, tags, Fig, label, span, accent }, i) => {
            const isWide = span.includes("col-span-12");
            const isTopRow = span.includes("col-span-6");

            return (
              <motion.article
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={spring}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 hover:border-zinc-700/80 ${span} ${
                  isWide ? "lg:flex-row lg:items-center" : ""
                }`}
                style={{
                  borderColor: "var(--cf-border)",
                  background: "var(--cf-card)",
                  ["--hairline-plate" as string]: "#09090b",
                }}
              >
                {/* Hairline Interactive Plate */}
                <div
                  className={`m-2.5 rounded-[20px] border px-4 py-3 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.01] ${
                    isWide ? "lg:m-3 lg:w-1/2" : ""
                  }`}
                  style={{
                    borderColor: "var(--cf-border)",
                    background: "radial-gradient(80% 60% at 50% 0%, var(--cf-glow), transparent 70%), var(--cf-bg)",
                  }}
                >
                  <div className="w-full max-w-sm">
                    <Fig intensity={0.65} theme="dark" label={label} />
                  </div>
                </div>

                {/* Content Details */}
                <div className={`flex flex-col justify-between p-6 pt-3 ${isWide ? "lg:w-1/2 lg:p-8" : ""}`}>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="cf-mono text-xs font-bold px-2 py-0.5 rounded border" style={{ borderColor: "var(--cf-border)", color: "var(--cf-dim)" }}>
                        {n}
                      </span>
                      {accent && (
                        <span className="cf-mono text-[10px] uppercase tracking-wider flex items-center gap-1.5" style={{ color: "var(--cf-accent)" }}>
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {accent}
                        </span>
                      )}
                    </div>
                    <h3 className={`cf-display font-semibold tracking-tight ${isTopRow ? "text-xl sm:text-2xl" : "text-lg"}`} style={{ color: "var(--cf-fg)" }}>
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--cf-muted)" }}>
                      {body}
                    </p>
                  </div>

                  {/* Strictly Max 3 JetBrains Mono Tags */}
                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {tags.slice(0, 3).map((t) => (
                      <li
                        key={t}
                        className="cf-mono rounded-full border px-2.5 py-1 text-[11px] font-medium"
                        style={{
                          borderColor: "var(--cf-border)",
                          background: "var(--cf-raised)",
                          color: "var(--cf-muted)",
                        }}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
