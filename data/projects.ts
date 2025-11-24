// Type definitions for better type safety
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string; // Optional for private projects
  isPrivate: boolean;
  organizationName?: string; // For private org projects
  image: string;
  highlights: string[]; // Key features or achievements
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "HiBi HRMS Application",
    description: "Full-stack HR Management System with employee tracking, attendance management, and performance analytics.",
    techStack: ["Flutter", "Express.js", "Firebase", "Firestore"],
    isPrivate: true,
    organizationName: "Technical Hub",
    image: "/images/projects/hrms.jpg",
    highlights: [
      "Built scalable backend API with Express.js",
      "Implemented real-time data sync with Firestore",
      "Designed responsive mobile UI with Flutter"
    ]
  },
  {
    id: 2,
    title: "EchoAI RAG Chatbot",
    description: "AI-powered chatbot using Retrieval-Augmented Generation for intelligent context-aware responses.",
    techStack: ["Python", "Hugging Face", "n8n", "Express.js", "Firebase"],
    isPrivate: true,
    organizationName: "Technical Hub",
    image: "/images/projects/echoai.jpg",
    highlights: [
      "Integrated Hugging Face transformer models",
      "Automated workflows with n8n",
      "Optimized LLM response times by 40%"
    ]
  },
  {
    id: 3,
    title: "Subscription Tracker",
    description: "MongoDB-based subscription management system to track and manage recurring payments.",
    techStack: ["Node.js", "Express", "MongoDB", "Mongoose"],
    githubLink: "https://github.com/yourusername/subscription-tracker",
    isPrivate: false,
    image: "/images/projects/subscription.jpg",
    highlights: [
      "Designed efficient Mongoose schemas",
      "RESTful API with CRUD operations",
      "Payment reminder notification system"
    ]
  }
];

// Helper function to get project display link
export const getProjectLink = (project: Project): string | null => {
  if (!project.isPrivate && project.githubLink) {
    return project.githubLink;
  }
  return null;
};
