export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  icon?: string; // Can use react-icons
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "Flutter", level: 90, category: "Frontend" },
      { name: "React.js", level: 85, category: "Frontend" },
      { name: "Next.js", level: 80, category: "Frontend" },
      { name: "Tailwind CSS", level: 85, category: "Frontend" },
      { name: "Dart", level: 90, category: "Frontend" },
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 85, category: "Backend" },
      { name: "Express.js", level: 88, category: "Backend" },
      { name: "MongoDB", level: 80, category: "Backend" },
      { name: "Firebase", level: 85, category: "Backend" },
      { name: "Firestore", level: 82, category: "Backend" },
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Python", level: 80, category: "AI/ML" },
      { name: "Hugging Face", level: 75, category: "AI/ML" },
      { name: "LLM Integration", level: 78, category: "AI/ML" },
      { name: "RAG Systems", level: 75, category: "AI/ML" },
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 90, category: "Tools" },
      { name: "VSCode", level: 95, category: "Tools" },
      { name: "n8n", level: 75, category: "Tools" },
      { name: "Postman", level: 85, category: "Tools" },
    ]
  }
];
