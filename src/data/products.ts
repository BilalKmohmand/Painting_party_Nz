import { Product, BirthdayPackage, DaycareTheme, Testimonial, PlasterOption } from '../types';

export const PLASTER_DESIGNS: PlasterOption[] = [
  {
    id: 'unicorn-magic',
    name: 'Magical Unicorn Plaster Figure',
    category: 'fantasy',
    theme: 'Unicorns & Magic',
    icon: 'Sparkles',
    description: 'Enchanting 3D unicorn with flowing mane, horn, and floral crest.',
    svgShape: 'unicorn',
    recommendedColors: ['#FF2E93', '#8E44F3', '#0DC2BB', '#FFD700', '#FFA07A', '#FFFFFF']
  },
  {
    id: 'trex-dino',
    name: 'Roaring T-Rex Dino Figure',
    category: 'jurassic',
    theme: 'Dinosaurs & Safari',
    icon: 'Zap',
    description: 'Sculpted friendly Tyrannosaurus rex with detailed scales and toothy smile.',
    svgShape: 'dino',
    recommendedColors: ['#22C55E', '#FF7A00', '#0DC2BB', '#EAB308', '#8B5CF6', '#111936']
  },
  {
    id: 'monarch-butterfly',
    name: 'Fluttering Butterfly Keepsake',
    category: 'nature',
    theme: 'Butterflies & Garden',
    icon: 'Heart',
    description: 'Delicate dual-winged butterfly with relief patterning ready for vibrant blending.',
    svgShape: 'butterfly',
    recommendedColors: ['#FF2E93', '#FF7A00', '#0DC2BB', '#8E44F3', '#38BDF8', '#FFFFFF']
  },
  {
    id: 'cuddly-teddy',
    name: 'Classic Cuddly Teddy Bear',
    category: 'celebration',
    theme: 'Teddy Bears & Baby Shower',
    icon: 'Smile',
    description: 'Charming seated teddy bear with textured fur and sweet bow tie.',
    svgShape: 'bear',
    recommendedColors: ['#B45309', '#FDE047', '#FF2E93', '#38BDF8', '#0DC2BB', '#FFFFFF']
  },
  {
    id: 'space-rocket',
    name: 'Blast-Off Rocket Ship',
    category: 'adventure',
    theme: 'Space & Exploration',
    icon: 'Rocket',
    description: 'Sleek aerodynamic rocket with porthole windows and booster flames.',
    svgShape: 'rocket',
    recommendedColors: ['#0DC2BB', '#FF7A00', '#FF2E93', '#8E44F3', '#FBBF24', '#111936']
  },
  {
    id: 'sacred-lotus',
    name: 'Sacred Lotus Blossom Plaque',
    category: 'cultural',
    theme: 'Cultural & Festivals',
    icon: 'Sun',
    description: 'Multi-petal blooming lotus mandala symbol of peace, beauty and celebration.',
    svgShape: 'lotus',
    recommendedColors: ['#FF2E93', '#FF7A00', '#8E44F3', '#0DC2BB', '#FDE047', '#FFFFFF']
  },
  {
    id: 'royal-crown',
    name: 'Royal Prince & Princess Crown',
    category: 'royalty',
    theme: 'Crowns & Castles',
    icon: 'Crown',
    description: 'Grand royal crown with jeweled reliefs and ornamental filigree.',
    svgShape: 'crown',
    recommendedColors: ['#F59E0B', '#8E44F3', '#FF2E93', '#0DC2BB', '#3B82F6', '#FFFFFF']
  },
  {
    id: 'speed-car',
    name: 'Turbo Racing Sports Car',
    category: 'vehicles',
    theme: 'Race Cars & Wheels',
    icon: 'Car',
    description: 'High-speed track racer with spoiler, headlights, and racing number roundel.',
    svgShape: 'car',
    recommendedColors: ['#EF4444', '#0DC2BB', '#FF7A00', '#111936', '#F59E0B', '#FFFFFF']
  },
  {
    id: 'festive-diya',
    name: 'Traditional Festive Diya Lamp',
    category: 'cultural',
    theme: 'Diwali & Festival of Lights',
    icon: 'Flame',
    description: 'Ornamental clay-style oil lamp with radiant flame glow motif.',
    svgShape: 'diya',
    recommendedColors: ['#FF7A00', '#F59E0B', '#FF2E93', '#8E44F3', '#0DC2BB', '#FFFFFF']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-birthday-mega',
    slug: 'birthday-party-paint-kit-pack',
    title: 'The Ultimate Birthday Paint Party Kit Pack',
    category: 'birthday',
    categoryLabel: 'Birthday Party Kits',
    tagline: 'The #1 Stress-Free Party Activity & Take-Home Keepsake Favor',
    shortDesc: 'Complete paint party boxes featuring handcrafted plaster figures, non-toxic vibrant paints, brushes, mixing trays, aprons, and custom personalized birthday thank-you stickers.',
    fullDesc: 'Transform your child’s birthday party into an unforgettable creative festival! Every child receives their own premium gypsum plaster sculpture to paint, personalise, and proudly take home in their individual gift box. Zero prep required for parents — open the box and party!',
    heroImage: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560421683-680b9c814e59?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=80'
    ],
    priceDisplay: 'From $— (Tiered Bulk Rates)',
    rating: 5.0,
    reviewCount: 148,
    featured: true,
    bestseller: true,
    ageRange: 'Ages 3 to 12+ (Fun for teens & adults too!)',
    childrenCovered: '1 to 50+ kids (Choose pack size)',
    estimatedPrepTime: '2 - 3 business days + nationwide dispatch',
    plasterDesigns: PLASTER_DESIGNS.filter(d => ['unicorn-magic', 'trex-dino', 'monarch-butterfly', 'speed-car', 'royal-crown', 'cuddly-teddy'].includes(d.id)),
    paintPalettes: [
      {
        id: 'rainbow-pop',
        name: 'Rainbow Pop (Pink, Orange, Teal, Purple, Yellow, White)',
        colors: ['#FF2E93', '#FF7A00', '#0DC2BB', '#8E44F3', '#FBBF24', '#FFFFFF']
      },
      {
        id: 'jurassic-safari',
        name: 'Jurassic Jungle (Forest Green, Ochre, Lime, Aqua, Mud Brown, Black)',
        colors: ['#15803D', '#EAB308', '#84CC16', '#06B6D4', '#78350F', '#111936']
      },
      {
        id: 'pastel-dream',
        name: 'Pastel Dream (Soft Lilac, Bubblegum, Mint, Peach, Buttercup, Pearl)',
        colors: ['#C084FC', '#F472B6', '#6EE7B7', '#FDBA74', '#FEF08A', '#F8FAFC']
      }
    ],
    whatsIncluded: [
      '1x Premium kiln-dried Plaster of Paris figure per child',
      '6x Pots of ultra-vibrant, non-toxic washable acrylic paints',
      '2x Wooden artist brushes (1x detail brush + 1x broad wash brush)',
      '1x Paint mixing palette tray per child',
      '1x Sparkle gloss glaze topper pot for instant shine',
      '1x Disposable protective craft bib/apron',
      '1x Custom printed thank-you keepsake label with birthday child’s name & age',
      '1x Ready-to-gift carry packaging box with handle'
    ],
    safetyInfo: [
      '100% Non-Toxic, ASTM D-4236 and EN-71 child-safe certified water-based paints',
      'Natural, dust-free kiln cured New Zealand grade casting plaster',
      'Washes easily from skin and most standard fabrics with warm soapy water',
      'Adult supervision recommended for artists under 4 years of age'
    ],
    deliveryInfo: 'Fast dispatch from our Auckland studio. Free nationwide courier shipping for qualifying party orders over $— value.',
    bulkTiers: [
      { quantityLabel: 'Mini Party Pack', range: '10 Kits', discountNote: 'Standard Party Rate' },
      { quantityLabel: 'Standard Party Pack', range: '20 Kits', discountNote: 'Includes FREE custom labels', popular: true },
      { quantityLabel: 'Big Celebration Pack', range: '30 - 40 Kits', discountNote: 'Best value party bundle' },
      { quantityLabel: 'Mega Event & School Bulk', range: '50+ Kits', discountNote: 'Exclusive wholesale volume tier' }
    ]
  },
  {
    id: 'prod-daycare-bulk',
    slug: 'daycare-and-early-learning-craft-pack',
    title: 'Daycare & Kindergarten Creative Activity Bulk Pack',
    category: 'daycare',
    categoryLabel: 'Daycare & School Packs',
    tagline: 'Curriculum-Aligned Fine Motor Sensory Craft Experience for Classrooms',
    shortDesc: 'Bulk boxes built specifically for ECE teachers, preschools, kindys, and holiday programmes. Packed in classroom-friendly groupings of 10, 20, 30, or 50+ children.',
    fullDesc: 'Designed hand-in-hand with early childhood educators to foster tactile development, color theory, and pride of accomplishment. Every pack arrives pre-sorted by station so teachers spend zero time slicing, pouring, or preparing materials.',
    heroImage: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80'
    ],
    priceDisplay: 'From $— (Tiered ECE Educator Rates)',
    rating: 4.9,
    reviewCount: 92,
    featured: true,
    bestseller: false,
    ageRange: 'ECE Ages 2.5 to 6 years (Preschool & Kindy)',
    childrenCovered: 'Packs of 10, 20, 30, 50, 100+ children',
    estimatedPrepTime: 'In-stock for immediate educator dispatch (1-2 days)',
    plasterDesigns: PLASTER_DESIGNS.filter(d => ['trex-dino', 'monarch-butterfly', 'cuddly-teddy', 'unicorn-magic', 'space-rocket'].includes(d.id)),
    paintPalettes: [
      {
        id: 'classroom-primary',
        name: 'Classroom Sensory Primary & Secondary (6 Large Washable Pots)',
        colors: ['#EF4444', '#3B82F6', '#F59E0B', '#10B981', '#8B5CF6', '#FFFFFF']
      }
    ],
    whatsIncluded: [
      'Bulk plaster figures individually bubbled & classroom-boxed',
      'Chunky ergonomic easy-grip brushes for developing toddler grips',
      'Shared group paint pods + individual palette trays',
      'Teacher activity prompt card & developmental learning guide',
      'Take-home compostable presentation bags with child name tags'
    ],
    safetyInfo: [
      'Ultra-washable hypoallergenic paint formula',
      'Shatter-resistant smooth molded plaster with rounded safety contours',
      'NZ ECE safety compliant documentation available on request'
    ],
    deliveryInfo: 'Direct courier delivery to daycare & school centres nationwide. Invoice & purchase order payments supported.',
    bulkTiers: [
      { quantityLabel: 'Starter Classroom Box', range: '10 Children', discountNote: 'Single Room Pack' },
      { quantityLabel: 'Full Centre Pack', range: '30 Children', discountNote: 'Multi-Room Value', popular: true },
      { quantityLabel: 'Multi-Branch ECE Bundle', range: '50 - 100+ Children', discountNote: 'Max Educator Discount' }
    ]
  },
  {
    id: 'prod-seasonal-collection',
    slug: 'seasonal-holiday-festive-paint-kits',
    title: 'Seasonal & Holiday Special Edition Collections',
    category: 'seasonal',
    categoryLabel: 'Seasonal Collections',
    tagline: 'Christmas Ornaments, Easter Bunnies, Halloween Spooks & Mother’s Day Keepsakes',
    shortDesc: 'Limited edition festive figures tailored for major NZ calendar celebrations. Perfect for holiday workshops, community gatherings, and heartfelt gifts.',
    fullDesc: 'Celebrate holidays with hands-on joy! Whether it’s Christmas tree hanging plaster ornaments, Easter egg hunt keepsakes, spooky Halloween treat crafts, or personalised Mother’s and Father’s Day treasures, these kits create family memories to cherish forever.',
    heroImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1000&q=80'
    ],
    priceDisplay: 'From $— (Single or Event Bundles)',
    rating: 4.9,
    reviewCount: 64,
    featured: false,
    bestseller: false,
    ageRange: 'All Ages (Kids, Families, Grandparents)',
    childrenCovered: 'Single kits up to 200+ event sets',
    estimatedPrepTime: '2 - 3 business days',
    plasterDesigns: PLASTER_DESIGNS,
    paintPalettes: [
      {
        id: 'festive-holiday',
        name: 'Festive Cheer (Crimson, Pine Green, Gold, Silver, Snow White, Berry)',
        colors: ['#DC2626', '#15803D', '#EAB308', '#94A3B8', '#FFFFFF', '#991B1B']
      },
      {
        id: 'spring-easter',
        name: 'Springtime Pastels (Lilac, Mint, Peach, Lemon, Sky, Cream)',
        colors: ['#C084FC', '#6EE7B7', '#FDBA74', '#FEF08A', '#38BDF8', '#FFFBEB']
      }
    ],
    whatsIncluded: [
      'Holiday themed plaster casting with hanging loop or display base',
      'Festive glitter gel accents & metallic paint toppers',
      '2x Quality brushes & mixing dish',
      'Commemorative dated gift tag / year keepsake stamp'
    ],
    safetyInfo: [
      '100% Non-toxic certified',
      'Smooth edges and child-safe accessories'
    ],
    deliveryInfo: 'Nationwide dispatch with pre-order scheduling for holiday cut-off dates.',
    bulkTiers: [
      { quantityLabel: 'Family Holiday Set', range: '1 - 5 Kits', discountNote: 'Home Festive Fun' },
      { quantityLabel: 'Holiday Workshop Pack', range: '20+ Kits', discountNote: 'Community & Church groups' }
    ]
  },
  {
    id: 'prod-baby-shower',
    slug: 'baby-shower-milestone-celebration-kits',
    title: 'Baby Shower & Milestone Keepsake Paint Kits',
    category: 'celebration',
    categoryLabel: 'Baby Shower & Celebrations',
    tagline: 'Delightful Interactive Guest Activity & Cherished Nursery Décor Keepsake',
    shortDesc: 'A wonderful, wholesome activity for baby showers, gender reveals, 1st birthdays, and naming ceremonies. Guests paint adorable nursery figures for the baby’s bedroom.',
    fullDesc: 'Ditch the awkward party games and give your guests a relaxing, heartwarming experience. Friends and family paint mini plaster clouds, stars, moons, teddy bears, and baby bottles, writing sweet wishes on the underside that become forever nursery keepsakes.',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80'
    ],
    priceDisplay: 'From $— (Custom Celebration Sets)',
    rating: 5.0,
    reviewCount: 38,
    featured: false,
    bestseller: false,
    ageRange: 'Adults & older siblings at showers, toddler 1st birthdays',
    childrenCovered: '10 to 40+ guests',
    estimatedPrepTime: '2 - 3 business days',
    plasterDesigns: PLASTER_DESIGNS.filter(d => ['cuddly-teddy', 'monarch-butterfly', 'unicorn-magic'].includes(d.id)),
    paintPalettes: [
      {
        id: 'nursery-calm',
        name: 'Nursery Serenity (Sage Green, Blush Pink, Soft Ochre, Sky, White, Gold)',
        colors: ['#84CC16', '#F472B6', '#EAB308', '#38BDF8', '#FFFFFF', '#D97706']
      }
    ],
    whatsIncluded: [
      'Assorted nursery plaster sculptures (Bears, Moons, Clouds, Stars)',
      'Elegant matte & satin pastel paint sets with metallic accents',
      'Permanent fine-tip gold wish pens for underside messages',
      'Decorative table display sign with guest instructions'
    ],
    safetyInfo: ['Safe, non-toxic, odorless water-based paint formulas'],
    deliveryInfo: 'Express courier across NZ with scheduled delivery for your shower date.',
    bulkTiers: [
      { quantityLabel: 'Intimate Gathering', range: '12 Guests', discountNote: 'Includes Table Sign' },
      { quantityLabel: 'Grand Shower', range: '24 - 36 Guests', discountNote: 'Includes Gold Wish Pens', popular: true }
    ]
  },
  {
    id: 'prod-cultural-festival',
    slug: 'cultural-festival-diya-mandala-kits',
    title: 'Cultural & Festival Heritage Art Collection',
    category: 'cultural',
    categoryLabel: 'Cultural & Festival Collection',
    tagline: 'Celebrate Diwali, Matariki, Lunar New Year & Cultural Days with Art',
    shortDesc: 'Richly detailed Diya lamps, sacred lotus flowers, mandalas, and cultural icons celebrating diversity, heritage, and joy.',
    fullDesc: 'Bring cultural celebrations to life in homes, schools, community centres, and temples across Aotearoa. Hand-cast plaster Diyas and lotus mandalas that can hold tealights or serve as stunning cultural decor.',
    heroImage: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560421683-680b9c814e59?auto=format&fit=crop&w=1000&q=80'
    ],
    priceDisplay: 'From $— (Tiered Group Packages)',
    rating: 5.0,
    reviewCount: 47,
    featured: false,
    bestseller: false,
    ageRange: 'All Ages (Preschool, School, Adults)',
    childrenCovered: 'Packs of 10 to 500+ attendees',
    estimatedPrepTime: '2 - 4 business days',
    plasterDesigns: PLASTER_DESIGNS.filter(d => ['festive-diya', 'sacred-lotus'].includes(d.id)),
    paintPalettes: [
      {
        id: 'festival-vibrant',
        name: 'Vibrant Festival (Marigold, Magenta, Royal Blue, Turquoise, Emerald, Gold)',
        colors: ['#FF7A00', '#FF2E93', '#1E40AF', '#0DC2BB', '#059669', '#FBBF24']
      }
    ],
    whatsIncluded: [
      'Detailed Plaster Diya Lamps or Mandala Plaques',
      'Rich pigmented paints + gem sticker embellishments',
      'LED flameless battery tealight per Diya kit',
      'Brushes, palettes & cultural celebration context card'
    ],
    safetyInfo: ['Non-toxic, safe for home tealight use with LED flameless candles'],
    deliveryInfo: 'Priority dispatch for festival seasons.',
    bulkTiers: [
      { quantityLabel: 'Community Box', range: '20 Kits', discountNote: 'Includes LED Tealights' },
      { quantityLabel: 'School / Mandir Pack', range: '50 - 100+ Kits', discountNote: 'Wholesale Festival Rate', popular: true }
    ]
  },
  {
    id: 'prod-corporate-events',
    slug: 'corporate-family-days-and-expo-kits',
    title: 'Corporate Family Days, Expos & Custom Branded Activity Kits',
    category: 'corporate',
    categoryLabel: 'Corporate & Event Kits',
    tagline: 'Turn Company Family Days, Festivals & Brand Activations into Memorable Experiences',
    shortDesc: 'Turn-key creative entertainment for corporate family days, mall activations, holiday pop-ups, hotel kids clubs, and restaurant family zones with custom branding.',
    fullDesc: 'Trusted by New Zealand businesses, retail malls, and event agencies to deliver engaging, screen-free entertainment for hundreds of children. Includes custom branded packaging, company logo stickers, tailored color palettes matching your corporate identity, and individual mess-free carry bags.',
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=80'
    ],
    priceDisplay: 'From $— (Custom Volume Quotes)',
    rating: 5.0,
    reviewCount: 52,
    featured: true,
    bestseller: false,
    ageRange: 'Kids, Families & Employees of all ages',
    childrenCovered: '50 to 1,000+ attendees',
    estimatedPrepTime: 'Custom production schedule (Rush orders available)',
    plasterDesigns: PLASTER_DESIGNS,
    paintPalettes: [
      {
        id: 'brand-custom',
        name: 'Brand Custom Match (Tailored to your corporate brand palette)',
        colors: ['#0DC2BB', '#111936', '#FF7A00', '#FF2E93', '#8E44F3', '#FFFFFF']
      }
    ],
    whatsIncluded: [
      'Individually boxed custom plaster kits',
      'Custom branded full-color logo sleeves / labels with your company event slogan',
      'Mess-free individual apron & wipe kit per child',
      'Optional on-site event crew / hosted party coordination in Auckland, Hamilton & Tauranga',
      'Wholesale bulk pallet or express venue dispatch'
    ],
    safetyInfo: [
      'Public liability insurance certified materials',
      'Zero volatile organic compounds (VOC-free), non-staining water wash formula'
    ],
    deliveryInfo: 'Direct to venue / office delivery with dedicated account manager.',
    bulkTiers: [
      { quantityLabel: 'Tier 1 Event', range: '50 - 100 Kits', discountNote: 'Includes Logo Stickers' },
      { quantityLabel: 'Tier 2 Mega Festival', range: '100 - 300 Kits', discountNote: 'Custom Brand Colors', popular: true },
      { quantityLabel: 'Enterprise & Retail', range: '500+ Kits', discountNote: 'Custom Mold & Volume Tier' }
    ]
  }
];

