import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface HowItWorksProps {
  onStartExploring: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartExploring }) => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Pick It',
      tagline: 'Choose Your Plaster Sculpture',
      description: 'Select from our wide range of handcrafted plaster figures — unicorns, roaring dinosaurs, butterflies, cars, teddy bears, or festive holiday shapes.',
      icon: Sparkles,
      color: '#FF2E93',
      bgLight: 'bg-[#FF2E93]/10',
      badge: 'Unicorns · Dinos · Bears & More'
    },
    {
      stepNumber: '02',
      title: 'Paint It',
      tagline: 'Everything You Need Is in the Box',
      description: 'Zero planning or mess worries. Each kit includes 6 pots of ultra-vibrant washable paint, quality brushes, mixing trays, aprons, and sparkle glaze.',
      icon: Palette,
      color: '#0DC2BB',
      bgLight: 'bg-[#0DC2BB]/10',
      badge: 'Washable & Non-Toxic'
    },
    {
      stepNumber: '03',
      title: 'Keep It',
      tagline: 'Cherished Take-Home Keepsake',
      description: 'Children proudly display their finished artwork at home or gift it to loved ones. Memories that last for years to come instead of plastic junk!',
      icon: Heart,
      color: '#8E44F3',
      bgLight: 'bg-[#8E44F3]/10',
      badge: 'Forever Childhood Memory'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white/60 text-[#8E44F3] text-xs md:text-sm font-extrabold uppercase px-4 py-1.5 rounded-full mb-3 tracking-wider shadow-2xs">
            <Sparkles className="w-4 h-4" />
            Simple 3-Step Journey
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-[#001F3F] tracking-tight">
            How <span className="text-[#FF007F]">Paint Party NZ</span> Works
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#001F3F]/70 font-medium">
            The easiest, most delightful creative activity in New Zealand — whether for 1 child, 20 birthday guests, or 500+ attendees.
          </p>
        </div>

        {/* Steps Grid in Frosted Glass */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-1 border-t-2 border-dashed border-[#001F3F]/20 -translate-y-12 z-0" />

          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative z-10 bg-white/40 backdrop-blur-lg rounded-[32px] p-8 shadow-xl border border-white/60 hover:bg-white/60 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${s.bgLight} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 border border-white/60 shadow-xs`}>
                      <Icon className="w-7 h-7" style={{ color: s.color }} />
                    </div>
                    <span
                      className="text-4xl font-display font-black opacity-20 group-hover:opacity-40 transition-opacity"
                      style={{ color: s.color }}
                    >
                      {s.stepNumber}
                    </span>
                  </div>

                  {/* Badges */}
                  <span
                    className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-3 shadow-2xs border border-white/40"
                    style={{ backgroundColor: `${s.color}15`, color: s.color }}
                  >
                    {s.badge}
                  </span>

                  <h3 className="text-2xl font-display font-black text-[#001F3F]">
                    {s.title}
                  </h3>
                  <h4 className="text-sm font-bold text-[#001F3F]/60 mt-1">
                    {s.tagline}
                  </h4>
                  <p className="mt-3 text-sm text-[#001F3F]/70 leading-relaxed font-medium">
                    {s.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/50 flex items-center gap-2 text-xs font-bold text-[#001F3F]/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>100% stress-free guarantee</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              sound.playChime();
              onStartExploring();
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#001F3F] text-white font-display font-extrabold text-sm sm:text-base shadow-xl hover:bg-[#FF007F] hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Start Your Creative Party Order
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
