import React from "react";
import { motion } from "framer-motion";

export function ArchitectureAmaterasu() {
  const pillars = [
    {
      num: "01",
      name: "EDGE RUNTIME",
      technology: "Cloudflare Workers & V8 Isolates",
      summary: "Serverless code execution deployed to 300+ metropolitan regions worldwide. Sub-millisecond startup times and ultra-low latency execution across Southeast Asia."
    },
    {
      num: "02",
      name: "DISTRIBUTED SQL",
      technology: "Cloudflare D1 Transactional Engine",
      summary: "Relational SQLite engine at the edge with read replication, ACID transactional compliance, and instant query distribution for real-time regulatory status checks."
    },
    {
      num: "03",
      name: "ZERO-EGRESS STORAGE",
      technology: "Cloudflare R2 Object Fabric",
      summary: "S3-compatible persistent media and corporate statutory archive storage engineered with 100% free egress bandwidth, eliminating unpredictable cloud tolls."
    },
    {
      num: "04",
      name: "REGTECH LOGIC",
      technology: "Deterministic Legal Verification",
      summary: "Specialized algorithmic rulesets enforcing Indonesian corporate law, KBLI 2020 classifications, AHU entity naming verification, and OSS RBA compliance."
    }
  ];

  return (
    <section className="relative py-28 px-6 sm:px-12 bg-[#070b14] border-t border-[#1b2978]/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#75cdd6]" />
            <span className="text-[10px] uppercase font-mono tracking-[0.32em] text-[#7488a5]">
              02 / INFRASTRUCTURE
            </span>
          </div>

          <h2 
            style={{
              fontFamily: 'var(--font-display, "Inter Tight", sans-serif)',
              fontWeight: 200,
              letterSpacing: '-0.035em',
              lineHeight: 1.05
            }}
            className="text-3xl sm:text-5xl md:text-6xl text-white font-extralight tracking-tight max-w-3xl"
          >
            Zero-Egress Edge Reliability & Deterministic Execution
          </h2>
        </div>

        {/* 4 Architectural Columns with Fine Hairline Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="pt-6 border-t border-[#1b2978]/50 flex flex-col justify-between"
            >
              <div>
                <span 
                  style={{
                    fontFamily: 'var(--font-display, "Inter Tight", sans-serif)',
                    fontWeight: 200
                  }}
                  className="text-3xl text-[#75cdd6] font-extralight block mb-3"
                >
                  {item.num}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-[0.24em] text-white block mb-1">
                  {item.name}
                </span>
                <span className="text-xs text-[#579dc0] font-mono block mb-3">
                  {item.technology}
                </span>
                <p className="text-xs text-[#7488a5] leading-relaxed font-normal">
                  {item.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
