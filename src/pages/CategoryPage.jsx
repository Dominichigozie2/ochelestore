import React, { useState, useMemo } from 'react';
import { ChevronRight, Sparkles, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';

export default function CategoryPage({ categorySlug }) {
  const { navigate } = useShop();

  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  // Match category configuration
  const categoryMeta = useMemo(() => {
    return CATEGORIES.find(c => c.slug === categorySlug) || {
      id: categorySlug,
      name: categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      heroTitle: "CURATED ATELIER EDIT",
      heroSubtitle: "Handcrafted timeless luxury for the discerning individual.",
      description: "Explore limited pieces woven and constructed in accordance with the highest artisanal standards.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop",
      subcategories: ["All Pieces", "New Releases", "Icons", "Accessories"]
    };
  }, [categorySlug]);

  // Filter products by category or special flag
  const categoryProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Special routes
      if (categorySlug === 'new-arrivals') return p.isNew;
      if (categorySlug === 'best-sellers') return p.isBestSeller;
      if (categorySlug === 'sale') return p.isSale;

      // Category matching
      if (categorySlug === 'men') return p.gender === 'Men';
      if (categorySlug === 'women') return p.gender === 'Women';
      if (categorySlug === 'kids') return p.gender === 'Kids';
      if (categorySlug === 'shoes') return p.category === 'Shoes';
      if (categorySlug === 'caps') return p.category === 'Caps';
      if (categorySlug === 'hats') return p.category === 'Hats' || p.category === 'Caps';
      if (categorySlug === 'traditional-wear') return p.category === 'Traditional Wear';
      if (categorySlug === 'clothing') return p.category === 'Clothing';
      if (categorySlug === 'accessories') return p.category === 'Accessories';
      if (categorySlug === 'bags') return p.category === 'Bags';
      if (categorySlug === 'watches') return p.category === 'Watches';
      if (categorySlug === 'jewelry') return p.category === 'Jewelry';

      // Fallback
      return p.category.toLowerCase().includes(categorySlug.replace(/-/g, ' '));
    });
  }, [categorySlug]);

  // Subcategory filtering
  const filteredProducts = useMemo(() => {
    let list = categoryProducts;
    if (activeSubcategory !== 'All') {
      list = list.filter(p => p.subcategory === activeSubcategory);
    }

    return [...list].sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [categoryProducts, activeSubcategory, sortBy]);

  const subcategoriesList = ['All', ...(categoryMeta.subcategories || [])];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Category Editorial Hero */}
      <div className="relative w-full bg-luxury-black text-white min-h-[380px] sm:min-h-[440px] flex items-center overflow-hidden">
        {/* Background Image with luxury dark vignette */}
        <img
          src={categoryMeta.bannerImage || categoryMeta.image}
          alt={categoryMeta.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-neutral-500" />
            <button onClick={() => navigate('/shop')} className="hover:text-white transition-colors">
              Departments
            </button>
            <ChevronRight className="w-3 h-3 text-neutral-500" />
            <span className="text-luxury-gold font-semibold uppercase">{categoryMeta.name}</span>
          </nav>

          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-gold/20 border border-luxury-gold/40 text-luxury-gold text-[11px] font-bold uppercase tracking-[0.25em]">
              <Sparkles className="w-3 h-3 text-luxury-gold" />
              {categoryMeta.title || "HAUTE CURATION"}
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              {categoryMeta.heroTitle || categoryMeta.name}
            </h1>

            <p className="text-neutral-300 text-sm sm:text-base font-normal leading-relaxed">
              {categoryMeta.heroSubtitle || categoryMeta.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filter Bar & Subcategory Pills */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-neutral-200 gap-6">
          {/* Subcategory Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {subcategoriesList.map((sub, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSubcategory(sub)}
                className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-xs transition-all whitespace-nowrap ${
                  activeSubcategory === sub
                    ? 'bg-luxury-black text-white shadow-xs'
                    : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-600 border border-neutral-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Product Count & Sort */}
          <div className="flex items-center justify-between md:justify-end gap-4">
            <span className="text-xs text-neutral-500 uppercase tracking-wider">
              {filteredProducts.length} Items Available
            </span>

            <div className="flex items-center gap-2 bg-white border border-neutral-200 px-3 py-2 rounded-xs">
              <span className="text-xs text-neutral-400 uppercase tracking-wider hidden sm:inline">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort category products"
                className="text-xs font-semibold text-luxury-black bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="newest">New Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="pt-8">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center bg-luxury-cream/40 rounded-sm border border-neutral-200 p-8 space-y-4">
              <h3 className="font-serif text-xl font-bold text-luxury-black">
                No items currently in this subcategory
              </h3>
              <p className="text-xs text-neutral-500">
                Explore all items in {categoryMeta.name} or visit our complete lookbook.
              </p>
              <button
                onClick={() => setActiveSubcategory('All')}
                className="px-6 py-3 bg-luxury-black text-white text-xs font-bold uppercase tracking-widest"
              >
                SHOW ALL {categoryMeta.name.toUpperCase()}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
