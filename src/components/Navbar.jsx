import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Live Stream', href: '#reels' },
  { name: 'Feedback', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenBooking }) {
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
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-5 px-4 sm:px-8">
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-500 border ${
          scrolled
            ? 'bg-nature-950/90 backdrop-blur-md border-ivory-100/20 shadow-2xl'
            : 'bg-nature-950/60 backdrop-blur-md border-ivory-100/15 shadow-lg'
        }`}
      >
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          {/* Brand Logo Left */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-ivory-100/20 p-0.5 bg-nature-900 shrink-0">
              <img
                src="/images/logo.png"
                alt="MAA MALA™ Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-extrabold text-xs sm:text-sm tracking-tight text-ivory-100 leading-none">
                MAA MALA<span className="text-gold">™</span>
              </span>
              <span className="text-[7.5px] sm:text-[8px] text-gold tracking-[0.18em] font-semibold uppercase mt-0.5 whitespace-nowrap">
                Trails • Peace • Stories
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[11px] font-semibold text-warmgray-400 hover:text-ivory-100 transition-colors tracking-[0.18em] uppercase"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Primary CTA Right (Desktop) */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-forest hover:bg-forest-hover text-ivory-100 font-semibold text-xs tracking-wider uppercase transition-all border border-white/10 cursor-pointer shadow-md"
            >
              <span>Book Adventure</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ivory-200 shrink-0" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-ivory-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Card (Floating separately under the rounded capsule) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden max-w-6xl mx-auto mt-2 bg-nature-950/95 backdrop-blur-xl border border-ivory-100/15 rounded-2xl p-4 shadow-2xl flex flex-col gap-2"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-ivory-200 hover:text-white uppercase tracking-widest py-2.5 px-3 rounded-xl hover:bg-ivory-100/5 transition-colors flex items-center justify-between"
              >
                <span>{item.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-warmgray-400" />
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-ivory-100/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-forest text-ivory-100 font-semibold text-xs uppercase tracking-wider shadow-md cursor-pointer"
              >
                <span>Book Adventure</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
