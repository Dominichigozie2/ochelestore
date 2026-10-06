import React from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { ArrowRight, Sparkles, Crown } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function TraditionalWearSection() {
  const { navigate } = useShop();

  const traditionalProducts = PRODUCTS.filter(p => p.category === 'Traditional Wear');

  const subCategories = [
    { name: "Imperial Agbada", path: "/traditional-wear" },
    { name: "Modern Kaftans", path: "/traditional-wear" },
    { name: "Silk Ankara", path: "/traditional-wear" },
    { name: "Native Wear", path: "/traditional-wear" },
    { name: "Traditional Dresses", path: "/traditional-wear" },
    { name: "Aso Oke Caps", path: "/caps" },
    { name: "Heritage Coral", path: "/jewelry" },
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-[#FAF9F5] border-b border-neutral-200/80 relative overflow-hidden">
      {/* Decorative Gold Leaf Emblem Accent in background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-luxury-gold/15 border border-luxury-gold/30 text-luxury-gold-dark text-[11px] font-bold uppercase tracking-[0.3em] mx-auto">
            <Crown className="w-3.5 h-3.5 text-luxury-gold" />
            HERITAGE & ROYALTY
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-luxury-black">
            ROOTED IN CULTURE<span className="text-luxury-gold">.</span>
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg font-normal leading-relaxed">
            Discover timeless traditional pieces reimagined for modern style. From three-piece Swiss
            damask Agbadas to silk georgette Zari kaftans, each piece celebrates regal poise and ancestral mastery.
          </p>

          {/* Subcategory Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {subCategories.map((sub, idx) => (
              <button
                key={idx}
                onClick={() => navigate(sub.path)}
                className="px-3.5 py-1.5 text-xs font-semibold bg-white hover:bg-luxury-black text-neutral-700 hover:text-white border border-neutral-200 hover:border-luxury-black rounded-xs transition-all duration-200 shadow-xs"
              >
                {sub.name}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Banner + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Feature Banner */}
          <div
            onClick={() => navigate('/traditional-wear')}
            className="lg:col-span-5 relative group overflow-hidden rounded-sm cursor-pointer shadow-xl bg-luxury-black text-white min-h-[380px] flex flex-col justify-end p-8"
          >
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop"
              alt="Rooted in Culture Haute African Wear"
              className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-106 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-luxury-gold">
                THE CORONATION ATELIER
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Bespoke Swiss Damask & Silk Bullion Embroidery
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Hand-threaded over 80 hours by master Nigerian & Senegalese couturiers.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-luxury-gold group-hover:translate-x-1.5 transition-transform">
                  EXPLORE CULTURAL SUITE <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {traditionalProducts.slice(0, 3).map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>

        {/* View All Traditional Wear Action */}
        <div className="text-center pt-2">
          <button
            onClick={() => navigate('/traditional-wear')}
            className="px-8 py-3.5 bg-luxury-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-[0.2em] inline-flex items-center gap-3 transition-colors shadow-sm"
          >
            <span>VIEW COMPLETE TRADITIONAL ATELIER</span>
            <ArrowRight className="w-4 h-4 text-luxury-gold" />
          </button>
        </div>
      </div>
    </section>
  );
}
