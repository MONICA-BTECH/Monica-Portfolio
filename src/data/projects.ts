export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  problem: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  outcome: string;
  metrics?: { label: string; value: string }[];
  image: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "smart-health-assistant",
    number: "01",
    title: "Smart Health Assistant",
    subtitle: "Automated Medication & Emergency Support System",
    category: "Intelligent Healthcare",
    status: "Working Prototype",
    problem:
      "Patients often miss doses or lose track of complex prescriptions, creating a critical need for an automated reminder-driven health-tracking solution.",
    description:
      "A smart health management application that automates medication adherence through prescription OCR scanning, intelligent scheduling reminders, missed-dose detection, and automated emergency SOS alerts.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "OCR",
      "AI",
      "Medication Reminders",
      "Automated SOS Alerts"
    ],
    keyFeatures: [
      "Prescription OCR optical scanning & digitisation",
      "Smart medication reminders & schedule tracking",
      "Automated emergency SOS alerts to emergency contacts",
      "Missed-dose detection & real-time notification alerts"
    ],
    outcome:
      "A working prototype that helped users stay on top of medication schedules and significantly reduced the risk of missed doses through real-time alerts.",
    metrics: [
      { label: "Core Feature", value: "Prescription OCR" },
      { label: "Safety Alert", value: "Real-time SOS" },
      { label: "Adherence", value: "Smart Scheduling" }
    ],
    image: "/images/smart_health.webp",
    githubUrl: "https://github.com/MONICA-BTECH",
    featured: true
  },
  {
    id: "ai-email-cleaner",
    number: "02",
    title: "AI Email Cleaner — Multi-Agent System",
    subtitle: "Autonomous Inbox Classification & Spam Elimination",
    category: "Multi-Agent AI & Automation",
    status: "Live Evaluated",
    problem:
      "Modern inboxes suffer from overwhelming clutter, repetitive promotional noise, and dangerous phishing/spam exposure that drains productivity.",
    description:
      "An autonomous multi-agent classification pipeline designed to reduce inbox clutter and spam exposure. Evaluated on a live Gmail account across thousands of incoming messages with state-of-the-art accuracy.",
    technologies: [
      "Python",
      "Multi-Agent System",
      "API Integration",
      "AI Classification",
      "Spam Detection Visualizer",
      "Automation"
    ],
    keyFeatures: [
      "Multi-agent collaborative email categorization pipeline",
      "Live Gmail API integration & asynchronous batch evaluation",
      "Interactive spam detection visualization & filtering dashboard",
      "Automated rule-based and intelligent triage routing"
    ],
    outcome:
      "Tested on a live Gmail account with 2,000+ emails processed, achieving a verified 99% detection accuracy and delivering an intuitive classification dashboard.",
    metrics: [
      { label: "Detection Accuracy", value: "99%" },
      { label: "Emails Processed", value: "2,000+" },
      { label: "Architecture", value: "Multi-Agent" }
    ],
    image: "/images/email_cleaner.webp",
    githubUrl: "https://github.com/MONICA-BTECH",
    featured: true
  }
];
