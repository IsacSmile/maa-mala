import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PhoneCall, CheckCircle2, AlertCircle, Plus, Minus } from 'lucide-react';

const WHATSAPP_NUMBER = '919400921124';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    totalGuests: 1,
    maleCount: 1,
    femaleCount: 0,
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  // Reset errors when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setErrors({});
      setShowToast(false);
    }
  }, [isOpen]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name.includes('Count') || name === 'totalGuests' ? Math.max(0, parseInt(value, 10) || 0) : value,
    }));

    if (errors[name] || errors.mismatch) {
      setErrors((prev) => ({ ...prev, [name]: null, mismatch: null }));
    }
  };

  const handleStep = (field, delta, min = 0) => {
    setFormData((prev) => {
      const currentVal = prev[field] || 0;
      const newVal = Math.max(min, currentVal + delta);
      return { ...prev, [field]: newVal };
    });

    if (errors[field] || errors.mismatch) {
      setErrors((prev) => ({ ...prev, [field]: null, mismatch: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // 1. Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    // 2. Mobile validation (Indian format check)
    const cleanedMobile = formData.mobile.replace(/[\s\-\+]/g, '');
    const mobileDigits = cleanedMobile.startsWith('91') && cleanedMobile.length === 12 ? cleanedMobile.slice(2) : cleanedMobile;
    const indianMobileRegex = /^[6-9]\d{9}$/;

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile Number is required';
    } else if (!indianMobileRegex.test(mobileDigits)) {
      newErrors.mobile = 'Please enter a valid 10-digit Indian mobile number';
    }

    // 3. Guest counts validation
    const total = Number(formData.totalGuests);
    const male = Number(formData.maleCount);
    const female = Number(formData.femaleCount);

    if (total < 1) {
      newErrors.totalGuests = 'Total Guests must be at least 1';
    }

    if (male < 0) newErrors.maleCount = 'Male count cannot be negative';
    if (female < 0) newErrors.femaleCount = 'Female count cannot be negative';

    // Critical Rule: Male + Female count MUST equal Total Guests
    if (male + female !== total) {
      newErrors.mismatch = `Male (${male}) + Female (${female}) count must equal Total Guests (${total}).`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Construct pre-filled WhatsApp message
    const message = `Hello, I would like to book Strangers Camp @ Kakkadampoyil.

Name: ${formData.fullName.trim()}
Mobile: ${formData.mobile.trim()}
Total Guests: ${formData.totalGuests}
Male: ${formData.maleCount}
Female: ${formData.femaleCount}

Please share the booking details and availability.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp URL directly
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Show temporary success feedback & close modal
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      onClose();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-nature-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-2xl bg-nature-950 border border-ivory-100/15 shadow-2xl p-6 sm:p-8 z-10 text-ivory-100 my-auto overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-5 border-b border-ivory-100/10 mb-6">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold block mb-1">
                  STRANGERS CAMP · KAKKADAMPOYIL
                </span>
                <h3 id="modal-title" className="text-xl sm:text-2xl font-serif font-bold text-ivory-100">
                  Book Your Adventure
                </h3>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-ivory-100/10 text-ivory-100 hover:bg-ivory-100/20 flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close booking modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Success Toast Overlay */}
            {showToast ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-gold animate-bounce" />
                <h4 className="text-lg font-serif font-bold text-ivory-100">
                  Booking Details Prepared!
                </h4>
                <p className="text-xs text-warmgray-400 max-w-xs font-sans">
                  Redirecting to WhatsApp to confirm your availability with MAA MALA™.
                </p>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 1. Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-warmgray-400 mb-1.5">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-lg bg-nature-900 border text-xs sm:text-sm text-ivory-100 placeholder-warmgray-400/50 focus:outline-none focus:ring-1 focus:ring-gold transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-ivory-100/15'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.fullName}</span>
                    </span>
                  )}
                </div>

                {/* 2. Mobile Number */}
                <div>
                  <label htmlFor="mobile" className="block text-xs font-semibold uppercase tracking-wider text-warmgray-400 mb-1.5">
                    Mobile Number <span className="text-gold">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    inputMode="numeric"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10-digit mobile (e.g. 9876543210)"
                    className={`w-full px-4 py-3 rounded-lg bg-nature-900 border text-xs sm:text-sm text-ivory-100 placeholder-warmgray-400/50 focus:outline-none focus:ring-1 focus:ring-gold transition-colors ${
                      errors.mobile ? 'border-red-500' : 'border-ivory-100/15'
                    }`}
                  />
                  {errors.mobile && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.mobile}</span>
                    </span>
                  )}
                </div>

                {/* 3. Guest Counts Grid with Custom Sleek Steppers */}
                <div className="grid grid-cols-3 gap-3 pt-1">
                  {/* Total Guests */}
                  <div>
                    <label htmlFor="totalGuests" className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-warmgray-400 mb-1.5">
                      Total Guests <span className="text-gold">*</span>
                    </label>
                    <div className="flex items-center rounded-lg bg-nature-900 border border-ivory-100/15 p-1">
                      <button
                        type="button"
                        onClick={() => handleStep('totalGuests', -1, 1)}
                        className="w-7 h-7 rounded bg-nature-950/60 hover:bg-nature-950 text-ivory-100 flex items-center justify-center transition-colors shrink-0"
                        aria-label="Decrease total guests"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <input
                        type="number"
                        id="totalGuests"
                        name="totalGuests"
                        min="1"
                        inputMode="numeric"
                        value={formData.totalGuests}
                        onChange={handleChange}
                        className="w-full text-center bg-transparent text-xs sm:text-sm text-ivory-100 font-bold focus:outline-none p-0"
                      />
                      <button
                        type="button"
                        onClick={() => handleStep('totalGuests', 1, 1)}
                        className="w-7 h-7 rounded bg-nature-950/60 hover:bg-nature-950 text-ivory-100 flex items-center justify-center transition-colors shrink-0"
                        aria-label="Increase total guests"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Male */}
                  <div>
                    <label htmlFor="maleCount" className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-warmgray-400 mb-1.5">
                      Male <span className="text-gold">*</span>
                    </label>
                    <div className="flex items-center rounded-lg bg-nature-900 border border-ivory-100/15 p-1">
                      <button
                        type="button"
                        onClick={() => handleStep('maleCount', -1, 0)}
                        className="w-7 h-7 rounded bg-nature-950/60 hover:bg-nature-950 text-ivory-100 flex items-center justify-center transition-colors shrink-0"
                        aria-label="Decrease male count"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <input
                        type="number"
                        id="maleCount"
                        name="maleCount"
                        min="0"
                        inputMode="numeric"
                        value={formData.maleCount}
                        onChange={handleChange}
                        className="w-full text-center bg-transparent text-xs sm:text-sm text-ivory-100 font-bold focus:outline-none p-0"
                      />
                      <button
                        type="button"
                        onClick={() => handleStep('maleCount', 1, 0)}
                        className="w-7 h-7 rounded bg-nature-950/60 hover:bg-nature-950 text-ivory-100 flex items-center justify-center transition-colors shrink-0"
                        aria-label="Increase male count"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Female */}
                  <div>
                    <label htmlFor="femaleCount" className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-warmgray-400 mb-1.5">
                      Female <span className="text-gold">*</span>
                    </label>
                    <div className="flex items-center rounded-lg bg-nature-900 border border-ivory-100/15 p-1">
                      <button
                        type="button"
                        onClick={() => handleStep('femaleCount', -1, 0)}
                        className="w-7 h-7 rounded bg-nature-950/60 hover:bg-nature-950 text-ivory-100 flex items-center justify-center transition-colors shrink-0"
                        aria-label="Decrease female count"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <input
                        type="number"
                        id="femaleCount"
                        name="femaleCount"
                        min="0"
                        inputMode="numeric"
                        value={formData.femaleCount}
                        onChange={handleChange}
                        className="w-full text-center bg-transparent text-xs sm:text-sm text-ivory-100 font-bold focus:outline-none p-0"
                      />
                      <button
                        type="button"
                        onClick={() => handleStep('femaleCount', 1, 0)}
                        className="w-7 h-7 rounded bg-nature-950/60 hover:bg-nature-950 text-ivory-100 flex items-center justify-center transition-colors shrink-0"
                        aria-label="Increase female count"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Validation Mismatch Error Alert */}
                {errors.mismatch && (
                  <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errors.mismatch}</span>
                  </div>
                )}

                {/* Pricing Summary */}
                <div className="pt-2 pb-1 flex items-center justify-between text-xs text-warmgray-400 border-t border-ivory-100/10">
                  <span>Package Rate</span>
                  <span className="font-serif font-bold text-gold text-sm">₹1,799 / Head (All-Inclusive)</span>
                </div>

                {/* Submit CTA Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-forest hover:bg-forest-hover text-ivory-100 font-semibold text-xs uppercase tracking-wider shadow-2xl transition-all border border-white/10 flex items-center justify-center gap-2 mt-4"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Continue on WhatsApp</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
