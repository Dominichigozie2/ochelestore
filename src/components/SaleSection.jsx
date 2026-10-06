import React from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { ArrowRight, Tag, Percent } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function SaleSection() {
  const { navigate } = useShop();

  const saleProducts = PRODUCTS.filter(p => p.isSale);

  return (
    <section className="w-full py-16 sm:py-24 bg-white border-b border-neutral-100">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-widest">
                <Percent className="w-3 h-3" />
                LIMITED PRIVILEGE
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                ARCHIVE PIECES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-luxury-black">
              SALE — UP TO 40% OFF
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Select archival garments, runway samples, and seasonal icons at special rates.
            </p>
          </div>

          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => navigate('/sale')}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-rose-600 hover:text-rose-700 transition-colors pb-1 border-b border-rose-600 hover:border-rose-700 group"
            >
              <span>EXPLORE ALL SALE ({saleProducts.length})</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {saleProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
