import React from "react";

interface ToolItem {
  name: string;
  category: string;
  icon: string;
  isImg?: boolean;
}

const TOOLS: ToolItem[] = [
  {
    name: "Hermes Agent",
    category: "Autonomous AI Engine",
    icon: "/icons/tools/hermes.png",
    isImg: true,
  },
  {
    name: "Claude Code",
    category: "Anthropic LLM",
    icon: "/icons/tools/claude.svg",
  },
  {
    name: "OpenAI Codex",
    category: "Agent Automation",
    icon: "/icons/tools/openai.svg",
  },
  {
    name: "Cloudflare Workers",
    category: "Edge Compute",
    icon: "/icons/tools/cloudflare.svg",
  },
  {
    name: "Next.js 15",
    category: "Fullstack Architecture",
    icon: "/icons/tools/nextjs.svg",
  },
  {
    name: "TypeScript",
    category: "Strict Typing",
    icon: "/icons/tools/typescript.svg",
  },
  {
    name: "Python 3.13",
    category: "Data & ML Pipelines",
    icon: "/icons/tools/python.svg",
  },
  {
    name: "PostgreSQL",
    category: "Relational Architecture",
    icon: "/icons/tools/postgresql.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Design Systems",
    icon: "/icons/tools/tailwind.svg",
  },
  {
    name: "Docker & K8s",
    category: "Container Runtimes",
    icon: "/icons/tools/docker.svg",
  },
  {
    name: "Figma",
    category: "Interface Engineering",
    icon: "/icons/tools/figma.svg",
  },
  {
    name: "Redis",
    category: "In-Memory & Semantics",
    icon: "/icons/tools/redis.svg",
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
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/50 shadow-sm p-2"
                  style={{
                    background: "var(--cf-raised)",
                    borderColor: "var(--cf-border)",
                  }}
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className={`max-w-full max-h-full object-contain filter transition-all duration-300 ${
                      tool.isImg ? "rounded-sm" : "brightness-90 invert group-hover:brightness-100"
                    }`}
                    loading="lazy"
                  />
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
