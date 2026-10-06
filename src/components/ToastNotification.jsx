import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShoppingBag, Heart, Info, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function ToastNotification() {
  const { toast, setToast, setIsCartOpen, navigate } = useShop();

  if (!toast) return null;

  const isCart = toast.type === 'cart';
  const isWishlist = toast.type === 'wishlist';

  return (
    <AnimatePresence>
      <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full pointer-events-none px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="pointer-events-auto bg-luxury-black text-white p-4 rounded-sm shadow-2xl border border-luxury-gold/40 flex items-start gap-3 backdrop-blur-md"
        >
          {/* Icon */}
          <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0 text-luxury-gold">
            {isCart ? (
              <ShoppingBag className="w-4 h-4" />
            ) : isWishlist ? (
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            ) : (
              <CheckCircle2 className="w-4 h-4" />
            )}
          </div>

          {/* Text and Actions */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white leading-snug">
              {toast.message}
            </p>
            {isCart && (
              <button
                onClick={() => {
                  setToast(null);
                  setIsCartOpen(true);
                }}
                className="mt-1 text-[11px] font-bold text-luxury-gold uppercase tracking-wider hover:underline inline-block"
              >
                View Shopping Bag →
              </button>
            )}
            {isWishlist && (
              <button
                onClick={() => {
                  setToast(null);
                  navigate('/wishlist');
                }}
                className="mt-1 text-[11px] font-bold text-luxury-gold uppercase tracking-wider hover:underline inline-block"
              >
                View Saved Items →
              </button>
            )}
          </div>

          {/* Dismiss button */}
          <button
            onClick={() => setToast(null)}
            className="text-neutral-400 hover:text-white p-0.5"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
