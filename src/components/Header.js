import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Search, Wallet } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen, scrolled }) => {
  const navItems = ['Home', 'Activity', 'Market', 'Community'];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-nft-card/80 backdrop-blur-md border-b border-gray-700' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center col-span-1"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/img/favicon.png"
              alt="Logo"
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-full shadow-md"
              style={{ background: 'rgba(0,0,0,0.7)' }}
            />
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="col-span-1 flex justify-center">
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={
                    item === 'Activity' ? '#activity'
                    : item === 'Market' ? '#featured-nfts'
                    : item === 'Community' ? '#community'
                    : `#${item.toLowerCase()}`
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 justify-end col-span-1">
            <motion.button
              className="p-2 text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={20} />
            </motion.button>
            
            <motion.button
              className="btn-primary flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Wallet size={18} />
              <span>Connect Wallet</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-gray-700">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={
                  item === 'Activity' ? '#activity'
                  : item === 'Market' ? '#featured-nfts'
                  : item === 'Community' ? '#community'
                  : `#${item.toLowerCase()}`
                }
                className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            
            <div className="pt-4 space-y-3">
              <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                <Search size={18} />
                <span>Search</span>
              </button>
              
              <button className="w-full btn-primary flex items-center justify-center space-x-2">
                <Wallet size={18} />
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;