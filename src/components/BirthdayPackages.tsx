import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BIRTHDAY_PACKAGES, PLASTER_DESIGNS } from '../data/products';
import { BirthdayPackage } from '../types';
import { sound } from '../utils/audio';
import { Sparkles, Check, Cake, ArrowRight, Heart, Users, Tag } from 'lucide-react';

interface BirthdayPackagesProps {
  onSelectPackage: (pkg: BirthdayPackage, selectedTheme: string, guestCount: number) => void;
  onRequestQuote: (theme: string, notes: string) => void;
}

export const BirthdayPackages: React.FC<BirthdayPackagesProps> = ({
  onSelectPackage,
  onRequestQuote
}) => {
  const [selectedTheme, setSelectedTheme] = useState('Unicorns & Magic');
  const [customGuestCount, setCustomGuestCount] = useState<number>(20);

  const themeOptions = [
    'Unicorns & Magic',
    'Dinosaurs & Jurassic Safari',
    'Butterflies & Flowers',
    'Race Cars & Wheels',
    'Princess Crowns & Castles',
    'Cuddly Teddy Bears',
    'Space & Rockets',
    'Mix & Match (Assorted)'
  ];

  return (
    <section id="birthday-packs" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white/60 text-[#FF007F] text-xs md:text-sm font-extrabold uppercase px-4 py-1.5 rounded-full mb-3 tracking-wider shadow-2xs">
            <Cake className="w-4 h-4" />
            Kids Birthday Party Packages
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-[#001F3F] tracking-tight">
            Stress-Free <span className="text-[#FF007F]">Birthday Party Packs</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#001F3F]/70 font-medium">
            Keep guests fully entertained with a mess-free painting activity that doubles as their take-home party favor!
          </p>

          {/* Interactive Theme Selector Bar */}
          <div className="mt-6 p-4 rounded-2xl bg-white/45 backdrop-blur-lg border border-white/60 shadow-lg inline-block text-left w-full max-w-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <label className="text-xs font-extrabold uppercase tracking-wider text-[#001F3F] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF8C00]" />
                Select Your Party Theme:
              </label>
              <select
                value={selectedTheme}
                onChange={(e) => {
                  setSelectedTheme(e.target.value);
                  sound.playPop();
                }}
                className="w-full sm:w-auto px-4 py-2 text-sm font-bold bg-white/80 border border-white/80 rounded-xl focus:ring-2 focus:ring-[#FF007F] focus:outline-hidden text-[#001F3F]"
              >
                {themeOptions.map((th, i) => (
                  <option key={i} value={th}>{th}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 3 Tiered Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {BIRTHDAY_PACKAGES.map((pkg, idx) => {
            const isPopular = pkg.popular;
            const accentColors = {
              pink: { border: 'border-[#FF007F]', bg: 'bg-[#FF007F]', text: 'text-[#FF007F]', light: 'bg-[#FF007F]/10' },
              teal: { border: 'border-[#00C2CB]', bg: 'bg-[#00C2CB]', text: 'text-[#00C2CB]', light: 'bg-[#00C2CB]/10' },
              purple: { border: 'border-[#8A2BE2]', bg: 'bg-[#8A2BE2]', text: 'text-[#8A2BE2]', light: 'bg-[#8A2BE2]/10' }
            }[pkg.colorScheme];

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`relative rounded-[32px] bg-white/40 backdrop-blur-lg border border-white/60 p-8 shadow-xl hover:bg-white/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${
                  isPopular
                    ? 'ring-2 ring-[#00C2CB] md:-translate-y-2'
                    : ''
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00C2CB] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-white/40">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Package Header */}
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${accentColors.light} ${accentColors.text} border border-white/40 shadow-2xs`}>
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-bold text-[#001F3F]/60 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {pkg.recommendedFor}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-black text-[#001F3F] mt-2">
                    {pkg.name}
                  </h3>

                  <div className="text-sm font-extrabold text-[#FF8C00] mt-1 flex items-center gap-1.5">
                    <Tag className="w-4 h-4" />
                    {pkg.kitCount}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#001F3F]/70 leading-relaxed font-medium">
                    {pkg.description}
                  </p>

                  {/* Placeholder Pricing as per brief */}
                  <div className="mt-6 p-4 rounded-2xl bg-white/50 border border-white/60 text-center shadow-xs">
                    <span className="text-xs font-bold text-[#001F3F]/50 uppercase tracking-wider block">
                      Package Price
                    </span>
                    <span className="text-xl font-display font-black text-[#001F3F]">
                      {pkg.pricePlaceholder}
                    </span>
                    <span className="text-[11px] text-[#001F3F]/60 block mt-0.5 font-medium">
                      All materials, brushes, paints & gift boxes included
                    </span>
                  </div>

                  {/* Inclusions checklist */}
                  <div className="mt-6 space-y-2.5">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#001F3F]/50">
                      Everything Included:
                    </div>
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#001F3F]/80 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="mt-8 pt-6 border-t border-white/50 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      sound.playChime();
                      onSelectPackage(pkg, selectedTheme, customGuestCount);
                    }}
                    className={`w-full py-3.5 rounded-2xl text-white font-display font-black text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-[#00C2CB] hover:bg-[#00C2CB]/90'
                        : 'bg-[#001F3F] hover:bg-[#FF007F]'
                    }`}
                  >
                    <span>Add {pkg.name} to Cart / Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onRequestQuote(selectedTheme, `Enquiry for ${pkg.name} (${selectedTheme})`)}
                    className="text-xs font-bold text-[#001F3F]/60 hover:text-[#FF007F] text-center transition-colors cursor-pointer"
                  >
                    Need a custom count? Enquire here →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Value Proposition Strip */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#FFF5F9] via-[#F0FDFA] to-[#FAF5FF] border border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#FF2E93] shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-display font-bold text-[#111936]">
                Double as Activity + Party Favour!
              </h4>
              <p className="text-xs text-slate-600">
                Save money on cheap plastic goodie bag junk — kids take home their own hand-painted keepsake sculpture!
              </p>
            </div>
          </div>
          <button
            onClick={() => onRequestQuote('Custom Birthday Bundle', 'Custom Birthday Party Pack')}
            className="px-6 py-2.5 rounded-full bg-white border border-slate-300 text-xs font-extrabold text-[#111936] hover:border-[#FF2E93] hover:text-[#FF2E93] shadow-xs shrink-0"
          >
            Custom Party Quote
          </button>
        </div>

      </div>
    </section>
  );
};
