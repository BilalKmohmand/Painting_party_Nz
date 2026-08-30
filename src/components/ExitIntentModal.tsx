import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';
import { X, Sparkles, Paintbrush, Gift, Check, ArrowRight } from 'lucide-react';

interface ExitIntentModalProps {
  onClaimDiscount: (code: string) => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ onClaimDiscount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [email, setEmail] = useState('');
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    // Detect mouse leaving viewport towards the top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasTriggered && !sessionStorage.getItem('paint_party_exit_shown')) {
        setIsOpen(true);
        setHasTriggered(true);
        sessionStorage.setItem('paint_party_exit_shown', 'true');
        sound.playPop();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    sound.playChime();
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#FF2E93', '#FF7A00', '#0DC2BB', '#8E44F3']
    });
    setClaimed(true);
    onClaimDiscount('PARTYVIP10');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#111936]/75 backdrop-blur-xs flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: -40 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-4 border-[#FF2E93] overflow-hidden p-6 sm:p-8 text-center"
        >
          {/* Peeking Mascot / Paintbrush Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF2E93] text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 animate-bounce">
            <Paintbrush className="w-3.5 h-3.5" />
            Wait! Before You Go...
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-[#111936] hover:bg-slate-100 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon Stage */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FF2E93] to-[#FF7A00] text-white flex items-center justify-center mx-auto mt-4 mb-4 shadow-xl">
            <Gift className="w-10 h-10 animate-pulse" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-black text-[#111936] tracking-tight">
            Get 10% Off Your <span className="text-[#FF2E93]">First Party Pack!</span>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            Planning a birthday party, school craft session, or holiday event? Unlock your exclusive VIP code now!
          </p>

          {claimed ? (
            <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
              <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold text-sm">
                <Check className="w-5 h-5" />
                <span>Code Unlocked: <strong className="text-base text-[#111936] font-mono">PARTYVIP10</strong></span>
              </div>
              <p className="text-xs text-slate-500 mt-1">We've also emailed this to {email}</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-2 rounded-full bg-[#111936] text-white text-xs font-bold hover:bg-[#FF2E93] transition-all"
              >
                Use Code & Keep Shopping
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-full text-center font-medium focus:ring-2 focus:ring-[#FF2E93] focus:bg-white focus:outline-hidden"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF2E93] via-[#FF7A00] to-[#0DC2BB] text-white font-display font-black text-sm shadow-lg hover:shadow-xl hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>Unlock My 10% Discount Code</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[11px] font-bold text-slate-400 hover:text-slate-600 transition-colors"
              >
                No thanks, I'll pay full price
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
