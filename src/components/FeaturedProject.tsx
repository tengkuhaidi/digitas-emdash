import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Vault } from "@lucasmarkes/hairline/react";

const spring = { type: "spring", stiffness: 260, damping: 26 } as const;

const card = "relative overflow-hidden rounded-3xl border p-6 sm:p-8";
const cardStyle = {
  borderColor: "var(--cf-border)",
  background: "radial-gradient(80% 60% at 100% 0%, var(--cf-glow), transparent 70%), var(--cf-card)",
} as const;

const Label = ({ children }: { children: string }) => (
  <p className="cf-mono mb-3 text-[11px] uppercase tracking-widest" style={{ color: "var(--cf-accent)" }}>{children}</p>
);
const Title = ({ children }: { children: string }) => (
  <h3 className="cf-display text-balance" style={{ fontWeight: 700, fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)", letterSpacing: "-0.035em", lineHeight: 1.1, color: "var(--cf-fg)" }}>{children}</h3>
);
const Body = ({ children }: { children: string }) => (
  <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--cf-muted)" }}>{children}</p>
);
const Metric = ({ v }: { v: string }) => (
  <div className="cf-display mt-1" style={{ fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 3.75rem)", letterSpacing: "-0.05em", lineHeight: 1, color: "var(--cf-fg)" }}>{v}</div>
);

const SMALL = [
  { label: "ORGANIC DISCOVERY", v: "#1", unit: "Google Organic Rank", body: "Programmatic SEO architecture, automated Google Instant Indexing API triggers, structured legal taxonomy." },
  { label: "STATUTORY AUTOMATION", v: "15+", unit: "Entity Workflows", body: "Automated intake for PT, CV, PT PMA, Yayasan, and KBLI 2020 multi-sector classification." },
  { label: "DATA INTEGRITY", v: "100%", unit: "Zero-Egress Cloud", body: "Cryptographically isolated deed repository and legal document vaults with zero bandwidth tax." },
];

const CHIPS = ["Cloudflare Edge", "Workers", "D1 SQL", "R2 Storage"];

export function FeaturedProject() {
  return (
    <section id="featured" className="px-5 py-20 sm:py-28" style={{ background: "var(--cf-bg)" }}>
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 sm:mb-14">
          <p className="cf-mono mb-4 text-xs uppercase tracking-widest" style={{ color: "var(--cf-accent)" }}>
            01 // FLAGSHIP VENTURE &amp; CASE STUDY
          </p>
          <h2 className="cf-display text-balance" style={{ fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.045em", lineHeight: 1, color: "var(--cf-fg)", maxWidth: "22ch" }}>
            Legalizin.com — Automated RegTech &amp; Compliance Engine
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--cf-muted)" }}>
            How Digitas engineered Indonesia's corporate formation and statutory licensing platform from scratch into an instantaneous, sub-20ms digital product.
          </p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={spring}
          className="grid gap-4 lg:grid-cols-12"
        >
          {/* Card 1: screenshot */}
          <article className={`${card} flex flex-col lg:col-span-7`} style={cardStyle}>
            <Label>SYSTEM IN ACTION</Label>
            <Title>Real-time Corporate Formation &amp; OSS RBA Verification</Title>
            <Body>Next.js frontend served from the Cloudflare edge. Company names are checked as the user types, and filings sync directly with AHU / Kemenkumham.</Body>
            <div className="mt-6 flex-1" style={{ perspective: "1400px" }}>
              <div
                className="overflow-hidden rounded-xl border transition-transform duration-500 hover:[transform:rotateX(0deg)_rotateY(0deg)]"
                style={{ borderColor: "var(--cf-border)", background: "var(--cf-bg)", transform: "rotateX(3deg) rotateY(-3deg)", boxShadow: "0 30px 60px -30px rgba(0,0,0,0.7)" }}
              >
                <div className="flex items-center gap-2 border-b px-3 py-2" style={{ borderColor: "var(--cf-border)", background: "var(--cf-raised)" }}>
                  <span className="flex gap-1.5" aria-hidden>
                    {[0, 1, 2].map((i) => <i key={i} className="block h-2.5 w-2.5 rounded-full" style={{ background: "var(--cf-border)" }} />)}
                  </span>
                  <span className="cf-mono mx-auto rounded-md px-3 py-0.5 text-[11px]" style={{ background: "var(--cf-bg)", color: "var(--cf-dim)" }}>legalizin.com</span>
                </div>
                <img
                  src="/images/case-study/legalizin-preview.png"
                  alt="Legalizin.com production hero with the instant company name check widget"
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </article>

          {/* Card 2: architecture */}
          <article className={`${card} flex flex-col lg:col-span-5`} style={cardStyle}>
            <Label>EDGE ARCHITECTURE</Label>
            <Title>Sub-20ms Serverless Distribution</Title>
            <div className="mt-5">
              <div className="cf-display" style={{ fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 3.75rem)", letterSpacing: "-0.05em", lineHeight: 1, color: "var(--cf-fg)" }}>&lt; 20ms</div>
              <p className="cf-mono mt-2 text-[11px] uppercase tracking-wider" style={{ color: "var(--cf-dim)" }}>Global Response Time</p>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {CHIPS.map((c) => (
                <li key={c} className="cf-mono rounded-full border px-3 py-1 text-[11px]" style={{ borderColor: "var(--cf-border)", background: "var(--cf-raised)", color: "var(--cf-muted)" }}>{c}</li>
              ))}
            </ul>
            <div className="mt-6 flex min-h-[220px] flex-1 items-center justify-center">
              <Vault intensity={0.6} theme="dark" label="Zero-egress document vault" />
            </div>
          </article>

          {/* Cards 3-5 */}
          {SMALL.map((c) => (
            <article key={c.label} className={`${card} lg:col-span-4`} style={cardStyle}>
              <Label>{c.label}</Label>
              <Metric v={c.v} />
              <p className="cf-mono mt-2 text-[11px] uppercase tracking-wider" style={{ color: "var(--cf-dim)" }}>{c.unit}</p>
              <Body>{c.body}</Body>
            </article>
          ))}
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <motion.a
            href="/case-study/legalizin"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={spring}
            className="inline-flex h-12 items-center gap-2 rounded-full px-7 text-[15px] font-semibold"
            style={{ background: "var(--cf-inv-bg)", color: "var(--cf-inv-fg)" }}
          >
            Read Full Technical Case Study <ArrowRight size={16} />
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
    </section>
  );
}
