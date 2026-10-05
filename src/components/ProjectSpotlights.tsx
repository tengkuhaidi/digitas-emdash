import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface Project {
  n: string;
  id: string;
  client: string;
  metric: string;
  impactHook: string;
  attribution: string;
  img: string;
  url: string;
  linkText: string;
  linkHref: string;
}

const PROJECTS: Project[] = [
  {
    n: "01",
    id: "legalizin",
    client: "LEGALIZIN",
    metric: "< 20ms",
    impactHook: "sub-20ms corporate formation and statutory licensing platform running completely serverless on the edge.",
    attribution: "Tengku Haidi · Founder & Lead Systems Architect",
    img: "/images/case-study/legalizin-preview.png",
    url: "https://legalizin.com",
    linkText: "View platform",
    linkHref: "https://legalizin.com",
  },
  {
    n: "02",
    id: "vms",
    client: "VMS ENTERPRISE",
    metric: "99.4%",
    impactHook: "instant national ID recognition via computer vision, eliminating lobby queue congestion across commercial towers.",
    attribution: "Commercial PropTech & Security Systems",
    img: "/images/case-study/vms-enterprise.png",
    url: "https://vms.digitas.id",
    linkText: "View system",
    linkHref: "https://vms.digitas.id",
  },
  {
    n: "03",
    id: "doc-tracking",
    client: "METROPOLITAN KENTJANA",
    metric: "100%",
    impactHook: "tamper-evident audit trail and cryptographic workflow routing governing mission-critical physical files.",
    attribution: "PT Metropolitan Kentjana Tbk · Pondok Indah Group",
    img: "/images/case-study/metropolitan-kentjana-doc-tracking.png",
    url: "https://tracking.mkentjana.co.id",
    linkText: "View case study",
    linkHref: "#method",
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

          {/* Clean Arrow Controls */}
          <div className="flex items-center gap-2 shrink-0 self-start md:self-end">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous story"
              className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-20"
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
              aria-label="Next story"
              className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-20"
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
              className="group snap-start shrink-0 w-[85vw] sm:w-[75vw] lg:w-[860px] aspect-[16/9.5] rounded-3xl border overflow-hidden relative transition-all duration-500 shadow-2xl"
              style={{
                background: "var(--cf-card)",
                borderColor: isActive ? "rgba(255, 255, 255, 0.2)" : "var(--cf-border)",
              }}
            >
              {/* Full-bleed media visual */}
              <img
                src={project.img}
                alt={project.client}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Clean Cinematic Gradient Scrim (No Browser Chrome) */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/30" />

              {/* Top-Left: Pure Client Brand Lockup */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
                <span className="cf-mono text-xs sm:text-[13px] font-bold tracking-[0.22em] text-white/90 uppercase drop-shadow-md">
                  {project.client}
                </span>
              </div>

              {/* Bottom-Left: Punchy Metric + Hook + Attribution + Button */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 max-w-xl text-left">
                {/* Big Bold Impact Hook */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-white leading-snug drop-shadow-md">
                  <span className="font-bold text-white tracking-tight mr-2 underline decoration-cyan-400/80 decoration-2 underline-offset-4">
                    {project.metric}
                  </span>
                  {project.impactHook}
                </h3>

                {/* Subtitle Attribution */}
                <p className="mt-3 text-xs sm:text-sm text-zinc-300 font-medium">
                  {project.attribution}
                </p>

                {/* Sleek Pill Button */}
                <div className="mt-5">
                  <a
                    href={project.linkHref}
                    target={project.linkHref.startsWith("http") ? "_blank" : undefined}
                    rel={project.linkHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 hover:border-white/30"
                  >
                    {project.linkText} <ArrowUpRight className="w-4 h-4 text-white/70" />
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
