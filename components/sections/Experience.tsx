"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { FadeInUp } from "@/components/animations/AnimationWrappers";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <FadeInUp>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional journey and contributions
          </p>
        </div>
      </FadeInUp>

      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sunset-orange via-sunset-coral to-primary-400" />

          {experienceData.map((exp, idx) => (
            <ExperienceCard key={exp.id} experience={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual Experience Card with Timeline
const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative mb-12 ${isEven ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} w-full md:w-[calc(50%-2rem)]`}
    >
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.3 }}
        className="absolute left-8 md:left-auto md:right-[-2.5rem] md:ml-[-0.5rem] w-6 h-6 bg-gradient-to-br from-sunset-orange to-sunset-coral rounded-full border-4 border-white shadow-lg z-10"
        style={isEven ? {} : { left: 'auto', right: 'auto', transform: 'translateX(-50%)' }}
      />

      {/* Content Card */}
      <motion.div
        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(255, 107, 53, 0.2)" }}
        className="ml-20 md:ml-0 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
      >
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-2xl font-bold text-gray-800">{experience.position}</h3>
            <FiBriefcase className="text-sunset-orange text-2xl" />
          </div>
          <p className="text-sunset-orange font-semibold text-lg mb-2">{experience.company}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <FiCalendar className="text-sunset-coral" />
              {experience.duration}
            </span>
            <span className="flex items-center gap-1">
              <FiMapPin className="text-sunset-coral" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">{experience.description}</p>

        {/* Responsibilities */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((resp: string, idx: number) => (
              <li key={idx} className="text-gray-600 flex items-start gap-2 text-sm">
                <span className="text-sunset-orange mt-1 font-bold">→</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-100 text-sunset-orange text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
