import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, Briefcase, Award, Languages, Mail, CheckCircle2, Sparkles } from 'lucide-react';
import { IconGithub, IconLinkedin } from './SocialIcons';
import { personalInfo } from '../data/personal';
import { skillCategories } from '../data/skills';
import { experiences } from '../data/experience';
import { educationList } from '../data/education';
import { certifications } from '../data/certifications';
import { languages } from '../data/languages';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#090909] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto z-10 space-y-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Header / Identity */}
            <div className="space-y-4 border-b border-white/[0.08] pb-8">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                  VERIFIED CANDIDATE PROFILE
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Available for Opportunities
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <img
                  src="/images/portrait_monica.jpg"
                  alt={personalInfo.fullName}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-cyan-500/30 shadow-lg shadow-cyan-950/20"
                />
                <div>
                  <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white">
                    {personalInfo.fullName}
                  </h2>
                  <p className="text-sm font-semibold text-cyan-400 tracking-wide mt-1">
                    {personalInfo.role} • {personalInfo.location}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#aaaaaa] leading-relaxed max-w-2xl">
                {personalInfo.careerObjective}
              </p>

              {/* Contact Links Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={personalInfo.socials.email}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-colors"
                >
                  <Mail size={14} className="text-cyan-400" />
                  <span>{personalInfo.contactEmail}</span>
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-colors"
                >
                  <IconGithub size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-colors"
                >
                  <IconLinkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <GraduationCap size={16} />
                <span>Education Background</span>
              </div>

              <div className="space-y-3">
                {educationList.map((edu) => (
                  <div key={edu.id} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-syne font-bold text-base text-white">{edu.degree}</h4>
                      <p className="text-xs text-[#888888]">{edu.institution} • {edu.location}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-xs font-bold text-cyan-400">{edu.scoreLabel}: {edu.scoreValue}</span>
                      <p className="text-[11px] text-[#666666]">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Internships */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Briefcase size={16} />
                <span>Internships & Experience</span>
              </div>

              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-syne font-bold text-base text-white">{exp.role}</h4>
                        <p className="text-xs text-white/80 font-medium">{exp.company} — {exp.location}</p>
                      </div>
                      <span className="text-xs text-cyan-400 font-semibold">{exp.period}</span>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {exp.responsibilities.map((r, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#aaaaaa]">
                          <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Certifications Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Skills */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                  <Sparkles size={16} />
                  <span>Technical & Soft Skills</span>
                </div>

                <div className="space-y-3">
                  {skillCategories.map((cat) => (
                    <div key={cat.title} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4">
                      <span className="text-[11px] font-bold text-white uppercase block mb-2">{cat.title}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((s) => (
                          <span key={s} className="px-2.5 py-1 rounded-full text-[11px] bg-white/[0.05] text-[#cccccc] border border-white/[0.08]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Languages */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                    <Award size={16} />
                    <span>Certifications</span>
                  </div>
                  {certifications.map((c) => (
                    <div key={c.id} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4">
                      <h5 className="text-xs font-bold text-white">{c.title}</h5>
                      <p className="text-[11px] text-cyan-400 font-semibold">{c.issuer}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400">
                    <Languages size={16} />
                    <span>Languages</span>
                  </div>
                  <div className="flex gap-2">
                    {languages.map((l) => (
                      <div key={l.name} className="flex-1 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-3 text-center">
                        <span className="text-xs font-bold text-white block">{l.name}</span>
                        <span className="text-[10px] text-[#888888]">{l.fluency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
              >
                Close Profile
              </button>

              <a
                href={personalInfo.socials.email}
                className="bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#e2e2e2] transition-colors"
              >
                Contact Monica
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
