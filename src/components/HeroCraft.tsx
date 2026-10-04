import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const spring = { type: "spring", stiffness: 260, damping: 24 } as const;

export function HeroCraft() {
  return (
    <section className="relative isolate overflow-hidden px-5 pt-36 pb-20 sm:pt-44 sm:pb-28" style={{ background: "var(--cf-bg)" }}>
      {/* top radial illumination */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px]"
        style={{ background: "radial-gradient(60% 100% at 50% 0%, var(--cf-glow) 0%, transparent 70%)" }}
      />
      {/* faint grid, masked to the glow */}
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

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.a
          href="/posts"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring}
          className="group mb-8 inline-flex items-center gap-2 rounded-full border py-1 pr-3 pl-1 text-xs"
          style={{ borderColor: "var(--cf-border)", background: "var(--cf-card)", color: "var(--cf-muted)" }}
        >
          <span className="rounded-full px-2 py-0.5 text-[11px] font-semibold" style={{ background: "var(--cf-inv-bg)", color: "var(--cf-inv-fg)" }}>
            New
          </span>
          Zero-egress edge infrastructure
          <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.08 }}
          className="cf-display text-balance"
          style={{
            fontWeight: 700,
            fontSize: "clamp(2.75rem, 9vw, 6.5rem)",
            letterSpacing: "-0.055em",
            lineHeight: 0.94,
            color: "var(--cf-fg)",
          }}
        >
          Legal infrastructure,
          <br />
          <span style={{ color: "var(--cf-dim)" }}>built at the edge.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.18 }}
          className="mt-7 max-w-xl text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--cf-muted)" }}
        >
          PT Digitas Solusi Indonesia ships enterprise RegTech and resilient cloud platforms for Southeast Asia. Compliance-grade, globally fast, no egress bill.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.26 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="#showcase"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={spring}
            className="inline-flex h-12 items-center gap-2 rounded-full px-7 text-[15px] font-semibold"
            style={{ background: "var(--cf-inv-bg)", color: "var(--cf-inv-fg)" }}
          >
            Try the live stages <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href="/posts"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={spring}
            className="inline-flex h-12 items-center gap-2 rounded-full border px-7 text-[15px] font-semibold"
            style={{ borderColor: "var(--cf-border)", background: "var(--cf-card)", color: "var(--cf-fg)" }}
          >
            Read publications <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
