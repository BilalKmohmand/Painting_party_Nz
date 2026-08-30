export interface PlasterOption {
  id: string;
  name: string;
  category: string;
  theme: string;
  icon: string;
  description: string;
  svgShape: 'unicorn' | 'dino' | 'butterfly' | 'bear' | 'rocket' | 'lotus' | 'crown' | 'car' | 'star' | 'heart' | 'diya';
  recommendedColors: string[];
}

export interface PaintColorOption {
  id: string;
  name: string;
  hex: string;
  accent: string;
}

export interface BulkTier {
  quantityLabel: string;
  range: string;
  discountNote: string;
  popular?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: 'birthday' | 'daycare' | 'seasonal' | 'celebration' | 'cultural' | 'corporate';
  categoryLabel: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  heroImage: string;
  galleryImages: string[];
  priceDisplay: string; // e.g. "From $—"
  rating: number;
  reviewCount: number;
  featured?: boolean;
  bestseller?: boolean;
  ageRange: string;
  childrenCovered: string;
  estimatedPrepTime: string;
  plasterDesigns: PlasterOption[];
  paintPalettes: {
    id: string;
    name: string;
    colors: string[];
  }[];
  whatsIncluded: string[];
  safetyInfo: string[];
  deliveryInfo: string;
  bulkTiers: BulkTier[];
}

export interface BirthdayPackage {
  id: string;
  name: string;
  badge: string;
  kitCount: string;
  description: string;
  recommendedFor: string;
  features: string[];
  pricePlaceholder: string;
  popular?: boolean;
  colorScheme: 'pink' | 'teal' | 'purple';
}

export interface DaycareTheme {
  month: string;
  themeName: string;
  description: string;
  plasterShapes: string[];
  learningFocus: string;
  icon: string;
}

export interface CartItem {
  id: string;
  productId: string;
  productTitle: string;
  productImage: string;
  category: string;
  quantity: number;
  selectedPlasterDesign: string;
  selectedPaintPalette: string;
  customPersonalisation?: {
    childName?: string;
    ageOrOccasion?: string;
    customMessage?: string;
  };
  pricePlaceholder: string;
  unitNote: string;
}

export interface LeadEnquiry {
  fullName: string;
  email: string;
  phone: string;
  organisation?: string;
  eventDate?: string;
  kitCount: string;
  selectedTheme: string;
  personalisationNeeded: boolean;
  personalisationText?: string;
  deliveryLocation: string;
  enquiryType: 'birthday' | 'daycare' | 'corporate' | 'wholesale' | 'hosted_party' | 'custom' | 'quote';
  additionalNotes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
  highlight: string;
  partyType: string;
}
