import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Palette, Heart, Star, ArrowRight } from 'lucide-react';

const activityTabs = [
  { label: 'Artwork', icon: <Palette size={20} /> },
  { label: 'Auction', icon: <TrendingUp size={20} /> },
  { label: 'Artist', icon: <Users size={20} /> },
  { label: 'Favorites', icon: <Heart size={20} /> },
  { label: 'Top Rated', icon: <Star size={20} /> },
  { label: 'Recent', icon: <ArrowRight size={20} /> },
];

const activityData = {
  Artwork: [
    { id: 1, name: 'Dreamscape', user: 'Alice', action: 'Minted', time: '2m ago' },
    { id: 2, name: 'Neon City', user: 'Bob', action: 'Sold', time: '10m ago' },
  ],
  Auction: [
    { id: 1, name: 'CryptoPunk #123', user: 'Eve', action: 'Bid', time: '5m ago' },
    { id: 2, name: 'Rare Ape', user: 'Dan', action: 'Listed', time: '12m ago' },
  ],
  Artist: [
    { id: 1, name: 'Alice', user: 'Alice', action: 'Joined', time: '1h ago' },
    { id: 2, name: 'Bob', user: 'Bob', action: 'Featured', time: '2h ago' },
  ],
  Favorites: [
    { id: 1, name: 'Pixel Art', user: 'Sam', action: 'Liked', time: '3m ago' },
    { id: 2, name: 'Night Sky', user: 'Jane', action: 'Favorited', time: '8m ago' },
  ],
  'Top Rated': [
    { id: 1, name: 'Golden NFT', user: 'Max', action: 'Rated', time: '15m ago' },
    { id: 2, name: 'Silver NFT', user: 'Lily', action: 'Rated', time: '20m ago' },
  ],
  Recent: [
    { id: 1, name: 'New Drop', user: 'Chris', action: 'Added', time: '1m ago' },
    { id: 2, name: 'Fresh Mint', user: 'Anna', action: 'Minted', time: '4m ago' },
  ],
};

const ActivitySection = () => {
  const [activeTab, setActiveTab] = useState('Artwork');
  const stats = [
    {
      icon: <Palette size={32} color="#60a5fa" />,
      number: '26K+',
      label: 'Artwork',
      color: 'text-primary-400',
    },
    {
      icon: <TrendingUp size={32} color="#a855f7" />,
      number: '18K',
      label: 'Auction',
      color: 'text-secondary-400',
    },
    {
      icon: <Users size={32} color="#f59e42" />,
      number: '8K',
      label: 'Artist',
      color: 'text-primary-400',
    },
    {
      icon: <Heart size={32} />,
      number: '12K',
      label: 'Favorites',
      color: 'text-pink-400',
    },
    {
      icon: <Star size={32} />,
      number: '5K',
      label: 'Top Rated',
      color: 'text-yellow-400',
    },
    {
      icon: <ArrowRight size={32} />,
      number: '3K',
      label: 'Recent',
      color: 'text-blue-400',
    },
  ];

  return (
    <section id="activity" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="card text-center group hover:transform hover:scale-105"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
