import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    title: 'Tent & Cottage Stays',
    subtitle: 'Sleep Under Mountain Mist',
    image: '/images/strangers_camp.jpg',
    category: 'ACCOMMODATION',
  },
  {
    title: 'Offroad Jeep Safari',
    subtitle: 'Thrill Through Highland Trails',
    image: '/images/misty_trek.jpg',
    category: 'ADVENTURE',
  },
  {
    title: 'Stream & Forest Hiking',
    subtitle: 'Explore Hidden Mountain Waterfalls',
    image: '/images/hiking1.png',
    category: 'EXPLORATION',
  },
  {
    title: 'Campfire Jam & Stories',
    subtitle: 'Live Acoustic Music & Barbecue',
    image: '/images/camping1.png',
    category: 'EVENING VIBES',
  },
];

export default function CampExperiences() {
  return (
    <section id="experiences" className="py-24 sm:py-36 bg-nature-950 text-ivory-100 border-t border-ivory-100/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3 block">
              CURATED ACTIVITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-ivory-100">
              Camp Experiences.
            </h2>
          </motion.div>
          <p className="text-xs sm:text-sm text-warmgray-400 max-w-md font-sans">
            Every moment at Strangers Camp is designed for authentic outdoor connection and peaceful adventure.
          </p>
        </div>

        {/* 4-Item Photographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-ivory-100/10 cursor-pointer"
            >
              {/* Image Background */}
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nature-950 via-nature-950/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

              {/* Editorial Text Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-left flex flex-col justify-end">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-gold block mb-1">
                  {exp.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-ivory-100 group-hover:text-gold transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs text-warmgray-400 mt-1 font-sans">
                  {exp.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
