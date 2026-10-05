import { useEffect, useRef, useState, type MouseEvent } from "react";
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

type Project = (typeof PROJECTS)[number];
type Mode = "spotlight" | "awwwards";

const pill = "cf-mono rounded-full border px-3 py-1 text-[11px]";
const pillStyle = { borderColor: "var(--cf-border)", color: "var(--cf-muted)" } as const;
const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const CSS = `
.sp-in{animation:sp-in .5s cubic-bezier(.2,.7,.2,1) both}
@keyframes sp-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.sp-card{position:relative;overflow:hidden;border-radius:1.5rem;border:1px solid var(--cf-border);background:var(--cf-card);isolation:isolate}
.sp-card::before{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;opacity:0;transition:opacity .3s;background:radial-gradient(circle at var(--x,50%) var(--y,50%),rgba(34,211,238,.15),transparent 60%)}
.sp-card::after{content:"";position:absolute;inset:0;z-index:3;pointer-events:none;opacity:0;transition:opacity .3s;border-radius:inherit;padding:1px;background:radial-gradient(260px circle at var(--x,50%) var(--y,50%),rgba(34,211,238,.7),transparent 70%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}
.sp-card:hover::before,.sp-card:hover::after{opacity:1}
.sp-mock{transition:transform .35s cubic-bezier(.2,.7,.2,1),box-shadow .35s;box-shadow:0 2px 4px rgba(0,0,0,.18),0 12px 24px -8px rgba(0,0,0,.28),0 40px 80px -24px rgba(0,0,0,.4),0 0 0 1px var(--cf-border)}
.sp-card:hover .sp-mock{transform:translateY(-4px)}
.sp-dot{animation:sp-pulse 1.8s ease-out infinite}
@keyframes sp-pulse{0%{box-shadow:0 0 0 0 rgba(34,197,94,.6)}100%{box-shadow:0 0 0 8px rgba(34,197,94,0)}}
.aw-pill{position:absolute;left:0;top:0;z-index:5;pointer-events:none;opacity:0;transition:opacity .2s;will-change:transform}
.aw-img:hover .aw-pill{opacity:1}
.aw-img{cursor:none}
@media (hover:none),(pointer:coarse){.aw-pill{display:none}.aw-img{cursor:auto}}
@media (prefers-reduced-motion:reduce){.sp-in,.sp-dot{animation:none}.sp-mock{transition:none}.sp-card:hover .sp-mock{transform:none}.aw-pill{display:none}.aw-img{cursor:auto}}
`;

