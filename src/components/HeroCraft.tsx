import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const spring = { type: "spring", stiffness: 260, damping: 24 } as const;

export function HeroCraft() {
  return (
    <section className="relative isolate overflow-hidden px-5 pt-36 pb-24 sm:pt-44 sm:pb-32" style={{ background: "var(--cf-bg)" }}>
      {/* Particle head centered behind text: lighten blend drops true-black box; radial mask feathers every edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-40 sm:opacity-55 lg:opacity-65"
        style={{
          maskImage: "radial-gradient(ellipse 55% 60% at 50% 50%, #000 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 55% 60% at 50% 50%, #000 20%, transparent 75%)",
        }}
      >
        <img
          src="/images/hero-particle-head.webp"
          alt=""
          width={1200}
          height={673}
          decoding="async"
          fetchPriority="low"
          className="h-auto w-[170%] max-w-none object-contain mix-blend-lighten sm:w-[125%] lg:w-[900px]"
        />
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
          className="cf-display text-balance"
          style={{ fontWeight: 700, fontSize: "clamp(2.5rem, 7vw, 5.25rem)", letterSpacing: "-0.055em", lineHeight: 0.96, color: "var(--cf-fg)" }}
        >
          A design and engineering partner{" "}
          <span style={{ color: "var(--cf-dim)" }}>for scale-ups and enterprise products.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.18 }}
          className="mt-7 max-w-xl text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--cf-muted)" }}
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
            className="inline-flex h-12 items-center gap-2 rounded-full px-7 text-[15px] font-semibold"
            style={{ background: "var(--cf-inv-bg)", color: "var(--cf-inv-fg)" }}
          >
            Explore capabilities <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#featured"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={spring}
            className="inline-flex h-12 items-center gap-2 rounded-full border px-7 text-[15px] font-semibold"
            style={{ borderColor: "var(--cf-border)", background: "var(--cf-card)", color: "var(--cf-fg)" }}
          >
            Featured Work <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
