import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = TESTIMONIALS_DATA[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-nature-950 text-ivory-100 relative overflow-hidden border-t border-ivory-100/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
        {/* Eyebrow */}
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4 block">
          CAMPER STORIES & REVIEWS
        </span>

        <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-ivory-100 mb-16">
          Voices from the Campfire.
        </h2>

        {/* Featured Testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-8">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>

            {/* Large Quote */}
            <blockquote className="text-xl sm:text-3xl font-serif italic text-ivory-100 leading-relaxed max-w-3xl">
              "{activeTestimonial.review}"
            </blockquote>

            {/* Camper Info */}
            <div className="mt-10 flex flex-col items-center">
              <img
                src={activeTestimonial.avatar}
                alt={activeTestimonial.fullName}
                className="w-14 h-14 rounded-full object-cover border border-gold mb-3"
              />
              <h3 className="text-base font-serif font-bold text-ivory-100">
                {activeTestimonial.fullName}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-widest text-warmgray-400 mt-1">
                {activeTestimonial.tripTitle} · {activeTestimonial.location}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows & Counter */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-ivory-100/20 text-ivory-100 hover:bg-ivory-100 hover:text-nature-950 flex items-center justify-center transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold tracking-widest text-warmgray-400">
            0{activeIndex + 1} / 0{TESTIMONIALS_DATA.length}
          </span>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-ivory-100/20 text-ivory-100 hover:bg-ivory-100 hover:text-nature-950 flex items-center justify-center transition-all"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
