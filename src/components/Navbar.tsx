import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { sound } from '../utils/audio';
import { ShoppingBag, Volume2, VolumeX, Sparkles, Menu, X, Send, Phone, Heart } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onRequestQuote: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onRequestQuote,
  activeSection
}) => {
  const [isMuted, setIsMuted] = useState(sound.getIsMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop Kits', href: '#shop-categories' },
    { label: 'Kit Builder', href: '#kit-builder' },
    { label: 'Birthday Packs', href: '#birthday-packs' },
    { label: 'Daycare Boxes', href: '#daycare-schools' },
    { label: 'Corporate & Bulk', href: '#corporate-bulk' },
    { label: 'Wholesale', href: '#wholesale' },
    { label: 'Hosted Parties', href: '#hosted-parties' }
  ];

  const toggleSound = () => {
    const nextState = !isMuted;
    sound.setMuted(nextState);
    setIsMuted(nextState);
    if (!nextState) {
      sound.playPop();
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Announcement Bar */}
      <div className="bg-[#111936] text-white text-[11px] sm:text-xs py-2 px-4 text-center font-bold tracking-wide flex items-center justify-center gap-3 overflow-hidden">
        <span className="hidden sm:inline text-[#FF2E93]">✨ NEW ZEALAND CRAFT KITS</span>
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#0DC2BB] animate-pulse" />
          <span>Everything Included · Zero Mess Guarantee · NZ Wide Courier Delivery</span>
        </span>
        <span className="hidden md:inline text-amber-300">★ 5.0 Rating</span>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-[#001F3F]/5 py-2.5 border-b border-white/60'
            : 'bg-white/50 backdrop-blur-md py-3.5 border-b border-white/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <a
            href="#"
            onClick={() => sound.playPop()}
            className="flex items-center gap-3 group"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => sound.playPop()}
                className="text-xs font-extrabold uppercase tracking-wider text-[#001F3F] hover:text-[#FF007F] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF007F] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              title={isMuted ? 'Turn on sound effects' : 'Mute sound effects'}
              className="p-2.5 rounded-full text-[#001F3F]/70 hover:text-[#001F3F] bg-white/60 hover:bg-white/90 backdrop-blur-md transition-all border border-white/60 shadow-2xs"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-[#00C2CB]" />}
            </button>

            {/* Quick Quote Request CTA */}
            <button
              onClick={() => {
                sound.playChime();
                onRequestQuote();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/70 hover:bg-white text-[#001F3F] text-xs font-black transition-all border border-white/80 shadow-xs hover:shadow-md"
            >
              <Send className="w-3.5 h-3.5 text-[#FF8C00]" />
              <span>Get Quote</span>
            </button>

            {/* Cart Button with Count Badge */}
            <button
              onClick={() => {
                sound.playPop();
                onOpenCart();
              }}
              className="relative p-2.5 sm:px-5 sm:py-2.5 rounded-full bg-[#001F3F] hover:bg-[#FF007F] text-white text-xs font-extrabold shadow-lg shadow-[#001F3F]/20 transition-all flex items-center gap-2 hover:scale-105 active:scale-95 border border-white/20"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline font-display">Cart</span>
              {cartCount > 0 && (
                <span className="bg-[#FF007F] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center -ml-1 animate-pulse border border-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 text-[#001F3F] hover:bg-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/85 backdrop-blur-2xl border-b border-white/80 px-4 py-4 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => {
                  sound.playPop();
                  setMobileMenuOpen(false);
                }}
                className="block px-4 py-2.5 rounded-2xl text-sm font-extrabold text-[#001F3F] hover:bg-[#FF007F]/10 hover:text-[#FF007F] transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/40 flex gap-2">
              <button
                onClick={() => {
                  onRequestQuote();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-2xl bg-white/80 text-[#001F3F] font-bold text-xs flex items-center justify-center gap-1.5 border border-white/80 shadow-xs"
              >
                <Send className="w-3.5 h-3.5 text-[#FF8C00]" />
                Request Custom Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
