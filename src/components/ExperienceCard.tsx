import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, CheckCircle2, TrendingUp } from 'lucide-react';
import { type ExperienceItem } from '../data/experience';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-[#060606] hover:bg-[#0c0c0c] border border-white/[0.08] hover:border-cyan-500/30 rounded-3xl p-7 sm:p-9 transition-all duration-300 glow-card-hover"
    >
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-950/40 text-cyan-300 border border-cyan-500/20">
              {experience.badge}
            </span>
            <span className="text-[11px] font-semibold text-[#777777] uppercase tracking-wider">
              {experience.type}
            </span>
          </div>

          <h3 className="font-syne font-bold text-2xl sm:text-3xl text-white group-hover:text-cyan-300 transition-colors">
            {experience.role}
          </h3>

          <p className="text-sm font-semibold text-white/90 mt-1">
            {experience.company}
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-1.5 text-xs text-[#888888]">
          <div className="flex items-center gap-1.5 font-medium text-white/80">
            <Calendar size={13} className="text-cyan-400" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-[#666666]" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {/* Responsibilities List */}
      <div className="py-6 space-y-3">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#666666] block">
          CORE RESPONSIBILITIES & WORKFLOW:
        </span>
        <div className="space-y-2.5">
          {experience.responsibilities.map((resp, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#aaaaaa] leading-relaxed">
              <CheckCircle2 size={15} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>{resp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Banner */}
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 mb-6">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
          <TrendingUp size={14} />
          <span>KEY OUTCOME & VALUE</span>
        </div>
        <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
          {experience.impactSummary}
        </p>
      </div>

      {/* Applied Skills Pills */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
        {experience.skillsApplied.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-xs font-medium bg-[#121212] text-[#cccccc] border border-white/[0.06]"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
