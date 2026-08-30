import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showTagline = false,
  className = '',
  onClick
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12 md:w-14 md:h-14',
    lg: 'w-16 h-16 md:w-20 md:h-20',
    xl: 'w-24 h-24 md:w-32 md:h-32'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-3xl md:text-4xl'
  };

  return (
    <div 
      className={`inline-flex items-center gap-3 cursor-pointer group select-none ${className}`}
      onClick={onClick}
    >
      {/* Circular Badge with Paintbrushes, Palette & Heart */}
      <div className={`relative ${sizeMap[size]} shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          <defs>
            <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF2E93" />
              <stop offset="35%" stopColor="#FF7A00" />
              <stop offset="70%" stopColor="#0DC2BB" />
              <stop offset="100%" stopColor="#8E44F3" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>

          {/* Outer Gradient Ring */}
          <circle cx="50" cy="50" r="48" fill="url(#brandGrad)" />
          {/* Inner Cream Disc */}
          <circle cx="50" cy="50" r="41" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="2" />

          {/* Paint Palette Shape */}
          <path
            d="M 50 20 C 35 20 22 30 22 45 C 22 62 34 78 50 78 C 55 78 59 75 59 70 C 59 66 56 64 56 60 C 56 55 60 52 65 52 C 74 52 78 45 78 38 C 78 28 65 20 50 20 Z"
            fill="#FFFBEB"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />

          {/* Colour Swatch Dots on Palette */}
          <circle cx="34" cy="38" r="4.5" fill="#FF2E93" />
          <circle cx="45" cy="30" r="4.5" fill="#FF7A00" />
          <circle cx="58" cy="32" r="4.5" fill="#0DC2BB" />
          <circle cx="68" cy="42" r="4.5" fill="#8E44F3" />

          {/* Central Heart */}
          <path
            d="M 44 50 C 41 45 34 46 34 52 C 34 58 44 64 44 64 C 44 64 54 58 54 52 C 54 46 47 45 44 50 Z"
            fill="#FF2E93"
          />

          {/* Crossed Artist Paintbrushes */}
          {/* Brush 1 */}
          <g transform="rotate(35 50 50)">
            <rect x="47" y="10" width="6" height="50" rx="3" fill="#D97706" />
            <rect x="47" y="10" width="6" height="12" fill="#94A3B8" />
            <path d="M 47 10 Q 50 2 53 10 Z" fill="#0DC2BB" />
          </g>
          {/* Brush 2 */}
          <g transform="rotate(-35 50 50)">
            <rect x="47" y="10" width="6" height="50" rx="3" fill="#B45309" />
            <rect x="47" y="10" width="6" height="12" fill="#94A3B8" />
            <path d="M 47 10 Q 50 2 53 10 Z" fill="#FF2E93" />
          </g>

          {/* Little Paint Drips */}
          <circle cx="28" cy="74" r="3" fill="#FF2E93" />
          <circle cx="70" cy="72" r="2.5" fill="#0DC2BB" />
        </svg>

        {/* NZ Fern / Star Badge Accent */}
        <div className="absolute -bottom-1 -right-1 bg-[#111936] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-full border border-white shadow-xs">
          NZ
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`font-display font-extrabold tracking-tight text-[#111936] ${textSizes[size]}`}>
            PAINT PARTY
          </span>
          <span className="font-display font-black text-[#FF2E93] text-sm md:text-base px-1.5 py-0.5 rounded-md bg-[#FF2E93]/10">
            NZ
          </span>
        </div>
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[11px] md:text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E93] via-[#FF7A00] to-[#0DC2BB] tracking-wider uppercase">
              Create · Connect · Cherish
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
