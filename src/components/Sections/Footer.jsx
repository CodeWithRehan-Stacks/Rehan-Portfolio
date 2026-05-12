import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/CodeWithRehan-Stacks', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-rehan-b7110a362/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@rehan.dev', label: 'Email' },
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative w-full bg-black border-t border-white/10 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Muhammad Rehan</h3>
            <p className="text-gray-400">Building the future through code</p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:contact@rehan.dev"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold transition-all duration-300 group"
            >
              Get in Touch
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm"
        >
          <p>© {currentYear} Muhammad Rehan. All rights reserved.</p>
          <p>Designed & Engineered by Muhammad Rehan 🚀</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
