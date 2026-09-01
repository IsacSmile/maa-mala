import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3.5 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`relative rounded-3xl transition-all duration-500 ${
            scrolled
              ? 'glass-nav shadow-emerald-glow border-white/15 py-3 px-5 sm:px-6 bg-charcoal-950/90 backdrop-blur-2xl'
              : 'glass-nav border-white/12 py-3.5 px-5 sm:px-7 bg-charcoal-900/70 backdrop-blur-xl'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Clean Logo Left */}
            <a href="#home" className="flex items-center gap-3 shrink-0 group">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-2xl overflow-hidden ring-2 ring-forest-400/40 p-0.5 bg-forest-900 shrink-0"
              >
                <img
                  src="/images/logo.png"
                  alt="MAA MALA™ Logo"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>

              <div className="flex flex-col text-left">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-cream flex items-center gap-1 leading-tight">
                  MAA MALA<span className="text-gold-400">™</span>
                </span>
                <span className="text-[10px] text-gold-400 tracking-widest font-bold uppercase">
                  Trails • Peace • Stories
                </span>
              </div>
            </a>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-cream transition-all rounded-full hover:bg-white/10"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Action Button */}
            <div className="hidden sm:flex items-center shrink-0">
              <motion.a
                href="https://wa.me/919400921124?text=Hi%20MAA%20MALA,%20I%20want%20to%20book%20Strangers%20Camp"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(245, 158, 11, 0.4)' }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-gold-500 via-forest-600 to-forest-700 text-cream font-bold text-xs sm:text-sm shadow-lg border border-white/20 transition-all whitespace-nowrap shrink-0"
              >
                <Compass className="w-4 h-4 text-cream shrink-0" />
                <span>Book Adventure</span>
                <ArrowUpRight className="w-4 h-4 opacity-80 shrink-0" />
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-2xl bg-white/10 text-cream border border-white/10"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden mt-4 pt-4 border-t border-white/10"
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
                      href="https://wa.me/919400921124?text=Hi%20MAA%20MALA,%20I%20want%20to%20book%20Strangers%20Camp"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-gold-500 to-forest-600 text-cream font-bold text-sm shadow-md"
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
