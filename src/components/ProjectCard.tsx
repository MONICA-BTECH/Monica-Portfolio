import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import { IconGithub } from './SocialIcons';
import { type Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-[#070707] hover:bg-[#0c0c0c] border border-white/[0.08] hover:border-cyan-500/30 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col glow-card-hover"
    >
      {/* Visual Image Preview */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/80 border-b border-white/[0.06]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/30" />

        {/* Top Status & Category Badge */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/20">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-cyan-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            {project.status}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
        <div className="space-y-4">
          {/* Project Title and Number */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase block mb-1">
                PROJECT {project.number}
              </span>
              <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all group-hover:rotate-12"
              title="View on GitHub"
            >
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Subtitle */}
          <p className="text-sm font-medium text-[#cccccc]">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
            {project.description}
          </p>

          {/* Key Metrics / Highlights */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-2 pt-2 pb-1">
              {project.metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-2.5 text-center">
                  <span className="text-[10px] uppercase font-semibold text-[#777777] block">{m.label}</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-syne">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Key Functionalities Checklist */}
          <div className="space-y-2 pt-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777] block">
              KEY CAPABILITIES & FUNCTIONALITY:
            </span>
            <div className="space-y-1.5">
              {project.keyFeatures.map((feat) => (
                <div key={feat} className="flex items-start gap-2 text-xs text-[#a0a0a0]">
                  <CheckCircle size={13} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outcome & Tech Tags Footer */}
        <div className="space-y-4 pt-4 border-t border-white/[0.08]">
          <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              VERIFIED RESUME OUTCOME:
            </span>
            <p className="text-xs text-white/90 leading-relaxed font-normal">
              {project.outcome}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/[0.04] text-[#b0b0b0] border border-white/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full border border-white/20 hover:border-white/60 text-xs font-bold text-white uppercase tracking-wider hover:bg-white/5 transition-all duration-300"
            >
              <IconGithub size={15} />
              <span>Explore on GitHub</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
