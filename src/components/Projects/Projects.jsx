import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'AI Startup Dashboard',
    description: 'A premium SaaS dashboard for AI startups featuring real-time analytics and user management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Digital Freedom Platform',
    description: 'A decentralized social platform concept focusing on privacy and user data ownership.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Firebase', 'Web3'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Smart Portfolio Builder',
    description: 'Automated portfolio generation for developers using AI-driven content suggestions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'React', 'OpenAI'],
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-primary-500 mb-4 font-bold"
            >
              Featured Work
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Building the <span className="text-white/40">Next</span> Big <span className="text-primary-500">Thing.</span>
            </motion.h3>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#"
            className="text-white/40 hover:text-white transition-colors flex items-center gap-2 group"
          >
            View all projects <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group flex flex-col overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-3 bg-white text-black rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-3 bg-white text-black rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-primary-400 font-bold px-2 py-1 bg-primary-400/10 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <a href={project.demo} className="text-xs font-bold uppercase tracking-widest hover:text-primary-400 transition-colors">
                    Live Preview
                  </a>
                  <a href={project.github} className="text-white/30 hover:text-white transition-colors">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
