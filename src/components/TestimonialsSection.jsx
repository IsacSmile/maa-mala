import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentCamper = TESTIMONIALS_DATA[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-nature-950 text-ivory-100 border-t border-ivory-100/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 flex flex-col items-center text-center">
        {/* Simple Editorial Eyebrow */}
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-3 block">
          CAMPER STORIES
        </span>

        <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-ivory-100">
          Real Campers. <span className="text-gold italic font-normal">Authentic Words.</span>
        </h2>

        {/* Featured Testimonial Card */}
        <div className="mt-12 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCamper.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="text-left flex flex-col gap-6"
            >
              {/* Quote Statement */}
              <p className="text-xl sm:text-2xl font-serif italic text-ivory-200 leading-relaxed">
                "{currentCamper.review}"
              </p>

              {/* Camper Profile Footer */}
              <div className="pt-6 border-t border-ivory-100/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={currentCamper.avatar}
                    alt={currentCamper.fullName}
                    className="w-12 h-12 rounded-full object-cover border border-ivory-100/20 shadow-md"
                  />
                  <div className="flex flex-col text-left">
                    <h3 className="text-base font-serif font-bold text-ivory-100">
                      {currentCamper.fullName}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-warmgray-400 font-sans mt-0.5">
                      <span>{currentCamper.location}</span>
                      <span>•</span>
                      <span className="text-gold">{currentCamper.tripTitle}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Stars & Navigation */}
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-1">
                    {[...Array(currentCamper.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-9 h-9 rounded-full border border-ivory-100/20 text-ivory-100 hover:bg-ivory-100/10 flex items-center justify-center transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-9 h-9 rounded-full border border-ivory-100/20 text-ivory-100 hover:bg-ivory-100/10 flex items-center justify-center transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
