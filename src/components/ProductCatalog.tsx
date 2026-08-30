import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { sound } from '../utils/audio';
import { Sparkles, Search, SlidersHorizontal, ArrowRight, Eye, ShoppingBag, Check, Star, ShieldCheck } from 'lucide-react';

interface ProductCatalogProps {
  selectedCategoryFilter: string;
  onFilterChange: (category: string) => void;
  onOpenProductDetail: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategoryFilter,
  onFilterChange,
  onOpenProductDetail
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { key: 'all', label: 'All Collections' },
    { key: 'birthday', label: 'Birthday Packs' },
    { key: 'daycare', label: 'Daycare & School' },
    { key: 'seasonal', label: 'Seasonal / Festive' },
    { key: 'celebration', label: 'Baby Shower & Gifts' },
    { key: 'cultural', label: 'Cultural Heritage' },
    { key: 'corporate', label: 'Corporate & Bulk' }
  ];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = selectedCategoryFilter === 'all' || p.category === selectedCategoryFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="shop-catalog" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white/60 text-[#00C2CB] text-xs md:text-sm font-extrabold uppercase px-4 py-1.5 rounded-full mb-3 tracking-wider shadow-2xs">
            <ShoppingBag className="w-4 h-4" />
            Complete Paint Party Catalog
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-[#001F3F] tracking-tight">
            Ready-to-Paint <span className="text-[#FF007F]">Craft Kits & Packs</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#001F3F]/70 font-medium">
            Handcrafted Plaster of Paris figures cast in New Zealand. 100% non-toxic, all materials included.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/60">
          
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {filterTabs.map(tab => {
              const isActive = selectedCategoryFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => {
                    onFilterChange(tab.key);
                    sound.playPop();
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#001F3F] text-white shadow-md scale-105'
                      : 'bg-white/60 text-[#001F3F]/70 hover:bg-white hover:text-[#001F3F] border border-white/70 shadow-2xs'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#001F3F]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search themes, dinos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white/70 border border-white/80 rounded-full focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#FF007F] text-[#001F3F] placeholder-[#001F3F]/40 shadow-xs"
            />
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white/40 backdrop-blur-md rounded-[32px] border border-dashed border-white/80">
            <p className="text-sm font-bold text-[#001F3F]/60">No kits found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onFilterChange('all');
              }}
              className="mt-3 text-xs font-extrabold text-[#FF007F] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-white/45 backdrop-blur-lg rounded-[32px] border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Product Image Stage */}
                  <div className="relative h-60 overflow-hidden bg-slate-100/50">
                    <img
                      src={prod.heroImage}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Tag badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-[#001F3F] shadow-xs border border-white/80">
                        {prod.categoryLabel}
                      </span>
                    </div>

                    {/* Rating Pill */}
                    <div className="absolute top-3 right-3 bg-white/85 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#001F3F] flex items-center gap-1 shadow-xs border border-white/80">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      5.0 ({prod.reviewCount})
                    </div>
                  </div>

                  {/* Product Content Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-display font-black text-[#001F3F] group-hover:text-[#FF007F] transition-colors leading-tight">
                      {prod.title}
                    </h3>
                    
                    <p className="text-xs font-semibold text-[#FF8C00] mt-1 line-clamp-1">
                      {prod.tagline}
                    </p>

                    <p className="mt-2 text-xs text-[#001F3F]/65 line-clamp-2 leading-relaxed font-medium">
                      {prod.shortDesc}
                    </p>

                    {/* Quick Specs Chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-bold text-[#001F3F]/70">
                      <span className="px-2.5 py-1 rounded-lg bg-white/60 border border-white/80">
                        {prod.childrenCovered.split('(')[0]}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/60 border border-white/80">
                        {prod.ageRange.split('(')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-white/50 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#001F3F]/50 uppercase tracking-wider block">Pricing</span>
                      <span className="text-xs font-black text-[#001F3F]">{prod.priceDisplay}</span>
                    </div>

                    <button
                      onClick={() => {
                        sound.playPop();
                        onOpenProductDetail(prod);
                      }}
                      className="px-4 py-2.5 rounded-2xl bg-[#001F3F] text-white text-xs font-extrabold hover:bg-[#FF007F] hover:shadow-md transition-all flex items-center gap-1.5 group-hover:scale-102 cursor-pointer shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View & Customise
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
