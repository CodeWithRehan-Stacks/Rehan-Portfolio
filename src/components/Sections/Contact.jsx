import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineChatAlt2 } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label mb-6">Let's Connect</div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Ready to <span className="gradient-text">Build?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Whether you have a startup idea, a freelance project, or just want to say hi—I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-6">
              <a href="mailto:contact@rehan.dev" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <HiOutlineMail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Me At</p>
                  <p className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">contact@rehan.dev</p>
                </div>
              </a>

              <div className="flex gap-4 pt-6 mt-6 border-t border-white/5">
                <a href="https://github.com/CodeWithRehan-Stacks" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400 transition-all duration-300">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-rehan-b7110a362/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 transition-all duration-300">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 pl-2">Name</label>
                  <input type="text" required placeholder="John Doe" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 pl-2">Email</label>
                  <input type="email" required placeholder="john@example.com" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 pl-2">Message</label>
                  <textarea required rows="4" placeholder="Tell me about your project..." className="input-field resize-none" />
                </div>
                
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full py-4 text-lg mt-4 disabled:opacity-70">
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : isSuccess ? (
                    <span>Message Sent! ✨</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <HiOutlineChatAlt2 size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
