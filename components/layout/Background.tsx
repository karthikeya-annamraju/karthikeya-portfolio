"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  left: (i * 37) % 100,
  top: (i * 53) % 100,
  size: (i % 3) + 1,
  duration: 12 + (i % 8) * 2,
  delay: (i % 5) * 1.5,
}));

const Background = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 300}px, ${
          e.clientY - 300
        }px)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-dark-950" />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial vignette glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent-purple/15 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-accent-blue/12 blur-[120px]" />
      <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />

      {/* Mouse-follow glow */}
      {mounted && (
        <div
          ref={glowRef}
          className="absolute w-[600px] h-[600px] rounded-full bg-accent-purple/[0.07] blur-[100px] will-change-transform"
          style={{ left: 0, top: 0 }}
        />
      )}

      {/* Floating particles */}
      {mounted &&
        PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-accent-blue/40"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
    </div>
  );
};

export default Background;
