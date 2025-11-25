"use client";

import { motion } from "framer-motion";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
} from "@/components/animations/AnimationWrappers";
import { FiCode, FiDatabase, FiSmartphone, FiCpu } from "react-icons/fi";

const About = () => {
  const highlights = [
    {
      icon: <FiSmartphone className="text-3xl" />,
      title: "Mobile Development",
      description:
        "Building cross-platform apps with Flutter and seamless UI/UX",
    },
    {
      icon: <FiDatabase className="text-3xl" />,
      title: "Backend Engineering",
      description:
        "Scalable APIs with Express.js, Node.js, and database management",
    },
    {
      icon: <FiCpu className="text-3xl" />,
      title: "AI Integration",
      description:
        "Implementing LLMs and RAG systems for intelligent applications",
    },
    {
      icon: <FiCode className="text-3xl" />,
      title: "Full-Stack Projects",
      description:
        "End-to-end development from concept to production deployment",
    },
  ];

  return (
    <section id="about" className="section-container bg-white/50">
      <FadeInUp>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionate developer crafting production-ready solutions
          </p>
        </div>
      </FadeInUp>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Introduction */}
        <FadeInUp delay={0.2}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {/* I'm a Computer Science student and a Full Stack Developer with a passion for 
              building scalable, user-centric applications. With hands-on experience in 
              production-level projects during my internships, I've developed 
              expertise in modern web and mobile technologies. */}
              I'm a Full Stack Developer specializing in building reliable
              backend systems and clean, scalable user interfaces. I work across
              Node.js, Express, Spring Boot, Flutter, and React and I’ve
              delivered production-level features during my internships that are
              actively used by real users.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {/* My journey spans from creating intuitive Flutter mobile apps to architecting 
              robust Express.js backends, with a growing focus on integrating AI capabilities 
              into real-world applications. I thrive on solving complex problems and 
              continuously learning emerging technologies. */}
               I enjoy turning complex requirements
              into simple, well-engineered solutions and constantly explore how
              AI and cloud technologies can enhance real-world applications.
            </p>
          </div>
        </FadeInUp>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(255, 107, 53, 0.15)",
              }}
              className="bg-gradient-to-br from-white to-primary-50 rounded-xl p-6 border border-primary-100 shadow-md"
            >
              <div className="text-sunset-orange mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <FadeInUp delay={0.4}>
          <div className="grid grid-cols-3 gap-6 bg-gradient-to-r from-sunset-orange to-sunset-coral rounded-2xl p-8 text-white shadow-xl">
            <StatCard number="5+" label="Months Experience" />
            <StatCard number="6+" label="Projects Built" />
            <StatCard number="10+" label="Technologies" />
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

// Stats Card Component
const StatCard = ({ number, label }: { number: string; label: string }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="text-center">
    <div className="text-3xl md:text-4xl font-bold mb-2">{number}</div>
    <div className="text-sm md:text-base opacity-90">{label}</div>
  </motion.div>
);

export default About;
