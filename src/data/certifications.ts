export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  badge: string;
  description: string;
}

export const certifications: CertificationItem[] = [
  {
    id: "nptel-safe-ai",
    title: "Responsible and Safe AI Systems",
    issuer: "NPTEL",
    category: "AI Ethics & Safety",
    badge: "Verified Certificate",
    description: "In-depth certification covering ethical AI deployment, safety alignment, bias mitigation, and responsible machine learning practices."
  },
  {
    id: "nptel-digital-marketing",
    title: "Fundamentals of Digital Marketing",
    issuer: "NPTEL",
    category: "Digital Growth",
    badge: "Verified Certificate",
    description: "Comprehensive foundation in digital outreach strategies, user engagement channels, performance analytics, and data-driven marketing."
  },
  {
    id: "novitech-data-science",
    title: "Data Science Course",
    issuer: "Novitech R&D Pvt Ltd",
    category: "Applied Data Science",
    badge: "Industrial Training",
    description: "Hands-on industrial program focused on exploratory data analysis, feature engineering, predictive modeling, and real-world dataset pipelines."
  }
];
