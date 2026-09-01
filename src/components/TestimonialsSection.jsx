import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, MessageSquareQuote, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export default function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 relative">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-indigo-400" />
            <span>Community Voice</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by <span className="text-gradient">Creators & Brands</span>
          </h2>
          
          <p className="mt-4 text-slate-300 max-w-xl text-base sm:text-lg">
            See how top digital agencies, influencers, and brands leverage our media showcase platform to boost engagement.
          </p>
        </motion.div>

        {/* Testimonials Grid with Staggered Scroll Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {TESTIMONIALS_DATA.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                borderColor: 'rgba(99, 102, 241, 0.35)',
                boxShadow: '0 16px 36px -10px rgba(99, 102, 241, 0.2)',
              }}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 flex flex-col justify-between relative group transition-all duration-300"
            >
              {/* Quote Mark Decorative Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-indigo-400/20 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal italic">
                  "{t.review}"
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-indigo-500/40"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-white">{t.name}</span>
                      {t.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400/20" />
                      )}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{t.role}</span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[10px] font-semibold text-slate-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                  <ThumbsUp className="w-3 h-3 text-indigo-400" />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
