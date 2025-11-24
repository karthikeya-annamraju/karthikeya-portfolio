"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";
import { FiGithub, FiExternalLink, FiLock } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(255, 107, 53, 0.2)" }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-primary-100 to-sunset-cream">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        {/* Title and Links */}
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
          
          <div className="flex gap-2">
            {project.isPrivate ? (
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 text-xl p-2"
                title="Private Repository"
              >
                <FiLock />
              </motion.div>
            ) : (
              project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-sunset-orange text-xl p-2 transition-colors"
                >
                  <FiGithub />
                </motion.a>
              )
            )}
          </div>
        </div>

        {/* Organization Badge for Private Projects */}
        {project.isPrivate && project.organizationName && (
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 rounded-full text-sm">
            <FiLock className="text-sunset-orange" />
            <span className="text-gray-700">{project.organizationName}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-sunset-orange/10 to-sunset-coral/10 text-sunset-orange text-sm rounded-full border border-sunset-orange/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Highlights */}
        {project.highlights && (
          <div className="pt-2">
            <p className="text-sm font-semibold text-gray-700 mb-2">Key Highlights:</p>
            <ul className="space-y-1">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-sunset-orange mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;