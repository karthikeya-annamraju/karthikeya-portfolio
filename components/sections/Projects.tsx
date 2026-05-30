"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiLock, FiCode } from "react-icons/fi";
import { projectsData, getProjectLink, type Project } from "@/data/projects";
import { SectionLabel, StackBadge, Reveal } from "@/components/ui/Primitives";

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <SectionLabel index="02" title="Projects" />

      <Reveal className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl">
            <FiCode className="text-accent-purple" /> Featured Projects
          </h2>
          <p className="mt-2 text-ink-muted">
            A selection of products I&apos;ve designed, built and shipped.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* ls terminal strip */}
      <Reveal className="mt-8">
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-dark-900/60 px-5 py-4 font-mono text-[13px]">
          <span className="text-green-400">&gt;</span>{" "}
          <span className="text-ink-muted">ls ~/projects</span>
          <span className="ml-4 text-accent-blue">
            {projectsData.map((p) => p.title.split(" ")[0]).join("/  ")}/
          </span>
        </div>
      </Reveal>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const liveLink = getProjectLink(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl glass transition-all duration-300 hover:border-accent-purple/40 hover:shadow-glow"
    >
      {/* Preview image */}
      <div className="relative h-44 overflow-hidden border-b border-white/[0.06]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />
        {project.isPrivate && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md border border-white/[0.12] bg-dark-900/80 px-2 py-1 font-mono text-[10px] text-ink-muted backdrop-blur">
            <FiLock /> Private
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-ink">
          {project.title}
        </h3>
        {project.organizationName && (
          <p className="mt-0.5 font-mono text-[11px] text-accent-purple">
            @ {project.organizationName}
          </p>
        )}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        {/* Stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <StackBadge key={t} label={t} />
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex items-center gap-5 border-t border-white/[0.06] pt-4 font-mono text-[12px]">
          {liveLink ? (
            <>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-accent-purple"
              >
                <FiGithub /> GitHub
              </a>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-accent-blue"
              >
                <FiExternalLink /> View Repo
              </a>
            </>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-ink-faint">
              <FiLock /> Source private
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
