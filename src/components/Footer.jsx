import React, { useState } from 'react';
import { ArrowRight, Sparkles, Instagram, Facebook, ShieldCheck, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Footer() {
  const { navigate, showToast, setIsSizeGuideOpen } = useShop();
  const [footerEmail, setFooterEmail] = useState('');

  const handleFooterSubscribe = (e) => {
    e.preventDefault();
    if (!footerEmail) return;
    showToast("Subscribed to Ochele Private Editions", "success");
    setFooterEmail('');
  };

  return (
    <footer className="w-full bg-luxury-black text-neutral-400 pt-16 sm:pt-20 pb-12 border-t border-neutral-800">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Top Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-neutral-800 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl tracking-[0.25em] font-extrabold text-white uppercase">
                OCHELE
              </span>
              <span className="w-2 h-2 rounded-full bg-luxury-gold" />
            </div>
            <p className="text-xs uppercase tracking-[0.38em] text-luxury-gold font-semibold">
              COLLECTION
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs tracking-wider text-neutral-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-luxury-gold" />
              100% Certified Ethical Craftsmanship
            </span>
            <span className="text-neutral-700">|</span>
            <span>Worldwide Luxury Delivery</span>
          </div>
        </div>

        {/* 5 Columns Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 py-12 border-b border-neutral-800 text-xs">
          {/* Col 1: SHOP */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-[11px] border-b border-neutral-800 pb-2">
              SHOP
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Men's Collection", path: "/men" },
                { name: "Women's Collection", path: "/women" },
                { name: "Kids Atelier", path: "/kids" },
                { name: "Footwear & Shoes", path: "/shoes" },
                { name: "Traditional Wear", path: "/traditional-wear" },
                { name: "Bags & Leather", path: "/bags" },
                { name: "Accessories", path: "/accessories" },
                { name: "New Arrivals", path: "/new-arrivals" },
                { name: "Seasonal Sale", path: "/sale" },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="hover:text-luxury-gold hover:translate-x-1 transition-all duration-200 text-neutral-400 text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: CUSTOMER SERVICE */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-[11px] border-b border-neutral-800 pb-2">
              CUSTOMER SERVICE
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "VIP Concierge", action: () => showToast("Concierge available 24/7 at concierge@ochele.com", "info") },
                { name: "Order Tracking", action: () => showToast("Enter your tracking number in account portal", "info") },
                { name: "Shipping & Delivery", action: () => showToast("Complimentary worldwide express on orders over $100", "info") },
                { name: "Returns & Exchanges", action: () => showToast("Complimentary 30-day returns with pre-paid labels", "info") },
                { name: "Bespoke Size Guide", action: () => setIsSizeGuideOpen(true) },
                { name: "Boutique Locations", action: () => showToast("Flagships in Lagos, Paris, London, New York", "info") },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={item.action}
                    className="hover:text-luxury-gold transition-colors text-neutral-400 text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: COMPANY */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-[11px] border-b border-neutral-800 pb-2">
              COMPANY
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Our Heritage & Story", action: () => navigate('/traditional-wear') },
                { name: "Artisans & Weavers", action: () => navigate('/traditional-wear') },
                { name: "Sustainability & Ethics", action: () => showToast("Ochele is committed to 100% sustainable materials by 2028", "info") },
                { name: "Press & Lookbooks", action: () => navigate('/shop') },
                { name: "Careers at Atelier", action: () => showToast("Inquire at talent@ochele.com", "info") },
                { name: "Investor Relations", action: () => showToast("Atelier Group Holdings 2026", "info") },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={item.action}
                    className="hover:text-luxury-gold transition-colors text-neutral-400 text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: SOCIAL & ATELIER COMMUNITY */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-[11px] border-b border-neutral-800 pb-2">
              FOLLOW US
            </h4>
            <p className="text-neutral-500 leading-relaxed text-[11px]">
              Immerse yourself in our visual runway diaries, editorial drops, and behind-the-scenes tailoring.
            </p>
            <div className="space-y-2">
              <a
                href="#instagram"
                onClick={(e) => { e.preventDefault(); showToast("Opening @ochele.atelier Instagram", "info"); }}
                className="flex items-center gap-2 hover:text-luxury-gold transition-colors text-neutral-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                Instagram (@ochele.atelier)
              </a>
              <a
                href="#tiktok"
                onClick={(e) => { e.preventDefault(); showToast("Opening @ochele TikTok Runway", "info"); }}
                className="flex items-center gap-2 hover:text-luxury-gold transition-colors text-neutral-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                TikTok Runway
              </a>
              <a
                href="#pinterest"
                onClick={(e) => { e.preventDefault(); showToast("Opening Ochele Moodboards on Pinterest", "info"); }}
                className="flex items-center gap-2 hover:text-luxury-gold transition-colors text-neutral-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                Pinterest Moodboards
              </a>
              <a
                href="#facebook"
                onClick={(e) => { e.preventDefault(); showToast("Opening Ochele Haute Couture Page", "info"); }}
                className="flex items-center gap-2 hover:text-luxury-gold transition-colors text-neutral-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                Facebook Salon
              </a>
            </div>
          </div>

          {/* Col 5: VIP PRIVATE DISPATCH */}
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-widest text-[11px] border-b border-neutral-800 pb-2">
              VIP DISPATCH
            </h4>
            <p className="text-neutral-500 leading-relaxed text-[11px]">
              Receive private invitations to seasonal trunk shows and bespoke drops.
            </p>
            <form onSubmit={handleFooterSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  placeholder="Your VIP email"
                  className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs px-3 py-2.5 rounded-xs focus:outline-none focus:border-luxury-gold transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-black font-bold text-[10px] uppercase rounded-xs transition-colors flex items-center justify-center"
                >
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Legal Copyright & Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 OCHELE Atelier. All rights reserved. Crafted with timeless precision.</p>

          <div className="flex items-center gap-6">
            <button onClick={() => showToast("Privacy Policy: 100% Client Data Confidentiality", "info")} className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => showToast("Terms: Standard Luxury Consumer Protection", "info")} className="hover:text-neutral-300 transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => showToast("Cookie Preferences: Strictly Functional", "info")} className="hover:text-neutral-300 transition-colors">
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
