import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center text-center text-ivory-100 overflow-hidden pt-28 pb-16">
      {/* Full-Viewport Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/camping1.png"
          alt="MAA MALA Strangers Camp Kakkadampoyil Atmosphere"
          className="w-full h-full object-cover object-center scale-105 filter contrast-[1.05]"
        />
        {/* Subtle Gradient Overlay for Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-nature-950 via-nature-950/60 to-nature-950/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 flex flex-col items-center my-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-5"
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-gold border border-gold/30 px-4 py-1.5 rounded-full bg-nature-950/50 backdrop-blur-sm shadow-md">
            STRANGERS CAMP · KAKKADAMPOYIL
          </span>
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight leading-[1.08] text-ivory-100 max-w-3xl"
        >
          Strangers Camp <br />
          <span className="italic font-normal text-gold">@ Kakkadampoyil</span>
        </motion.h1>

        {/* Malayalam & English Supporting Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 flex flex-col items-center gap-2.5 max-w-2xl"
        >
          <p className="text-xl sm:text-2xl font-serif italic text-ivory-200">
            "പാട്ടും കഥകളുമായി കക്കാടംപൊയിലിൽ കൂടിയാലോ?"
          </p>
          <p className="text-xs sm:text-sm text-warmgray-400 leading-relaxed font-sans max-w-xl">
            An exclusive 2-day outdoor getaway in the misty highlands of Kakkadampoyil. Tent stays, offroad jeep safari, campfire jam & stream hiking.
          </p>
        </motion.div>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <motion.a
            href="https://wa.me/919400921124?text=Hi%20MAA%20MALA,%20I%20want%20to%20book%20Strangers%20Camp%20at%20Kakkadampoyil"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-forest hover:bg-forest-hover text-ivory-100 font-semibold text-xs tracking-wider uppercase shadow-2xl transition-all border border-white/10"
          >
            <PhoneCall className="w-4 h-4 text-ivory-100 shrink-0" />
            <span>BOOK VIA WHATSAPP</span>
          </motion.a>

          <a
            href="#reels"
            className="text-xs font-semibold uppercase tracking-widest text-warmgray-400 hover:text-ivory-100 transition-colors flex items-center gap-2 py-2"
          >
            <span>VIEW CAMP GALLERY</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold" />
          </a>
        </motion.div>
      </div>

      {/* Experience Indicator (Bottom-Left) */}
      <div className="absolute bottom-6 left-6 sm:left-10 z-10 hidden sm:flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-warmgray-400 border border-ivory-100/10 px-3.5 py-1.5 rounded-full bg-nature-950/60 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        <span>2 DAYS · KAKKADAMPOYIL · KERALA</span>
      </div>

      {/* Minimal Scroll Cue Indicator (Bottom-Center) */}
      <motion.a
        href="#editorial-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[9.5px] font-semibold tracking-[0.25em] uppercase text-warmgray-400 hover:text-ivory-100 transition-colors cursor-pointer group"
      >
        <span>SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-gold" />
        </motion.div>
      </motion.a>
    </section>
  );
}
