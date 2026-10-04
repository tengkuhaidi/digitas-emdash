import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, Globe2 } from "lucide-react";

export function HeroInteractive() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 md:pt-28 md:pb-32 bg-[#070b14]">
      {/* Amaterasu Atmospheric Aurora Teal & Cyan Key Light */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none opacity-80"
        style={{
          background: "radial-gradient(ellipse 65% 55% at 50% 25%, rgba(117, 205, 214, 0.15) 0%, rgba(27, 41, 120, 0.12) 50%, transparent 80%)"
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        {/* Architectural Monogram Badge (NeoSansPro-Medium 10px uppercase 0.32em tracking) */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[20px] border border-[#1b2978] bg-transparent text-[#7488a5] text-[10px] font-medium uppercase tracking-[0.32em] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#75cdd6]" />
          PT Digitas Solusi Indonesia &middot; Holding
        </motion.div>

        {/* Whisper-Weight Display Headline (TWKLausanne-200, weight 200, negative tracking -0.035em) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.035em] text-[#ffffff] mb-6 leading-[1.08]"
        >
          Architecting Enterprise <span className="font-normal text-white">LegalTech</span> &amp; Resilient Cloud Infrastructure
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

        {/* Outlined Primary Action (20px pill, 1px solid Cosmic Violet #1b2978, transparent background) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-16 max-w-xs sm:max-w-none mx-auto"
        >
          <a
            href="#ecosystem"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-[20px] border border-[#1b2978] hover:border-[#75cdd6] bg-transparent text-[#ffffff] hover:text-[#75cdd6] text-[11px] font-medium uppercase tracking-[0.16em] transition-all duration-300"
          >
            Explore Ecosystem <ArrowRight className="w-3.5 h-3.5 text-[#75cdd6]" />
          </a>
          <a
            href="/posts"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-[20px] border border-[#19366c] hover:border-[#1b2978] bg-transparent text-[#7488a5] hover:text-[#ffffff] text-[11px] font-medium uppercase tracking-[0.16em] transition-all duration-300"
          >
            Corporate Insights
          </a>
        </motion.div>

        {/* Key Metrics Strip (Hairline Cosmic Violet borders, zero elevation, spacious padding) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-[#1b2978]/40"
        >
          <div className="p-5 rounded-[20px] bg-[#0c1424]/70 border border-[#1b2978]/60 text-left">
            <div className="flex items-center gap-2 mb-2 text-[#579dc0]">
              <Globe2 className="w-4 h-4 text-[#75cdd6]" />
              <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-[#7488a5]">Global Uptime</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extralight tracking-tight text-[#ffffff] font-mono">99.99%</div>
            <p className="text-xs text-[#7488a5] mt-1 leading-relaxed">Cloudflare distributed edge network</p>
          </div>

          <div className="p-5 rounded-[20px] bg-[#0c1424]/70 border border-[#1b2978]/60 text-left">
            <div className="flex items-center gap-2 mb-2 text-[#579dc0]">
              <ShieldCheck className="w-4 h-4 text-[#75cdd6]" />
              <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-[#7488a5]">RegTech Engine</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extralight tracking-tight text-[#ffffff] font-mono">15+ Tools</div>
            <p className="text-xs text-[#7488a5] mt-1 leading-relaxed">Verified AHU &amp; OSS RBA logic</p>
          </div>

          <div className="p-5 rounded-[20px] bg-[#0c1424]/70 border border-[#1b2978]/60 text-left">
            <div className="flex items-center gap-2 mb-2 text-[#579dc0]">
              <Cpu className="w-4 h-4 text-[#75cdd6]" />
              <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-[#7488a5]">Storage &amp; SQL</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extralight tracking-tight text-[#ffffff] font-mono">Zero Egress</div>
            <p className="text-xs text-[#7488a5] mt-1 leading-relaxed">Serverless D1 SQL &amp; R2 Storage</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
