import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, ShieldCheck } from "lucide-react";

const spring = { type: "spring", stiffness: 300, damping: 26 } as const;

function Stage({ n, title, blurb, children }: { n: string; title: string; blurb: string; children: ReactNode }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={spring}
      className="overflow-hidden rounded-3xl border"
      style={{ borderColor: "var(--cf-border)", background: "var(--cf-card)" }}
    >
      <div className="flex flex-col gap-1 p-6 pb-4 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="cf-display text-xl font-semibold tracking-tight" style={{ color: "var(--cf-fg)" }}>
          <span className="cf-mono mr-3 text-xs font-normal" style={{ color: "var(--cf-dim)" }}>{n}</span>
          {title}
        </h3>
        <p className="text-sm" style={{ color: "var(--cf-muted)" }}>{blurb}</p>
      </div>
      <div
        className="m-2 mt-0 rounded-[20px] border p-5 sm:p-8"
        style={{
          borderColor: "var(--cf-border)",
          background: "radial-gradient(80% 60% at 50% 0%, var(--cf-glow), transparent 70%), var(--cf-bg)",
        }}
      >
        {children}
      </div>
    </motion.article>
  );
}

/* ---------- Stage 1: Legalizin RegTech ---------- */
const ENTITIES = {
  PT: { label: "PT", full: "Perseroan Terbatas", steps: ["Akta pendirian notaris", "SK Kemenkum AHU", "NIB via OSS", "NPWP badan", "Rekening bank korporasi"] },
  CV: { label: "CV", full: "Commanditaire Vennootschap", steps: ["Akta pendirian CV", "Pendaftaran Kemenkum", "NIB via OSS", "NPWP badan"] },
  PMA: { label: "PT PMA", full: "Penanaman Modal Asing", steps: ["Akta PT PMA", "SK Kemenkum AHU", "Izin BKPM / OSS", "NIB + izin usaha", "NPWP badan", "Laporan LKPM"] },
  YYS: { label: "Yayasan", full: "Yayasan", steps: ["Akta yayasan", "SK Kemenkum", "NPWP yayasan", "Rekening bank"] },
} as const;
type EntityKey = keyof typeof ENTITIES;

function LegalizinStage() {
  const [key, setKey] = useState<EntityKey>("PT");
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const entity = ENTITIES[key];
  const count = entity.steps.filter((s) => done[`${key}:${s}`]).length;
  const all = count === entity.steps.length;

  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => { setVerified(false); setVerifying(false); clearTimeout(timer.current); }, [key]);

  const verify = () => {
    setVerifying(true);
    timer.current = setTimeout(() => { setVerifying(false); setVerified(true); }, 1100);
  };

  return (
    <div className="grid gap-6 md:grid-cols-[220px_1fr]">
      <div>
        <p className="cf-mono mb-3 text-[11px] uppercase tracking-widest" style={{ color: "var(--cf-dim)" }}>Entity type</p>
        <div className="flex flex-wrap gap-2 md:flex-col md:flex-nowrap" role="tablist" aria-label="Entity type">
          {(Object.keys(ENTITIES) as EntityKey[]).map((k) => {
            const on = k === key;
            return (
              <button
                key={k}
                role="tab"
                aria-selected={on}
                onClick={() => setKey(k)}
                className="relative rounded-full border px-4 py-2 text-left text-sm font-medium transition-colors"
                style={{ borderColor: on ? "transparent" : "var(--cf-border)", color: on ? "var(--cf-inv-fg)" : "var(--cf-muted)" }}
              >
                {on && <motion.span layoutId="ent-pill" transition={spring} className="absolute inset-0 rounded-full" style={{ background: "var(--cf-inv-bg)" }} />}
                <span className="relative">{ENTITIES[k].label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-medium" style={{ color: "var(--cf-fg)" }}>{entity.full}</p>
          <span className="cf-mono text-xs" style={{ color: "var(--cf-dim)" }}>{count}/{entity.steps.length}</span>
        </div>
        <div className="mb-5 h-1.5 overflow-hidden rounded-full" style={{ background: "var(--cf-raised)" }}>
          <motion.div className="h-full rounded-full" style={{ background: "var(--cf-accent)" }} animate={{ width: `${(count / entity.steps.length) * 100}%` }} transition={spring} />
        </div>
        <ul className="space-y-2">
          {entity.steps.map((s) => {
            const id = `${key}:${s}`;
            const on = !!done[id];
            return (
              <li key={id}>
                <button
                  role="checkbox"
                  aria-checked={on}
                  onClick={() => { setDone((d) => ({ ...d, [id]: !d[id] })); setVerified(false); }}
                  className="flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition-colors"
                  style={{ borderColor: on ? "var(--cf-accent)" : "var(--cf-border)", background: "var(--cf-card)", color: on ? "var(--cf-fg)" : "var(--cf-muted)" }}
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border" style={{ borderColor: on ? "var(--cf-accent)" : "var(--cf-border)", background: on ? "var(--cf-accent)" : "transparent" }}>
                    <AnimatePresence>{on && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={spring}><Check size={12} color="#09090b" strokeWidth={3} /></motion.span>}</AnimatePresence>
                  </span>
                  {s}
                </button>
              </li>
            );
          })}
        </ul>
        <motion.button
          whileTap={{ scale: 0.96 }}
          disabled={!all || verifying}
          onClick={verify}
          className="mt-5 inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
          style={{ background: verified ? "var(--cf-accent)" : "var(--cf-inv-bg)", color: verified ? "#09090b" : "var(--cf-inv-fg)" }}
        >
          {verifying ? <Loader2 size={16} className="animate-spin" /> : <ShieldCheck size={16} />}
          {verified ? "Verified · ready to file" : verifying ? "Verifying…" : all ? "Run verification" : "Complete checklist to verify"}
        </motion.button>
      </div>
    </div>
  );
}

export function InteractiveShowcase() {
  return (
    <section id="legalizin" className="px-5 py-20 sm:py-28" style={{ background: "var(--cf-bg)" }}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="cf-mono mb-4 text-xs uppercase tracking-widest" style={{ color: "var(--cf-accent)" }}>Flagship venture</p>
          <h2 className="cf-display text-balance" style={{ fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.045em", lineHeight: 1, color: "var(--cf-fg)" }}>
            Indonesia&apos;s premier automated RegTech engine.
          </h2>
        </div>
        <Stage n="Venture" title="Legalizin.com" blurb="Incubated and powered by Digitas. Pick an entity, tick the checklist, verify.">
            <LegalizinStage />
          </Stage>
      </div>
    </section>
  );
}
