import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { Terminal, Phone, Laptop, Dish, Terrain, Router } from "@lucasmarkes/hairline/react";

const spring = { type: "spring", stiffness: 300, damping: 26 } as const;

type Fig = ComponentType<{ intensity?: number; theme?: "dark"; label?: string }>;

const SERVICES: { n: string; title: string; body: string; tags: string[]; Fig: Fig; label: string; span: string }[] = [
  {
    n: "01",
    title: "Full-Stack Systems & Web Engineering",
    body: "High-converting web experiences and resilient digital systems, built on the edge and shipped to production. Typed end to end, observable, and deployed through CI with zero-downtime releases.",
    tags: ["Next.js", "TypeScript", "Cloudflare Edge", "Node.js", "PostgreSQL", "D1 SQL", "R2"],
    Fig: Terminal as Fig,
    label: "Interactive isometric terminal",
    span: "lg:col-span-8 lg:row-span-2",
  },
  {
    n: "02",
    title: "Mobile Apps Engineering",
    body: "Native and cross-platform apps with fluid gestures, offline-first sync, and rock-solid store deployment.",
    tags: ["React Native", "Flutter", "iOS & Android"],
    Fig: Phone as Fig,
    label: "Interactive isometric mobile phone",
    span: "lg:col-span-4",
  },
  {
    n: "03",
    title: "Product UI/UX & Design Systems",
    body: "High-fidelity product design for dashboards, web apps and mobile, documented as systems your team can extend.",
    tags: ["Figma", "Dashboards", "Design tokens"],
    Fig: Laptop as Fig,
    label: "Interactive isometric laptop",
    span: "lg:col-span-4",
  },
  {
    n: "04",
    title: "Digital Marketing & Growth Architecture",
    body: "Search and measurement engineered as infrastructure: pages that rank, analytics you can trust, indexing on autopilot.",
    tags: ["SEO/SEM", "GA4", "Instant Google indexing"],
    Fig: Dish as Fig,
    label: "Interactive isometric satellite dish",
    span: "lg:col-span-4",
  },
  {
    n: "05",
    title: "Brand Identity & Graphic Design",
    body: "Identities that hold up from favicon to pitch deck: logos, color systems and typography with clear rules.",
    tags: ["Logos", "Color systems", "Typography", "Pitch decks"],
    Fig: Terrain as Fig,
    label: "Interactive isometric terrain of pillars",
    span: "lg:col-span-4",
  },
  {
    n: "06",
    title: "Enterprise AI Implementation",
    body: "Custom LLM integrations, deterministic agent workflows, local model routing and retrieval systems built for enterprise reliability.",
    tags: ["Agents", "LLM Workflows", "Vector Search"],
    Fig: Router as Fig,
    label: "Interactive isometric AI router",
    span: "lg:col-span-4",
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
            Move your pointer over any figure. Six disciplines, one extension of your in-house team.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {SERVICES.map(({ n, title, body, tags, Fig, label, span }, i) => {
            const anchor = i === 0;
            return (
              <motion.article
                key={n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={spring}
                className={`flex flex-col overflow-hidden rounded-3xl border ${anchor ? "md:col-span-2" : ""} ${span}`}
                style={{ borderColor: "var(--cf-border)", background: "var(--cf-card)", ["--hairline-plate" as string]: "#09090b" }}
              >
                <div
                  className={`m-2 rounded-[20px] border px-4 py-2 ${anchor ? "lg:flex lg:flex-1 lg:items-center lg:justify-center" : ""}`}
                  style={{ borderColor: "var(--cf-border)", background: "radial-gradient(80% 60% at 50% 0%, var(--cf-glow), transparent 70%), var(--cf-bg)" }}
                >
                  <div className={anchor ? "mx-auto w-full max-w-xl" : "w-full"}>
                    <Fig intensity={0.6} theme="dark" label={label} />
                  </div>
                </div>
                <div className="flex flex-col p-6 pt-4">
                  <h3 className={`cf-display font-semibold tracking-tight ${anchor ? "text-2xl" : "text-lg"}`} style={{ color: "var(--cf-fg)" }}>
                    <span className="cf-mono mr-2 text-xs font-normal" style={{ color: "var(--cf-dim)" }}>{n}</span>
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--cf-muted)" }}>{body}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {tags.map((t) => (
                      <li key={t} className="cf-mono rounded-full border px-2.5 py-0.5 text-[11px]" style={{ borderColor: "var(--cf-border)", color: "var(--cf-muted)" }}>{t}</li>
                    ))}
                  </ul>
                  {anchor && (
                    <p className="cf-mono mt-5 flex items-center gap-2 text-[11px] uppercase tracking-wider" style={{ color: "var(--cf-dim)" }}>
                      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} aria-hidden />
                      Production-grade output, live on the edge
                    </p>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
