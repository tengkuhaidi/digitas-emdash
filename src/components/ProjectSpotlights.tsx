import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b" style={{ borderColor: "var(--cf-border)" }}>
          <div className="max-w-2xl">
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

          {/* Prominent TryProfound-Sized Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous story"
              className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-20 hover:scale-105 active:scale-95 shadow-md"
              style={{
                background: canGoPrev ? "var(--cf-card)" : "transparent",
                borderColor: "var(--cf-border)",
                color: canGoPrev ? "var(--cf-fg)" : "var(--cf-dim)",
              }}
            >
              <ChevronLeft className="w-8 h-8 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next story"
              className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-20 hover:scale-105 active:scale-95 shadow-md"
              style={{
                background: canGoNext ? "var(--cf-raised)" : "transparent",
                borderColor: "var(--cf-border)",
                color: canGoNext ? "var(--cf-fg)" : "var(--cf-dim)",
              }}
            >
              <ChevronRight className="w-8 h-8 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Offside Bleed Carousel Track */}
      {/* Container offset left: max-w-6xl has max-width 72rem (1152px) with px-5 (1.25rem/20px). */}
      {/* On desktop >= 1152px, the content left edge is calc((100vw - 1152px)/2 + 20px). */}
      <div
        ref={trackRef}
        className="mt-10 flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth scrollbar-none pt-2 pb-6"
        style={{
          paddingLeft: "calc(max(1.25rem, (100vw - 72rem) / 2 + 1.25rem))",
          paddingRight: "max(1.25rem, 8vw)",
        }}
      >
        {/* Leading spacer dummy item to absorb any initial scroll offset or ensure direct alignment */}
        {PROJECTS.map((project, idx) => {
          const isActive = idx === currentIndex;
          return (
            <article
              key={project.id}
              data-spotlight-card
              className="group shrink-0 w-[85vw] sm:w-[75vw] lg:w-[860px] aspect-[16/9.5] rounded-3xl border overflow-hidden relative transition-all duration-500 shadow-2xl bg-zinc-950"
              style={{
                borderColor: isActive ? "rgba(255, 255, 255, 0.2)" : "var(--cf-border)",
              }}
            >
              {/* Media image container with left alignment */}
              <div className="w-full h-full p-6 sm:p-10 flex items-center justify-start">
                <img
                  src={project.img}
                  alt={project.client}
                  className="max-w-full max-h-full object-contain object-left rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Clean Cinematic Gradient Scrim */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />

              {/* Top-Left: Pure Client Brand Lockup */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-10">
                <span className="cf-mono text-xs sm:text-[13px] font-bold tracking-[0.22em] text-white/90 uppercase drop-shadow-md">
                  {project.client}
                </span>
              </div>

              {/* Bottom-Left: Punchy Single-Sentence Metric Hook */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-10 max-w-xl text-left">
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium tracking-tight text-white leading-snug drop-shadow-md">
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
      <div className="mt-12 flex justify-center">
        <a
          href="/case-study/legalizin"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover:bg-white/10 shadow-lg"
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
