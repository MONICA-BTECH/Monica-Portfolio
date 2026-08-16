import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { languages } from '../data/languages';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-24 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] w-full mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 mb-3">
            <span className="w-6 h-[1px] bg-cyan-400"></span>
            <span>COMMUNICATION & LOCALIZATION</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            Languages
          </motion.h2>
        </div>

        <p className="text-xs sm:text-sm text-[#888888] max-w-md">
          Multilingual communication enabling seamless collaboration in technical discussions and regional interactions.
        </p>
      </div>

      {/* Languages Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {languages.map((lang, idx) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="group relative bg-[#060606] hover:bg-[#0c0c0c] border border-white/[0.08] hover:border-cyan-500/30 rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 glow-card-hover"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Globe size={22} />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-2xl text-white">
                      {lang.name}
                    </h3>
                    <span className="text-xs text-[#888888] font-medium">
                      {lang.nativeScript}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/[0.05] text-cyan-300 border border-white/[0.08]">
                  {lang.fluency}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                {lang.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
