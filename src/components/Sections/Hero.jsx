import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Lights */}
      <div className="absolute inset-0 z-0">
        <div className="glow-orb glow-purple w-[500px] h-[500px] top-[-100px] left-[-100px] animate-float" />
        <div className="glow-orb glow-blue w-[600px] h-[600px] bottom-[-200px] right-[-100px] animate-float" style={{ animationDelay: '-3s' }} />
        <div className="glow-orb glow-cyan w-[400px] h-[400px] top-[30%] left-[40%] mix-blend-screen opacity-20" />
      </div>

      <div className="noise-overlay" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm font-medium text-purple-200">Available for new opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="section-heading mb-6"
        >
          Building Digital <span className="gradient-text">Freedom</span> <br className="hidden md:block" />
          for the Next Generation.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 mb-10 h-[40px] font-medium"
        >
          <Typewriter
            options={{
              strings: [
                'Hi, I am Muhammad Rehan.',
                'I build premium digital experiences.',
                'I craft scalable tech startups.',
                'I believe in digital freedom.',
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary w-full sm:w-auto group">
            <span>Explore My Work</span>
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="btn-outline w-full sm:w-auto">
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-full bg-purple-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
