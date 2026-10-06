export const PRODUCTS = [
  // 1. Shoes - Sneakers
  {
    id: 1,
    name: "Apex Handcrafted Calfskin Sneaker",
    category: "Shoes",
    subcategory: "Sneakers",
    gender: "Men",
    price: 245,
    oldPrice: 290,
    rating: 4.9,
    reviews: 148,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Alabaster White", hex: "#F8F8F8" },
      { name: "Onyx Black", hex: "#151515" },
      { name: "Caramel Tan", hex: "#8B5A2B" }
    ],
    sizes: ["40 EU", "41 EU", "42 EU", "43 EU", "44 EU", "45 EU"],
    badge: "BEST SELLER",
    isNew: false,
    isBestSeller: true,
    isSale: true,
    isFeatured: true,
    description: "Meticulously lasted in full-grain Italian calfskin with an ultra-light Vibram rubber sole and hand-stitched gold foil monogramming.",
    materials: "100% Full-grain calfskin leather upper, vegetable-tanned leather lining, ergonomic cushioned footbed.",
    care: "Wipe clean with a damp cloth. Condition leather quarterly with premium balm."
  },

  // 2. Traditional Wear - Agbada
  {
    id: 2,
    name: "Imperial Gilded 3-Piece Agbada",
    category: "Traditional Wear",
    subcategory: "Imperial Agbada",
    gender: "Men",
    price: 480,
    oldPrice: 560,
    rating: 5.0,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Midnight Navy & Gold", hex: "#101D38" },
      { name: "Pure Ivory Damask", hex: "#FAF8F2" },
      { name: "Emerald Regal", hex: "#0E382B" }
    ],
    sizes: ["M", "L", "XL", "Bespoke Fit"],
    badge: "ATELIER ICON",
    isNew: true,
    isBestSeller: true,
    isSale: false,
    isFeatured: true,
    description: "A showstopping 3-piece ceremonial ensemble featuring architectural shoulder drapery, intricate metallic thread chest embroidery, and matching tailored trousers.",
    materials: "Premium Swiss damask jacquard, gold bullion cord threading, silk-finish cotton lining.",
    care: "Specialist dry clean only. Steam with low heat on reverse."
  },

  // 3. Men - Shirt
  {
    id: 3,
    name: "Sartorial Linen Resort Shirt",
    category: "Clothing",
    subcategory: "Shirts",
    gender: "Men",
    price: 135,
    oldPrice: null,
    rating: 4.8,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Ecru Oatmeal", hex: "#EBE5D8" },
      { name: "Terracotta Earth", hex: "#C46244" },
      { name: "Deep Charcoal", hex: "#222222" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "NEW",
    isNew: true,
    isBestSeller: false,
    isSale: false,
    isFeatured: true,
    description: "Tailored with relaxed dropped shoulders, mother-of-pearl buttons, and a Cuban collar cut from pure pre-washed French flax linen.",
    materials: "100% Certified French Flax Linen, genuine Trocas shell buttons.",
    care: "Gentle machine wash cold with similar colors. Hang dry in shade."
  },

  // 4. Women - Gown
  {
    id: 4,
    name: "Aura Sculptural Silk Evening Gown",
    category: "Women",
    subcategory: "Dresses",
    gender: "Women",
    price: 420,
    oldPrice: 510,
    rating: 4.9,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Gilded Champagne", hex: "#E6CF9D" },
      { name: "Obsidian Black", hex: "#0D0D0D" },
      { name: "Royal Garnet", hex: "#661423" }
    ],
    sizes: ["XS", "S", "M", "L"],
    badge: "LIMITED DROP",
    isNew: true,
    isBestSeller: false,
    isSale: true,
    isFeatured: true,
    description: "Flowing asymmetrical bias-cut silk gown with hand-draped neckline and a dramatic subtle sweep train.",
    materials: "100% Mulberry Silk Charmeuse with soft viscose internal bodice support.",
    care: "Professional dry clean only. Store in protective garment bag."
  },

  // 5. Traditional Wear - Kaftan
  {
    id: 5,
    name: "Modern Minimalist Senegalese Kaftan",
    category: "Traditional Wear",
    subcategory: "Modern Kaftans",
    gender: "Men",
    price: 310,
    oldPrice: null,
    rating: 4.9,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Pristine Snow", hex: "#FFFFFF" },
      { name: "Warm Cashmere", hex: "#D6CEBF" },
      { name: "Sovereign Sage", hex: "#4A584D" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    badge: "BEST SELLER",
    isNew: false,
    isBestSeller: true,
    isSale: false,
    isFeatured: true,
    description: "Crisp architectural 2-piece kaftan set with mandarin collar, hidden magnetic button placket, and subtle tone-on-tone embroidery along the cuffs.",
    materials: "Polished Super 160s cotton cashmere blend with silk thread accents.",
    care: "Dry clean or gentle hand wash. Warm iron on reverse."
  },

  // 6. Bags - Duffel
  {
    id: 6,
    name: "Heritage Grand Weekender Leather Duffel",
    category: "Bags",
    subcategory: "Weekend Duffels",
    gender: "Unisex",
    price: 385,
    oldPrice: 450,
    rating: 4.9,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Cognac Amber", hex: "#9E5B2D" },
      { name: "Matte Black", hex: "#1A1A1A" }
    ],
    sizes: ["One Size (45L Capacity)"],
    badge: "SALE 15% OFF",
    isNew: false,
    isBestSeller: true,
    isSale: true,
    isFeatured: true,
    description: "Constructed with vegetable-tanned Tuscan leather, solid brass hardware, and heavy-duty YKK Excella zippers. Includes detachable padded strap.",
    materials: "Full-grain vegetable-tanned Tuscan cowhide, waterproof cotton twill lining.",
    care: "Clean with leather saddle soap. Apply conditioner twice yearly."
  },

  // 7. Watches
  {
    id: 7,
    name: "Sovereign Gold Bezel Automatic Chrono",
    category: "Watches",
    subcategory: "Automatic Chrono",
    gender: "Unisex",
    price: 520,
    oldPrice: 650,
    rating: 5.0,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Sunburst Gold & Black", hex: "#C8A24D" },
      { name: "Brushed Steel & White", hex: "#C4C4C4" }
    ],
    sizes: ["41mm Case"],
    badge: "LIMITED EDITION",
    isNew: true,
    isBestSeller: true,
    isSale: true,
    isFeatured: true,
    description: "Swiss automatic movement housed in 316L surgical stainless steel coated with 18k yellow gold PVD. Scratch-resistant sapphire crystal with anti-reflective coating.",
    materials: "18k Gold PVD Stainless Steel, Sapphire Crystal, Alligator-embossed leather strap.",
    care: "Water resistant to 50 meters (5 ATM). Servicing recommended every 5 years."
  },

  // 8. Caps - Fila
  {
    id: 8,
    name: "Bespoke Royal Velvet Aso Oke Fila",
    category: "Caps",
    subcategory: "Traditional Fila",
    gender: "Men",
    price: 95,
    oldPrice: null,
    rating: 4.9,
    reviews: 130,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Imperial Burgundy", hex: "#5C1322" },
      { name: "Royal Indigo", hex: "#1D2A44" },
      { name: "Golden Bronze", hex: "#8F6B29" }
    ],
    sizes: ["56cm", "58cm", "60cm", "62cm"],
    badge: "NEW",
    isNew: true,
    isBestSeller: true,
    isSale: false,
    isFeatured: true,
    description: "Hand-pleated Yoruba ceremonial cap crafted from vintage loom-woven Aso Oke fabric, embroidered with subtle gold metallic motifs.",
    materials: "Handwoven cotton & metallic lurex weave, structured inner buckram.",
    care: "Spot clean gently with soft brush. Store on hat stand."
  },

  // 9. Shoes - Loafers
  {
    id: 9,
    name: "Verona Venetian Leather Loafers",
    category: "Shoes",
    subcategory: "Loafers",
    gender: "Men",
    price: 280,
    oldPrice: 320,
    rating: 4.8,
    reviews: 104,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Burnished Espresso", hex: "#3B2820" },
      { name: "Jet Black Boxcalf", hex: "#111111" }
    ],
    sizes: ["40 EU", "41 EU", "42 EU", "43 EU", "44 EU", "45 EU"],
    badge: "BEST SELLER",
    isNew: false,
    isBestSeller: true,
    isSale: false,
    isFeatured: true,
    description: "Hand-burnished leather slip-on loafers with Blake-stitched leather soles and miniature gold bit detailing.",
    materials: "French boxcalf leather, channeled oak bark leather sole.",
    care: "Polish with cream wax. Use cedar shoe trees between wears."
  },

  // 10. Women - Handbag
  {
    id: 10,
    name: "L'Etoile Structured Trapeze Handbag",
    category: "Bags",
    subcategory: "Tote Bags",
    gender: "Women",
    price: 340,
    oldPrice: null,
    rating: 4.9,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Chalk Blanc", hex: "#F5F3ED" },
      { name: "Caramel Toffee", hex: "#945D3B" },
      { name: "Noir", hex: "#0F0F0F" }
    ],
    sizes: ["Medium (28cm x 20cm)"],
    badge: "NEW",
    isNew: true,
    isBestSeller: true,
    isSale: false,
    isFeatured: true,
    description: "Architectural trapeze silhouette with signature brushed gold turn-lock closure and dual top handle plus crossbody strap.",
    materials: "Smooth nappa leather, microsuede interior lining, gold-plated hardware.",
    care: "Protect from excessive water and oils. Store in dust bag."
  },

  // 11. Jewelry - Gold Cuff
  {
    id: 11,
    name: "Elysian Hammered 18k Vermeil Cuff",
    category: "Jewelry",
    subcategory: "Gold Cuffs",
    gender: "Unisex",
    price: 195,
    oldPrice: 240,
    rating: 5.0,
    reviews: 91,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "18k Yellow Gold", hex: "#D4AF5A" },
      { name: "Sterling Silver", hex: "#E0E0E0" }
    ],
    sizes: ["Standard Adjustable"],
    badge: "BEST SELLER",
    isNew: false,
    isBestSeller: true,
    isSale: true,
    isFeatured: true,
    description: "Hand-forged by master goldsmiths with an undulating organic hammered texture catching the light from every angle.",
    materials: "18k Solid Yellow Gold Vermeil (3.5 microns) over 925 Sterling Silver.",
    care: "Buff with jewelry polishing cloth. Avoid perfume and chlorine."
  },

  // 12. Traditional Wear - Ankara
  {
    id: 12,
    name: "Neo-African Silk Ankara Trench Coat",
    category: "Traditional Wear",
    subcategory: "Ankara Luxe",
    gender: "Women",
    price: 360,
    oldPrice: 420,
    rating: 4.9,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Ochre Gold & Teal", hex: "#C8A24D" },
      { name: "Crimson & Indigo", hex: "#7B182B" }
    ],
    sizes: ["S", "M", "L", "XL"],
    badge: "EDITORIAL EDIT",
    isNew: true,
    isBestSeller: false,
    isSale: true,
    isFeatured: true,
    description: "Reinvented trench silhouette pairing authentic high-grade Dutch wax print silk with a storm flap, storm collar, and gold D-ring belt.",
    materials: "Pure silk twill with authentic Ankara wax block print, horn buttons.",
    care: "Dry clean only to maintain rich wax colors."
  },

  // 13. Clothing - Blazer
  {
    id: 13,
    name: "Architectural Double-Breasted Wool Blazer",
    category: "Clothing",
    subcategory: "Structured Blazers",
    gender: "Men",
    price: 395,
    oldPrice: null,
    rating: 4.8,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Sandstone Melange", hex: "#DDD7CD" },
      { name: "Midnight Navy", hex: "#131E33" },
      { name: "Tuxedo Black", hex: "#0E0E0E" }
    ],
    sizes: ["38R", "40R", "42R", "44R", "46R"],
    badge: "NEW",
    isNew: true,
    isBestSeller: false,
    isSale: false,
    isFeatured: true,
    description: "Sharp peak lapels with a semi-canvassed chest piece and hand-sewn buttonholes. Cut with contemporary drape for ease of movement.",
    materials: "100% Super 130s Merino Wool woven in Biella, Italy; cupro lining.",
    care: "Dry clean only. Hang on wide contoured hanger."
  },

  // 14. Accessories - Sunglasses
  {
    id: 14,
    name: "Monolith Titanium Polarized Aviators",
    category: "Accessories",
    subcategory: "Sunglasses",
    gender: "Unisex",
    price: 175,
    oldPrice: 210,
    rating: 4.7,
    reviews: 79,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Gold / Amber Gradient", hex: "#C8A24D" },
      { name: "Black Chrome / Smoke", hex: "#222222" }
    ],
    sizes: ["58mm Lens"],
    badge: "BEST SELLER",
    isNew: false,
    isBestSeller: true,
    isSale: true,
    isFeatured: false,
    description: "Featherlight Japanese beta-titanium frames engineered with 100% UVA/UVB polarized nylon lenses and micro-etched gold hinges.",
    materials: "Beta-titanium frame, scratch-resistant nylon polarized lenses.",
    care: "Clean with microfiber cloth and lens spray."
  },

  // 15. Kids - Traditional Set
  {
    id: 15,
    name: "Junior Prince 2-Piece Linen Kaftan",
    category: "Kids",
    subcategory: "Mini Traditional Sets",
    gender: "Kids",
    price: 110,
    oldPrice: null,
    rating: 4.9,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Royal Sky Blue", hex: "#7E9CB9" },
      { name: "Ivory & Gold", hex: "#F7F5EC" }
    ],
    sizes: ["4-5 YRS", "6-7 YRS", "8-9 YRS", "10-11 YRS", "12-13 YRS"],
    badge: "NEW",
    isNew: true,
    isBestSeller: false,
    isSale: false,
    isFeatured: true,
    description: "Delicate miniature traditional tailoring crafted with ultra-soft breathable organic cotton linen and elasticized comfort waistband for active little royals.",
    materials: "85% Organic Cotton, 15% Linen. Non-toxic organic dyes.",
    care: "Gentle machine wash warm. Tumble dry low."
  },

  // 16. Hats - Fedora
  {
    id: 16,
    name: "Savile Wide-Brim Wool Felt Fedora",
    category: "Hats",
    subcategory: "Wide Brim Hats",
    gender: "Unisex",
    price: 165,
    oldPrice: 195,
    rating: 4.8,
    reviews: 57,
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Caramel Camel", hex: "#BA8957" },
      { name: "Stygian Black", hex: "#111111" },
      { name: "Heather Olive", hex: "#5C614E" }
    ],
    sizes: ["56cm (S)", "58cm (M)", "60cm (L)"],
    badge: "SALE 15% OFF",
    isNew: false,
    isBestSeller: false,
    isSale: true,
    isFeatured: false,
    description: "Pressed from 100% Australian merino wool felt, trimmed with a hand-stitched grosgrain band and gold brass feather pin.",
    materials: "100% Australian Wool Felt, genuine leather sweatband.",
    care: "Store in hat box. Brush with horsehair bristle."
  },

  // 17. Shoes - Chelsea Boots
  {
    id: 17,
    name: "Montparnasse Chelsea Leather Boots",
    category: "Shoes",
    subcategory: "Chelsea Boots",
    gender: "Men",
    price: 295,
    oldPrice: null,
    rating: 4.9,
    reviews: 119,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Black Lustre", hex: "#0F0F0F" },
      { name: "Snuff Suede", hex: "#6E5039" }
    ],
    sizes: ["41 EU", "42 EU", "43 EU", "44 EU", "45 EU"],
    badge: "BEST SELLER",
    isNew: false,
    isBestSeller: true,
    isSale: false,
    isFeatured: true,
    description: "Seamless whole-cut calfskin Chelsea boot with elasticated side gussets, Goodyear welted construction, and pull tabs.",
    materials: "Full-grain calfskin leather, Goodyear storm welt, studded Dainite sole.",
    care: "Condition leather regularly. Store with boot shapers."
  },

  // 18. Jewelry - Signet Ring
  {
    id: 18,
    name: "Signet Imperial 14k Gold Onyx Ring",
    category: "Jewelry",
    subcategory: "Signet Rings",
    gender: "Men",
    price: 215,
    oldPrice: 260,
    rating: 5.0,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Yellow Gold / Black Onyx", hex: "#C8A24D" },
      { name: "White Gold / Lapis Lazuli", hex: "#1C3F73" }
    ],
    sizes: ["8 US", "9 US", "10 US", "11 US", "12 US"],
    badge: "SALE 20% OFF",
    isNew: false,
    isBestSeller: true,
    isSale: true,
    isFeatured: false,
    description: "Solid heavy-weight signet ring set with an ethically mined natural black onyx stone polished flush with the bevelled gold bezel.",
    materials: "14k Solid Gold vermeil over sterling silver, natural hand-cut Onyx gemstone.",
    care: "Avoid direct chemical contact. Store in velvet pouch."
  },

  // 19. Women - Tailored Set
  {
    id: 19,
    name: "Palais Pleated Wide-Leg Silk Trouser",
    category: "Women",
    subcategory: "Tailored Pants",
    gender: "Women",
    price: 210,
    oldPrice: null,
    rating: 4.8,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Ecru Ivory", hex: "#FAF8F2" },
      { name: "Deep Truffle", hex: "#4B3D34" }
    ],
    sizes: ["XS", "S", "M", "L"],
    badge: "NEW",
    isNew: true,
    isBestSeller: false,
    isSale: false,
    isFeatured: false,
    description: "High-waisted architectural trousers featuring front double pleats, concealed hook fastening, and flowing fluid drape that elongates the leg.",
    materials: "Heavyweight silk-viscose crepe, horn buttons.",
    care: "Dry clean only."
  },

  // 20. Caps - Luxury Snapback
  {
    id: 20,
    name: "Ochele Atelier Gold-Emblem Cap",
    category: "Caps",
    subcategory: "Embroidered Caps",
    gender: "Unisex",
    price: 85,
    oldPrice: 110,
    rating: 4.9,
    reviews: 184,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Midnight Black", hex: "#111111" },
      { name: "Off-White Alabaster", hex: "#F3EFE6" },
      { name: "Forest Emerald", hex: "#183B2B" }
    ],
    sizes: ["Adjustable Leather Strap"],
    badge: "BEST SELLER",
    isNew: false,
    isBestSeller: true,
    isSale: true,
    isFeatured: true,
    description: "Structured six-panel cap woven in heavyweight organic twill, featuring our 3D metallic gold embroidery logo and calfskin back closure.",
    materials: "100% Organic Cotton Canvas, Calfskin leather backstrap, brass buckle.",
    care: "Spot clean with damp cloth."
  },

  // 21. Clothing - Hoodie
  {
    id: 21,
    name: "Architectural Heavyweight Loopback Hoodie",
    category: "Clothing",
    subcategory: "Loungewear",
    gender: "Unisex",
    price: 160,
    oldPrice: null,
    rating: 4.9,
    reviews: 139,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Oatmeal Heather", hex: "#E4DEC8" },
      { name: "Washed Carbon", hex: "#2E2E2E" },
      { name: "Cognac Brown", hex: "#7E492B" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    badge: "BEST SELLER",
    isNew: false,
    isBestSeller: true,
    isSale: false,
    isFeatured: false,
    description: "Crafted in 500 GSM Portuguese combed loopback fleece, custom double-layered hood without drawstrings for an ultra-clean silhouette.",
    materials: "100% Combed Portuguese Loopback Organic Cotton (500 GSM).",
    care: "Machine wash cold inside out. Reshape while damp and dry flat."
  },

  // 22. Traditional Wear - Senator
  {
    id: 22,
    name: "Executive Royal Senator Native Suit",
    category: "Traditional Wear",
    subcategory: "Senator Style",
    gender: "Men",
    price: 340,
    oldPrice: 395,
    rating: 4.9,
    reviews: 77,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Charcoal Slate", hex: "#2B2D2F" },
      { name: "Wine Burgundy", hex: "#5E1925" },
      { name: "Savanna Khaki", hex: "#B8A382" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    badge: "SALE 15% OFF",
    isNew: false,
    isBestSeller: true,
    isSale: true,
    isFeatured: true,
    description: "Sleek contemporary Senator native suit with an asymmetric diagonal zip breast placket and razor-sharp tailored straight-leg trousers.",
    materials: "Super 150s Italian Cashmere Wool blend, silk piping.",
    care: "Dry clean only. Steam gently."
  },

  // 23. Bags - Crossbody
  {
    id: 23,
    name: "Minimalist Calfskin Crossbody Messenger",
    category: "Bags",
    subcategory: "Crossbody Bags",
    gender: "Unisex",
    price: 230,
    oldPrice: null,
    rating: 4.8,
    reviews: 63,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Olive Bronze", hex: "#5B553B" },
      { name: "Pitch Black", hex: "#111111" }
    ],
    sizes: ["One Size"],
    badge: "NEW",
    isNew: true,
    isBestSeller: false,
    isSale: false,
    isFeatured: false,
    description: "Sculptural everyday pouch with magnetic roll-top closure, dedicated iPad sleeve, and adjustable woven herringbone strap.",
    materials: "Full-grain semi-vegetable tanned leather, ripstop lining.",
    care: "Store in cool, dry place. Treat with wax."
  },

  // 24. Accessories - Belt
  {
    id: 24,
    name: "Gilded Buckle Reversible Leather Belt",
    category: "Accessories",
    subcategory: "Leather Belts",
    gender: "Men",
    price: 125,
    oldPrice: 155,
    rating: 4.9,
    reviews: 140,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Black / Dark Cognac (Reversible)", hex: "#1A1A1A" }
    ],
    sizes: ["32 IN", "34 IN", "36 IN", "38 IN", "40 IN"],
    badge: "SALE 20% OFF",
    isNew: false,
    isBestSeller: true,
    isSale: true,
    isFeatured: false,
    description: "Reversible harness leather strap featuring a custom solid brass rotating buckle finished in brushed 18k gold tone.",
    materials: "Full-grain French saddle leather, 18k brushed gold-plated solid brass.",
    care: "Wipe clean with soft dry cloth."
  },

  // 25. Women - Kaftan Dress
  {
    id: 25,
    name: "Zari Embroidered Silk Kaftan Gown",
    category: "Traditional Wear",
    subcategory: "Traditional Dresses",
    gender: "Women",
    price: 390,
    oldPrice: 470,
    rating: 5.0,
    reviews: 79,
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Emerald Royale", hex: "#0F382B" },
      { name: "Gilded Gold", hex: "#C8A24D" },
      { name: "Ruby Sunset", hex: "#7D1A2C" }
    ],
    sizes: ["S", "M", "L", "Free Fit"],
    badge: "ATELIER ICON",
    isNew: true,
    isBestSeller: true,
    isSale: true,
    isFeatured: true,
    description: "Resplendent floor-length silk georgette kaftan gown detailed with hand-embroidered metallic Zari work around the neckline and bell sleeves.",
    materials: "100% Pure Silk Georgette, real gold-foil thread embroidery, slip dress included.",
    care: "Dry clean only."
  },

  // 26. Shoes - Sandals
  {
    id: 26,
    name: "Riviera Cross-Strap Leather Slide",
    category: "Shoes",
    subcategory: "Slides & Sandals",
    gender: "Men",
    price: 145,
    oldPrice: null,
    rating: 4.7,
    reviews: 55,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Raw Vachetta", hex: "#C19A6B" },
      { name: "Espresso", hex: "#2E1F18" }
    ],
    sizes: ["40 EU", "41 EU", "42 EU", "43 EU", "44 EU"],
    badge: "NEW",
    isNew: true,
    isBestSeller: false,
    isSale: false,
    isFeatured: false,
    description: "Anatomically contoured cork footbed wrapped in supple glove leather with interlocking criss-cross upper straps.",
    materials: "Italian nappa leather, natural cork latex midsole, EVA outsole.",
    care: "Keep away from prolonged soaking."
  },

  // 27. Kids - Girl Dress
  {
    id: 27,
    name: "Princess Adanna Ankara Party Dress",
    category: "Kids",
    subcategory: "Occasion Wear",
    gender: "Kids",
    price: 95,
    oldPrice: 120,
    rating: 4.9,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Gold Floral Wax", hex: "#D4AF5A" },
      { name: "Fuchsia Sunshine", hex: "#B82E5D" }
    ],
    sizes: ["3-4 YRS", "5-6 YRS", "7-8 YRS", "9-10 YRS"],
    badge: "SALE 20% OFF",
    isNew: false,
    isBestSeller: false,
    isSale: true,
    isFeatured: false,
    description: "Delightful fit-and-flare occasion dress with soft tulle petticoat, sash bow in back, and breathable cotton lining.",
    materials: "100% Premium African wax print cotton, soft modal lining.",
    care: "Hand wash cold. Line dry."
  },

  // 28. Jewelry - Coral
  {
    id: 28,
    name: "Benin Heritage Beaded Coral Necklace",
    category: "Jewelry",
    subcategory: "Beaded Coral",
    gender: "Unisex",
    price: 275,
    oldPrice: null,
    rating: 5.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Royal Coral Red & Gold", hex: "#A82B1C" }
    ],
    sizes: ["22 IN Strand"],
    badge: "LIMITED EDITION",
    isNew: true,
    isBestSeller: false,
    isSale: false,
    isFeatured: true,
    description: "Ceremonial heirloom necklace hand-strung with authentic Mediterranean red barrel coral beads and 18k gold spacer accents.",
    materials: "Natural red coral beads, 18k solid gold vermeil spacers and clasp.",
    care: "Wipe with untreated chamois cloth. Keep away from perfumes."
  },

  // 29. Men - Trousers
  {
    id: 29,
    name: "Sartorial Gurkha Pleated Linen Trousers",
    category: "Clothing",
    subcategory: "Pleated Trousers",
    gender: "Men",
    price: 185,
    oldPrice: 220,
    rating: 4.8,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Cream Stone", hex: "#EBE6DD" },
      { name: "Tobacco Brown", hex: "#634731" },
      { name: "Navy Blue", hex: "#152238" }
    ],
    sizes: ["30W", "32W", "34W", "36W", "38W"],
    badge: "SALE 15% OFF",
    isNew: false,
    isBestSeller: false,
    isSale: true,
    isFeatured: false,
    description: "High-rise Gurkha waistband with double side buckle adjusters, deep forward pleats, and generous taper toward the hem.",
    materials: "100% Heavyweight Irish Linen, brass hardware.",
    care: "Dry clean or gentle hand wash."
  },

  // 30. Watches - Obsidian
  {
    id: 30,
    name: "Nocturne Minimalist Black Ceramic Watch",
    category: "Watches",
    subcategory: "Ceramic Bezel",
    gender: "Unisex",
    price: 460,
    oldPrice: null,
    rating: 4.9,
    reviews: 49,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Matte Ceramic Black & Gold Hand", hex: "#141414" }
    ],
    sizes: ["40mm Case"],
    badge: "NEW",
    isNew: true,
    isBestSeller: false,
    isSale: false,
    isFeatured: true,
    description: "High-tech scratch-proof black ceramic case, sunray obsidian dial with single gold Roman numeral XII, and Japanese automatic movement.",
    materials: "High-tech Zirconia Ceramic, Sapphire Glass, deployment butterfly clasp.",
    care: "Water resistant 50M. Avoid severe blunt shock."
  },

  // 31. Women - Heels
  {
    id: 31,
    name: "Aurelia Gilded Sculptural Stiletto Heels",
    category: "Shoes",
    subcategory: "Heels",
    gender: "Women",
    price: 310,
    oldPrice: 380,
    rating: 4.9,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Liquid Mirror Gold", hex: "#D4AF5A" },
      { name: "Midnight Satin Noir", hex: "#0A0A0A" }
    ],
    sizes: ["36 EU", "37 EU", "38 EU", "39 EU", "40 EU", "41 EU"],
    badge: "SALE 20% OFF",
    isNew: false,
    isBestSeller: true,
    isSale: true,
    isFeatured: true,
    description: "90mm architectural column stiletto heel cast in metallic gold alloy with buttery soft leather insole and ankle-wrap strap.",
    materials: "Metallic kidskin leather upper, padded leather insole, gold-cast heel.",
    care: "Store in protective dust sleeves."
  },

  // 32. Accessories - Silk Scarf
  {
    id: 32,
    name: "Sovereign Heritage Silk Twill Scarf (90cm)",
    category: "Accessories",
    subcategory: "Silk Pocket Squares",
    gender: "Unisex",
    price: 115,
    oldPrice: null,
    rating: 4.8,
    reviews: 53,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Gold, Ivory & Royal Navy", hex: "#C8A24D" }
    ],
    sizes: ["90cm x 90cm"],
    badge: "NEW",
    isNew: true,
    isBestSeller: false,
    isSale: false,
    isFeatured: false,
    description: "Hand-rolled edges printed with antique West African royal crests and celestial astrology charts on heavyweight 16-momme silk twill.",
    materials: "100% Silk Twill with hand-rolled and hand-sewn edges.",
    care: "Dry clean only."
  },

  // 33. Hats - Panama
  {
    id: 33,
    name: "Monte Cristi Handwoven Toquilla Panama Hat",
    category: "Hats",
    subcategory: "Panama Hats",
    gender: "Unisex",
    price: 210,
    oldPrice: 250,
    rating: 4.9,
    reviews: 39,
    image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Bleached Natural Straw / Black Band", hex: "#EFEADB" }
    ],
    sizes: ["57cm", "59cm", "61cm"],
    badge: "SALE 15% OFF",
    isNew: false,
    isBestSeller: false,
    isSale: true,
    isFeatured: false,
    description: "Finely woven by master artisans over three months using select Toquilla straw fibres. Finished with a gold-stamped black grosgrain ribbon.",
    materials: "100% Ecuadorian Toquilla Straw, silk grosgrain ribbon.",
    care: "Avoid water and moisture. Handle exclusively by brim."
  },

  // 34. Clothing - Women Kimono
  {
    id: 34,
    name: "Draped Silk Charmeuse Robe Kimono",
    category: "Clothing",
    subcategory: "Kimonos & Robes",
    gender: "Women",
    price: 285,
    oldPrice: null,
    rating: 4.9,
    reviews: 65,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Pearl Champagne", hex: "#E8DEC8" },
      { name: "Midnight Raven", hex: "#0E0E0E" }
    ],
    sizes: ["One Size"],
    badge: "EDITORIAL EDIT",
    isNew: true,
    isBestSeller: true,
    isSale: false,
    isFeatured: true,
    description: "Effortless flowing silhouette that transitions seamlessly from private lounging to evening glamour with wide kimono sleeves and a broad obi belt.",
    materials: "100% Mulberry Silk Charmeuse, French seams throughout.",
    care: "Dry clean or delicate hand wash cold."
  }
];

// Helper functions for mock data queries
export const getFeaturedProducts = () => PRODUCTS.filter(p => p.isFeatured);
export const getNewArrivals = () => PRODUCTS.filter(p => p.isNew);
export const getBestSellers = () => PRODUCTS.filter(p => p.isBestSeller);
export const getSaleProducts = () => PRODUCTS.filter(p => p.isSale);
export const getProductById = (id) => PRODUCTS.find(p => p.id === Number(id));
export const getRelatedProducts = (id, limit = 4) => {
  const current = getProductById(id);
  if (!current) return PRODUCTS.slice(0, limit);
  return PRODUCTS.filter(p => p.id !== current.id && (p.category === current.category || p.gender === current.gender)).slice(0, limit);
};
