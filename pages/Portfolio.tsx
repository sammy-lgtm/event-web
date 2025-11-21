import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { PORTFOLIO_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Wedding', 'Birthday', 'Corporate', 'Floral', 'Rentals', 'Selfie Arena'];

  const filteredItems = filter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <PageTransition>
      <div className="pt-24 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif font-bold text-neutral-900 mb-6">Our Portfolio</h1>
            <p className="text-gray-600">A visual journey through our finest moments.</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                  filter === cat 
                    ? 'bg-neutral-900 text-white shadow-lg' 
                    : 'bg-neutral-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group rounded-lg overflow-hidden cursor-pointer"
                >
                  <img src={item.imageUrl} alt={item.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">{item.title}</h3>
                    <span className="text-gold-400 font-medium uppercase tracking-widest text-xs">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Portfolio;