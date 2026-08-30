import React from 'react';
import { Package, CalendarCheck, Sparkles, MapPin, Brush, ShieldCheck, HeartHandshake, Smile } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustPoints = [
    {
      icon: Package,
      color: 'text-[#FF2E93]',
      bgColor: 'bg-[#FF2E93]/10',
      title: 'Everything Included',
      subtitle: 'Plaster, paints, brushes, trays & gift packaging'
    },
    {
      icon: CalendarCheck,
      color: 'text-[#FF7A00]',
      bgColor: 'bg-[#FF7A00]/10',
      title: 'No Planning Required',
      subtitle: 'Zero prep for parents & educators — open & create'
    },
    {
      icon: Sparkles,
      color: 'text-[#0DC2BB]',
      bgColor: 'bg-[#0DC2BB]/10',
      title: 'Personalisation Available',
      subtitle: 'Custom names, dates & branding on packaging'
    },
    {
      icon: MapPin,
      color: 'text-[#8E44F3]',
      bgColor: 'bg-[#8E44F3]/10',
      title: '100% NZ Based',
      subtitle: 'Auckland · Hamilton · Tauranga + NZ Wide'
    }
  ];

  return (
    <div className="w-full bg-white/45 backdrop-blur-lg border-y border-white/60 py-6 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3 rounded-2xl transition-all duration-300 hover:bg-white/60 hover:shadow-xs group"
              >
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center shrink-0 transition-transform group-hover:rotate-6 group-hover:scale-110 shadow-2xs border border-white/60`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-display font-extrabold text-[#001F3F] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#001F3F]/60 font-medium mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
