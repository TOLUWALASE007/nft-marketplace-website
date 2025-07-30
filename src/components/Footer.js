import React from 'react';
import { motion } from 'framer-motion';

const footerLinks = [
  {
    title: 'Learn',
    links: [
      { label: 'Docs', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'What is an NFT?', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Support', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Business Inquiries', href: '#' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Bug Bounty', href: '#' },
    ],
  },
];

const Footer = () => (
  <motion.footer
    className="bg-nft-card text-nft-text font-sans pt-16 pb-8 border-t border-gray-800"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between md:items-start gap-12">
      {/* Logo and copyright */}
      <div className="flex flex-col items-start md:w-1/4">
        <div className="flex items-center mb-6">
          <img src="/img/favicon.png" alt="Logo" className="w-12 h-12 rounded-full mr-3 bg-nft-card" />
          <span className="text-2xl font-bold text-white font-oxanium tracking-wide">NFT</span>
        </div>
        <span className="text-xs text-gray-500 mt-4">© 2025 NFT.com. All rights reserved</span>
      </div>
      {/* Links */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {footerLinks.map(section => (
          <div key={section.title}>
            <h4 className="text-white font-semibold mb-4 font-oxanium">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary-300 transition-colors duration-200 font-sans">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Newsletter */}
      <div className="md:w-1/4 flex flex-col items-start">
        <span className="mb-2 font-sans">Subscribe to our notifications</span>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-3 bg-nft-card border-b border-gray-700 text-nft-text placeholder-gray-500 focus:outline-none font-sans"
        />
        <button className="border border-primary-700 text-primary-300 rounded-full px-6 py-2 hover:bg-primary-800 hover:text-white transition-colors font-sans">Subscribe</button>
        <span className="text-xs text-gray-500 mt-4 font-sans">Subscribe to our notifications</span>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
