import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, Globe2 } from "lucide-react";

export function HeroInteractive() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28 bg-[#070B14]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[250px] sm:h-[350px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        {/* Institutional Monogram Badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-[11px] sm:text-xs font-semibold tracking-wide uppercase mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          PT Digitas Solusi Indonesia &middot; Holding
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-[1.2] sm:leading-[1.15]"
        >
          Architecting Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-sky-200">LegalTech</span> &amp; Resilient Cloud Infrastructure
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal"
        >
          We engineer and operate mission-critical corporate platforms across Southeast Asia—fusing algorithmic regulatory compliance with serverless edge architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 max-w-xs sm:max-w-none mx-auto"
        >
          <a
            href="#ecosystem"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-sky-500/20 active:scale-[0.98]"
          >
            Explore Ecosystem <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/posts"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all active:scale-[0.98]"
          >
            Read Corporate Insights
          </a>
        </motion.div>

        {/* Key Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-6 border-t border-slate-800/80"
        >
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 text-left backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sky-400 mb-1">
              <Globe2 className="w-4 h-4" />
              <span className="text-[11px] uppercase font-semibold text-slate-400">Global Uptime</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono">99.99%</div>
            <p className="text-xs text-slate-400 mt-1">Cloudflare edge distribution</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 text-left backdrop-blur-sm">
            <div className="flex items-center gap-2 text-indigo-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[11px] uppercase font-semibold text-slate-400">RegTech Engine</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono">15+ Tools</div>
            <p className="text-xs text-slate-400 mt-1">Verified AHU &amp; OSS RBA logic</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 text-left backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-[11px] uppercase font-semibold text-slate-400">Storage &amp; SQL</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono">Zero Egress</div>
            <p className="text-xs text-slate-400 mt-1">D1 SQLite &amp; R2 Storage</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
