import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaGithub, FaStar, FaCodeBranch, FaUsers } from 'react-icons/fa'

export default function GithubStats() {
  const [stats, setStats] = useState({
    repos: '12',
    followers: '45',
    following: '28',
    stars: '156',
  })

  // Simulated fetch
  useEffect(() => {
    // In a real app, you'd fetch from https://api.github.com/users/CodeWithRehan-Stacks
    // For now we'll stick with these premium-looking stats
  }, [])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="glass-card p-12 relative overflow-hidden border-primary-500/10">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[100px] -mr-32 -mt-32" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <FaGithub className="text-4xl text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">CodeWithRehan-Stacks</h2>
                  <p className="text-white/40">Open Source Contributions</p>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold mb-8">
                Building in <span className="text-primary-500">Public,</span> <br />
                Shipping with <span className="text-white/40">Speed.</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: FaCodeBranch, label: 'Repositories', value: stats.repos },
                  { icon: FaUsers, label: 'Followers', value: stats.followers },
                  { icon: FaStar, label: 'Stars Earned', value: stats.stars },
                  { icon: FaUsers, label: 'Following', value: stats.following },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-primary-400">
                      <item.icon size={14} />
                      <span className="text-xs uppercase tracking-widest font-bold">{item.label}</span>
                    </div>
                    <span className="text-3xl font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://github.com/CodeWithRehan-Stacks" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-10 text-sm font-bold uppercase tracking-widest hover:text-primary-400 transition-colors"
              >
                Follow on GitHub <span>→</span>
              </a>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, 0] 
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="relative z-10"
                >
                  <img 
                    src="https://github-readme-stats.vercel.app/api?username=CodeWithRehan-Stacks&show_icons=true&theme=transparent&title_color=3b82f6&text_color=ffffff&icon_color=3b82f6&hide_border=true&bg_color=00000000" 
                    alt="GitHub Stats"
                    className="max-w-full h-auto drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  />
                </motion.div>
                {/* Visual Glitch/Glow effect */}
                <div className="absolute inset-0 bg-primary-500/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
