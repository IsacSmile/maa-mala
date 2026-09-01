import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Trees, MapPin } from 'lucide-react';
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
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 relative">
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-forest-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-500/15 border border-forest-500/30 text-forest-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Trees className="w-3.5 h-3.5 text-forest-400" />
            <span>Community Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-cream tracking-tight">
            What <span className="text-gradient">Campers Are Saying</span>
          </h2>

          <p className="mt-4 text-slate-300 max-w-lg text-base sm:text-lg">
            Real stories from outdoor lovers who explored the wilderness with Campers for Adventures.
          </p>
        </motion.div>

        {/* Testimonials Grid with Staggered Entrance Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {TESTIMONIALS_DATA.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-6 sm:p-8 rounded-3xl glass-card glass-card-hover border border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                {/* Star Rating SVG Header */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>

              {/* Camper Profile Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-forest-500/40"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-cream">{item.name}</span>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-400 fill-forest-400/20" />
                      )}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{item.role}</span>
                  </div>
                </div>

                {/* Outdoor Location Badge */}
                <div className="flex items-center gap-1 text-[10px] text-terracotta-400 font-semibold px-2 py-1 rounded-lg bg-terracotta-500/10 border border-terracotta-500/20">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span className="truncate max-w-[80px]">{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
