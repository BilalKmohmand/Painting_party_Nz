/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { CategoryGrid } from './components/CategoryGrid';
import { InteractiveKitBuilder } from './components/InteractiveKitBuilder';
import { HowItWorks } from './components/HowItWorks';
import { BirthdayPackages } from './components/BirthdayPackages';
import { DaycareSubscription } from './components/DaycareSubscription';
import { CorporateBulkSection } from './components/CorporateBulkSection';
import { WholesaleSection } from './components/WholesaleSection';
import { HostedPartiesSection } from './components/HostedPartiesSection';
import { MilestoneCounters } from './components/MilestoneCounters';
import { CustomerTestimonials } from './components/CustomerTestimonials';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { LeadEnquiryModal } from './components/LeadEnquiryModal';
import { CartDrawer } from './components/CartDrawer';
import { ExitIntentModal } from './components/ExitIntentModal';
import { IntroSplash } from './components/IntroSplash';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';
import { CartItem, Product, BirthdayPackage, LeadEnquiry } from './types';
import { sound } from './utils/audio';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [catalogFilter, setCatalogFilter] = useState('all');

  // Lead Enquiry Modal State
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryTheme, setEnquiryTheme] = useState('Birthday Party Kits');
  const [enquiryNotes, setEnquiryNotes] = useState('');
  const [enquiryType, setEnquiryType] = useState<LeadEnquiry['enquiryType']>('birthday');

  // Add item to cart handler
  const handleAddToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(
        i => i.productId === item.productId &&
             i.selectedPlasterDesign === item.selectedPlasterDesign &&
             i.selectedPaintPalette === item.selectedPaintPalette
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += item.quantity;
        return updated;
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(itemId);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === itemId ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveCartItem = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  // Trigger custom lead enquiry modal with specific context
  const openEnquiry = (type: LeadEnquiry['enquiryType'], theme: string, notes: string) => {
    setEnquiryType(type);
    setEnquiryTheme(theme);
    setEnquiryNotes(notes);
    setIsEnquiryOpen(true);
  };

  // When a birthday package is selected
  const handleSelectBirthdayPackage = (pkg: BirthdayPackage, theme: string, count: number) => {
    const item: CartItem = {
      id: `${pkg.id}-${Date.now()}`,
      productId: pkg.id,
      productTitle: `${pkg.name} (${theme})`,
      productImage: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80',
      category: 'Birthday Packages',
      quantity: 1,
      selectedPlasterDesign: theme,
      selectedPaintPalette: 'Rainbow Pop (6 Colours)',
      pricePlaceholder: pkg.pricePlaceholder,
      unitNote: `${pkg.kitCount}`
    };
    handleAddToCart(item);
  };

  return (
    <div className="min-h-screen bg-[#FDFEFE] text-[#111936] selection:bg-[#FF2E93] selection:text-white font-sans antialiased overflow-x-hidden relative">
      
      {/* Frosted Glass Atmospheric Background Glow Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[550px] h-[550px] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 bg-[#FF007F] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[200px] right-[-80px] w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 bg-[#00C2CB] animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-[45%] left-[-60px] w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-[110px] opacity-15 bg-[#FF8C00]"></div>
        <div className="absolute top-[60%] right-[15%] w-[450px] h-[450px] rounded-full mix-blend-multiply filter blur-[100px] opacity-15 bg-[#8A2BE2]"></div>
        <div className="absolute bottom-[-100px] left-[25%] w-[650px] h-[650px] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 bg-[#00C2CB]"></div>
      </div>

      {/* Intro Splash Animation (plays once on entry) */}
      {showSplash && <IntroSplash onComplete={() => setShowSplash(false)} />}

      {/* Paintbrush Custom Cursor with Paint Droplet Trail (desktop) */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onRequestQuote={() => openEnquiry('quote', 'Custom Paint Party Order', '')}
        activeSection="home"
      />

      {/* Main Page Layout */}
      <main className="relative z-10">
        {/* 1. Hero Section with Typewriter & Plaster Mascot */}
        <HeroSection
          onOpenBuilder={() => {
            const builderEl = document.getElementById('custom-builder');
            builderEl?.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreKits={() => {
            const catalogEl = document.getElementById('shop-catalog');
            catalogEl?.scrollIntoView({ behavior: 'smooth' });
          }}
          onRequestQuote={() => openEnquiry('hosted_party', 'Hosted Party Booking', '')}
        />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. Category Grid */}
        <CategoryGrid
          onSelectCategory={(catKey) => {
            setCatalogFilter(catKey);
            const catalogEl = document.getElementById('shop-catalog');
            catalogEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Interactive 3D/SVG Plaster Kit Builder */}
        <InteractiveKitBuilder 
          onAddToCart={handleAddToCart}
          onRequestQuote={(theme, notes) => openEnquiry('custom', theme, notes)}
        />

        {/* 5. How It Works (Pick It, Paint It, Keep It) */}
        <HowItWorks
          onStartExploring={() => {
            const builderEl = document.getElementById('kit-builder');
            builderEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 6. Kids Birthday Party Packages */}
        <BirthdayPackages
          onSelectPackage={handleSelectBirthdayPackage}
          onRequestQuote={(theme, notes) => openEnquiry('birthday', theme, notes)}
        />

        {/* 7. Daycare & School Monthly Craft Box */}
        <DaycareSubscription
          onEnquire={(size, theme) => openEnquiry('daycare', theme, `Daycare Subscription enquiry for ${size}`)}
        />

        {/* 8. Corporate & Bulk Event Orders (B2B) */}
        <CorporateBulkSection
          onRequestQuote={(aud, notes) => openEnquiry('corporate', aud, notes)}
        />

        {/* 9. Wholesale & Stockist Program */}
        <WholesaleSection
          onApplyStockist={() => openEnquiry('wholesale', 'Retail Wholesale', 'Stockist application for retail store/café.')}
        />

        {/* 10. Hosted Mobile Paint Parties */}
        <HostedPartiesSection
          onEnquireHosted={() => openEnquiry('hosted_party', 'Hosted Birthday/Event Painting Experience', 'Mobile entertainer booking request for Auckland/Hamilton/Tauranga.')}
        />

        {/* 11. Animated Milestone Counters */}
        <MilestoneCounters />

        {/* 12. Full Product Catalog with Search & Filter */}
        <ProductCatalog
          selectedCategoryFilter={catalogFilter}
          onFilterChange={(cat) => setCatalogFilter(cat)}
          onOpenProductDetail={(prod) => setSelectedProduct(prod)}
        />

        {/* 13. Customer Testimonials & Reviews */}
        <CustomerTestimonials />
      </main>

      {/* Footer */}
      <Footer onRequestQuote={() => openEnquiry('quote', 'General Enquiry', '')} />

      {/* Product Detail & Customizer Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onRequestQuote={(theme, notes) => {
          setSelectedProduct(null);
          openEnquiry('quote', theme, notes);
        }}
      />

      {/* Lead Capture & Custom Quote Modal */}
      <LeadEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialTheme={enquiryTheme}
        initialNotes={enquiryNotes}
        initialType={enquiryType}
      />

      {/* Shopify Slide-Out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          setIsCartOpen(false);
          openEnquiry('quote', 'Cart Checkout Review', `Checkout submission with ${cartItems.length} unique kit lines.`);
        }}
      />

      {/* Paintbrush Mascot Exit Intent Discount Modal */}
      <ExitIntentModal
        onClaimDiscount={(code) => {
          console.log(`Discount claimed: ${code}`);
        }}
      />

    </div>
  );
}

