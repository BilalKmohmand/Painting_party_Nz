import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, CartItem } from '../types';
import { sound } from '../utils/audio';
import { PlasterArtFigure } from './PlasterArtFigure';
import confetti from 'canvas-confetti';
import { X, Sparkles, Check, ShoppingBag, Send, ShieldCheck, Truck, Clock, Users, Star } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
  onRequestQuote: (theme: string, notes: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onRequestQuote
}) => {
  if (!product) return null;

  const [selectedPlasterIdx, setSelectedPlasterIdx] = useState(0);
  const [selectedPaletteIdx, setSelectedPaletteIdx] = useState(0);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [childName, setChildName] = useState('');
  const [occasion, setOccasion] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [quantity, setQuantity] = useState(10);
  const [activeTab, setActiveTab] = useState<'details' | 'included' | 'safety' | 'bulk'>('details');

  const selectedPlaster = product.plasterDesigns[selectedPlasterIdx] || product.plasterDesigns[0];
  const selectedPalette = product.paintPalettes[selectedPaletteIdx] || product.paintPalettes[0];

  const handleAddToCart = () => {
    sound.playChime();
    confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.6 },
      colors: selectedPalette.colors
    });

    const item: CartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      productTitle: product.title,
      productImage: product.heroImage,
      category: product.categoryLabel,
      quantity,
      selectedPlasterDesign: selectedPlaster ? selectedPlaster.name : 'Assorted Designs',
      selectedPaintPalette: selectedPalette ? selectedPalette.name : 'Rainbow Pop',
      customPersonalisation: childName ? {
        childName,
        ageOrOccasion: occasion || 'Birthday Celebration',
        customMessage: customMessage || 'Thank you for celebrating with me!'
      } : undefined,
      pricePlaceholder: product.priceDisplay,
      unitNote: `${quantity} Kits Pack`
    };

    onAddToCart(item);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#111936]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Top Bar with Close Button */}
          <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#FF2E93] bg-[#FF2E93]/10 px-3 py-1 rounded-full">
                {product.categoryLabel}
              </span>
              <span className="text-xs font-bold text-slate-500 hidden sm:inline">
                {product.priceDisplay}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-[#111936] hover:bg-slate-100 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Product Gallery & Visual Plaster Preview */}
              <div className="md:col-span-6 flex flex-col gap-4">
                {/* Main Hero Photo or Plaster Figure */}
                <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <img
                    src={product.galleryImages[activeImageIdx] || product.heroImage}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating Plaster Overlay */}
                  {selectedPlaster && (
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-2xl border border-slate-200 shadow-lg flex items-center gap-2">
                      <div className="w-10 h-10">
                        <PlasterArtFigure shape={selectedPlaster.svgShape} colors={selectedPalette.colors} className="w-9 h-9" />
                      </div>
                      <div className="text-[10px] pr-1 font-bold text-[#111936]">
                        {selectedPlaster.name.split(' ')[0]} Figure
                      </div>
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {product.galleryImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveImageIdx(i);
                        sound.playPop();
                      }}
                      className={`w-16 h-16 rounded-2xl overflow-hidden border-2 shrink-0 transition-all ${
                        activeImageIdx === i ? 'border-[#FF2E93] scale-105 shadow-xs' : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                {/* Micro Inclusions strip */}
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-slate-600">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <Clock className="w-4 h-4 text-[#FF7A00] mx-auto mb-1" />
                    <span>{product.estimatedPrepTime.split('+')[0]}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <Users className="w-4 h-4 text-[#0DC2BB] mx-auto mb-1" />
                    <span>{product.childrenCovered.split('(')[0]}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <Truck className="w-4 h-4 text-[#8E44F3] mx-auto mb-1" />
                    <span>NZ Shipping</span>
                  </div>
                </div>
              </div>

              {/* Product Configuration & Purchase Column */}
              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-display font-black text-[#111936] leading-tight">
                    {product.title}
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-[#FF2E93] mt-1">
                    {product.tagline}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-600">
                      5.0 ({product.reviewCount} NZ reviews)
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Choice of Plaster Design */}
                  {product.plasterDesigns.length > 0 && (
                    <div className="mt-5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-[#111936] block mb-2">
                        1. Choose Plaster Figure Design:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {product.plasterDesigns.map((plaster, pIdx) => {
                          const isSelected = selectedPlasterIdx === pIdx;
                          return (
                            <button
                              key={plaster.id}
                              onClick={() => {
                                setSelectedPlasterIdx(pIdx);
                                sound.playPop();
                              }}
                              className={`p-2 rounded-xl border-2 text-left transition-all text-xs flex flex-col items-center justify-center text-center gap-1 ${
                                isSelected
                                  ? 'border-[#FF2E93] bg-[#FF2E93]/5 font-bold shadow-xs'
                                  : 'border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <span className="text-[11px] text-[#111936] line-clamp-1">{plaster.name.split(' ')[0]}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Choice of Paint Palette */}
                  {product.paintPalettes.length > 0 && (
                    <div className="mt-5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-[#111936] block mb-2">
                        2. Select Paint Colour Palette:
                      </label>
                      <div className="space-y-1.5">
                        {product.paintPalettes.map((palette, palIdx) => {
                          const isSelected = selectedPaletteIdx === palIdx;
                          return (
                            <button
                              key={palette.id}
                              onClick={() => {
                                setSelectedPaletteIdx(palIdx);
                                sound.playPop();
                              }}
                              className={`w-full p-2.5 rounded-xl border-2 text-left transition-all flex items-center justify-between text-xs ${
                                isSelected
                                  ? 'border-[#0DC2BB] bg-[#0DC2BB]/5 font-bold shadow-xs'
                                  : 'border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <span>{palette.name.split(' (')[0]}</span>
                              <div className="flex gap-1">
                                {palette.colors.slice(0, 5).map((c, ci) => (
                                  <span key={ci} className="w-3 h-3 rounded-full border border-slate-200" style={{ backgroundColor: c }} />
                                ))}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Optional Custom Label Personalisation */}
                  <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-[#8E44F3]">
                        3. Add Gift Box Personalisation (Optional)
                      </label>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <input
                        type="text"
                        placeholder="Child / Event Name"
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                        className="px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:ring-1 focus:ring-[#8E44F3]"
                      />
                      <input
                        type="text"
                        placeholder="Age (e.g. 6th Birthday)"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:ring-1 focus:ring-[#8E44F3]"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Thank You Message (e.g. Thanks for celebrating!)"
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:ring-1 focus:ring-[#8E44F3]"
                    />
                  </div>

                </div>

                {/* Quantity & Actions Bar */}
                <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="text-xs font-bold text-slate-600">Qty:</span>
                    <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                      <button
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity(quantity - 1);
                            sound.playPop();
                          }
                        }}
                        className="px-3 py-1.5 text-sm font-bold text-slate-600 hover:bg-slate-200"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-sm font-black text-[#111936]">
                        {quantity}
                      </span>
                      <button
                        onClick={() => {
                          setQuantity(quantity + 1);
                          sound.playPop();
                        }}
                        className="px-3 py-1.5 text-sm font-bold text-slate-600 hover:bg-slate-200"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-xs font-bold text-slate-400">Kits</span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => onRequestQuote(product.title, `Custom quote request for ${quantity} kits of ${product.title}`)}
                      className="px-4 py-3 rounded-full border border-slate-300 text-xs font-bold text-[#111936] hover:bg-slate-50 flex items-center gap-1"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Get Quote
                    </button>
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF2E93] via-[#FF7A00] to-[#0DC2BB] text-white text-xs sm:text-sm font-black shadow-lg hover:shadow-xl hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Tabbed In-Depth Information: What's Included, Safety & Bulk Tiers */}
            <div className="pt-6 border-t border-slate-200">
              <div className="flex gap-4 border-b border-slate-200 pb-2">
                {[
                  { key: 'details', label: 'Overview' },
                  { key: 'included', label: "What's Included" },
                  { key: 'safety', label: 'Safety & Quality' },
                  { key: 'bulk', label: 'Bulk Tier Discounts' }
                ].map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setActiveTab(tab.key as any);
                      sound.playPop();
                    }}
                    className={`text-xs font-extrabold uppercase tracking-wider pb-2 border-b-2 transition-all ${
                      activeTab === tab.key
                        ? 'border-[#FF2E93] text-[#FF2E93]'
                        : 'border-transparent text-slate-400 hover:text-[#111936]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="pt-4 text-xs sm:text-sm text-slate-700">
                {activeTab === 'details' && (
                  <p className="leading-relaxed">{product.fullDesc}</p>
                )}

                {activeTab === 'included' && (
                  <ul className="space-y-2">
                    {product.whatsIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'safety' && (
                  <ul className="space-y-2">
                    {product.safetyInfo.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#0DC2BB] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'bulk' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {product.bulkTiers.map((tier, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                        <span className="text-xs font-black text-[#111936] block">{tier.quantityLabel}</span>
                        <span className="text-sm font-display font-bold text-[#FF7A00] block mt-1">{tier.range}</span>
                        <span className="text-[11px] text-slate-500 block mt-0.5">{tier.discountNote}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
