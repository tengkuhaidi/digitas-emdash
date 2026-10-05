import { useState, useRef, useEffect } from "react";

interface Project {
  n: string;
  id: string;
  client: string;
  metricNumber: string;
  metricLabel: string;
  personName: string;
  personRole: string;
  img: string;
  href: string;
}

const PROJECTS: Project[] = [
  {
    n: "01",
    id: "legalizin",
    client: "LEGALIZIN",
    metricNumber: "< 20ms",
    metricLabel: "Serverless edge latency automating corporate licensing nationwide",
    personName: "Tengku Haidi",
    personRole: "Lead Systems Architect",
    img: "/images/case-study/legalizin-preview.png",
    href: "/case-study/legalizin",
  },
  {
    n: "02",
    id: "vms",
    client: "VMS ENTERPRISE",
    metricNumber: "99.4%",
    metricLabel: "National ID recognition vision, clearing tower lobby queues",
    personName: "Enterprise Security",
    personRole: "Commercial PropTech Systems",
    img: "/images/case-study/vms-enterprise.png",
    href: "/case-study/legalizin",
  },
  {
    n: "03",
    id: "doc-tracking",
    client: "METROPOLITAN KENTJANA",
    metricNumber: "100%",
    metricLabel: "Tamper-evident audit trail governing mission-critical corporate files",
    personName: "Pondok Indah Group",
    personRole: "Corporate Document Governance",
    img: "/images/case-study/metropolitan-kentjana-doc-tracking.png",
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
      className="relative py-14 sm:py-20 lg:py-28 overflow-x-clip"
      style={{ background: "var(--cf-bg)" }}
    >
      {/* Container aligned Header - 1:1 TryProfound Layout */}
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="pb-3 sm:pb-4">
          <h2
            className="cf-display text-2xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.15]"
            style={{ color: "var(--cf-fg)" }}
          >
            Engineered for systems with higher standards.
          </h2>
          <p
            className="mt-3 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl text-balance"
            style={{ color: "var(--cf-muted)" }}
          >
            Mission-critical digital products, internal platforms, and automated workflow engines built for masters of their craft.
          </p>
        </div>

        {/* 1:1 TryProfound Navigation Controls: Dedicated row below subhead, right-aligned (size-8, rounded-[4px], subtle border & background) */}
        <div className="flex justify-end pt-2 pb-3">
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous customer story"
              className="w-8 h-8 rounded-[4px] flex items-center justify-center transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
              style={{
                backgroundColor: "transparent",
                color: canGoPrev ? "rgb(237, 242, 245)" : "rgb(80, 80, 80)",
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next customer story"
              className="w-8 h-8 rounded-[4px] flex items-center justify-center transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
              style={{
                backgroundColor: canGoNext ? "rgb(51, 51, 51)" : "transparent",
                color: canGoNext ? "rgb(237, 242, 245)" : "rgb(80, 80, 80)",
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Offside Bleed Carousel Track - 1:1 TryProfound Card Proportions (aspect-[4/5] on mobile) */}
      <div
        ref={trackRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none pt-1 pb-6 snap-x snap-mandatory"
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
              className="group shrink-0 w-[84vw] sm:w-[65vw] lg:w-[680px] aspect-[4/5] sm:aspect-[16/11] rounded-2xl border overflow-hidden relative transition-all duration-500 shadow-2xl bg-zinc-950 snap-start"
              style={{
                borderColor: isActive ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.08)",
              }}
            >
              {/* Full-Bleed Media Background */}
              <div className="absolute inset-0 w-full h-full bg-zinc-950 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.client}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02] filter brightness-[0.75] contrast-[1.05]"
                  loading="lazy"
                />
              </div>

              {/* TryProfound Multi-Stop Scrim: Top subtle dark + Bottom 55% smooth gradient for 100% white text contrast */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black via-black/85 to-transparent" />

              {/* Top-Left: Brand Lockup (1:1 with MongoDB / Plaid placement in Profound) */}
              <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-20 flex items-center gap-2">
                <span className="cf-mono text-xs sm:text-[13px] font-bold tracking-[0.2em] text-white/95 uppercase drop-shadow-md">
                  {project.client}
                </span>
              </div>

              {/* Bottom Lockup (1:1 TryProfound Customer Story Anatomy) */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-left z-20">
                {/* 1. Metric Hook: Big Number stacked over Description */}
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none drop-shadow-md">
                    {project.metricNumber}
                  </div>
                  <div className="mt-1.5 text-sm sm:text-base text-white/90 font-normal leading-snug drop-shadow-sm max-w-md">
                    {project.metricLabel}
                  </div>
                </div>

                {/* 2. Attribution: Single Line "Name • Title" (1:1 Profound) */}
                <div className="mt-3 flex items-center gap-1.5 text-xs sm:text-[13px] leading-tight text-white/90">
                  <span className="font-semibold text-white">{project.personName}</span>
                  <span className="text-zinc-500 font-bold">•</span>
                  <span className="text-zinc-400 font-normal truncate">{project.personRole}</span>
                </div>

                {/* 3. Button: Translucent Pill "View story" without extra icons (1:1 Profound) */}
                <div className="mt-4">
                  <a
                    href={project.href}
                    className="inline-flex items-center justify-center px-4 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 border bg-white/15 hover:bg-white/25 border-white/20 text-white backdrop-blur-md shadow-sm active:scale-95"
                  >
                    View story
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
