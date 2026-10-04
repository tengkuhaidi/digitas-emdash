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

/* ---------- Stage 2: Edge latency ---------- */
const POPS = [
  { city: "Jakarta", base: 6 },
  { city: "Singapore", base: 14 },
  { city: "Kuala Lumpur", base: 22 },
  { city: "Sydney", base: 78 },
  { city: "Frankfurt", base: 168 },
];
const origin = 240; // single-region origin, for contrast
const tone = (ms: number) => (ms < 30 ? "var(--cf-accent)" : ms < 100 ? "#facc15" : "#f87171");

function LatencyStage() {
  const [ms, setMs] = useState(() => POPS.map((p) => p.base));
  const [running, setRunning] = useState(true);
  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setMs(POPS.map((p) => Math.max(2, Math.round(p.base + (Math.random() - 0.5) * p.base * 0.4)))), 900);
    return () => clearInterval(t);
  }, [running]);

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <p className="flex items-center gap-2 text-sm" style={{ color: "var(--cf-muted)" }}>
          <span className="relative flex h-2 w-2">
            {running && <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: "var(--cf-accent)" }} />}
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: running ? "var(--cf-accent)" : "var(--cf-dim)" }} />
          </span>
          Simulated ping from visitor to nearest edge PoP
        </p>
        <button onClick={() => setRunning((r) => !r)} className="rounded-full border px-4 py-1.5 text-xs font-semibold transition-transform active:scale-95" style={{ borderColor: "var(--cf-border)", color: "var(--cf-fg)", background: "var(--cf-card)" }}>
          {running ? "Pause" : "Resume"}
        </button>
      </div>
      <ul className="space-y-3">
        {POPS.map((p, i) => (
          <li key={p.city} className="grid grid-cols-[96px_1fr_56px] items-center gap-3 text-sm sm:grid-cols-[120px_1fr_64px]">
            <span style={{ color: "var(--cf-muted)" }}>{p.city}</span>
            <div className="h-2.5 overflow-hidden rounded-full" style={{ background: "var(--cf-raised)" }}>
              <motion.div className="h-full rounded-full" style={{ background: tone(ms[i]) }} animate={{ width: `${Math.min(100, (ms[i] / origin) * 100)}%` }} transition={spring} />
            </div>
            <span className="cf-mono text-right tabular-nums" style={{ color: tone(ms[i]) }}>{ms[i]}ms</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs" style={{ color: "var(--cf-dim)" }}>
        Bars scale against a {origin}ms single-region origin. Values are modelled, not measured.
      </p>
    </div>
  );
}

/* ---------- Stage 3: Zero-egress calculator ---------- */
const EGRESS_RATE = 0.09; // USD/GB, typical hyperscaler first-tier internet egress
const idr = (usd: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(usd * 16000);
const usd = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

function EgressStage() {
  const [tb, setTb] = useState(25);
  const cost = tb * 1000 * EGRESS_RATE;
  return (
    <div className="grid items-center gap-8 md:grid-cols-2">
      <div>
        <div className="mb-3 flex items-baseline justify-between">
          <label htmlFor="egress" className="text-sm font-medium" style={{ color: "var(--cf-fg)" }}>Monthly data served</label>
          <span className="cf-mono text-sm tabular-nums" style={{ color: "var(--cf-accent)" }}>{tb} TB</span>
        </div>
        <input
          id="egress"
          type="range"
          min={1}
          max={200}
          value={tb}
          onChange={(e) => setTb(+e.target.value)}
          className="h-2 w-full cursor-pointer appearance-none rounded-full"
          style={{ accentColor: "var(--cf-accent)", background: `linear-gradient(to right, var(--cf-accent) ${(tb / 200) * 100}%, var(--cf-raised) 0)` }}
        />
        <div className="cf-mono mt-2 flex justify-between text-[11px]" style={{ color: "var(--cf-dim)" }}><span>1 TB</span><span>200 TB</span></div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border p-4" style={{ borderColor: "var(--cf-border)", background: "var(--cf-card)" }}>
          <p className="text-xs" style={{ color: "var(--cf-dim)" }}>Typical cloud egress</p>
          <p className="cf-display mt-2 text-2xl font-semibold tabular-nums tracking-tight" style={{ color: "#f87171" }}>{usd(cost)}</p>
          <p className="cf-mono mt-1 text-[11px]" style={{ color: "var(--cf-dim)" }}>{idr(cost)}/mo</p>
        </div>
        <div className="rounded-2xl border p-4" style={{ borderColor: "var(--cf-accent)", background: "var(--cf-card)" }}>
          <p className="text-xs" style={{ color: "var(--cf-dim)" }}>R2 zero-egress</p>
          <p className="cf-display mt-2 text-2xl font-semibold tabular-nums tracking-tight" style={{ color: "var(--cf-accent)" }}>$0</p>
          <p className="cf-mono mt-1 text-[11px]" style={{ color: "var(--cf-dim)" }}>saves {usd(cost)}/mo</p>
        </div>
        <p className="col-span-2 text-xs" style={{ color: "var(--cf-dim)" }}>
          Assumes ${EGRESS_RATE.toFixed(2)}/GB list egress and Rp16.000/USD. Excludes storage and request fees, which still apply on R2.
        </p>
      </div>
    </div>
  );
}

export function InteractiveShowcase() {
  return (
    <section id="showcase" className="px-5 py-20 sm:py-28" style={{ background: "var(--cf-bg)" }}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="cf-mono mb-4 text-xs uppercase tracking-widest" style={{ color: "var(--cf-accent)" }}>Live stages</p>
          <h2 className="cf-display text-balance" style={{ fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.045em", lineHeight: 1, color: "var(--cf-fg)" }}>
            Poke the platform before you buy it.
          </h2>
        </div>
        <div className="space-y-6">
          <Stage n="01" title="Legalizin RegTech" blurb="Pick an entity, tick the checklist, verify.">
            <LegalizinStage />
          </Stage>
          <Stage n="02" title="Edge latency" blurb="Live ping across the network.">
            <LatencyStage />
          </Stage>
          <Stage n="03" title="Zero-egress calculator" blurb="What your bandwidth bill stops being.">
            <EgressStage />
          </Stage>
        </div>
      </div>
    </section>
  );
}
