import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import { sound } from '../utils/audio';

interface IntroSplashProps {
  onComplete: () => void;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'splashing' | 'logo' | 'fading'>('splashing');

  useEffect(() => {
    sound.playPaintSplat();
    const t1 = setTimeout(() => {
      setStage('logo');
      sound.playChime();
    }, 900);

    const t2 = setTimeout(() => {
      setStage('fading');
    }, 2200);

    const t3 = setTimeout(() => {
      onComplete();
    }, 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: stage === 'fading' ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Splashes */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {/* Splash 1: Pink */}
          <motion.div
            className="absolute w-72 h-72 rounded-full bg-[#FF2E93] filter blur-xl opacity-70"
            initial={{ scale: 0, x: -120, y: -80 }}
            animate={{ scale: [0, 1.4, 1], rotate: [0, 45] }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          {/* Splash 2: Orange */}
          <motion.div
            className="absolute w-80 h-80 rounded-full bg-[#FF7A00] filter blur-xl opacity-60"
            initial={{ scale: 0, x: 120, y: -40 }}
            animate={{ scale: [0, 1.3, 1], rotate: [0, -30] }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          />
          {/* Splash 3: Teal */}
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-[#0DC2BB] filter blur-xl opacity-60"
            initial={{ scale: 0, x: -80, y: 110 }}
            animate={{ scale: [0, 1.3, 1], rotate: [0, 60] }}
            transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
          />
          {/* Splash 4: Purple */}
          <motion.div
            className="absolute w-80 h-80 rounded-full bg-[#8E44F3] filter blur-xl opacity-60"
            initial={{ scale: 0, x: 100, y: 90 }}
            animate={{ scale: [0, 1.4, 1], rotate: [0, -45] }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          />
        </div>

        {/* Morphing Brand Logo Container */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center p-8 bg-white/95 rounded-3xl backdrop-blur-md shadow-2xl border border-white/40"
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <BrandLogo size="xl" showTagline={true} />
          
          <motion.p
            className="mt-4 text-xs font-bold tracking-widest text-[#111936]/70 uppercase text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Aotearoa's Favourite Plaster Art Experience
          </motion.p>

          <motion.div
            className="mt-4 flex gap-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF2E93] animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00] animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2.5 h-2.5 rounded-full bg-[#0DC2BB] animate-bounce" style={{ animationDelay: '300ms' }} />
            <span className="w-2.5 h-2.5 rounded-full bg-[#8E44F3] animate-bounce" style={{ animationDelay: '450ms' }} />
          </motion.div>
        </motion.div>

        {/* Skip button */}
        <button
          onClick={onComplete}
          className="absolute bottom-6 right-6 z-20 text-xs font-bold uppercase tracking-wider text-[#111936]/60 hover:text-[#FF2E93] bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm transition-all hover:scale-105"
        >
          Skip Intro →
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
