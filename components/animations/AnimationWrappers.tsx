"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// Fade in from bottom animation
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Fade in from sides
export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Scale animation
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Component wrappers for easy reuse
interface AnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInUp = ({ children, className = "", delay = 0 }: AnimationWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInLeft = ({ children, className = "", delay = 0 }: AnimationWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInLeft}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInRight = ({ children, className = "", delay = 0 }: AnimationWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInRight}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, className = "", delay = 0 }: AnimationWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={scaleIn}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className = "" }: AnimationWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainer}
    className={className}
  >
    {children}
  </motion.div>
);
