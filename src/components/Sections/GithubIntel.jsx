import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GitHubStatsSection = () => {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    contributions: 0,
  });

  useEffect(() => {
    // Fetch GitHub stats (you can integrate real data here)
    const fetchStats = async () => {
      try {
        // Mock data - replace with real API call
        setStats({
          repos: 50,
          followers: 500,
          contributions: 1200,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black py-20 px-4 md:px-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
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
            GitHub <span className="text-green-400">Intelligence</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Open source contributions & futuristic analytics
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Repositories', value: stats.repos, icon: '📚' },
            { label: 'Followers', value: stats.followers, icon: '👥' },
            { label: 'Contributions', value: stats.contributions, icon: '⚡' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-green-500/10 to-transparent transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-green-400 mb-2"
                >
                  {stat.value}+
                </motion.div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/CodeWithRehan-Stacks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStatsSection;
