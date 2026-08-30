import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';
import { MapPin, Phone, Mail, Sparkles, Send, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

interface FooterProps {
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    sound.playChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#FF007F', '#FF8C00', '#00C2CB', '#8A2BE2']
    });
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#001F3F]/90 backdrop-blur-xl text-white pt-16 pb-12 border-t border-white/20 relative overflow-hidden">
      {/* Background soft glow accents */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#FF007F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00C2CB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Newsletter Signup VIP Banner */}
        <div className="p-8 sm:p-10 rounded-[32px] bg-white/10 border border-white/20 backdrop-blur-lg mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#00C2CB] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Join the Creative Whānau
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                Get 10% Off Your First Creative Order
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-200">
                Receive exclusive seasonal plaster pre-orders, DIY holiday party guides, and special educator discounts.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold text-center">
                  ✨ Ka rawe! Check your inbox for your 10% VIP code!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 text-xs bg-white/15 border border-white/25 rounded-full text-white placeholder-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#FF007F] focus:bg-white/25"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-[#FF007F] hover:bg-[#FF007F]/90 text-white font-extrabold text-xs shadow-lg transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <BrandLogo size="md" />
            <p className="mt-4 text-xs sm:text-sm text-slate-200 leading-relaxed max-w-sm">
              New Zealand's leading creative kids' activity and party brand. We make plaster painting magical, mess-free, and memorable for families, schools, and events nationwide.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#FF8C00] font-bold">
              <Heart className="w-4 h-4 fill-[#FF8C00]" />
              <span>More than just painting, it's memories that last!</span>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#00C2CB] mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-200">
              <li><a href="#birthday-packs" className="hover:text-white transition-colors">Birthday Party Packs</a></li>
              <li><a href="#daycare-schools" className="hover:text-white transition-colors">Daycare Monthly Boxes</a></li>
              <li><a href="#kit-builder" className="hover:text-white transition-colors">Custom Kit Builder</a></li>
              <li><a href="#shop-catalog" className="hover:text-white transition-colors">Seasonal Holiday Kits</a></li>
              <li><a href="#shop-catalog" className="hover:text-white transition-colors">Diwali & Cultural Kits</a></li>
              <li><a href="#corporate-bulk" className="hover:text-white transition-colors">Corporate & Galas</a></li>
            </ul>
          </div>

          {/* Services & Wholesale */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FF8C00] mb-4">
              Services & B2B
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-200">
              <li><a href="#hosted-parties" className="hover:text-white transition-colors">Hosted Mobile Parties</a></li>
              <li><a href="#wholesale" className="hover:text-white transition-colors">Retail Stockist Program</a></li>
              <li><a href="#corporate-bulk" className="hover:text-white transition-colors">Custom Logo Event Kits</a></li>
              <li><a href="#daycare-schools" className="hover:text-white transition-colors">ECE Center Invoicing</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onRequestQuote(); }} className="hover:text-white transition-colors">Request a Quote</a></li>
            </ul>
          </div>

          {/* Service Areas & Contact */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FF007F] mb-4">
              Contact & Regions
            </h4>
            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF007F] shrink-0 mt-0.5" />
                <span>Auckland · Hamilton · Tauranga + NZ Wide Courier</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00C2CB] shrink-0" />
                <a href="mailto:hello@paintparty.co.nz" className="hover:text-white">hello@paintparty.co.nz</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF8C00] shrink-0" />
                <span>0800 PAINT NZ</span>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold text-slate-200 border border-white/15">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  100% Kiwi Owned & Operated
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
          <div>
            © {new Date().getFullYear()} Paint Party NZ. All Rights Reserved. Create · Connect · Cherish.
          </div>
          <div className="flex items-center gap-6">
            <span>Non-Toxic Certified</span>
            <span>Zero Prep Guarantee</span>
            <span>GST Registered NZ</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
