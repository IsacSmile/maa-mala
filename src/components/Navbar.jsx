import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass, ArrowUpRight, Flame } from 'lucide-react';
import CampLogo from './CampLogo';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'Adventures', href: '#reels' },
  { name: 'Gallery', href: '#reels' },
  { name: 'Feedback', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`relative rounded-3xl transition-all duration-500 ${
            scrolled
              ? 'glass-nav shadow-moss-glow border-forest-500/20 py-3.5 px-6 bg-forest-950/90 backdrop-blur-xl'
              : 'glass-nav border-white/10 py-4 px-6 sm:px-8 bg-forest-900/60 backdrop-blur-md'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo Left */}
            <a href="#home" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <CampLogo className="w-10 h-10" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-cream flex items-center gap-1">
                  Campers <span className="text-forest-400">for Adventures</span>
                </span>
                <span className="text-[10px] text-terracotta-400 tracking-widest font-semibold uppercase -mt-1">
                  Wilderness & Eco Expeditions
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveSection(item.href.replace('#', ''))}
                    className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-cream transition-colors rounded-full"
                  >
                    {item.name}
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 rounded-full hover:bg-forest-500/15 -z-10"
                    />
                  </a>
                );
              })}
            </div>

            {/* Right Action CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="#reels"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-terracotta-600 via-terracotta-500 to-forest-600 text-cream font-bold text-sm shadow-lg shadow-terracotta-600/30 hover:shadow-terracotta-500/50 transition-all border border-white/20"
              >
                <Compass className="w-4 h-4 text-cream" />
                <span>Book Adventure</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-2xl bg-white/10 text-cream border border-white/10 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Drawer Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden mt-4 pt-4 border-t border-white/10"
              >
                <div className="flex flex-col gap-2 pb-2">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-2xl text-slate-200 hover:text-cream hover:bg-forest-500/20 font-medium text-sm transition-colors flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </a>
                  ))}
                  <div className="pt-2 mt-2 border-t border-white/10">
                    <a
                      href="#reels"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-terracotta-600 to-forest-600 text-cream font-bold text-sm shadow-md"
                    >
                      <Compass className="w-4 h-4" />
                      <span>Book Your Adventure</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
}
