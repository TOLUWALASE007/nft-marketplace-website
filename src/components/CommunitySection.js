import React from 'react';
import { motion } from 'framer-motion';
import { Github, Youtube, Send, MessageCircle, X as LucideX, Users, Rss } from 'lucide-react';


const communityStats = [
  {
    icon: <Send size={32} />, // Telegram
    number: '120K',
    label: 'Telegram',
    color: 'text-sky-400',
    link: 'https://t.me/',
  },
  {
    icon: <Users size={32} />, // Discord
    number: '98K',
    label: 'Discord',
    color: 'text-indigo-400',
    link: 'https://discord.com/',
  },
  {
    icon: <LucideX size={32} />, // X (Twitter)
    number: '210K',
    label: 'X',
    color: 'text-blue-400',
    link: 'https://x.com/',
  },
  {
    icon: <Github size={32} />, // Github
    number: '12K',
    label: 'Github',
    color: 'text-gray-400',
    link: 'https://github.com/',
  },
  {
    icon: <Rss size={32} />, // Reddit (using Rss as a visually similar outline icon)
    number: '34K',
    label: 'Reddit',
    color: 'text-orange-400',
    link: 'https://reddit.com/',
  },
  {
    icon: <Youtube size={32} />, // Youtube
    number: '56K',
    label: 'Youtube',
    color: 'text-red-400',
    link: 'https://youtube.com/',
  },
];

const CommunitySection = () => (
  <section id="community" className="py-20 lg:py-32">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold font-oxanium mb-4">
          <span className="gradient-text">Community</span> Channels
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Join our vibrant community on your favorite platform!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
        {communityStats.map((stat, index) => (
          <motion.a
            key={stat.label}
            href={stat.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card text-center group hover:transform hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={`${stat.color} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {stat.icon}
            </motion.div>
            <motion.h3
              className="text-3xl lg:text-4xl font-bold font-oxanium mb-2 gradient-text"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {stat.number}
            </motion.h3>
            <p className="text-gray-400 text-lg font-medium">{stat.label}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default CommunitySection;
