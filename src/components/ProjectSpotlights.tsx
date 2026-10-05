import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight } from "lucide-react";

interface ProjectFeature {
  label: string;
  metric: string;
  desc: string;
}

interface Project {
  n: string;
  id: string;
  title: string;
  client: string;
  accent: string;
  accentGlow: string;
  statHighlight: string;
  statLabel: string;
  headlineQuote: string;
  img: string;
  url: string;
  caseStudyUrl?: string;
  liveUrl?: string;
  summary: string;
  deepDive: string;
  features: ProjectFeature[];
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    n: "01",
    id: "legalizin",
    title: "Legalizin.com",
    client: "Legalizin RegTech Engine",
    accent: "#06b6d4",
    accentGlow: "rgba(6, 182, 212, 0.2)",
    statHighlight: "< 20ms",
    statLabel: "Edge Response Latency",
    headlineQuote: "Indonesia's automated business licensing engine with zero manual filing bottlenecks.",
    img: "/images/case-study/legalizin-preview.png",
    url: "legalizin.com",
    caseStudyUrl: "/case-study/legalizin",
    liveUrl: "https://legalizin.com",
    summary:
      "Indonesia's automated business licensing operating system. Replaces bureaucratic queues with a continuous digital journey from instant name verification to statutory compliance.",
    deepDive:
      "Engineered on Cloudflare Edge runtime with sub-20ms response times nationwide. Features real-time KBLI 2025 classification, automatic AHU filing generation, and autonomous AI search indexing.",
    features: [
      { label: "Edge Speed", metric: "< 20ms", desc: "Edge SSR rendering under 20ms nationwide" },
      { label: "KBLI 2025 AI", metric: "1,559 Codes", desc: "Instant classification matching OSS RBA" },
      { label: "AI WhatsApp CS", metric: "Instant", desc: "24/7 automated consultation & dispatch" },
    ],
    tags: ["RegTech", "Edge SSR", "KBLI 2025", "AI Automation"],
  },
  {
    n: "02",
    id: "vms",
    title: "VMS Enterprise",
    client: "High-Throughput PropTech",
    accent: "#10b981",
    accentGlow: "rgba(16, 185, 129, 0.2)",
    statHighlight: "99.4%",
    statLabel: "National ID OCR Accuracy",
    headlineQuote: "Eliminating lobby queue congestion across multi-tenant commercial towers.",
    img: "/images/case-study/vms-enterprise.png",
    url: "vms.digitas.id",
    liveUrl: "https://vms.digitas.id",
    summary:
      "Enterprise building reception and physical security platform engineered for commercial towers to eliminate manual paper guestbooks and receptionist bottlenecks.",
    deepDive:
      "Pairs front-desk kiosks with containerized PaddleOCR and OpenCV microservices for instant 16-digit national ID recognition, multi-tower access delegation, and dynamic turnstile QR barcoding.",
    features: [
      { label: "Identity OCR", metric: "99.4%", desc: "Sub-second KTP parsing via PaddleOCR" },
      { label: "Multi-Tower", metric: "Unlimited", desc: "Unified reception for multi-tenant towers" },
      { label: "Turnstile Gate", metric: "Zero Touch", desc: "Dynamic time-bound access barcoding" },
    ],
    tags: ["PropTech", "Computer Vision", "PaddleOCR", "Docker"],
  },
  {
    n: "03",
    id: "doc-tracking",
    title: "Corp Document Tracking",
    client: "PT Metropolitan Kentjana Tbk",
    accent: "#3b82f6",
    accentGlow: "rgba(59, 130, 246, 0.2)",
    statHighlight: "100%",
    statLabel: "Immutable Audit Ledger",
    headlineQuote: "Cryptographic handoff verification governing sensitive enterprise assets.",
    img: "/images/case-study/metropolitan-kentjana-doc-tracking.png",
    url: "tracking.mkentjana.co.id",
    summary:
      "Mission-critical physical and digital document tracking system built for public developer PT Metropolitan Kentjana Tbk (Pondok Indah Group).",
    deepDive:
      "Transforms inter-departmental document handoffs into an authenticated workflow engine. Features cryptographic digital signature stamping, dynamic QR verification seals, and granular department SLA tracking.",
    features: [
      { label: "Handoff Routing", metric: "Zero Delay", desc: "Enforced milestone handoffs with SLA timers" },
      { label: "Dynamic QR Seal", metric: "Verified", desc: "Tamper-evident verification on physical paper" },
      { label: "Digital Signature", metric: "Secured", desc: "Multi-tier department executive sign-off" },
    ],
    tags: ["Enterprise B2B", "Audit Trail", "QR Verification", "Public Developer"],
  },
];

