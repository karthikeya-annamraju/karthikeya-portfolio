export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  achievements?: string[];
}

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "Aditya University",
    duration: "2022 - 2026",
    description: "Focused on full-stack development, AI/ML systems, and software engineering principles.",
    achievements: [
      "Relevant coursework: Data Structures, Algorithms, Database Systems, AI/ML",
      "Active participation in coding competitions and hackathons",
      "Built multiple production-ready applications during coursework"
    ]
  },
  {
    id: 2,
    degree: "Senior Secondary (CBSE) – PCM Stream",
    institution: "Lakshya International School",
    duration: "2020 - 2022",
    description: "Completed Senior Secondary Education under the CBSE curriculum.",
    achievements: [
      "Developed strong interest in programming and learnt Python during this period",
      "Built early mini-projects and explored basic programming concepts",
      "Excelled in core subjects: Physics, Chemistry, and Mathematics"
    ]
  },
  {
    id: 3,
    degree: "Secondary (CBSE) – Class 10",
    institution: "Little Woods School",
    duration: "2008 - 2020",
    description: "Completed Secondary Education under the CBSE curriculum.",
    achievements: [
      "Won multiple district and state level football tournaments across different years",
      "Consistent academic performer throughout schooling",
      "Developed an early interest in computers and technology"
    ]
  }
];
