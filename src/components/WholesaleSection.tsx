import React from 'react';
import { motion } from 'motion/react';
import { Store, Sparkles, Check, ArrowRight, PackageCheck, ShoppingBag } from 'lucide-react';
import { sound } from '../utils/audio';

interface WholesaleSectionProps {
  onApplyStockist: () => void;
}

export const WholesaleSection: React.FC<WholesaleSectionProps> = ({ onApplyStockist }) => {
  const stockistBenefits = [
    { title: 'Low Minimum Order Quantity (MOQ)', desc: 'Start with small starter packs tailored for local boutique gift stores and play cafés.' },
    { title: 'Attractive Wholesale Margins', desc: 'Generous wholesale pricing tiers (rates provided upon verified stockist approval).' },
    { title: 'Retail-Ready Packaging & Barcodes', desc: 'Each kit arrives individually packaged in high-clarity hang-tab boxes with display inserts.' },
    { title: 'Custom Wooden Countertop Displays', desc: 'Free branded tabletop point-of-sale display stands provided on qualifying starter orders.' },
    { title: 'Seasonal Collection Rotation', desc: 'Early pre-order access for Easter, Christmas, Mother’s Day, and school holiday spikes.' },
    { title: 'Fast NZ-Wide Restock Dispatch', desc: 'Dispatched from Auckland within 24-48 hours so you never miss a weekend sales rush.' }
  ];

  return (
    <section id="wholesale" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Wholesale Overview & Retail Stockist CTA */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white/60 text-[#FF8C00] text-xs font-extrabold uppercase px-4 py-1.5 rounded-full mb-3 tracking-wider shadow-2xs">
              <Store className="w-4 h-4" />
              Retailers, Gift Shops & Cafés
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-black text-[#001F3F] tracking-tight">
              Become a <span className="text-[#FF8C00]">Paint Party NZ Stockist</span>
            </h2>

            <p className="mt-4 text-base text-[#001F3F]/75 leading-relaxed font-medium">
              Add a high-margin, delightful impulse-buy product to your store shelves. Perfect for family cafés, children's clothing boutiques, museum gift shops, toy stores, and indoor playlands.
            </p>

            {/* Inclusions checklist */}
            <div className="mt-8 space-y-4">
              {stockistBenefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF8C00]/15 text-[#FF8C00] flex items-center justify-center shrink-0 mt-0.5 border border-[#FF8C00]/30">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#001F3F]">{b.title}</h4>
                    <p className="text-xs text-[#001F3F]/60 font-medium">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => {
                  sound.playChime();
                  onApplyStockist();
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white font-display font-black text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Store className="w-4 h-4" />
                <span>Become a Stockist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-[#001F3F]/60">
                Low MOQ • No Locked Contracts
              </span>
            </div>
          </div>

          {/* Right Column: Retail Display Visual Showcase Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/45 backdrop-blur-lg p-8 rounded-[36px] border border-white/60 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF8C00]">Point of Sale Display</span>
                  <h3 className="text-xl font-display font-black text-[#001F3F]">Retail Ready Packaging</h3>
                </div>
                <span className="text-xs font-extrabold px-3 py-1 bg-[#FF8C00] text-white rounded-full shadow-2xs">
                  Wholesale
                </span>
              </div>

              {/* Retail Lifestyle Image */}
              <div className="relative rounded-[24px] overflow-hidden shadow-lg h-64 mb-6 border border-white/60">
                <img
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
                  alt="Paint Party NZ retail kits on display"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-bold">Countertop Wooden POS Display Stand</p>
                  <p className="text-xs text-amber-200">Holds 24 assorted theme kits • Compact footprint</p>
                </div>
              </div>

              {/* Wholesale Spec Chips */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3.5 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-xs">
                  <span className="text-xs text-[#001F3F]/60 font-medium block">MOQ Starter Pack</span>
                  <span className="text-sm font-black text-[#001F3F]">Just 24 Units</span>
                </div>
                <div className="p-3.5 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-xs">
                  <span className="text-xs text-[#001F3F]/60 font-medium block">Restock Lead Time</span>
                  <span className="text-sm font-black text-[#00C2CB]">1 - 2 Days NZ</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
