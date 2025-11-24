"use client";

import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { StaggerContainer, FadeInUp } from "@/components/animations/AnimationWrappers";
import { fadeInUp } from "@/components/animations/AnimationWrappers";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <FadeInUp>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcasing production-ready applications built with modern technologies
          </p>
        </div>
      </FadeInUp>

      <StaggerContainer>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
};

export default Projects;