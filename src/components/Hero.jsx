import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Compass, Calendar, MapPin, CheckCircle2, Tag, Flame, ShieldCheck, Mountain } from 'lucide-react';
import { HERO_STATS } from '../data/mockData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden atmospheric-fog">
      {/* Soft Atmospheric Fog & Mountain Silhouette Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-forest-600/20 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-gold-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Small Floating Event Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card border-forest-400/40 text-forest-300 text-xs sm:text-sm font-semibold tracking-wide shadow-moss-glow">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-500"></span>
              </span>
              <span className="text-gold-400 font-bold tracking-wider uppercase">Upcoming Camp • SEP 05–06</span>
              <span className="text-slate-500">•</span>
              <span className="text-cream">Kakkadampoyil</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-cream max-w-4xl leading-[1.12]"
          >
            Strangers Camp @ <br />
            <span className="text-gradient-gold">
              Kakkadampoyil
            </span>
          </motion.h1>

          {/* Subheadline & Malayalam Tagline */}
          <motion.div variants={itemVariants} className="mt-6 flex flex-col items-center gap-2 max-w-2xl">
            <p className="text-xl sm:text-2xl font-bold text-emerald-300 tracking-wide">
              "പാട്ടും കഥകളുമായി കക്കാടംപൊയിലിൽ കൂടിയാലോ?"
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Experience an exclusive 2-day luxury outdoor getaway with MAA MALA™. Includes Tent & Cottage Stays, Offroad Jeep Safari, Night Campfire, Stream Hiking & Live Music.
            </p>
          </motion.div>

          {/* Two Premium Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              href="https://wa.me/919400921124?text=Hi%20MAA%20MALA,%20I%20want%20to%20book%20Strangers%20Camp%20at%20Kakkadampoyil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(53, 140, 103, 0.4)' }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-forest-600 to-gold-600 text-cream font-bold text-base shadow-xl border border-white/20 transition-all"
            >
              <PhoneCall className="w-5 h-5 text-cream" />
              <span>Book via WhatsApp</span>
            </motion.a>

            <motion.a
              href="#reels"
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-card border border-white/15 text-slate-200 hover:text-cream font-semibold text-base transition-all"
            >
              <Compass className="w-5 h-5 text-gold-400" />
              <span>View Camp Photos & Gallery</span>
            </motion.a>
          </motion.div>

          {/* Camp Details Card (Large Premium Card with Soft Border Glow) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="mt-14 w-full max-w-4xl rounded-3xl overflow-hidden glass-card border border-white/20 p-5 sm:p-6 relative shadow-luxury text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Side: High-Quality Poster Image */}
              <div className="md:col-span-5 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15 group">
                <img
                  src="/images/strangers_camp.jpg"
                  alt="MAA MALA Strangers Camp Kakkadampoyil Poster"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-charcoal-950/85 backdrop-blur-md text-gold-400 font-extrabold text-[10px] uppercase tracking-widest border border-gold-500/30">
                  OFFICIAL EVENT POSTER
                </div>
              </div>

              {/* Right Side: Clean Information Layout */}
              <div className="md:col-span-7 flex flex-col justify-between h-full gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-gold-400 uppercase tracking-widest mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>Kakkadampoyil, Kerala</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-black text-cream">
                    MAA MALA™ Strangers Camp
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="px-3.5 py-1.5 rounded-xl bg-forest-900/90 text-forest-300 border border-forest-500/30 text-xs font-bold flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-forest-400" />
                      <span>Sep 05–06</span>
                    </span>
                    <span className="px-3.5 py-1.5 rounded-xl bg-gold-600/20 text-gold-300 border border-gold-500/30 text-xs font-bold flex items-center gap-1.5">
                      <Tag className="w-4 h-4 text-gold-400" />
                      <span>₹1,799 / Head</span>
                    </span>
                  </div>
                </div>

                {/* Key Highlights Grid */}
                <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-200 font-medium py-3 border-y border-white/10">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Night Camping & Stay</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Offroad Jeep Safari</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Campfire & Music</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dinner & Breakfast</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Stream Hiking Trek</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Fun Games & Activities</span>
                  </div>
                </div>

                {/* Price & Contact Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Direct WhatsApp Booking</span>
                    <span className="text-base font-bold text-gold-400">+91 9400 921 124</span>
                  </div>

                  <a
                    href="https://wa.me/919400921124?text=Hi%20MAA%20MALA,%20I%20want%20to%20book%20Strangers%20Camp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-forest-600 hover:bg-forest-500 text-cream font-bold text-xs shadow-md transition-colors text-center"
                  >
                    Reserve Seats Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section (4 Elegant Stat Cards in a Row) */}
          <motion.div
            variants={itemVariants}
            className="mt-12 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl"
          >
            {HERO_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, borderColor: 'rgba(245, 158, 11, 0.4)' }}
                className="p-5 rounded-3xl glass-card border border-white/10 text-center relative overflow-hidden group shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-2xl sm:text-4xl font-extrabold text-cream tracking-tight text-gradient-gold">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
