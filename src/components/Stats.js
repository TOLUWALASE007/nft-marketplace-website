import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Palette } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Palette size={32} />,
      number: "26K+",
      label: "Artwork",
      color: "text-primary-400"
    },
    {
      icon: <TrendingUp size={32} />,
      number: "18K",
      label: "Auction",
      color: "text-secondary-400"
    },
    {
      icon: <Users size={32} />,
      number: "8K",
      label: "Artist",
      color: "text-primary-400"
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h3>
              
              <p className="text-gray-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 