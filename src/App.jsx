import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SmoothScrollProvider } from './components/Layout/SmoothScrollProvider'
import { DynamicCursor } from './components/Layout/DynamicCursor'

// Sections
import HeroSection from './components/Sections/Hero'
import AboutSection from './components/Sections/About'
import SkillsSection from './components/Sections/Skills'
import ProjectsSection from './components/Sections/Projects'
import GitHubStatsSection from './components/Sections/GithubIntel'
import TimelineSection from './components/Sections/Timeline'
import TestimonialsSection from './components/Sections/Testimonials'
import ContactSection from './components/Sections/Contact'
import FooterSection from './components/Sections/Footer'

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      className="text-4xl font-bold tracking-tighter mb-4"
    >
      <span className="text-cyan-400">REHAN</span>
      <span className="text-white/50">PORTFOLIO</span>
    </motion.div>
    <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-cyan-400"
      />
    </div>
  </motion.div>
)

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <SmoothScrollProvider>
      <DynamicCursor />
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <main className="bg-black min-h-screen text-white overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GitHubStatsSection />
        <TimelineSection />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 z-[200] origin-left"
          style={{ scaleX: useScrollProgress() }}
        />
      </main>
    </SmoothScrollProvider>
  )
}

// Hook for scroll progress
function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setProgress(currentScroll / scrollHeight)
      }
    }

    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return progress
}

export default App
