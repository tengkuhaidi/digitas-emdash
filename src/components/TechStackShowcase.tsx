import React from "react";
import { motion } from "framer-motion";
import { Layers, Terminal, Sparkles, Network } from "lucide-react";

export function TechStackShowcase() {
  const pillars = [
    {
      title: "Edge Compute & SSR",
      tech: "Astro 5 & Cloudflare",
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
    <section className="py-20 md:py-24 border-t border-[#1b2978]/40 bg-[#070b14]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-medium tracking-[0.32em] text-[#75cdd6] block mb-3">
            Engineering Foundations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-white tracking-[-0.03em]">
            Built on Modern Serverless Infrastructure
          </h2>
          <p className="text-sm text-[#7488a5] mt-3 leading-[1.4] font-normal">
            Designed from first principles to eliminate cold starts, minimize latency, and provide uncompromised institutional security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-[20px] bg-[#0c1424]/60 border border-[#1b2978]/60 hover:border-[#75cdd6]/60 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-[12px] bg-[#070b14] border border-[#1b2978]/60 text-[#75cdd6] flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-[10px] font-mono font-medium text-[#579dc0] uppercase tracking-[0.16em] mb-1.5">
                  {pillar.tech}
                </div>
                <h3 className="text-sm font-medium text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#7488a5] leading-[1.4] font-normal">
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
