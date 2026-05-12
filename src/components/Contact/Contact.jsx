import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary-500 mb-4 font-bold">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              Let's Build <br />
              <span className="text-white/40">Something</span> <span className="text-primary-500">Legendary.</span>
            </h3>
            
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Have a project in mind or just want to chat about AI and startups? 
              Drop me a message and let's make it happen.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Email Me</p>
                  <p className="text-white font-medium">contact@rehanbhai.tech</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/muhammad-rehan-b7110a362/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-white font-medium hover:text-primary-400 transition-colors"
                  >
                    muhammad-rehan
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-white font-medium">Karachi, Pakistan (Remote Worldwide)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary-500 transition-colors text-white"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary-500 transition-colors text-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-2">Message</label>
                <textarea 
                  rows="5"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary-500 transition-colors text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="primary-button w-full py-4 text-sm uppercase tracking-[0.2em] font-bold">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