function Body({ p, compact }: { p: Project; compact?: boolean }) {
  const story = compact ? p.story.slice(0, 1) : p.story;
  return (
    <>
      <p className="mt-3 text-[15px] font-medium leading-snug" style={{ color: "var(--cf-fg)" }}>{p.lead}</p>
      {story.map((s) => (
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
          <span className="mt-1.5 block rounded-lg border px-3 py-2" style={{ borderColor: "var(--cf-border)", background: "var(--cf-raised)", color: "var(--cf-fg)" }}>{p.stack}</span>
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
              className="inline-flex h-10 items-center gap-2 rounded-full border px-5 text-[13.5px] font-semibold transition-opacity hover:opacity-80"
              style={{ borderColor: "var(--cf-border)", background: l.icon === "arrow" ? "var(--cf-fg)" : "var(--cf-card)", color: l.icon === "arrow" ? "var(--cf-bg)" : "var(--cf-fg)" }}
            >
              {l.text} {l.icon === "arrow" ? <ArrowRight size={15} aria-hidden="true" /> : <ArrowUpRight size={15} aria-hidden="true" />}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

function SpotlightCard({ p, i }: { p: Project; i: number }) {
  const move = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  const flip = i % 2 === 1;
  return (
    <article className="sp-card grid lg:grid-cols-12" onMouseMove={move}>
      <span aria-hidden="true" className="cf-display pointer-events-none absolute -top-4 right-4 z-0 select-none leading-none sm:right-8" style={{ fontSize: "clamp(120px, 22vw, 260px)", fontWeight: 800, letterSpacing: "-0.06em", color: "transparent", WebkitTextStroke: "1.5px var(--cf-fg)", opacity: 0.07 }}>{p.n}</span>
      <div className={`relative z-[1] flex min-w-0 flex-col justify-center p-6 sm:p-10 lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
        <span className="cf-mono inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-[10.5px] uppercase tracking-widest" style={{ borderColor: "var(--cf-border)", color: "var(--cf-fg)" }}>
          <span className="sp-dot h-1.5 w-1.5 rounded-full" style={{ background: "#22c55e" }} />
          {i === 0 ? "Live in production" : "Online at scale"}
        </span>
        <p className="cf-mono mb-3 mt-5 text-[11px] uppercase tracking-widest" style={{ color: "var(--cf-accent)" }}>{p.n} — {p.label}</p>
        <h3 className="cf-display text-balance" style={{ fontWeight: 700, fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)", letterSpacing: "-0.035em", lineHeight: 1.1, color: "var(--cf-fg)" }}>{p.title}</h3>
        <Body p={p} compact />
      </div>
      <div className={`relative z-[1] flex min-w-0 items-center p-5 sm:p-10 lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
        <div className="sp-mock w-full overflow-hidden rounded-xl" style={{ background: "var(--cf-raised)" }}>
          <div className="flex items-center gap-1.5 border-b px-4 py-3" style={{ borderColor: "var(--cf-border)" }} aria-hidden="true">
            {[0, 1, 2].map((k) => <span key={k} className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--cf-dim)", opacity: 0.5 }} />)}
          </div>
          <img src={p.img} alt={`${p.title} interface`} loading="lazy" decoding="async" className="block h-auto w-full" />
        </div>
      </div>
    </article>
  );
}

function AwwwardsCard({ p, i }: { p: Project; i: number }) {
  const tilt = useRef<HTMLDivElement>(null);
  const pillEl = useRef<HTMLSpanElement>(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0, raf: 0 });
  const href = "links" in p ? p.links[0].href : undefined;

  useEffect(() => () => cancelAnimationFrame(pos.current.raf), []);

  const loop = () => {
    const s = pos.current;
    s.x += (s.tx - s.x) * 0.18;
    s.y += (s.ty - s.y) * 0.18;
    if (pillEl.current) pillEl.current.style.transform = `translate3d(${s.x}px,${s.y}px,0) translate(-50%,-50%)`;
    s.raf = Math.abs(s.tx - s.x) + Math.abs(s.ty - s.y) > 0.1 ? requestAnimationFrame(loop) : 0;
  };
  const move = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (tilt.current) tilt.current.style.transform = `rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg) scale(1.01)`;
    const s = pos.current;
    s.tx = e.clientX - r.left;
    s.ty = e.clientY - r.top;
    if (!s.raf) s.raf = requestAnimationFrame(loop);
  };
  const enter = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const s = pos.current;
    s.x = s.tx = e.clientX - r.left;
    s.y = s.ty = e.clientY - r.top;
  };
  const leave = () => {
    if (tilt.current) tilt.current.style.transform = "";
  };

  const Wrap: any = href ? "a" : "div";
  return (
    <article className="overflow-hidden rounded-3xl border" style={{ borderColor: "var(--cf-border)", background: "var(--cf-card)" }}>
      <div style={{ perspective: "1000px" }}>
        <Wrap
          {...(href ? { href, "aria-label": `Explore case: ${p.title}` } : {})}
          className="aw-img relative block aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10]"
          onMouseMove={move}
          onMouseEnter={enter}
          onMouseLeave={leave}
        >
          <div ref={tilt} className="absolute inset-0 transition-transform duration-200 ease-out" style={{ transformStyle: "preserve-3d", willChange: "transform" }}>
            <img src={p.img} alt={`${p.title} interface`} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--cf-card) 6%, color-mix(in srgb, var(--cf-card) 55%, transparent) 40%, transparent 75%), radial-gradient(ellipse at center, transparent 55%, color-mix(in srgb, var(--cf-bg) 70%, transparent) 100%)" }} />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 mix-blend-overlay" style={{ backgroundImage: GRAIN, opacity: 0.18 }} />
            <span aria-hidden="true" className="absolute left-0 top-0 h-full w-1" style={{ background: "linear-gradient(to bottom, var(--cf-accent), transparent)", boxShadow: "0 0 24px 2px var(--cf-accent)" }} />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-10" style={{ transform: "translateZ(40px)" }}>
              <p className="cf-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--cf-accent)" }}>{p.n} / 03 — {i === 0 ? "Live in production" : "Online at scale"}</p>
              <h3 className="cf-display mt-3 break-words uppercase" style={{ fontWeight: 800, fontSize: "clamp(1.9rem, 6.2vw, 4.75rem)", letterSpacing: "-0.06em", lineHeight: 0.92, color: "var(--cf-fg)" }}>{p.label}</h3>
            </div>
          </div>
          <span ref={pillEl} aria-hidden="true" className="aw-pill cf-mono whitespace-nowrap rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-widest" style={{ background: "var(--cf-inv-bg)", color: "var(--cf-inv-fg)", boxShadow: "0 8px 30px rgba(0,0,0,.35)" }}>
            Explore case ↗
          </span>
        </Wrap>
      </div>
      <div className="min-w-0 border-t p-5 sm:p-10" style={{ borderColor: "var(--cf-border)" }}>
        <h4 className="cf-display text-balance" style={{ fontWeight: 700, fontSize: "clamp(1.25rem, 2vw, 1.5rem)", letterSpacing: "-0.035em", lineHeight: 1.15, color: "var(--cf-fg)" }}>{p.title}</h4>
        <div className="max-w-3xl"><Body p={p} compact /></div>
      </div>
    </article>
  );
}

