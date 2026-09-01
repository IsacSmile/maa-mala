import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PhoneCall, AlertCircle, CheckCircle2, Plus, Minus, Compass } from 'lucide-react';

const WHATSAPP_NUMBER = '919400921124';

const ADVENTURE_OPTIONS = [
  'Strangers Camp @ Kakkadampoyil (Sep 05–06)',
  'Tent & Cottage Stay',
  'Offroad Jeep Safari',
  'Stream & Forest Hiking',
  'Campfire Jam & Acoustic Night',
];

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    adventureName: ADVENTURE_OPTIONS[0],
    fullName: '',
    mobile: '',
    maleCount: 1,
    femaleCount: 0,
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  // Computed total guests count
  const totalGuests = (Number(formData.maleCount) || 0) + (Number(formData.femaleCount) || 0);
  const totalPrice = totalGuests * 1799;

  // Handle ESC key press to close modal
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
      [name]: name.includes('Count') ? Math.max(0, parseInt(value, 10) || 0) : value,
    }));

    if (errors[name] || errors.guests) {
      setErrors((prev) => ({ ...prev, [name]: null, guests: null }));
    }
  };

  const handleStep = (field, delta, min = 0) => {
    setFormData((prev) => {
      const currentVal = prev[field] || 0;
      const newVal = Math.max(min, currentVal + delta);
      return { ...prev, [field]: newVal };
    });

    if (errors[field] || errors.guests) {
      setErrors((prev) => ({ ...prev, [field]: null, guests: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // 1. Adventure Name validation
    if (!formData.adventureName) {
      newErrors.adventureName = 'Please select an adventure';
    }

    // 2. Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    // 3. Mobile validation (Indian format check)
    const cleanedMobile = formData.mobile.replace(/[\s\-\+]/g, '');
    const mobileDigits = cleanedMobile.startsWith('91') && cleanedMobile.length === 12 ? cleanedMobile.slice(2) : cleanedMobile;
    const indianMobileRegex = /^[6-9]\d{9}$/;

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile Number is required';
    } else if (!indianMobileRegex.test(mobileDigits)) {
      newErrors.mobile = 'Please enter a valid 10-digit Indian mobile number';
    }

    // 4. Guest count validation (Must select at least 1 guest)
    if (totalGuests < 1) {
      newErrors.guests = 'Please select at least 1 guest (Male or Female)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const calculatedTotal = totalPrice.toLocaleString('en-IN');

    // Construct pre-filled WhatsApp message
    const message = `Hello, I would like to book ${formData.adventureName}.

Name: ${formData.fullName.trim()}
Mobile: ${formData.mobile.trim()}
Total Guests: ${totalGuests} (Male: ${formData.maleCount}, Female: ${formData.femaleCount})
Estimated Price: ₹${calculatedTotal} (All-Inclusive)

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
            className="relative w-full max-w-lg bg-nature-950 border border-ivory-100/15 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-left my-auto"
          >
            {/* Header Close Trigger */}
            <div className="flex items-center justify-between border-b border-ivory-100/10 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-gold block">
                  MAA MALA™ EXPEDITIONS
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-ivory-100 mt-0.5">
                  Book Your Adventure
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-nature-900 border border-ivory-100/10 text-warmgray-400 hover:text-ivory-100 hover:bg-nature-850 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Success Toast Feedback */}
            {showToast ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center gap-3"
              >
                <div className="w-14 h-14 rounded-full bg-forest/20 border border-forest text-gold flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-ivory-100">
                  Redirecting to WhatsApp...
                </h3>
                <p className="text-xs text-warmgray-400 max-w-xs">
                  Your booking details have been prepared. Please send the message in WhatsApp to confirm.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* 1. Adventure Name Selection */}
                <div>
                  <label htmlFor="adventureName" className="block text-xs font-semibold uppercase tracking-wider text-warmgray-400 mb-1.5 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Adventure Package</span> <span className="text-gold">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="adventureName"
                      name="adventureName"
                      value={formData.adventureName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-nature-900 border border-ivory-100/15 text-xs sm:text-sm text-ivory-100 focus:outline-none focus:ring-1 focus:ring-gold transition-colors appearance-none cursor-pointer"
                    >
                      {ADVENTURE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-nature-950 text-ivory-100">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-warmgray-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 2. Full Name */}
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

                {/* 3. Mobile Number */}
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

                {/* 4. Gender Steppers Grid (Male & Female) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-warmgray-400 mb-1.5">
                    Select Guests <span className="text-gold">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Male Stepper */}
                    <div className="p-3 rounded-lg bg-nature-900 border border-ivory-100/15 flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                        Male
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleStep('maleCount', -1, 0)}
                          className="w-7 h-7 rounded bg-nature-950/60 hover:bg-nature-950 text-ivory-100 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                          aria-label="Decrease male count"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-sm font-bold text-ivory-100">
                          {formData.maleCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleStep('maleCount', 1, 0)}
                          className="w-7 h-7 rounded bg-nature-950/60 hover:bg-nature-950 text-ivory-100 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                          aria-label="Increase male count"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Female Stepper */}
                    <div className="p-3 rounded-lg bg-nature-900 border border-ivory-100/15 flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-ivory-200">
                        Female
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleStep('femaleCount', -1, 0)}
                          className="w-7 h-7 rounded bg-nature-950/60 hover:bg-nature-950 text-ivory-100 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                          aria-label="Decrease female count"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-sm font-bold text-ivory-100">
                          {formData.femaleCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleStep('femaleCount', 1, 0)}
                          className="w-7 h-7 rounded bg-nature-950/60 hover:bg-nature-950 text-ivory-100 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                          aria-label="Increase female count"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {errors.guests && (
                    <span className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.guests}</span>
                    </span>
                  )}
                </div>

                {/* Dynamic Pricing Summary */}
                <div className="pt-3 pb-1 flex items-center justify-between text-xs text-warmgray-400 border-t border-ivory-100/10">
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-ivory-200">Total Package Price</span>
                    <span className="text-[10px] text-warmgray-400 font-sans mt-0.5">
                      ₹1,799 × {totalGuests} guest{totalGuests > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-serif font-bold text-gold text-base sm:text-lg block">
                      ₹{totalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[9px] text-warmgray-400 uppercase tracking-widest font-sans">
                      All-Inclusive
                    </span>
                  </div>
                </div>

                {/* Submit CTA Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-forest hover:bg-forest-hover text-ivory-100 font-semibold text-xs uppercase tracking-wider shadow-2xl transition-all border border-white/10 flex items-center justify-center gap-2 mt-4 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>BOOK VIA WHATSAPP</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
