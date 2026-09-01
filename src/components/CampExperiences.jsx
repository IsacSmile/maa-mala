import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    title: 'Tent & Cottage Stays',
    subtitle: 'Sleep under high-altitude mountain mist',
    image: '/images/strangers_camp.jpg',
    category: 'ACCOMMODATION',
    featured: true,
  },
  {
    title: 'Offroad Jeep Safari',
    subtitle: 'Thrill through highland trails',
    image: '/images/misty_trek.jpg',
    category: 'ADVENTURE',
  },
  {
    title: 'Stream & Forest Hiking',
    subtitle: 'Explore hidden mountain waterfalls',
    image: '/images/hiking1.png',
    category: 'EXPLORATION',
  },
  {
    title: 'Campfire Jam & Stories',
    subtitle: 'Live acoustic music under stars',
    image: '/images/camping1.png',
    category: 'EVENING VIBES',
  },
];

export default function CampExperiences() {
  return (
    <section id="experiences" className="py-20 sm:py-32 bg-nature-950 text-ivory-100 border-t border-ivory-100/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-3 block">
              CURATED ACTIVITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-ivory-100">
              Camp Experiences.
            </h2>
          </motion.div>
          <p className="text-xs sm:text-sm text-warmgray-400 max-w-md font-sans leading-relaxed">
            Every moment at Strangers Camp is designed for authentic outdoor connection and peaceful adventure.
          </p>
        </div>

        {/* Asymmetric Magazine Image Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Featured Large Item (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 group relative aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden shadow-2xl border border-ivory-100/10"
          >
            <img
              src={EXPERIENCES[0].image}
              alt={EXPERIENCES[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nature-950 via-nature-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-left">
              <span className="text-[10px] font-semibold tracking-widest uppercase text-gold block mb-1">
                {EXPERIENCES[0].category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory-100 group-hover:text-gold transition-colors">
                {EXPERIENCES[0].title}
              </h3>
              <p className="text-xs text-warmgray-400 mt-1 font-sans">
                {EXPERIENCES[0].subtitle}
              </p>
            </div>
          </motion.div>

          {/* Secondary Stack (5 Columns) */}
          <div className="md:col-span-5 flex flex-col gap-6 sm:gap-8">
            {EXPERIENCES.slice(1, 3).map((exp, idx) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (idx + 1) * 0.1 }}
                className="group relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-ivory-100/10"
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-950 via-nature-950/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <span className="text-[9.5px] font-semibold tracking-widest uppercase text-gold block mb-0.5">
                    {exp.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-ivory-100 group-hover:text-gold transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-[11px] text-warmgray-400 mt-0.5 font-sans">
                    {exp.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Full-Width Campfire Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-12 group relative aspect-[16/7] sm:aspect-[21/8] rounded-xl overflow-hidden shadow-2xl border border-ivory-100/10"
          >
            <img
              src={EXPERIENCES[3].image}
              alt={EXPERIENCES[3].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nature-950 via-nature-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-left flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-gold block mb-1">
                  {EXPERIENCES[3].category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory-100 group-hover:text-gold transition-colors">
                  {EXPERIENCES[3].title}
                </h3>
              </div>
              <p className="text-xs text-warmgray-400 font-sans sm:text-right max-w-xs">
                {EXPERIENCES[3].subtitle}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
