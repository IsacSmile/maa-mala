import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart, MessageCircle, Volume2, VolumeX, ExternalLink, X, CheckCircle2, MapPin, Radio, ChevronLeft, ChevronRight } from 'lucide-react';
import { REELS_DATA } from '../data/mockData';
import InstagramIcon from './InstagramIcon';
import InstagramLiveEmbed from './InstagramLiveEmbed';

const CATEGORIES = ['Media Gallery', 'Expeditions', 'Hiking', 'Camp Life'];

export default function ReelsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Media Gallery');
  const [activeReelModal, setActiveReelModal] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [viewMode, setViewMode] = useState('gallery');
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollRef = useRef(null);

  const filteredReels = selectedCategory === 'Media Gallery'
    ? REELS_DATA
    : REELS_DATA.filter((r) => r.category === selectedCategory);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const handleScrollProgress = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const index = Math.round((scrollLeft / (scrollWidth - clientWidth)) * (filteredReels.length - 1));
      setActiveIndex(Math.max(0, Math.min(index, filteredReels.length - 1)));
    }
  };

  return (
    <section id="reels" className="py-20 md:py-32 relative overflow-hidden">
      {/* Editorial Atmospheric Mesh Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-forest-600/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-xl">
            <InstagramIcon className="w-3.5 h-3.5 text-gold-400" />
            <span>@maa.mala_ • Editorial Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-cream tracking-tight leading-tight">
            Realtime <span className="text-gradient-gold">Instagram</span> Stream
          </h2>
          
          <p className="mt-4 text-slate-300 max-w-xl text-sm sm:text-base leading-relaxed">
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

          {/* Controls Bar: White & Black Trigger Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="p-1.5 rounded-full bg-black/90 border border-white/20 shadow-2xl flex items-center gap-1.5 backdrop-blur-xl">
              <button
                onClick={() => setViewMode('gallery')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                  viewMode === 'gallery'
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Media Gallery
              </button>
              <button
                onClick={() => setViewMode('live')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-1.5 ${
                  viewMode === 'live'
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Radio className="w-3.5 h-3.5 text-black animate-pulse" />
                <span>Realtime Instagram Embed</span>
              </button>
            </div>

            {/* High Contrast White & Black Trigger Button */}
            <a
              href="https://www.instagram.com/maa.mala_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-extrabold text-xs shadow-xl hover:bg-slate-200 hover:scale-105 transition-all border border-white/40"
            >
              <InstagramIcon className="w-4 h-4 text-black" />
              <span>Follow @maa.mala_ Live</span>
              <ExternalLink className="w-3.5 h-3.5 text-black opacity-80" />
            </a>
          </div>

          {/* White & Black Refined Category Filter Bar */}
          {viewMode === 'gallery' && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-black/90 border border-white/20 shadow-2xl backdrop-blur-xl">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                      active ? 'bg-white text-black shadow-md scale-105' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Realtime Embed View */}
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
          /* Custom Editorial Magazine Carousel Layout */
          <div className="relative">
            {/* Top Navigation Controls with White & Black Trigger Buttons */}
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-xs font-extrabold text-slate-300 uppercase tracking-widest">
                Showing {filteredReels.length} Outdoor Stories
              </span>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={handleScrollLeft}
                  className="w-10 h-10 rounded-full bg-white text-black border border-white flex items-center justify-center font-extrabold shadow-xl hover:bg-slate-200 transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={handleScrollRight}
                  className="w-10 h-10 rounded-full bg-white text-black border border-white flex items-center justify-center font-extrabold shadow-xl hover:bg-slate-200 transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </motion.button>
              </div>
            </div>

            {/* Horizontal Momentum Container */}
            <motion.div
              ref={scrollRef}
              onScroll={handleScrollProgress}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex gap-6 overflow-x-auto pb-8 pt-2 px-2 no-scrollbar scroll-smooth snap-x snap-mandatory items-end"
            >
              {filteredReels.map((reel, index) => {
                const heightAspects = ['aspect-[4/5]', 'aspect-[9/14]', 'aspect-[4/5]', 'aspect-[3/4]', 'aspect-[9/14]'];
                const cardAspect = heightAspects[index % heightAspects.length];

                return (
                  <motion.div
                    key={reel.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      boxShadow: '0 25px 50px -15px rgba(245, 158, 11, 0.3)',
                    }}
                    className={`flex-none w-[290px] sm:w-[330px] rounded-[2rem] glass-card border border-white/15 overflow-hidden cursor-pointer snap-center group relative flex flex-col shadow-luxury ${cardAspect}`}
                    onClick={() => setActiveReelModal(reel)}
                  >
                    {/* Background Parallax Image with Cinematic Overlay */}
                    <div className="absolute inset-0 bg-charcoal-950 overflow-hidden">
                      <img
                        src={reel.thumbnail}
                        alt={reel.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-black/40 opacity-90 group-hover:opacity-75 transition-opacity" />
                    </div>

                    {/* Top Editorial Bar */}
                    <div className="relative p-4 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-white/10">
                        <img
                          src={reel.authorAvatar}
                          alt={reel.authorName}
                          className="w-6 h-6 rounded-full object-cover ring-1 ring-gold-400"
                        />
                        <span className="text-xs font-bold text-cream truncate max-w-[110px]">
                          {reel.username}
                        </span>
                        {reel.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-forest-400 fill-forest-400/20" />
                        )}
                      </div>

                      <div className="px-2.5 py-1 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest shadow-md">
                        REEL
                      </div>
                    </div>

                    {/* Center Play Overlay Icon (White & Black Trigger Button) */}
                    <div className="relative flex-1 flex items-center justify-center z-10">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 rounded-full bg-white text-black border border-white flex items-center justify-center shadow-2xl group-hover:bg-slate-200 transition-all duration-300"
                      >
                        <Play className="w-6 h-6 fill-black text-black ml-0.5" />
                      </motion.div>
                    </div>

                    {/* Bottom Editorial Caption & Stats Overlay */}
                    <div className="relative p-5 z-10 text-left flex flex-col justify-end">
                      <div className="flex items-center gap-1.5 text-gold-400 text-xs font-bold mb-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{reel.location}</span>
                      </div>

                      <p className="text-xs text-slate-200 line-clamp-2 mb-3 font-medium leading-relaxed drop-shadow">
                        {reel.caption}
                      </p>

                      <div className="flex items-center justify-between text-xs font-semibold text-slate-300 pt-2.5 border-t border-white/15">
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
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-4 sm:hidden">
              {filteredReels.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === activeIndex ? 'w-6 bg-white' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>
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
                    className="p-2 rounded-full bg-white text-black hover:bg-slate-200 transition-colors font-bold"
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
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-white text-black hover:bg-slate-200 backdrop-blur-md border border-white shadow-lg transition-all"
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
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-extrabold hover:bg-slate-200 transition-all shadow-md"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 text-black" />
                      <span>View on @maa.mala_</span>
                      <ExternalLink className="w-3 h-3 text-black opacity-80" />
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
