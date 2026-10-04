import React from "react";
import { motion } from "framer-motion";
import { Layers, Terminal, Sparkles, Network } from "lucide-react";

export function TechStackShowcase() {
  const pillars = [
    {
      title: "Edge Compute & SSR",
      tech: "Astro 5 & Cloudflare Pages",
      icon: Terminal,
      description: "Server-side rendering at the global edge. Microsecond response times with zero client-side JavaScript execution on static content.",
    },
    {
      title: "Serverless Relational SQL",
      tech: "Cloudflare D1 (SQLite)",
      icon: Network,
      description: "Distributed transactional database distributed globally with automated time-travel recovery and read-replication.",
    },
    {
      title: "Zero-Egress Object Storage",
      tech: "Cloudflare R2",
      icon: Layers,
      description: "High-throughput asset storage with S3-compatible APIs and zero egress bandwidth surcharges for media and document hosting.",
    },
    {
      title: "Agentic MCP Pipeline",
      tech: "Model Context Protocol",
      icon: Sparkles,
      description: "Native protocol hooks enabling authorized autonomous AI agents to research, draft, audit, and publish content programmatically.",
    },
  ];

  return (
    <section className="py-16 md:py-20 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-indigo-400 block mb-2">
            Engineering Foundations
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Built on Modern Serverless Infrastructure
          </h2>
          <p className="text-sm text-slate-400 mt-3">
            Designed from first principles to eliminate cold starts, minimize latency, and provide uncompromised institutional security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono font-bold text-sky-400 mb-1">
                  {pillar.tech}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
