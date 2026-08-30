import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Cake, School, Gift, Heart, Sun, Building2 } from 'lucide-react';
import { sound } from '../utils/audio';

interface CategoryGridProps {
  onSelectCategory: (categoryKey: string) => void;
}

const CATEGORIES = [
  {
    key: 'birthday',
    title: 'Birthday Party Kits',
    subtitle: 'Unicorns, Dinosaurs, Butterflies, Cars, Crowns & Bears',
    description: 'The #1 stress-free party activity. Every child paints their own sculpture and takes it home in a gift box with custom labels.',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80',
    icon: Cake,
    badge: 'Most Popular',
    color: '#FF2E93',
    hoverGlow: 'hover:shadow-[#FF2E93]/20'
  },
  {
    key: 'daycare',
    title: 'Daycare & School Packs',
    subtitle: 'Classroom Bulk Sets for 10, 20, 30 & 50+ Children',
    description: 'Sensory-rich fine motor craft activities for early learning centres and holiday programmes. Zero teacher prep time.',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
    icon: School,
    badge: 'ECE Approved',
    color: '#0DC2BB',
    hoverGlow: 'hover:shadow-[#0DC2BB]/20'
  },
  {
    key: 'seasonal',
    title: 'Seasonal Collections',
    subtitle: 'Christmas, Easter, Halloween, Mother’s & Father’s Day',
    description: 'Limited edition festive keepsakes, ornaments, and holiday workshop craft sets to celebrate the moments that matter.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    icon: Gift,
    badge: 'Limited Edition',
    color: '#FF7A00',
    hoverGlow: 'hover:shadow-[#FF7A00]/20'
  },
  {
    key: 'celebration',
    title: 'Baby Shower & Milestone Kits',
    subtitle: 'Teddy Bears, Clouds, Moons, Stars & Nursery Keepsakes',
    description: 'A wholesome, heartwarming activity for baby showers, gender reveals, and 1st birthday celebrations.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    icon: Heart,
    badge: 'Heartwarming',
    color: '#8E44F3',
    hoverGlow: 'hover:shadow-[#8E44F3]/20'
  },
  {
    key: 'cultural',
    title: 'Cultural & Festival Collection',
    subtitle: 'Diya Lamps, Lotus Blossoms, Mandalas & Heritage Motifs',
    description: 'Celebrate Diwali, Matariki, and cultural festivities with authentic, intricate plaster casting designs.',
    image: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=600&q=80',
    icon: Sun,
    badge: 'Heritage & Light',
    color: '#F59E0B',
    hoverGlow: 'hover:shadow-[#F59E0B]/20'
  },
  {
    key: 'corporate',
    title: 'Corporate & Bulk Event Kits',
    subtitle: 'Custom-Branded Kits for Family Days, Expos & Retail',
    description: 'Scalable creative entertainment for companies, shopping centres, hotels, and festivals. Custom logo printing included.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    icon: Building2,
    badge: 'Custom Logo Branded',
    color: '#111936',
    hoverGlow: 'hover:shadow-[#111936]/20'
  }
];

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section id="shop-categories" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#FF007F] mb-2 bg-white/50 backdrop-blur-md border border-white/60 px-4 py-1.5 rounded-full shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              Ready-To-Paint Collections
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-[#001F3F] tracking-tight">
              Explore Our <span className="text-[#FF007F]">Creative Categories</span>
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-[#001F3F]/70 max-w-md text-sm md:text-base font-medium">
            From single craft boxes to 500+ guest corporate galas, every kit arrives 100% complete with zero prep needed.
          </p>
        </div>

        {/* 6 Category Cards Grid in Frosted Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => {
                  sound.playPop();
                  onSelectCategory(cat.key);
                }}
                className={`group cursor-pointer rounded-[32px] bg-white/40 backdrop-blur-lg border border-white/60 overflow-hidden shadow-xl hover:bg-white/65 hover:border-white/90 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col`}
              >
                {/* Card Image with Gradient Overlay */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/80 via-[#001F3F]/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span 
                      className="text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full text-white shadow-lg backdrop-blur-md flex items-center gap-1.5 border border-white/30"
                      style={{ backgroundColor: cat.color }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {cat.badge}
                    </span>
                  </div>

                  {/* Subtitle tag */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-xs font-semibold text-white/95 drop-shadow-xs line-clamp-1">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-display font-black text-[#001F3F] group-hover:text-[#FF007F] transition-colors flex items-center justify-between">
                      {cat.title}
                      <ArrowRight className="w-5 h-5 text-[#001F3F]/40 group-hover:text-[#FF007F] group-hover:translate-x-1.5 transition-all" />
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#001F3F]/70 leading-relaxed font-medium">
                      {cat.description}
                    </p>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="mt-5 pt-4 border-t border-white/50 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#001F3F]/50 uppercase tracking-wider">
                      From $— • Custom Options
                    </span>
                    <span className="text-xs font-black text-[#FF007F] flex items-center gap-1 group-hover:underline">
                      Shop Now →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
