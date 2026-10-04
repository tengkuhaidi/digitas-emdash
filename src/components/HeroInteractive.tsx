import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, Globe2 } from "lucide-react";

export function HeroInteractive() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        {/* Institutional Monogram Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-xs font-semibold tracking-wide uppercase mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          PT Digitas Solusi Indonesia &middot; Holding
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]"
        >
          Architecting Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-white">LegalTech</span> & Resilient Cloud Infrastructure
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
        >
          We engineer and operate mission-critical corporate platforms across Southeast Asia—fusing algorithmic regulatory compliance with serverless edge architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-sky-500/20"
          >
            Explore Ecosystem <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/posts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all"
          >
            Read Corporate Insights
          </a>
        </motion.div>

        {/* Key Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-slate-800/80"
        >
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-left">
            <div className="flex items-center gap-2 text-sky-400 mb-1">
              <Globe2 className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Availability</span>
            </div>
            <div className="text-2xl font-black text-white font-mono">99.99%</div>
            <p className="text-xs text-slate-400 mt-1">Cloudflare global edge distribution</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-left">
            <div className="flex items-center gap-2 text-indigo-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">RegTech Engine</span>
            </div>
            <div className="text-2xl font-black text-white font-mono">15+ Tools</div>
            <p className="text-xs text-slate-400 mt-1">Verified AHU, OSS RBA & Tax logic</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-left">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Architecture</span>
            </div>
            <div className="text-2xl font-black text-white font-mono">Zero Egress</div>
            <p className="text-xs text-slate-400 mt-1">D1 Serverless SQL & R2 Object Storage</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
