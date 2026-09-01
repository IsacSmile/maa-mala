import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight } from 'lucide-react';

export default function FinalCTA({ onOpenBooking }) {
  return (
    <section className="py-20 sm:py-32 bg-nature-950 text-ivory-100 border-t border-ivory-100/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 60% Width Real Camp Photograph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-ivory-100/10 group">
              <img
                src="/images/camping1.png"
                alt="Campfire & Tent Night at Kakkadampoyil"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
              />
            </div>
          </motion.div>

          {/* Right Column: 40% Width Booking Information & Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 text-left flex flex-col gap-6"
          >
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-3 block">
                RESERVE YOUR CAMPING SPOT
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-ivory-100 leading-[1.12]">
                Ready to disappear <br />
                <span className="italic font-normal text-gold">for two days?</span>
              </h2>
            </div>

            {/* Clean Editorial Metadata (No Boxes, No Pills) */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-warmgray-400">
              <span className="text-ivory-100">SEP 05–06</span>
              <div className="h-3.5 w-px bg-ivory-100/20" />
              <span>KAKKADAMPOYIL</span>
              <div className="h-3.5 w-px bg-ivory-100/20" />
              <span className="text-gold font-bold">₹1,799 / PERSON</span>
            </div>

            <p className="text-xs sm:text-sm text-warmgray-400 font-sans leading-relaxed">
              Step away from the screen and join us for an authentic highland adventure. Spots are limited to preserve the intimate community feel of Strangers Camp.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.button
                onClick={onOpenBooking}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-forest hover:bg-forest-hover text-ivory-100 font-semibold text-xs tracking-wider uppercase shadow-2xl transition-all border border-white/10 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-ivory-100 shrink-0" />
                <span>BOOK VIA WHATSAPP</span>
              </motion.button>

              <a
                href="#reels"
                className="text-xs font-semibold uppercase tracking-widest text-warmgray-400 hover:text-ivory-100 transition-colors flex items-center justify-center gap-2 py-2"
              >
                <span>VIEW CAMP GALLERY</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
