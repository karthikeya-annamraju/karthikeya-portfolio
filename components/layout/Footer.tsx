"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/karthikeya-annamraju", label: "GitHub" },
    { icon: <FiLinkedin />, href: "https://linkedin.com/in/karthikeya-annamraju", label: "LinkedIn" },
    { icon: <FiMail />, href: "mailto:avkarthikeya.dev@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sunset-orange via-sunset-coral to-primary-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient">Karthikeya Annamraju</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions 
              with modern technologies and AI integration.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-sunset-orange text-xl transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-sunset-orange transition-all cursor-pointer inline-block"
                    >
                      → {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 avkarthikeya.dev@gmail.com</p>
              <p>📱 +91 70935 25079</p>
              <p>📍 Hyderabad, India</p>
            </div>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-sunset-orange to-sunset-coral rounded-full text-white font-medium shadow-lg"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm flex items-center gap-2"
          >
            © {currentYear} Karthikeya. Made using Next.js & Framer Motion<FiHeart className="text-sunset-orange" />
          </motion.p>
          
          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-sunset-orange rounded-full text-white shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Scroll to top"
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
