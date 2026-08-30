import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PlasterArtFigure } from './PlasterArtFigure';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight, ShieldCheck, Heart, PackageCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onNavigateToShop?: () => void;
  onNavigateToBirthday?: () => void;
  onNavigateToBulk?: () => void;
  onOpenCustomBuilder?: () => void;
  onOpenBuilder?: () => void;
  onExploreKits?: () => void;
  onRequestQuote?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateToShop,
  onNavigateToBirthday,
  onNavigateToBulk,
  onOpenCustomBuilder,
  onOpenBuilder,
  onExploreKits,
  onRequestQuote
}) => {
  const handleShop = onNavigateToShop || onExploreKits || (() => {});
  const handleBirthday = onNavigateToBirthday || (() => {
    document.getElementById('birthday-packs')?.scrollIntoView({ behavior: 'smooth' });
  });
  const handleBulk = onNavigateToBulk || onRequestQuote || (() => {
    document.getElementById('corporate-bulk')?.scrollIntoView({ behavior: 'smooth' });
  });
  const handleBuilder = onOpenCustomBuilder || onOpenBuilder || (() => {
    document.getElementById('custom-builder')?.scrollIntoView({ behavior: 'smooth' });
  });

  const [activeFigure, setActiveFigure] = useState<'unicorn' | 'dino' | 'butterfly' | 'bear'>('unicorn');
  const [isWiggling, setIsWiggling] = useState(false);
  const [typedTitle, setTypedTitle] = useState('');
  const fullTitle = 'Paint. Create. Take It Home.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullTitle.length) {
        setTypedTitle(fullTitle.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);

    return () => clearInterval(timer);
  }, []);

  const handleFigureClick = () => {
    sound.playPaintSplat();
    setIsWiggling(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x: 0.7, y: 0.5 },
      colors: ['#FF007F', '#FF8C00', '#00C2CB', '#8A2BE2']
    });
    setTimeout(() => setIsWiggling(false), 700);

    // Switch figures on click
    const figureList: ('unicorn' | 'dino' | 'butterfly' | 'bear')[] = ['unicorn', 'dino', 'butterfly', 'bear'];
    const next = figureList[(figureList.indexOf(activeFigure) + 1) % figureList.length];
    setActiveFigure(next);
  };

  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      {/* Animated Floating Paint Drips from Top */}
      <div className="absolute top-0 inset-x-0 h-16 pointer-events-none flex justify-around opacity-60 z-0 overflow-hidden">
        <div className="w-4 h-10 bg-[#FF007F] rounded-b-full animate-bounce" style={{ animationDuration: '3.2s' }} />
        <div className="w-5 h-14 bg-[#FF8C00] rounded-b-full animate-bounce" style={{ animationDuration: '2.7s', animationDelay: '0.4s' }} />
        <div className="w-3.5 h-8 bg-[#00C2CB] rounded-b-full animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.9s' }} />
        <div className="w-5 h-12 bg-[#8A2BE2] rounded-b-full animate-bounce" style={{ animationDuration: '2.9s', animationDelay: '0.2s' }} />
        <div className="w-4 h-9 bg-[#FBBF24] rounded-b-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.7s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call-To-Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Frosted Micro-Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-xs mb-5"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF007F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF007F]"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#FF007F]">
                Premium Creative Kits New Zealand
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#00C2CB]/15 text-[#00C2CB]">
                Auckland · Hamilton · Tauranga
              </span>
            </motion.div>

            {/* Hand-painted Typewriter Headline */}
            <div className="min-h-[90px] sm:min-h-[120px] md:min-h-[140px] flex items-center">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-[#001F3F] tracking-tight leading-[0.98]">
                {typedTitle.split('.').map((part, index, arr) => {
                  if (index >= arr.length - 1) return null;
                  const colors = ['text-[#001F3F]', 'text-[#001F3F]', 'text-[#FF007F]'];
                  return (
                    <span key={index} className="inline-block mr-3">
                      <span className={colors[index % colors.length]}>{part}</span>
                      <span className="text-[#001F3F]">.</span>
                    </span>
                  );
                })}
                {typedTitle.length < fullTitle.length && (
                  <span className="inline-block w-1.5 h-10 md:h-14 bg-[#FF007F] animate-pulse ml-1 align-middle" />
                )}
              </h1>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-lg sm:text-xl text-[#001F3F]/80 font-medium max-w-2xl leading-relaxed"
            >
              Ready-to-paint creative kits for birthdays, daycares, and little artists. Delivered nationwide, made for memories.
            </motion.p>

            {/* Action Buttons in Frosted Glass styling */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              {/* Primary Button */}
              <button
                onClick={handleShop}
                className="bg-[#FF007F] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-[#FF007F]/25 flex items-center gap-2 hover:bg-[#FF007F]/90 active:scale-95 transition-all text-sm sm:text-base cursor-pointer"
              >
                <span>Shop Paint Kits</span>
                <span className="text-lg">→</span>
              </button>

              {/* Secondary Button */}
              <button
                onClick={handleBirthday}
                className="bg-white/70 backdrop-blur-md border-2 border-[#001F3F] text-[#001F3F] px-8 py-4 rounded-2xl font-bold shadow-md hover:bg-white active:scale-95 transition-all flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#FF007F]" />
                Birthday Packs
              </button>

              {/* Tertiary Button */}
              <button
                onClick={handleBulk}
                className="bg-[#001F3F] text-white px-7 py-4 rounded-2xl font-bold shadow-lg hover:bg-[#001F3F]/90 active:scale-95 transition-all text-sm sm:text-base cursor-pointer"
              >
                Bulk Custom Packs
              </button>
            </motion.div>

            {/* Quick Micro Feature Badges */}
            <div className="mt-8 pt-6 border-t border-white/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-bold text-[#001F3F]/70">
              <div className="flex items-center gap-2">
                <span className="text-[#00C2CB] font-bold text-sm">✔</span>
                <span className="uppercase tracking-wider">NZ Based</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00C2CB] font-bold text-sm">✔</span>
                <span className="uppercase tracking-wider">Everything Included</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00C2CB] font-bold text-sm">✔</span>
                <span className="uppercase tracking-wider">Nationwide Shipping</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Living Scene with Bobbing 3D Plaster Sculpture & Frosted Glass Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Frosted Glass Interactive 3D Showcase Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-md bg-white/45 backdrop-blur-lg rounded-[32px] p-6 sm:p-8 shadow-2xl border border-white/60 relative overflow-hidden group"
            >
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FF007F]">Tap to Paint & Wiggle!</span>
                  <h3 className="text-base font-display font-extrabold text-[#001F3F]">Interactive 3D Plaster</h3>
                </div>
                {/* Figure Switcher Pills */}
                <div className="flex gap-1 bg-white/60 backdrop-blur-sm p-1 rounded-full border border-white/60">
                  {(['unicorn', 'dino', 'butterfly', 'bear'] as const).map(fig => (
                    <button
                      key={fig}
                      onClick={() => {
                        setActiveFigure(fig);
                        sound.playPop();
                      }}
                      className={`px-2 py-0.5 text-[10px] font-bold rounded-full transition-all ${
                        activeFigure === fig ? 'bg-[#FF007F] text-white shadow-xs' : 'text-[#001F3F]/60 hover:text-[#001F3F]'
                      }`}
                    >
                      {fig === 'unicorn' ? '🦄' : fig === 'dino' ? '🦖' : fig === 'butterfly' ? '🦋' : '🧸'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bobbing Plaster Art Stage */}
              <div className="relative py-4 flex items-center justify-center">
                {/* Paint Splatter Halo */}
                <div className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-[#FF007F]/20 via-[#FF8C00]/20 to-[#00C2CB]/20 filter blur-xl animate-pulse" />
                
                {/* Bobbing Figure */}
                <div className="animate-float">
                  <PlasterArtFigure
                    shape={activeFigure}
                    isWiggling={isWiggling}
                    onClick={handleFigureClick}
                    className="w-56 h-56 cursor-pointer"
                  />
                </div>
              </div>

              {/* Bottom Quick Configurator Prompt */}
              <div className="mt-2 pt-4 border-t border-white/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#001F3F]/70">Want custom colours & labels?</span>
                </div>
                <button
                  onClick={handleBuilder}
                  className="text-xs font-extrabold text-[#00C2CB] hover:text-[#FF007F] flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  Launch Studio Builder →
                </button>
              </div>

              {/* Floating Lifestyle Photo Pill */}
              <div className="absolute -bottom-3 -left-3 bg-white/80 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-white/80 flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=120&q=80"
                  alt="Kids joyfully painting"
                  className="w-8 h-8 rounded-full object-cover border border-[#FF007F]"
                />
                <div>
                  <div className="text-[11px] font-extrabold text-[#001F3F]">10,000+ Figures Painted</div>
                  <div className="text-[9px] font-semibold text-emerald-600">★★★★★ Rated 5.0 in NZ</div>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
