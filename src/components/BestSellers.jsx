import React, { useRef } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight, ArrowRight, Award } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function BestSellers() {
  const { navigate } = useShop();
  const carouselRef = useRef(null);

  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-white border-b border-neutral-100">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Carousel Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-luxury-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-luxury-gold-dark">
                MOST COVETED
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-luxury-black">
              BEST SELLERS
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Celebrated icons and timeless silhouettes chosen by discerning clients worldwide.
            </p>
          </div>

          <div className="mt-4 sm:mt-0 flex items-center gap-4">
            <button
              onClick={() => navigate('/best-sellers')}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-luxury-black hover:text-luxury-gold transition-colors pb-1 border-b border-luxury-black hover:border-luxury-gold mr-3"
            >
              <span>EXPLORE ALL ({bestSellers.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Left / Right Arrow controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-neutral-200 hover:border-luxury-black flex items-center justify-center text-luxury-black hover:bg-neutral-50 transition-colors"
                aria-label="Previous best sellers"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border border-neutral-200 hover:border-luxury-black flex items-center justify-center text-luxury-black hover:bg-neutral-50 transition-colors"
                aria-label="Next best sellers"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="w-[260px] sm:w-[300px] lg:w-[320px] flex-shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
