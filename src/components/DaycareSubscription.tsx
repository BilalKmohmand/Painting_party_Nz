import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DAYCARE_THEMES } from '../data/products';
import { sound } from '../utils/audio';
import { School, Sparkles, CheckCircle2, Calendar, Users, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface DaycareSubscriptionProps {
  onEnquire: (groupSize: string, theme: string) => void;
}

export const DaycareSubscription: React.FC<DaycareSubscriptionProps> = ({ onEnquire }) => {
  const [selectedGroupSize, setSelectedGroupSize] = useState('30 Children (Full Centre)');
  const [activeMonthIdx, setActiveMonthIdx] = useState(0);

  const groupSizes = [
    { label: '10 Children', subtitle: 'Single Room / Toddler Unit' },
    { label: '20 Children', subtitle: 'Standard Classroom Size' },
    { label: '30 Children (Full Centre)', subtitle: 'Most Popular for ECE Kindys', popular: true },
    { label: '50+ Children', subtitle: 'Multi-Branch ECE Networks' }
  ];

  return (
    <section id="daycare-schools" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white/60 text-[#00C2CB] text-xs md:text-sm font-extrabold uppercase px-4 py-1.5 rounded-full mb-3 tracking-wider shadow-2xs">
            <School className="w-4 h-4" />
            ECE & Kindergarten Subscriptions
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-[#001F3F] tracking-tight">
            Paint Party <span className="text-[#00C2CB]">Monthly Daycare Craft Box</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#001F3F]/70 font-medium">
            A brand-new themed creative curriculum box delivered to your childcare centre every month. Zero teacher prep time!
          </p>
        </div>

        {/* 2-Column Content Grid: Theme Showcase & Subscription Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Monthly Rotating Theme Carousel / Grid */}
          <div className="lg:col-span-7 bg-white/45 backdrop-blur-lg rounded-[32px] p-6 sm:p-8 shadow-xl border border-white/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#00C2CB]">Curriculum-Aligned Monthly Themes</span>
                  <h3 className="text-xl font-display font-black text-[#001F3F]">12 Months of Discovery</h3>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-white/70 text-[#001F3F] rounded-full border border-white/80 shadow-2xs">
                  Te Whāriki Aligned
                </span>
              </div>

              {/* Monthly Theme Pills */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-6">
                {DAYCARE_THEMES.map((theme, idx) => {
                  const isActive = activeMonthIdx === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveMonthIdx(idx);
                        sound.playPop();
                      }}
                      className={`p-2 rounded-xl text-left transition-all text-xs flex flex-col justify-between cursor-pointer ${
                        isActive
                          ? 'bg-[#00C2CB] text-white font-extrabold shadow-md scale-102'
                          : 'bg-white/60 hover:bg-white text-[#001F3F] font-medium border border-white/70'
                      }`}
                    >
                      <span className={`text-[10px] uppercase font-bold block ${isActive ? 'text-white/80' : 'text-[#001F3F]/50'}`}>
                        {theme.month.split(' / ')[0]}
                      </span>
                      <span className="line-clamp-1 mt-0.5">{theme.themeName.split(' & ')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Theme Detailed Card */}
              <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#00C2CB] uppercase tracking-wider">
                    {DAYCARE_THEMES[activeMonthIdx].month}
                  </span>
                  <span className="text-xs font-bold text-[#001F3F]/60">
                    Plaster Sculptures: {DAYCARE_THEMES[activeMonthIdx].plasterShapes.join(', ')}
                  </span>
                </div>
                <h4 className="text-2xl font-display font-black text-[#001F3F] mt-1">
                  {DAYCARE_THEMES[activeMonthIdx].themeName}
                </h4>
                <p className="mt-2 text-sm text-[#001F3F]/75 leading-relaxed font-medium">
                  {DAYCARE_THEMES[activeMonthIdx].description}
                </p>
                <div className="mt-4 pt-3 border-t border-white/60 flex items-center gap-2 text-xs font-bold text-[#00C2CB]">
                  <Sparkles className="w-4 h-4" />
                  <span>Learning Outcome: {DAYCARE_THEMES[activeMonthIdx].learningFocus}</span>
                </div>
              </div>
            </div>

            {/* Educator Trust Badges */}
            <div className="mt-6 pt-6 border-t border-white/50 grid grid-cols-3 gap-3 text-center">
              <div className="p-2.5 rounded-xl bg-white/50 border border-white/60">
                <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-[#001F3F] block">Non-Toxic Paints</span>
                <span className="text-[9px] text-[#001F3F]/60">100% Child-Safe</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/50 border border-white/60">
                <Users className="w-4 h-4 text-[#FF8C00] mx-auto mb-1" />
                <span className="text-[11px] font-bold text-[#001F3F] block">Pre-Sorted Packs</span>
                <span className="text-[9px] text-[#001F3F]/60">Zero Teacher Prep</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/50 border border-white/60">
                <Calendar className="w-4 h-4 text-[#8A2BE2] mx-auto mb-1" />
                <span className="text-[11px] font-bold text-[#001F3F] block">Monthly Auto-Delivery</span>
                <span className="text-[9px] text-[#001F3F]/60">Cancel Anytime</span>
              </div>
            </div>
          </div>

          {/* Right Column: Group Size Selector & Daycare Subscription CTA */}
          <div className="lg:col-span-5 bg-white/45 backdrop-blur-lg rounded-[32px] p-6 sm:p-8 shadow-xl border border-white/60 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF8C00]">
                Flexible Daycare Sizing
              </span>
              <h3 className="text-2xl font-display font-black text-[#001F3F] mt-1">
                Choose Centre Group Size
              </h3>
              <p className="mt-1 text-xs text-[#001F3F]/60 font-medium">
                Select your children count to receive tiered educator bulk rates (no fixed prices shown).
              </p>

              {/* Group Size Options */}
              <div className="mt-5 space-y-3">
                {groupSizes.map((sz, sIdx) => {
                  const isSelected = selectedGroupSize === sz.label;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => {
                        setSelectedGroupSize(sz.label);
                        sound.playPop();
                      }}
                      className={`w-full p-3.5 rounded-2xl border-2 text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-[#00C2CB] bg-white shadow-md ring-2 ring-[#00C2CB]/20'
                          : 'border-white/60 bg-white/40 hover:bg-white/70'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-black text-[#001F3F] flex items-center gap-2">
                          {sz.label}
                          {sz.popular && (
                            <span className="text-[10px] font-bold bg-[#FF8C00] text-white px-2 py-0.5 rounded-full shadow-2xs">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-[#001F3F]/60 font-medium">{sz.subtitle}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-extrabold text-[#00C2CB] block">From $—</span>
                        <span className="text-[10px] text-[#001F3F]/50">Educator Rate</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* What comes in each monthly box */}
              <div className="mt-6 p-4 rounded-2xl bg-white/50 border border-white/60">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#001F3F]/60 mb-2">
                  Each Monthly Box Includes:
                </div>
                <ul className="space-y-1.5 text-xs text-[#001F3F]/80 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Selected themed plaster figures for every child</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Large washable paint pots + toddler-grip brushes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Individual take-home bags for whānau presentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Educator learning prompt sheets & curriculum links</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-4 border-t border-white/50">
              <button
                onClick={() => onEnquire(selectedGroupSize, DAYCARE_THEMES[activeMonthIdx].themeName)}
                className="w-full py-4 rounded-2xl bg-[#00C2CB] text-white font-display font-black text-sm shadow-lg hover:bg-[#00C2CB]/90 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enquire About Daycare Subscription</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="mt-2 text-center text-[11px] text-[#001F3F]/50">
                GST Tax Invoices & Purchase Orders accepted across NZ
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
