import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div 
            className="text-center lg:text-left z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Title */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-oxanium leading-tight mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">Create</span>
              <br />
              <span className="text-white">Showcase, and</span>
              <br />
              <span className="text-white">trade NFTs.</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join the world’s most dynamic NFT marketplace to create, showcase, and trade unique digital assets.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-3 mx-auto lg:mx-0 w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>EXPLORE</span>
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Images */}
          <motion.div 
            className="relative mt-32 sm:mt-40 md:mt-48 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Orbe Image Container */}
            <motion.div
              className="relative mx-auto lg:mx-0 w-80 h-80 lg:w-96 lg:h-96"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Main Orbe Image */}
              <img
                src="/img/orbe-img.png"
                alt="NFT Orbe"
                className="w-full h-full object-contain"
              />

              {/* Ethereum Image - Large overlay on Orbe */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10"
                animate={{ 
                  y: [-40, -30, -40],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <img
                  src="/img/ethereum-img.png"
                  alt="Ethereum"
                  className="w-1/2 h-1/2 object-contain opacity-90 drop-shadow-2xl"
                  style={{ marginTop: '-15.5rem' }}
                />
              </motion.div>
            </motion.div>

            {/* Shape Background */}
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 lg:w-80 lg:h-80 opacity-20"
              animate={{ 
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <img
                src="/img/shape-bg.png"
                alt="Background Shape"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Floating Sparkles */}
            <motion.div
              className="absolute top-20 right-10 text-primary-400"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles size={24} />
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-10 text-secondary-400"
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <Sparkles size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;