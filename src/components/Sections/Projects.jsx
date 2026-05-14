import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../../data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-6 mx-auto"
          >
            Featured Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Cinematic <span className="gradient-text">Experiences</span>
          </motion.h2>
        </div>

        <div className="space-y-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Image Preview */}
              <div className="w-full lg:w-3/5 group relative rounded-3xl overflow-hidden glass p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div 
                  className="w-full aspect-video rounded-2xl overflow-hidden relative bg-surface flex items-center justify-center border border-white/5"
                  style={{ background: `linear-gradient(135deg, ${project.color}15, #000)` }}
                >
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" />
                  <div className="relative z-10 text-center">
                    <span className="text-6xl mb-4 block filter drop-shadow-lg">✨</span>
                    <span className="text-sm font-medium tracking-widest uppercase text-white/50">Preview</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary py-2.5 px-6">
                    <span>Live Site</span>
                    <HiOutlineExternalLink size={18} />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline py-2.5 px-6 hover:!bg-white/10 hover:!border-white/30">
                    <FaGithub size={18} />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
