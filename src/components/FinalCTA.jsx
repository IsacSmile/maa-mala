import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 bg-nature-950 text-ivory-100 overflow-hidden border-t border-ivory-100/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/camping1.png"
          alt="MAA MALA Strangers Camp Atmosphere"
          className="w-full h-full object-cover filter contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nature-950 via-nature-950/85 to-nature-950/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4 block"
        >
          RESERVE YOUR CAMPING SPOT
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-serif font-extrabold text-ivory-100 leading-[1.1]"
        >
          Ready to disappear <br />
          <span className="italic font-normal text-gold">for two days?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base text-warmgray-400 max-w-xl font-sans leading-relaxed"
        >
          Join us on Sep 05–06 for an unforgettable highland getaway at Kakkadampoyil. All-inclusive package at ₹1,799 per head.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <motion.a
            href="https://wa.me/919400921124?text=Hi%20MAA%20MALA,%20I%20want%20to%20book%20Strangers%20Camp"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-forest hover:bg-forest-hover text-ivory-100 font-semibold text-xs tracking-wider uppercase shadow-2xl transition-all border border-white/10"
          >
            <PhoneCall className="w-4 h-4 text-ivory-100 shrink-0" />
            <span>BOOK VIA WHATSAPP</span>
          </motion.a>

          <a
            href="#reels"
            className="text-xs font-semibold uppercase tracking-widest text-warmgray-400 hover:text-ivory-100 transition-colors flex items-center gap-2 py-2"
          >
            <span>VIEW CAMP GALLERY</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
