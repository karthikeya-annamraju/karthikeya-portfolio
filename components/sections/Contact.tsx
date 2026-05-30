"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";
import { SectionLabel, Reveal } from "@/components/ui/Primitives";

const EMAIL = "avkarthikeya.dev@gmail.com";

const contactLinks = [
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "in/karthikeya-annamraju",
    href: "https://linkedin.com/in/karthikeya-annamraju",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "@karthikeya-annamraju",
    href: "https://github.com/karthikeya-annamraju",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 70935 25079",
    href: "tel:+917093525079",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "India · Remote",
    href: "#contact",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <SectionLabel index="07" title="Contact" />

      <Reveal>
        <h2 className="flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl">
          <FiMail className="text-accent-purple" /> Let&apos;s Connect
        </h2>
        <p className="mt-2 text-ink-muted">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* Featured CTA panel */}
        <Reveal className="lg:col-span-1">
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl glass p-7">
            {/* decorative glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent-purple/20 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-ink-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                Available for opportunities
              </span>

              <h3 className="mt-5 font-display text-2xl font-bold leading-snug">
                Let&apos;s build something{" "}
                <span className="text-gradient">great</span> together.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                I&apos;m always open to discussing new projects, internships, or
                collaborations. The fastest way to reach me is email.
              </p>
            </div>

            <motion.a
              href={`mailto:${EMAIL}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue px-6 py-3.5 text-sm font-semibold text-white shadow-glow"
            >
              <FiMail /> Say Hello <FiArrowRight />
            </motion.a>
            <p className="relative mt-3 text-center font-mono text-[11px] text-ink-faint">
              {EMAIL}
            </p>
          </div>
        </Reveal>

        {/* Contact links grid */}
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="grid h-full gap-4 sm:grid-cols-2">
            {contactLinks.map((info) => {
              const Icon = info.icon;
              const external = info.href.startsWith("http");
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col justify-between gap-6 rounded-2xl glass p-6 transition-all hover:border-accent-purple/40 hover:shadow-glow"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-purple/10 text-accent-purple transition-colors group-hover:bg-accent-purple/20">
                    <Icon className="text-xl" />
                  </span>
                  <div>
                    <p className="text-xs text-ink-faint">{info.label}</p>
                    <p className="mt-0.5 break-all font-mono text-sm text-ink">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