const MODES: { id: Mode; label: string }[] = [
  { id: "spotlight", label: "✦ Linear Spotlight" },
  { id: "awwwards", label: "⚡ Awwwards Magnetic" },
];

export function ProjectSpotlights() {
  const [mode, setMode] = useState<Mode>("spotlight");
  return (
    <section id="featured" className="overflow-x-clip px-5 py-20 sm:py-28" style={{ background: "var(--cf-bg)" }}>
      <style>{CSS}</style>
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex flex-col gap-8 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <p className="cf-mono mb-4 text-xs uppercase tracking-widest" style={{ color: "var(--cf-accent)" }}>Selected Work</p>
            <h2 className="cf-display text-balance" style={{ fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.045em", lineHeight: 1, color: "var(--cf-fg)" }}>Project Spotlights</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--cf-muted)" }}>
              A closer look at some of the digital products we've designed and built, from customer-facing platforms to complex enterprise systems.
            </p>
          </div>
          <div role="radiogroup" aria-label="Card style" className="flex w-full shrink-0 rounded-full border p-1 sm:w-auto" style={{ borderColor: "var(--cf-border)", background: "var(--cf-card)" }}>
            {MODES.map((m) => {
              const on = mode === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setMode(m.id)}
                  className="cf-mono flex-1 whitespace-nowrap rounded-full px-3 py-2 text-[11.5px] font-semibold transition-colors duration-300 sm:flex-none sm:px-4 sm:text-xs"
                  style={{ background: on ? "var(--cf-fg)" : "transparent", color: on ? "var(--cf-bg)" : "var(--cf-muted)" }}
                >
                  {m.label}
                </button>
              );
            })}
          </div>
        </header>

        <div key={mode} className="sp-in flex flex-col gap-8 sm:gap-12">
          {PROJECTS.map((p, i) => (mode === "spotlight" ? <SpotlightCard key={p.n} p={p} i={i} /> : <AwwwardsCard key={p.n} p={p} i={i} />))}
        </div>
      </div>
    </section>
  );
}