export function ProjectSpotlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < PROJECTS.length - 1;

  const scrollToCard = (index: number) => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll<HTMLElement>("[data-spotlight-card]");
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) scrollToCard(currentIndex - 1);
  };

  const handleNext = () => {
    if (canGoNext) scrollToCard(currentIndex + 1);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const cards = track.querySelectorAll<HTMLElement>("[data-spotlight-card]");
      const trackRect = track.getBoundingClientRect();
      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        if (rect.left >= trackRect.left - 50 && rect.left <= trackRect.left + 250) {
          setCurrentIndex(idx);
        }
      });
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="featured"
      className="relative py-24 sm:py-32 overflow-x-clip"
      style={{ background: "var(--cf-bg)" }}
    >
      {/* Container aligned Header */}
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b" style={{ borderColor: "var(--cf-border)" }}>
          <div className="max-w-2xl">
            <p className="cf-mono text-[11px] uppercase tracking-[0.24em] text-cyan-400 mb-3">
              PROJECT SPOTLIGHTS
            </p>
            <h2
              className="cf-display text-3xl sm:text-5xl lg:text-[46px] font-semibold tracking-tight leading-[1.08]"
              style={{ color: "var(--cf-fg)" }}
            >
              Engineered for systems with higher standards.
            </h2>
            <p
              className="mt-4 text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: "var(--cf-muted)" }}
            >
              Mission-critical digital products, internal platforms, and automated workflow engines built for masters of their craft.
            </p>
          </div>

          {/* TryProfound Style Arrow Controls */}
          <div className="flex items-center gap-2 shrink-0 self-start md:self-end">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous project"
              className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-25"
              style={{
                background: canGoPrev ? "var(--cf-card)" : "transparent",
                borderColor: "var(--cf-border)",
                color: canGoPrev ? "var(--cf-fg)" : "var(--cf-dim)",
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next project"
              className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-25"
              style={{
                background: canGoNext ? "var(--cf-raised)" : "transparent",
                borderColor: "var(--cf-border)",
                color: canGoNext ? "var(--cf-fg)" : "var(--cf-dim)",
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Offside Bleed Carousel Track */}
      <div
        ref={trackRef}
        className="mt-10 flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory pt-2 pb-6"
        style={{
          paddingLeft: "max(1.25rem, calc((100vw - 72rem) / 2 + 1.25rem))",
          paddingRight: "max(1.25rem, 8vw)",
        }}
      >
        {PROJECTS.map((project, idx) => {
          const isActive = idx === currentIndex;
          return (
            <article
              key={project.id}
              data-spotlight-card
              className="group snap-start shrink-0 w-[85vw] sm:w-[75vw] lg:w-[860px] rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-500"
              style={{
                background: "var(--cf-card)",
                borderColor: isActive ? "rgba(6, 182, 212, 0.4)" : "var(--cf-border)",
                boxShadow: isActive ? `0 24px 60px -20px ${project.accentGlow}` : "none",
              }}
            >
              {/* Card Top: Browser Window Stage with Screenshot */}
              <div className="relative border-b" style={{ borderColor: "var(--cf-border)" }}>
                {/* Window Chrome */}
                <div
                  className="flex items-center justify-between px-4 py-3 border-b"
                  style={{ background: "var(--cf-bg)", borderColor: "var(--cf-border)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/60" />
                    <span
                      className="cf-mono text-[11px] ml-2 px-2.5 py-0.5 rounded-md border"
                      style={{ borderColor: "var(--cf-border)", color: "var(--cf-muted)" }}
                    >
                      {project.url}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="cf-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border"
                      style={{ borderColor: project.accent, color: project.accent }}
                    >
                      {project.n} // {project.title.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Screenshot Frame with Gradient Vignette */}
                <div className="relative aspect-[16/9] sm:aspect-[16/8.5] w-full overflow-hidden bg-zinc-950">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                    loading="lazy"
                  />
                  {/* Subtle edge vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Top-Left Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="cf-mono text-[11px] font-bold tracking-wider px-3 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-white shadow-lg">
                      {project.client.toUpperCase()}
                    </span>
                  </div>

                  {/* Floating Metric Callout Card */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 text-white shadow-2xl">
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: project.accent }}>
                        {project.statHighlight}
                      </span>
                      <span className="cf-mono text-xs uppercase tracking-wider text-zinc-300">
                        {project.statLabel}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-[13px] text-zinc-300 leading-snug line-clamp-2">
                      “{project.headlineQuote}”
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Bottom: Editorial Brief & Action Controls */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "var(--cf-fg)" }}>
                      {project.title}
                    </h3>
                    <span className="cf-mono text-xs" style={{ color: project.accent }}>
                      {project.client}
                    </span>
                  </div>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: "var(--cf-muted)" }}>
                    {project.deepDive}
                  </p>

                  {/* 3 Metric Pills */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {project.features.map((feat) => (
                      <div
                        key={feat.label}
                        className="p-3 rounded-xl border flex flex-col justify-between"
                        style={{ background: "var(--cf-bg)", borderColor: "var(--cf-border)" }}
                      >
                        <span className="cf-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--cf-dim)" }}>
                          {feat.label}
                        </span>
                        <span className="text-sm font-semibold mt-1" style={{ color: "var(--cf-fg)" }}>
                          {feat.metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Tags & Links */}
                <div
                  className="mt-8 pt-5 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  style={{ borderColor: "var(--cf-border)" }}
                >
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="cf-mono text-[11px] px-2.5 py-1 rounded-lg border whitespace-nowrap"
                        style={{ borderColor: "var(--cf-border)", color: "var(--cf-muted)", background: "var(--cf-bg)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.caseStudyUrl && (
                      <a
                        href={project.caseStudyUrl}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold transition-opacity hover:opacity-80"
                        style={{ color: "var(--cf-fg)" }}
                      >
                        Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium transition-colors hover:text-cyan-400"
                        style={{ color: "var(--cf-muted)" }}
                      >
                        Live Platform <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
