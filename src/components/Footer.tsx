import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, ArrowUp } from 'lucide-react';
import { IconGithub, IconLinkedin } from './SocialIcons';
import { personalInfo } from '../data/personal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-24 pb-12 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] w-full mx-auto border-t border-white/[0.08]">
      {/* Main Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
        {/* Left Column: Monumental Branding & Role */}
        <div className="md:col-span-8 space-y-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-syne font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white leading-none"
            >
              {personalInfo.name}.
            </motion.h2>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400 mt-2">
              {personalInfo.role}
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm text-[#888888] max-w-md leading-relaxed"
          >
            {personalInfo.supportingMessage}
          </motion.p>
        </div>

        {/* Right Column: Social Links & Navigation */}
        <div className="md:col-span-4 md:flex md:flex-col md:items-end justify-between space-y-6">
          <div className="space-y-4">
            <span className="block text-[11px] font-bold text-[#666666] tracking-[0.25em] uppercase md:text-right">
              CONNECT
            </span>

            <div className="flex flex-col space-y-3 text-xs sm:text-sm font-medium">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cyan-300 text-[#aaaaaa] transition-colors group md:justify-end"
              >
                <IconGithub size={15} />
                <span>GitHub</span>
                <ArrowUpRight size={13} className="text-[#666666] group-hover:text-cyan-300 transition-colors" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cyan-300 text-[#aaaaaa] transition-colors group md:justify-end"
              >
                <IconLinkedin size={15} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} className="text-[#666666] group-hover:text-cyan-300 transition-colors" />
              </a>

              <a
                href={personalInfo.socials.email}
                className="inline-flex items-center gap-2 hover:text-cyan-300 text-[#aaaaaa] transition-colors group md:justify-end"
              >
                <Mail size={15} />
                <span>Email Monica</span>
                <ArrowUpRight size={13} className="text-[#666666] group-hover:text-cyan-300 transition-colors" />
              </a>
            </div>
          </div>

          {/* Back to top CTA */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/40 text-xs font-semibold text-white/80 hover:text-white transition-all duration-200 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>

      {/* Bottom Copyright Row */}
      <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
        <p>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          <span>Crafted with logic & AI precision</span>
        </p>
      </div>
    </footer>
  );
};
