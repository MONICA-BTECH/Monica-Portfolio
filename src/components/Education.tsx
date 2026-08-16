import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { educationList } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] w-full mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 mb-3">
            <span className="w-6 h-[1px] bg-cyan-400"></span>
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            Education
          </motion.h2>
        </div>

        <p className="text-xs sm:text-sm text-[#888888] max-w-md">
          A continuous academic journey grounded in analytical rigor, computer science fundamentals, and artificial intelligence.
        </p>
      </div>

      {/* Academic Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationList.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className={`group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between border transition-all duration-300 glow-card-hover ${
              item.isCurrent
                ? 'bg-[#080808] border-cyan-500/30'
                : 'bg-[#060606] hover:bg-[#0a0a0a] border-white/[0.08] hover:border-white/20'
            }`}
          >
            <div className="space-y-6">
              {/* Top Meta */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <GraduationCap size={22} />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.05] text-[#aaaaaa] border border-white/[0.08]">
                  {item.period}
                </span>
              </div>

              {/* Degree & Institution */}
              <div>
                <h3 className="font-syne font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                  {item.degree}
                </h3>
                <p className="text-sm text-white/80 font-medium mt-1">
                  {item.institution}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#777777] mt-1">
                  <MapPin size={12} />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                {item.highlights.map((h, i) => (
                  <p key={i} className="text-xs text-[#888888] leading-relaxed">
                    • {h}
                  </p>
                ))}
              </div>
            </div>

            {/* Score / CGPA Badge Footer */}
            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#666666] block">
                  {item.scoreLabel}
                </span>
                <span className="text-xl font-syne font-extrabold text-cyan-400">
                  {item.scoreValue}
                </span>
              </div>

              {item.isCurrent && (
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Active
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
