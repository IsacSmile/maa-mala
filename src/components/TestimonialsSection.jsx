import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MapPin, ShieldCheck, Pause, Play, Sparkles, Compass } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentCamper = TESTIMONIALS_DATA[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-nature-950 text-ivory-100 relative overflow-hidden border-t border-ivory-100/10">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nature-900 border border-ivory-100/15 text-gold text-[11px] font-bold uppercase tracking-[0.2em] mb-4 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>VERIFIED CAMPER SUCCESS STORIES</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-ivory-100">
          Real Campers. <span className="text-gold italic font-normal">Proven Stories.</span>
        </h2>

        <p className="mt-3 text-sm text-warmgray-400 max-w-lg font-sans">
          Read authentic reviews & verified trip experiences from real adventurers who joined our Kakkadampoyil Strangers Camp.
        </p>

        {/* Interactive Camper Selector Pill Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5 max-w-4xl"
        >
          {TESTIMONIALS_DATA.map((item, index) => {
            const isSelected = index === currentIndex;
            return (
              <motion.button
                key={item.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPaused(true);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-300 ${
                  isSelected
                    ? 'bg-forest border-forest-light text-ivory-100 shadow-xl font-bold ring-2 ring-gold/40 scale-105'
                    : 'bg-nature-900/80 border-ivory-100/10 text-warmgray-400 hover:text-ivory-100 hover:bg-nature-850'
                }`}
              >
                <img
                  src={item.avatar}
                  alt={item.shortName}
                  className="w-6 h-6 rounded-full object-cover ring-1 ring-ivory-100/20"
                />
                <span className="text-xs font-semibold tracking-wide">
                  {item.shortName}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Featured Testimonial Display Card */}
        <div className="mt-10 w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCamper.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-6 sm:p-10 rounded-2xl bg-nature-900/90 border border-ivory-100/15 shadow-2xl overflow-hidden group text-left"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Translucent Quote Mark Icon Top Right */}
              <div className="absolute top-6 right-8 text-ivory-100/5 text-8xl font-serif select-none pointer-events-none">
                ”
              </div>

              {/* Card Header Content */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Avatar Frame Left with VERIFIED badge */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-gold/40 shadow-xl bg-nature-950">
                    <img
                      src={currentCamper.avatar}
                      alt={currentCamper.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-md bg-forest text-ivory-100 font-extrabold text-[9px] uppercase tracking-wider shadow-md border border-ivory-100/20 whitespace-nowrap flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-gold" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Info Right */}
                <div className="flex flex-col gap-1 text-left">
                  {/* Stars + Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(currentCamper.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-nature-850 border border-ivory-100/15 text-gold font-extrabold text-[10px] uppercase tracking-wider flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-gold" />
                      <span>{currentCamper.verifiedStatus}</span>
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-ivory-100 mt-1">
                    {currentCamper.fullName}
                  </h3>

                  {/* Trip Subtitles */}
                  <div className="flex flex-col text-xs text-warmgray-400 font-medium gap-0.5 mt-0.5">
                    <div className="flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{currentCamper.tripTitle}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Quote Text */}
              <div className="mt-6 pt-6 border-t border-ivory-100/10">
                <p className="text-sm sm:text-base text-ivory-200 leading-relaxed italic font-normal">
                  "{currentCamper.review}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-ivory-100/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-warmgray-400 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>{currentCamper.location}</span>
                </div>

                <div className="px-3.5 py-1 rounded-full bg-forest/30 border border-forest/50 text-gold font-bold text-xs">
                  {currentCamper.badgeText}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Toolbar Indicator & Arrow Navigation */}
          <div className="mt-6 flex items-center justify-between px-2">
            {/* Left Status Counter */}
            <div className="flex items-center gap-3 text-xs font-semibold text-warmgray-400 tracking-wider">
              <span>Camper {currentIndex + 1} of {TESTIMONIALS_DATA.length}</span>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`px-2.5 py-0.5 rounded-full text-[9px] uppercase font-black tracking-widest border transition-colors flex items-center gap-1.5 ${
                  isPaused
                    ? 'bg-gold/20 text-gold border-gold/30'
                    : 'bg-forest/30 text-ivory-100 border-forest-light'
                }`}
              >
                {isPaused ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
                <span>{isPaused ? 'PAUSED' : 'AUTO PLAY'}</span>
              </button>
            </div>

            {/* Right Circular Navigation Buttons */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-ivory-100/20 text-ivory-100 hover:bg-ivory-100 hover:text-nature-950 flex items-center justify-center transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-forest border border-forest-light text-ivory-100 flex items-center justify-center hover:bg-forest-hover transition-all shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
