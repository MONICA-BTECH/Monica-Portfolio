import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/personal';

interface PreLandingPortalProps {
  onEnter: () => void;
}

export const PreLandingPortal: React.FC<PreLandingPortalProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const duration = 2800; // 2.8 seconds
    const interval = 28;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center px-6 select-none overflow-hidden"
    >
      {/* Soft, Subtle Background Atmospheric Glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-950/25 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-950/15 rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Main Center Content */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto z-10">
        {/* Subtle Brand Beacon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-[#888888] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>PORTFOLIO</span>
        </motion.div>

        {/* Clean, Majestic Name "MONICA" */}
        <div className="relative py-2">
          {/* Subtle Ambient Backlight Behind Name */}
          <div className="absolute -inset-6 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-black uppercase text-[clamp(4.2rem,11vw,9.5rem)] tracking-[-0.03em] leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_0_40px_rgba(6,182,212,0.2)]"
          >
            MONICA
          </motion.h1>
        </div>

        {/* Clean Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-xs sm:text-sm tracking-[0.28em] uppercase font-bold text-cyan-400/90"
        >
          {personalInfo.role}
        </motion.p>

        {/* Sleek Minimalist "Explore Portfolio" Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-4 flex flex-col items-center gap-4"
        >
          <button
            onClick={onEnter}
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-cyan-500/40 hover:border-cyan-400 bg-black/40 hover:bg-cyan-950/30 text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg shadow-cyan-950/30 hover:shadow-cyan-500/20 hover:scale-105 cursor-pointer"
          >
            <span>Explore Portfolio</span>
            <ArrowRight
              size={14}
              className="text-cyan-400 group-hover:translate-x-1 transition-transform"
            />
          </button>

          {/* Minimalist Progress Indicator */}
          <div className="w-44 flex flex-col items-center gap-1.5 pt-2">
            <div className="w-full h-[2px] bg-white/[0.08] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-75 ease-out shadow-[0_0_8px_#06b6d4]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between w-full text-[10px] font-mono text-[#666666]">
              <span>INITIALIZING</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Minimalist Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-8 sm:px-12 text-[11px] text-[#555555] tracking-wider uppercase"
      >
        <span>VSB ENGINEERING CAMPUS</span>
        <span className="hidden sm:inline">2023–2027</span>
        <span>TAMIL NADU, INDIA</span>
      </motion.div>
    </motion.div>
  );
};
