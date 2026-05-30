"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ----------------------------- Section Label ----------------------------- */
export const SectionLabel = ({
  index,
  title,
}: {
  index: string;
  title: string;
}) => (
  <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
    <span className="text-accent-purple">{index}</span>
    <span>{title}</span>
    <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
  </div>
);

/* ----------------------------- Glass Card ----------------------------- */
export const GlassCard = ({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) => (
  <div
    className={cn(
      "rounded-2xl glass p-6 transition-all duration-300",
      hover && "hover:border-accent-purple/40 hover:shadow-glow",
      className
    )}
  >
    {children}
  </div>
);

/* ----------------------------- Terminal Window ----------------------------- */
export const TerminalWindow = ({
  title = "terminal",
  children,
  className,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "overflow-hidden rounded-xl border border-white/[0.08] bg-dark-900/80 backdrop-blur-xl shadow-card",
      className
    )}
  >
    <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      <span className="ml-3 font-mono text-[11px] text-ink-faint">{title}</span>
    </div>
    <div className="p-4 font-mono text-[13px] leading-relaxed sm:p-5">
      {children}
    </div>
  </div>
);

/* ----------------------------- Stack Badge ----------------------------- */
export const StackBadge = ({ label }: { label: string }) => (
  <span className="rounded-md border border-accent-purple/20 bg-accent-purple/10 px-2.5 py-1 font-mono text-[11px] text-violet-300">
    {label}
  </span>
);

/* ----------------------------- Reveal wrapper ----------------------------- */
export const Reveal = ({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.55, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);
