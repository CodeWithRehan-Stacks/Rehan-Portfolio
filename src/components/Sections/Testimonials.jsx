import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      role: 'CTO at TechStartup',
      content:
        'Muhammad is an exceptional developer with a keen eye for design and innovation. His work is always of the highest quality.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sophia Williams',
      role: 'Founder of AI Labs',
      content:
        'Working with Rehan on AI initiatives has been transformative. He brings both technical excellence and entrepreneurial mindset.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Carlos Rodriguez',
      role: 'Tech Lead at Innovation Hub',
      content:
        'His dedication to cybersecurity and digital freedom is inspiring. Rehan is the kind of developer the industry needs.',
      rating: 5,
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black py-20 px-4 md:px-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            What <span className="text-purple-400">People Say</span>
          </h2>
          <p className="text-gray-400 text-lg">Testimonials from collaborators and leaders</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/10 to-transparent transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-purple-400 text-purple-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
