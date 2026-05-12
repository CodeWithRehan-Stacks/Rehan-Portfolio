import { motion } from 'framer-motion'
import { FaReact, FaJs, FaPython, FaLaravel, FaFire, FaGithub, FaLock } from 'react-icons/fa'
import { SiTailwindcss, SiPython, SiFirebase, SiFastapi } from 'react-icons/si'
import { HiLightningBolt } from 'react-icons/hi'

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'AI Tools', icon: HiLightningBolt, color: '#8B5CF6' },
  { name: 'Git & GitHub', icon: FaGithub, color: '#FFFFFF' },
  { name: 'Cyber Security', icon: FaLock, color: '#EF4444' },
  { name: 'APIs', icon: SiFastapi, color: '#05998B' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-primary-500 mb-4 font-bold"
          >
            Capabilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            My Tech <span className="text-white/40">Stack</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 flex flex-col items-center justify-center gap-4 group cursor-default relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)` }}
              />
              
              <skill.icon className="text-4xl transition-all duration-300 group-hover:scale-110" style={{ color: skill.color }} />
              <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
