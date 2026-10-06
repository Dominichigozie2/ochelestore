import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Filter, SlidersHorizontal, ArrowUpDown, X, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { useShop } from '../context/ShopContext';

export default function Shop() {
  const { navigate } = useShop();

  // Filter State
  const initialFilters = {
    category: 'All',
    gender: 'All',
    size: 'All',
    color: 'All',
    priceRange: { label: "All Prices", min: 0, max: 1000 },
    onlySale: false,
    onlyNew: false,
  };

  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Extract all unique sizes and colors from products
  const availableSizes = useMemo(() => {
    const set = new Set();
    PRODUCTS.forEach(p => p.sizes?.forEach(s => set.add(s)));
    return Array.from(set).slice(0, 10);
  }, []);

  const availableColors = useMemo(() => {
    const map = new Map();
    PRODUCTS.forEach(p => p.colors?.forEach(c => map.set(c.name, c)));
    return Array.from(map.values()).slice(0, 8);
  }, []);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(item => {
      // Category
      if (filters.category !== 'All' && item.category !== filters.category) {
        return false;
      }
      // Gender
      if (filters.gender !== 'All' && item.gender !== filters.gender && item.gender !== 'Unisex') {
        return false;
      }
      // Size
      if (filters.size !== 'All' && !item.sizes?.includes(filters.size)) {
        return false;
      }
      // Color
      if (filters.color !== 'All' && !item.colors?.some(c => c.name === filters.color)) {
        return false;
      }
      // Price
      if (item.price < filters.priceRange.min || item.price > filters.priceRange.max) {
        return false;
      }
      // Badges
      if (filters.onlySale && !item.isSale) {
        return false;
      }
      if (filters.onlyNew && !item.isNew) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [filters, sortBy]);

  const hasActiveFilters =
    filters.category !== 'All' ||
    filters.gender !== 'All' ||
    filters.size !== 'All' ||
    filters.color !== 'All' ||
    filters.priceRange.label !== 'All Prices' ||
    filters.onlySale ||
    filters.onlyNew;

  return (
    <div className="w-full bg-white min-h-screen py-6 sm:py-10">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
          <button onClick={() => navigate('/')} className="hover:text-black transition-colors">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-300" />
          <span className="text-luxury-black font-semibold">The Shop</span>
          {filters.category !== 'All' && (
            <>
              <ChevronRight className="w-3 h-3 text-neutral-300" />
              <span className="text-luxury-gold-dark font-medium">{filters.category}</span>
            </>
          )}
        </nav>

        {/* Page Heading & Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-neutral-200 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-[1px] bg-luxury-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold-dark">
                THE COMPLETE CATALOG
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-black tracking-tight">
              ALL ATELIER CREATIONS
            </h1>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1">
              Showing {filteredProducts.length} curated luxury pieces designed for effortless distinction.
            </p>
          </div>

          {/* Controls: Mobile filter toggle & Sort dropdown */}
          <div className="flex items-center gap-3">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-luxury-gold" />
              <span>Filters {hasActiveFilters && "•"}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-white border border-neutral-200 px-3 py-2 rounded-xs">
              <span className="text-xs text-neutral-400 uppercase tracking-wider hidden sm:inline">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products by"
                className="text-xs font-semibold text-luxury-black bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="newest">Newest Additions</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filter Badges Bar */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 py-4 border-b border-neutral-100 text-xs">
            <span className="text-neutral-400 font-medium">Active:</span>
            {filters.category !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 rounded text-neutral-800 font-medium">
                Category: {filters.category}
                <button onClick={() => setFilters(p => ({ ...p, category: 'All' }))}><X className="w-3 h-3 text-neutral-500" /></button>
              </span>
            )}
            {filters.gender !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 rounded text-neutral-800 font-medium">
                Gender: {filters.gender}
                <button onClick={() => setFilters(p => ({ ...p, gender: 'All' }))}><X className="w-3 h-3 text-neutral-500" /></button>
              </span>
            )}
            {filters.size !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 rounded text-neutral-800 font-medium">
                Size: {filters.size}
                <button onClick={() => setFilters(p => ({ ...p, size: 'All' }))}><X className="w-3 h-3 text-neutral-500" /></button>
              </span>
            )}
            {filters.color !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 rounded text-neutral-800 font-medium">
                Color: {filters.color}
                <button onClick={() => setFilters(p => ({ ...p, color: 'All' }))}><X className="w-3 h-3 text-neutral-500" /></button>
              </span>
            )}
            {filters.priceRange.label !== 'All Prices' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 rounded text-neutral-800 font-medium">
                Price: {filters.priceRange.label}
                <button onClick={() => setFilters(p => ({ ...p, priceRange: initialFilters.priceRange }))}><X className="w-3 h-3 text-neutral-500" /></button>
              </span>
            )}
            {filters.onlySale && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-rose-50 text-rose-700 rounded font-medium">
                Sale Only
                <button onClick={() => setFilters(p => ({ ...p, onlySale: false }))}><X className="w-3 h-3 text-rose-500" /></button>
              </span>
            )}
            {filters.onlyNew && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-luxury-cream text-luxury-gold-dark rounded font-medium">
                New Season
                <button onClick={() => setFilters(p => ({ ...p, onlyNew: false }))}><X className="w-3 h-3" /></button>
              </span>
            )}
            <button
              onClick={() => setFilters(initialFilters)}
              className="text-luxury-gold-dark hover:underline font-semibold ml-2"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Main Content Area: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8">
          {/* Desktop Filter Sidebar (3 cols) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 bg-white p-5 rounded-xs border border-neutral-200">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                categories={CATEGORIES}
                availableColors={availableColors}
                availableSizes={availableSizes}
                onReset={() => setFilters(initialFilters)}
              />
            </div>
          </div>

          {/* Product Grid Area (9 cols desktop, 4-col responsive grid) */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center bg-luxury-cream/40 rounded-sm border border-neutral-200/80 p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto shadow-sm border border-neutral-200">
                  <Filter className="w-6 h-6 text-luxury-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-luxury-black">
                  No matching garments found
                </h3>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                  Try adjusting or resetting your selected filters to view other exquisite atelier pieces.
                </p>
                <button
                  onClick={() => setFilters(initialFilters)}
                  className="px-6 py-3 bg-luxury-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                >
                  RESET ALL FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Slide-Over Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
                  <h3 className="font-serif text-lg font-bold">Refine Catalog</h3>
                  <button onClick={() => setIsMobileFilterOpen(false)} className="p-1">
                    <X className="w-5 h-5 text-neutral-500" />
                  </button>
                </div>
                <FilterSidebar
                  filters={filters}
                  setFilters={setFilters}
                  categories={CATEGORIES}
                  availableColors={availableColors}
                  availableSizes={availableSizes}
                  onReset={() => setFilters(initialFilters)}
                />
              </div>

              <div className="pt-6 border-t border-neutral-200 mt-6">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full py-3.5 bg-luxury-black text-white text-xs font-bold uppercase tracking-widest text-center"
                >
                  APPLY FILTERS ({filteredProducts.length})
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
