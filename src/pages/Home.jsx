import React from 'react';
import Hero from '../components/Hero';
import BenefitsBar from '../components/BenefitsBar';
import ShopByCategory from '../components/ShopByCategory';
import NewArrivals from '../components/NewArrivals';
import EditorialSection from '../components/EditorialSection';
import BestSellers from '../components/BestSellers';
import PromotionalBanner from '../components/PromotionalBanner';
import MenWomenEdits from '../components/MenWomenEdits';
import TraditionalWearSection from '../components/TraditionalWearSection';
import SaleSection from '../components/SaleSection';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <main className="w-full">
      {/* 3. Hero Section */}
      <Hero />

      {/* 4. Trust / Benefits Bar */}
      <BenefitsBar />

      {/* 5. Shop By Category */}
      <ShopByCategory />

      {/* 6. New Arrivals */}
      <NewArrivals />

      {/* 7. Editorial Collection */}
      <EditorialSection />

      {/* 8. Best Sellers */}
      <BestSellers />

      {/* 9. Black/Gold Signature Promotional Banner */}
      <PromotionalBanner />

      {/* 10 & 11. Men's Edit & Women's Edit */}
      <MenWomenEdits />

      {/* 12. Traditional Wear Section ("ROOTED IN CULTURE") */}
      <TraditionalWearSection />

      {/* 13. Sale Products */}
      <SaleSection />

      {/* 14. Newsletter */}
      <Newsletter />
    </main>
  );
}
