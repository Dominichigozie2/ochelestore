import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Heart, ShoppingBag, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function MobileMenu({ isOpen, onClose }) {
  const { navigate, cartCount, wishlistCount, setIsSearchOpen } = useShop();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop All", path: "/shop" },
    { name: "Men", path: "/men", badge: "NEW" },
    { name: "Women", path: "/women" },
    { name: "Kids", path: "/kids" },
    { name: "Shoes", path: "/shoes" },
    { name: "Traditional Wear", path: "/traditional-wear", highlight: true },
    { name: "Clothing", path: "/clothing" },
    { name: "Caps & Hats", path: "/caps" },
    { name: "Accessories", path: "/accessories" },
    { name: "Bags", path: "/bags" },
    { name: "Watches & Jewelry", path: "/watches" },
    { name: "New Arrivals", path: "/new-arrivals", gold: true },
    { name: "Sale (Up to 40% Off)", path: "/sale", sale: true },
  ];

  const handleLinkClick = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer content */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 text-luxury-black"
          >
            {/* Header */}
            <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-luxury-cream/50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-luxury-gold" />
                <span className="font-serif text-xl tracking-[0.2em] font-bold text-luxury-black uppercase">
                  OCHELE
                </span>
                <span className="text-[9px] tracking-widest uppercase text-luxury-gold font-semibold ml-1">
                  COLLECTION
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors text-neutral-600"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Action Bar (Search & Wishlist) */}
            <div className="p-4 border-b border-neutral-100 bg-white grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onClose();
                  setIsSearchOpen(true);
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-700 transition-colors"
              >
                <Search className="w-4 h-4 text-luxury-gold" />
                <span>Search</span>
              </button>

              <button
                onClick={() => handleLinkClick('/wishlist')}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-700 transition-colors"
              >
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Saved ({wishlistCount})</span>
              </button>
            </div>

            {/* Scrollable Navigation List */}
            <div className="flex-1 overflow-y-auto px-4 py-3 divide-y divide-neutral-100">
              <div className="py-2 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.path)}
                    className="w-full flex items-center justify-between py-3 px-3 rounded hover:bg-luxury-cream text-left transition-colors text-sm font-medium group"
                  >
                    <span className={`flex items-center gap-2 ${
                      link.highlight ? "font-semibold text-luxury-black" :
                      link.sale ? "font-semibold text-rose-600" :
                      link.gold ? "font-semibold text-luxury-gold-dark" : "text-neutral-800"
                    }`}>
                      {link.highlight && <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />}
                      {link.name}
                    </span>

                    <div className="flex items-center gap-2">
                      {link.badge && (
                        <span className="text-[10px] bg-luxury-gold/15 text-luxury-gold-dark font-bold px-2 py-0.5 tracking-wider">
                          {link.badge}
                        </span>
                      )}
                      <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 group-hover:text-luxury-black transition-all" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Cultural heritage highlight in menu */}
              <div className="py-4 px-2">
                <div
                  onClick={() => handleLinkClick('/traditional-wear')}
                  className="cursor-pointer bg-luxury-black text-white p-4 rounded-sm relative overflow-hidden"
                >
                  <span className="text-[10px] font-bold text-luxury-gold uppercase tracking-widest block mb-1">
                    Featured Edit
                  </span>
                  <h4 className="font-serif text-base font-semibold mb-1">Rooted in Culture</h4>
                  <p className="text-xs text-neutral-400 mb-3">Modern African royal silhouettes and gilded Agbadas.</p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-luxury-gold font-semibold">
                    Explore Edit <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>

            {/* Footer / Account / Customer Service */}
            <div className="p-4 border-t border-neutral-100 bg-luxury-cream text-xs text-neutral-600 space-y-2">
              <div className="flex justify-between items-center">
                <span>Customer Care: +1 (800) 845-LUXE</span>
                <span className="font-semibold text-luxury-black">Worldwide Free Ship</span>
              </div>
              <div className="text-[11px] text-neutral-400 text-center pt-2">
                © 2026 OCHELE Atelier. All rights reserved.
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
