import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Flame, Trees, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
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
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-36 overflow-hidden">
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
          {/* Outdoor Pill Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full glass-card border-forest-500/40 text-forest-300 text-xs sm:text-sm font-semibold tracking-wide shadow-moss-glow">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta-500"></span>
              </span>
              <span className="text-terracotta-400 font-bold">Season 2026 Expeditions</span>
              <span className="text-slate-500">•</span>
              <span className="text-cream">Unplug in Pure Nature</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-cream max-w-4xl leading-[1.12]"
          >
            Find Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta-400 via-yellow-200 to-forest-400">
              Wilderness Adventure
            </span>
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
          >
            Join **Campers for Adventures** to discover majestic mountain trails, starry night campfires, alpine lake kayaking, and eco-guided outdoor journeys.
          </motion.p>

          {/* Call To Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              href="#reels"
              whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(234, 88, 12, 0.4)' }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-terracotta-600 via-terracotta-500 to-forest-600 text-cream font-bold text-base shadow-xl border border-white/20 transition-all"
            >
              <Compass className="w-5 h-5 text-cream" />
              <span>Explore Trips</span>
            </motion.a>

            <motion.a
              href="#testimonials"
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-card border border-white/15 text-slate-200 hover:text-cream font-semibold text-base transition-all"
            >
              <Flame className="w-5 h-5 text-terracotta-400" />
              <span>Book Your Adventure</span>
            </motion.a>
          </motion.div>

          {/* Outdoor Hero Feature Card Preview */}
          <motion.div
            variants={itemVariants}
            className="mt-14 w-full max-w-4xl rounded-3xl overflow-hidden glass-card border border-white/15 p-3 relative group shadow-2xl"
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden">
              <img
                src="/images/camping1.png"
                alt="Campers for Adventures - Campfire Night"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-terracotta-400 uppercase tracking-widest mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Olympic National Wilderness</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-cream">
                    Nightfall Campfire & Astro-Stargazing Expedition
                  </h3>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-forest-900/80 backdrop-blur-md border border-white/10 text-xs font-bold text-forest-300">
                  <ShieldCheck className="w-4 h-4 text-forest-400" />
                  <span>100% Eco-Guided</span>
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
