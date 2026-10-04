import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const spring = { type: "spring", stiffness: 260, damping: 26 } as const;

const ENGINEERED = [
  "Edge-native web platform on Cloudflare Pages/Workers, sub-20ms responses",
  "Automated entity compliance workflows: PT, CV, OSS RBA",
  "Organic search growth engine with automated instant indexing",
  "Client document vaults with zero-egress storage",
];

const METRICS = [
  { v: "< 20ms", l: "Edge Response" },
  { v: "15+", l: "Automated Workflows" },
  { v: "#1", l: "Google Organic Rankings" },
  { v: "100%", l: "Zero-Egress Cloud" },
];

export function FeaturedProject() {
  return (
    <section id="featured" className="px-5 py-20 sm:py-28" style={{ background: "var(--cf-bg)" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={spring}
        className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border"
        style={{
          borderColor: "var(--cf-border)",
          background: "radial-gradient(70% 50% at 50% 0%, var(--cf-glow), transparent 70%), var(--cf-card)",
        }}
      >
        <div className="p-7 sm:p-12">
          <p className="cf-mono mb-4 text-xs uppercase tracking-widest" style={{ color: "var(--cf-accent)" }}>
            Featured Project // Flagship Case Study
          </p>
          <h2
            className="cf-display text-balance"
            style={{ fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.045em", lineHeight: 1, color: "var(--cf-fg)", maxWidth: "20ch" }}
          >
            Legalizin.com — Automated LegalTech &amp; Compliance Engine
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="cf-mono mb-3 text-xs uppercase tracking-widest" style={{ color: "var(--cf-dim)" }}>The Mandate</h3>
              <p className="text-base leading-relaxed sm:text-lg" style={{ color: "var(--cf-muted)" }}>
                Turn Indonesia's complex corporate formation and statutory licensing into an instantaneous digital product.
              </p>
            </div>
            <div>
              <h3 className="cf-mono mb-3 text-xs uppercase tracking-widest" style={{ color: "var(--cf-dim)" }}>What Digitas Engineered</h3>
              <ul className="grid gap-2.5">
                {ENGINEERED.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-relaxed" style={{ color: "var(--cf-muted)" }}>
                    <span aria-hidden className="cf-mono" style={{ color: "var(--cf-accent)" }}>→</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border lg:grid-cols-4" style={{ borderColor: "var(--cf-border)", background: "var(--cf-border)" }}>
            {METRICS.map(({ v, l }) => (
              <div key={l} className="p-5 sm:p-6" style={{ background: "var(--cf-bg)" }}>
                <dd className="cf-display" style={{ fontWeight: 700, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "-0.04em", color: "var(--cf-fg)" }}>{v}</dd>
                <dt className="cf-mono mt-1 text-[11px] uppercase tracking-wider" style={{ color: "var(--cf-dim)" }}>{l}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <motion.a
              href="/case-study/legalizin"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={spring}
              className="inline-flex h-12 items-center gap-2 rounded-full px-7 text-[15px] font-semibold"
              style={{ background: "var(--cf-inv-bg)", color: "var(--cf-inv-fg)" }}
            >
              Read Full Case Study <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="https://legalizin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={spring}
              className="inline-flex h-12 items-center gap-2 rounded-full border px-7 text-[15px] font-semibold"
              style={{ borderColor: "var(--cf-border)", background: "var(--cf-bg)", color: "var(--cf-fg)" }}
            >
              Visit Live Platform <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
