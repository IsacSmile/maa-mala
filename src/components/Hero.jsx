import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Flame, PhoneCall, Calendar, MapPin, CheckCircle, Tag } from 'lucide-react';
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
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Nature Ambient Background Mesh & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest-600/20 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-terracotta-500/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Outdoor Event Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full glass-card border-forest-500/40 text-forest-300 text-xs sm:text-sm font-semibold tracking-wide shadow-moss-glow">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta-500"></span>
              </span>
              <span className="text-terracotta-400 font-bold">Upcoming Camp • SEP 05-06</span>
              <span className="text-slate-500">•</span>
              <span className="text-cream">Kakkadampoyil Strangers Camp</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-cream max-w-4xl leading-[1.12]"
          >
             Strangers Camp @ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-terracotta-400">
              Kakkadampoyil
            </span>
          </motion.h1>

          {/* Malayalam Tagline & English Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-2xl text-emerald-300 font-bold max-w-2xl leading-relaxed"
          >
            "പാട്ടും കഥകളുമായി കക്കാടംപൊയിലിൽ കൂടിയാലോ?"
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl font-normal"
          >
            Join MAA MALA™ for an unforgettable 2-day wilderness experience! Enjoy Stay, Jeep Safari, Campfire, Delicious Food, Stream Hiking, Games & Music.
          </motion.p>

          {/* Call To Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              href="https://wa.me/919400921124?text=Hi%20MAA%20MALA,%20I%20want%20to%20book%20Strangers%20Camp%20at%20Kakkadampoyil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(234, 88, 12, 0.4)' }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-terracotta-600 via-terracotta-500 to-forest-600 text-cream font-bold text-base shadow-xl border border-white/20 transition-all"
            >
              <PhoneCall className="w-5 h-5 text-cream" />
              <span>Book via WhatsApp (+91 9400 921 124)</span>
            </motion.a>

            <motion.a
              href="#reels"
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-card border border-white/15 text-slate-200 hover:text-cream font-semibold text-base transition-all"
            >
              <Compass className="w-5 h-5 text-forest-400" />
              <span>View Camp Poster & Gallery</span>
            </motion.a>
          </motion.div>

          {/* Featured Official Event Poster Card */}
          <motion.div
            variants={itemVariants}
            className="mt-12 w-full max-w-3xl rounded-3xl overflow-hidden glass-card border border-white/20 p-4 relative group shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Poster Image */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <img
                  src="/images/strangers_camp.jpg"
                  alt="MAA MALA Strangers Camp Kakkadampoyil Poster"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md text-terracotta-400 font-extrabold text-xs border border-terracotta-500/30">
                  OFFICIAL EVENT POSTER
                </div>
              </div>

              {/* Event Details Right Column */}
              <div className="flex flex-col text-left gap-4 p-2">
                <div className="flex items-center gap-2 text-xs font-extrabold text-terracotta-400 uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Kakkadampoyil, Kerala</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-cream">
                  MAA MALA™ Strangers Camp
                </h3>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1.5 rounded-xl bg-forest-500/20 text-forest-300 border border-forest-500/30 text-xs font-bold flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-forest-400" />
                    <span>SEP 05 - 06</span>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-terracotta-500/20 text-terracotta-300 border border-terracotta-500/30 text-xs font-bold flex items-center gap-1.5">
                    <Tag className="w-4 h-4 text-terracotta-400" />
                    <span>₹1799 / Head</span>
                  </span>
                </div>

                {/* Included Activities Checkbox List */}
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-200 font-medium pt-2">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-forest-400" />
                    <span>Tent & Cottage Stay</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-forest-400" />
                    <span>Offroad Jeep Safari</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-forest-400" />
                    <span>Night Campfire</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-forest-400" />
                    <span>Dinner & Breakfast</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-forest-400" />
                    <span>Stream Hiking</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-forest-400" />
                    <span>Music & Fun Games</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">For Direct Booking</span>
                    <span className="text-sm font-bold text-cream">+91 9400 921 124</span>
                  </div>
                  <a
                    href="tel:+919400921124"
                    className="px-4 py-2 rounded-xl bg-forest-600 hover:bg-forest-500 text-cream font-bold text-xs transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistics Grid Metrics */}
          <motion.div
            variants={itemVariants}
            className="mt-12 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl"
          >
            {HERO_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, borderColor: 'rgba(82, 183, 136, 0.4)' }}
                className="p-5 rounded-3xl glass-card border border-white/10 text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-forest-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-2xl sm:text-4xl font-extrabold text-cream tracking-tight text-gradient">
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
