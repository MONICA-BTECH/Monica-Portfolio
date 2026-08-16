export interface SkillCategory {
  title: string;
  categoryType: 'languages' | 'technical' | 'soft';
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    categoryType: "languages",
    description: "Core languages used for backend logic, algorithmic problem-solving, and machine learning pipelines.",
    skills: ["Java", "Python"]
  },
  {
    title: "Technical Capabilities",
    categoryType: "technical",
    description: "Applied engineering skills for intelligent automation, scheduling, and system connectivity.",
    skills: ["Automation", "API Integration", "Time-based Task Scheduling"]
  },
  {
    title: "Professional & Soft Skills",
    categoryType: "soft",
    description: "Core collaborative attributes enabling fast adaptation and cross-functional execution.",
    skills: ["Team Collaboration", "Effective Communication", "Quick Learner"]
  }
];

export interface CoreBadge {
  name: string;
  symbol: string;
  category: string;
}

export const coreSkillBadges: CoreBadge[] = [
  { name: "Python", symbol: "Py", category: "Language" },
  { name: "Java", symbol: "☕", category: "Language" },
  { name: "Automation", symbol: "⚡", category: "Technical" },
  { name: "API Integration", symbol: "⇄", category: "Technical" },
  { name: "Task Scheduling", symbol: "⏱", category: "Technical" },
  { name: "Team Collaboration", symbol: "🤝", category: "Soft Skill" },
  { name: "Effective Communication", symbol: "💬", category: "Soft Skill" },
  { name: "Quick Learner", symbol: "🚀", category: "Soft Skill" }
];
