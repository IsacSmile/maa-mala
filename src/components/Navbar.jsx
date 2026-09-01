import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-header py-4 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Logo Left */}
        <a href="#home" className="flex items-center gap-3.5 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full overflow-hidden border border-ivory-100/20 p-0.5 bg-nature-900 shrink-0"
          >
            <img
              src="/images/logo.png"
              alt="MAA MALA™ Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          <div className="flex flex-col text-left">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-ivory-100 leading-none">
              MAA MALA<span className="text-gold">™</span>
            </span>
            <span className="text-[9px] text-warmgray-400 tracking-widest font-semibold uppercase mt-1">
              Trails • Peace • Stories
            </span>
          </div>
        </a>

        {/* Center Navigation Links (Generous Spacing) */}
        <nav className="hidden lg:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-semibold text-warmgray-400 hover:text-ivory-100 transition-colors tracking-widest uppercase"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Primary CTA Right */}
        <div className="hidden sm:flex items-center">
          <motion.a
            href="https://wa.me/919400921124?text=Hi%20MAA%20MALA,%20I%20want%20to%20book%20Strangers%20Camp"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-forest hover:bg-forest-hover text-ivory-100 font-semibold text-xs tracking-wider uppercase shadow-lg transition-all border border-white/10"
          >
            <span>Book Adventure</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-ivory-200" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ivory-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-nature-950/95 border-b border-ivory-100/10 px-6 py-6"
          >
            <div className="flex flex-col gap-4 text-left">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-ivory-200 hover:text-white uppercase tracking-widest py-1.5 border-b border-ivory-100/5 flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-warmgray-400" />
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="https://wa.me/919400921124?text=Hi%20MAA%20MALA,%20I%20want%20to%20book%20Strangers%20Camp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-forest text-ivory-100 font-semibold text-xs uppercase tracking-wider shadow-md"
                >
                  <span>Book Adventure</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
