import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function NewArrivals() {
  const { navigate } = useShop();
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Men', 'Women', 'Shoes', 'Traditional Wear'];

  const newProducts = PRODUCTS.filter(p => p.isNew);

  const filtered = activeTab === 'All'
    ? newProducts
    : newProducts.filter(p => p.category === activeTab || p.gender === activeTab);

  return (
    <section className="w-full py-16 sm:py-24 bg-white border-b border-neutral-100">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-luxury-gold-dark">
                SEASON PREMIERE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-luxury-black">
              NEW ARRIVALS
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Unveiled straight from the atelier. Handcrafted modern silhouettes.
            </p>
          </div>

          {/* Right Action & Tabs */}
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 transition-all whitespace-nowrap rounded-xs ${
                    activeTab === tab
                      ? 'bg-luxury-black text-white shadow-xs'
                      : 'text-neutral-500 hover:text-black hover:bg-neutral-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* View All Button */}
            <button
              onClick={() => navigate('/new-arrivals')}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-luxury-black hover:text-luxury-gold transition-colors pb-1 border-b border-luxury-black hover:border-luxury-gold group flex-shrink-0"
            >
              <span>VIEW ALL</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filtered.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <button
            onClick={() => navigate('/new-arrivals')}
            className="w-full py-3 bg-neutral-900 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <span>VIEW ALL NEW ARRIVALS ({newProducts.length})</span>
            <ArrowRight className="w-3.5 h-3.5 text-luxury-gold" />
          </button>
        </div>
      </div>
    </section>
  );
}
