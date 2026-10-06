import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartSubtotal,
    freeShippingThreshold,
    shippingRemaining,
    navigate,
    showToast
  } = useShop();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const shippingCost = cartSubtotal >= freeShippingThreshold || cartSubtotal === 0 ? 0 : 15;
  const orderTotal = cartSubtotal + shippingCost;
  const progressPercent = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
      clearCart();
    }, 1800);
  };

  const closeCheckoutModal = () => {
    setCheckoutSuccess(false);
    setIsCartOpen(false);
    navigate('/');
  };

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            />

            {/* Slide-out Drawer Panel */}
            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="w-screen max-w-md bg-white shadow-2xl flex flex-col z-50 text-luxury-black"
              >
                {/* Header */}
                <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-luxury-cream/40">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-luxury-gold stroke-[1.8]" />
                    <h2 className="font-serif text-lg font-bold tracking-wider uppercase text-luxury-black">
                      YOUR SHOPPING BAG ({cart.reduce((a, b) => a + b.quantity, 0)})
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-1.5 text-neutral-400 hover:text-black rounded-full hover:bg-neutral-100 transition-colors"
                    aria-label="Close cart"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Free Shipping Progress Indicator */}
                <div className="px-5 py-3.5 bg-neutral-50 border-b border-neutral-100 text-xs">
                  {cartSubtotal >= freeShippingThreshold ? (
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Congratulations! You qualify for complimentary express shipping.</span>
                    </div>
                  ) : (
                    <div>
                      <p className="text-neutral-600 font-medium">
                        Add <span className="font-bold text-luxury-black">${shippingRemaining.toFixed(2)}</span> more to unlock <span className="text-luxury-gold-dark font-bold">Complimentary Express Shipping</span>.
                      </p>
                      <div className="w-full bg-neutral-200 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div
                          className="bg-luxury-gold h-full rounded-full transition-all duration-500"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Cart Items List */}
                <div className="flex-1 overflow-y-auto p-5 divide-y divide-neutral-100">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-luxury-cream flex items-center justify-center border border-luxury-sand">
                        <ShoppingBag className="w-7 h-7 text-neutral-400" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-neutral-800">
                        Your Shopping Bag is Empty
                      </h3>
                      <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
                        Explore our latest tailoring, handcrafted footwear, and traditional atelier collections.
                      </p>
                      <button
                        onClick={() => {
                          setIsCartOpen(false);
                          navigate('/shop');
                        }}
                        className="mt-2 px-6 py-3 bg-luxury-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest transition-colors"
                      >
                        DISCOVER NEW COLLECTIONS
                      </button>
                    </div>
                  ) : (
                    cart.map((item, idx) => (
                      <div key={`${item.product.id}-${item.size}-${item.color}-${idx}`} className="py-4 flex gap-4 first:pt-0">
                        {/* Thumbnail */}
                        <div
                          onClick={() => {
                            setIsCartOpen(false);
                            navigate(`/product/${item.product.id}`);
                          }}
                          className="w-20 h-24 bg-neutral-100 rounded-xs overflow-hidden flex-shrink-0 cursor-pointer"
                        >
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h4
                                onClick={() => {
                                  setIsCartOpen(false);
                                  navigate(`/product/${item.product.id}`);
                                }}
                                className="font-serif text-sm font-semibold text-luxury-black line-clamp-1 hover:text-luxury-gold-dark cursor-pointer transition-colors"
                              >
                                {item.product.name}
                              </h4>
                              <button
                                onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                                className="text-neutral-400 hover:text-rose-500 p-1 transition-colors"
                                title="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            <p className="text-[11px] text-neutral-500 mt-0.5">
                              {item.size} • {item.color}
                            </p>
                            <p className="text-xs font-serif font-bold text-neutral-900 mt-1">
                              ${item.product.price.toFixed(2)}
                            </p>
                          </div>

                          {/* Quantity stepper */}
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center border border-neutral-200 rounded-xs">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.size, item.color, -1)}
                                className="p-1 hover:bg-neutral-100 text-neutral-600 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-3 text-xs font-semibold text-luxury-black">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.size, item.color, 1)}
                                className="p-1 hover:bg-neutral-100 text-neutral-600 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <span className="text-xs font-bold text-luxury-black">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Footer Summary & Checkout */}
                {cart.length > 0 && (
                  <div className="p-5 border-t border-neutral-200 bg-luxury-cream/30 space-y-3">
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between text-neutral-600">
                        <span>Subtotal</span>
                        <span className="font-semibold text-neutral-900 font-serif">
                          ${cartSubtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-neutral-600">
                        <span>Estimated Shipping</span>
                        <span className="font-semibold text-neutral-900 font-serif">
                          {shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm font-bold text-luxury-black pt-2 border-t border-neutral-200">
                        <span>Estimated Total</span>
                        <span className="font-serif text-base text-luxury-black">
                          ${orderTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                      className="w-full py-4 bg-luxury-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-lg group"
                    >
                      {isCheckingOut ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>AUTHORIZING ATELIER VAULT...</span>
                        </div>
                      ) : (
                        <>
                          <span>PROCEED TO CHECKOUT</span>
                          <ArrowRight className="w-4 h-4 text-luxury-gold group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-center text-neutral-400">
                      Taxes calculated at dispatch. 100% Guaranteed authentic atelier luxury.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Checkout Success Confirmation Modal */}
      <AnimatePresence>
        {checkoutSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
              onClick={closeCheckoutModal}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white max-w-md w-full p-8 shadow-2xl rounded-sm border border-luxury-gold/40 text-center z-10 space-y-5"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-luxury-gold block mb-1">
                  ORDER CONFIRMED • OCH-2026-9810
                </span>
                <h3 className="font-serif text-2xl font-bold text-luxury-black">
                  Thank You For Your Patronage
                </h3>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed">
                Your order has been registered in the Ochele Collection private registry.
                A confirmation dispatch with artisan tracking details and bespoke garment care
                instructions has been prepared for delivery.
              </p>

              <div className="p-4 bg-luxury-cream border border-luxury-sand text-left text-xs space-y-1">
                <p className="font-semibold text-luxury-black">Complimentary Luxury Packaging:</p>
                <p className="text-neutral-500">Includes handcrafted embossed garment dustbag, brass hanger, and authenticity wax seal certificate.</p>
              </div>

              <button
                onClick={closeCheckoutModal}
                className="w-full py-3.5 bg-luxury-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest transition-colors"
              >
                RETURN TO ATELIER STOREFRONT
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
