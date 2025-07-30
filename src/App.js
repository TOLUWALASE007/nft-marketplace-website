import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  Wallet, 
  TrendingUp, 
  Users, 
  Clock,
  ArrowRight,
  Star,
  Heart
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ActivitySection from './components/ActivitySection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import FeaturedNFTs from './components/FeaturedNFTs';
import AuctionCountdown from './components/AuctionCountdown';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
        <CommunitySection />

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-nft-background">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
      />
      
      <main className="relative">
        <Hero />
        <ActivitySection />
        <FeaturedNFTs />
        <AuctionCountdown />
        <CommunitySection />
      </main>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;