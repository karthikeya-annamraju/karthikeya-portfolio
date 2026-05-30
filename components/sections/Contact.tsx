"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiMapPin,
} from "react-icons/fi";
import { SectionLabel, Reveal } from "@/components/ui/Primitives";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "avkarthikeya.dev@gmail.com",
    href: "mailto:avkarthikeya.dev@gmail.com",
  },
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
    value: "India",
    href: "#contact",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1400);
  };

  const inputClass =
    "w-full rounded-lg border border-white/[0.08] bg-dark-900/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-all focus:border-accent-purple/60 focus:ring-1 focus:ring-accent-purple/40";

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

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* Contact info */}
        <Reveal>
          <div className="flex h-full flex-col gap-3">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const external = info.href.startsWith("http");
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 rounded-xl glass px-5 py-4 hover:border-accent-purple/40 transition-all"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-purple/10 text-accent-purple">
                    <Icon className="text-lg" />
                  </span>
                  <div>
                    <p className="text-xs text-ink-faint">{info.label}</p>
                    <p className="font-mono text-sm text-ink">{info.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl glass p-6 sm:p-8"
          >
            <h3 className="mb-5 font-display text-lg font-semibold">
              Send a Message
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className={inputClass}
              />
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..."
                className={`${inputClass} resize-none`}
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex w-full items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-semibold text-white transition-all ${
                  submitStatus === "success"
                    ? "bg-green-500"
                    : "bg-gradient-to-r from-accent-purple to-accent-blue shadow-glow disabled:opacity-60"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : submitStatus === "success" ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    Send Message <FiSend />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
