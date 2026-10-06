import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function AnnouncementBar() {
  const { navigate } = useShop();

  return (
    <div className="w-full bg-luxury-cream border-b border-luxury-sand/60 text-xs py-2 px-4 transition-all duration-300">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Left message */}
        <div className="hidden sm:flex items-center gap-2 text-neutral-600 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
          <span>Complimentary worldwide shipping on orders over $100</span>
        </div>

        {/* Center / Primary announcement */}
        <div className="w-full sm:w-auto text-center flex items-center justify-center gap-3 font-medium text-luxury-black tracking-wide">
          <span className="uppercase text-[11px] font-semibold text-luxury-gold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-luxury-gold" />
            New Season 2026
          </span>
          <span className="text-neutral-300">|</span>
          <span className="text-neutral-700">Easy 30-day returns & authentic craftsmanship</span>
          <button
            onClick={() => navigate('/new-arrivals')}
            className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-luxury-gold hover:text-luxury-gold-dark transition-colors underline underline-offset-4 decoration-luxury-gold/50"
          >
            Explore <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Right quick info */}
        <div className="hidden lg:flex items-center gap-4 text-neutral-500 text-[11px]">
          <span className="hover:text-black cursor-pointer transition-colors" onClick={() => navigate('/traditional-wear')}>
            Cultural Atelier
          </span>
          <span>•</span>
          <span className="font-semibold text-neutral-800">USD $</span>
        </div>
      </div>
    </div>
  );
}
