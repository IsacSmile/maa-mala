import React from 'react';
import { motion } from 'framer-motion';

export default function EditorialIntro() {
  return (
    <section id="editorial-intro" className="py-20 sm:py-32 bg-nature-950 text-ivory-100 border-t border-ivory-100/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Vertical Camp Photography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-ivory-100/10 group">
              <img
                src="/images/strangers_camp.jpg"
                alt="Strangers Camp at Kakkadampoyil"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
              />
            </div>
            {/* Subtle Photo Tag */}
            <div className="absolute bottom-4 left-4 text-[9px] font-semibold tracking-widest uppercase text-ivory-100/70 bg-nature-950/70 backdrop-blur-sm px-3 py-1 rounded-full border border-ivory-100/10">
              KAKKADAMPOYIL HIGHLANDS
            </div>
          </motion.div>

          {/* Right Column: Editorial Magazine Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 text-left flex flex-col gap-6"
          >
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-3 block">
                THE MAA MALA EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-ivory-100 leading-[1.12]">
                Two days away <br />
                <span className="italic font-normal text-gold">from the noise.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-warmgray-400 font-sans leading-relaxed">
              MAA MALA™ creates curated outdoor retreats in the pristine highlands of Kakkadampoyil. We bring together like-minded strangers to share tent stays, campfire music, mountain jeep safaris, and stream treks.
            </p>

            <p className="text-sm text-warmgray-400 font-sans leading-relaxed">
              No artificial luxury. Just raw, peaceful, high-altitude nature, honest campfire conversations, and memories that linger long after you return home.
            </p>

            {/* Simple Editorial Details Line (No boxes, no cards) */}
            <div className="pt-6 mt-2 border-t border-ivory-100/10 flex items-center gap-6 sm:gap-8 text-xs font-semibold uppercase tracking-widest text-ivory-100">
              <div className="flex flex-col gap-0.5">
                <span className="text-base sm:text-lg font-serif font-bold text-gold">02 DAYS</span>
                <span className="text-[9px] text-warmgray-400">DURATION</span>
              </div>
              <div className="h-7 w-px bg-ivory-100/15" />
              <div className="flex flex-col gap-0.5">
                <span className="text-base sm:text-lg font-serif font-bold text-ivory-100">2000+ FT</span>
                <span className="text-[9px] text-warmgray-400">ALTITUDE</span>
              </div>
              <div className="h-7 w-px bg-ivory-100/15" />
              <div className="flex flex-col gap-0.5">
                <span className="text-base sm:text-lg font-serif font-bold text-gold">₹1,799</span>
                <span className="text-[9px] text-warmgray-400">ALL INCLUSIVE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
