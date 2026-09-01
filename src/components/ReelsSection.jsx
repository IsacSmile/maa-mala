import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart, MessageCircle, Volume2, VolumeX, ExternalLink, X, CheckCircle, UserPlus, Flame } from 'lucide-react';
import { REELS_DATA } from '../data/mockData';
import InstagramIcon from './InstagramIcon';

const CATEGORIES = ['All', 'Trending', 'Viral', 'Design', 'Lifestyle'];

export default function ReelsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeReelModal, setActiveReelModal] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  const filteredReels = selectedCategory === 'All'
    ? REELS_DATA
    : REELS_DATA.filter((r) => r.category === selectedCategory);

  return (
    <section id="reels" className="py-20 md:py-32 relative">
      {/* Glow background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Scroll-Triggered Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-widest mb-4">
            <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
            <span>Official Feed • @maa.mala_</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-insta">MAA MALA Reels</span> & Media
          </h2>
          
          <p className="mt-4 text-slate-300 max-w-xl text-base sm:text-lg">
            Explore curated short-form videos embedded directly from our official Instagram profile{' '}
            <a
              href="https://www.instagram.com/maa.mala_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 underline font-semibold hover:text-pink-300 transition-colors"
            >
              @maa.mala_
            </a>.
          </p>

          {/* Instagram Follow Banner */}
          <motion.a
            href="https://www.instagram.com/maa.mala_/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold text-sm shadow-xl shadow-pink-600/20 border border-white/20"
          >
            <InstagramIcon className="w-5 h-5" />
            <span>Follow @maa.mala_ on Instagram</span>
            <UserPlus className="w-4 h-4 ml-1" />
          </motion.a>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl glass-card border border-white/10">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-pink-600 rounded-xl shadow-md -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Reels Horizontal Scroll Container with Momentum */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 px-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {filteredReels.map((reel, index) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 20px 40px -15px rgba(236, 72, 153, 0.3)',
                }}
                className="flex-none w-[280px] sm:w-[320px] rounded-3xl glass-card border border-white/10 overflow-hidden cursor-pointer snap-center group relative flex flex-col"
                onClick={() => setActiveReelModal(reel)}
              >
                {/* Reel Header - Author Profile */}
                <div className="p-4 flex items-center justify-between border-b border-white/5 bg-slate-950/40 z-10">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={reel.authorAvatar}
                      alt={reel.authorName}
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-pink-500/50"
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-white tracking-wide truncate max-w-[120px]">
                          {reel.username}
                        </span>
                        {reel.verified && (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400">{reel.category}</span>
                    </div>
                  </div>
                  <InstagramIcon className="w-4 h-4 text-pink-400 opacity-80" />
                </div>

                {/* Reel Thumbnail Preview Aspect 9:14 */}
                <div className="relative aspect-[9/14] w-full overflow-hidden bg-slate-950">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Audio Badge Top */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/60 backdrop-blur-md text-[10px] text-slate-200 border border-white/10 max-w-[80%] truncate">
                      <Volume2 className="w-3 h-3 text-pink-400 shrink-0 animate-pulse" />
                      <span className="truncate">{reel.audioTrack}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-pink-500/80 text-[10px] font-extrabold text-white uppercase tracking-wider">
                      REEL
                    </span>
                  </div>

                  {/* Central Play Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:bg-gradient-to-tr group-hover:from-emerald-600 group-hover:to-pink-500 transition-all duration-300"
                    >
                      <Play className="w-7 h-7 fill-white ml-0.5" />
                    </motion.div>
                  </div>

                  {/* Bottom Reel Caption & Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left flex flex-col justify-end">
                    <p className="text-xs text-slate-200 line-clamp-2 mb-3 font-medium drop-shadow">
                      {reel.caption}
                    </p>

                    <div className="flex items-center justify-between text-xs font-semibold text-slate-300 pt-2 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-pink-400">
                          <Heart className="w-3.5 h-3.5 fill-pink-400" />
                          {reel.likes}
                        </span>
                        <span className="flex items-center gap-1 text-emerald-300">
                          <MessageCircle className="w-3.5 h-3.5" />
                          {reel.comments}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400">{reel.views} views</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Modal Video Player for Instagram Reel */}
        <AnimatePresence>
          {activeReelModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl"
              onClick={() => setActiveReelModal(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-lg bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-4 flex items-center justify-between border-b border-white/10 bg-slate-950/80">
                  <div className="flex items-center gap-3">
                    <img
                      src={activeReelModal.authorAvatar}
                      alt={activeReelModal.authorName}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-pink-500"
                    />
                    <div>
                      <div className="flex items-center gap-1 text-sm font-bold text-white">
                        {activeReelModal.username}
                        {activeReelModal.verified && (
                          <CheckCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                        )}
                      </div>
                      <div className="text-xs text-slate-400">{activeReelModal.authorName}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveReelModal(null)}
                    className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Simulated Reel Video Stream */}
                <div className="relative aspect-[9/14] max-h-[500px] w-full bg-black flex items-center justify-center">
                  <video
                    src={activeReelModal.videoUrl}
                    poster={activeReelModal.thumbnail}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Mute/Unmute Overlay Control */}
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/70 text-white backdrop-blur-md border border-white/20 hover:scale-110 transition-all"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>

                {/* Modal Footer Controls */}
                <div className="p-5 bg-slate-950/90 flex flex-col gap-3">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {activeReelModal.caption}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-300">
                      <span className="flex items-center gap-1 text-pink-400">
                        <Heart className="w-4 h-4 fill-pink-400" />
                        {activeReelModal.likes}
                      </span>
                      <span className="flex items-center gap-1 text-emerald-300">
                        <MessageCircle className="w-4 h-4" />
                        {activeReelModal.comments}
                      </span>
                    </div>

                    <a
                      href={activeReelModal.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-pink-600 to-purple-600 text-white text-xs font-bold hover:shadow-lg transition-all"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                      <span>View on @maa.mala_</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
