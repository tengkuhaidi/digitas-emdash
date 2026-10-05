import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ProjectFeature {
  label: string;
  desc: string;
  metric: string;
}

interface Project {
  n: string;
  id: string;
  label: string;
  tagline: string;
  accent: string;
  accentGlow: string;
  img: string;
  url: string;
  latencyBadge: string;
  summary: string;
  deepDive: string;
  features: ProjectFeature[];
  tags: string[];
  client?: string;
  stack?: string[];
  caseStudyUrl?: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    n: "01",
    id: "legalizin",
    label: "LEGALIZIN.COM",
    tagline: "Autonomous RegTech & Corporate Incorporation Engine",
    accent: "#06b6d4",
    accentGlow: "rgba(6, 182, 212, 0.16)",
    img: "/images/case-study/legalizin-preview.png",
    url: "https://legalizin.com",
    latencyBadge: "18ms Edge Latency",
    summary:
      "Indonesia's automated business licensing operating system. Replaces disconnected bureaucratic queues with a continuous digital journey from instant corporate name verification to statutory compliance.",
    deepDive:
      "Built on Cloudflare Edge runtime with sub-20ms response times across 38 provinces. Features an instant KBLI 2025 classifier, automatic AHU Kemenkumham filing generation, and a self-managing AI SEO pipeline driving thousands of organic corporate leads without ad burn.",
    features: [
      { label: "Edge Speed", desc: "Edge SSR rendering under 20ms nationwide", metric: "< 20ms" },
      { label: "KBLI 2025 AI", desc: "Instant classification matching OSS RBA", metric: "1,559 Codes" },
      { label: "AI WhatsApp CS", desc: "24/7 automated consultation & dispatch", metric: "Instant" },
      { label: "Filing Pipeline", desc: "Direct format sync with AHU & OSS", metric: "100% Digital" },
    ],
    tags: ["RegTech", "Product UI/UX", "Edge Architecture", "AI Automation", "High-Volume B2B"],
    caseStudyUrl: "/case-study/legalizin",
    liveUrl: "https://legalizin.com",
  },
  {
    n: "02",
    id: "vms",
    label: "VMS ENTERPRISE",
    tagline: "High-Throughput PropTech & Computer Vision Access Control",
    accent: "#10b981",
    accentGlow: "rgba(16, 185, 129, 0.16)",
    img: "/images/case-study/vms-enterprise.png",
    url: "https://vms.digitas.id",
    latencyBadge: "Realtime Computer Vision",
    summary:
      "Enterprise building reception and physical security platform engineered for high-density commercial towers to eliminate manual lobby queues and paper visitor log books.",
    deepDive:
      "Pairs front-desk kiosks with a containerized PaddleOCR and OpenCV microservice for instant 16-digit national ID (KTP) recognition. Features multi-tower role-based access, automated host approval notifications, and dynamic floor turnstile integration.",
    features: [
      { label: "Identity OCR", desc: "Sub-second KTP parsing via PaddleOCR", metric: "99.4% Acc." },
      { label: "Multi-Tower", desc: "Unified reception for multi-tenant towers", metric: "Unlimited" },
      { label: "QR Pass Gate", desc: "Dynamic time-bound turnstile barcoding", metric: "Zero Touch" },
      { label: "Live Headcount", desc: "Real-time security audit & emergency log", metric: "Realtime" },
    ],
    tags: ["PropTech", "Computer Vision", "PaddleOCR", "Docker", "Enterprise Security"],
    client: "Commercial Towers & Developers",
    stack: ["Next.js", "TypeScript", "Python", "PaddleOCR", "OpenCV", "MariaDB", "Docker"],
  },
  {
    n: "03",
    id: "doc-tracking",
    label: "CORP DOC TRACKING",
    tagline: "Cryptographic Corporate Document Workflow & Milestone Audit Trail",
    accent: "#3b82f6",
    accentGlow: "rgba(59, 130, 246, 0.16)",
    img: "/images/case-study/metropolitan-kentjana-doc-tracking.png",
    url: "https://tracking.mkentjana.co.id",
    latencyBadge: "Tamper-Evident Ledger",
    summary:
      "Mission-critical physical and digital document tracking system built for public developer PT Metropolitan Kentjana Tbk (Pondok Indah Group).",
    deepDive:
      "Transforms inter-departmental document handoffs into an authenticated workflow engine. Features cryptographic digital signature stamping, dynamic QR verification seals, and granular department routing with zero-tamper audit logs.",
    features: [
      { label: "Handoff Routing", desc: "Enforced milestone handoffs with SLA timers", metric: "Zero Delay" },
      { label: "Dynamic QR Seal", desc: "Tamper-evident verification on physical paper", metric: "Verified" },
      { label: "Digital Signature", desc: "Multi-tier department executive sign-off", metric: "Secured" },
      { label: "Audit Ledger", desc: "Immutable history for statutory audit reviews", metric: "100% Trace" },
    ],
    tags: ["Enterprise ERP", "Workflow Automation", "Audit Trail", "Public Company Scale"],
    client: "PT Metropolitan Kentjana Tbk",
  },
];

