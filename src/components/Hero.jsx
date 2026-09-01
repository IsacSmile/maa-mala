import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight, MapPin, Calendar, Tag, Star, Check } from 'lucide-react';
import { HERO_STATS } from '../data/mockData';

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-48 md:pb-36 bg-nature-950 text-ivory-100 overflow-hidden">
      {/* Subtle Atmospheric Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-forest/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6 block"
          >
            STRANGERS CAMP · KAKKADAMPOYIL
          </motion.span>

          {/* Large Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight leading-[1.1] text-ivory-100"
          >
            Strangers Camp @ <br />
            <span className="italic font-normal text-gold">Kakkadampoyil</span>
          </motion.h1>

          {/* Malayalam & English Supporting Statement */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 flex flex-col items-center gap-3 max-w-2xl"
          >
            <p className="text-xl sm:text-2xl font-serif italic text-ivory-200">
              "പാട്ടും കഥകളുമായി കക്കാടംപൊയിലിൽ കൂടിയാലോ?"
            </p>
            <p className="text-sm sm:text-base text-warmgray-400 leading-relaxed font-sans max-w-xl">
              An exclusive 2-day outdoor getaway in the misty hills of Kakkadampoyil. Featuring Tent Stays, Offroad Jeep Safari, Campfire Jam & Stream Hiking.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <motion.a
              href="https://wa.me/919400921124?text=Hi%20MAA%20MALA,%20I%20want%20to%20book%20Strangers%20Camp%20at%20Kakkadampoyil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 rounded-lg bg-forest hover:bg-forest-hover text-ivory-100 font-semibold text-xs tracking-wider uppercase shadow-xl transition-all border border-white/10"
            >
              <PhoneCall className="w-4 h-4 text-ivory-100 shrink-0" />
              <span>Book via WhatsApp</span>
            </motion.a>

            <a
              href="#reels"
              className="text-xs font-semibold uppercase tracking-widest text-warmgray-400 hover:text-ivory-100 transition-colors flex items-center gap-2 py-2"
            >
              <span>View Camp Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold" />
            </a>
          </motion.div>
        </div>

        {/* Camp Details Editorial Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 sm:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-t border-ivory-100/10 pt-16"
        >
          {/* Left: Large Cinematic Imagery */}
          <div className="lg:col-span-6 relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] w-full rounded-xl overflow-hidden shadow-2xl group border border-white/10">
            <img
              src="/images/strangers_camp.jpg"
              alt="MAA MALA Strangers Camp Kakkadampoyil Poster"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nature-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-left">
              <span className="text-[10px] font-semibold tracking-widest uppercase text-gold block mb-1">
                EXCLUSIVITY GUARANTEED
              </span>
              <span className="text-lg font-serif font-bold text-ivory-100">
                Kakkadampoyil Highlands Edition
              </span>
            </div>
          </div>

          {/* Right: Editorial Metadata & Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left gap-8 pl-0 lg:pl-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold block mb-2">
                CAMP DETAILS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-ivory-100">
                Strangers Camp Experience
              </h2>
              <p className="mt-3 text-sm text-warmgray-400 leading-relaxed font-sans max-w-lg">
                Join a curated group of outdoor enthusiasts. Reconnect with nature, enjoy live campfire music, and explore hidden mountain streams in total peace.
              </p>
            </div>

            {/* Editorial Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-ivory-100/10">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-warmgray-400 block mb-1">
                  LOCATION
                </span>
                <span className="text-sm font-semibold text-ivory-100">
                  Kakkadampoyil
                </span>
              </div>
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-warmgray-400 block mb-1">
                  DATE
                </span>
                <span className="text-sm font-semibold text-ivory-100">
                  Sep 05–06
                </span>
              </div>
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-warmgray-400 block mb-1">
                  PACKAGE
                </span>
                <span className="text-sm font-extrabold text-gold">
                  ₹1,799 / Head
                </span>
              </div>
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-warmgray-400 block mb-1">
                  RATING
                </span>
                <span className="text-sm font-semibold text-ivory-100 flex items-center gap-1">
                  4.9 <Star className="w-3.5 h-3.5 fill-gold text-gold inline" />
                </span>
              </div>
            </div>

            {/* Inclusions List */}
            <div className="space-y-2.5 text-xs font-medium text-ivory-200">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span>Tent & Cottage Camping Accommodations</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span>Offroad Jeep Safari & Stream Hiking Trail</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span>Night Campfire Jam Session & Live Music</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span>Dinner & Breakfast Food Included</span>
              </div>
            </div>

            {/* Direct Booking Link */}
            <div className="pt-2">
              <a
                href="https://wa.me/919400921124?text=Hi%20MAA%20MALA,%20I%20want%20to%20book%20Strangers%20Camp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-ivory-100 hover:text-gold transition-colors"
              >
                <span>Reserve Seats Direct via WhatsApp (+91 9400 921 124)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Clean Metadata Horizontal Strip (Stats) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 py-8 border-y border-ivory-100/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {HERO_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center ${
                idx !== HERO_STATS.length - 1 ? 'md:border-r md:border-ivory-100/10' : ''
              }`}
            >
              <span className="text-3xl sm:text-4xl font-serif font-extrabold text-ivory-100">
                {stat.value}
              </span>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-warmgray-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
