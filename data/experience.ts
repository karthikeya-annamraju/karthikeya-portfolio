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
    position: "Full Stack Developer Intern",
    company: "Technical Hub Pvt Ltd",
    duration: "3 months",
    location: "On-site",
    description: "Collaboratively engineered HiBi, a comprehensive HRMS platform built with Flutter, Express, and MongoDB.",
    responsibilities: [
      "Developed and optimized REST APIs using Node.js and Express for HR workflows",
      "Built and enhanced Flutter modules for attendance, payroll, and employee dashboards",
      "Integrated MongoDB for secure and scalable employee data management",
      "Implemented automation for leave approvals, attendance tracking, and report generation",
      "Collaborated with cross-functional teams to design self-service portals and performance visibility dashboards"
    ],
    technologies: ["Flutter", "Node.js", "Express.js", "MongoDB", "Firebase", "JavaScript", "REST APIs"]
  }, 
  {
    id: 2,
    position: "Gen AI Intern",
    company: "Talentfarm.ai",
    duration: "2 months",
    location: "On-site",
    description: "Contributed to production-level applications including HRMS, AI chatbot, and sports management systems.",
    responsibilities: [
      "Developed scalable REST APIs using Express.js and Node.js",
      "Built cross-platform mobile applications with Flutter",
      "Integrated Firebase and Firestore for real-time data management",
      "Collaborated with team on AI-powered RAG chatbot using Hugging Face models",
      "Implemented responsive UI/UX designs with focus on mobile-first approach"
    ],
    technologies: ["Flutter", "Express.js", "Firebase", "Node.js", "MongoDB", "Python", "Hugging Face"]
  }
];
