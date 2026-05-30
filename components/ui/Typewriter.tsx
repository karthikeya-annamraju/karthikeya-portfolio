"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}

const Typewriter = ({
  words,
  className = "",
  typeSpeed = 90,
  deleteSpeed = 45,
  pause = 1600,
}: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {words[index % words.length].substring(0, subIndex)}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-blink bg-accent-purple align-middle" />
    </span>
  );
};

export default Typewriter;
