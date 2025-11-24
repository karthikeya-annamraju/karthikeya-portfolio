"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold text-gradient cursor-pointer"
            >
              Karthikeya's Portfolio
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg text-gray-700 hover:text-sunset-orange transition-colors cursor-pointer"
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <SocialIcon href="https://github.com/karthikeya-annamraju" icon={<FiGithub />} />
            <SocialIcon href="https://linkedin.com/in/karthikeya-annamraju" icon={<FiLinkedin />} />
            <SocialIcon href="mailto:avkarthikeya.dev@gmail.com" icon={<FiMail />} />
          </div>

          {/* Mobile Menu Button - You can add hamburger menu here */}
          <div className="md:hidden">
            {/* Add mobile menu implementation if needed */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Reusable Social Icon Component
const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-700 hover:text-sunset-orange text-xl transition-colors"
  >
    {icon}
  </motion.a>
);

export default Navbar;
