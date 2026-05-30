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
    description:
      "Full-stack HR Management System with employee tracking, attendance management, and performance analytics.",
    techStack: ["Flutter", "Express.js", "MongoDB"],
    isPrivate: true,
    organizationName: "Technical Hub",
    image: "/images/projects/Hibi.jpg",
    highlights: [
      "Built scalable backend API with Express.js",
      "Implemented automated HR workflows including attendance, payroll, and leave approvals",
      "Designed responsive mobile UI with Flutter",
    ],
  },
  {
    id: 2,
    title: "EchoAI RAG Chatbot",
    description:
      "AI-powered chatbot using Retrieval-Augmented Generation for intelligent context-aware responses.",
    techStack: ["Python", "Flutter", "FastAPI", "Gemini API"],
    githubLink: "https://github.com/karthikeya-annamraju/echoai-rag-bot",
    isPrivate: false,
    organizationName: "Technical Hub",
    image: "/images/projects/echoai.jpg",
    highlights: [
      "Built a functional RAG-based chatbot using Gemini API",
      "Implemented cosine similarity search for accurate knowledge retrieval",
      "Optimized LLM prompts to deliver more context-aware responses",
    ],
  },
  {
    id: 3,
    title: "Subscription Tracker",
    description:
      "MongoDB-based subscription management system to track and manage recurring payments.",
    techStack: ["Node.js", "Express", "MongoDB", "Mongoose"],
    githubLink: "https://github.com/karthikeya-annamraju/subscription-tracker",
    isPrivate: false,
    image: "/images/projects/subscription.jpg",
    highlights: [
      "Designed efficient Mongoose schemas",
      "Built secure RESTful APIs with authentication and JWT authorization",
      "Integrated Arcjet rate limiting and automated renewal reminder workflows",
    ],
  },
];

// Helper function to get project display link
export const getProjectLink = (project: Project): string | null => {
  if (!project.isPrivate && project.githubLink) {
    return project.githubLink;
  }
  return null;
};
