import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { InteractiveParticleHero } from "./InteractiveParticleHero";

const spring = { type: "spring", stiffness: 260, damping: 24 } as const;

export function HeroCraft() {
  return (
    <section className="relative isolate overflow-hidden px-5 pt-36 pb-24 sm:pt-44 sm:pb-32" style={{ background: "var(--cf-bg)" }}>
      {/* Interactive particle head sampled from hero-particle-head.webp; listens on this section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          maskImage: "radial-gradient(ellipse 70% 75% at 50% 50%, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 75% at 50% 50%, #000 30%, transparent 80%)",
        }}
      >
        <InteractiveParticleHero />
      </div>
      {/* Soft center scrim for legibility + top/bottom melt into canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(9,9,11,0.55) 0%, transparent 70%), linear-gradient(180deg, #09090b 0%, transparent 18%, transparent 78%, #09090b 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px]"
        style={{ background: "radial-gradient(60% 100% at 50% 0%, var(--cf-glow) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] opacity-40"
        style={{
          backgroundImage: "linear-gradient(var(--cf-border) 1px, transparent 1px), linear-gradient(90deg, var(--cf-border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(50% 80% at 50% 0%, #000, transparent)",
          WebkitMaskImage: "radial-gradient(50% 80% at 50% 0%, #000, transparent)",
        }}
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.08 }}
          className="cf-display text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
          style={{ fontWeight: 700, fontSize: "clamp(2.5rem, 6.5vw, 5rem)", letterSpacing: "-0.055em", lineHeight: 0.98, color: "var(--cf-fg)" }}
        >
          A design and engineering partner{" "}
          <span className="text-zinc-400 dark:text-zinc-300">for scale-ups and enterprise products.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.18 }}
          className="mt-7 max-w-2xl text-base leading-relaxed sm:text-lg text-zinc-300 dark:text-zinc-200 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]"
        >
          PT Digitas Solusi Indonesia acts as an elite extension of your in-house team: high-fidelity product design, high-converting web experiences, growth architecture and resilient digital systems, shipped at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.26 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={spring}
            className="inline-flex h-12 items-center gap-2 rounded-full px-7 text-[15px] font-semibold shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            style={{ background: "var(--cf-inv-bg)", color: "var(--cf-inv-fg)" }}
          >
            Explore capabilities <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#featured"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={spring}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-7 text-[15px] font-semibold text-white backdrop-blur-md hover:bg-zinc-800"
          >
            Featured Work <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
