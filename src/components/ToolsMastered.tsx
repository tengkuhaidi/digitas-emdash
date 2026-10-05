import React from "react";

interface ToolItem {
  name: string;
  category: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

const TOOLS: ToolItem[] = [
  {
    name: "Hermes Agent",
    category: "Autonomous AI Engine",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    name: "Claude Code",
    category: "LLM Systems",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4 21l3.52-.95C8.97 20.61 10.44 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-1.38 0-2.65-.41-3.71-1.12l-.26-.18-2.09.56.56-2.03-.18-.28C5.52 13.9 5.1 12.98 5.1 12c0-3.81 3.09-6.9 6.9-6.9s6.9 3.09 6.9 6.9-3.09 6.9-6.9 6.9z" />
      </svg>
    ),
  },
  {
    name: "OpenAI Codex",
    category: "Agent Automation",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    name: "Cloudflare Workers",
    category: "Edge Compute",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    name: "Next.js 15",
    category: "Fullstack Architecture",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm4.5 17.5l-6-8.5v8.5H9V6.5h1.5l6 8.5V6.5H18v11h-1.5z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Strict Typing",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="4" />
        <path d="M7 10h6M10 10v7M16 11c-.5-.6-1.2-1-2-1-1.1 0-2 .9-2 2 0 2 3 1.5 3 3.5 0 1.1-.9 2-2 2-.9 0-1.7-.5-2-1.2" />
      </svg>
    ),
  },
  {
    name: "Python 3.13",
    category: "Data & ML Pipelines",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2H8a4 4 0 0 0-4 4v3a3 3 0 0 0 3 3h5v-2a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2V6a4 4 0 0 0-4-4h-2zm-2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        <path d="M12 22h4a4 4 0 0 0 4-4v-3a3 3 0 0 0-3-3h-5v2a2 2 0 0 1-2 2H6a2 2 0 0 0-2 2v2a4 4 0 0 0 4 4h2zm2-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL & D1",
    category: "Edge & Relational DB",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Design Systems",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 12c.5-2.5 2-4 4.5-4.5 3-.6 4.5 1.5 6 3 1.5 1.5 3 2.5 5 2.5-1.5 2.5-3.5 3.5-6 3.5-3 0-4.5-2-6-3.5C8 11.5 7 11 6 12Z" />
      </svg>
    ),
  },
  {
    name: "Docker & K8s",
    category: "Container Runtimes",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8" width="20" height="8" rx="2" />
        <path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01" />
      </svg>
    ),
  },
  {
    name: "Figma & Design Tokens",
    category: "Interface Engineering",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
      </svg>
    ),
  },
  {
    name: "Redis & Vector DB",
    category: "In-Memory & Semantics",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4z" />
        <path d="M6 6h12a2 2 0 0 1 2 2v2H4V8a2 2 0 0 1 2-2z" />
        <circle cx="8" cy="16" r="1" />
        <circle cx="16" cy="16" r="1" />
      </svg>
    ),
  },
];

export function ToolsMastered() {
  return (
    <section id="tools" className="relative py-20 sm:py-28 overflow-hidden" style={{ background: "var(--cf-bg)" }}>
      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center">
        {/* Kargul-style Centered Eyebrow & Title */}
        <p className="cf-mono text-xs uppercase tracking-[0.24em] text-cyan-400 mb-3 text-center">
          STACK &amp; INFRASTRUCTURE
        </p>
        <h2
          className="cf-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-center max-w-md mb-10 sm:mb-12"
          style={{ color: "var(--cf-fg)" }}
        >
          Tools we’ve mastered
        </h2>

        {/* Kargul Pill Capsule Infinite Marquee Container */}
        <div
          className="w-full relative overflow-hidden rounded-full border py-5 sm:py-6 backdrop-blur-md shadow-2xl transition-all duration-300"
          style={{
            background: "var(--cf-card)",
            borderColor: "var(--cf-border)",
          }}
        >
          {/* Subtle Left & Right Fade Gradients */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10"
            style={{
              background: "linear-gradient(to right, var(--cf-card), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10"
            style={{
              background: "linear-gradient(to left, var(--cf-card), transparent)",
            }}
          />

          {/* Marquee Track (Double Duplicated for Seamless Infinite Loop) */}
          <div className="flex w-max animate-tools-scroll hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing items-center">
            {[...TOOLS, ...TOOLS].map((tool, idx) => (
              <div
                key={`${tool.name}-${idx}`}
                className="flex items-center gap-3.5 px-6 sm:px-8 shrink-0 group select-none"
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/50 shadow-sm"
                  style={{
                    background: "var(--cf-raised)",
                    borderColor: "var(--cf-border)",
                    color: "var(--cf-fg)",
                  }}
                >
                  <tool.icon className="w-5 h-5 transition-colors group-hover:text-cyan-400" />
                </div>
                <div className="flex flex-col text-left">
                  <span
                    className="text-sm sm:text-[15px] font-semibold tracking-tight transition-colors group-hover:text-white"
                    style={{ color: "var(--cf-fg)" }}
                  >
                    {tool.name}
                  </span>
                  <span
                    className="text-[10px] sm:text-[11px] cf-mono uppercase tracking-wider"
                    style={{ color: "var(--cf-muted)" }}
                  >
                    {tool.category}
                  </span>
                </div>

                {/* Subtle Divider dot */}
                <span className="ml-5 sm:ml-6 w-1 h-1 rounded-full bg-zinc-700/50" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes tools-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-tools-scroll {
          animation: tools-scroll 38s linear infinite;
        }
      `}</style>
    </section>
  );
}
