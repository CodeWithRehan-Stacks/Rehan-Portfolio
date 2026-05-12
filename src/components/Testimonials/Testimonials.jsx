import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Sarah Ahmed',
    role: 'Startup Founder',
    content: 'Rehan is a visionary developer. He didn’t just build our app; he understood our business goals and implemented features that drove growth.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'John Smith',
    role: 'Tech Lead at DevCo',
    content: 'The attention to detail in Rehan’s work is exceptional. His UI/UX skills combined with deep technical knowledge make him a rare talent.',
    avatar: 'https://i.pravatar.cc/150?u=john',
  },
  {
    name: 'Ali Khan',
    role: 'Future Entrepreneur',
    content: 'Learning from Rehan Bhai has been life-changing. His passion for AI and digital freedom is contagious and inspiring.',
    avatar: 'https://i.pravatar.cc/150?u=ali',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-black/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-primary-500 mb-4 font-bold"
          >
            Kind Words
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            What People <span className="text-white/40">Say</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 relative"
            >
              <FaQuoteLeft className="text-primary-500/20 text-5xl absolute top-6 right-6" />
              <p className="text-white/70 italic mb-8 relative z-10 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
