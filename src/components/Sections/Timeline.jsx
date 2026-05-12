import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TIMELINE } from '../../data/timeline';

gsap.registerPlugin(ScrollTrigger);

const TimelineSection = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-black py-20 px-4 md:px-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Vision <span className="text-yellow-400">Timeline</span>
          </h2>
          <p className="text-gray-400 text-lg">Journey from student to founder</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-yellow-400 to-transparent transform -translate-x-1/2"
            style={{ height: '100%' }}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}
                >
                  <div className="relative group bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-500 overflow-hidden">
                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-yellow-500/10 to-transparent transition-opacity duration-500" />

                    {/* Center dot */}
                    <div
                      className="absolute left-1/2 top-1/2 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
                      style={{
                        left: index % 2 === 0 ? '100%' : '-2px',
                        boxShadow: '0 0 20px rgba(250, 204, 21, 0.5)',
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-3xl">{item.icon}</span>
                        <span className="text-lg font-semibold text-yellow-400">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
