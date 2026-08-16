import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { IconGithub } from './SocialIcons';
import { projects, type Project } from '../data/projects';
import { personalInfo } from '../data/personal';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  return (
    <section id="projects" className="py-24 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] w-full mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 mb-3">
            <span className="w-6 h-[1px] bg-cyan-400"></span>
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            Featured Projects
          </motion.h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-[#666666] tracking-widest uppercase">
            ({projects.length.toString().padStart(2, '0')} VERIFIED PROJECTS)
          </span>
        </div>
      </div>

      {/* Interactive Master-Detail Split Layout (Reference Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-10">
        {/* Left Sticky Preview Card */}
        <div className="lg:col-span-6 lg:sticky lg:top-28 lg:self-start">
          <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#080808] shadow-2xl glow-card">
            {/* Image Preview with Smooth Transition */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProject.id}
                  src={activeProject.image}
                  alt={activeProject.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/40" />

              {/* Status Pill */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/20">
                  {activeProject.category}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-cyan-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  {activeProject.status}
                </span>
              </div>
            </div>

            {/* Details Panel */}
            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase block mb-1">
                  PROJECT {activeProject.number}
                </span>
                <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
                  {activeProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#888888] mt-1 font-medium">
                  {activeProject.subtitle}
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeProject.id + '-desc'}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-xs sm:text-sm text-white/90 leading-relaxed"
                >
                  {activeProject.description}
                </motion.p>
              </AnimatePresence>

              {/* Key Features List */}
              <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777] block">
                  KEY CAPABILITIES:
                </span>
                <div className="space-y-1.5">
                  {activeProject.keyFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-[#a0a0a0]">
                      <CheckCircle2 size={13} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Outcome Banner */}
              <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  VERIFIED IMPACT:
                </span>
                <p className="text-xs text-white/90 leading-relaxed">
                  {activeProject.outcome}
                </p>
              </div>

              {/* Technologies & GitHub CTA */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/[0.05] text-[#b0b0b0] border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Scrollable Project Selector Cards */}
        <div className="lg:col-span-6 space-y-6">
          {projects.map((proj) => {
            const isSelected = activeProject.id === proj.id;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setActiveProject(proj)}
                onClick={() => setActiveProject(proj)}
                className={`group cursor-pointer p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#0e0e0e] border-cyan-500/40 shadow-2xl shadow-cyan-950/20'
                    : 'bg-[#060606] hover:bg-[#0a0a0a] border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Number & Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-xs font-bold text-cyan-400">
                      {proj.number}
                    </span>
                    <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider">
                      {proj.category}
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] text-[#888888] border border-white/[0.06]">
                    {proj.status}
                  </span>
                </div>

                <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed mb-6">
                  {proj.problem}
                </p>

                {/* Metrics Highlights Bar */}
                {proj.metrics && (
                  <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-6">
                    {proj.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <span className="text-[9px] uppercase font-semibold text-[#666666] block">{m.label}</span>
                        <span className="text-xs sm:text-sm font-bold text-white font-syne">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs">
                  <span className="text-cyan-400 font-semibold flex items-center gap-1">
                    <span>{isSelected ? 'Currently Viewing' : 'Click to View Details'}</span>
                    <ArrowUpRight size={14} />
                  </span>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-[#aaaaaa] hover:text-white font-medium transition-colors"
                  >
                    <IconGithub size={14} />
                    <span>Repository</span>
                  </a>
                </div>
              </motion.div>
            );
          })}

          {/* GitHub Repository CTA */}
          <div className="pt-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full border border-white/20 hover:border-white/60 text-xs font-bold text-white uppercase tracking-wider hover:bg-white/5 transition-all duration-300"
            >
              <IconGithub size={16} />
              <span>EXPLORE ALL REPOSITORIES ON GITHUB</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
