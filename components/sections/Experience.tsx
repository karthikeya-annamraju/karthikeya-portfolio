"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiClock } from "react-icons/fi";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";
import { SectionLabel, StackBadge, Reveal } from "@/components/ui/Primitives";

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <SectionLabel index="05" title="Experience" />

      <Reveal>
        <h2 className="flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl">
          <FiBriefcase className="text-accent-purple" /> Experience Timeline
        </h2>
        <p className="mt-2 text-ink-muted">
          My professional journey building real products.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative ml-3 border-l border-white/[0.1] pl-8">
            {experienceData.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 0.1}>
                <div className="relative mb-10 last:mb-0">
                  {/* Node */}
                  <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-accent-purple/40" />
                    <span className="h-3 w-3 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue ring-4 ring-dark-950" />
                  </span>

                  <div className="rounded-2xl glass p-6 hover:border-accent-purple/40 hover:shadow-glow transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-ink">
                          {exp.position}
                        </h3>
                        <p className="font-mono text-sm text-accent-purple">
                          {exp.company}
                        </p>
                      </div>
                      {i === 0 && (
                        <span className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-3 py-1 text-[11px] font-medium text-violet-300">
                          Latest
                        </span>
                      )}
                    </div>

                    <div className="mt-2 flex flex-wrap gap-4 font-mono text-[11px] text-ink-faint">
                      <span className="inline-flex items-center gap-1">
                        <FiClock /> {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FiMapPin /> {exp.location}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {exp.description}
                    </p>

                    <ul className="mt-3 space-y-1.5">
                      {exp.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex gap-2 text-sm text-ink-muted"
                        >
                          <span className="mt-1 text-accent-blue">▹</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <StackBadge key={t} label={t} />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* career.log terminal + education */}
        <div className="space-y-6">
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-dark-900/80 shadow-card">
              <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[11px] text-ink-faint">
                  career.log
                </span>
              </div>
              <div className="space-y-1 p-5 font-mono text-[12px]">
                <p className="text-ink-muted">
                  <span className="text-green-400">&gt;</span> cat career.log
                </p>
                <p className="text-ink">
                  <span className="text-accent-blue">2025</span> → Full Stack
                  Developer
                </p>
                <p className="text-ink">
                  <span className="text-accent-blue">2024</span> → Gen AI Intern
                </p>
                <p className="text-ink">
                  <span className="text-accent-blue">2024</span> → Full Stack
                  Intern
                </p>
                <p className="mt-2 text-ink-faint">
                  # On to the next build 🚀
                </p>
              </div>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={0.25}>
            <div className="rounded-2xl glass p-5">
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent-purple">
                Education
              </h3>
              <div className="space-y-4">
                {educationData.map((edu) => (
                  <div
                    key={edu.id}
                    className="border-l-2 border-white/[0.08] pl-3"
                  >
                    <p className="text-sm font-medium text-ink">{edu.degree}</p>
                    <p className="text-xs text-ink-muted">{edu.institution}</p>
                    <p className="font-mono text-[11px] text-ink-faint">
                      {edu.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
