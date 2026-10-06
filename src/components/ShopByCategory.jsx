import React from 'react';
import { CATEGORIES } from '../data/categories';
import CategoryCard from './CategoryCard';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function ShopByCategory() {
  const { navigate } = useShop();

  // Selected 8 main categories for the homepage grid
  const targetCategorySlugs = [
    'men',
    'women',
    'kids',
    'shoes',
    'caps',
    'traditional-wear',
    'accessories',
    'bags'
  ];

  const featuredCategories = targetCategorySlugs
    .map(slug => CATEGORIES.find(c => c.slug === slug))
    .filter(Boolean);

  return (
    <section className="w-full bg-luxury-cream/40 py-16 sm:py-24 border-b border-neutral-100">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-luxury-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-luxury-gold-dark">
                CURATED COLLECTIONS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-luxury-black">
              SHOP BY CATEGORY
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base mt-2 font-normal">
              Find your signature style across tailored fashion, footwear, and cultural couture.
            </p>
          </div>

          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => navigate('/shop')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-luxury-black hover:text-luxury-gold transition-colors pb-1 border-b-2 border-luxury-black hover:border-luxury-gold group"
            >
              <span>VIEW ALL DEPARTMENTS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Categories Grid (4 columns on desktop, 2 on mobile/tablet) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {featuredCategories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
