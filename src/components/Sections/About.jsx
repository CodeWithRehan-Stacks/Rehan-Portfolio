import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-title', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
      });

      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center+=100',
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-black py-20 px-4 md:px-8"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="about-title text-5xl md:text-6xl font-bold text-white mb-12">
            Who is Rehan?
          </h2>
        </motion.div>

        <div className="space-y-6 text-lg text-gray-300">
          <motion.p
            className="about-text text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Young Pakistani creator passionate about building the future. Self-made developer who learned to code
            through curiosity and determination.
          </motion.p>

          <motion.p
            className="about-text text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Startup dreamer with a mission to create technology that empowers people. Explorer of artificial
            intelligence and its infinite possibilities.
          </motion.p>

          <motion.p
            className="about-text text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Believer in digital freedom and cybersecurity. Building products that matter. Every line of code is a
            step towards freedom.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8">
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '30K+', label: 'Lines of Code' },
            { value: '100%', label: 'Passion Driven' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
