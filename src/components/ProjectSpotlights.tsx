import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  n: string;
  id: string;
  client: string;
  metric: string;
  impactHook: string;
  img: string;
}

const PROJECTS: Project[] = [
  {
    n: "01",
    id: "legalizin",
    client: "LEGALIZIN",
    metric: "< 20ms",
    impactHook: "serverless edge platform automating corporate licensing nationwide.",
    img: "/images/case-study/legalizin-preview.png",
  },
  {
    n: "02",
    id: "vms",
    client: "VMS ENTERPRISE",
    metric: "99.4%",
    impactHook: "national ID recognition via computer vision, clearing tower lobby queues.",
    img: "/images/case-study/vms-enterprise.png",
  },
  {
    n: "03",
    id: "doc-tracking",
    client: "METROPOLITAN KENTJANA",
    metric: "100%",
    impactHook: "tamper-evident audit trail governing mission-critical corporate files.",
    img: "/images/case-study/metropolitan-kentjana-doc-tracking.png",
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
      {/* Container aligned Header */}
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex items-start md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-10 border-b" style={{ borderColor: "var(--cf-border)" }}>
          <div className="max-w-2xl pr-2">
            <h2
              className="cf-display text-2xl sm:text-4xl lg:text-[46px] font-semibold tracking-tight leading-[1.12]"
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

          {/* Arrow Controls: 44px on mobile (min touch target), 56px on desktop */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 self-start md:self-end pt-1 md:pt-0">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous story"
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center border transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-20 hover:scale-105 active:scale-95 shadow-md"
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
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center border transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-20 hover:scale-105 active:scale-95 shadow-md"
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

      {/* Offside Bleed Carousel Track */}
      <div
        ref={trackRef}
        className="mt-6 sm:mt-10 flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scrollbar-none pt-2 pb-6 snap-x snap-mandatory"
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
              className="group shrink-0 w-[88vw] sm:w-[75vw] lg:w-[860px] flex flex-col md:block md:aspect-[16/9.5] rounded-2xl sm:rounded-3xl border overflow-hidden relative transition-all duration-500 shadow-2xl bg-zinc-950 snap-start"
              style={{
                borderColor: isActive ? "rgba(255, 255, 255, 0.22)" : "var(--cf-border)",
              }}
            >
              {/* Top-Left: Pure Client Brand Lockup (Relative on mobile, absolute on desktop) */}
              <div className="px-5 pt-5 pb-3 sm:px-8 sm:pt-8 md:absolute md:top-8 md:left-8 md:p-0 z-20 flex items-center justify-between">
                <span className="cf-mono text-[11px] sm:text-xs lg:text-[13px] font-bold tracking-[0.22em] text-cyan-400 md:text-white/90 uppercase drop-shadow-md">
                  {project.client}
                </span>
                <span className="cf-mono text-[10px] text-zinc-500 md:hidden">
                  {project.n} / {PROJECTS.length}
                </span>
              </div>

              {/* Media image container: responsive height on mobile with high visibility */}
              <div className="w-full h-48 sm:h-64 md:h-full p-4 sm:p-6 md:p-8 flex items-center justify-center md:justify-start overflow-hidden relative bg-zinc-950/80">
                <img
                  src={project.img}
                  alt={project.client}
                  className="max-w-full max-h-full object-contain object-center md:object-left rounded-lg sm:rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Cinematic Gradient Scrim (Desktop full overlay, mobile subtle bottom transition) */}
              <div className="pointer-events-none hidden md:block absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/30" />

              {/* Impact Hook: Natural vertical stack on mobile with solid readability scrim, pinned bottom-left on desktop */}
              <div className="p-5 sm:p-6 md:p-0 md:absolute md:bottom-8 md:left-8 md:right-8 max-w-xl text-left bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent md:bg-none z-20 border-t border-zinc-900 md:border-0">
                <h3 className="text-base sm:text-xl lg:text-[28px] font-medium tracking-tight text-white leading-snug drop-shadow-md">
                  <span className="font-bold text-white tracking-tight mr-2 underline decoration-cyan-400/80 decoration-2 underline-offset-4">
                    {project.metric}
                  </span>
                  {project.impactHook}
                </h3>
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
