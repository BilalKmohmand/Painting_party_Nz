import React from 'react';

interface PlasterArtFigureProps {
  shape: string;
  colors?: string[]; // user selected colors or default
  isInteractive?: boolean;
  onColorChange?: (colorHex: string) => void;
  className?: string;
  isWiggling?: boolean;
  onClick?: () => void;
}

export const PlasterArtFigure: React.FC<PlasterArtFigureProps> = ({
  shape,
  colors = ['#FF2E93', '#FF7A00', '#0DC2BB', '#8E44F3', '#FBBF24', '#FFFFFF'],
  className = 'w-48 h-48',
  isWiggling = false,
  onClick
}) => {
  const primaryColor = colors[0] || '#FF2E93';
  const secondaryColor = colors[1] || '#FF7A00';
  const accentColor = colors[2] || '#0DC2BB';
  const detailColor = colors[3] || '#8E44F3';
  const highlightColor = colors[4] || '#FBBF24';

  const renderShape = () => {
    switch (shape) {
      case 'unicorn':
        return (
          <g transform="translate(10, 10)">
            {/* Plaster Body Base & Drop Shadows */}
            <path
              d="M 60 140 Q 50 160 40 180 Q 70 190 120 185 Q 160 180 150 150 Q 140 110 130 90 Q 115 50 85 45 Q 65 42 55 60 Q 45 75 50 95 Q 40 105 35 125 Q 38 135 60 140 Z"
              fill="#F8FAFC"
              stroke="#CBD5E1"
              strokeWidth="4"
              className="drop-shadow-md"
            />
            {/* Painted Main Body Swirl */}
            <path
              d="M 65 140 Q 60 160 55 175 Q 85 180 120 178 Q 140 165 135 140 Q 125 115 115 95 Q 100 65 80 60 Q 68 62 62 75 Q 55 88 60 105 Z"
              fill={primaryColor}
              fillOpacity="0.85"
            />
            {/* Flowing Mane Ribbons */}
            <path
              d="M 75 48 Q 50 40 35 60 Q 45 80 70 65 Q 40 75 30 100 Q 45 110 68 95 Q 35 115 35 145 Q 50 150 72 125 Z"
              fill={detailColor}
            />
            {/* Golden Horn */}
            <polygon points="85,45 95,8 102,46" fill={highlightColor} stroke="#D97706" strokeWidth="2" />
            <line x1="88" y1="36" x2="98" y2="34" stroke="#F59E0B" strokeWidth="2" />
            <line x1="91" y1="24" x2="97" y2="22" stroke="#F59E0B" strokeWidth="2" />
            {/* Soft Cheek & Eye */}
            <circle cx="95" cy="80" r="10" fill={secondaryColor} fillOpacity="0.4" />
            <circle cx="102" cy="70" r="4.5" fill="#111936" />
            <circle cx="104" cy="68" r="1.5" fill="#FFFFFF" />
            <path d="M 98 63 Q 102 60 108 64" stroke="#111936" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Magical Stars / Sparkles */}
            <path d="M 125 135 L 128 142 L 135 145 L 128 148 L 125 155 L 122 148 L 115 145 L 122 142 Z" fill={accentColor} />
            <path d="M 140 105 L 142 110 L 147 112 L 142 114 L 140 119 L 138 114 L 133 112 L 138 110 Z" fill={highlightColor} />
            {/* Paint brush stroke accent */}
            <path d="M 80 160 Q 100 170 125 162" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3" />
          </g>
        );

      case 'dino':
        return (
          <g transform="translate(10, 10)">
            {/* Base Plaster T-Rex */}
            <path
              d="M 50 70 Q 50 30 90 28 Q 130 25 145 50 Q 155 70 135 85 Q 150 90 140 110 Q 115 105 105 95 Q 110 120 125 140 Q 150 150 180 155 Q 170 175 130 170 Q 100 165 85 180 Q 75 190 60 185 Q 55 170 65 150 Q 50 135 45 110 Q 40 85 50 70 Z"
              fill="#F8FAFC"
              stroke="#CBD5E1"
              strokeWidth="4"
              className="drop-shadow-md"
            />
            {/* Body Paint */}
            <path
              d="M 60 70 Q 60 40 90 38 Q 120 35 135 55 Q 140 70 125 80 Q 130 85 125 98 Q 110 95 100 88 Q 105 110 118 130 Q 140 140 165 145 Q 155 160 125 155 Q 98 150 85 165 Q 75 172 65 168 Q 60 155 68 138 Q 55 125 52 105 Q 48 85 60 70 Z"
              fill={primaryColor}
              fillOpacity="0.9"
            />
            {/* Back Spikes / Plates */}
            <polygon points="50,45 40,35 55,30" fill={secondaryColor} />
            <polygon points="42,75 30,65 48,60" fill={secondaryColor} />
            <polygon points="38,105 25,98 42,92" fill={secondaryColor} />
            <polygon points="40,135 28,130 45,122" fill={secondaryColor} />
            {/* Belly Pattern */}
            <path d="M 70 110 Q 85 120 90 145 Q 75 155 68 138 Z" fill={highlightColor} />
            {/* Eye & Cute Smile with Teeth */}
            <circle cx="105" cy="50" r="6" fill="#FFFFFF" />
            <circle cx="106" cy="50" r="3.5" fill="#111936" />
            <circle cx="107" cy="48" r="1" fill="#FFFFFF" />
            <path d="M 115 72 Q 130 72 135 65" stroke="#111936" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <polygon points="120,72 123,78 126,72" fill="#FFFFFF" />
            <polygon points="127,72 130,77 133,70" fill="#FFFFFF" />
            {/* Dinosaur spots */}
            <circle cx="85" cy="85" r="7" fill={accentColor} />
            <circle cx="100" cy="115" r="5" fill={accentColor} />
            <circle cx="70" cy="135" r="6" fill={detailColor} />
          </g>
        );

      case 'butterfly':
        return (
          <g transform="translate(10, 10)">
            {/* Butterfly Plaster Wings */}
            <path
              d="M 100 100 Q 120 40 170 35 Q 190 60 175 105 Q 160 130 115 115 Q 165 145 155 180 Q 130 195 105 145 Q 80 195 55 180 Q 45 145 95 115 Q 50 130 35 105 Q 20 60 40 35 Q 90 40 100 100 Z"
              fill="#F8FAFC"
              stroke="#CBD5E1"
              strokeWidth="4"
              className="drop-shadow-md"
            />
            {/* Top Wings Painted */}
            <path
              d="M 100 95 Q 118 45 160 42 Q 178 62 165 98 Q 150 120 112 108 Z"
              fill={primaryColor}
              fillOpacity="0.85"
            />
            <path
              d="M 100 95 Q 82 45 40 42 Q 22 62 35 98 Q 50 120 88 108 Z"
              fill={primaryColor}
              fillOpacity="0.85"
            />
            {/* Bottom Wings Painted */}
            <path
              d="M 100 115 Q 148 138 142 168 Q 122 180 102 138 Z"
              fill={secondaryColor}
              fillOpacity="0.85"
            />
            <path
              d="M 100 115 Q 52 138 58 168 Q 78 180 98 138 Z"
              fill={secondaryColor}
              fillOpacity="0.85"
            />
            {/* Wing Patterns & Eyespots */}
            <circle cx="140" cy="70" r="12" fill={accentColor} />
            <circle cx="140" cy="70" r="6" fill={highlightColor} />
            <circle cx="60" cy="70" r="12" fill={accentColor} />
            <circle cx="60" cy="70" r="6" fill={highlightColor} />
            {/* Body & Antennae */}
            <rect x="96" y="55" width="8" height="90" rx="4" fill="#111936" />
            <path d="M 98 55 Q 85 30 75 35" stroke="#111936" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 102 55 Q 115 30 125 35" stroke="#111936" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <circle cx="75" cy="35" r="3" fill={detailColor} />
            <circle cx="125" cy="35" r="3" fill={detailColor} />
          </g>
        );

      case 'bear':
        return (
          <g transform="translate(10, 10)">
            {/* Plaster Teddy Bear Base */}
            <circle cx="60" cy="50" r="22" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
            <circle cx="140" cy="50" r="22" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
            <circle cx="100" cy="85" r="45" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="4" />
            <ellipse cx="100" cy="145" rx="48" ry="42" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="4" />
            <ellipse cx="55" cy="170" rx="16" ry="14" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
            <ellipse cx="145" cy="170" rx="16" ry="14" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
            
            {/* Painted Coat */}
            <circle cx="60" cy="50" r="16" fill={primaryColor} />
            <circle cx="140" cy="50" r="16" fill={primaryColor} />
            <circle cx="100" cy="85" r="42" fill={primaryColor} fillOpacity="0.9" />
            <ellipse cx="100" cy="145" rx="44" ry="38" fill={primaryColor} fillOpacity="0.9" />

            {/* Inner Ears & Snout */}
            <circle cx="60" cy="50" r="8" fill={highlightColor} />
            <circle cx="140" cy="50" r="8" fill={highlightColor} />
            <ellipse cx="100" cy="95" rx="20" ry="16" fill={highlightColor} />
            
            {/* Cute Face */}
            <circle cx="85" cy="78" r="4.5" fill="#111936" />
            <circle cx="115" cy="78" r="4.5" fill="#111936" />
            <circle cx="86" cy="76" r="1.5" fill="#FFFFFF" />
            <circle cx="116" cy="76" r="1.5" fill="#FFFFFF" />
            <path d="M 94 92 Q 100 88 106 92 Q 100 100 94 92 Z" fill="#111936" />
            <path d="M 100 96 L 100 104 Q 93 108 88 102" stroke="#111936" strokeWidth="2" fill="none" />
            <path d="M 100 104 Q 107 108 112 102" stroke="#111936" strokeWidth="2" fill="none" />

            {/* Bowtie */}
            <polygon points="100,122 80,114 80,130" fill={detailColor} />
            <polygon points="100,122 120,114 120,130" fill={detailColor} />
            <circle cx="100" cy="122" r="5" fill={accentColor} />

            {/* Heart Belly Patch */}
            <path d="M 100 140 C 95 130 80 132 80 148 C 80 160 100 172 100 172 C 100 172 120 160 120 148 C 120 132 105 130 100 140 Z" fill={secondaryColor} />
          </g>
        );

      case 'rocket':
        return (
          <g transform="translate(10, 10)">
            {/* Boosters & Fins */}
            <polygon points="50,150 30,175 60,170" fill={secondaryColor} stroke="#CBD5E1" strokeWidth="2" />
            <polygon points="150,150 170,175 140,170" fill={secondaryColor} stroke="#CBD5E1" strokeWidth="2" />
            
            {/* Rocket Body */}
            <path
              d="M 100 20 Q 145 75 140 165 L 60 165 Q 55 75 100 20 Z"
              fill="#F8FAFC"
              stroke="#CBD5E1"
              strokeWidth="4"
              className="drop-shadow-md"
            />
            <path
              d="M 100 25 Q 138 75 135 158 L 65 158 Q 62 75 100 25 Z"
              fill={primaryColor}
              fillOpacity="0.85"
            />

            {/* Nose Cone */}
            <path d="M 100 25 Q 120 55 125 70 L 75 70 Q 80 55 100 25 Z" fill={detailColor} />

            {/* Porthole Glass Window */}
            <circle cx="100" cy="100" r="22" fill="#E2E8F0" stroke={accentColor} strokeWidth="4" />
            <circle cx="100" cy="100" r="16" fill="#38BDF8" />
            <path d="M 90 92 Q 100 86 110 92" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Flame Boosters */}
            <polygon points="75,165 100,200 88,172" fill={highlightColor} />
            <polygon points="100,165 125,200 112,172" fill={secondaryColor} />
            <polygon points="85,165 100,185 115,165" fill={primaryColor} />
          </g>
        );

      case 'lotus':
      case 'diya':
      default:
        return (
          <g transform="translate(10, 10)">
            {/* Diya Clay Pot Base */}
            <path
              d="M 35 130 Q 30 170 100 175 Q 170 170 165 130 Q 130 145 100 145 Q 70 145 35 130 Z"
              fill="#F8FAFC"
              stroke="#CBD5E1"
              strokeWidth="4"
              className="drop-shadow-md"
            />
            <path
              d="M 40 133 Q 36 166 100 170 Q 164 166 160 133 Q 130 142 100 142 Q 70 142 40 133 Z"
              fill={secondaryColor}
              fillOpacity="0.9"
            />
            {/* Intricate Mandala Motifs */}
            <circle cx="100" cy="155" r="8" fill={primaryColor} />
            <circle cx="70" cy="150" r="5" fill={highlightColor} />
            <circle cx="130" cy="150" r="5" fill={highlightColor} />
            <circle cx="50" cy="142" r="3.5" fill={accentColor} />
            <circle cx="150" cy="142" r="3.5" fill={accentColor} />

            {/* Radiant Flame */}
            <path
              d="M 100 40 C 70 85 80 125 100 135 C 120 125 130 85 100 40 Z"
              fill={highlightColor}
              stroke="#D97706"
              strokeWidth="2"
            />
            <path
              d="M 100 65 C 88 95 90 120 100 128 C 110 120 112 95 100 65 Z"
              fill={primaryColor}
            />
            <path
              d="M 100 85 C 95 105 96 118 100 122 C 104 118 105 105 100 85 Z"
              fill="#FFFFFF"
            />
          </g>
        );
    }
  };

  return (
    <div 
      className={`relative cursor-pointer transition-transform duration-300 hover:scale-105 select-none ${isWiggling ? 'animate-wiggle' : ''} ${className}`}
      onClick={onClick}
      title="Plaster of Paris Sculpture (Click to wiggle / paint)"
    >
      <svg
        viewBox="0 0 220 220"
        className="w-full h-full filter drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="plasterShine" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="6" stdDeviation="6" floodColor="#111936" floodOpacity="0.12" />
          </filter>
        </defs>
        {renderShape()}
      </svg>
      {/* Plaster Matte Texture Badge */}
      <div className="absolute bottom-1 right-1 bg-white/90 backdrop-blur-xs text-[10px] font-bold text-[#111936] px-2 py-0.5 rounded-full border border-slate-200 shadow-xs flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0DC2BB] animate-ping" />
        Plaster 3D
      </div>
    </div>
  );
};
