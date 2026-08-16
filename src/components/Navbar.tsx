import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personal';

interface NavbarProps {
  onOpenProfile?: () => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'certifications', label: 'CERTS' },
  { id: 'contact', label: 'CONTACT' }
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenProfile }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionElements = NAV_ITEMS.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id)
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-5 sm:px-6 py-2.5 rounded-full border transition-all duration-300 ${
          scrolled
            ? 'bg-black/85 backdrop-blur-xl border-white/20 shadow-2xl shadow-black/80'
            : 'bg-black/65 backdrop-blur-md border-white/10'
        }`}
        style={{ width: 'min(95vw, 860px)' }}
      >
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="font-syne font-extrabold text-white text-xs sm:text-sm tracking-wider hover:opacity-80 transition-opacity uppercase flex items-center gap-1.5 focus:outline-none cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse"></span>
          <span>{personalInfo.logoText}</span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-5 text-[11px] font-semibold tracking-widest text-[#999999]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative py-1 transition-colors duration-200 uppercase tracking-widest focus:outline-none cursor-pointer ${
                  isActive ? 'text-white font-bold' : 'hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button: Recruiter Profile / Get in Touch */}
        <div className="hidden sm:flex items-center gap-2.5">
          {onOpenProfile && (
            <button
              onClick={onOpenProfile}
              className="border border-white/20 hover:border-white/50 text-white/90 hover:text-white px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-200 hover:bg-white/5 uppercase flex items-center gap-1 cursor-pointer"
            >
              <span>Profile</span>
              <ArrowUpRight size={12} />
            </button>
          )}

          <button
            onClick={() => scrollTo('contact')}
            className="bg-white text-black px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider hover:bg-[#e6e6e6] transition-all duration-200 uppercase cursor-pointer shadow-lg shadow-white/10"
          >
            LET'S TALK
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-1.5 rounded-full hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="pointer-events-auto absolute top-20 left-4 right-4 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl flex flex-col gap-3 text-center lg:hidden z-50 max-w-md mx-auto"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`py-2 text-sm font-semibold uppercase tracking-widest transition-colors ${
                  activeSection === item.id ? 'text-white font-bold bg-white/5 rounded-xl' : 'text-[#888888] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              {onOpenProfile && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProfile();
                  }}
                  className="w-full py-2.5 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
                >
                  View Full Profile
                </button>
              )}
              <button
                onClick={() => scrollTo('contact')}
                className="w-full bg-white text-black py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#eaeaea] transition-colors cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
