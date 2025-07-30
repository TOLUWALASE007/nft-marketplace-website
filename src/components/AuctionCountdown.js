import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, DollarSign } from 'lucide-react';

const AuctionCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 6,
    minutes: 26,
    seconds: 50
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => time.toString().padStart(2, '0');

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="card p-8 lg:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-full mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Clock size={32} className="text-primary-400" />
              </motion.div>
              
              <h2 className="text-3xl lg:text-4xl font-bold font-oxanium mb-4">
                <span className="gradient-text">Live Auction</span> Ending Soon
              </h2>
              <p className="text-gray-400 text-lg">
                Don't miss out on this exclusive NFT collection
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Current Bid */}
              <motion.div 
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                  <TrendingUp size={24} className="text-green-400" />
                  <h3 className="text-xl font-semibold text-white">Current Bid</h3>
                </div>
                
                <div className="space-y-2">
                  <p className="text-3xl lg:text-4xl font-bold font-oxanium gradient-text">
                    2.00 ETH
                  </p>
                  <p className="text-gray-400 text-lg">
                    ≈ $8,046.86
                  </p>
                </div>
              </motion.div>

              {/* Countdown Timer */}
              <motion.div 
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                  <Clock size={24} className="text-red-400" />
                  <h3 className="text-xl font-semibold text-white">Auction ending in</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-nft-background rounded-lg p-4 border border-gray-700">
                      <p className="text-2xl lg:text-3xl font-bold font-oxanium text-white">
                        {formatTime(timeLeft.hours)}
                      </p>
                      <p className="text-gray-400 text-sm">hours</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-nft-background rounded-lg p-4 border border-gray-700">
                      <p className="text-2xl lg:text-3xl font-bold font-oxanium text-white">
                        {formatTime(timeLeft.minutes)}
                      </p>
                      <p className="text-gray-400 text-sm">minutes</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-nft-background rounded-lg p-4 border border-gray-700">
                      <p className="text-2xl lg:text-3xl font-bold font-oxanium text-white">
                        {formatTime(timeLeft.seconds)}
                      </p>
                      <p className="text-gray-400 text-sm">seconds</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-3 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <DollarSign size={20} />
                <span>Place Your Bid</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuctionCountdown; 