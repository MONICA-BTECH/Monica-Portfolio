import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Bot, Sparkles, GraduationCap, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personal';

interface AboutProps {
  onOpenProfile?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenProfile }) => {
  const focusAreas = [
    {
      icon: <Brain className="text-cyan-400" size={22} />,
      title: "AI & Data Science",
      description: "Extracting actionable intelligence from complex datasets and designing machine learning classification pipelines."
    },
    {
      icon: <Bot className="text-emerald-400" size={22} />,
      title: "Intelligent Automation",
      description: "Building autonomous multi-agent workflows, scheduled task executors, and email triage systems that remove daily friction."
    },
    {
      icon: <Cpu className="text-purple-400" size={22} />,
      title: "API & System Integration",
      description: "Connecting disparate platforms through REST APIs, OCR modules, and asynchronous event streams."
    },
    {
      icon: <Sparkles className="text-amber-400" size={22} />,
      title: "Real-World Applications",
      description: "Transforming technical theories into tangible solutions—from healthcare medication assistants to smart inbox filters."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] w-full mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 mb-3">
            <span className="w-6 h-[1px] bg-cyan-400"></span>
            <span>BACKGROUND & PERSPECTIVE</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            About Me
          </motion.h2>
        </div>

        {onOpenProfile && (
          <button
            onClick={onOpenProfile}
            className="self-start md:self-end inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-white/50 text-xs font-bold text-white uppercase tracking-wider hover:bg-white/5 transition-all duration-300 cursor-pointer"
          >
            <span>View Full Credentials</span>
            <ArrowUpRight size={14} />
          </button>
        )}
      </div>

      {/* Main Narrative & Objective Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <h3 className="font-syne text-xl sm:text-2xl font-bold text-white mb-6">
            Career Objective & Philosophy
          </h3>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light mb-6">
            "{personalInfo.careerObjective}"
          </p>

          <p className="text-sm text-[#999999] leading-relaxed">
            Currently pursuing B.Tech in Artificial Intelligence and Data Science at VSB College of Engineering Technical Campus (2023–2027) with a cumulative CGPA of 8.5, focusing on turning complex algorithmic logic into high-impact automated tools.
          </p>
        </motion.div>

        {/* Quick Academic Snapshot Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-4 bg-[#080808] border border-white/10 p-8 rounded-3xl flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400">
              <GraduationCap size={24} />
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#777777]">
                ACADEMIC FOCUS
              </span>
              <h4 className="font-syne font-bold text-lg text-white mt-1">
                B.Tech. AI & Data Science
              </h4>
              <p className="text-xs text-[#999999] mt-1">
                VSB College of Engineering Technical Campus
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-semibold text-[#666666] tracking-wider block">
                CURRENT STANDING
              </span>
              <span className="text-2xl font-syne font-extrabold text-cyan-400">
                8.5 CGPA
              </span>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-300 border border-cyan-500/20">
              2023–2027
            </span>
          </div>
        </motion.div>
      </div>

      {/* 4 Pillars Focus Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {focusAreas.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group bg-[#060606] hover:bg-[#0c0c0c] border border-white/[0.08] hover:border-cyan-500/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-syne font-bold text-base text-white mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-[#888888] leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
