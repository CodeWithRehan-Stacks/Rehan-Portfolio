import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-primary-500">REHAN</span>
            <span className="text-white/50">BHAI</span>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="https://github.com/CodeWithRehan-Stacks" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-rehan-b7110a362/" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-white/30 hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-white/30 hover:text-white transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30 font-medium">
          <p>© 2026 Muhammad Rehan. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with <FaHeart className="text-red-500" /> & React
          </p>
        </div>
      </div>
    </footer>
  )
}
