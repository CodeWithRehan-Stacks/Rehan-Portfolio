import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS } from '../../data/skills';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const containerRef = useRef(null);
  const skillsGridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const skills = skillsGridRef.current?.querySelectorAll('.skill-card');
      if (!skills) return;

      skills.forEach((skill, index) => {
        gsap.from(skill, {
          scrollTrigger: {
            trigger: skill,
            start: 'top 80%',
          },
          opacity: 0,
          y: 30,
          rotation: -5,
          duration: 0.6,
          delay: index * 0.1,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-black py-20 px-4 md:px-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Premium <span className="text-cyan-400">Skillset</span>
          </h2>
          <p className="text-gray-400 text-lg">Expertise across modern technologies</p>
        </motion.div>

        <div ref={skillsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                className="skill-card group relative bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${skill.color}20, transparent 80%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="text-3xl" style={{ color: skill.color }} />
                    <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>

                  {/* Proficiency bar */}
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{skill.proficiency}% Proficiency</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
