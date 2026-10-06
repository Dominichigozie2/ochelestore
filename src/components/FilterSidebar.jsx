import React from 'react';
import { X, RotateCcw, Filter, Star, Check } from 'lucide-react';

export default function FilterSidebar({
  filters,
  setFilters,
  categories,
  availableColors,
  availableSizes,
  onReset
}) {
  const genders = ["Men", "Women", "Kids", "Unisex"];
  const priceRanges = [
    { label: "All Prices", min: 0, max: 1000 },
    { label: "Under $150", min: 0, max: 150 },
    { label: "$150 — $300", min: 150, max: 300 },
    { label: "$300 — $500", min: 300, max: 500 },
    { label: "$500+", min: 500, max: 1000 },
  ];

  const handleCategoryToggle = (cat) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category === cat ? 'All' : cat
    }));
  };

  const handleGenderToggle = (gen) => {
    setFilters(prev => ({
      ...prev,
      gender: prev.gender === gen ? 'All' : gen
    }));
  };

  const handleColorToggle = (colorName) => {
    setFilters(prev => ({
      ...prev,
      color: prev.color === colorName ? 'All' : colorName
    }));
  };

  const handleSizeToggle = (size) => {
    setFilters(prev => ({
      ...prev,
      size: prev.size === size ? 'All' : size
    }));
  };

  const handlePriceRange = (range) => {
    setFilters(prev => ({
      ...prev,
      priceRange: range
    }));
  };

  return (
    <aside className="w-full space-y-7 text-luxury-black">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-luxury-gold" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-luxury-black">
            FILTERS
          </h3>
        </div>
        <button
          onClick={onReset}
          className="text-[11px] font-semibold text-neutral-500 hover:text-luxury-black flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          Reset All
        </button>
      </div>

      {/* Gender Filter */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
          Gender
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {genders.map(g => (
            <button
              key={g}
              onClick={() => handleGenderToggle(g)}
              className={`px-3 py-1.5 text-xs rounded-xs font-medium border transition-all ${
                filters.gender === g
                  ? 'bg-luxury-black text-white border-luxury-black font-semibold'
                  : 'bg-white hover:bg-neutral-50 text-neutral-600 border-neutral-200'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
          Department
        </h4>
        <div className="space-y-1 text-xs">
          <button
            onClick={() => setFilters(prev => ({ ...prev, category: 'All' }))}
            className={`w-full text-left py-1 px-2 rounded-xs flex items-center justify-between transition-colors ${
              filters.category === 'All'
                ? 'font-bold text-luxury-black bg-luxury-cream'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span>All Departments</span>
            {filters.category === 'All' && <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />}
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryToggle(cat.name)}
              className={`w-full text-left py-1 px-2 rounded-xs flex items-center justify-between transition-colors ${
                filters.category === cat.name
                  ? 'font-bold text-luxury-black bg-luxury-cream'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <span>{cat.name}</span>
              {filters.category === cat.name && <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
          Price Range
        </h4>
        <div className="space-y-1 text-xs">
          {priceRanges.map((pr, idx) => {
            const isSelected = filters.priceRange?.label === pr.label;
            return (
              <button
                key={idx}
                onClick={() => handlePriceRange(pr)}
                className={`w-full text-left py-1 px-2 rounded-xs flex items-center justify-between transition-colors ${
                  isSelected
                    ? 'font-bold text-luxury-black bg-luxury-cream'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                <span>{pr.label}</span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Size Filter */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
          Size
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {availableSizes.map(sz => (
            <button
              key={sz}
              onClick={() => handleSizeToggle(sz)}
              className={`px-2.5 py-1 text-xs rounded-xs font-medium border transition-all ${
                filters.size === sz
                  ? 'bg-luxury-black text-white border-luxury-black font-semibold'
                  : 'bg-white hover:bg-neutral-50 text-neutral-600 border-neutral-200'
              }`}
            >
              {sz}
            </button>
          ))}
        </div>
      </div>

      {/* Color Swatch Filter */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
          Color Tone
        </h4>
        <div className="flex flex-wrap gap-2">
          {availableColors.map((col, idx) => (
            <button
              key={idx}
              onClick={() => handleColorToggle(col.name)}
              style={{ backgroundColor: col.hex }}
              className={`w-6 h-6 rounded-full border transition-all relative ${
                filters.color === col.name
                  ? 'ring-2 ring-offset-2 ring-luxury-black scale-110'
                  : 'border-neutral-300 hover:scale-105'
              }`}
              title={col.name}
            >
              {filters.color === col.name && (
                <Check className={`w-3 h-3 absolute inset-0 m-auto ${
                  col.hex === '#FFFFFF' || col.hex === '#F8F8F8' ? 'text-black' : 'text-white'
                }`} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Special Badges Toggle */}
      <div className="space-y-2 pt-2 border-t border-neutral-100">
        <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-700">
          <input
            type="checkbox"
            checked={filters.onlySale}
            onChange={(e) => setFilters(prev => ({ ...prev, onlySale: e.target.checked }))}
            className="rounded border-neutral-300 text-luxury-gold focus:ring-luxury-gold"
          />
          <span>Show On-Sale Items Only</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-700">
          <input
            type="checkbox"
            checked={filters.onlyNew}
            onChange={(e) => setFilters(prev => ({ ...prev, onlyNew: e.target.checked }))}
            className="rounded border-neutral-300 text-luxury-gold focus:ring-luxury-gold"
          />
          <span>Show New Season Only</span>
        </label>
      </div>
    </aside>
  );
}
