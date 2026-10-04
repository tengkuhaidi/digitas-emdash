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
      color: "from-pink-500/10 to-rose-500/5",
      accent: "text-pink-400",
      borderColor: "hover:border-pink-500/40",
      metrics: "500+ Corporate Filings &middot; 8x Daily Sync",
      tags: ["Next.js Edge", "Headless WP", "OSS RBA", "DJKI"],
    },
    {
      title: "Digitas Cloud Systems",
      category: "Enterprise Infrastructure",
      description: "Distributed edge infrastructure powering high-traffic corporate portals, serverless databases, zero-egress asset delivery, and multi-region disaster recovery.",
      url: "#",
      icon: Server,
      color: "from-sky-500/10 to-cyan-500/5",
      accent: "text-sky-400",
      borderColor: "hover:border-sky-500/40",
      metrics: "Global CDN &middot; Sub-50ms Edge Latency",
      tags: ["Cloudflare Pages", "D1 SQL", "R2 Storage", "KV Caching"],
    },
    {
      title: "Automated RegTech Engines",
      category: "Statutory Computation Suite",
      description: "A proprietary suite of 15 regulatory calculators and compliance checkers: PP 58/2023 PPh 21 TER, PP 43/2011 PT Naming Compliance, and RDTR spatial zoning.",
      url: "https://legalizin.com/tools",
      icon: Database,
      color: "from-indigo-500/10 to-blue-500/5",
      accent: "text-indigo-400",
      borderColor: "hover:border-indigo-500/40",
      metrics: "15 Business Tools &middot; Real-time Validation",
      tags: ["PPh 21 TER", "PPN 12%", "Spatial KBLI", "Biaya PT"],
    },
    {
      title: "Agentic Publishing & MCP",
      category: "Autonomous Intelligence Operations",
      description: "Next-generation Model Context Protocol (MCP) orchestrator integrating AI agents directly into corporate CMS pipelines for verified editorial delivery.",
      url: "/_emdash/admin",
      icon: Cpu,
      color: "from-emerald-500/10 to-teal-500/5",
      accent: "text-emerald-400",
      borderColor: "hover:border-emerald-500/40",
      metrics: "MCP Native &middot; Multi-Model Orchestration",
      tags: ["EmDash CMS", "Astro 5", "MCP Server", "Hermes Agent"],
    },
  ];

  return (
    <section id="ecosystem" className="py-16 md:py-24 border-t border-slate-800/80 bg-[#070B14] relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-sky-400 mb-2">
              Corporate Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              The Digitas Ecosystem
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md mt-4 md:mt-0">
            A cohesive cluster of digital enterprises driving corporate efficiency, institutional compliance, and cloud engineering across Indonesia.
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
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${card.color} bg-slate-900/60 border border-slate-800/90 ${card.borderColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 ${card.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {card.category}
                      </span>
                    </div>
                    {card.url !== "#" && (
                      <a
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition p-1"
                        aria-label={`Visit ${card.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4 pb-4 border-b border-slate-800/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: card.metrics }} />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/40 text-[11px] font-medium text-slate-300"
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
