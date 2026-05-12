import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary-400 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold mb-6 leading-tight"
          >
            I Build Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-white to-purple-400">
              Experiences
            </span> for <br />
            <span className="flex items-center gap-4">
              the{' '}
              <span className="text-primary-500">
                <Typewriter
                  options={{
                    strings: ['Future.', 'Startups.', 'AI Era.', 'Creators.'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed"
          >
            Hi, I'm <span className="text-white font-semibold">Muhammad Rehan</span>, also known as <span className="text-primary-400 font-semibold">Rehan Bhai</span>. 
            A Pakistani tech creator and future entrepreneur crafting high-end digital solutions at the intersection of AI and Web Development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="primary-button flex items-center gap-2 px-8">
              View Projects
            </a>
            <a href="#contact" className="glass-button flex items-center gap-2 px-8">
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/CodeWithRehan-Stacks' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-rehan-b7110a362/' },
              { icon: FaTwitter, href: '#' },
              { icon: FaInstagram, href: '#' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-white/30 hover:text-primary-500 transition-all hover:-translate-x-1"
              >
                <social.icon />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary-500 to-transparent" />
      </motion.div>
    </section>
  )
}
