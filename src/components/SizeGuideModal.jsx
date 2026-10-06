import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function SizeGuideModal() {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();
  const [activeTab, setActiveTab] = useState('apparel');

  if (!isSizeGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsSizeGuideOpen(false)}
        className="fixed inset-0 bg-black/70 backdrop-blur-xs"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-white max-w-2xl w-full rounded-sm shadow-2xl border border-neutral-200 overflow-hidden z-10 text-luxury-black p-6 sm:p-8"
      >
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-luxury-gold" />
            <h3 className="font-serif text-xl font-bold uppercase tracking-wider">
              ATELIER MEASUREMENT & SIZE GUIDE
            </h3>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-black rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-neutral-200 mt-4">
          <button
            onClick={() => setActiveTab('apparel')}
            className={`py-2 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'apparel'
                ? 'border-luxury-gold text-luxury-black'
                : 'border-transparent text-neutral-400 hover:text-neutral-700'
            }`}
          >
            Apparel & Kaftans
          </button>
          <button
            onClick={() => setActiveTab('shoes')}
            className={`py-2 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'shoes'
                ? 'border-luxury-gold text-luxury-black'
                : 'border-transparent text-neutral-400 hover:text-neutral-700'
            }`}
          >
            Footwear & Loafers
          </button>
          <button
            onClick={() => setActiveTab('traditional')}
            className={`py-2 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'traditional'
                ? 'border-luxury-gold text-luxury-black'
                : 'border-transparent text-neutral-400 hover:text-neutral-700'
            }`}
          >
            Agbada & Fila Caps
          </button>
        </div>

        {/* Tables */}
        <div className="py-6 overflow-x-auto text-xs">
          {activeTab === 'apparel' && (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 text-neutral-500 uppercase tracking-wider">
                  <th className="py-2 font-semibold">Size</th>
                  <th className="py-2 font-semibold">Chest (Inches)</th>
                  <th className="py-2 font-semibold">Waist (Inches)</th>
                  <th className="py-2 font-semibold">Shoulder (Inches)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr>
                  <td className="py-2.5 font-bold">Small (S)</td>
                  <td className="py-2.5">36 - 38"</td>
                  <td className="py-2.5">30 - 32"</td>
                  <td className="py-2.5">17.5"</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold">Medium (M)</td>
                  <td className="py-2.5">39 - 41"</td>
                  <td className="py-2.5">33 - 35"</td>
                  <td className="py-2.5">18.5"</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold">Large (L)</td>
                  <td className="py-2.5">42 - 44"</td>
                  <td className="py-2.5">36 - 38"</td>
                  <td className="py-2.5">19.5"</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold">X-Large (XL)</td>
                  <td className="py-2.5">45 - 47"</td>
                  <td className="py-2.5">39 - 41"</td>
                  <td className="py-2.5">20.5"</td>
                </tr>
              </tbody>
            </table>
          )}

          {activeTab === 'shoes' && (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 text-neutral-500 uppercase tracking-wider">
                  <th className="py-2 font-semibold">EU Size</th>
                  <th className="py-2 font-semibold">US Men</th>
                  <th className="py-2 font-semibold">UK Size</th>
                  <th className="py-2 font-semibold">Foot Length (cm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr><td className="py-2 font-bold">40 EU</td><td>7.5 US</td><td>6.5 UK</td><td>25.5 cm</td></tr>
                <tr><td className="py-2 font-bold">41 EU</td><td>8.5 US</td><td>7.5 UK</td><td>26.2 cm</td></tr>
                <tr><td className="py-2 font-bold">42 EU</td><td>9.0 US</td><td>8.0 UK</td><td>26.8 cm</td></tr>
                <tr><td className="py-2 font-bold">43 EU</td><td>10.0 US</td><td>9.0 UK</td><td>27.5 cm</td></tr>
                <tr><td className="py-2 font-bold">44 EU</td><td>11.0 US</td><td>10.0 UK</td><td>28.2 cm</td></tr>
                <tr><td className="py-2 font-bold">45 EU</td><td>12.0 US</td><td>11.0 UK</td><td>28.9 cm</td></tr>
              </tbody>
            </table>
          )}

          {activeTab === 'traditional' && (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 text-neutral-500 uppercase tracking-wider">
                  <th className="py-2 font-semibold">Designation</th>
                  <th className="py-2 font-semibold">Agbada Wingspan</th>
                  <th className="py-2 font-semibold">Trouser Length</th>
                  <th className="py-2 font-semibold">Fila Head Circumference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr><td className="py-2 font-bold">Imperial Standard (M)</td><td>58" - 60"</td><td>40" - 41"</td><td>56cm - 58cm</td></tr>
                <tr><td className="py-2 font-bold">Imperial Grand (L/XL)</td><td>62" - 64"</td><td>42" - 44"</td><td>59cm - 61cm</td></tr>
                <tr><td className="py-2 font-bold">Bespoke Couture</td><td>Custom Hand Measure</td><td>Custom Hand Measure</td><td>Custom Fit</td></tr>
              </tbody>
            </table>
          )}
        </div>

        <div className="p-4 bg-luxury-cream border border-luxury-sand rounded-xs text-xs text-neutral-600 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-luxury-gold flex-shrink-0 mt-0.5" />
          <p>
            Need bespoke alteration? Our master tailors accommodate custom arm, shoulder, and height
            measurements for all traditional Agbadas and formal suiting at no additional charge.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
