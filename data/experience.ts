export interface Experience {
  id: number;
  position: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: 1,
    position: "Software Engineer Intern",
    company: "PASS Consulting Group",
    duration: "Oct 2025 – Present",
    location: "Remote (Germany)",
    description:
      "Building enterprise-grade travel modules for an international German client using Spring Boot microservices and Flutter.",
    responsibilities: [
      "Developed enterprise-grade travel modules using Spring Boot microservices and Flutter, improving data retrieval speed by 20% through PostgreSQL query optimization",
      "Managed end-to-end task lifecycles in an Agile/Scrum environment, maintaining a 100% sprint completion rate over 3 months using Jira",
      "Interfaced with German stakeholders to translate complex business requirements into technical specifications, aligning delivery with international client standards",
    ],
    technologies: ["Spring Boot", "Microservices", "Flutter", "PostgreSQL", "Jira"],
  },
  {
    id: 2,
    position: "Full Stack Mobile App Developer",
    company: "Technical Hub",
    duration: "Aug 2025 – Nov 2025",
    location: "Andhra Pradesh, IN (On-site)",
    description:
      "Built HiBi, a production HRMS mobile platform with Flutter, Express.js and MongoDB, automating HR workflows for 500+ employees.",
    responsibilities: [
      "Built a production HRMS mobile app using Flutter and Express.js, automating payroll for 500+ employees",
      "Reduced manual HR processing errors by 30% by architecting automated approval workflows and RESTful APIs",
      "Optimized data persistence using MongoDB, reducing application latency by 15%",
      "Used Jira Scrum board for sprint planning and task tracking",
    ],
    technologies: ["Flutter", "Express.js", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    position: "Generative AI Intern",
    company: "IL Talentfarm LLP",
    duration: "May 2025 – Jul 2025",
    location: "Hyderabad, IN (On-site)",
    description:
      "Architected Learnora, a GenAI learning platform delivering real-time, personalized NLP-driven learning paths.",
    responsibilities: [
      "Architected Learnora, a GenAI learning platform, integrating Hugging Face transformers and PyTorch for real-time NLP recommendations",
      "Scaled backend services using Flask and React, resulting in a 40% increase in user engagement through personalized ML-driven paths",
    ],
    technologies: ["Python", "Flask", "React", "Hugging Face", "PyTorch"],
  },
];