export const BIRTHDAY_PACKAGES: BirthdayPackage[] = [
  {
    id: 'mini-party-pack',
    name: 'Mini Party Pack',
    badge: 'Best for Intimate Gatherings',
    kitCount: '10 Ready-to-Paint Kits',
    description: 'Perfect for cozy home birthday parties, playdates, and small family celebrations with everything needed to get creating right out of the box.',
    recommendedFor: '8 - 10 little artists',
    features: [
      '10x Hand-cast plaster figures of your choice',
      '10x Complete 6-color vibrant washable paint strips',
      '20x Wooden artist brushes (fine & broad per child)',
      '10x Mixing palette trays & glitter glaze toppers',
      '10x Ready-to-gift carry packaging boxes',
      'Quick step-by-step party host guide'
    ],
    pricePlaceholder: 'From $— (Enquire for Quote)',
    colorScheme: 'pink'
  },
  {
    id: 'party-pack-popular',
    name: 'Party Pack',
    badge: 'Most Popular Choice',
    kitCount: '20 Personalised Kits',
    description: 'Our signature package loved by parents across Auckland, Hamilton, and Tauranga. Includes custom printed birthday stickers for every single child.',
    recommendedFor: '15 - 20 children',
    popular: true,
    features: [
      '20x Plaster figures (mix & match themes available)',
      '20x Premium 6-color paint palettes & brushes',
      '20x Custom printed label with Birthday Child’s Name & Age',
      '20x Individual protective craft aprons',
      '20x Glitter sparkle pots & take-home gift boxes',
      'Free birthday child keepsake extra master figure',
      'Priority express courier dispatch'
    ],
    pricePlaceholder: 'From $— (Enquire for Quote)',
    colorScheme: 'teal'
  },
  {
    id: 'big-celebration-pack',
    name: 'Big Celebration Pack',
    badge: 'Ultimate Party Experience',
    kitCount: '30 – 40+ Deluxe Kits',
    description: 'The mega celebration package for large hall parties, joint birthdays, and school-wide bashes. Loaded with deluxe themed extras.',
    recommendedFor: '25 - 40+ children',
    features: [
      '30 to 40x Plaster sculptures across multiple chosen themes',
      'Full themed gift packaging with custom ribbon accents',
      'Customized thank-you labels with photo/avatar option',
      'Deluxe 8-color paint sets with metallic gold/silver upgrades',
      'Individual aprons, palettes, brushes & glitter finishes',
      'Table runner craft sheets included for easy 2-minute cleanup',
      'Option to add a dedicated hosted entertainer in service regions'
    ],
    pricePlaceholder: 'From $— (Enquire for Quote)',
    colorScheme: 'purple'
  }
];

