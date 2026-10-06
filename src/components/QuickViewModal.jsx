import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Heart, ShoppingBag, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function QuickViewModal() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigate,
    setIsSizeGuideOpen
  } = useShop();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isFavorited = isInWishlist(product.id);
  const currentSize = selectedSize || product.sizes?.[0] || 'Standard';
  const currentColor = selectedColor || product.colors?.[0]?.name || 'Default';
  const displayImages = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleAddToCart = () => {
    addToCart(product, 1, currentSize, currentColor);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      setQuickViewProduct(null);
    }, 900);
  };

  const handleFullDetails = () => {
    setQuickViewProduct(null);
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setQuickViewProduct(null)}
        className="fixed inset-0 bg-black/75 backdrop-blur-xs"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="relative bg-white max-w-4xl w-full rounded-sm shadow-2xl border border-neutral-200 overflow-hidden z-10 text-luxury-black my-8"
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-black rounded-full hover:bg-neutral-100 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
          {/* Left Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-neutral-100 overflow-hidden rounded-xs relative">
              <img
                src={displayImages[activeImgIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-luxury-black text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Strip */}
            {displayImages.length > 1 && (
              <div className="flex gap-2">
                {displayImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`w-16 h-20 rounded-xs overflow-hidden border-2 transition-all ${
                      activeImgIndex === idx ? 'border-luxury-gold' : 'border-neutral-200 opacity-70'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Overview */}
          <div className="flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                <span className="uppercase font-semibold tracking-wider text-luxury-gold-dark">
                  {product.category} • {product.gender}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-luxury-gold fill-luxury-gold" />
                  <span className="font-semibold text-neutral-900">{product.rating}</span>
                  <span>({product.reviews} reviews)</span>
                </div>
              </div>

              <h2 className="font-serif text-2xl font-bold text-luxury-black mb-2">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif text-2xl font-bold text-luxury-black">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-neutral-400 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Color: <span className="font-normal text-neutral-500">{currentColor}</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {product.colors.map((col, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(col.name)}
                        style={{ backgroundColor: col.hex }}
                        className={`w-7 h-7 rounded-full border transition-all ${
                          currentColor === col.name
                            ? 'ring-2 ring-offset-2 ring-luxury-black scale-105'
                            : 'border-neutral-300'
                        }`}
                        title={col.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                      Select Size
                    </label>
                    <button
                      onClick={() => setIsSizeGuideOpen(true)}
                      className="text-[11px] text-luxury-gold-dark hover:underline font-semibold"
                    >
                      Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider border rounded-xs transition-all ${
                          currentSize === sz
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
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-neutral-200">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={justAdded}
                  className={`flex-1 py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-md ${
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

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3.5 border rounded-xs transition-colors flex items-center justify-center ${
                    isFavorited
                      ? 'border-rose-400 bg-rose-50 text-rose-600'
                      : 'border-neutral-300 hover:border-black text-neutral-700'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-rose-500' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleFullDetails}
                className="w-full py-2.5 text-xs font-semibold text-neutral-600 hover:text-luxury-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>View Full Product Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
