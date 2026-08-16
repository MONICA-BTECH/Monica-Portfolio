import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { ExperienceCard } from './ExperienceCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] w-full mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 mb-3">
            <span className="w-6 h-[1px] bg-cyan-400"></span>
            <span>INDUSTRY INTERNSHIPS</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            Practical Experience
          </motion.h2>
        </div>

        <p className="text-xs sm:text-sm text-[#888888] max-w-md">
          Hands-on internships delivering data science dashboards, automated report pipelines, and optimized machine learning models.
        </p>
      </div>

      {/* Experience Timeline Grid */}
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={exp.id} experience={exp} index={idx} />
        ))}
      </div>
    </section>
  );
};
