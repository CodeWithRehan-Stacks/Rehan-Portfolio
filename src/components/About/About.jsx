import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const Counter = ({ value, title, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = parseInt(value)
      if (start === end) return
      
      let totalDuration = 2000
      let incrementTime = (totalDuration / end)
      
      let timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(timer)
      }, incrementTime)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/40 uppercase tracking-widest">{title}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary-500 mb-4 font-bold">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Driven by <span className="text-white/40">Innovation,</span> <br />
              Powered by <span className="text-primary-500">Technology.</span>
            </h3>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                My journey in tech began with a simple curiosity: <span className="text-white font-medium">How can we solve real-world problems with code?</span> 
                This curiosity transformed into a passion for building startups and leveraging AI to create digital freedom.
              </p>
              <p>
                As "Rehan Bhai," I aim to inspire the next generation of Pakistani developers to think beyond just writing code. 
                I believe in building a <span className="text-white font-medium">startup mindset</span> where every line of code serves a purpose for a better future.
              </p>
              <p>
                Whether it's crafting seamless web experiences or exploring the depths of AI, my focus is always on 
                <span className="text-primary-400 font-medium italic"> quality, performance, and user-centric design.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="glass-card p-10 flex flex-col items-center justify-center hover:bg-primary-500/5 hover:border-primary-500/20 group">
              <Counter value="25" title="Projects Done" suffix="+" />
            </div>
            <div className="glass-card p-10 flex flex-col items-center justify-center hover:bg-purple-500/5 hover:border-purple-500/20">
              <Counter value="12" title="Skills Mastered" />
            </div>
            <div className="glass-card p-10 flex flex-col items-center justify-center hover:bg-blue-500/5 hover:border-blue-500/20">
              <Counter value="500" title="Github Commits" suffix="+" />
            </div>
            <div className="glass-card p-10 flex flex-col items-center justify-center hover:bg-emerald-500/5 hover:border-emerald-500/20">
              <Counter value="365" title="Learning Streak" suffix="d" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
