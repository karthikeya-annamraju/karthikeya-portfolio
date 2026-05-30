"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiBriefcase,
  FiLayers,
  FiGithub,
  FiMail,
  FiLinkedin,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navItems = [
  { name: "Home", href: "#home", icon: FiHome },
  { name: "Projects", href: "#projects", icon: FiFolder },
  { name: "About", href: "#about", icon: FiUser },
  { name: "Tech Stack", href: "#tech-stack", icon: FiLayers },
  { name: "Experience", href: "#experience", icon: FiBriefcase },
  { name: "GitHub", href: "#github", icon: FiGithub },
  { name: "Contact", href: "#contact", icon: FiMail },
];

const socials = [
  { href: "https://github.com/karthikeya-annamraju", icon: FiGithub, label: "GitHub" },
  {
    href: "https://linkedin.com/in/karthikeya-annamraju",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  { href: "mailto:avkarthikeya.dev@gmail.com", icon: FiMail, label: "Email" },
];

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const NavContent = () => (
    <>
      {/* Logo */}
      <a href="#home" className="mb-10 block px-3 group">
        <p className="font-mono text-lg font-bold tracking-tight">
          <span className="text-accent-purple">&gt;</span>{" "}
          <span className="text-ink">my</span>
          <span className="text-gradient">.portfolio</span>
          <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-[2px] animate-blink bg-accent-purple align-middle" />
        </p>
        <p className="mt-1 font-mono text-[11px] text-ink-faint">
          Sai Karthik Annamraju
        </p>
      </a>

      {/* Nav */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.href.slice(1);
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? "text-white bg-white/[0.06]"
                  : "text-ink-muted hover:text-ink hover:bg-white/[0.03]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-y-0 left-0 my-auto h-5 w-[3px] rounded-full bg-gradient-to-b from-accent-purple to-accent-blue"
                />
              )}
              <Icon
                className={`text-base transition-colors ${
                  isActive ? "text-accent-purple" : "group-hover:text-accent-purple"
                }`}
              />
              {item.name}
            </a>
          );
        })}
      </nav>

      {/* Socials */}
      <div className="mt-6 border-t border-white/[0.06] pt-5 px-1">
        <div className="flex items-center gap-4 px-2">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-ink-muted hover:text-accent-purple hover:-translate-y-0.5 transition-all text-lg"
              >
                <Icon />
              </a>
            );
          })}
        </div>
        <p className="mt-4 px-2 text-[11px] text-ink-faint font-mono">
          © 2026 Sai Karthik
        </p>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[260px] flex-col border-r border-white/[0.06] bg-dark-900/70 backdrop-blur-xl p-5 lg:flex">
        <NavContent />
      </aside>

      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-white/[0.06] bg-dark-900/80 backdrop-blur-xl px-4 py-3 lg:hidden">
        <a href="#home" className="font-mono text-sm font-bold tracking-tight">
          <span className="text-accent-purple">&gt;</span>{" "}
          <span className="text-ink">my</span>
          <span className="text-gradient">.portfolio</span>
        </a>
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="rounded-lg p-2 text-ink hover:bg-white/[0.06]"
        >
          <FiMenu className="text-xl" />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-white/[0.08] bg-dark-900 p-5 lg:hidden"
            >
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="absolute right-4 top-4 rounded-lg p-1.5 text-ink-muted hover:bg-white/[0.06]"
              >
                <FiX className="text-xl" />
              </button>
              <NavContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
