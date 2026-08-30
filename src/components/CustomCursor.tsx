import React, { useEffect, useState } from 'react';

interface TrailDot {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
}

const BRAND_COLORS = ['#FF2E93', '#FF7A00', '#0DC2BB', '#8E44F3', '#FBBF24'];

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trails, setTrails] = useState<TrailDot[]>([]);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop / non-touch with fine pointer and no reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (prefersReducedMotion || isTouch) return;

    let counter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPos({ x: e.clientX, y: e.clientY });

      // Add trail dot occasionally
      counter++;
      if (counter % 3 === 0) {
        const color = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
        const newDot: TrailDot = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          color,
          size: Math.floor(Math.random() * 5) + 3
        };
        setTrails(prev => [...prev.slice(-12), newDot]);
      }

      // Check if hovering clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = target.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer');
        setIsHoveringClickable(!!isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const interval = setInterval(() => {
      setTrails(prev => prev.slice(1));
    }, 90);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Trail Paint Dots */}
      {trails.map(dot => (
        <div
          key={dot.id}
          className="absolute rounded-full transition-all duration-300 opacity-60 filter blur-[0.3px]"
          style={{
            left: dot.x - dot.size / 2,
            top: dot.y - dot.size / 2,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            transform: 'scale(0.8)'
          }}
        />
      ))}

      {/* Paintbrush Tip Cursor */}
      <div
        className="absolute transition-transform duration-75 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-4px, -20px) ${isHoveringClickable ? 'scale(1.25) rotate(-15deg)' : 'rotate(0deg)'}`
        }}
      >
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="filter drop-shadow-md">
          {/* Wooden handle */}
          <path d="M 22 2 L 30 10 L 16 24 L 8 16 Z" fill="#D97706" />
          {/* Metal ferrule */}
          <path d="M 16 24 L 12 28 L 8 24 L 12 20 Z" fill="#94A3B8" />
          {/* Paint brush bristles with vibrant tip */}
          <path d="M 8 24 Q 2 28 3 31 Q 6 32 12 28 Z" fill="#FF2E93" />
          {/* Wet paint droplet */}
          <circle cx="3" cy="30" r="2" fill="#0DC2BB" className="animate-ping" />
        </svg>
      </div>
    </div>
  );
};
