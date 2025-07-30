
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ArrowRight } from 'lucide-react';

const OPENSEA_API_KEY = 'c087175f3a5b4a259326e0d7c9558bb7';
const COLLECTION_OPTIONS = [
  { label: 'Bored Ape Yacht Club', value: 'boredapeyachtclub' },
  { label: 'Azuki', value: 'azuki' },
  { label: 'Doodles', value: 'doodles-official' },
  { label: 'Mutant Ape Yacht Club', value: 'mutant-ape-yacht-club' },
  { label: 'Pudgy Penguins', value: 'pudgypenguins' },
  { label: 'Cool Cats', value: 'cool-cats-nft' },
  { label: 'Otherdeed for Otherside', value: 'otherdeed' },
  { label: 'CloneX', value: 'clonex' },
  { label: 'Moonbirds', value: 'moonbirds' },
  { label: 'World of Women', value: 'world-of-women-nft' },
  { label: 'CryptoPunks', value: 'cryptopunks' },
  { label: 'VeeFriends', value: 'veefriends' },
];

const FeaturedNFTs = () => {
  const [collectionSlug, setCollectionSlug] = useState(COLLECTION_OPTIONS[0].value);
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let fetchedNfts = [];
    let offset = 0;
    const limit = 20; // fetch more than 12 to filter for images
    const desiredCount = 12;

    const fetchWithImages = async () => {
      const validImage = url => {
        if (!url || typeof url !== 'string') return false;
        // Must be a real image file extension and not a known placeholder or broken pattern
        const extMatch = url.match(/\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i);
        const isLikelyImage = extMatch && !url.match(/(default|placeholder|blank|empty|none|missing|notfound|noimage|unavailable|404|broken|error)/i);
        // Exclude data URLs, SVGs, and anything not http(s)
        return (
          url.startsWith('http') &&
          isLikelyImage &&
          !url.endsWith('.svg') &&
          !url.startsWith('data:')
        );
      };

      // Helper to check if an image URL is actually loadable
      const isImageLoadable = url => {
        return new Promise(resolve => {
          const img = new window.Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = url;
        });
      };

      let validNfts = [];
      while (validNfts.length < desiredCount) {
        const apiUrl = `https://api.opensea.io/api/v2/collection/${collectionSlug}/nfts?limit=${limit}&offset=${offset}`;
        try {
          const res = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-api-key': OPENSEA_API_KEY,
            },
          });
          const data = await res.json();
          const nfts = data.nfts || [];
          if (nfts.length === 0) break; // no more data
          for (const item of nfts) {
            if (validNfts.length >= desiredCount) break;
            if (validImage(item.image_url)) {
              // eslint-disable-next-line no-await-in-loop
              const loadable = await isImageLoadable(item.image_url);
              if (loadable) validNfts.push(item);
            }
          }
          offset += limit;
        } catch (err) {
          console.error('OpenSea NFT API error:', err);
          break;
        }
      }
      const apiNfts = validNfts.slice(0, desiredCount).map((item, idx) => ({
        id: item.identifier || idx,
        name: item.name || `NFT #${item.identifier || idx + 1}`,
        artist: item.owner || 'Unknown',
        price: item.price || '—',
        image: item.image_url,
        likes: Math.floor(Math.random() * 1000),
        rating: (Math.random() * 2 + 3).toFixed(1),
      }));
      setNfts(apiNfts);
      setLoading(false);
    };
    fetchWithImages();
  }, [collectionSlug]);

  return (
    <section id="featured-nfts" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-oxanium mb-4">
            <span className="gradient-text">NFTs</span> Marketplace
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the most popular and trending NFT collections from talented artists around the world.
          </p>
        </motion.div>

        {/* Dropdown for collection selection */}
        <div className="flex justify-center mb-10">
          <select
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={collectionSlug}
            onChange={e => setCollectionSlug(e.target.value)}
          >
            {COLLECTION_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-3 text-center text-gray-400 py-12">
              Loading NFTs...
            </div>
          ) : nfts.length === 0 ? (
            <div className="col-span-3 text-center text-gray-400 py-12">
              No NFTs found. Please check your OpenSea API key and network connection.
            </div>
          ) : (
            nfts.map((nft, index) => (
              <motion.div
                key={nft.id}
                className="card group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* NFT Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Like Button */}
                  <motion.button
                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart size={20} />
                  </motion.button>
                </div>

                {/* NFT Info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-white group-hover:text-primary-400 transition-colors">
                        {nft.name}
                      </h3>
                      <p className="text-gray-400 text-sm">by {nft.artist}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm font-medium">{nft.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Current Bid</p>
                      <p className="font-bold text-lg gradient-text">{nft.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 text-sm">{nft.likes} likes</span>
                      <motion.button
                        className="p-2 bg-primary-500 rounded-lg text-white hover:bg-primary-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowRight size={16} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-secondary text-lg px-8 py-4 flex items-center space-x-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All NFTs</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedNFTs;

