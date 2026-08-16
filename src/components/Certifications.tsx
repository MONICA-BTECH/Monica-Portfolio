import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] w-full mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 mb-3">
            <span className="w-6 h-[1px] bg-cyan-400"></span>
            <span>CREDENTIALS & KNOWLEDGE</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            Certifications
          </motion.h2>
        </div>

        <p className="text-xs sm:text-sm text-[#888888] max-w-md">
          Structured professional courses and certified evaluations in AI ethics, marketing fundamentals, and applied data science.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="group relative bg-[#060606] hover:bg-[#0c0c0c] border border-white/[0.08] hover:border-cyan-500/30 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 glow-card-hover"
          >
            <div>
              {/* Badge & Issuer */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Award size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-300 border border-cyan-500/20">
                  {cert.badge}
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 className="font-syne font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-1">
                {cert.title}
              </h3>
              <span className="text-xs font-semibold text-cyan-400 tracking-wider block mb-4">
                {cert.issuer}
              </span>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* Category Footer */}
            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#777777]">
              <span>Category</span>
              <span className="text-white/80 font-medium">{cert.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
