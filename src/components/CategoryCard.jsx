import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function CategoryCard({ category, index }) {
  const { navigate } = useShop();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onClick={() => navigate(`/${category.slug}`)}
      className="group relative cursor-pointer overflow-hidden rounded-sm bg-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
    >
      {/* Image container */}
      <div className="aspect-[3/4] w-full overflow-hidden relative">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

        {/* Gold Border Highlight on Hover */}
        <div className="absolute inset-0 border border-transparent group-hover:border-luxury-gold/60 transition-colors duration-300 pointer-events-none" />

        {/* Cultural or Special Tag */}
        {category.slug === 'traditional-wear' && (
          <div className="absolute top-3 left-3 bg-luxury-gold text-luxury-black text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 shadow-md">
            Heritage
          </div>
        )}

        {/* Content at bottom of card */}
        <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end text-white">
          <div className="w-6 h-[2px] bg-luxury-gold mb-2 transform origin-left transition-transform duration-300 group-hover:scale-x-150" />
          <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-white group-hover:text-luxury-cream transition-colors">
            {category.name}
          </h3>
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-300 group-hover:text-luxury-gold transition-colors mt-1.5">
            <span className="uppercase tracking-widest">Explore</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
