import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import { useInstagramFeed } from '../hooks/useInstagramFeed';
import InstagramIcon from './InstagramIcon';

export default function ReelsSection() {
  const { feed, loading, error, refetch } = useInstagramFeed();
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
              @MAA.MALA · EDITORIAL STREAM
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
              <span>FOLLOW LIVE STREAM</span>
              <ExternalLink className="w-3.5 h-3.5 text-gold" />
            </a>

            {/* Circular Navigation Controls */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={handleScrollLeft}
                className="w-10 h-10 rounded-full border border-ivory-100/20 text-ivory-100 hover:bg-ivory-100 hover:text-nature-950 flex items-center justify-center transition-all"
                aria-label="Previous posts"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleScrollRight}
                className="w-10 h-10 rounded-full border border-ivory-100/20 text-ivory-100 hover:bg-ivory-100 hover:text-nature-950 flex items-center justify-center transition-all"
                aria-label="Next posts"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Loading State: Skeletons */}
        {loading && (
          <div className="flex gap-8 overflow-hidden pb-6">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="flex-none w-[280px] sm:w-[340px] aspect-[9/14] rounded-xl bg-nature-900 animate-pulse border border-ivory-100/5"
              />
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="py-16 text-center border border-ivory-100/10 rounded-xl bg-nature-900/60 p-8 max-w-xl mx-auto">
            <p className="text-sm text-warmgray-400 font-sans mb-4">
              Unable to load the latest camp stories from @maa.mala_.
            </p>
            <button
              onClick={refetch}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-forest text-ivory-100 text-xs font-semibold uppercase tracking-wider shadow-md hover:bg-forest-hover transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Stream</span>
            </button>
          </div>
        )}

        {/* Live Instagram Media Carousel */}
        {!loading && !error && (
          <motion.div
            ref={scrollRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex gap-8 overflow-x-auto pb-6 no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {feed.map((post) => {
              const isVideo = post.media_type === 'VIDEO' || post.media_type === 'REEL';

              return (
                <motion.a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  className="flex-none w-[280px] sm:w-[340px] aspect-[9/14] rounded-xl overflow-hidden relative cursor-pointer snap-start group shadow-2xl border border-ivory-100/10 bg-nature-900"
                >
                  {/* Poster / Media Image */}
                  <img
                    src={post.thumbnail_url || post.media_url}
                    alt={post.caption || 'Instagram Post @maa.mala_'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nature-950/90 via-nature-950/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                  {/* Centered Play Icon for Video / Reel Media */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-ivory-100/90 text-nature-950 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-ivory-100 transition-all duration-300">
                        <Play className="w-5 h-5 fill-nature-950 text-nature-950 ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Minimal Editorial Overlay Text */}
                  <div className="absolute bottom-6 left-6 right-6 text-left">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-gold">
                        {post.category || (isVideo ? 'REEL' : 'PHOTO')}
                      </span>
                      <InstagramIcon className="w-3.5 h-3.5 text-ivory-100/60 group-hover:text-gold transition-colors" />
                    </div>

                    <p className="text-xs text-ivory-200 line-clamp-2 font-normal leading-relaxed">
                      {post.caption}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-ivory-100/10 flex items-center justify-between text-[11px] text-warmgray-400">
                      <span>@{post.username || 'maa.mala_'}</span>
                      <span className="flex items-center gap-1 text-ivory-100 group-hover:text-gold transition-colors">
                        <span>View on Instagram</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
