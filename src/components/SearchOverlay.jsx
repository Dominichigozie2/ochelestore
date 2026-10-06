import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';

export default function SearchOverlay() {
  const { isSearchOpen, setIsSearchOpen, navigate } = useShop();
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 150);
    } else {
      setSearchTerm('');
    }
  }, [isSearchOpen]);

  const popularSearches = [
    "Agbada",
    "Italian Sneaker",
    "Kaftan",
    "Silk Gown",
    "Gold Watch",
    "Loafers",
    "Ankara Trench",
    "Aso Oke Fila"
  ];

  const matchingProducts = searchTerm.trim() === ''
    ? []
    : PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.subcategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 6);

  const handleSelectProduct = (id) => {
    setIsSearchOpen(false);
    navigate(`/product/${id}`);
  };

  const handleTagClick = (tag) => {
    setSearchTerm(tag);
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
          />

          {/* Search Content Container */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-4xl mx-auto mt-12 sm:mt-20 px-4 sm:px-6 z-50 text-luxury-black"
          >
            <div className="bg-white rounded-sm shadow-2xl border border-neutral-200 overflow-hidden">
              {/* Search Header Input */}
              <div className="p-4 sm:p-6 border-b border-neutral-200 flex items-center gap-4 bg-luxury-cream/40">
                <Search className="w-6 h-6 text-luxury-gold stroke-[2] flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search collections, sneakers, agbadas, jewelry..."
                  className="w-full text-base sm:text-xl font-medium placeholder-neutral-400 bg-transparent focus:outline-none"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="p-1 text-neutral-400 hover:text-black transition-colors"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 text-neutral-400 hover:text-black rounded-full hover:bg-neutral-100 transition-colors"
                  aria-label="Close search"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body: Popular Searches OR Live Results */}
              <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
                {searchTerm.trim() === '' ? (
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                        <TrendingUp className="w-3.5 h-3.5 text-luxury-gold" />
                        <span>Popular Curations</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {popularSearches.map((term, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleTagClick(term)}
                            className="px-3.5 py-1.5 bg-neutral-50 hover:bg-luxury-black text-neutral-700 hover:text-white border border-neutral-200 hover:border-luxury-black text-xs font-medium rounded-xs transition-colors"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-100">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                        <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
                        <span>Trending In Atelier</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {PRODUCTS.slice(0, 4).map((item) => (
                          <div
                            key={item.id}
                            onClick={() => handleSelectProduct(item.id)}
                            className="group cursor-pointer space-y-2"
                          >
                            <div className="aspect-[3/4] bg-neutral-100 overflow-hidden rounded-xs">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <p className="text-xs font-semibold text-luxury-black line-clamp-1 group-hover:text-luxury-gold-dark transition-colors">
                              {item.name}
                            </p>
                            <p className="text-xs font-serif font-bold text-neutral-800">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                        Search Results ({matchingProducts.length})
                      </span>
                      {matchingProducts.length > 0 && (
                        <button
                          onClick={() => {
                            setIsSearchOpen(false);
                            navigate(`/shop`);
                          }}
                          className="text-xs font-bold uppercase tracking-wider text-luxury-gold-dark hover:underline flex items-center gap-1"
                        >
                          View in catalog <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    {matchingProducts.length === 0 ? (
                      <div className="py-12 text-center text-neutral-500 space-y-2">
                        <p className="font-serif text-lg text-neutral-800">
                          No results found for "{searchTerm}"
                        </p>
                        <p className="text-xs max-w-sm mx-auto">
                          Try searching by category such as "Agbada", "Kaftan", "Shoes", or "Sneakers".
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {matchingProducts.map((prod) => (
                          <div
                            key={prod.id}
                            onClick={() => handleSelectProduct(prod.id)}
                            className="flex items-center gap-3 p-3 border border-neutral-100 hover:border-luxury-gold/50 rounded-xs hover:bg-neutral-50/50 cursor-pointer transition-all group"
                          >
                            <div className="w-16 h-20 bg-neutral-100 rounded-xs overflow-hidden flex-shrink-0">
                              <img
                                src={prod.image}
                                alt={prod.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-[10px] uppercase font-bold tracking-wider text-luxury-gold-dark">
                                {prod.category}
                              </span>
                              <h4 className="font-serif text-xs font-semibold text-luxury-black truncate group-hover:text-luxury-gold transition-colors">
                                {prod.name}
                              </h4>
                              <p className="text-xs font-serif font-bold text-neutral-900 mt-1">
                                ${prod.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
