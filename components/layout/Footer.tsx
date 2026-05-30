"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/karthikeya-annamraju", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/karthikeya-annamraju",
    label: "LinkedIn",
  },
  { icon: FiMail, href: "mailto:avkarthikeya.dev@gmail.com", label: "Email" },
];

const Footer = () => {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/[0.06] px-5 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-mono text-xs text-ink-faint">
          © 2026 Sai Karthik Annamraju — built with{" "}
          <span className="text-accent-purple">Next.js</span> +{" "}
          <span className="text-accent-blue">Framer Motion</span>
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-ink-muted transition-colors hover:text-accent-purple"
              >
                <Icon className="text-lg" />
              </a>
            );
          })}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
            className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-ink hover:border-accent-purple/50 hover:text-accent-purple transition-all"
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
