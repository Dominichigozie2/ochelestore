import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, ChevronRight as BreadcrumbArrow } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Hero() {
  const { navigate } = useShop();

  const slides = [
    {
      id: "kids",
      categoryName: "Kids",
      breadcrumb: "Home > Departments > KIDS",
      tag: "# KIDS & YOUTH ATELIER",
      title: "PLAYFUL HERITAGE & COMFORT",
      subtitle: "Premium miniature tailoring and breathable pure organic textiles for the next generation.",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1920&auto=format&fit=crop",
      path: "/kids",
      accent: "text-amber-400"
    },
    {
      id: "traditional",
      categoryName: "Traditional",
      breadcrumb: "Home > Departments > TRADITIONAL WEAR",
      tag: "# ROOTED IN CULTURE & ROYALTY",
      title: "ROYAL HERITAGE, MODERN FORM",
      subtitle: "Regal 3-piece Swiss damask Agbadas, Senegalese silk kaftans, and master hand embroidery.",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1920&auto=format&fit=crop",
      path: "/traditional-wear",
      accent: "text-luxury-gold"
    },
    {
      id: "men",
      categoryName: "Men",
      breadcrumb: "Home > Departments > MEN",
      tag: "# SARTORIAL EXCELLENCE",
      title: "STYLE THAT SPEAKS FOR ITSELF",
      subtitle: "Modern tailored essentials, structured Italian wool blazers, and contemporary African luxury.",
      image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1920&auto=format&fit=crop",
      path: "/men",
      accent: "text-neutral-200"
    },
    {
      id: "women",
      categoryName: "Women",
      breadcrumb: "Home > Departments > WOMEN",
      tag: "# WOMEN'S HAUTE ATELIER",
      title: "SCULPTED ELEGANCE & POISE",
      subtitle: "Fluid silhouettes, architectural silk evening gowns, and bespoke hand-embellished statements.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop",
      path: "/women",
      accent: "text-amber-300"
    },
    {
      id: "shoes",
      categoryName: "Shoes",
      breadcrumb: "Home > Departments > SHOES",
      tag: "# FOOTWEAR & LEATHERCRAFT",
      title: "STEP INTO REFINED LUXURY",
      subtitle: "Artisan calfskin sneakers, Venetian leather loafers, and Blake-stitched silhouettes.",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1920&auto=format&fit=crop",
      path: "/shoes",
      accent: "text-luxury-gold"
    },
    {
      id: "accessories",
      categoryName: "Accessories",
      breadcrumb: "Home > Departments > ACCESSORIES",
      tag: "# FINE ACCESSORIES & GOLD",
      title: "THE ART OF THE FINISHING TOUCH",
      subtitle: "Swiss automatic 18k gold bezels, Tuscan leather weekender duffels, and hand-hammered vermeil cuffs.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1920&auto=format&fit=crop",
      path: "/accessories",
      accent: "text-amber-400"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance every 6 seconds if not paused by hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full bg-luxury-black text-white overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center border-b border-neutral-900"
    >
      {/* Background Banner Slides with Framer Motion crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Banner Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />

          {/* Luxury Cinematic Gradient Overlay matching reference image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Container Capped at Max-Width 1200px */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl sm:max-w-3xl space-y-6">
          {/* Breadcrumb Navigation matching uploaded reference */}
          <motion.div
            key={`bc-${slide.id}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs text-neutral-400 font-medium"
          >
            <span
              onClick={() => navigate('/')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Home
            </span>
            <span className="text-neutral-600">&gt;</span>
            <span
              onClick={() => navigate('/shop')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Departments
            </span>
            <span className="text-neutral-600">&gt;</span>
            <span className="text-luxury-gold uppercase font-bold tracking-wider">
              {slide.categoryName}
            </span>
          </motion.div>

          {/* Gold Bordered Tag Badge */}
          <motion.div
            key={`tag-${slide.id}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/40 border border-luxury-gold/60 text-luxury-gold text-xs font-bold uppercase tracking-[0.25em] backdrop-blur-md rounded-xs"
          >
            <span>{slide.tag}</span>
          </motion.div>

          {/* Large Serif Title */}
          <motion.h1
            key={`title-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
          >
            {slide.title}
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            key={`sub-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="text-neutral-300 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed"
          >
            {slide.subtitle}
          </motion.p>

          {/* CTAs: "Shop now" & "Explore Collection" */}
          <motion.div
            key={`cta-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3"
          >
            <button
              onClick={() => navigate(slide.path)}
              className="group px-8 py-4 bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-black text-xs font-extrabold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 shadow-gold"
            >
              <span>Shop now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => navigate(slide.path)}
              className="group px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-luxury-black border border-white/40 hover:border-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-xs"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Left / Right Carousel Navigation Controls */}
      <div className="absolute inset-y-0 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-11 h-11 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white border border-white/20 hover:border-luxury-gold flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-105"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 stroke-[1.8]" />
        </button>

        <button
          onClick={nextSlide}
          className="pointer-events-auto w-11 h-11 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white border border-white/20 hover:border-luxury-gold flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-105"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 stroke-[1.8]" />
        </button>
      </div>

      {/* Bottom Category Slide Selector Pills & Progress Indicator */}
      <div className="absolute bottom-6 inset-x-0 z-30 pointer-events-auto">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/15 max-w-full">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 whitespace-nowrap ${
                  currentSlide === idx
                    ? 'bg-luxury-gold text-luxury-black font-bold shadow-xs'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {s.categoryName}
              </button>
            ))}
          </div>

          {/* Slide Numbers counter (e.g. 01 / 06) */}
          <div className="hidden sm:flex items-center gap-2 text-xs tracking-widest text-neutral-400 font-mono">
            <span className="text-luxury-gold font-bold">0{currentSlide + 1}</span>
            <span>/</span>
            <span>0{slides.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
