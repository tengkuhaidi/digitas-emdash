import { ArrowRight, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    n: "01",
    label: "LEGALIZIN",
    img: "/images/case-study/legalizin-preview.png",
    title: "Legalizin",
    lead: "Indonesia's premier automated RegTech engine and business licensing operating system.",
    story: [
      "Legalizin turns bureaucratic company establishment into a structured digital journey. Instead of navigating disconnected government portals, founders verify corporate entity availability, classify regulatory risk under KBLI 2025, and track statutory filings in one continuous workflow.",
      "We engineered the product from discovery to filing execution on an Edge runtime architecture, delivering sub-20ms response times nationwide. The platform integrates an instant KBLI classification lookup, automated drafting pipelines for Ministry of Law and Human Rights (AHU) submissions, and a self-managing AI indexing engine that captures high-intent organic legal queries across all 38 provinces.",
    ],
    tags: ["LegalTech", "RegTech", "Product UI/UX", "Web Platform", "Edge Architecture"],
    links: [
      { href: "/case-study/legalizin", text: "Read Technical Case Study", icon: "arrow" },
      { href: "https://legalizin.com/", text: "Visit Live Platform", icon: "out", external: true },
    ],
  },
  {
    n: "02",
    label: "VISITOR MANAGEMENT SYSTEM",
    img: "/images/case-study/vms-enterprise.png",
    title: "Visitor Management System (VMS)",
    lead: "Enterprise PropTech & Computer Vision Platform.",
    story: [
      "A multi-tenant building security platform engineered for high-throughput commercial towers to replace manual paper guestbooks and physical log jams.",
      "The system pairs front-desk operations with a containerized computer vision microservice using PaddleOCR and OpenCV. Visitors complete real-time national ID (KTP) recognition at reception kiosks, where the engine detects card boundaries, parses the 16-digit identity number, and auto-populates visitor passes in seconds. Building security teams manage live headcount tracking, authorized tenant hosts, and multi-floor turnstile access across multi-tower complexes from an active operational monitoring console.",
    ],
    tags: ["Enterprise", "PropTech", "Computer Vision", "Product UI/UX", "Web App"],
    stack: "Next.js · TypeScript · Python · PaddleOCR · OpenCV · Docker",
  },
  {
    n: "03",
    label: "CORPORATE DOCUMENT TRACKING",
    img: "/images/case-study/metropolitan-kentjana-doc-tracking.png",
    title: "Corporate Document Tracking Platform",
    lead: "Internal document workflow management, approval routing, and archival audit trail.",
    story: [
      "Designed and deployed for PT Metropolitan Kentjana Tbk to govern the end-to-end lifecycle of sensitive physical and digital corporate files across enterprise departments.",
      "We built an operational routing engine where every document handoff requires authenticated milestone approvals, digital signatures, and dynamic QR verification stamps. Granular role-based access control, cryptographic verification, and tamper-evident audit logs eliminate inter-departmental bottlenecks, giving legal, procurement, and executive teams complete visibility into corporate compliance history.",
    ],
    tags: ["Enterprise", "B2B", "Workflow Automation", "Product UI/UX", "Web App"],
    client: "PT Metropolitan Kentjana Tbk",
  },
] as const;

const pill = "cf-mono rounded-full border px-3 py-1 text-[11px]";
const pillStyle = { borderColor: "var(--cf-border)", color: "var(--cf-muted)" } as const;

function Bezel({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--cf-border)", background: "var(--cf-raised)", boxShadow: "0 24px 60px -30px var(--cf-glow)" }}>
      <div className="flex items-center gap-1.5 border-b px-4 py-3" style={{ borderColor: "var(--cf-border)" }} aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--cf-dim)", opacity: 0.5 }} />
        ))}
      </div>
      <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full" />
    </div>
  );
}

export function ProjectSpotlights() {
  return (
    <section id="featured" className="px-5 py-20 sm:py-28" style={{ background: "var(--cf-bg)" }}>
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 sm:mb-16">
          <p className="cf-mono mb-4 text-xs uppercase tracking-widest" style={{ color: "var(--cf-accent)" }}>
            Selected Work
          </p>
          <h2 className="cf-display text-balance" style={{ fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.045em", lineHeight: 1, color: "var(--cf-fg)" }}>
            Project Spotlights
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--cf-muted)" }}>
            A closer look at some of the digital products we've designed and built, from customer-facing platforms to complex enterprise systems.
          </p>
        </header>

        <div className="flex flex-col gap-14 sm:gap-20">
          {PROJECTS.map((p, i) => (
            <article key={p.n} className="grid items-center gap-8 border-t pt-10 lg:grid-cols-12 lg:gap-12" style={{ borderColor: "var(--cf-border)" }}>
              <div className={`min-w-0 lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                <Bezel src={p.img} alt={`${p.title} interface`} />
              </div>
              <div className={`min-w-0 lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
                <p className="cf-mono mb-3 text-[11px] uppercase tracking-widest" style={{ color: "var(--cf-accent)" }}>
                  {p.n} — {p.label}
                </p>
                <h3 className="cf-display text-balance" style={{ fontWeight: 700, fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)", letterSpacing: "-0.035em", lineHeight: 1.1, color: "var(--cf-fg)" }}>
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium leading-snug" style={{ color: "var(--cf-fg)" }}>{p.lead}</p>
                {p.story.map((s) => (
                  <p key={s.slice(0, 20)} className="mt-4 text-[14.5px] leading-relaxed" style={{ color: "var(--cf-muted)" }}>{s}</p>
                ))}
                {"client" in p && (
                  <p className="cf-mono mt-5 text-[11px] uppercase tracking-widest" style={{ color: "var(--cf-dim)" }}>
                    Client · <span style={{ color: "var(--cf-fg)" }}>{p.client}</span>
                  </p>
                )}
                {"stack" in p && (
                  <p className="cf-mono mt-5 text-[11px]" style={{ color: "var(--cf-dim)" }}>
                    <span className="uppercase tracking-widest">Tech Stack</span>
                    <span className="mt-1.5 block rounded-lg border px-3 py-2" style={{ borderColor: "var(--cf-border)", background: "var(--cf-card)", color: "var(--cf-fg)" }}>{p.stack}</span>
                  </p>
                )}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className={pill} style={pillStyle}>{t}</li>
                  ))}
                </ul>
                {"links" in p && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        {...("external" in l ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="inline-flex h-10 items-center gap-2 rounded-full border px-5 text-[13.5px] font-semibold transition-colors hover:opacity-80"
                        style={{ borderColor: "var(--cf-border)", background: l.icon === "arrow" ? "var(--cf-fg)" : "var(--cf-card)", color: l.icon === "arrow" ? "var(--cf-bg)" : "var(--cf-fg)" }}
                      >
                        {l.text} {l.icon === "arrow" ? <ArrowRight size={15} aria-hidden="true" /> : <ArrowUpRight size={15} aria-hidden="true" />}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
