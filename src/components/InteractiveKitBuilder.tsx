import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PLASTER_DESIGNS, PRODUCTS } from '../data/products';
import { PlasterArtFigure } from './PlasterArtFigure';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Sparkles, Palette, Check, Heart, ShoppingBag, Send, RefreshCw } from 'lucide-react';
import { CartItem } from '../types';

interface InteractiveKitBuilderProps {
  onAddToCart: (item: CartItem) => void;
  onRequestQuote: (theme: string, notes: string) => void;
}

const PALETTE_PRESETS = [
  {
    id: 'rainbow-pop',
    name: 'Rainbow Pop (Pink, Orange, Teal, Purple, Yellow, White)',
    colors: ['#FF2E93', '#FF7A00', '#0DC2BB', '#8E44F3', '#FBBF24', '#FFFFFF']
  },
  {
    id: 'jurassic-safari',
    name: 'Jurassic Jungle (Forest Green, Ochre, Lime, Aqua, Mud Brown, Black)',
    colors: ['#15803D', '#EAB308', '#84CC16', '#06B6D4', '#78350F', '#111936']
  },
  {
    id: 'pastel-dream',
    name: 'Pastel Dream (Soft Lilac, Bubblegum, Mint, Peach, Buttercup, Pearl)',
    colors: ['#C084FC', '#F472B6', '#6EE7B7', '#FDBA74', '#FEF08A', '#F8FAFC']
  },
  {
    id: 'festive-gold',
    name: 'Festive Radiance (Marigold, Crimson, Gold, Teal, Royal Blue, White)',
    colors: ['#FF7A00', '#EF4444', '#F59E0B', '#0DC2BB', '#1E40AF', '#FFFFFF']
  }
];

