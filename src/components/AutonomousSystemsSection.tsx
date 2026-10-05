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
    title: "Bedah & Analisa Masalah Bisnis",
    sub: "Start with the real bottleneck, not assumptions.",
    body: "Kami tidak langsung menyuruh Anda ganti sistem atau bikin fitur baru. Kami turun langsung membedah alur operasional, data analytics, rekaman transaksi, hingga interview tim di lapangan untuk menemukan akar masalah sebenarnya — dan mengapa itu terjadi.",
    deliverables: ["Operational Bottleneck Map", "Root Cause Analysis", "Cost & Friction Audit"],
  },
  {
    n: "02",
    tag: "PROBLEM DECOMPOSITION",
    title: "Pecah Masalah ke Sub-Sistem Terukur",
    sub: "Break monolithic issues into actionable friction points.",
    body: "Masalah besar yang rumit kami urai menjadi sub-sub masalah spesifik: apakah ini bottleneck di proses approval lambat, data ganda antar spreadsheet, atau sistem legasi yang tidak bisa kirim data otomatis. Tiap sub-masalah dipetakan dengan metrik yang jelas.",
    deliverables: ["Sub-Problem Architecture", "Data Flow Blueprint", "Impact vs Effort Matrix"],
  },
  {
    n: "03",
    tag: "SOLUTION DESIGN & ARCHITECTURE",
    title: "Rancang Solusi Sistem & Alur Terbaik",
    sub: "Design for behavioral outcomes, not just wireframes.",
    body: "Kami merumuskan arsitektur solusi yang paling efisien: apakah cukup dengan integrasi event-driven API, otomatisasi worker latar belakang, atau antarmuka baru. Desain dibangun berorientasi pada kemudahan manusia yang menggunakannya.",
    deliverables: ["Event-Driven Workflow Specs", "System Integration Architecture", "Zero-Friction UX Flows"],
  },
  {
    n: "04",
    tag: "ENGINEERING & EXECUTION",
    title: "Implementasi & Integrasi Tanpa Rewriting",
    sub: "Build and deploy production-grade pipelines.",
    body: "Kami mengeksekusi pembangunan sistem, mengintegrasikan sistem legasi atau database ERP Anda yang sudah ada tanpa perlu merombak dari nol. Pipeline berjalan otomatis dengan retry mechanism, enkripsi, dan audit trail yang reliabel.",
    deliverables: ["Edge API & Microservices", "Automated Background Workers", "Legacy ERP Sync"],
  },
  {
    n: "05",
    tag: "CONTINUOUS OBSERVABILITY & OPTIMIZATION",
    title: "Pemantauan & Optimasi Berkelanjutan",
    sub: "We stay to measure, observe, and keep operations optimal.",
    body: "Pekerjaan kami tidak berhenti saat sistem live. Kami terus memantau telemetri operasional, tingkat konversi, waktu proses, hingga beban tim Anda. Kami lakukan penyesuaian iteratif agar sistem bisnis Anda tetap optimal seiring pertumbuhan skala usaha.",
    deliverables: ["Live Telemetry & Health Monitor", "Performance SLA Tracking", "Iterative Optimization"],
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
          
          {/* Left Column: Sticky Narrative Anchor ala Eleken */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col justify-between self-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <p className="cf-mono text-[11px] uppercase tracking-[0.22em] text-cyan-400">
                  METHODOLOGY // SYSTEM THINKING
                </p>
              </div>

              <h2
                className="cf-display text-balance font-bold tracking-tight text-3xl sm:text-5xl lg:text-[44px] leading-[1.08]"
                style={{ color: "var(--cf-fg)" }}
              >
                We spend less time guessing and own the entire system around your problem.
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed" style={{ color: "var(--cf-muted)" }}>
                Di Digitas, kami tidak sekadar membuat tampilan. Kami menganalisa bisnis Anda dari akar masalah, mengurai tiap friksi, merancang dan mengimplementasikan solusinya, lalu tetap mendampingi agar operasional Anda selalu optimal.
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
              <div className="mt-8 hidden lg:flex items-center gap-2">
                {STEPS.map((s, idx) => {
                  const isActive = idx === activeStep;
                  const isPassed = idx < activeStep;
                  return (
                    <div
                      key={s.n}
                      className="h-1.5 flex-1 rounded-full transition-all duration-300"
                      style={{
                        background: isActive
                          ? "var(--cf-accent, #06b6d4)"
                          : isPassed
                          ? "var(--cf-fg)"
                          : "var(--cf-border)",
                        opacity: isActive ? 1 : isPassed ? 0.6 : 0.25,
                      }}
                    />
                  );
                })}
              </div>
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
                    {isActive && (
                      <span className="cf-mono text-[10px] uppercase tracking-wider text-cyan-400 hidden sm:inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        In View
                      </span>
                    )}
                  </div>

                  <h3
                    className="cf-display mt-6 text-2xl sm:text-3xl font-semibold tracking-tight leading-snug"
                    style={{ color: "var(--cf-fg)" }}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-[15px] font-medium leading-relaxed text-cyan-400">
                    {step.sub}
                  </p>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: "var(--cf-muted)" }}>
                    {step.body}
                  </p>

                  {/* Deliverables / Output Pills */}
                  <div className="mt-8 pt-6 border-t" style={{ borderColor: "var(--cf-border)" }}>
                    <p className="cf-mono text-[10px] uppercase tracking-wider mb-3" style={{ color: "var(--cf-dim)" }}>
                      OUTPUT &amp; DELIVERABLES
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((deliv) => (
                        <span
                          key={deliv}
                          className="cf-mono text-xs px-3 py-1.5 rounded-xl border transition-colors"
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
