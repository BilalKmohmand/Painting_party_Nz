import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, Heart, Users, School, Award, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export const MilestoneCounters: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [hasConfettied, setHasConfettied] = useState(false);

  const [countKits, setCountKits] = useState(0);
  const [countParties, setCountParties] = useState(0);
  const [countDaycares, setCountDaycares] = useState(0);
  const [countReviews, setCountReviews] = useState(0);

  useEffect(() => {
    if (isInView && !hasConfettied) {
      setHasConfettied(true);
      sound.playChime();

      // Trigger celebratory confetti burst
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#FF2E93', '#FF7A00', '#0DC2BB', '#8E44F3', '#FBBF24']
      });

      // Animate counting numbers smoothly
      const duration = 2000;
      const steps = 40;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCountKits(Math.floor(progress * 10000));
        setCountParties(Math.floor(progress * 500));
        setCountDaycares(Math.floor(progress * 50));
        setCountReviews(Math.floor(progress * 100));

        if (currentStep >= steps) {
          setCountKits(10000);
          setCountParties(500);
          setCountDaycares(50);
          setCountReviews(100);
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, hasConfettied]);

  const stats = [
    {
      value: `${countKits.toLocaleString()}+`,
      label: 'Plaster Figures Painted',
      subtitle: 'Across New Zealand homes & schools',
      color: '#FF007F',
      bgLight: 'bg-[#FF007F]/20',
      icon: Sparkles
    },
    {
      value: `${countParties}+`,
      label: 'Parties & Events Hosted',
      subtitle: 'Birthdays, corporate days & galas',
      color: '#FF8C00',
      bgLight: 'bg-[#FF8C00]/20',
      icon: PartyPopper
    },
    {
      value: `${countDaycares}+`,
      label: 'Daycares & Kindys Partnered',
      subtitle: 'ECE curriculum monthly boxes',
      color: '#00C2CB',
      bgLight: 'bg-[#00C2CB]/20',
      icon: School
    },
    {
      value: `${countReviews}%`,
      label: '5-Star Parent Satisfaction',
      subtitle: 'Zero stress, 100% cherished memories',
      color: '#8A2BE2',
      bgLight: 'bg-[#8A2BE2]/20',
      icon: Heart
    }
  ];

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-6 rounded-[32px] bg-[#001F3F]/85 backdrop-blur-xl border border-white/20 shadow-xl hover:border-white/40 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${st.bgLight} mx-auto mb-3 flex items-center justify-center border border-white/10`}
                  style={{ color: st.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight"
                  style={{ color: st.color }}
                >
                  {st.value}
                </div>
                <h4 className="text-sm sm:text-base font-display font-extrabold text-white mt-1">
                  {st.label}
                </h4>
                <p className="text-xs text-white/70 mt-1 font-medium">
                  {st.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
