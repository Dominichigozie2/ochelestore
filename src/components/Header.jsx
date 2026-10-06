import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, ChevronDown } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

export default function Header() {
  const {
    currentRoute,
    navigate,
    cartCount,
    wishlistCount,
    setIsCartOpen,
    setIsSearchOpen,
    showToast
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Men", path: "/men", hasMega: "men" },
    { name: "Women", path: "/women", hasMega: "women" },
    { name: "Kids", path: "/kids", hasMega: "kids" },
    { name: "Shoes", path: "/shoes", hasMega: "shoes" },
    { name: "Traditional", path: "/traditional-wear", hasMega: "traditional" },
    { name: "Accessories", path: "/accessories" },
    { name: "New Arrivals", path: "/new-arrivals", isGold: true },
    { name: "Sale", path: "/sale", isSale: true },
  ];

  const handleAccountClick = () => {
    showToast("VIP Client Concierge & Atelier Portal Active", "info");
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.06)] border-b border-neutral-200/70 py-3.5"
            : "bg-white border-b border-neutral-100 py-4"
        }`}
      >
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Menu Button & Search */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1.5 text-luxury-black hover:text-luxury-gold transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6 stroke-[1.6]" />
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 text-neutral-700 hover:text-luxury-black transition-colors"
              aria-label="Open search"
            >
              <Search className="w-5 h-5 stroke-[1.6]" />
            </button>
          </div>

          {/* LEFT: Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => navigate('/')}
              className="group flex flex-col items-center lg:items-start text-left focus:outline-none"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-[0.22em] text-luxury-black group-hover:text-neutral-800 transition-colors uppercase whitespace-nowrap">
                  OCHELE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold mb-1 flex-shrink-0" />
              </div>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.42em] text-luxury-gold font-semibold -mt-1 group-hover:tracking-[0.46em] transition-all">
                COLLECTION
              </span>
            </button>
          </div>

          {/* CENTER: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-2 flex-1 justify-center px-2">
            {navItems.map((item) => {
              const isActive = currentRoute === item.path;

              return (
                <div
                  key={item.name}
                  className="relative group flex-shrink-0"
                  onMouseEnter={() => {
                    if (item.hasMega) setActiveMega(item.hasMega);
                    else setActiveMega(null);
                  }}
                >
                  <button
                    onClick={() => {
                      navigate(item.path);
                      setActiveMega(null);
                    }}
                    className={`relative py-2 px-1.5 xl:px-2.5 text-[11px] xl:text-[12px] font-medium tracking-wider uppercase transition-all duration-200 flex items-center gap-1 whitespace-nowrap ${
                      isActive
                        ? "text-luxury-black font-semibold"
                        : item.isSale
                        ? "text-rose-600 hover:text-rose-700 font-semibold"
                        : item.isGold
                        ? "text-luxury-gold-dark hover:text-luxury-gold font-semibold"
                        : "text-neutral-700 hover:text-luxury-black"
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                    {item.hasMega && (
                      <ChevronDown className="w-2.5 h-2.5 text-neutral-400 group-hover:text-luxury-gold transition-transform group-hover:rotate-180 flex-shrink-0" />
                    )}

                    {/* Gold bottom indicator on active or hover */}
                    <span
                      className={`absolute bottom-0 left-1.5 right-1.5 h-[2px] bg-luxury-gold transition-all duration-300 ${
                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* RIGHT: Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3 xl:space-x-4 text-neutral-700 flex-shrink-0">
            {/* Search Desktop */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden lg:flex items-center gap-2 p-1.5 hover:text-luxury-black transition-colors group"
              aria-label="Search catalog"
            >
              <Search className="w-5 h-5 stroke-[1.6] group-hover:text-luxury-gold transition-colors" />
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium group-hover:text-luxury-black hidden xl:inline">
                Search
              </span>
            </button>

            {/* Account */}
            <button
              onClick={handleAccountClick}
              className="p-1.5 hover:text-luxury-black transition-colors relative"
              aria-label="VIP Account"
              title="VIP Client Concierge"
            >
              <User className="w-5 h-5 stroke-[1.6] hover:text-luxury-gold transition-colors" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => navigate('/wishlist')}
              className="p-1.5 hover:text-luxury-black transition-colors relative group"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 stroke-[1.6] transition-transform group-hover:scale-110 ${
                wishlistCount > 0 ? "text-rose-500 fill-rose-50" : "hover:text-luxury-gold"
              }`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-luxury-gold text-luxury-black font-bold text-[10px] rounded-full flex items-center justify-center shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 py-1.5 px-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-sm transition-all duration-200 group relative"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-4 h-4 text-luxury-gold group-hover:rotate-6 transition-transform" />
              <span className="text-xs font-semibold tracking-wider hidden sm:inline">
                BAG
              </span>
              <span className="w-4 h-4 bg-luxury-gold text-luxury-black font-bold text-[10px] rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        {activeMega && (
          <MegaMenu
            categoryKey={activeMega}
            onClose={() => setActiveMega(null)}
          />
        )}
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
