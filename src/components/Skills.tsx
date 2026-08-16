import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Users } from 'lucide-react';
import { skillCategories, coreSkillBadges } from '../data/skills';

export const Skills: React.FC = () => {
  const getCategoryIcon = (categoryType: string) => {
    switch (categoryType) {
      case 'languages':
        return <Terminal size={20} className="text-cyan-400" />;
      case 'technical':
        return <Cpu size={20} className="text-emerald-400" />;
      case 'soft':
        return <Users size={20} className="text-purple-400" />;
      default:
        return <Terminal size={20} className="text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] w-full mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 mb-3">
            <span className="w-6 h-[1px] bg-cyan-400"></span>
            <span>CORE COMPETENCIES</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            Technical & Soft Skills
          </motion.h2>
        </div>

        <p className="text-xs sm:text-sm text-[#888888] max-w-md">
          A dedicated toolkit combining foundational programming with practical automation capabilities and communicative teamwork.
        </p>
      </div>

      {/* 3 Main Skill Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="group relative bg-[#060606] hover:bg-[#0c0c0c] border border-white/[0.08] hover:border-cyan-500/30 rounded-3xl p-7 md:p-8 flex flex-col justify-between transition-all duration-300 min-h-[300px] glow-card-hover"
          >
            <div>
              {/* Category Icon & Category Type */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300">
                  {getCategoryIcon(cat.categoryType)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#666666]">
                  {cat.skills.length} SKILLS
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-syne font-bold text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs text-[#888888] leading-relaxed mb-6">
                {cat.description}
              </p>
            </div>

            {/* Individual Skill Badges */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#111111] hover:bg-[#1a1a1a] text-[#cccccc] hover:text-white border border-white/[0.08] hover:border-white/20 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Core Competency Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-400">
            ENGINEERING SUMMARY
          </span>
          <p className="text-xs sm:text-sm text-white/90 font-medium">
            Verified technical stack derived directly from academic coursework and practical internship engagements.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {coreSkillBadges.map((badge) => (
            <div
              key={badge.name}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-cyan-400/40 text-xs font-medium text-[#cccccc] hover:text-white transition-all cursor-default"
            >
              <span className="text-cyan-400 font-bold text-[11px]">{badge.symbol}</span>
              <span>{badge.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
