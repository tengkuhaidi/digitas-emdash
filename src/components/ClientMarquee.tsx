const ROW1 = [
  ["PT Metropolitan Kentjana Tbk", "Pondok Indah Group"],
  ["KUMPUL.ID", "National Startup Ecosystem"],
  ["PT Global Astra Mandiri", "Logistics"],
  ["Kärcher Indonesia", "Industrial Systems"],
  ["PT Mega Advans Teknologi", "Maritime Comms"],
];
const ROW2 = [
  ["GISLI Organization", "Maritime Safety"],
  ["PT Dunia Marine Internusa", "Maritime"],
  ["PT Putra Teknik Mulya", "Elevator Engineering"],
  ["PT Ruang Motor Indonesia", "Fleet & Charter"],
  ["PT BIA Travel", "Haji & Umroh"],
];

function Row({ items, reverse, label }: { items: string[][]; reverse?: boolean; label: string }) {
  // ponytail: list duplicated once for seamless -50% loop; widen items if viewport > 2x list width.
  const loop = [...items, ...items];
  return (
    <div className="cm-row" role="list" aria-label={label}>
      <div className={`cm-track${reverse ? " cm-rev" : ""}`}>
        {loop.map(([name, tag], i) => (
          <div key={i} role="listitem" aria-hidden={i >= items.length ? true : undefined} className="cm-tag">
            <span className="cm-name">{name}</span>
            <span className="cm-badge cf-mono">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientMarquee() {
  return (
    <section aria-labelledby="cm-h" className="cm py-14 sm:py-20" style={{ background: "var(--cf-bg)" }}>
      <p id="cm-h" className="cf-mono mb-8 px-5 text-center text-xs uppercase tracking-widest" style={{ color: "var(--cf-dim)" }}>
        Trusted by teams across Indonesia
      </p>
      <Row items={ROW1} label="Clients, row one" />
      <Row items={ROW2} reverse label="Clients, row two" />
      <style>{`
        .cm-row{overflow:hidden;padding:6px 0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
        .cm-track{display:flex;gap:12px;width:max-content;animation:cm-left 60s linear infinite}
        .cm-rev{animation-name:cm-right;animation-duration:70s}
        .cm-row:hover .cm-track,.cm-row:focus-within .cm-track{animation-play-state:paused}
        .cm-tag{display:inline-flex;align-items:center;gap:10px;white-space:nowrap;padding:10px 18px;border-radius:999px;border:1px solid var(--cf-border);background:var(--cf-card);transition:border-color .25s,box-shadow .25s}
        :root:not(.light) .cm-tag{border-color:#27272a}
        .cm-tag:hover{border-color:var(--cf-dim);box-shadow:0 0 24px -4px var(--cf-glow)}
        .cm-name{font-size:14px;font-weight:600;color:var(--cf-fg);letter-spacing:-.01em}
        .cm-badge{font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--cf-dim);padding-left:10px;border-left:1px solid var(--cf-border)}
        @keyframes cm-left{to{transform:translateX(calc(-50% - 6px))}}
        @keyframes cm-right{from{transform:translateX(calc(-50% - 6px))}to{transform:translateX(0)}}
        @media (prefers-reduced-motion:reduce){
          .cm-track{animation:none;width:auto;flex-wrap:wrap;justify-content:center;padding:0 20px}
          .cm-tag[aria-hidden="true"]{display:none}
          .cm-row{-webkit-mask-image:none;mask-image:none}
        }
      `}</style>
    </section>
  );
}
