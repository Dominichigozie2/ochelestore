import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function EditorialSection() {
  const { navigate } = useShop();

  return (
    <section className="w-full bg-luxury-cream/60 py-20 lg:py-28 overflow-hidden border-b border-neutral-100">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Editorial Multi-Image Composition */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-10 aspect-[4/5] sm:aspect-[16/11] max-w-2xl mx-auto overflow-hidden rounded-sm shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop"
                alt="Editorial Couture Drop"
                className="w-full h-full object-cover object-center hover:scale-104 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 text-white max-w-sm">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-luxury-gold block mb-1">
                  ATELIER LOOKBOOK VOL. IV
                </span>
                <p className="font-serif text-xl sm:text-2xl font-semibold">
                  Subtle Geometry & Natural Luster
                </p>
              </div>
            </div>

            {/* Overlapping small accent image for editorial asymmetry */}
            <div className="hidden sm:block absolute -bottom-8 -right-4 w-48 lg:w-56 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl border-4 border-white z-20">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop"
                alt="Handcrafted Jewelry Details"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Subtle decorative gold circle */}
            <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full border border-luxury-gold/25 pointer-events-none" />
          </div>

          {/* RIGHT: Editorial Text & Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-luxury-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-luxury-gold-dark">
                THE HAUTE MANIFESTO
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-luxury-black leading-[1.12]">
              THE NEW <br />
              COLLECTION<span className="text-luxury-gold">.</span>
            </h2>

            <blockquote className="font-serif italic text-xl sm:text-2xl text-neutral-800 border-l-2 border-luxury-gold pl-4 py-1 leading-snug">
              “Designed for those who don’t follow trends — they define them.”
            </blockquote>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Every garment in this collection is born in limited atelier editions. We merge century-old
              West African hand-loom weaving with precision Italian garment engineering, creating
              pieces that carry both cultural gravitas and contemporary poise.
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigate('/shop')}
                className="group px-9 py-4 bg-luxury-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-[0.22em] transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-xl"
              >
                <span>EXPLORE COLLECTION</span>
                <ArrowRight className="w-4 h-4 text-luxury-gold group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            {/* Editorial highlights */}
            <div className="pt-6 border-t border-neutral-200 grid grid-cols-2 gap-4 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                <span>Zero Mass Overproduction</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                <span>Ethically Sourced Silk & Gold</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
