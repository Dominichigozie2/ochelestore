import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function MenWomenEdits() {
  const { navigate } = useShop();

  return (
    <section className="w-full py-16 sm:py-24 bg-luxury-cream/30 border-b border-neutral-100">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {/* MEN'S EDIT: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 relative group overflow-hidden rounded-sm shadow-lg">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1400&auto=format&fit=crop"
                alt="Men's Collection Editorial"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-luxury-gold block">
                SARTORIAL EDIT
              </span>
              <p className="font-serif text-xl sm:text-2xl font-semibold">The Modern Gent</p>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-luxury-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-luxury-gold-dark">
                MEN'S EDIT
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-luxury-black leading-tight">
              MEN’S COLLECTION<span className="text-luxury-gold">.</span>
            </h3>

            <p className="font-serif italic text-lg text-neutral-800">
              “Modern essentials designed for confidence.”
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Explore tailored linen shirts, hand-cut Italian wool blazers, structured Gurkha trousers,
              and iconic native Senator styles crafted for the international man.
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigate('/men')}
                className="group px-7 py-3.5 bg-luxury-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 inline-flex items-center gap-3"
              >
                <span>SHOP MEN</span>
                <ArrowRight className="w-4 h-4 text-luxury-gold group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* WOMEN'S EDIT: Text Left, Image Right (Asymmetric Rhythm) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-luxury-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-luxury-gold-dark">
                WOMEN'S EDIT
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-luxury-black leading-tight">
              WOMEN’S COLLECTION<span className="text-luxury-gold">.</span>
            </h3>

            <p className="font-serif italic text-lg text-neutral-800">
              “Elegant pieces for every occasion.”
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Draped sculptural silk gowns, fluid wide-leg silhouettes, bespoke Ankara statement
              outerwear, and handcrafted fine jewelry designed to make every entrance unforgettable.
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigate('/women')}
                className="group px-7 py-3.5 bg-luxury-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 inline-flex items-center gap-3"
              >
                <span>SHOP WOMEN</span>
                <ArrowRight className="w-4 h-4 text-luxury-gold group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative group overflow-hidden rounded-sm shadow-lg">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1400&auto=format&fit=crop"
                alt="Women's Collection Editorial"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-luxury-gold block">
                HAUTE FEMME
              </span>
              <p className="font-serif text-xl sm:text-2xl font-semibold">Poise & Fluid Drapery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
