import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image / Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Fallback abstract image since we don't have a real photo */}
              <div className="w-full h-full bg-[#0a0a0f] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity filter grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <h2 className="text-5xl font-display font-bold text-white/50 absolute bottom-10 left-10">REHAN.</h2>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 flex items-center justify-center flex-col animate-float shadow-2xl">
              <span className="text-3xl font-bold gradient-text">5+</span>
              <span className="text-xs text-gray-400 font-medium">Years Exp.</span>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label mb-6">Who is Rehan?</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              A visionary builder crafting the <span className="gradient-text">digital future.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                I am a young Pakistani tech creator and startup founder. My journey began with a relentless curiosity to understand how things work on the web. Today, that curiosity has evolved into a mission to build products that empower people.
              </p>
              <p>
                I believe deeply in <strong>digital freedom</strong> and cybersecurity. Every line of code I write is intentional, focusing on performance, beautiful aesthetics, and seamless user experiences. 
              </p>
              <p>
                Whether it's exploring artificial intelligence or crafting premium front-end interfaces, my goal is to deliver excellence that feels like magic.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="glass p-6 rounded-2xl">
                <h4 className="text-3xl font-display font-bold text-white mb-2">50+</h4>
                <p className="text-sm text-gray-500">Projects Completed</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <h4 className="text-3xl font-display font-bold text-white mb-2">100%</h4>
                <p className="text-sm text-gray-500">Passion Driven</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
