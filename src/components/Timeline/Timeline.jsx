import { motion } from 'framer-motion'

const events = [
  {
    year: '2022',
    title: 'First Line of Code',
    description: 'Started the journey by learning Python and building basic scripts. Discovered a passion for automation.',
  },
  {
    year: '2023',
    title: 'Web Mastery & Freelancing',
    description: 'Mastered React and Tailwind CSS. Started building projects for clients and understanding user needs.',
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Exploring the intersection of AI and Web Development. Building tools that leverage LLMs to solve problems.',
  },
  {
    year: '2025',
    title: 'Startup Launchpad',
    description: 'Focusing on building scalable SaaS products and fostering a startup ecosystem in Pakistan.',
  },
  {
    year: 'Future',
    title: 'Digital Freedom Evangelist',
    description: 'Building a legacy of digital entrepreneurship and helping others achieve financial freedom through tech.',
  },
]

export default function Timeline() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-primary-500 mb-4 font-bold"
          >
            My Path
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Journey & <span className="text-white/40">Vision</span>
          </motion.h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary-500/50 via-white/10 to-transparent transform -translate-x-1/2" />

          <div className="space-y-20">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary-500 rounded-full border-4 border-black transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                
                {/* Content */}
                <div className={`w-full md:w-1/2 px-8 md:px-16 ${i % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                  <span className="text-sm font-bold text-primary-400 mb-2 block">{event.year}</span>
                  <h4 className="text-2xl font-bold mb-4">{event.title}</h4>
                  <p className="text-white/60 leading-relaxed">
                    {event.description}
                  </p>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
