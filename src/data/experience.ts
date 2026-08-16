export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  badge: string;
  responsibilities: string[];
  skillsApplied: string[];
  impactSummary: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "nxtlogic-ml-intern",
    role: "Machine Learning Intern",
    company: "Nxtlogic Software Solutions",
    location: "Coimbatore, Tamil Nadu",
    period: "June 2025 – July 2025",
    type: "Internship",
    badge: "Machine Learning",
    responsibilities: [
      "Built automated image categorization solution to streamline visual asset classification.",
      "Developed an image classification model utilizing Python and deep learning frameworks.",
      "Preprocessed complex image datasets and executed strategic data augmentation techniques.",
      "Improved model accuracy and reduced overfitting across varied sample conditions.",
      "Produced a more reliable, scalable image classification pipeline for downstream integration."
    ],
    skillsApplied: ["Python", "Deep Learning", "Image Classification", "Data Augmentation", "Model Optimization"],
    impactSummary: "Delivered a robust image classification model with enhanced accuracy and lower generalization error through systematic data preprocessing and augmentation."
  },
  {
    id: "rinex-ds-intern",
    role: "Data Science Intern",
    company: "Rinex Technologies Pvt Ltd",
    location: "Bengaluru, Karnataka",
    period: "September 2024 – October 2024",
    type: "Internship",
    badge: "Data Science & BI",
    responsibilities: [
      "Worked extensively with raw and unstructured datasets to clean and structure information.",
      "Built interactive dashboards to visualize critical operational trends and performance metrics.",
      "Automated recurring reports to minimize manual intervention and streamline data workflows.",
      "Surfaced key business metrics enabling fast trend tracking and executive observability.",
      "Supported faster data-driven decisions and noticeably improved reporting turnaround times."
    ],
    skillsApplied: ["Data Science", "Automation", "Dashboard Design", "Data Preprocessing", "Reporting Workflows"],
    impactSummary: "Automated recurring report generation and created live dashboards that streamlined decision-making cycles and reporting turnaround."
  }
];
