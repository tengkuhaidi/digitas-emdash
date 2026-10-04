import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroAmaterasu() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between px-6 sm:px-12 pt-28 pb-10 bg-[#070b14] overflow-hidden select-none">
      {/* Volumetric Atmospheric Teal Key Lighting Wash */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 65% 55% at 50% 38%, rgba(117, 205, 214, 0.16) 0%, rgba(27, 41, 120, 0.14) 45%, transparent 75%)"
        }}
      />

      {/* Sacred Geometry / Precision Wireframe Circles Motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <svg 
          viewBox="0 0 800 800" 
          className="w-[500px] h-[500px] sm:w-[750px] sm:h-[750px] text-[#75cdd6] stroke-current fill-none stroke-[0.75]"
        >
          <circle cx="400" cy="400" r="320" />
          <circle cx="400" cy="400" r="220" />
          <circle cx="400" cy="400" r="120" />
          <circle cx="400" cy="240" r="160" />
          <circle cx="400" cy="560" r="160" />
          <circle cx="240" cy="400" r="160" />
          <circle cx="560" cy="400" r="160" />
          <line x1="400" y1="60" x2="400" y2="740" strokeDasharray="4 6" opacity="0.4" />
          <line x1="60" y1="400" x2="740" y2="400" strokeDasharray="4 6" opacity="0.4" />
        </svg>
      </div>

      {/* Top HUD Ambient Indicator */}
      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#75cdd6]" />
          <span className="text-[10px] uppercase font-mono tracking-[0.32em] text-[#7488a5]">
            PT DIGITAS SOLUSI INDONESIA · HOLDING
          </span>
        </motion.div>
      </div>

      {/* Center Cinematic Display Stage */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-auto py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-display, "Inter Tight", sans-serif)',
            fontWeight: 200,
            letterSpacing: '-0.04em',
            lineHeight: 1.02
          }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-extralight tracking-tight"
        >
          Architecting Enterprise <br className="hidden sm:inline" />
          <span className="text-white/95">LegalTech & Resilient</span> <br className="hidden sm:inline" />
          <span className="text-white/90">Cloud Infrastructure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-xs sm:text-sm md:text-base text-[#7488a5] max-w-xl mx-auto font-normal leading-relaxed tracking-wide"
        >
          Transforming Southeast Asian corporate compliance through distributed edge intelligence, autonomous legal runtimes, and zero-egress cloud architectures.
        </motion.p>

        {/* Minimalist Outlined Pill Action */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#ecosystem"
            className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-[20px] border border-[#1b2978] hover:border-[#75cdd6] bg-transparent text-white hover:text-[#75cdd6] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300"
          >
            <span>ENTER ECOSYSTEM</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#75cdd6] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Perimeter Pinned Bottom HUD Bar */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 pt-6 border-t border-[#1b2978]/30">
        {/* Bottom Left: Scroll Cue */}
        <a 
          href="#ecosystem"
          className="group inline-flex items-center gap-2 text-[10px] uppercase font-mono tracking-[0.32em] text-[#7488a5] hover:text-[#75cdd6] transition-colors"
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#75cdd6] transition-transform duration-300 group-hover:translate-y-1" />
          <span>SCROLL TO EXPLORE</span>
        </a>

        {/* Bottom Right: Microcopy Narrative Brief */}
        <div className="text-center sm:text-right max-w-xs">
          <p className="text-[11px] text-[#7488a5] leading-relaxed font-normal">
            PT Digitas Solusi Indonesia is an enterprise holding laboratory engineering regulatory compliance and sovereign cloud systems.
          </p>
        </div>
      </div>
    </section>
  );
}
