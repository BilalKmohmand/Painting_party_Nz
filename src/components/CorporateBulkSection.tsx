import React from 'react';
import { motion } from 'motion/react';
import { Building2, Sparkles, Check, ArrowRight, ShieldCheck, HeartHandshake, Gift, Users } from 'lucide-react';
import { sound } from '../utils/audio';

interface CorporateBulkSectionProps {
  onRequestQuote: (audience: string, notes: string) => void;
}

export const CorporateBulkSection: React.FC<CorporateBulkSectionProps> = ({ onRequestQuote }) => {
  const audiences = [
    { title: 'Corporate Family Days & Galas', icon: '🏢', desc: 'Custom logo packaging & branded paint sets for 100 to 1,000+ employees and kids.' },
    { title: 'Shopping Malls & Retail Pop-ups', icon: '🛍️', desc: 'School holiday activations & mall traffic-driver craft stations.' },
    { title: 'Hotels & Resort Kids Clubs', icon: '🏨', desc: 'Premium branded activity kits for guest rooms and concierge activities.' },
    { title: 'Community Festivals & Expos', icon: '🎪', desc: 'High-volume takeaway art stations with quick-dry glazes.' },
    { title: 'Wedding Kids Tables', icon: '💍', desc: 'Elegant mess-free entertainment kits keeping young guests happily engaged during speeches.' },
    { title: 'Schools & Large Fundraisers', icon: '🎓', desc: 'High-margin creative fundraising packs with bulk educator discounts.' }
  ];

  return (
    <section id="corporate-bulk" className="py-16 md:py-24 bg-[#001F3F] text-white relative overflow-hidden">
      {/* Decorative Brand Gradient Glows in Dark Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF007F]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00C2CB]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#00C2CB] text-xs font-extrabold uppercase px-4 py-1.5 rounded-full mb-3 tracking-wider backdrop-blur-md border border-white/10">
            <Building2 className="w-4 h-4" />
            B2B & Enterprise Volume Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white">
            Corporate Family Days & <span className="text-[#FF8C00]">Bulk Event Kits</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed font-medium">
            Turn-key creative entertainment trusted by New Zealand enterprises, event agencies, shopping centres, and school festivals for hundreds of guests.
          </p>
        </div>

        {/* 6 Audience Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-[28px] bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#00C2CB]/60 hover:bg-white/15 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="text-3xl mb-3">{aud.icon}</div>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-[#00C2CB] transition-colors">
                  {aud.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed font-medium">
                  {aud.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between">
                <span className="text-[11px] font-bold text-white/60">Custom Branding Available</span>
                <button
                  onClick={() => onRequestQuote(aud.title, `Bulk order enquiry for ${aud.title}`)}
                  className="text-xs font-bold text-[#FF007F] group-hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Quote →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* B2B Customization Capabilities Bar */}
        <div className="mt-12 p-8 rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8">
              <h3 className="text-xl sm:text-2xl font-display font-black text-white">
                Everything Customised to Your Brand & Event
              </h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00C2CB] shrink-0" />
                  <span>Company Logo & Slogan Printed on Carry Packaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00C2CB] shrink-0" />
                  <span>Custom Matched Corporate Paint Colour Schemes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00C2CB] shrink-0" />
                  <span>Individual Mess-Free Child Wipe & Apron Sets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00C2CB] shrink-0" />
                  <span>On-site Hosted Event Facilitation (AKL, HLZ, TRG)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => {
                  sound.playChime();
                  onRequestQuote('Corporate Bulk Event', 'Requesting bulk corporate package quote with branding options.');
                }}
                className="w-full py-4 rounded-2xl bg-[#FF007F] text-white font-display font-black text-sm shadow-xl hover:bg-[#FF007F]/90 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request a Bulk Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-white/60">
                Responses within 24 business hours • NZ GST Receipts
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