export function ProjectSpotlights() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);
  const p = PROJECTS[activeIdx];

  const handleSelectProject = (idx: number) => {
    setActiveIdx(idx);
    setActiveFeatureIdx(0);
  };

  return (
    <section id="featured" className="relative px-5 py-24 sm:py-32 overflow-hidden" style={{ background: "var(--cf-bg)" }}>
      {/* Background ambient lighting keyed to active project */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] opacity-40 transition-colors duration-700"
        style={{ background: p.accentGlow }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header with Title and Modern Architectural Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b" style={{ borderColor: "var(--cf-border)" }}>
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ background: p.accent }} />
              <p className="cf-mono text-[11px] uppercase tracking-[0.24em]" style={{ color: p.accent }}>
                SELECTED WORK // STAGE ARCHITECTURE
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight" style={{ color: "var(--cf-fg)" }}>
              Project Spotlights
            </h2>
            <p className="mt-2 text-sm sm:text-base max-w-xl leading-relaxed" style={{ color: "var(--cf-muted)" }}>
              A closer look at some of the digital products we've designed and built, from customer-facing platforms to complex enterprise systems.
            </p>
          </div>

          {/* Architectural Stage Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl border backdrop-blur-md self-start md:self-auto" style={{ background: "var(--cf-card)", borderColor: "var(--cf-border)" }}>
            {PROJECTS.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectProject(idx)}
                  className="relative px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-[13px] font-medium transition-all duration-300 flex items-center gap-2"
                  style={{
                    background: isActive ? "var(--cf-raised)" : "transparent",
                    color: isActive ? "var(--cf-fg)" : "var(--cf-muted)",
                    boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.12)" : "none",
                  }}
                >
                  <span
                    className="cf-mono text-[10px] font-bold tracking-wider"
                    style={{ color: isActive ? item.accent : "var(--cf-dim)" }}
                  >
                    {item.n}
                  </span>
                  <span>{item.label.split(".")[0]}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.accent }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* The Godly Stage Main Showcase */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Screen Bezel & Media Preview */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* The Integrated Device Stage Frame */}
            <div
              className="group relative rounded-3xl border p-2 sm:p-3 overflow-hidden transition-all duration-500 shadow-2xl"
              style={{
                background: "var(--cf-card)",
                borderColor: "var(--cf-border)",
                boxShadow: `0 24px 60px -15px ${p.accentGlow}`,
              }}
            >
              {/* Glass Chrome Titlebar */}
              <div className="flex items-center justify-between px-3 py-2.5 rounded-2xl mb-2 border" style={{ background: "var(--cf-bg)", borderColor: "var(--cf-border)" }}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="cf-mono text-[11px] ml-2 px-2 py-0.5 rounded-md border" style={{ borderColor: "var(--cf-border)", color: "var(--cf-muted)" }}>
                    {p.url}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} />
                  <span className="cf-mono text-[10px] uppercase tracking-wider" style={{ color: p.accent }}>
                    {p.latencyBadge}
                  </span>
                </div>
              </div>

              {/* Stage Viewport with Image & Vignette Blending */}
              <div className="relative rounded-2xl overflow-hidden border bg-zinc-950 aspect-[16/10]" style={{ borderColor: "var(--cf-border)" }}>
                <img
                  src={p.img}
                  alt={p.label}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Soft Vignette Overlay to blend seamlessly into dark card */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Floating Bottom Telemetry Stamp */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="cf-mono text-[11px] text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    {p.tagline}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Feature Telemetry Matrix (Inside the Stage) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {p.features.map((feat, idx) => {
                const isSelected = activeFeatureIdx === idx;
                return (
                  <button
                    key={feat.label}
                    onClick={() => setActiveFeatureIdx(idx)}
                    className="p-3 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between"
                    style={{
                      background: isSelected ? "var(--cf-raised)" : "var(--cf-card)",
                      borderColor: isSelected ? p.accent : "var(--cf-border)",
                    }}
                  >
                    <span className="cf-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--cf-muted)" }}>
                      {feat.label}
                    </span>
                    <span className="text-base font-semibold mt-1" style={{ color: isSelected ? p.accent : "var(--cf-fg)" }}>
                      {feat.metric}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Editorial Case Study Brief & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full p-2 sm:p-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="cf-mono text-xs px-2.5 py-0.5 rounded-full border font-bold" style={{ borderColor: p.accent, color: p.accent }}>
                  PROJECT {p.n}
                </span>
                {p.client && (
                  <span className="cf-mono text-xs" style={{ color: "var(--cf-muted)" }}>
                    CLIENT · <strong style={{ color: "var(--cf-fg)" }}>{p.client}</strong>
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-2xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--cf-fg)" }}>
                {p.label}
              </h3>
              <p className="mt-2 text-sm sm:text-base font-medium leading-snug" style={{ color: p.accent }}>
                {p.tagline}
              </p>

              <p className="mt-5 text-sm sm:text-[15px] leading-relaxed" style={{ color: "var(--cf-fg)" }}>
                {p.summary}
              </p>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed" style={{ color: "var(--cf-muted)" }}>
                {p.deepDive}
              </p>

              {/* Active Feature Deep Dive Spotlight */}
              <div className="mt-6 p-4 rounded-2xl border" style={{ background: "var(--cf-card)", borderColor: "var(--cf-border)" }}>
                <div className="flex items-center justify-between">
                  <span className="cf-mono text-xs uppercase tracking-wider font-semibold" style={{ color: p.accent }}>
                    FEATURE DETAIL // {p.features[activeFeatureIdx].label}
                  </span>
                  <span className="cf-mono text-xs font-bold px-2 py-0.5 rounded" style={{ background: "var(--cf-raised)", color: p.accent }}>
                    {p.features[activeFeatureIdx].metric}
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm" style={{ color: "var(--cf-muted)" }}>
                  {p.features[activeFeatureIdx].desc}
                </p>
              </div>

              {/* Tech Stack Chips if present */}
              {p.stack && (
                <div className="mt-5">
                  <p className="cf-mono text-[11px] uppercase tracking-wider mb-2" style={{ color: "var(--cf-dim)" }}>
                    VERIFIED STACK ARCHITECTURE
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((st) => (
                      <span key={st} className="cf-mono text-[11px] px-2.5 py-1 rounded-md border" style={{ background: "var(--cf-raised)", borderColor: "var(--cf-border)", color: "var(--cf-fg)" }}>
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Categorical Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="cf-mono text-[11px] px-3 py-1 rounded-full border" style={{ borderColor: "var(--cf-border)", color: "var(--cf-muted)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 pt-6 border-t flex flex-wrap gap-3" style={{ borderColor: "var(--cf-border)" }}>
              {p.caseStudyUrl && (
                <a
                  href={p.caseStudyUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 hover:opacity-90 shadow-md"
                  style={{ background: "var(--cf-fg)", color: "var(--cf-bg)" }}
                >
                  Read Technical Case Study <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 hover:bg-white/5"
                  style={{ borderColor: "var(--cf-border)", color: "var(--cf-fg)" }}
                >
                  Visit Live Platform <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
