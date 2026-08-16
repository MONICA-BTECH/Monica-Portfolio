import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PreLandingPortal } from './components/PreLandingPortal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWidget } from './components/FloatingWidget';
import { ProfileModal } from './components/ProfileModal';

export const App: React.FC = () => {
  const [showPreLanding, setShowPreLanding] = useState(true);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const openProfile = () => setProfileModalOpen(true);
  const closeProfile = () => setProfileModalOpen(false);

  return (
    <div className="min-h-screen w-full bg-black text-white relative selection:bg-cyan-400 selection:text-black overflow-x-hidden">
      {/* Simple, Elegant Pre-Landing Screen with "MONICA" */}
      <AnimatePresence>
        {showPreLanding && (
          <PreLandingPortal onEnter={() => setShowPreLanding(false)} />
        )}
      </AnimatePresence>

      {/* Background ambient lighting covering full viewport */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[900px] h-[900px] bg-cyan-950/20 rounded-full blur-[200px]" />
        <div className="absolute top-1/3 left-[-10%] w-[800px] h-[800px] bg-slate-900/25 rounded-full blur-[220px]" />
        <div className="absolute bottom-1/4 right-[-5%] w-[900px] h-[900px] bg-emerald-950/20 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 w-full">
        {/* Navigation Bar */}
        <Navbar onOpenProfile={openProfile} />

        {/* Main Content Sections */}
        <main className="w-full">
          <Hero onOpenProfile={openProfile} />
          <About onOpenProfile={openProfile} />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Languages />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Controls */}
        <FloatingWidget onOpenProfile={openProfile} />

        {/* Full Candidate Profile Modal */}
        <ProfileModal isOpen={profileModalOpen} onClose={closeProfile} />
      </div>
    </div>
  );
};

export default App;
