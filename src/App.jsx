import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SmoothScrollProvider } from './components/Layout/SmoothScrollProvider';
import CustomCursor from './components/Layout/CustomCursor';

// Sections
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Sections/Hero';
import AboutSection from './components/Sections/About';
import SkillsSection from './components/Sections/Skills';
import ProjectsSection from './components/Sections/Projects';
import TimelineSection from './components/Sections/Timeline';
import ContactSection from './components/Sections/Contact';
import FooterSection from './components/Sections/Footer';

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
  >
    <div className="relative flex flex-col items-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 text-white flex items-center gap-2"
      >
        <span>REHAN.</span>
      </motion.div>
      <div className="w-48 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />
      </div>
    </div>
  </motion.div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Initial Load Timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Scroll Progress Logic
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SmoothScrollProvider>
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 z-[200] origin-left"
        style={{ scaleX: scrollProgress }}
      />

      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className="bg-black min-h-screen text-white selection:bg-purple-500/30 font-sans relative">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <TimelineSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
