import React from 'react';
import { motion } from 'framer-motion';
import { Play, MessageSquare } from 'lucide-react';
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Logo Brand Badge Header */}
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
            <div className="p-1 rounded-2xl glass-card border-emerald-500/40 bg-maagreen-dark/60 flex items-center gap-3 pr-4 shadow-lg shadow-emerald-950/50">
              <img
                src="/images/logo.png"
                alt="MAA MALA Logo"
                className="w-9 h-9 rounded-xl object-cover"
              />
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <span className="text-emerald-400 font-extrabold uppercase tracking-wider">MAA MALA™</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Official Creator & Media Gallery</span>
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15]"
          >
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-300">
              MAA MALA
            </span>{' '}
            Shorts & Reels
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
          >
            Explore high-impact visual stories, viral media moments, and authentic customer experiences from the official MAA MALA creative universe.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              href="#reels"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16, 185, 129, 0.35)' }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white font-bold text-base shadow-lg border border-white/20 transition-all"
            >
              <Play className="w-5 h-5 fill-white text-white" />
              <span>Watch MAA MALA Reels</span>
            </motion.a>

            <motion.a
              href="#testimonials"
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-card border border-white/15 text-slate-200 hover:text-white font-semibold text-base transition-all"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>Client Reviews</span>
            </motion.a>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            variants={itemVariants}
            className="mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl"
          >
            {HERO_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                className="p-5 rounded-3xl glass-card border border-white/10 text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
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
