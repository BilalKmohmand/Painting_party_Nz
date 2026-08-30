import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Check, ArrowRight, Star, HeartHandshake, Music, Clock } from 'lucide-react';
import { sound } from '../utils/audio';

interface HostedPartiesSectionProps {
  onEnquireHosted: () => void;
}

export const HostedPartiesSection: React.FC<HostedPartiesSectionProps> = ({ onEnquireHosted }) => {
  const partyFeatures = [
    'We bring everything: tables, table coverings, aprons, music, and art supplies',
    'Dedicated lively party host / art entertainer guides the entire session',
    'Step-by-step painting techniques, colour blending games, and party dance breaks',
    'Custom glitter glaze application and souvenir box packaging for every child',
    'Zero mess left behind — full setup and complete cleanup handled by our team'
  ];

  return (
    <section id="hosted-parties" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white/45 backdrop-blur-xl rounded-[36px] p-8 sm:p-12 lg:p-16 border border-white/60 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hosted Party Details */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/80 text-[#FF007F] text-xs font-extrabold uppercase px-4 py-1.5 rounded-full mb-4 tracking-wider shadow-2xs">
                <Sparkles className="w-4 h-4" />
                Mobile Art & Craft Parties — We Come To You!
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#001F3F] tracking-tight leading-tight">
                Want us to run the <span className="text-[#FF007F]">whole activity for you?</span>
              </h2>

              <p className="mt-4 text-base md:text-lg text-[#001F3F]/75 leading-relaxed font-medium">
                Sit back, relax with your cup of coffee or glass of wine, and let our enthusiastic Paint Party NZ hosts take full care of the entertainment!
              </p>

              {/* Service Locations Badge */}
              <div className="mt-6 inline-flex items-center gap-3 p-3.5 bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl shadow-xs">
                <MapPin className="w-5 h-5 text-[#FF007F] shrink-0" />
                <div>
                  <span className="text-xs font-bold text-[#001F3F]/50 uppercase tracking-wider block">Service Regions (Mobile)</span>
                  <span className="text-sm font-black text-[#001F3F]">
                    Auckland · Hamilton · Tauranga & Surrounds
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="mt-6 space-y-3">
                {partyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/20">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#001F3F]/85 font-semibold">{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => {
                    sound.playChime();
                    onEnquireHosted();
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FF007F] text-white font-display font-black text-sm sm:text-base shadow-xl hover:bg-[#FF007F]/90 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Explore Hosted Paint Parties</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold text-[#001F3F]/60">
                  Ideal for Ages 4 to 12+ • Homes, Parks & Venues
                </span>
              </div>
            </div>

            {/* Right Column: Hosted Party Photos & Testimonial Card */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="relative rounded-[28px] overflow-hidden shadow-xl h-72 border border-white/60">
                <img
                  src="https://images.unsplash.com/photo-1560421683-680b9c814e59?auto=format&fit=crop&w=800&q=80"
                  alt="Hosted Paint Party in action"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm font-bold">"Best birthday entertainment ever!"</p>
                  <p className="text-xs text-white/80">Elena & Mark • Mount Maunganui, Tauranga</p>
                </div>
              </div>

              {/* Inclusions summary stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 text-center shadow-xs">
                  <Clock className="w-5 h-5 text-[#FF007F] mx-auto mb-1" />
                  <span className="text-xs text-[#001F3F]/60 font-medium block">Party Duration</span>
                  <span className="text-sm font-black text-[#001F3F]">60 - 90 Minutes</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 text-center shadow-xs">
                  <Music className="w-5 h-5 text-[#00C2CB] mx-auto mb-1" />
                  <span className="text-xs text-[#001F3F]/60 font-medium block">Included Extra</span>
                  <span className="text-sm font-black text-[#001F3F]">Kids Party Music</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
