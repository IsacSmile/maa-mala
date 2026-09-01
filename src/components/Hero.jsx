import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative h-[99vh] min-h-[99vh] flex items-center justify-center text-center text-ivory-100 overflow-hidden pt-24 pb-16">
      {/* Full-Viewport Camping Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/camping1.png"
          alt="MAA MALA Strangers Camp Atmosphere"
          className="w-full h-full object-cover object-center filter contrast-[1.03]"
        />
        {/* Light, Balanced Overlay allowing natural photography to shine */}
        <div className="absolute inset-0 bg-gradient-to-t from-nature-950 via-nature-950/45 to-nature-950/25" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 flex flex-col items-center my-auto">
        {/* Simple Label (No Pill, No Box) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-3"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
            STRANGERS CAMP · KAKKADAMPOYIL
          </span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight leading-[1.08] text-ivory-100 max-w-3xl"
        >
          Strangers Camp <br />
          <span className="italic font-normal text-gold">@ Kakkadampoyil</span>
        </motion.h1>

        {/* Malayalam Slogan & 1-2 Line Supporting Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mt-5 flex flex-col items-center gap-2 max-w-2xl"
        >
          <p className="text-xl sm:text-2xl font-serif italic text-ivory-200">
            "പാട്ടും കഥകളുമായി കക്കാടംപൊയിലിൽ കൂടിയാലോ?"
          </p>
          <p className="text-xs sm:text-sm text-warmgray-400 leading-relaxed font-sans max-w-lg">
            An intimate two-day escape into the misty highlands of Kakkadampoyil — tent stays, jeep trails, campfire nights and stream hikes.
          </p>
        </motion.div>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <motion.button
            onClick={onOpenBooking}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-forest hover:bg-forest-hover text-ivory-100 font-semibold text-xs tracking-wider uppercase shadow-2xl transition-all border border-white/10 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-ivory-100 shrink-0" />
            <span>BOOK VIA WHATSAPP</span>
          </motion.button>

          <a
            href="#reels"
            className="text-xs font-semibold uppercase tracking-widest text-warmgray-400 hover:text-ivory-100 transition-colors flex items-center gap-2 py-2"
          >
            <span>VIEW CAMP GALLERY</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold" />
          </a>
        </motion.div>
      </div>

      {/* Tiny Editorial Metadata (Bottom) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center gap-6 text-[10px] font-semibold tracking-[0.2em] uppercase text-warmgray-400">
        <span>SEP 05–06</span>
        <div className="h-3 w-px bg-ivory-100/20" />
        <span className="text-ivory-100">KAKKADAMPOYIL</span>
        <div className="h-3 w-px bg-ivory-100/20" />
        <span className="text-gold">₹1,799 / PERSON</span>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#editorial-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 right-6 sm:right-10 z-10 hidden md:flex items-center gap-2 text-[9.5px] font-semibold tracking-widest uppercase text-warmgray-400 hover:text-ivory-100 transition-colors cursor-pointer"
      >
        <span>EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 text-gold animate-bounce" />
      </motion.a>
    </section>
  );
}
