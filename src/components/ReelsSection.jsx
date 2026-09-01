import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart, MessageCircle, Volume2, VolumeX, ExternalLink, X, CheckCircle2, MapPin, Radio } from 'lucide-react';
import { REELS_DATA } from '../data/mockData';
import InstagramIcon from './InstagramIcon';
import InstagramLiveEmbed from './InstagramLiveEmbed';

const CATEGORIES = ['Media Gallery', 'Expeditions', 'Hiking', 'Camp Life'];

export default function ReelsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Media Gallery');
  const [activeReelModal, setActiveReelModal] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [viewMode, setViewMode] = useState('gallery');

  const filteredReels = selectedCategory === 'Media Gallery'
    ? REELS_DATA
    : REELS_DATA.filter((r) => r.category === selectedCategory);

  return (
    <section id="reels" className="py-20 md:py-32 relative">
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-forest-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900 border border-forest-500/30 text-forest-300 text-xs font-bold uppercase tracking-widest mb-4">
            <InstagramIcon className="w-3.5 h-3.5 text-gold-400" />
            <span>@maa.mala_ • Live Stream</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-cream tracking-tight">
            Realtime <span className="text-gradient-gold">Instagram Stream</span>
          </h2>
          
          <p className="mt-4 text-slate-300 max-w-xl text-base sm:text-lg">
            Live updates, camp stories & real-time posts from{' '}
            <a
              href="https://www.instagram.com/maa.mala_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 underline font-bold hover:text-gold-300 transition-colors"
            >
              MAA MALA™
            </a>.
          </p>

          {/* Realtime Embed Toggle & Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="p-1 rounded-2xl glass-card border border-white/10 flex items-center gap-1">
              <button
                onClick={() => setViewMode('gallery')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  viewMode === 'gallery'
                    ? 'bg-gradient-to-r from-gold-500 to-forest-600 text-cream shadow-md'
                    : 'text-slate-400 hover:text-cream'
                }`}
              >
                Media Gallery
              </button>
              <button
                onClick={() => setViewMode('live')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'live'
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-cream shadow-md'
                    : 'text-slate-400 hover:text-cream'
                }`}
              >
                <Radio className="w-3.5 h-3.5 text-pink-300 animate-pulse" />
                <span>Realtime Instagram Embed</span>
              </button>
            </div>

            <a
              href="https://www.instagram.com/maa.mala_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-gold-500 text-cream font-bold text-xs shadow-lg hover:scale-105 transition-all border border-white/20"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @maa.mala_ Live</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Filter Buttons */}
          {viewMode === 'gallery' && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl glass-card border border-white/10">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      active ? 'text-cream' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="activeLuxuryCategory"
                        className="absolute inset-0 bg-gradient-to-r from-gold-500 to-forest-600 rounded-xl shadow-md -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Realtime Instagram Embed View */}
        {viewMode === 'live' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full flex flex-col items-center"
          >
            <div className="w-full max-w-xl p-4 rounded-3xl glass-card border border-white/15 shadow-luxury flex flex-col items-center">
              <InstagramLiveEmbed postUrl="https://www.instagram.com/maa.mala_/" />
            </div>
          </motion.div>
        ) : (
          /* Horizontal Momentum Scrollable Phone Mockup Cards */
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
                    boxShadow: '0 20px 45px -15px rgba(245, 158, 11, 0.35)',
                  }}
                  className="flex-none w-[285px] sm:w-[320px] rounded-[2.2rem] glass-card border border-white/15 overflow-hidden cursor-pointer snap-center group relative flex flex-col shadow-luxury"
                  onClick={() => setActiveReelModal(reel)}
                >
                  {/* Phone Notch & Header */}
                  <div className="p-4 flex items-center justify-between border-b border-white/10 bg-charcoal-950/80 z-10">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={reel.authorAvatar}
                        alt={reel.authorName}
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-gold-500/50"
                      />
                      <div className="flex flex-col text-left">
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-cream tracking-wide truncate max-w-[130px]">
                            {reel.username}
                          </span>
                          {reel.verified && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-forest-400 fill-forest-400/20" />
                          )}
                        </div>
                        <span className="text-[10px] text-gold-400 font-semibold">{reel.location}</span>
                      </div>
                    </div>
                    <InstagramIcon className="w-4 h-4 text-gold-400 opacity-80" />
                  </div>

                  {/* Thumbnail Image Aspect 9:14 */}
                  <div className="relative aspect-[9/14] w-full overflow-hidden bg-charcoal-950">
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                    {/* Top Audio Track Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-charcoal-950/85 backdrop-blur-md text-[10px] text-cream border border-white/10 max-w-[80%] truncate">
                        <Volume2 className="w-3 h-3 text-gold-400 shrink-0 animate-pulse" />
                        <span className="truncate">{reel.audioTrack}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-gold-600/90 text-[10px] font-extrabold text-cream uppercase tracking-wider">
                        REEL
                      </span>
                    </div>

                    {/* Center Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-cream shadow-xl group-hover:bg-gradient-to-tr group-hover:from-gold-500 group-hover:to-forest-600 transition-all duration-300"
                      >
                        <Play className="w-7 h-7 fill-cream ml-0.5" />
                      </motion.div>
                    </div>

                    {/* Bottom Caption & Stats */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-left flex flex-col justify-end">
                      <p className="text-xs text-slate-200 line-clamp-2 mb-3 font-medium drop-shadow">
                        {reel.caption}
                      </p>

                      <div className="flex items-center justify-between text-xs font-semibold text-slate-300 pt-2 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-gold-400">
                            <Heart className="w-3.5 h-3.5 fill-gold-400" />
                            {reel.likes}
                          </span>
                          <span className="flex items-center gap-1 text-forest-300">
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
        )}

        {/* Modal Player */}
        <AnimatePresence>
          {activeReelModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/90 backdrop-blur-xl"
              onClick={() => setActiveReelModal(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-lg bg-charcoal-900 rounded-3xl overflow-hidden border border-white/20 shadow-luxury"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-4 flex items-center justify-between border-b border-white/10 bg-charcoal-950/80">
                  <div className="flex items-center gap-3">
                    <img
                      src={activeReelModal.authorAvatar}
                      alt={activeReelModal.authorName}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-gold-500"
                    />
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-1 text-sm font-bold text-cream">
                        {activeReelModal.username}
                        {activeReelModal.verified && (
                          <CheckCircle2 className="w-4 h-4 text-forest-400 fill-forest-400/20" />
                        )}
                      </div>
                      <div className="text-xs text-gold-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{activeReelModal.location}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveReelModal(null)}
                    className="p-2 rounded-full bg-white/10 text-cream hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Video Stream */}
                <div className="relative aspect-[9/14] max-h-[480px] w-full bg-black flex items-center justify-center">
                  <video
                    src={activeReelModal.videoUrl}
                    poster={activeReelModal.thumbnail}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-charcoal-950/80 text-cream backdrop-blur-md border border-white/20 hover:scale-110 transition-all"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>

                {/* Modal Footer Controls */}
                <div className="p-5 bg-charcoal-950/95 flex flex-col gap-3 text-left">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {activeReelModal.caption}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-300">
                      <span className="flex items-center gap-1 text-gold-400">
                        <Heart className="w-4 h-4 fill-gold-400" />
                        {activeReelModal.likes}
                      </span>
                      <span className="flex items-center gap-1 text-forest-300">
                        <MessageCircle className="w-4 h-4" />
                        {activeReelModal.comments}
                      </span>
                    </div>

                    <a
                      href={activeReelModal.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-forest-600 text-cream text-xs font-bold hover:shadow-lg transition-all"
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
