"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiCode,
  FiCpu,
  FiTarget,
  FiLayers,
  FiUser,
} from "react-icons/fi";
import { SectionLabel, Reveal } from "@/components/ui/Primitives";

const doItems = [
  {
    icon: FiLayers,
    title: "Full Stack Development",
    description: "Building end-to-end scalable web and mobile applications.",
  },
  {
    icon: FiCpu,
    title: "AI & Automation",
    description:
      "Integrating LLMs, RAG systems and automation to save time and effort.",
  },
  {
    icon: FiTarget,
    title: "Problem Solving",
    description: "Turning complex requirements into clean, efficient solutions.",
  },
  {
    icon: FiCode,
    title: "Clean Code",
    description: "Writing maintainable, well-engineered and tested code.",
  },
];

const facts = [
  { k: "Name", v: "Sai Karthik Annamraju" },
  { k: "Location", v: "India" },
  { k: "Email", v: "avkarthikeya.dev@gmail.com" },
  { k: "Availability", v: "Open to opportunities" },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <SectionLabel index="03" title="About" />

      <Reveal>
        <h2 className="flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl">
          <FiUser className="text-accent-purple" /> About Me
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        {/* Profile card */}
        <Reveal className="lg:col-span-2">
          <div className="rounded-2xl glass p-5">
            <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-xl border border-white/[0.08]">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/30 to-accent-blue/20 mix-blend-overlay" />
              <Image
                src="/images/Karthikeya Annamraju.jpg"
                alt="Sai Karthik Annamraju"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[15%_30%]"
                priority
              />
            </div>

            <div className="mt-5 space-y-2 font-mono text-[13px]">
              {facts.map((f) => (
                <div key={f.k} className="flex justify-between gap-3">
                  <span className="text-ink-faint">{f.k}</span>
                  <span className="truncate text-ink">{f.v}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-white/[0.06] bg-dark-900/60 px-4 py-3 font-mono text-[12px] text-ink-muted">
              <span className="text-green-400">&gt;</span> echo &quot;Building the
              future, one line at a time.&quot;
            </div>
          </div>
        </Reveal>

        {/* Bio + What I do */}
        <div className="space-y-6 lg:col-span-3">
          <Reveal delay={0.1}>
            <div className="rounded-2xl glass p-6">
              <p className="leading-relaxed text-ink-muted">
                I&apos;m a Full Stack Developer specializing in building reliable
                backend systems and clean, scalable user interfaces. I work
                across{" "}
                <span className="text-ink">
                  Node.js, Express, Spring Boot, Flutter and React
                </span>
                , and I&apos;ve delivered production-level features during my
                internships that are actively used by real users.
              </p>
              <p className="mt-4 leading-relaxed text-ink-muted">
                I enjoy turning complex requirements into simple, well-engineered
                solutions and constantly explore how AI and cloud technologies
                can enhance real-world applications.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid gap-4 sm:grid-cols-2">
              {doItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -4 }}
                    transition={{ delay: i * 0.04 }}
                    className="rounded-xl glass p-5 hover:border-accent-purple/40 hover:shadow-glow transition-all"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-purple/10 text-accent-purple">
                      <Icon className="text-lg" />
                    </div>
                    <h3 className="font-display font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
