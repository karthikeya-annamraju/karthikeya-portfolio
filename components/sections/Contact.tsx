"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/animations/AnimationWrappers";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Contact information
  const contactInfo = [
    {
      icon: <FiMail className="text-2xl" />,
      label: "Email",
      value: "avkarthikeya.dev@gmail.com",
      href: "mailto:avkarthikeya.dev@gmail.com"
    },
    {
      icon: <FiPhone className="text-2xl" />,
      label: "Phone",
      value: "+91 70935 25079",
      href: "tel:+917093525079"
    },
    {
      icon: <FiLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "Karthikeya Annamraju",
      href: "https://linkedin.com/in/karthikeya-annamraju"
    },
    {
      icon: <FiGithub className="text-2xl" />,
      label: "GitHub",
      value: "@karthikeya-annamraju",
      href: "https://github.com/karthikeya-annamraju"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement your form submission logic here
    // For now, simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container">
      <FadeInUp>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Let's discuss how we can work together on your next project
          </p>
        </div>
      </FadeInUp>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <FadeInLeft>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-6">
                Feel free to reach out through any of these channels. I'm always 
                open to discussing new projects, opportunities, or collaborations.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.15)" }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-md hover:border-sunset-orange transition-all"
                >
                  <div className="text-sunset-orange">{info.icon}</div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="text-gray-800 font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Decorative Element */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="hidden md:block mt-12 w-64 h-64 mx-auto"
            >
              <div className="w-full h-full bg-gradient-to-br from-sunset-orange/20 to-sunset-coral/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </FadeInLeft>

        {/* Contact Form */}
        <FadeInRight>
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent transition-all outline-none"
                  placeholder="Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent transition-all outline-none"
                  placeholder="name@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent transition-all outline-none"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : submitStatus === "success"
                    ? "bg-green-500"
                    : "bg-gradient-to-r from-sunset-orange to-sunset-coral hover:shadow-xl"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : submitStatus === "success" ? (
                  "Message Sent Successfully!"
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </FadeInRight>
      </div>
    </section>
  );
};

export default Contact;
