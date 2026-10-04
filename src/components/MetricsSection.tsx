import React from "react";
import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Cpu } from "lucide-react";

export function MetricsSection() {
  return (
    <section className="py-14 sm:py-20 border-t border-[#1b2978]/40 bg-[#070b14]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-[20px] bg-[#0c1424]/70 border border-[#23338e]/60 text-left"
          >
            <div className="flex items-center gap-2 mb-2 text-[#579dc0]">
              <Globe2 className="w-4 h-4 text-[#75cdd6]" />
              <span className="text-[10px] uppercase font-medium tracking-[0.24em] text-[#7488a5]">Global Uptime</span>
            </div>
            <div className="text-3xl font-extralight tracking-tight text-[#ffffff] font-mono mb-1">99.99%</div>
            <p className="text-xs text-[#7488a5] leading-relaxed">Cloudflare distributed edge network</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-[20px] bg-[#0c1424]/70 border border-[#23338e]/60 text-left"
          >
            <div className="flex items-center gap-2 mb-2 text-[#579dc0]">
              <ShieldCheck className="w-4 h-4 text-[#75cdd6]" />
              <span className="text-[10px] uppercase font-medium tracking-[0.24em] text-[#7488a5]">RegTech Engine</span>
            </div>
            <div className="text-3xl font-extralight tracking-tight text-[#ffffff] font-mono mb-1">15+ Tools</div>
            <p className="text-xs text-[#7488a5] leading-relaxed">Verified AHU &amp; OSS RBA logic</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-[20px] bg-[#0c1424]/70 border border-[#23338e]/60 text-left"
          >
            <div className="flex items-center gap-2 mb-2 text-[#579dc0]">
              <Cpu className="w-4 h-4 text-[#75cdd6]" />
              <span className="text-[10px] uppercase font-medium tracking-[0.24em] text-[#7488a5]">Storage &amp; SQL</span>
            </div>
            <div className="text-3xl font-extralight tracking-tight text-[#ffffff] font-mono mb-1">Zero Egress</div>
            <p className="text-xs text-[#7488a5] leading-relaxed">Serverless D1 SQL &amp; R2 Storage</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
