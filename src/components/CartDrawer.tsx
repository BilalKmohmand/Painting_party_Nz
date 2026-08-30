import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';
import { X, Trash2, ShoppingBag, Sparkles, ArrowRight, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-[#111936]/60 backdrop-blur-xs flex justify-end">
          {/* Overlay Click to close */}
          <div className="fixed inset-0" onClick={onClose} />

          {/* Slideout Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative z-10 w-full max-w-md bg-white/85 backdrop-blur-2xl border-l border-white/60 shadow-2xl flex flex-col h-full overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-white/50 flex items-center justify-between bg-white/60 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#FF007F]" />
                <h3 className="font-display font-black text-lg text-[#001F3F]">
                  Your Creative Cart ({totalItems} kits)
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-[#001F3F]/60 hover:text-[#001F3F] hover:bg-white/70 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress bar */}
            <div className="bg-[#00C2CB]/15 px-5 py-2.5 border-b border-[#00C2CB]/25 flex items-center gap-2 text-xs font-bold text-[#00C2CB]">
              <Truck className="w-4 h-4 shrink-0" />
              <span>🎉 Nationwide NZ Courier Shipping Available on All Party Packs!</span>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-white/60 text-[#001F3F]/40 flex items-center justify-center mx-auto mb-3 border border-white/80">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-[#001F3F]">Your cart is empty</h4>
                  <p className="text-xs text-[#001F3F]/60 mt-1 max-w-xs mx-auto font-medium">
                    Explore our handcrafted plaster collections or use the interactive builder to customize your party pack!
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-5 px-6 py-2.5 rounded-full bg-[#FF007F] text-white text-xs font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map(item => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-xs flex flex-col gap-3 relative"
                  >
                    <div className="flex gap-3">
                      <img
                        src={item.productImage}
                        alt={item.productTitle}
                        className="w-16 h-16 rounded-xl object-cover border border-white/80 shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h4 className="text-xs sm:text-sm font-display font-extrabold text-[#001F3F] leading-tight">
                            {item.productTitle}
                          </h4>
                          <button
                            onClick={() => {
                              onRemoveItem(item.id);
                              sound.playPop();
                            }}
                            className="text-[#001F3F]/40 hover:text-red-500 transition-colors p-1 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-[11px] text-[#FF007F] font-semibold mt-0.5">
                          Plaster: {item.selectedPlasterDesign}
                        </div>
                        <div className="text-[11px] text-[#001F3F]/60 font-medium">
                          Palette: {item.selectedPaintPalette.split(' (')[0]}
                        </div>
                      </div>
                    </div>

                    {/* Custom Personalisation Summary */}
                    {item.customPersonalisation && item.customPersonalisation.childName && (
                      <div className="p-2.5 rounded-xl bg-[#FF007F]/10 border border-[#FF007F]/20 text-[11px]">
                        <span className="font-bold text-[#FF007F]">Personalised Label: </span>
                        <span className="text-[#001F3F]">
                          "{item.customPersonalisation.childName}'s {item.customPersonalisation.ageOrOccasion}"
                        </span>
                      </div>
                    )}

                    {/* Quantity Modifier & Pricing Placeholder */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/60">
                      <div className="flex items-center border border-white/80 rounded-xl bg-white/80 overflow-hidden shadow-2xs">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              onUpdateQuantity(item.id, item.quantity - 1);
                              sound.playPop();
                            }
                          }}
                          className="px-2.5 py-1 text-xs font-bold text-[#001F3F]/70 hover:bg-white cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-1 text-xs font-bold text-[#001F3F]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => {
                            onUpdateQuantity(item.id, item.quantity + 1);
                            sound.playPop();
                          }}
                          className="px-2.5 py-1 text-xs font-bold text-[#001F3F]/70 hover:bg-white cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-black text-[#001F3F] block">
                          {item.pricePlaceholder}
                        </span>
                        <span className="text-[10px] text-[#001F3F]/50">
                          {item.unitNote}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer Checkout CTA */}
            {items.length > 0 && (
              <div className="p-5 border-t border-white/50 bg-white/60 backdrop-blur-md space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-[#001F3F]/70">Subtotal</span>
                  <span className="font-display font-black text-base text-[#001F3F]">From $— (Tiered Rates)</span>
                </div>
                <p className="text-[11px] text-[#001F3F]/50 text-center font-medium">
                  Includes full plaster castings, washable paints, brushes, trays & custom labels.
                </p>
                <button
                  onClick={() => {
                    sound.playChime();
                    onCheckout();
                  }}
                  className="w-full py-4 rounded-2xl bg-[#FF007F] hover:bg-[#FF007F]/90 text-white font-display font-black text-sm shadow-xl hover:shadow-2xl hover:scale-101 active:scale-99 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Quote & Order Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