export const DAYCARE_THEMES: DaycareTheme[] = [
  {
    month: 'January / Summer',
    themeName: 'Under the Sea & Splash',
    description: 'Whales, dolphins, starfish and shells exploring marine biology and ocean currents.',
    plasterShapes: ['Dolphin', 'Sea Turtle', 'Starfish', 'Seahorse'],
    learningFocus: 'Marine ecosystems & tactile texture recognition',
    icon: 'Fish'
  },
  {
    month: 'February / Valentine',
    themeName: 'Kindness, Hearts & Friendship',
    description: 'Heart plaques, friendship doves, and cuddle bears fostering empathy and emotional sharing.',
    plasterShapes: ['Friendship Heart', 'Cuddle Bear', 'Dove'],
    learningFocus: 'Social-emotional learning & interpersonal bonding',
    icon: 'Heart'
  },
  {
    month: 'March / Autumn',
    themeName: 'Autumn Leaves & Forest Friends',
    description: 'Hedgehogs, acorns, owls, and maple leaf reliefs discovering seasonal transitions.',
    plasterShapes: ['Baby Owl', 'Hedgehog', 'Acorn Leaf', 'Mushroom'],
    learningFocus: 'Nature observation & earthy color mixing',
    icon: 'Leaf'
  },
  {
    month: 'April / Easter',
    themeName: 'Easter Bunnies & Spring Eggs',
    description: 'Fluffy bunnies, spring chicks, and patterned Easter eggs with pastel palettes.',
    plasterShapes: ['Hop Bunny', 'Spring Chick', 'Patterned Egg'],
    learningFocus: 'Pattern repetition & fine motor brush control',
    icon: 'Egg'
  },
  {
    month: 'May / Mother’s Day',
    themeName: 'Blooming Flowers & Love Keepsakes',
    description: 'Floral bouquets, mom badges, and butterfly plaques crafted as gifts for whānau.',
    plasterShapes: ['Flower Pot', 'Monarch Butterfly', 'Heart Crest'],
    learningFocus: 'Gift-giving pride & gratitude expression',
    icon: 'Flower'
  },
  {
    month: 'June / Matariki',
    themeName: 'Seven Stars of Matariki & Light',
    description: 'Star clusters, koru spiral motifs, and whetū pendants celebrating the Māori New Year.',
    plasterShapes: ['Matariki Star', 'Koru Plaque', 'Kōwhai Blossom'],
    learningFocus: 'Aotearoa cultural heritage & night sky discovery',
    icon: 'Sparkles'
  },
  {
    month: 'July / Space',
    themeName: 'Cosmic Rockets & Alien Worlds',
    description: 'Space shuttles, astronaut helmets, planets, and moons inspiring STEM curiosity.',
    plasterShapes: ['Rocket Ship', 'Astronaut', 'Ringed Planet'],
    learningFocus: 'Spatial awareness & galactic curiosity',
    icon: 'Rocket'
  },
  {
    month: 'August / Dinosaurs',
    themeName: 'Jurassic Dino Dig & Fossils',
    description: 'T-Rex, Stegosaurus, Triceratops, and fossil footprint castings.',
    plasterShapes: ['T-Rex', 'Stegosaurus', 'Dino Egg'],
    learningFocus: 'Paleontology storytelling & primary blending',
    icon: 'Flame'
  },
  {
    month: 'September / Spring',
    themeName: 'Spring Garden & Busy Bees',
    description: 'Honeybees, buzzing ladybugs, caterpillars, and blooming tulips.',
    plasterShapes: ['Honeybee', 'Ladybug', 'Sunflower'],
    learningFocus: 'Pollination biology & vibrant color layering',
    icon: 'Sun'
  },
  {
    month: 'October / Halloween',
    themeName: 'Spooky Cute & Magic Pumpkins',
    description: 'Friendly smiling ghosts, jack-o-lanterns, and whimsical wizard hats.',
    plasterShapes: ['Happy Ghost', 'Pumpkin', 'Magic Wand'],
    learningFocus: 'Creative imagination & contrasting shades',
    icon: 'Ghost'
  },
  {
    month: 'November / Safari',
    themeName: 'Wild Safari & Jungle Kingdom',
    description: 'Lions, giraffes, elephants, and monkeys on an Aotearoa safari adventure.',
    plasterShapes: ['Lion King', 'Tall Giraffe', 'Baby Elephant'],
    learningFocus: 'Global animal habitats & storytelling',
    icon: 'Compass'
  },
  {
    month: 'December / Christmas',
    themeName: 'Kiwi Christmas & Santa’s Workshop',
    description: 'Pōhutukawa blossoms, kiwi birds in Santa hats, reindeer, and tree ornaments.',
    plasterShapes: ['Kiwi Santa', 'Pōhutukawa Star', 'Reindeer'],
    learningFocus: 'Holiday celebration & keepsake creation',
    icon: 'Gift'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sophie & Liam Turner',
    role: 'Parents of 6-year-old Maya',
    location: 'Takapuna, Auckland',
    rating: 5,
    quote: 'Paint Party NZ made Maya’s 6th birthday the easiest party we have EVER thrown! The kits arrived beautifully boxed with Maya’s name on each label. The kids sat captivated for 45 minutes painting their unicorns and dinosaurs, and every parent messaged me afterwards saying how much their child loves their keepsake!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    highlight: '“Zero stress, zero planning, pure joy for 20 kids!”',
    partyType: 'Birthday Party Pack (20 Kits)'
  },
  {
    id: 'test-2',
    name: 'Aroha Mitchell',
    role: 'Head Teacher, Pukeko Early Learning Centre',
    location: 'Hamilton East, Waikato',
    rating: 5,
    quote: 'Our toddlers and preschoolers adore the Monthly Daycare Craft Box! Everything arrives ready to place directly on classroom tables — high quality smooth plaster, rich washable paints, and child-safe brushes. It has enriched our sensory curriculum immensely.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    highlight: '“Curriculum-aligned, saves our teaching staff hours of prep time.”',
    partyType: 'Monthly Daycare Subscription (30 Kids)'
  },
  {
    id: 'test-3',
    name: 'Braden Campbell',
    role: 'People & Culture Lead, Spark NZ',
    location: 'Tauranga & Auckland',
    rating: 5,
    quote: 'We ordered 150 custom-branded Paint Party kits for our Annual Spark Family Fun Day. The Paint Party NZ team added our company logo to the custom box sleeves and matched the paint colors to our brand. The kids zone was the biggest hit of the event!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    highlight: '“Exceptional corporate branding and flawless execution for 150+ families.”',
    partyType: 'Corporate Family Day Event'
  },
  {
    id: 'test-4',
    name: 'Elena & Mark Ross',
    role: 'Hosted Birthday Party Host',
    location: 'Mount Maunganui, Tauranga',
    rating: 5,
    quote: 'We booked the Hosted Paint Party experience where the entertainer came to our backyard. She set up tables with colorful tablecloths, aprons, music, and guided the children through fun paint blending techniques. Hands down the best party service in NZ!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    highlight: '“The hosted entertainer was wonderful — we didn’t lift a finger!”',
    partyType: 'Mobile Hosted Party Experience'
  }
];

export const BRAND_CONFIG = {
  name: 'Paint Party NZ',
  tagline: 'Create · Connect · Cherish',
  secondaryLine: "More than just painting, it's memories that last!",
  email: 'paintparty.nz@gmail.com',
  social: {
    instagram: 'https://instagram.com/paintparty.nz',
    facebook: 'https://facebook.com/paintparty.nz',
    tiktok: 'https://tiktok.com/@paintparty.nz',
    handle: '@paintparty.nz'
  },
  serviceRegions: ['Auckland', 'Hamilton', 'Tauranga'],
  shippingNationwide: 'Nationwide Express Shipping Across New Zealand',
  phone: '0800 PAINT NZ (0800 724 686)',
  operatingHours: 'Mon - Sat: 8:30 AM - 6:00 PM NZST'
};
