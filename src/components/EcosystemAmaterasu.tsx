import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function EcosystemAmaterasu() {
  const entities = [
    {
      index: "01",
      domain: "LEGALIZIN.COM",
      tag: "FLAGSHIP REGTECH ENGINE",
      title: "Automated Enterprise Legality & Licensing Architecture",
      narrative: "Indonesia's premier automated corporate establishment pipeline. Eliminates bureaucratic friction by orchestrating AHU legal identity verification, OSS RBA risk-based licensing, and dynamic tax compliance into a unified sub-second edge workflow.",
      metrics: "15+ verified legal tools · 99.98% automation rate · Direct notary gateway",
      href: "https://legalizin.com",
      action: "LAUNCH LEGALIZIN"
    },
    {
      index: "02",
      domain: "DIGITAS CLOUD & INFRA",
      tag: "DISTRIBUTED EDGE SYSTEMS",
      title: "Zero-Egress Serverless Distribution & Sovereign Storage",
      narrative: "High-throughput cloud architecture engineered on Cloudflare Workers, globally distributed D1 transactional SQL, and zero-egress R2 object storage. Guarantees sub-30ms execution across Southeast Asia with zero operational egress overhead.",
      metrics: "300+ edge PoPs · 99.99% availability SLA · Edge-native KV cache",
      href: "/posts",
      action: "EXPLORE ARCHITECTURE"
    },
    {
      index: "03",
      domain: "DIGITAS RESEARCH LABS",
      tag: "APPLIED COGNITIVE SYSTEMS",
      title: "Autonomous Legal Agents & Semantic Knowledge Graphs",
      narrative: "Applied intelligence research laboratory developing deterministic AI agent runtimes for regulatory document synthesis, statutory change monitoring, and cross-border compliance verification.",
      metrics: "Sub-agent orchestration · Structured JSON-LD schema · Real-time indexing",
      href: "/posts",
      action: "READ RESEARCH"
    }
  ];

  return (
    <section id="ecosystem" className="relative py-28 px-6 sm:px-12 bg-[#070b14] border-t border-[#1b2978]/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#75cdd6]" />
            <span className="text-[10px] uppercase font-mono tracking-[0.32em] text-[#7488a5]">
              01 / ECOSYSTEM
            </span>
          </div>

          <h2 
            style={{
              fontFamily: 'var(--font-display, "Inter Tight", sans-serif)',
              fontWeight: 200,
              letterSpacing: '-0.035em',
              lineHeight: 1.05
            }}
            className="text-3xl sm:text-5xl md:text-6xl text-white font-extralight tracking-tight max-w-3xl"
          >
            Pioneering Enterprise LegalTech & Distributed Cloud Runtimes
          </h2>
        </div>

        {/* Editorial Architectural Rows (No AI Slop Cards) */}
        <div className="space-y-0">
          {entities.map((item, idx) => (
            <motion.div
              key={item.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group py-12 sm:py-16 border-t border-[#1b2978]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-[#0c1424]/30 transition-colors px-4 -mx-4"
            >
              {/* Left Column: Index & Domain */}
              <div className="lg:col-span-3 flex flex-col justify-between">
                <div className="flex items-baseline gap-4 mb-2">
                  <span 
                    style={{
                      fontFamily: 'var(--font-display, "Inter Tight", sans-serif)',
                      fontWeight: 200
                    }}
                    className="text-4xl sm:text-5xl text-[#75cdd6] font-extralight"
                  >
                    {item.index}
                  </span>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-[0.24em] text-white block">
                      {item.domain}
                    </span>
                    <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-[#579dc0] block mt-0.5">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Center Column: Title, Narrative & Specs */}
              <div className="lg:col-span-6 pr-0 lg:pr-8">
                <h3 className="text-xl sm:text-2xl text-white font-light tracking-[-0.02em] mb-4 group-hover:text-[#75cdd6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#7488a5] leading-relaxed font-normal mb-5">
                  {item.narrative}
                </p>
                <div className="text-[11px] font-mono text-[#579dc0] tracking-wide">
                  {item.metrics}
                </div>
              </div>

              {/* Right Column: Outlined Action Pill */}
              <div className="lg:col-span-3 flex lg:justify-end items-center pt-2 lg:pt-0">
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[20px] border border-[#1b2978] hover:border-[#75cdd6] bg-transparent text-white hover:text-[#75cdd6] text-[10px] uppercase font-mono tracking-[0.2em] transition-all duration-300"
                >
                  <span>{item.action}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#75cdd6] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#1b2978]/40" />
        </div>
      </div>
    </section>
  );
}
