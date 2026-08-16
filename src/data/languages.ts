export interface LanguageItem {
  name: string;
  nativeScript: string;
  fluency: string;
  description: string;
}

export const languages: LanguageItem[] = [
  {
    name: "English",
    nativeScript: "English",
    fluency: "Professional Working Proficiency",
    description: "Fluent in technical documentation, professional communication, presentations, and collaborative teamwork."
  },
  {
    name: "Tamil",
    nativeScript: "தமிழ்",
    fluency: "Native / Bilingual Proficiency",
    description: "Native language proficiency with complete verbal and written fluency."
  }
];
