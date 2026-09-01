import React from 'react';
import { motion } from 'framer-motion';

export default function VisualStory() {
  return (
    <section className="py-24 sm:py-36 bg-nature-950 text-ivory-100 border-t border-ivory-100/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Asymmetric Image Composition (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            {/* Primary Large Image */}
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-ivory-100/10">
              <img
                src="/images/misty_cottage.jpg"
                alt="Wake up above the clouds at Kakkadampoyil"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Small Supporting Image */}
            <div className="hidden sm:block absolute -bottom-10 -right-8 w-60 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-gold/30 ring-4 ring-nature-950">
              <img
                src="/images/treehouse.jpg"
                alt="Treehouse amidst mountain mist"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Editorial Content (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 text-left flex flex-col gap-6 pl-0 lg:pl-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              HIGHLAND MORNINGS
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-ivory-100 leading-[1.15]">
              Wake up above <br />
              <span className="italic font-normal text-gold">the clouds.</span>
            </h2>

            <p className="text-sm sm:text-base text-warmgray-400 font-sans leading-relaxed">
              At 2,000+ feet above sea level, Kakkadampoyil greets you each morning with thick fog rolling over emerald canopy and cool mountain breeze.
            </p>

            <p className="text-sm text-warmgray-400 font-sans leading-relaxed">
              Step outside your tent to hot local tea, fresh forest air, and views of rolling mountain peaks stretching across Malabar. No screens, no alarms — just nature at its purest.
            </p>

            <div className="pt-4 border-t border-ivory-100/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-warmgray-400">
              <span>LOCATION: KAKKADAMPOYIL</span>
              <span className="text-gold font-bold">SEP 05–06 CAMP</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
