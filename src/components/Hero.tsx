import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowDownRight, ArrowUpRight, Sparkles, Mail, Bot } from 'lucide-react';
import { IconGithub, IconLinkedin } from './SocialIcons';
import { personalInfo } from '../data/personal';

interface HeroProps {
  onOpenProfile?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProfile }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-10 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] w-full mx-auto"
    >
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute top-1/4 right-5 w-[700px] h-[700px] bg-cyan-950/20 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-5 w-[600px] h-[600px] bg-emerald-950/15 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* Top Meta Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap items-center justify-between gap-4 text-xs tracking-widest text-[#888888] font-medium border-b border-white/[0.08] pb-4"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-cyan-400/60"></span>
          <span className="uppercase text-white tracking-[0.22em] font-bold text-xs">
            {personalInfo.name}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] uppercase font-semibold bg-white/[0.06] text-cyan-400 border border-cyan-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            {personalInfo.role}
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-cyan-400/80" />
            <span className="text-white/80 font-medium">{personalInfo.location}</span>
          </div>

          {personalInfo.availableForWork && (
            <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3.5 py-1 rounded-full shadow-lg shadow-emerald-950/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-300 font-semibold text-[11px] tracking-wider uppercase">
                Available for Roles
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Main Hero Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto py-6 sm:py-8">
        {/* Left Column: Hero Content & Monumental Typography */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-cyan-400 uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse" />
            <span>AI & DATA SCIENCE ENTHUSIAST</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-syne font-extrabold uppercase leading-[0.96] text-[clamp(2.3rem,4.5vw,4.8rem)] tracking-tight"
          >
            <span className="block text-white">
              BUILDING
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-cyan-300">
              INTELLIGENT
            </span>
            <span className="block text-cyan-400">
              SOLUTIONS.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base lg:text-[1.05rem] text-[#bbbbbb] leading-relaxed max-w-2xl font-light"
          >
            {personalInfo.careerObjective}
          </motion.p>

          {/* Key Capability Tag Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {['Autonomous Agents', 'API Integration', 'Machine Learning', 'Task Scheduling', 'Data Engineering'].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-[#cccccc] border border-white/[0.08] hover:border-cyan-500/30 transition-colors"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>

          {/* Action CTAs & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <button
              onClick={scrollToProjects}
              className="group flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#e4e4e4] transition-all duration-300 shadow-xl hover:shadow-cyan-950/20 cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowDownRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
              />
            </button>

            <button
              onClick={scrollToContact}
              className="group flex items-center gap-2 bg-transparent text-white border border-white/20 hover:border-white/60 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/5 transition-all duration-300 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>

            {onOpenProfile && (
              <button
                onClick={onOpenProfile}
                className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer hover:shadow-lg hover:shadow-cyan-950/40"
              >
                <span>Full Profile</span>
                <Sparkles size={14} />
              </button>
            )}

            {/* Social Icons Bar */}
            <div className="flex items-center gap-2 sm:pl-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-10 h-10 rounded-full bg-[#0c0c0c] hover:bg-[#1a1a1a] border border-white/15 hover:border-cyan-500/40 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105"
              >
                <IconGithub size={16} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#0c0c0c] hover:bg-[#1a1a1a] border border-white/15 hover:border-cyan-500/40 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105"
              >
                <IconLinkedin size={16} />
              </a>
              <a
                href={personalInfo.socials.email}
                title="Email Monica"
                className="w-10 h-10 rounded-full bg-[#0c0c0c] hover:bg-[#1a1a1a] border border-white/15 hover:border-cyan-500/40 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105"
              >
                <Mail size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Hero Visual Showcase Card with Monica's Selected Casual Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-end relative"
        >
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px]">
            {/* Ambient Multi-Layer Aura Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/25 via-slate-700/20 to-emerald-500/25 rounded-[2.5rem] blur-2xl opacity-75 pointer-events-none -z-10" />

            {/* Main Portrait Frame Card */}
            <div className="relative rounded-[2rem] overflow-hidden border border-white/15 bg-[#090909] shadow-2xl glow-card">
              {/* Portrait Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/40">
                <img
                  src="/images/portrait_monica.jpg"
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Bottom Card Summary Banner */}
              <div className="p-4 sm:p-5 bg-[#090909]/95 backdrop-blur-xl border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-syne font-bold text-base sm:text-lg text-white">
                    {personalInfo.fullName}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium tracking-wide">
                    {personalInfo.role}
                  </p>
                </div>

                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>8.5 CGPA</span>
                </span>
              </div>
            </div>

            {/* Floating Glassmorphism Badge 1: Top-Left Academic Highlight */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -top-3 -left-3 sm:-left-5 glass-panel px-3.5 py-2 rounded-2xl flex items-center gap-2.5 text-xs text-white border border-cyan-500/30 shadow-2xl shadow-black/80"
            >
              <div className="w-7 h-7 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Sparkles size={14} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-cyan-400 block tracking-wider">
                  Academic Focus
                </span>
                <span className="font-semibold text-white/90 text-[11px] sm:text-xs">
                  B.Tech AI & DS (8.5 CGPA)
                </span>
              </div>
            </motion.div>

            {/* Floating Glassmorphism Badge 2: Bottom-Right Multi-Agent Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-3 -right-2 sm:-right-4 glass-panel px-3.5 py-2 rounded-2xl hidden sm:flex items-center gap-2.5 text-xs text-white border border-emerald-500/30 shadow-2xl shadow-black/80"
            >
              <div className="w-7 h-7 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Bot size={14} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-emerald-400 block tracking-wider">
                  Core Specialization
                </span>
                <span className="font-semibold text-white/90 text-[11px] sm:text-xs">
                  Multi-Agent Automation
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Quick-Metric Strip Spanning Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-5 border-t border-white/[0.08]"
      >
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#777777] block">
            Academic CGPA
          </span>
          <span className="font-syne font-extrabold text-base sm:text-lg text-white">
            8.5 / 10.0
          </span>
          <span className="text-[11px] text-[#999999] block mt-0.5">VSB Engineering Campus</span>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#777777] block">
            Core AI Projects
          </span>
          <span className="font-syne font-extrabold text-base sm:text-lg text-cyan-400">
            2+ Deployed Systems
          </span>
          <span className="text-[11px] text-[#999999] block mt-0.5">Email Agents & Medication</span>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#777777] block">
            Primary Stack
          </span>
          <span className="font-syne font-extrabold text-base sm:text-lg text-white">
            Python & ML Tools
          </span>
          <span className="text-[11px] text-[#999999] block mt-0.5">APIs, SQLite, Automation</span>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#777777] block">
            Opportunities
          </span>
          <span className="font-syne font-extrabold text-base sm:text-lg text-emerald-400">
            Open for Roles
          </span>
          <span className="text-[11px] text-[#999999] block mt-0.5">Internships & AI Projects</span>
        </div>
      </motion.div>
    </section>
  );
};
