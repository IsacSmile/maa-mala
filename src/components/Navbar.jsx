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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5 pointer-events-none transition-all duration-500">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`relative rounded-2xl sm:rounded-full transition-all duration-500 py-3.5 px-6 sm:px-10 border shadow-2xl ${
            scrolled
              ? 'bg-nature-950/95 backdrop-blur-2xl border-ivory-100/20 py-3'
              : 'bg-nature-950/50 backdrop-blur-md border-ivory-100/10'
          }`}
        >
          <div className="flex items-center justify-between gap-6">
            {/* Brand Logo Left */}
            <a href="#home" className="flex items-center gap-3 group shrink-0">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-ivory-100/20 p-0.5 bg-nature-900 shrink-0">
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
                <span className="text-[8px] text-warmgray-400 tracking-widest font-semibold uppercase mt-0.5">
                  Kakkadampoyil
                </span>
              </div>
            </a>

            {/* Center Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[11px] font-semibold text-warmgray-400 hover:text-ivory-100 transition-colors tracking-[0.15em] uppercase"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Primary CTA Right */}
            <div className="hidden sm:flex items-center shrink-0">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-forest hover:bg-forest-hover text-ivory-100 font-semibold text-xs tracking-wider uppercase shadow-lg transition-all border border-white/10 whitespace-nowrap cursor-pointer"
              >
                <span>Book Adventure</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ivory-200 shrink-0" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-xl bg-ivory-100/10 text-ivory-100 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                className="lg:hidden overflow-hidden mt-3 pt-3 border-t border-ivory-100/10"
              >
                <div className="flex flex-col gap-2 pb-2">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs font-semibold text-ivory-200 hover:text-white uppercase tracking-widest py-2 px-3 rounded-xl hover:bg-ivory-100/5 transition-colors flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-warmgray-400" />
                    </a>
                  ))}
                  <div className="pt-2 mt-1 border-t border-ivory-100/10">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenBooking();
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2 rounded-full bg-forest text-ivory-100 font-semibold text-xs uppercase tracking-wider shadow-md"
                    >
                      <span>Book Adventure</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
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
