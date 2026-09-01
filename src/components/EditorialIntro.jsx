import React from 'react';
import { motion } from 'framer-motion';

export default function EditorialIntro() {
  return (
    <section id="editorial-intro" className="py-24 sm:py-36 bg-nature-950 text-ivory-100 border-t border-ivory-100/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Large Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold block mb-4">
              THE MAA MALA EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-ivory-100 leading-[1.15]">
              Two days away <br />
              <span className="italic font-normal text-gold">from the noise.</span>
            </h2>
          </motion.div>

          {/* Right: Short Supporting Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 text-left flex flex-col justify-between gap-6 pt-2"
          >
            <p className="text-sm sm:text-base text-warmgray-400 font-sans leading-relaxed">
              MAA MALA™ creates curated outdoor retreats in the pristine highlands of Kakkadampoyil. We bring together like-minded strangers to share tent stays, campfire music, mountain jeep safaris, and stream treks.
            </p>
            <p className="text-sm text-warmgray-400 font-sans leading-relaxed">
              No artificial luxury. Just raw, peaceful, high-altitude nature, honest campfire conversations, and memories that linger long after you return home.
            </p>

            <div className="pt-4 border-t border-ivory-100/10 flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-gold">
              <div>
                <span className="text-2xl font-serif font-extrabold text-ivory-100 block">02</span>
                <span className="text-[10px] text-warmgray-400">DAYS TRIP</span>
              </div>
              <div className="h-8 w-px bg-ivory-100/10" />
              <div>
                <span className="text-2xl font-serif font-extrabold text-ivory-100 block">2000+</span>
                <span className="text-[10px] text-warmgray-400">ALTITUDE (FT)</span>
              </div>
              <div className="h-8 w-px bg-ivory-100/10" />
              <div>
                <span className="text-2xl font-serif font-extrabold text-gold block">₹1,799</span>
                <span className="text-[10px] text-warmgray-400">ALL INCLUSIVE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
