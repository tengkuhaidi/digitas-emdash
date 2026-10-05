import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  n: string;
  id: string;
  client: string;
  metric: string;
  impactHook: string;
  img: string;
  attribution: string;
  href: string;
}

const PROJECTS: Project[] = [
  {
    n: "01",
    id: "legalizin",
    client: "LEGALIZIN",
    metric: "< 20ms",
    impactHook: "serverless edge platform automating corporate licensing nationwide.",
    img: "/images/case-study/legalizin-preview.png",
    attribution: "Tengku Haidi · Lead Systems Architect",
    href: "/case-study/legalizin",
  },
  {
    n: "02",
    id: "vms",
    client: "VMS ENTERPRISE",
    metric: "99.4%",
    impactHook: "national ID recognition via computer vision, clearing tower lobby queues.",
    img: "/images/case-study/vms-enterprise.png",
    attribution: "Commercial PropTech & Security Systems",
    href: "/case-study/legalizin",
  },
  {
    n: "03",
    id: "doc-tracking",
    client: "METROPOLITAN KENTJANA",
    metric: "100%",
    impactHook: "tamper-evident audit trail governing mission-critical corporate files.",
    img: "/images/case-study/metropolitan-kentjana-doc-tracking.png",
    attribution: "PT Metropolitan Kentjana Tbk · Pondok Indah Group",
    href: "/case-study/legalizin",
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
    if (cards[index] && cards[0]) {
      const targetLeft = cards[index].offsetLeft - cards[0].offsetLeft;
      trackRef.current.scrollTo({
        left: targetLeft,
        behavior: "smooth",
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

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const cards = track.querySelectorAll<HTMLElement>("[data-spotlight-card]");
        if (!cards.length || !cards[0]) return;
        const currentScroll = track.scrollLeft;
        
        let closestIdx = 0;
        let minDiff = Infinity;
        cards.forEach((card, idx) => {
          const target = card.offsetLeft - cards[0].offsetLeft;
          const diff = Math.abs(currentScroll - target);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = idx;
          }
        });
        setCurrentIndex(closestIdx);
      }, 50);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      track.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="featured"
      className="relative py-16 sm:py-24 lg:py-32 overflow-x-clip"
      style={{ background: "var(--cf-bg)" }}
    >
      {/* Container aligned Header - Exactly following TryProfound */}
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-10 border-b" style={{ borderColor: "var(--cf-border)" }}>
          <div className="max-w-2xl">
            <h2
              className="cf-display text-3xl sm:text-5xl lg:text-[46px] font-semibold tracking-tight leading-[1.12]"
              style={{ color: "var(--cf-fg)" }}
            >
              Engineered for systems with higher standards.
            </h2>
            <p
              className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl text-balance"
              style={{ color: "var(--cf-muted)" }}
            >
              Mission-critical digital products, internal platforms, and automated workflow engines built for masters of their craft.
            </p>
          </div>

          {/* TryProfound-style Arrow Controls: Aligned right */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 self-end md:self-end">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous story"
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl flex items-center justify-center border transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-20 hover:scale-105 active:scale-95 shadow-md"
              style={{
                background: canGoPrev ? "var(--cf-card)" : "transparent",
                borderColor: "var(--cf-border)",
                color: canGoPrev ? "var(--cf-fg)" : "var(--cf-dim)",
              }}
            >
              <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next story"
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl flex items-center justify-center border transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-20 hover:scale-105 active:scale-95 shadow-md"
              style={{
                background: canGoNext ? "var(--cf-raised)" : "transparent",
                borderColor: "var(--cf-border)",
                color: canGoNext ? "var(--cf-fg)" : "var(--cf-dim)",
              }}
            >
              <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Offside Bleed Carousel Track - 1:1 TryProfound Card Style */}
      <div
        ref={trackRef}
        className="mt-8 sm:mt-10 flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scrollbar-none pt-2 pb-6 snap-x snap-mandatory"
        style={{
          paddingLeft: "max(1.25rem, calc((100vw - 72rem) / 2 + 1.5rem))",
          paddingRight: "max(1.25rem, 8vw)",
          scrollPaddingLeft: "max(1.25rem, calc((100vw - 72rem) / 2 + 1.5rem))",
        }}
      >
        {PROJECTS.map((project, idx) => {
          const isActive = idx === currentIndex;
          return (
            <article
              key={project.id}
              data-spotlight-card
              className="group shrink-0 w-[84vw] sm:w-[75vw] lg:w-[860px] aspect-[3/4] sm:aspect-[16/10] lg:aspect-[16/9.5] rounded-2xl sm:rounded-3xl border overflow-hidden relative transition-all duration-500 shadow-2xl bg-zinc-950 snap-start"
              style={{
                borderColor: isActive ? "rgba(255, 255, 255, 0.2)" : "var(--cf-border)",
              }}
            >
              {/* Full-Bleed Media Background (1:1 with TryProfound case study card) */}
              <div className="absolute inset-0 w-full h-full bg-zinc-950 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.client}
                  className="w-full h-full object-cover object-top sm:object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.02] filter brightness-[0.75] contrast-[1.05]"
                  loading="lazy"
                />
              </div>

              {/* TryProfound Cinematic Gradient Scrim: Deep dark overlay on bottom and top for 100% legibility */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/35" />

              {/* Top-Left: Pure Client Brand Lockup (1:1 with Plaid logo placement in Profound) */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
                <span className="cf-mono text-xs sm:text-[13px] font-bold tracking-[0.22em] text-white/95 uppercase drop-shadow-md">
                  {project.client}
                </span>
              </div>

              {/* Bottom-Left: 1:1 TryProfound Impact Hook with Attribution & "View story" pill */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 max-w-xl text-left z-20">
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium tracking-tight text-white leading-snug drop-shadow-lg">
                  <span className="font-bold text-white tracking-tight mr-2 underline decoration-cyan-400/80 decoration-2 underline-offset-4">
                    {project.metric}
                  </span>
                  {project.impactHook}
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-400 font-medium">
                  {project.attribution}
                </p>

                <div className="mt-4 sm:mt-5">
                  <a
                    href={project.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border bg-white/10 hover:bg-white/20 border-white/15 text-white backdrop-blur-md shadow-md active:scale-95"
                  >
                    View story <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Single Clean "View all projects" CTA Button */}
      <div className="mt-8 sm:mt-12 flex justify-center px-5">
        <a
          href="/case-study/legalizin"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover:bg-white/10 shadow-lg active:scale-95"
          style={{
            background: "var(--cf-card)",
            borderColor: "var(--cf-border)",
            color: "var(--cf-fg)",
          }}
        >
          View all projects <ArrowUpRight className="w-4 h-4 text-cyan-400" />
        </a>
      </div>
    </section>
  );
}
