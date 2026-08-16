export interface PersonalInfo {
  name: string;
  fullName: string;
  logoText: string;
  role: string;
  headlineLine1: string;
  headlineLine2: string;
  headlineLine3: string;
  location: string;
  availableForWork: boolean;
  careerObjective: string;
  supportingMessage: string;
  aboutHighlights: string[];
  contactEmail: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  academicBackground: {
    degree: string;
    institution: string;
    duration: string;
    cgpa: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "MONICA G",
  fullName: "Monica G",
  logoText: "MONICA G.",
  role: "AI & Data Science Enthusiast",
  headlineLine1: "BUILDING",
  headlineLine2: "INTELLIGENT",
  headlineLine3: "SOLUTIONS.",
  location: "Tamil Nadu, India",
  availableForWork: true,
  careerObjective:
    "AI & Data Science enthusiast who builds solutions that simplify everyday life—from automated email agents to smart reminder systems. Blending logic, data, and creativity to develop meaningful tech applications, with a goal of transforming ideas into impactful, real-world innovations.",
  supportingMessage:
    "Blending logic, data, and creativity to develop meaningful tech applications—transforming ideas into impactful, real-world innovations.",
  aboutHighlights: [
    "Artificial Intelligence",
    "Data Science",
    "Automation",
    "API Integration",
    "Machine Learning",
    "Intelligent Applications"
  ],
  contactEmail: "monica2005btech@gmail.com",
  socials: {
    github: "https://github.com/MONICA-BTECH",
    linkedin: "https://linkedin.com/in/monica-g-0a10ba327",
    email: "mailto:monica2005btech@gmail.com"
  },
  academicBackground: {
    degree: "B.Tech. Artificial Intelligence and Data Science",
    institution: "VSB College of Engineering Technical Campus",
    duration: "2023–2027",
    cgpa: "8.5"
  }
};
