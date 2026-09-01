import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { REELS_DATA } from '../data/mockData';
import InstagramIcon from './InstagramIcon';

export default function ReelsSection() {
  const [activeReelModal, setActiveReelModal] = useState(null);
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="reels" className="py-24 md:py-36 bg-nature-950 text-ivory-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-ivory-100/10 pb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3 block">
              @MAA.MALA_ EDITORIAL STREAM
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-ivory-100">
              Life at Camp.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/maa.mala_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-widest text-warmgray-400 hover:text-ivory-100 transition-colors flex items-center gap-2"
            >
              <InstagramIcon className="w-4 h-4 text-gold" />
              <span>Follow Live Stream</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={handleScrollLeft}
                className="w-10 h-10 rounded-full border border-ivory-100/20 text-ivory-100 hover:bg-ivory-100 hover:text-nature-950 flex items-center justify-center transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleScrollRight}
                className="w-10 h-10 rounded-full border border-ivory-100/20 text-ivory-100 hover:bg-ivory-100 hover:text-nature-950 flex items-center justify-center transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Tall Portrait Gallery */}
        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex gap-8 overflow-x-auto pb-6 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {REELS_DATA.map((reel, index) => (
            <motion.div
              key={reel.id}
              whileHover={{ y: -6 }}
              className="flex-none w-[280px] sm:w-[340px] aspect-[9/14] rounded-xl overflow-hidden relative cursor-pointer snap-start group shadow-2xl border border-ivory-100/10"
              onClick={() => setActiveReelModal(reel)}
            >
              {/* Media Poster */}
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nature-950/90 via-nature-950/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

              {/* Minimal Play Icon Center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-ivory-100 text-nature-950 flex items-center justify-center shadow-xl">
                  <Play className="w-5 h-5 fill-nature-950 text-nature-950 ml-0.5" />
                </div>
              </div>

              {/* Minimal Editorial Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-gold block mb-1">
                  {reel.category}
                </span>
                <h3 className="text-base font-serif font-bold text-ivory-100 line-clamp-1">
                  {reel.title}
                </h3>
                <p className="text-xs text-warmgray-400 mt-1 line-clamp-2 font-normal">
                  {reel.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Player */}
        <AnimatePresence>
          {activeReelModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-nature-950/95 backdrop-blur-xl"
              onClick={() => setActiveReelModal(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="relative w-full max-w-md bg-nature-900 rounded-xl overflow-hidden border border-ivory-100/15 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 flex items-center justify-between border-b border-ivory-100/10">
                  <span className="text-xs font-semibold uppercase tracking-widest text-ivory-100">
                    {activeReelModal.title}
                  </span>
                  <button
                    onClick={() => setActiveReelModal(null)}
                    className="p-1.5 text-warmgray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative aspect-[9/14] w-full bg-black">
                  <video
                    src={activeReelModal.videoUrl}
                    poster={activeReelModal.thumbnail}
                    autoPlay
                    loop
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 text-left">
                  <p className="text-xs text-warmgray-400 leading-relaxed">
                    {activeReelModal.caption}
                  </p>
                  <div className="mt-4 pt-3 border-t border-ivory-100/10 flex items-center justify-between text-xs">
                    <span className="text-gold font-semibold">{activeReelModal.likes} Likes</span>
                    <a
                      href={activeReelModal.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ivory-100 hover:underline flex items-center gap-1 font-bold"
                    >
                      <span>View on Instagram</span>
                      <ExternalLink className="w-3 h-3" />
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