export const InteractiveKitBuilder: React.FC<InteractiveKitBuilderProps> = ({
  onAddToCart,
  onRequestQuote
}) => {
  const [selectedDesignId, setSelectedDesignId] = useState('unicorn-magic');
  const [selectedPaletteIndex, setSelectedPaletteIndex] = useState(0);
  const [activeColors, setActiveColors] = useState<string[]>(PALETTE_PRESETS[0].colors);
  const [hasGlitterGlaze, setHasGlitterGlaze] = useState(true);
  const [childName, setChildName] = useState('Sia');
  const [occasion, setOccasion] = useState('6th Birthday');
  const [customMessage, setCustomMessage] = useState('Thank you for celebrating with me!');
  const [kitQuantity, setKitQuantity] = useState(10);
  const [isWiggling, setIsWiggling] = useState(false);
  const [brushStrokeProgress, setBrushStrokeProgress] = useState(100);

  const currentDesign = PLASTER_DESIGNS.find(d => d.id === selectedDesignId) || PLASTER_DESIGNS[0];

  const handleSelectDesign = (designId: string) => {
    setSelectedDesignId(designId);
    sound.playBrushSwipe();
    triggerWiggle();
  };

  const handleSelectPalette = (index: number) => {
    setSelectedPaletteIndex(index);
    setActiveColors(PALETTE_PRESETS[index].colors);
    sound.playPaintSplat();
    triggerWiggle();
  };

  const handleCustomColorClick = (colorIndex: number, newHex: string) => {
    const updated = [...activeColors];
    updated[colorIndex] = newHex;
    setActiveColors(updated);
    sound.playPop();
  };

  const triggerWiggle = () => {
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 650);
  };

  const handleInstantPaintBurst = () => {
    sound.playPaintSplat();
    triggerWiggle();
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.6 },
      colors: activeColors
    });
  };

  const handleAddCustomKitToCart = () => {
    sound.playChime();
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#FF2E93', '#FF7A00', '#0DC2BB', '#8E44F3']
    });

    const item: CartItem = {
      id: `custom-kit-${Date.now()}`,
      productId: 'prod-birthday-mega',
      productTitle: `Custom ${currentDesign.name} Party Pack`,
      productImage: PRODUCTS[0].heroImage,
      category: 'Custom Builder',
      quantity: kitQuantity,
      selectedPlasterDesign: currentDesign.name,
      selectedPaintPalette: PALETTE_PRESETS[selectedPaletteIndex].name,
      customPersonalisation: {
        childName,
        ageOrOccasion: occasion,
        customMessage
      },
      pricePlaceholder: 'From $—',
      unitNote: `${kitQuantity} Custom Kits (Everything Included)`
    };

    onAddToCart(item);
  };

  return (
    <section id="custom-builder" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white/60 text-[#FF007F] text-xs md:text-sm font-extrabold uppercase px-4 py-1.5 rounded-full mb-3 tracking-wider shadow-2xs">
            <Sparkles className="w-4 h-4 animate-spin" />
            Interactive Studio Configurator
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-[#001F3F] tracking-tight">
            Build Your Dream <span className="text-[#FF007F]">Paint Party Kit</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#001F3F]/70 font-medium">
            Pick your favourite plaster figure, mix and match paint colours, preview your custom thank-you label, and see it come alive!
          </p>
        </div>

        {/* 2-Column Configurator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Live Visual Canvas Preview & Personalised Label */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-white/45 backdrop-blur-lg rounded-[32px] p-6 sm:p-8 shadow-xl border border-white/60 relative overflow-hidden flex flex-col items-center">
              {/* Studio Canvas Status */}
              <div className="w-full flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-[#001F3F] uppercase tracking-wider">Live Painting Canvas</span>
                </div>
                <button
                  onClick={handleInstantPaintBurst}
                  className="text-xs font-bold text-[#FF007F] hover:text-[#FF8C00] flex items-center gap-1 bg-white/60 hover:bg-white border border-white/60 px-3 py-1 rounded-full transition-all cursor-pointer shadow-2xs"
                  title="Splatter Paint Magic"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Splat Magic
                </button>
              </div>

              {/* Plaster Figure Display */}
              <div className="relative py-6 flex items-center justify-center">
                <PlasterArtFigure
                  shape={currentDesign.svgShape}
                  colors={activeColors}
                  isWiggling={isWiggling}
                  className="w-56 h-56 sm:w-64 sm:h-64"
                  onClick={handleInstantPaintBurst}
                />

                {/* Floating Glitter Badge */}
                {hasGlitterGlaze && (
                  <motion.div
                    className="absolute top-2 right-2 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 animate-pulse"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-yellow-100" />
                    Glitter Glaze Active
                  </motion.div>
                )}
              </div>

              {/* Figure Title */}
              <div className="text-center mt-2">
                <h3 className="text-lg font-bold text-[#001F3F]">{currentDesign.name}</h3>
                <p className="text-xs text-[#001F3F]/60 font-medium">{currentDesign.description}</p>
              </div>

              {/* Live Personalised Sticker Label Preview */}
              <div className="w-full mt-6 pt-5 border-t border-dashed border-white/60">
                <div className="text-xs font-bold text-[#001F3F]/50 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Custom Packaging Label Preview</span>
                  <span className="text-[#00C2CB] text-[11px] font-bold">Free with 20+ kits</span>
                </div>

                <div className="w-full bg-white/60 backdrop-blur-md p-4 rounded-2xl border-2 border-dashed border-[#FF007F]/40 text-center relative shadow-inner">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF007F] text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow-xs">
                    Gift Box Sticker
                  </div>
                  <p className="text-sm md:text-base font-extrabold font-display text-[#001F3F] mt-1">
                    {childName ? `${childName}'s` : "Child's"} {occasion || "Birthday"}
                  </p>
                  <p className="text-xs font-medium text-[#FF007F] italic mt-0.5">
                    "{customMessage || "Thank you for creating memories with me!"}"
                  </p>
                  <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] font-bold text-[#001F3F]/60">
                    <span>Paint Party NZ</span>
                    <span>•</span>
                    <span>Create · Connect · Cherish</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Customizer Controls */}
          <div className="lg:col-span-7 bg-white/45 backdrop-blur-lg rounded-[32px] p-6 sm:p-8 shadow-xl border border-white/60 flex flex-col gap-6">
            {/* Step 1: Pick Plaster Shape */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-extrabold uppercase tracking-wider text-[#001F3F] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FF007F] text-white text-xs flex items-center justify-center font-black">1</span>
                  Choose Plaster Figure Shape
                </label>
                <span className="text-xs font-semibold text-[#FF007F]">9 Handcrafted Designs</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                {PLASTER_DESIGNS.map(design => {
                  const isSelected = selectedDesignId === design.id;
                  return (
                    <button
                      key={design.id}
                      onClick={() => handleSelectDesign(design.id)}
                      className={`p-2.5 rounded-2xl border-2 text-center transition-all flex flex-col items-center gap-1.5 relative cursor-pointer ${
                        isSelected
                          ? 'border-[#FF007F] bg-white shadow-md scale-105 ring-2 ring-[#FF007F]/20'
                          : 'border-white/60 bg-white/40 hover:bg-white/70'
                      }`}
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        <PlasterArtFigure shape={design.svgShape} colors={activeColors} className="w-9 h-9" />
                      </div>
                      <span className="text-[11px] font-bold text-[#001F3F] leading-tight line-clamp-1">
                        {design.name.split(' ')[0]}
                      </span>
                      {isSelected && (
                        <span className="absolute -top-1.5 -right-1.5 bg-[#FF007F] text-white rounded-full p-0.5 shadow-xs">
                          <Check className="w-3 h-3" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Paint Palette & Colors */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-extrabold uppercase tracking-wider text-[#001F3F] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#00C2CB] text-white text-xs flex items-center justify-center font-black">2</span>
                  Select Paint Colour Scheme
                </label>
                <span className="text-xs text-[#001F3F]/60 font-medium">Non-toxic & washable</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
                {PALETTE_PRESETS.map((preset, idx) => {
                  const isSelected = selectedPaletteIndex === idx;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectPalette(idx)}
                      className={`p-3 rounded-2xl border-2 text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-[#00C2CB] bg-white shadow-md ring-2 ring-[#00C2CB]/20'
                          : 'border-white/60 bg-white/40 hover:bg-white/70'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-[#001F3F]">{preset.name.split(' (')[0]}</div>
                        <div className="flex gap-1.5 mt-1.5">
                          {preset.colors.map((c, i) => (
                            <span
                              key={i}
                              className="w-4 h-4 rounded-full border border-white shadow-2xs"
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#00C2CB] shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Sparkle Glaze Toggle */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-amber-50/70 border border-amber-200/60">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-bold text-amber-950">Include Sparkle Gloss Top Coat Glaze Pot</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasGlitterGlaze}
                    onChange={(e) => {
                      setHasGlitterGlaze(e.target.checked);
                      sound.playPop();
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-300 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00C2CB]"></div>
                </label>
              </div>
            </div>

            {/* Step 3: Personalisation Form */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-extrabold uppercase tracking-wider text-[#001F3F] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#8A2BE2] text-white text-xs flex items-center justify-center font-black">3</span>
                  Custom Label Personalisation
                </label>
                <span className="text-xs font-semibold text-[#8A2BE2]">Printed on every box</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-xs font-bold text-[#001F3F]/70 mb-1">Child's Name / Event Name</label>
                  <input
                    type="text"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="e.g. Sia, Leo, Spark NZ"
                    className="w-full px-3.5 py-2 text-sm bg-white/70 border border-white/80 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#8A2BE2] focus:bg-white text-[#001F3F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#001F3F]/70 mb-1">Birthday Age or Occasion</label>
                  <input
                    type="text"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    placeholder="e.g. 6th Birthday, Baby Shower"
                    className="w-full px-3.5 py-2 text-sm bg-white/70 border border-white/80 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#8A2BE2] focus:bg-white text-[#001F3F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#001F3F]/70 mb-1">Thank-You Message on Label</label>
                <input
                  type="text"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="e.g. Thank you for celebrating with me!"
                  className="w-full px-3.5 py-2 text-sm bg-white/70 border border-white/80 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#8A2BE2] focus:bg-white text-[#001F3F]"
                />
              </div>
            </div>

            {/* Step 4: Quantity & Action Buttons */}
            <div className="pt-4 border-t border-white/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Quantity selector */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#001F3F]/70">Pack Quantity:</span>
                <div className="flex items-center border border-white/80 rounded-xl bg-white/60 overflow-hidden shadow-2xs">
                  <button
                    onClick={() => {
                      if (kitQuantity > 1) {
                        setKitQuantity(kitQuantity - 1);
                        sound.playPop();
                      }
                    }}
                    className="px-3 py-1.5 text-sm font-bold text-[#001F3F] hover:bg-white cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-sm font-black text-[#001F3F] min-w-10 text-center">
                    {kitQuantity}
                  </span>
                  <button
                    onClick={() => {
                      setKitQuantity(kitQuantity + 1);
                      sound.playPop();
                    }}
                    className="px-3 py-1.5 text-sm font-bold text-[#001F3F] hover:bg-white cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs font-bold text-[#FF8C00]">
                  {kitQuantity >= 20 ? '🔥 Free Custom Labels' : 'Kits'}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => onRequestQuote(currentDesign.theme, `Custom ${currentDesign.name} x ${kitQuantity} kits for ${childName}'s ${occasion}`)}
                  className="px-4 py-3 rounded-2xl border-2 border-[#001F3F] bg-white/70 backdrop-blur-sm text-xs font-bold text-[#001F3F] hover:bg-white transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  Get Quote
                </button>
                <button
                  onClick={handleAddCustomKitToCart}
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-2xl bg-[#FF007F] text-white text-xs md:text-sm font-extrabold shadow-lg hover:bg-[#FF007F]/90 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add Custom Kits to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
