import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ShoppingBag, Eye, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function ProductCard({ product, layout = "standard" }) {
  const {
    navigate,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setQuickViewProduct
  } = useShop();

  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || null);
  const [justAdded, setJustAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1, product.sizes?.[0] || 'Standard', selectedColor);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white border border-neutral-100/90 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-neutral-300/80 cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[3/4] w-full bg-neutral-100 overflow-hidden">
        {/* Main Product Image with subtle crossfade if multi-image */}
        <img
          src={isHovered && product.images?.[1] ? product.images[1] : product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-106"
          loading="lazy"
        />

        {/* Subtle Dark Vignette on Hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span
              className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 shadow-sm backdrop-blur-sm ${
                product.badge.includes('SALE')
                  ? 'bg-rose-600 text-white'
                  : product.badge === 'NEW'
                  ? 'bg-luxury-black text-white'
                  : product.badge === 'BEST SELLER'
                  ? 'bg-luxury-gold text-luxury-black font-extrabold'
                  : 'bg-white/95 text-luxury-black border border-neutral-200'
              }`}
            >
              {product.badge}
            </span>
          )}
          {product.gender && (
            <span className="text-[9px] uppercase tracking-wider text-neutral-600 font-semibold bg-white/80 px-2 py-0.5 rounded-xs w-max backdrop-blur-xs">
              {product.gender}
            </span>
          )}
        </div>

        {/* Wishlist Heart Button (Top Right) */}
        <button
          onClick={handleWishlistToggle}
          aria-label={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 z-10 shadow-sm ${
            isFavorited
              ? 'bg-white text-rose-500 shadow-md'
              : 'bg-white/80 text-neutral-700 hover:bg-white hover:text-black opacity-90 lg:opacity-0 lg:group-hover:opacity-100'
          }`}
        >
          <motion.div
            whileTap={{ scale: 0.8 }}
            animate={isFavorited ? { scale: [1, 1.25, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <Heart className={`w-4 h-4 stroke-[1.8] ${isFavorited ? 'fill-rose-500' : ''}`} />
          </motion.div>
        </button>

        {/* Quick View Eye Button */}
        <button
          onClick={handleQuickView}
          aria-label="Quick preview"
          className="hidden sm:flex absolute right-3 top-14 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-neutral-700 hover:text-black items-center justify-center transition-all duration-200 z-10 shadow-sm opacity-0 group-hover:opacity-100"
          title="Quick View"
        >
          <Eye className="w-4 h-4 stroke-[1.8]" />
        </button>

        {/* Slide-Up ADD TO CART Button Bar on Hover */}
        <div className="absolute inset-x-3 bottom-3 z-10 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={handleQuickAdd}
            disabled={justAdded}
            className={`w-full py-3 text-xs font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2 shadow-lg transition-all duration-200 ${
              justAdded
                ? 'bg-emerald-700 text-white'
                : 'bg-luxury-black hover:bg-luxury-gold hover:text-luxury-black text-white'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>ADDED TO BAG</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>ADD TO BAG</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Details Bottom Section */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
            <span className="uppercase text-[11px] font-medium tracking-wider text-neutral-500">
              {product.subcategory || product.category}
            </span>
            <div className="flex items-center gap-1 text-neutral-800">
              <Star className="w-3 h-3 text-luxury-gold fill-luxury-gold" />
              <span className="text-[11px] font-semibold">{product.rating}</span>
              <span className="text-[10px] text-neutral-400">({product.reviews})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-sm sm:text-base font-semibold text-luxury-black line-clamp-1 group-hover:text-luxury-gold-dark transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Price & Swatches Row */}
        <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm sm:text-base font-bold text-luxury-black tracking-tight">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-neutral-400 line-through font-normal">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Color preview dots */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              {product.colors.slice(0, 3).map((col, cIdx) => (
                <button
                  key={cIdx}
                  onClick={() => setSelectedColor(col.name)}
                  aria-label={col.name}
                  style={{ backgroundColor: col.hex }}
                  className={`w-3 h-3 rounded-full border transition-all ${
                    selectedColor === col.name
                      ? 'ring-1 ring-offset-1 ring-luxury-black scale-110'
                      : 'border-neutral-300'
                  }`}
                  title={col.name}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-[10px] text-neutral-400 font-medium">
                  +{product.colors.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
