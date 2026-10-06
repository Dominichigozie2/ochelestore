import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function MegaMenu({ categoryKey, onClose }) {
  const { navigate } = useShop();

  const megaData = {
    men: {
      title: "MEN'S ATELIER",
      badge: "NEW SEASON DROP",
      columns: [
        {
          title: "Clothing",
          links: [
            { name: "Suits & Tailoring", path: "/men" },
            { name: "Crisp Linen Shirts", path: "/men" },
            { name: "Architectural Trousers", path: "/men" },
            { name: "Outerwear & Trench", path: "/men" },
            { name: "Heavyweight Hoodies", path: "/clothing" }
          ]
        },
        {
          title: "Traditional Wear",
          links: [
            { name: "Imperial 3-Piece Agbada", path: "/traditional-wear" },
            { name: "Modern Kaftans", path: "/traditional-wear" },
            { name: "Executive Senator Suits", path: "/traditional-wear" },
            { name: "Aso Oke Fila Caps", path: "/caps" }
          ]
        },
        {
          title: "Footwear & Accs",
          links: [
            { name: "Handcrafted Sneakers", path: "/shoes" },
            { name: "Italian Leather Loafers", path: "/shoes" },
            { name: "Gold Chrono Timepieces", path: "/watches" },
            { name: "Weekender Leather Duffels", path: "/bags" }
          ]
        }
      ],
      featured: {
        title: "The Modern Patriarch",
        subtitle: "Sculpted lines meets cultural mastery.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
        ctaText: "Shop Men's Edit",
        path: "/men"
      }
    },
    women: {
      title: "WOMEN'S ATELIER",
      badge: "RUNWAY COUTURE",
      columns: [
        {
          title: "Ready-To-Wear",
          links: [
            { name: "Silk Evening Gowns", path: "/women" },
            { name: "High-Rise Pleated Trousers", path: "/women" },
            { name: "Tailored Blazers", path: "/clothing" },
            { name: "Draped Silk Kimonos", path: "/clothing" }
          ]
        },
        {
          title: "Cultural Elegance",
          links: [
            { name: "Neo-African Ankara Trenches", path: "/traditional-wear" },
            { name: "Zari Embroidered Kaftans", path: "/traditional-wear" },
            { name: "Ceremonial Silk Sets", path: "/traditional-wear" },
            { name: "Bespoke Headwraps", path: "/hats" }
          ]
        },
        {
          title: "Shoes & Jewelry",
          links: [
            { name: "Gilded Stiletto Heels", path: "/shoes" },
            { name: "Structured Trapeze Bags", path: "/bags" },
            { name: "18k Hammered Gold Vermeil", path: "/jewelry" },
            { name: "Silk Twill Scarves", path: "/accessories" }
          ]
        }
      ],
      featured: {
        title: "Fluid Geometry 2026",
        subtitle: "Uncompromising drape and luminous textures.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        ctaText: "Shop Women's Edit",
        path: "/women"
      }
    },
    kids: {
      title: "KIDS & YOUTH",
      badge: "HERITAGE IN MINIATURE",
      columns: [
        {
          title: "Ceremonial",
          links: [
            { name: "Junior Prince Kaftans", path: "/kids" },
            { name: "Princess Ankara Dresses", path: "/kids" },
            { name: "Mini 2-Piece Sets", path: "/kids" }
          ]
        },
        {
          title: "Everyday Luxury",
          links: [
            { name: "Organic Cotton Sweats", path: "/kids" },
            { name: "Mini Leather Slip-ons", path: "/shoes" },
            { name: "Youth Caps", path: "/caps" }
          ]
        }
      ],
      featured: {
        title: "Little Royalty",
        subtitle: "Gentle organic fabrics, heritage tailoring.",
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=800&auto=format&fit=crop",
        ctaText: "Shop Kids Collection",
        path: "/kids"
      }
    },
    shoes: {
      title: "SHOES & LEATHERCRAFT",
      badge: "ARTISANAL ITALIAN",
      columns: [
        {
          title: "By Silhouette",
          links: [
            { name: "Handcrafted Sneakers", path: "/shoes" },
            { name: "Calfskin Venetian Loafers", path: "/shoes" },
            { name: "Goodyear Chelsea Boots", path: "/shoes" },
            { name: "Gilded Column Heels", path: "/shoes" },
            { name: "Cork Bed Leather Slides", path: "/shoes" }
          ]
        },
        {
          title: "Curation",
          links: [
            { name: "New Footwear Arrivals", path: "/shoes" },
            { name: "Black Tie & Ceremonial", path: "/shoes" },
            { name: "Everyday Luxury Walkers", path: "/shoes" }
          ]
        }
      ],
      featured: {
        title: "Step Into Modern Mastery",
        subtitle: "Engineered with Italian calfskin and Vibram soles.",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
        ctaText: "Explore All Footwear",
        path: "/shoes"
      }
    },
    traditional: {
      title: "ROOTED IN CULTURE",
      badge: "AFRICAN HAUTE COUTURE",
      columns: [
        {
          title: "The Regal Men's Edit",
          links: [
            { name: "Imperial 3-Piece Agbada", path: "/traditional-wear" },
            { name: "Modern Senegalese Kaftans", path: "/traditional-wear" },
            { name: "Executive Senator Natives", path: "/traditional-wear" },
            { name: "Velvet Aso Oke Fila", path: "/caps" }
          ]
        },
        {
          title: "The Matriarch Edit",
          links: [
            { name: "Zari Embroidered Kaftan Gowns", path: "/traditional-wear" },
            { name: "Silk Ankara Trench Coats", path: "/traditional-wear" },
            { name: "Benin Heritage Coral Strands", path: "/jewelry" },
            { name: "Bespoke Headwraps & Turbans", path: "/hats" }
          ]
        }
      ],
      featured: {
        title: "Heritage Reimagined",
        subtitle: "Where ancestral craftsmanship meets contemporary runway silhouettes.",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
        ctaText: "Discover Culture Edit",
        path: "/traditional-wear"
      }
    }
  };

  const data = megaData[categoryKey];
  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-2xl py-8 px-8 z-50 text-luxury-black"
      onMouseLeave={onClose}
    >
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-12 gap-8 items-start">
        {/* Left Link Columns */}
        <div className={`col-span-8 grid grid-cols-${data.columns.length} gap-8`}>
          {data.columns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-luxury-black border-b border-luxury-sand pb-2">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <button
                      onClick={() => {
                        navigate(link.path);
                        onClose();
                      }}
                      className="text-sm text-neutral-600 hover:text-luxury-black hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5 group text-left"
                    >
                      <span className="w-1 h-1 rounded-full bg-transparent group-hover:bg-luxury-gold transition-colors" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Quick link bar at bottom */}
          <div className="col-span-full pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
            <span className="flex items-center gap-1.5 text-luxury-gold font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Free custom tailoring alterations available in flagship boutiques.
            </span>
            <button
              onClick={() => {
                navigate(`/shop`);
                onClose();
              }}
              className="font-semibold text-luxury-black hover:text-luxury-gold flex items-center gap-1 transition-colors"
            >
              View Full Lookbook <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Right Featured Card */}
        <div className="col-span-4 bg-luxury-cream p-4 rounded-sm border border-luxury-sand/70">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4 group">
            <img
              src={data.featured.image}
              alt={data.featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 bg-luxury-black/90 text-luxury-gold text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 backdrop-blur-sm">
              {data.badge}
            </div>
          </div>
          <h3 className="font-serif text-lg font-semibold text-luxury-black mb-1">
            {data.featured.title}
          </h3>
          <p className="text-xs text-neutral-600 mb-3 leading-relaxed">
            {data.featured.subtitle}
          </p>
          <button
            onClick={() => {
              navigate(data.featured.path);
              onClose();
            }}
            className="w-full py-2.5 bg-luxury-black hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 group"
          >
            <span>{data.featured.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
