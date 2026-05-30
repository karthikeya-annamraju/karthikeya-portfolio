"use client";

import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiGithub } from "react-icons/fi";
import { SectionLabel, TerminalWindow } from "@/components/ui/Primitives";
import Typewriter from "@/components/ui/Typewriter";
import Heatmap from "@/components/ui/Heatmap";

const skillLines = [
  { k: "Frontend", v: "Next.js, React, Flutter" },
  { k: "Backend", v: "Spring Boot, Express, Python" },
  { k: "Database", v: "MongoDB, PostgreSQL, MySQL" },
  { k: "AI/ML", v: "LLM Integration, RAG, Hugging Face" },
  { k: "Tools", v: "Git, Docker, Postman" },
  { k: "Learning", v: "Always" },
];

const stats = [
  { value: "6+", label: "Projects" },
  { value: "3", label: "Internships" },
  { value: "10+", label: "Technologies" },
  { value: "∞", label: "Coffee" },
];

const Hero = () => {
  return (
    <section id="home" className="section-container min-h-screen pt-24 lg:pt-16">
      <SectionLabel index="01" title="Hero / Landing" />

      <div className="grid items-start gap-8 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-ink-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for opportunities
          </div>

          <div>
            <p className="font-mono text-sm text-accent-purple">Hi, I&apos;m</p>
            <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Sai Karthik
              <br />
              <span className="text-gradient-animated">Annamraju</span>
            </h1>
          </div>

          <h2 className="font-mono text-xl text-ink sm:text-2xl">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Backend Engineer",
                "AI Integrator",
                "Problem Solver",
              ]}
            />
          </h2>

          <p className="max-w-xl leading-relaxed text-ink-muted">
            Building scalable, efficient and user-centric web, mobile &amp;
            AI-powered applications with modern technologies.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 pt-2">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue px-6 py-3 text-sm font-semibold text-white shadow-glow"
            >
              View My Work <FiArrowRight />
            </motion.a>
            <motion.a
              href="/Karthikeya's CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-ink hover:border-accent-purple/50 transition-colors"
            >
              <FiDownload /> Download Resume
            </motion.a>
          </div>

          {/* whoami mini terminal */}
          <TerminalWindow title="whoami" className="max-w-xl">
            <p className="text-ink-muted">
              <span className="text-green-400">$</span> whoami
            </p>
            <p className="text-ink">
              Full Stack Developer{" "}
              <span className="text-ink-faint">|</span> Problem Solver{" "}
              <span className="text-ink-faint">|</span> Tech Enthusiast
            </p>
          </TerminalWindow>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5"
        >
          {/* skills terminal */}
          <TerminalWindow title="karthikeya@dev: ~">
            <p className="text-ink-muted">
              <span className="text-green-400">&gt;</span> cat skills.txt
            </p>
            <div className="mt-2 space-y-1">
              {skillLines.map((l) => (
                <div key={l.k} className="flex">
                  <span className="w-24 shrink-0 text-accent-blue">{l.k}</span>
                  <span className="text-ink-faint">: </span>
                  <span className="text-ink">{l.v}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-ink-muted">
              <span className="text-green-400">&gt;</span>{" "}
              <span className="animate-blink">_</span>
            </p>
          </TerminalWindow>

          {/* GitHub heatmap card */}
          <div className="rounded-2xl glass p-5">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-display text-sm font-semibold">
                <FiGithub className="text-accent-purple" /> GitHub Activity
              </h3>
              <span className="font-mono text-[11px] text-ink-faint">
                last 12 months
              </span>
            </div>
            <p className="mb-4 font-mono text-[11px] text-ink-faint">
              contributions in the last year
            </p>
            <Heatmap />
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -4 }}
                className="rounded-xl glass px-3 py-4 text-center hover:border-accent-purple/40 transition-colors"
              >
                <p className="font-display text-2xl font-bold text-gradient">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-ink-muted">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
