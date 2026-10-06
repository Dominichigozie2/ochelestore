import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight, Star, Heart, ShoppingBag, Truck, RotateCcw,
  ShieldCheck, Ruler, ChevronDown, Check, ArrowRight, Share2, Sparkles
} from 'lucide-react';
import { PRODUCTS, getProductById, getRelatedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';

export default function ProductDetails({ productId }) {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsCartOpen,
    setIsSizeGuideOpen,
    navigate,
    showToast
  } = useShop();

  const product = getProductById(productId) || PRODUCTS[0];
  const relatedProducts = getRelatedProducts(product.id, 4);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || null);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setSelectedColor(product.colors?.[0]?.name || null);
    setSelectedSize(product.sizes?.[0] || 'Standard');
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId, product]);

  const isFavorited = isInWishlist(product.id);
  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    setIsCartOpen(true);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(prev => prev === section ? null : section);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast("Link copied to clipboard", "info");
    }
  };

  return (
    <div className="w-full bg-white min-h-screen py-8 sm:py-12">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8 overflow-x-auto no-scrollbar">
          <button onClick={() => navigate('/')} className="hover:text-black transition-colors whitespace-nowrap">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-300 flex-shrink-0" />
          <button onClick={() => navigate('/shop')} className="hover:text-black transition-colors whitespace-nowrap">
            Atelier
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-300 flex-shrink-0" />
          <button
            onClick={() => navigate(`/${product.category.toLowerCase().replace(/\s+/g, '-')}`)}
            className="hover:text-black transition-colors whitespace-nowrap"
          >
            {product.category}
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-300 flex-shrink-0" />
          <span className="text-luxury-black font-semibold truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* Main Product Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT: Image Gallery (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="aspect-[3/4] sm:aspect-[4/5] bg-neutral-100 rounded-sm overflow-hidden relative group border border-neutral-200/80 shadow-xs">
              <img
                src={galleryImages[activeImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 bg-luxury-black text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 shadow-md">
                  {product.badge}
                </span>
              )}

              {/* Share Icon */}
              <button
                onClick={handleShare}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-neutral-700 flex items-center justify-center shadow-md transition-colors"
                title="Share product"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            {galleryImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 sm:w-24 aspect-[3/4] rounded-xs overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImageIndex === idx
                        ? 'border-luxury-gold shadow-sm'
                        : 'border-neutral-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Angle ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product Buy Box & Accordions (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6 text-luxury-black">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                <span className="uppercase font-semibold tracking-widest text-luxury-gold-dark">
                  {product.subcategory || product.category} • {product.gender}
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="flex text-luxury-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-neutral-900">{product.rating}</span>
                  <span>({product.reviews} reviews)</span>
                </div>
              </div>

              <h1 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-luxury-black leading-tight">
                {product.name}
              </h1>

              {/* Price Row */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-luxury-black">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <>
                    <span className="text-base text-neutral-400 line-through">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                    <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-xs">
                      Save ${(product.oldPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Short editorial description */}
            <p className="text-sm text-neutral-600 leading-relaxed font-normal border-y border-neutral-100 py-4">
              {product.description}
            </p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs">
                  <span className="font-bold uppercase tracking-wider text-neutral-800">
                    Color Tone:
                  </span>
                  <span className="text-neutral-500 font-medium">{selectedColor}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color.name)}
                      style={{ backgroundColor: color.hex }}
                      className={`w-8 h-8 rounded-full border transition-all ${
                        selectedColor === color.name
                          ? 'ring-2 ring-offset-2 ring-luxury-black scale-105'
                          : 'border-neutral-300 hover:scale-105'
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold uppercase tracking-wider text-neutral-800">
                    Select Size:
                  </span>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="inline-flex items-center gap-1 text-luxury-gold-dark hover:underline font-semibold"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    Bespoke Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border rounded-xs transition-all ${
                        selectedSize === sz
                          ? 'bg-luxury-black text-white border-luxury-black'
                          : 'bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-300'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper & Add to Bag / Buy Now CTAs */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-neutral-300 rounded-xs bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-3 text-neutral-600 hover:bg-neutral-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-bold text-luxury-black">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-3 text-neutral-600 hover:bg-neutral-100 transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* ADD TO BAG */}
                <button
                  onClick={handleAddToCart}
                  disabled={justAdded}
                  className={`flex-1 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2.5 shadow-md ${
                    justAdded
                      ? 'bg-emerald-700 text-white'
                      : 'bg-luxury-black hover:bg-neutral-800 text-white'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO BAG</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-luxury-gold" />
                      <span>ADD TO BAG</span>
                    </>
                  )}
                </button>

                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 border rounded-xs transition-colors flex items-center justify-center ${
                    isFavorited
                      ? 'border-rose-400 bg-rose-50 text-rose-600'
                      : 'border-neutral-300 hover:border-black text-neutral-700'
                  }`}
                  aria-label="Wishlist toggle"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-rose-500' : ''}`} />
                </button>
              </div>

              {/* BUY NOW Direct Button */}
              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-black text-xs font-extrabold uppercase tracking-[0.2em] transition-all shadow-sm"
              >
                BUY NOW WITH EXPRESS CHECKOUT
              </button>
            </div>

            {/* Quick Guarantees Bar */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-100 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <span>Complimentary Shipping Over $100</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <span>30-Day Hassle-Free Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <span>100% Genuine Atelier Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <span>Complimentary Luxury Box Packaging</span>
              </div>
            </div>

            {/* Accordions (Description, Materials, Shipping, Care) */}
            <div className="pt-4 border-t border-neutral-200 divide-y divide-neutral-200 text-xs">
              {/* Description & Silhouette */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex items-center justify-between font-bold uppercase tracking-wider text-luxury-black text-left"
                >
                  <span>Description & Silhouette</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${activeAccordion === 'description' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === 'description' && (
                  <div className="pt-2.5 text-neutral-600 leading-relaxed space-y-2">
                    <p>{product.description}</p>
                    <p>Designed and developed in our European and Lagos studios with precision pattern-making.</p>
                  </div>
                )}
              </div>

              {/* Materials & Craftsmanship */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex items-center justify-between font-bold uppercase tracking-wider text-luxury-black text-left"
                >
                  <span>Materials & Craftsmanship</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${activeAccordion === 'materials' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === 'materials' && (
                  <div className="pt-2.5 text-neutral-600 leading-relaxed">
                    <p>{product.materials}</p>
                  </div>
                )}
              </div>

              {/* Shipping & Delivery */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex items-center justify-between font-bold uppercase tracking-wider text-luxury-black text-left"
                >
                  <span>Shipping & Delivery</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${activeAccordion === 'shipping' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === 'shipping' && (
                  <div className="pt-2.5 text-neutral-600 leading-relaxed space-y-1.5">
                    <p><strong>Domestic Express:</strong> 2–4 business days via DHL Express.</p>
                    <p><strong>International Air Courier:</strong> 3–6 business days worldwide.</p>
                    <p>Includes signature delivery, insured transit, and customs duties pre-cleared.</p>
                  </div>
                )}
              </div>

              {/* Garment Care */}
              <div className="py-3">
                <button
                  onClick={() => toggleAccordion('care')}
                  className="w-full flex items-center justify-between font-bold uppercase tracking-wider text-luxury-black text-left"
                >
                  <span>Care Instructions</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${activeAccordion === 'care' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === 'care' && (
                  <div className="pt-2.5 text-neutral-600 leading-relaxed">
                    <p>{product.care}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Recommendations: "YOU MAY ALSO LIKE" */}
        <div className="mt-20 pt-12 border-t border-neutral-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-luxury-gold-dark block mb-1">
                CURATED COMPLEMENTS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-black">
                YOU MAY ALSO LIKE
              </h3>
            </div>
            <button
              onClick={() => navigate('/shop')}
              className="text-xs font-bold uppercase tracking-widest text-luxury-black hover:text-luxury-gold transition-colors flex items-center gap-1"
            >
              <span>View Lookbook</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
