import React from "react";
import { motion } from "framer-motion";
import { Scale, Server, Cpu, Database, ExternalLink, CheckCircle2 } from "lucide-react";

export function EcosystemGrid() {
  const cards = [
    {
      title: "Legalizin.com",
      category: "Primary LegalTech Subsidiary",
      description: "Autonomous corporate legality platform for Indonesian enterprises. Manages PT/CV establishment, OSS RBA risk migration, DJKI trademark filing, and Ditjen AHU reporting.",
      url: "https://legalizin.com",
      icon: Scale,
      metrics: "500+ Corporate Filings &middot; 8x Daily Sync",
      tags: ["Next.js Edge", "Headless WP", "OSS RBA", "DJKI"],
    },
    {
      title: "Digitas Cloud Systems",
      category: "Enterprise Infrastructure",
      description: "Distributed edge infrastructure powering high-traffic corporate portals, serverless databases, zero-egress asset delivery, and multi-region disaster recovery.",
      url: "#",
      icon: Server,
      metrics: "Global CDN &middot; Sub-50ms Edge Latency",
      tags: ["Cloudflare Pages", "D1 SQL", "R2 Storage", "KV Caching"],
    },
    {
      title: "Automated RegTech Engines",
      category: "Statutory Computation Suite",
      description: "A proprietary suite of 15 regulatory calculators and compliance checkers: PP 58/2023 PPh 21 TER, PP 43/2011 PT Naming Compliance, and RDTR spatial zoning.",
      url: "https://legalizin.com/tools",
      icon: Database,
      metrics: "15 Business Tools &middot; Real-time Validation",
      tags: ["PPh 21 TER", "PPN 12%", "Spatial KBLI", "Biaya PT"],
    },
    {
      title: "Agentic Publishing & MCP",
      category: "Autonomous Intelligence Operations",
      description: "Next-generation Model Context Protocol (MCP) orchestrator integrating AI agents directly into corporate CMS pipelines for verified editorial delivery.",
      url: "/_emdash/admin",
      icon: Cpu,
      metrics: "MCP Native &middot; Multi-Model Orchestration",
      tags: ["EmDash CMS", "Astro 5", "MCP Server", "Hermes Agent"],
    },
  ];

  return (
    <section id="ecosystem" className="py-20 md:py-28 border-t border-[#1b2978]/40 bg-[#070b14] relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="text-[10px] uppercase font-medium tracking-[0.32em] text-[#75cdd6] mb-3">
              Corporate Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white tracking-[-0.03em] leading-tight">
              The Digitas Ecosystem
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#7488a5] max-w-md mt-4 md:mt-0 leading-[1.4] font-normal">
            A cohesive cluster of institutional digital platforms driving corporate legality, algorithmic compliance, and cloud engineering across Southeast Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-6 sm:p-8 rounded-[20px] bg-[#0c1424]/60 border border-[#1b2978]/60 hover:border-[#75cdd6]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-[12px] bg-[#070b14] border border-[#1b2978]/60 text-[#75cdd6]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-medium text-[#7488a5] uppercase tracking-[0.24em]">
                        {card.category}
                      </span>
                    </div>
                    {card.url !== "#" && (
                      <a
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#7488a5] hover:text-[#75cdd6] transition p-1"
                        aria-label={`Visit ${card.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-normal text-white mb-3 group-hover:text-[#75cdd6] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#7488a5] leading-[1.4] mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#579dc0] mb-5 pb-4 border-b border-[#1b2978]/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#75cdd6] shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: card.metrics }} />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-[20px] bg-[#070b14]/60 border border-[#1b2978]/40 text-[10px] font-medium uppercase tracking-[0.16em] text-[#7488a5]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
