import React from 'react';
import { ArrowRight, Sparkles, Clock } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function PromotionalBanner() {
  const { navigate } = useShop();

  return (
    <section className="w-full bg-luxury-black text-white py-16 sm:py-24 relative overflow-hidden border-y border-luxury-gold/20">
      {/* Decorative Gold Radial Glow Background */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text and Promotion Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-luxury-gold/40 text-luxury-gold text-xs font-bold uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              PRIVATE ARCHIVE PRIVILEGE
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
              THE SIGNATURE <br />
              <span className="text-luxury-gold italic font-normal">COLLECTION</span>
            </h2>

            <div className="flex items-baseline gap-4">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-luxury-gold tracking-wide">
                UP TO 30% OFF
              </span>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
                Limited Archive Release
              </span>
            </div>

            <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Discover selected pieces crafted for timeless style. Exceptional calfskin leather,
              hand-embroidered damask, and Swiss movements — now accessible through our seasonal client curation.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => navigate('/sale')}
                className="group px-8 py-4 bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-black text-xs font-extrabold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 shadow-gold"
              >
                <span>SHOP THE SALE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/shop')}
                className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-neutral-700 hover:border-luxury-gold text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center"
              >
                VIEW LOOKBOOK
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-3">
              <Clock className="w-4 h-4 text-luxury-gold" />
              <span>Offer applies automatically at checkout. Complimentary gift packaging included.</span>
            </div>
          </div>

          {/* Right Integrated Luxury Product / Model Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] sm:aspect-square max-w-md mx-auto overflow-hidden rounded-sm border border-neutral-800 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop"
                alt="Signature Gold Timepiece & Accessories"
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Product Highlight Inside Banner */}
              <div className="absolute bottom-5 inset-x-5 p-4 bg-luxury-black/90 backdrop-blur-md border border-luxury-gold/30 rounded-xs flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold">Featured Icon</p>
                  <p className="font-serif text-sm font-semibold text-white">Sovereign 18k Gold Chrono</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-luxury-gold font-serif">$520</span>
                  <span className="block text-[10px] text-neutral-400 line-through">$650</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
