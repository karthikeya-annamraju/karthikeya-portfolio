"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiStar,
  FiUsers,
  FiUserPlus,
  FiGitBranch,
} from "react-icons/fi";
import { SectionLabel, Reveal } from "@/components/ui/Primitives";
import type { GithubStats } from "@/lib/github";

const GithubStatsView = ({
  repos,
  followers,
  following,
  stars,
  languages,
}: GithubStats) => {
  const statCards = [
    { icon: FiGitBranch, value: repos, label: "Repositories" },
    { icon: FiUsers, value: followers, label: "Followers" },
    { icon: FiStar, value: stars, label: "Stars Earned" },
    { icon: FiUserPlus, value: following, label: "Following" },
  ];

  const hasLanguages = languages.length > 0;

  // Build conic-gradient stops; force the final segment to 100% so rounding
  // never leaves a visible gap in the donut.
  let acc = 0;
  const stops = languages
    .map((l, i) => {
      const start = acc;
      acc += l.pct;
      const end = i === languages.length - 1 ? 100 : acc;
      return `${l.color} ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <section id="github" className="section-container">
      <SectionLabel index="06" title="GitHub Stats" />

      <Reveal>
        <h2 className="flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl">
          <FiGithub className="text-accent-purple" /> GitHub Overview
        </h2>
        <p className="mt-2 text-ink-muted">
          Building in public —{" "}
          <a
            href="https://github.com/karthikeya-annamraju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-purple hover:underline"
          >
            @karthikeya-annamraju
          </a>
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* Stat cards */}
        <Reveal className="lg:col-span-1">
          <div className="grid h-full grid-cols-2 gap-4">
            {statCards.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -4 }}
                  className="flex flex-col justify-between rounded-2xl glass p-5 hover:border-accent-purple/40 hover:shadow-glow transition-all"
                >
                  <Icon className="text-xl text-accent-purple" />
                  <div className="mt-6">
                    <p className="font-display text-2xl font-bold text-ink">
                      {s.value.toLocaleString()}
                    </p>
                    <p className="text-xs text-ink-muted">{s.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Reveal>

        {/* Top languages bars */}
        <Reveal delay={0.1} className="lg:col-span-1">
          <div className="h-full rounded-2xl glass p-6">
            <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-accent-purple">
              Top Languages
            </h3>
            {hasLanguages ? (
              <div className="space-y-4">
                {languages.map((l, i) => (
                  <div key={l.name}>
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span className="text-ink">{l.name}</span>
                      <span className="font-mono text-ink-faint">{l.pct}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: l.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="font-mono text-sm text-ink-faint">
                Language data unavailable right now.
              </p>
            )}
          </div>
        </Reveal>

        {/* Donut */}
        <Reveal delay={0.2} className="lg:col-span-1">
          <div className="flex h-full flex-col items-center justify-center rounded-2xl glass p-6">
            <h3 className="mb-5 self-start font-display text-sm font-semibold uppercase tracking-wider text-accent-purple">
              Language Split
            </h3>
            {hasLanguages ? (
              <>
                <div className="relative flex items-center justify-center">
                  <motion.div
                    initial={{ rotate: -90, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-40 w-40 rounded-full"
                    style={{ background: `conic-gradient(${stops})` }}
                  />
                  <div className="absolute h-24 w-24 rounded-full bg-dark-900" />
                  <div className="absolute text-center">
                    <p className="font-display text-lg font-bold text-ink">
                      {languages.length}
                    </p>
                    <p className="text-[10px] text-ink-muted">languages</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1.5">
                  {languages.map((l) => (
                    <span
                      key={l.name}
                      className="inline-flex items-center gap-1.5 text-[11px] text-ink-muted"
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: l.color }}
                      />
                      {l.name}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              <p className="font-mono text-sm text-ink-faint">No data yet.</p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GithubStatsView;
