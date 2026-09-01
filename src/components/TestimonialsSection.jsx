import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MapPin, Sparkles, ShieldCheck, Pause, Play, Compass, GraduationCap } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(3); // Start with Fatima (Index 3)
  const [isPaused, setIsPaused] = useState(false);

  const currentCamper = TESTIMONIALS_DATA[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  // Auto-play carousel unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-forest-600/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Top Verified Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-forest-900 border border-forest-500/40 text-forest-300 text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-moss-glow mb-6"
        >
          <Sparkles className="w-4 h-4 text-terracotta-400" />
          <span>VERIFIED CAMPER SUCCESS STORIES</span>
        </motion.div>

        {/* Main Serif Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-cream text-center leading-tight"
        >
          Real Campers. Proven Stories.
        </motion.h2>

        {/* Supporting Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-slate-300 text-center max-w-xl text-sm sm:text-base leading-relaxed"
        >
          Hear directly from adventurers who joined MAA MALA Strangers Camp & Kakkadampoyil nature retreats.
        </motion.p>

        {/* Interactive Camper Selector Avatar Pills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-3xl"
        >
          {TESTIMONIALS_DATA.map((item, index) => {
            const isSelected = index === currentIndex;
            return (
              <motion.button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-300 ${
                  isSelected
                    ? 'bg-forest-900 border-forest-400 text-cream shadow-moss-glow font-bold ring-2 ring-forest-400/40'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-cream hover:bg-white/10'
                }`}
              >
                <img
                  src={item.avatar}
                  alt={item.shortName}
                  className="w-7 h-7 rounded-full object-cover ring-1 ring-white/20"
                />
                <span className="text-xs sm:text-sm font-semibold tracking-wide">
                  {item.shortName}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Featured Testimonial Display Card (Matching Reference UI) */}
        <div className="mt-10 w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCamper.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-6 sm:p-10 rounded-[2.5rem] bg-gradient-to-b from-[#0e2c1e] to-[#081c15] border border-white/15 shadow-2xl overflow-hidden group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Translucent Quote Mark Icon Top Right */}
              <div className="absolute top-6 right-8 text-terracotta-500/20 text-7xl font-serif select-none pointer-events-none">
                ””
              </div>

              {/* Card Header Content */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Avatar Frame Left with RED VERIFIED badge */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-forest-400/40 shadow-xl bg-forest-950">
                    <img
                      src={currentCamper.avatar}
                      alt={currentCamper.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-md bg-rose-600 text-cream font-black text-[9px] uppercase tracking-wider shadow-md border border-white/20 whitespace-nowrap flex items-center gap-1">
                    <span>VERIFIED</span>
                    <span className="w-1.5 h-0.5 bg-white/70 inline-block"></span>
                  </div>
                </div>

                {/* Info Right */}
                <div className="flex flex-col gap-1 text-left">
                  {/* Stars + Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(currentCamper.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-rose-500 text-rose-500" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 font-extrabold text-[10px] uppercase tracking-wider flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-rose-400" />
                      <span>{currentCamper.verifiedStatus}</span>
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-cream mt-1">
                    {currentCamper.fullName}
                  </h3>

                  {/* Trip Subtitles */}
                  <div className="flex flex-col text-xs text-slate-300 font-medium gap-0.5 mt-0.5">
                    <div className="flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-forest-400 shrink-0" />
                      <span>{currentCamper.tripTitle}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-terracotta-300">
                      <GraduationCap className="w-3.5 h-3.5 text-terracotta-400 shrink-0" />
                      <span>{currentCamper.packageInfo}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Quote Text */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic font-normal">
                  "{currentCamper.review}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{currentCamper.location}</span>
                </div>

                <div className="px-3.5 py-1.5 rounded-xl bg-forest-900/90 border border-forest-500/30 text-forest-300 font-bold text-xs shadow-inner">
                  {currentCamper.badgeText}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Toolbar Indicator & Arrow Navigation (Exact Match to Reference UI) */}
          <div className="mt-6 flex items-center justify-between px-2">
            {/* Left Status Counter */}
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-wider">
              <span>Camper {currentIndex + 1} of {TESTIMONIALS_DATA.length}</span>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`px-2 py-0.5 rounded-full text-[9px] uppercase font-black tracking-widest border transition-colors flex items-center gap-1 ${
                  isPaused
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                    : 'bg-forest-500/20 text-forest-300 border-forest-500/30'
                }`}
              >
                {isPaused ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
                <span>{isPaused ? 'PAUSED' : 'AUTO PLAY'}</span>
              </button>
            </div>

            {/* Right Circular Navigation Buttons */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-cream hover:bg-white/20 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-forest-800 border border-forest-400/40 flex items-center justify-center text-cream shadow-moss-glow hover:bg-forest-700 transition-all"
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
