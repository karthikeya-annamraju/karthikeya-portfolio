"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/education";
import { FadeInUp, StaggerContainer } from "@/components/animations/AnimationWrappers";
import { fadeInUp } from "@/components/animations/AnimationWrappers";
import { FiAward, FiCalendar, FiBookOpen } from "react-icons/fi";

const Education = () => {
  return (
    <section id="education" className="section-container bg-white/50">
      <FadeInUp>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Education
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Academic background and achievements
          </p>
        </div>
      </FadeInUp>

      <StaggerContainer>
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(255, 107, 53, 0.2)" }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                  <p className="text-sunset-orange font-semibold text-lg mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiCalendar className="text-sunset-coral" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
                <div className="text-sunset-orange text-3xl">
                  <FiAward />
                </div>
              </div>

              {/* Description */}
              {edu.description && (
                <p className="text-gray-700 mb-4">{edu.description}</p>
              )}

              {/* Achievements */}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FiBookOpen className="text-sunset-orange" />
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-sunset-orange mt-1">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
};

export default Education;
