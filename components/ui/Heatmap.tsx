"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const COLS = 26;
const ROWS = 7;
const MONTHS = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];

// Deterministic pseudo-random so SSR and client match.
const intensity = (i: number) => {
  const v = Math.abs(Math.sin(i * 12.9898) * 43758.5453);
  const f = v - Math.floor(v);
  if (f < 0.42) return 0;
  if (f < 0.66) return 1;
  if (f < 0.84) return 2;
  if (f < 0.95) return 3;
  return 4;
};

const LEVELS = [
  "bg-white/[0.04]",
  "bg-emerald-500/25",
  "bg-emerald-500/45",
  "bg-emerald-500/70",
  "bg-emerald-400",
];

const Heatmap = () => {
  const cells = useMemo(
    () => Array.from({ length: COLS * ROWS }, (_, i) => intensity(i)),
    []
  );

  return (
    <div className="w-full">
      <div
        className="grid w-full gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      >
        {cells.map((lvl, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i % COLS) * 0.012, duration: 0.25 }}
            className={`aspect-square rounded-[2px] ${LEVELS[lvl]}`}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-ink-faint">
        {MONTHS.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
};

export default Heatmap;
