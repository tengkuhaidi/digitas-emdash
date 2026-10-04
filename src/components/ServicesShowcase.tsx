import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { Terminal, Phone, Laptop, Dish, Terrain, Branches, Vault } from "@lucasmarkes/hairline/react";

const spring = { type: "spring", stiffness: 300, damping: 26 } as const;

type Fig = ComponentType<{ intensity?: number; theme?: "dark"; label?: string }>;

const SERVICES: { n: string; title: string; body: string; tags: string[]; Fig: Fig; label: string; wide?: boolean }[] = [
  {
    n: "01",
    title: "Full-Stack Systems & Web Engineering",
    body: "High-converting web experiences and resilient digital systems, built on the edge and shipped to production.",
    tags: ["Next.js", "TypeScript", "Cloudflare Edge", "Node.js", "PostgreSQL"],
    Fig: Terminal as Fig,
    label: "Interactive isometric terminal",
  },
  {
    n: "02",
    title: "Mobile Apps Engineering",
    body: "Native and cross-platform mobile apps with fluid 120fps gestures, offline-first sync, and rock-solid App Store & Play Store deployment.",
    tags: ["React Native", "Flutter", "iOS & Android", "Swift", "Offline-first"],
    Fig: Phone as Fig,
    label: "Interactive isometric mobile phone",
  },
  {
    n: "03",
    title: "Product UI/UX & Design Systems",
    body: "High-fidelity product design for dashboards, web apps and mobile, documented as systems your team can extend.",
    tags: ["Figma", "Dashboards", "Web apps", "Mobile UX"],
    Fig: Laptop as Fig,
    label: "Interactive isometric laptop",
  },
  {
    n: "04",
    title: "Digital Marketing & Growth Architecture",
    body: "Search and measurement engineered as infrastructure: pages that rank, analytics you can trust, indexing on autopilot.",
    tags: ["SEO/SEM", "GA4 Analytics", "Organic search automation", "Instant Google indexing"],
    Fig: Dish as Fig,
    label: "Interactive isometric satellite dish",
  },
  {
    n: "05",
    title: "Brand Identity & Graphic Design",
    body: "Identities that hold up from favicon to pitch deck: logos, color systems and typography with clear rules.",
    tags: ["Logos", "Color systems", "Typography", "Pitch decks"],
    Fig: Terrain as Fig,
    label: "Interactive isometric terrain of pillars",
  },
  {
    n: "06",
    title: "Technical Problem Solving & Autonomous Systems",
    body: "Messy workflow, tangled integration, manual process. We find the root, then automate it end to end.",
    tags: ["Automation", "Integrations", "Agents", "Pipelines"],
    Fig: Branches as Fig,
    label: "Interactive isometric commit graph",
  },
  {
    n: "07",
    title: "Legalizin.com",
    body: "Our flagship venture: Indonesia's premier automated RegTech engine, incubated and powered by Digitas.",
    tags: ["RegTech", "Company formation", "Compliance automation"],
    Fig: Vault as Fig,
    label: "Interactive isometric vault door",
  },
];

export function ServicesShowcase() {
  return (
    <section id="services" className="px-5 py-20 sm:py-28" style={{ background: "var(--cf-bg)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="cf-mono mb-4 text-xs uppercase tracking-widest" style={{ color: "var(--cf-accent)" }}>Capabilities</p>
          <h2 className="cf-display text-balance" style={{ fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.045em", lineHeight: 1, color: "var(--cf-fg)" }}>
            Web, systems, design and growth. One team.
          </h2>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--cf-muted)" }}>
            Move your pointer over any figure. Seven disciplines, one extension of your in-house team.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ n, title, body, tags, Fig, label }) => (
            <motion.article
              key={n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={spring}
              className="flex flex-col overflow-hidden rounded-3xl border"
              style={{ borderColor: "var(--cf-border)", background: "var(--cf-card)", ["--hairline-plate" as string]: "#09090b" }}
            >
              <div
                className="m-2 rounded-[20px] border px-4 py-2"
                style={{ borderColor: "var(--cf-border)", background: "radial-gradient(80% 60% at 50% 0%, var(--cf-glow), transparent 70%), var(--cf-bg)" }}
              >
                <Fig intensity={0.6} theme="dark" label={label} />
              </div>
              <div className="flex flex-1 flex-col p-6 pt-4">
                <h3 className="cf-display text-lg font-semibold tracking-tight" style={{ color: "var(--cf-fg)" }}>
                  <span className="cf-mono mr-2 text-xs font-normal" style={{ color: "var(--cf-dim)" }}>{n}</span>
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--cf-muted)" }}>{body}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {tags.map((t) => (
                    <li key={t} className="rounded-full border px-2.5 py-0.5 text-[11px]" style={{ borderColor: "var(--cf-border)", color: "var(--cf-muted)" }}>{t}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
