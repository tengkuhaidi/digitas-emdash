import { useRef, useState, useEffect } from "react";
import type { ComponentType } from "react";
import { Branches } from "@lucasmarkes/hairline/react";

type Fig = ComponentType<{ intensity?: number; theme?: "dark"; label?: string }>;

interface Step {
  n: string;
  tag: string;
  title: string;
  sub: string;
  body: string;
  deliverables: string[];
}

const STEPS: Step[] = [
  {
    n: "01",
    tag: "DIAGNOSIS & ROOT CAUSE",
    title: "Audit the Real Operational Bottleneck",
    body: "Operational friction rarely starts where people think. We trace the handoffs across your team, spreadsheets, and legacy systems to isolate the exact constraint slowing down growth.",
    deliverables: ["Root-Cause Audit", "Process Flow", "Bottleneck Spec"],
  },
  {
    n: "02",
    tag: "PROBLEM DECOMPOSITION",
    title: "Decompose Friction Into Clear Sub-Systems",
    body: "Operational delays rarely have a single cause. We isolate approval stalls, redundant spreadsheet handoffs, and silent database sync failures into measurable, actionable friction points.",
    deliverables: ["Friction Matrix", "Sub-Systems", "Logic Mapping"],
  },
  {
    n: "03",
    tag: "SOLUTION DESIGN & ARCHITECTURE",
    title: "Design the Leanest System Architecture",
    body: "We architect the leanest technical remedy: whether that means an asynchronous webhook worker, legacy API bridge, or a clean role-based interface built for speed and clarity.",
    deliverables: ["Event Specs", "API Contracts", "Clean UX Flow"],
  },
  {
    n: "04",
    tag: "ENGINEERING & EXECUTION",
    title: "Implement Without Reworking Your Stack",
    body: "We build and deploy event-driven edge pipelines that connect your current databases and legacy tools. Automated retries, data encryption, and tamper-evident audit logs run out of the box.",
    deliverables: ["Edge Workers", "ERP Sync", "Auto Pipelines"],
  },
  {
    n: "05",
    tag: "CONTINUOUS OBSERVABILITY",
    title: "Monitor, Measure, and Iterate Live",
    body: "Going live is just day one. We monitor conversion health, processing latencies, and transaction error rates in production, optimizing the workflow as your transaction volume scales.",
    deliverables: ["Telemetry SLA", "Health Monitor", "Live Tuning"],
  },
];

export function AutonomousSystemsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const stepElements = containerRef.current.querySelectorAll("[data-step-index]");
      const triggerY = window.innerHeight * 0.45;

      stepElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const idx = Number(el.getAttribute("data-step-index"));
        if (rect.top <= triggerY && rect.bottom >= triggerY) {
          setActiveStep(idx);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = STEPS[activeStep] || STEPS[0];

  return (
    <section id="method" ref={containerRef} className="relative px-5 py-24 sm:py-32" style={{ background: "var(--cf-bg)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Narrative Anchor */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col justify-between self-start">
            <div>
              <h2
                className="cf-display text-balance font-bold tracking-tight text-3xl sm:text-5xl lg:text-[44px] leading-[1.08]"
                style={{ color: "var(--cf-fg)" }}
              >
                We spend less time guessing and own the entire system around your problem.
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed" style={{ color: "var(--cf-muted)" }}>
                At Digitas, we do not start with superficial mockups. We audit the friction in your operations, isolate each bottleneck, engineer the automated fix, and stay to ensure performance never slips.
              </p>

              {/* Interactive Isometric Branches Plate */}
              <div className="mt-8 rounded-2xl border p-4 bg-zinc-950/60" style={{ borderColor: "var(--cf-border)" }}>
                <div className="flex items-center justify-between mb-2 pb-2 border-b" style={{ borderColor: "var(--cf-border)" }}>
                  <span className="cf-mono text-[10px] uppercase tracking-wider text-cyan-400">
                    ACTIVE STAGE // {current.n}
                  </span>
                  <span className="cf-mono text-[10px] text-zinc-400">
                    {activeStep + 1} OF {STEPS.length}
                  </span>
                </div>
                <div className="w-full max-w-xs mx-auto py-2">
                  <Branches intensity={0.7} theme="dark" label="Interactive system branches" />
                </div>
              </div>

              {/* Progress Stepper Bar */}
            </div>
          </div>

          {/* Right Column: Scrolling Process Steps */}
          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-12 pt-4 lg:pt-0">
            {STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <article
                  key={step.n}
                  data-step-index={idx}
                  className="group relative rounded-3xl border p-7 sm:p-10 transition-all duration-500"
                  style={{
                    borderColor: isActive ? "rgba(6, 182, 212, 0.45)" : "var(--cf-border)",
                    background: isActive ? "var(--cf-raised)" : "var(--cf-card)",
                    boxShadow: isActive ? "0 20px 50px -15px rgba(6, 182, 212, 0.12)" : "none",
                  }}
                >
                  <div className="flex items-center justify-between gap-4 border-b pb-5" style={{ borderColor: "var(--cf-border)" }}>
                    <div className="flex items-center gap-3">
                      <span
                        className="cf-mono text-sm font-bold px-3 py-1 rounded-full border transition-colors"
                        style={{
                          borderColor: isActive ? "var(--cf-accent, #06b6d4)" : "var(--cf-border)",
                          color: isActive ? "var(--cf-accent, #06b6d4)" : "var(--cf-dim)",
                          background: "var(--cf-bg)",
                        }}
                      >
                        {step.n}
                      </span>
                      <span className="cf-mono text-[11px] uppercase tracking-wider font-semibold" style={{ color: "var(--cf-muted)" }}>
                        {step.tag}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="cf-display mt-6 text-2xl sm:text-3xl font-semibold tracking-tight leading-snug"
                    style={{ color: "var(--cf-fg)" }}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: "var(--cf-muted)" }}>
                    {step.body}
                  </p>

                  {/* Deliverables / Output Pills - Single Line Strictly */}
                  <div className="mt-8 pt-6 border-t" style={{ borderColor: "var(--cf-border)" }}>
                    <p className="cf-mono text-[10px] uppercase tracking-wider mb-3" style={{ color: "var(--cf-dim)" }}>
                      OUTPUT &amp; DELIVERABLES
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((deliv) => (
                        <span
                          key={deliv}
                          className="cf-mono text-xs px-3 py-1.5 rounded-xl border whitespace-nowrap transition-colors"
                          style={{
                            borderColor: isActive ? "rgba(6, 182, 212, 0.3)" : "var(--cf-border)",
                            background: "var(--cf-bg)",
                            color: isActive ? "var(--cf-fg)" : "var(--cf-muted)",
                          }}
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
