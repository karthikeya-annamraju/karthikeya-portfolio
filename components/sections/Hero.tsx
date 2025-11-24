"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiArrowDown } from "react-icons/fi";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-12 items-center w-full"
      >
        {/* Left Content */}
        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <span className="text-sunset-orange font-medium text-lg">
              Hello, I'm
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            Karthikeya Annamraju
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gradient font-semibold"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg leading-relaxed max-w-xl"
          >
            Passionate about building scalable full-stack applications with expertise 
            in Flutter, Express.js, and AI integration. Focused on creating seamless 
            user experiences and robust backend systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              href="https://drive.google.com/file/d/1-c4WGWbTrnO4V06QF-XYMutbKCi-McE8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset-orange to-sunset-coral text-white px-8 py-3 rounded-full font-medium shadow-lg"
            >
              <FiDownload />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border-2 border-sunset-orange text-sunset-orange px-8 py-3 rounded-full font-medium hover:bg-sunset-orange hover:text-white transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Right Content - Profile Image */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-md mx-auto"
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-sunset-orange to-primary-400 rounded-full blur-3xl opacity-20 animate-pulse" />
            
            {/* Profile Image Container */}
            <div className="relative rounded-full overflow-hidden border-8 border-white shadow-2xl aspect-square">
              <Image
                src="/images/Karthikeya Annamraju.jpg"
                alt="Karthikeya Annamraju - Full Stack Developer"
                fill
                className="object-cover object-[15%_35%]"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sunset-orange text-3xl"
        >
          <FiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
