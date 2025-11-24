"use client";

import { motion } from "framer-motion";
import { skillsData, SkillCategory } from "@/data/skills";
import { StaggerContainer, FadeInUp } from "@/components/animations/AnimationWrappers";
import { fadeInUp } from "@/components/animations/AnimationWrappers";

const Skills = () => {
  return (
    <section id="skills" className="section-container bg-white/50">
      <FadeInUp>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Proficient in modern technologies for building scalable applications
          </p>
        </div>
      </FadeInUp>

      <div className="space-y-12">
        {skillsData.map((category, idx) => (
          <SkillCategorySection key={category.category} category={category} delay={idx * 0.1} />
        ))}
      </div>
    </section>
  );
};

// Individual skill category with animated bars
const SkillCategorySection = ({ category, delay }: { category: SkillCategory; delay: number }) => {
  return (
    <FadeInUp delay={delay}>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="w-2 h-8 bg-gradient-to-b from-sunset-orange to-sunset-coral rounded-full" />
          {category.category}
        </h3>
        
        <StaggerContainer>
          <div className="grid gap-6">
            {category.skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </StaggerContainer>
      </div>
    </FadeInUp>
  );
};

// Animated skill bar component
const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => {
  return (
    <motion.div variants={fadeInUp} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-700">{skill.name}</span>
        <span className="text-sunset-orange font-semibold">{skill.level}%</span>
      </div>
      
      {/* Progress Bar */}
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-gradient-to-r from-sunset-orange via-sunset-coral to-primary-500 rounded-full relative"
        >
          {/* Shimmer effect */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
