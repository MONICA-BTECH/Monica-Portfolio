export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  isCurrent?: boolean;
  highlights: string[];
}

export const educationList: EducationItem[] = [
  {
    id: "btech-ai-ds",
    degree: "B.Tech. Artificial Intelligence & Data Science",
    institution: "VSB College of Engineering Technical Campus",
    location: "Coimbatore, Tamil Nadu",
    period: "2023 – 2027",
    scoreLabel: "Cumulative CGPA",
    scoreValue: "8.5 / 10",
    isCurrent: true,
    highlights: [
      "Specialization in Artificial Intelligence, Machine Learning & Data Science architectures.",
      "Hands-on coursework in Automation, Algorithmic Analysis, and Data Engineering.",
      "Consistently maintaining strong academic standing with 8.5 CGPA."
    ]
  },
  {
    id: "hsc-pmg",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "PMG Matric Higher Secondary School",
    location: "Coimbatore, Tamil Nadu",
    period: "2022 – 2023",
    scoreLabel: "Board Percentage",
    scoreValue: "83.5%",
    highlights: [
      "Completed higher secondary education with strong foundation in Mathematics and Sciences.",
      "Secured 83.5% in state board examinations."
    ]
  },
  {
    id: "sslc-pmg",
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "PMG Matric Higher Secondary School",
    location: "Coimbatore, Tamil Nadu",
    period: "2020 – 2021",
    scoreLabel: "Result",
    scoreValue: "All Pass",
    highlights: [
      "Completed secondary schooling with comprehensive academic engagement.",
      "Strong foundational aptitude in mathematics and logical problem-solving."
    ]
  }
];
