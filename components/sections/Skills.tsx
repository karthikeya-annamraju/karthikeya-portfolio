"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FiLayers } from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiFlutter,
  SiTailwindcss,
  SiSpringboot,
  SiExpress,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiLinux,
  SiPostman,
} from "react-icons/si";
import { SectionLabel, Reveal } from "@/components/ui/Primitives";

interface Tech {
  name: string;
  icon: IconType;
  color: string;
}

interface Category {
  title: string;
  techs: Tech[];
}

const categories: Category[] = [
  {
    title: "Frontend",
    techs: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "Databases",
    techs: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Tools & Others",
    techs: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="tech-stack" className="section-container">
      <SectionLabel index="04" title="Tech Stack" />

      <Reveal>
        <h2 className="flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl">
          <FiLayers className="text-accent-purple" /> Tech Arsenal
        </h2>
        <p className="mt-2 text-ink-muted">
          The technologies and tools I use to bring ideas to life.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((cat, ci) => (
          <Reveal key={cat.title} delay={ci * 0.08}>
            <div className="h-full rounded-2xl glass p-6 hover:border-accent-purple/40 transition-all">
              <h3 className="mb-5 font-mono text-sm uppercase tracking-wider text-accent-purple">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cat.techs.map((tech, ti) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.05 + ti * 0.05 }}
                      whileHover={{ y: -4, scale: 1.03 }}
                      className="group flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-dark-900/50 px-2 py-4 transition-colors hover:border-white/[0.12]"
                    >
                      <Icon
                        className="text-2xl transition-transform group-hover:scale-110"
                        style={{ color: tech.color }}
                      />
                      <span className="text-center text-xs text-ink-muted">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* tech-stack.json terminal */}
      <Reveal className="mt-8">
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-dark-900/60 px-5 py-4 font-mono text-[13px]">
          <p className="text-ink-muted">
            <span className="text-green-400">&gt;</span> cat tech-stack.json
          </p>
          <p className="mt-1 text-ink">
            {"{ "}
            <span className="text-accent-purple">&quot;passion&quot;</span>:{" "}
            <span className="text-green-400">
              &quot;building scalable solutions&quot;
            </span>
            , <span className="text-accent-purple">&quot;code&quot;</span>:{" "}
            <span className="text-green-400">&quot;clean&quot;</span>,{" "}
            <span className="text-accent-purple">&quot;coffee&quot;</span>:{" "}
            <span className="text-green-400">&quot;strong&quot;</span>
            {" }"}
          </p>
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
