import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroInteractive() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] sm:min-h-[92vh] flex flex-col justify-between pt-12 pb-8 sm:pt-20 sm:pb-10 bg-[#070b14]">
      {/* Amaterasu Atmospheric Aurora Teal & Cyan Key Light */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[550px] pointer-events-none opacity-85"
        style={{
          background: "radial-gradient(ellipse 65% 55% at 50% 25%, rgba(117, 205, 214, 0.16) 0%, rgba(35, 51, 142, 0.14) 50%, transparent 80%)"
        }}
      />

      {/* Hero Content (Centered) */}
      <div className="relative max-w-4xl mx-auto px-4 text-center my-auto">
        {/* Architectural Monogram Badge (NeoSansPro-Medium 10px uppercase 0.32em tracking) */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[20px] border border-[#23338e] bg-transparent text-[#7488a5] text-[10px] font-medium uppercase tracking-[0.32em] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#75cdd6]" />
          PT Digitas Solusi Indonesia &middot; Holding
        </motion.div>

        {/* Whisper-Weight Display Headline (TWKLausanne-200, weight 200, negative tracking -0.04em) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          style={{
            fontFamily: 'var(--font-display, "Inter Tight", sans-serif)',
            fontWeight: 200,
            letterSpacing: "-0.04em",
            lineHeight: 1.05
          }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#ffffff] mb-6"
        >
          Architecting Enterprise <span style={{ fontWeight: 300 }}>LegalTech</span> &amp; Resilient Cloud Infrastructure
        </motion.h1>

        {/* Paragraph (TWKLausanne-250 body, 1.4 line-height, Silver Slate) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-base md:text-lg text-[#7488a5] max-w-2xl mx-auto mb-10 leading-[1.4] font-normal"
        >
          We engineer and operate mission-critical corporate platforms across Southeast Asia—fusing algorithmic regulatory compliance with serverless edge architecture.
        </motion.p>

        {/* Outlined Primary Action (20px pill, 1px solid Cosmic Violet #23338e, transparent background) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-xs sm:max-w-none mx-auto"
        >
          <a
            href="#ecosystem"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[20px] border border-[#23338e] hover:border-[#75cdd6] bg-transparent text-[#ffffff] hover:text-[#75cdd6] text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300"
          >
            Explore Ecosystem <ArrowRight className="w-3.5 h-3.5 text-[#75cdd6]" />
          </a>
          <a
            href="/posts"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[20px] border border-[#19366c] hover:border-[#23338e] bg-transparent text-[#7488a5] hover:text-[#ffffff] text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300"
          >
            Corporate Insights
          </a>
        </motion.div>
      </div>

      {/* Bottom Bar: Scroll Cue (DESIGN.md: Text 'SCROLL TO EXPLORE' at 10px uppercase 0.32em tracking) */}
      <div className="relative max-w-5xl w-full mx-auto px-6 flex items-center justify-between pt-6 border-t border-[#1b2978]/30">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.32em] text-[#7488a5]"
        >
          <ChevronDown className="w-3.5 h-3.5 text-[#75cdd6] animate-bounce" />
          <span>Scroll to Explore</span>
        </motion.div>

        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#579dc0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#75cdd6]" />
          <span>99.99% Edge Availability</span>
        </div>
      </div>
    </section>
  );
}
