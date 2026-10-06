import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShopProvider, useShop } from './context/ShopContext';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SearchOverlay from './components/SearchOverlay';
import QuickViewModal from './components/QuickViewModal';
import SizeGuideModal from './components/SizeGuideModal';
import ToastNotification from './components/ToastNotification';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import CategoryPage from './pages/CategoryPage';
import ProductDetails from './pages/ProductDetails';
import Wishlist from './pages/Wishlist';

function MainRouter() {
  const { currentRoute } = useShop();

  // Route matching
  const renderContent = () => {
    // 1. Home
    if (currentRoute === '/' || currentRoute === '') {
      return <Home />;
    }

    // 2. Main Shop
    if (currentRoute === '/shop') {
      return <Shop />;
    }

    // 3. Wishlist
    if (currentRoute === '/wishlist') {
      return <Wishlist />;
    }

    // 4. Product Details (e.g. /product/3)
    if (currentRoute.startsWith('/product/')) {
      const id = currentRoute.replace('/product/', '');
      return <ProductDetails productId={id} />;
    }

    // 5. Dedicated Category Routes
    const categorySlugs = [
      'men',
      'women',
      'kids',
      'shoes',
      'caps',
      'hats',
      'traditional-wear',
      'clothing',
      'accessories',
      'bags',
      'watches',
      'jewelry',
      'new-arrivals',
      'best-sellers',
      'sale'
    ];

    const cleanRoute = currentRoute.replace('/', '');
    if (categorySlugs.includes(cleanRoute)) {
      return <CategoryPage categorySlug={cleanRoute} />;
    }

    // Fallback to Home
    return <Home />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      {/* 1. Global Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Global Sticky Header */}
      <Header />

      {/* 3. Main Page Content with Page Transition */}
      <div className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="w-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. Global Footer */}
      <Footer />

      {/* 5. Drawers, Overlays & Modals */}
      <CartDrawer />
      <SearchOverlay />
      <QuickViewModal />
      <SizeGuideModal />
      <ToastNotification />
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <MainRouter />
    </ShopProvider>
  );
}
