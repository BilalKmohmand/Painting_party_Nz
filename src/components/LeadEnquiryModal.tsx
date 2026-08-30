import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LeadEnquiry } from '../types';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';
import { X, Send, Sparkles, CheckCircle2, ShieldCheck, Phone, Mail, Calendar, Users, MapPin, Building2 } from 'lucide-react';

interface LeadEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTheme?: string;
  initialNotes?: string;
  initialType?: LeadEnquiry['enquiryType'];
}

export const LeadEnquiryModal: React.FC<LeadEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialTheme = 'Birthday Party Kits',
  initialNotes = '',
  initialType = 'birthday'
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<LeadEnquiry>({
    fullName: '',
    email: '',
    phone: '',
    organisation: '',
    eventDate: '',
    kitCount: '20 Kits',
    selectedTheme: initialTheme,
    personalisationNeeded: true,
    personalisationText: '',
    deliveryLocation: 'Auckland',
    enquiryType: initialType,
    additionalNotes: initialNotes
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playChime();
    confetti({
      particleCount: 80,
      spread: 75,
      origin: { y: 0.5 },
      colors: ['#FF2E93', '#FF7A00', '#0DC2BB', '#8E44F3']
    });
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#111936]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[94vh]"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0DC2BB] animate-ping" />
              <h3 className="text-base sm:text-lg font-display font-black text-[#111936]">
                {formData.enquiryType === 'corporate' ? 'Corporate Bulk Quote Request' :
                 formData.enquiryType === 'daycare' ? 'Daycare Subscription Enquiry' :
                 formData.enquiryType === 'wholesale' ? 'Stockist Application' :
                 formData.enquiryType === 'hosted_party' ? 'Hosted Party Booking Enquiry' :
                 'Custom Paint Party Quote & Enquiry'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-[#111936] hover:bg-slate-100 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form / Success State */}
          <div className="overflow-y-auto p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-display font-black text-[#111936]">
                  Enquiry Received!
                </h4>
                <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-[#111936]">{formData.fullName}</span>. Our Paint Party NZ team will review your requirements and send a customized quote to <span className="font-bold text-[#FF2E93]">{formData.email}</span> within 24 business hours.
                </p>
                <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto">
                  <p className="font-bold text-[#111936]">Next Steps:</p>
                  <p className="mt-1">We’ll include sample plaster mockups, bulk volume pricing breakdown, and delivery timing options.</p>
                </div>
                <button
                  onClick={onClose}
                  className="mt-8 px-8 py-3 rounded-full bg-[#111936] text-white text-xs font-bold hover:bg-[#FF2E93] transition-all"
                >
                  Return to Website
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <p className="text-xs text-slate-500 mb-2">
                  Please fill out your details below. We tailor quotes for birthdays, daycares, corporate galas, and wholesale stockists across New Zealand.
                </p>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#111936] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FF2E93] focus:bg-white focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111936] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@example.co.nz"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FF2E93] focus:bg-white focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Phone & Organisation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#111936] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 021 123 4567"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FF2E93] focus:bg-white focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111936] mb-1">
                      Organisation / Centre / Company (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder="e.g. Takapuna Kindy / Spark NZ"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FF2E93] focus:bg-white focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Event Date & Kit Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#111936] mb-1">
                      Event / Required Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FF2E93] focus:bg-white focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111936] mb-1">
                      Number of Children / Kits Needed *
                    </label>
                    <select
                      value={formData.kitCount}
                      onChange={(e) => setFormData({ ...formData, kitCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FF2E93] focus:bg-white focus:outline-hidden font-medium"
                    >
                      <option value="10 Kits (Mini Pack)">10 Kits (Mini Party)</option>
                      <option value="20 Kits (Standard Pack)">20 Kits (Standard Party / Kindy)</option>
                      <option value="30-40 Kits (Big Celebration)">30 - 40 Kits (Celebration / Centre)</option>
                      <option value="50-100 Kits (Bulk Event)">50 - 100 Kits (School / Community Event)</option>
                      <option value="100-300 Kits (Large Gala)">100 - 300 Kits (Corporate Family Day)</option>
                      <option value="500+ Kits (Enterprise / Retail)">500+ Kits (Enterprise / Retail Wholesale)</option>
                    </select>
                  </div>
                </div>

                {/* Theme & Delivery Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#111936] mb-1">
                      Chosen Theme or Sculptures
                    </label>
                    <input
                      type="text"
                      value={formData.selectedTheme}
                      onChange={(e) => setFormData({ ...formData, selectedTheme: e.target.value })}
                      placeholder="e.g. Unicorns, Dinos, Diya Lamps"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FF2E93] focus:bg-white focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111936] mb-1">
                      Delivery Location / Region *
                    </label>
                    <select
                      value={formData.deliveryLocation}
                      onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FF2E93] focus:bg-white focus:outline-hidden font-medium"
                    >
                      <option value="Auckland (North Shore / Central / West / South)">Auckland (Mobile & Courier)</option>
                      <option value="Hamilton & Waikato">Hamilton & Waikato (Mobile & Courier)</option>
                      <option value="Tauranga & Bay of Plenty">Tauranga & Bay of Plenty (Mobile & Courier)</option>
                      <option value="Wellington & Lower North Island">Wellington & Lower North Island (Courier)</option>
                      <option value="Christchurch & Canterbury">Christchurch & Canterbury (Courier)</option>
                      <option value="Other North Island Location">Other North Island Location (Courier)</option>
                      <option value="Other South Island Location">Other South Island Location (Courier)</option>
                    </select>
                  </div>
                </div>

                {/* Personalisation Option */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[#111936] flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.personalisationNeeded}
                        onChange={(e) => setFormData({ ...formData, personalisationNeeded: e.target.checked })}
                        className="rounded-sm text-[#FF2E93] focus:ring-[#FF2E93]"
                      />
                      <span>Personalised Gift Box Labels Required? (Child name/age or company logo)</span>
                    </label>
                  </div>
                  {formData.personalisationNeeded && (
                    <input
                      type="text"
                      placeholder="e.g. 'Maya's 6th Birthday' or 'Spark Family Day 2026'"
                      value={formData.personalisationText}
                      onChange={(e) => setFormData({ ...formData, personalisationText: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:ring-1 focus:ring-[#FF2E93]"
                    />
                  )}
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-[#111936] mb-1">
                    Additional Notes or Special Requests
                  </label>
                  <textarea
                    rows={2}
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    placeholder="Any specific requests, hosted entertainer requirements, or rush delivery dates..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FF2E93] focus:bg-white focus:outline-hidden"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF2E93] via-[#FF7A00] to-[#0DC2BB] text-white font-display font-black text-sm shadow-xl hover:shadow-2xl hover:scale-101 active:scale-99 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Quote & Enquiry Request</span>
                  </button>
                  <div className="mt-2 text-center text-[11px] text-slate-400">
                    No obligation • Fast 24-hour turnaround • NZ GST Invoices
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
