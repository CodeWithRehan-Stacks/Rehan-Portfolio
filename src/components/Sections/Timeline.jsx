import { motion } from 'framer-motion';
import { TIMELINE } from '../../data/timeline';

export default function TimelineSection() {
  return (
    <section id="experience" className="py-32 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-6 mx-auto"
          >
            Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Vision <span className="gradient-text">Timeline</span>
          </motion.h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent md:-translate-x-1/2 opacity-20" />

          <div className="space-y-16">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-[-41px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-black border-2 border-purple-500 flex items-center justify-center z-10 mt-1 md:mt-0 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass p-8 rounded-3xl glass-hover relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                    <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 text-purple-400 text-sm font-bold tracking-widest mb-4 border border-purple-500/20">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed relative z-10">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
