import React from 'react';
import { ChevronRight, Heart, ShoppingBag, Trash2, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart, navigate, showToast } = useShop();

  const handleMoveAllToBag = () => {
    wishlist.forEach(p => addToCart(p, 1));
    showToast(`Added ${wishlist.length} saved items to your bag`, 'success');
  };

  return (
    <div className="w-full bg-white min-h-screen py-8 sm:py-12">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
          <button onClick={() => navigate('/')} className="hover:text-black transition-colors">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-300" />
          <span className="text-luxury-black font-semibold">Your Wishlist</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-neutral-200 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
                PRIVATE CURATION
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-black tracking-tight">
              SAVED ATELIER PIECES
            </h1>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1">
              {wishlist.length} item{wishlist.length === 1 ? '' : 's'} preserved in your personal collection.
            </p>
          </div>

          {wishlist.length > 0 && (
            <button
              onClick={handleMoveAllToBag}
              className="px-6 py-3 bg-luxury-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-luxury-gold" />
              <span>MOVE ALL TO SHOPPING BAG</span>
            </button>
          )}
        </div>

        {/* Main Content */}
        <div className="pt-8">
          {wishlist.length === 0 ? (
            <div className="py-24 text-center bg-luxury-cream/50 rounded-sm border border-neutral-200/80 p-8 space-y-5 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto shadow-sm border border-neutral-200">
                <Heart className="w-7 h-7 text-neutral-300" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-luxury-black">
                Your Wishlist Is Empty
              </h3>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto leading-relaxed">
                Save your favorite tailored silhouettes, footwear, and cultural couture pieces to view or purchase them later.
              </p>
              <button
                onClick={() => navigate('/shop')}
                className="px-8 py-3.5 bg-luxury-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors inline-flex items-center gap-2"
              >
                <span>EXPLORE ALL COLLECTIONS</span>
                <ArrowRight className="w-3.5 h-3.5 text-luxury-gold" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {wishlist.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
