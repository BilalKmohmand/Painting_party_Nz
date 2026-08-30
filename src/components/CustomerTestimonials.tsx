import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/products';
import { Star, Quote, Heart, MapPin, Sparkles } from 'lucide-react';

export const CustomerTestimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white/60 text-[#FF007F] text-xs font-extrabold uppercase px-4 py-1.5 rounded-full mb-3 tracking-wider shadow-2xs">
            <Heart className="w-4 h-4" />
            Loved by Parents, Teachers & Event Planners
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-[#001F3F] tracking-tight">
            Real Stories & <span className="text-[#FF007F]">Cherished Memories</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#001F3F]/70 font-medium">
            Hear from families, early learning centres, and businesses across Auckland, Hamilton, and Tauranga.
          </p>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/45 backdrop-blur-lg rounded-[32px] p-8 shadow-xl border border-white/60 flex flex-col justify-between hover:bg-white/60 hover:shadow-2xl transition-all"
            >
              <div>
                {/* Top Rating & Highlight */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 bg-white/70 text-[#FF007F] rounded-full border border-white/80 shadow-2xs">
                    {t.partyType}
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#001F3F] mb-3 italic">
                  {t.highlight}
                </h4>

                <p className="text-sm text-[#001F3F]/80 leading-relaxed font-medium">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-5 border-t border-white/50 flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#00C2CB] shadow-xs"
                />
                <div>
                  <h5 className="text-sm font-bold text-[#001F3F]">{t.name}</h5>
                  <p className="text-xs text-[#001F3F]/60 font-medium">{t.role}</p>
                  <div className="flex items-center gap-1 text-[11px] text-[#00C2CB] font-bold mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
