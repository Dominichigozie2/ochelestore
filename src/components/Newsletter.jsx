import React, { useState } from 'react';
import { Mail, Check, Sparkles, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Newsletter() {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast("Please enter a valid email address", "error");
      return;
    }
    setSubscribed(true);
    showToast("Welcome to the Ochele Collection Private Client Circle", "success");
    setEmail('');
  };

  return (
    <section className="w-full bg-luxury-cream py-20 lg:py-24 border-b border-neutral-200">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-luxury-sand text-luxury-gold-dark text-[11px] font-bold uppercase tracking-[0.25em]">
          <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
          ATELIER INSIDER
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-luxury-black">
          STAY IN THE LOOP<span className="text-luxury-gold">.</span>
        </h2>

        <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Be the first to discover new collections, private showroom invitations,
          exclusive drops, and bespoke couture previews.
        </p>

        {subscribed ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xs max-w-md mx-auto flex items-center justify-center gap-2 text-sm font-medium">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Thank you for joining our private circle. Check your inbox for confirmation.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 bg-white p-1 border border-neutral-300 focus-within:border-luxury-gold transition-colors shadow-sm">
              <div className="flex items-center pl-3 flex-1">
                <Mail className="w-4 h-4 text-neutral-400 mr-2 flex-shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full py-2.5 text-sm text-luxury-black placeholder-neutral-400 focus:outline-none bg-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-7 py-3 bg-luxury-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
              >
                <span>SUBSCRIBE</span>
                <ArrowRight className="w-3.5 h-3.5 text-luxury-gold" />
              </button>
            </div>
            <p className="text-[11px] text-neutral-400 mt-2.5">
              By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
