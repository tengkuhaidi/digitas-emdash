import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Router } from "@lucasmarkes/hairline/react";

const spring = { type: "spring", stiffness: 260, damping: 24 } as const;

export function HeroCraft() {
  return (
    <section className="relative isolate overflow-hidden px-5 pt-32 pb-16 sm:pt-40 sm:pb-24" style={{ background: "var(--cf-bg)" }}>
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

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-6">
        <div className="flex flex-col items-start text-left">
          <motion.a
            href="#legalizin"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
            className="group mb-8 inline-flex items-center gap-2 rounded-full border py-1 pr-3 pl-1 text-xs"
            style={{ borderColor: "var(--cf-border)", background: "var(--cf-card)", color: "var(--cf-muted)" }}
          >
            <span className="rounded-full px-2 py-0.5 text-[11px] font-semibold" style={{ background: "var(--cf-inv-bg)", color: "var(--cf-inv-fg)" }}>
              Venture
            </span>
            Incubator of Legalizin.com
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </motion.a>

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
            className="mt-9 flex flex-wrap items-center gap-3"
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
              href="https://legalizin.com"
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={spring}
              className="inline-flex h-12 items-center gap-2 rounded-full border px-7 text-[15px] font-semibold"
              style={{ borderColor: "var(--cf-border)", background: "var(--cf-card)", color: "var(--cf-fg)" }}
            >
              Visit Legalizin.com <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...spring, delay: 0.2 }}
          className="mx-auto w-full max-w-md lg:max-w-none"
          style={{ ["--hairline-plate" as string]: "#09090b" }}
        >
          <Router intensity={0.7} theme="dark" label="Interactive isometric router; antennas lean toward your pointer" />
        </motion.div>
      </div>
    </section>
  );
}
