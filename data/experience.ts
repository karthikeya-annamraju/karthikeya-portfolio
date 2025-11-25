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
    description:
      "Collaboratively engineered HiBi, a comprehensive HRMS platform built with Flutter, Express, and MongoDB.",
    responsibilities: [
      "Developed secure and scalable REST APIs using Node.js and Express",
      "Built responsive and user-friendly Flutter modules for attendance, payroll, and many employee dashboards",
      "Integrated MongoDB for reliable and structured employee data management",
      "Used Jira Scrum board for project management, sprint planning, and task tracking",
    ],
    technologies: ["Flutter", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 2,
    position: "Gen AI Intern",
    company: "Talentfarm.ai",
    duration: "2 months",
    location: "Hyderabad, India (On-site)",
    description:
      "Engineered Learnora, a Generative AI platform that delivered personalized learning paths using NLP-based recommendation systems.",
    responsibilities: [
      "Developed backend services using Flask for model inference and recommendation logic",
      "Implemented NLP pipelines and integrated Hugging Face BERT for personalized learning suggestions",
      "Built responsive frontend interfaces using React for chat, dashboards, and content navigation",
      "Integrated Firebase Authentication and MySQL for secure user management and preference storage",
      "Optimized model workflow and API design to improve response relevance and reduce latency",
    ],
    technologies: [
      "React.js",
      "Flask",
      "Firebase Auth",
      "MySQL",
      "Hugging Face",
    ],
  },
];
