import React from 'react';
import { Truck, RotateCcw, ShieldCheck, CreditCard } from 'lucide-react';

export default function BenefitsBar() {
  const benefits = [
    {
      icon: Truck,
      title: "Free Worldwide Shipping",
      description: "Complimentary on all orders over $100",
    },
    {
      icon: RotateCcw,
      title: "Easy 30-Day Returns",
      description: "Hassle-free exchanges & full refunds",
    },
    {
      icon: ShieldCheck,
      title: "100% Authentic Atelier",
      description: "Master artisan certified craftsmanship",
    },
    {
      icon: CreditCard,
      title: "Encrypted Secure Payments",
      description: "256-bit SSL encrypted checkout",
    },
  ];

  return (
    <section className="w-full bg-white border-b border-neutral-100 py-6 sm:py-8">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-neutral-200">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-4 ${
                  idx === 0 ? "lg:pr-8" : idx === 3 ? "lg:pl-8 pt-4 sm:pt-0" : "lg:px-8 pt-4 sm:pt-0"
                } group`}
              >
                <div className="w-12 h-12 rounded-full bg-luxury-cream border border-luxury-sand flex items-center justify-center flex-shrink-0 group-hover:border-luxury-gold transition-colors duration-300">
                  <Icon className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform duration-300 stroke-[1.7]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-luxury-black tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5 font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
