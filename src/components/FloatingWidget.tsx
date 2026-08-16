import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Sparkles } from 'lucide-react';

interface FloatingWidgetProps {
  onOpenProfile?: () => void;
}

export const FloatingWidget: React.FC<FloatingWidgetProps> = ({ onOpenProfile }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full bg-[#111111]/90 backdrop-blur-md hover:bg-[#222222] border border-white/20 flex items-center justify-center text-white/90 hover:text-white shadow-2xl transition-all duration-200 hover:scale-105"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {onOpenProfile && (
        <button
          onClick={onOpenProfile}
          title="Open Full Candidate Profile"
          aria-label="Open Full Candidate Profile"
          className="w-11 h-11 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-500/40 flex items-center justify-center text-cyan-300 shadow-2xl hover:scale-105 hover:bg-cyan-900/90 transition-all duration-200"
        >
          <Sparkles size={18} />
        </button>
      )}
    </aside>
  );
};
