import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, MessageSquare, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'Trending Reels', href: '#reels' },
  { name: 'Community Feedback', href: '#testimonials' },
  { name: 'About Brand', href: '#about' },
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
              ? 'glass-nav shadow-neon border-white/15 py-3.5 px-6 bg-slate-950/85 backdrop-blur-xl'
              : 'glass-nav border-white/10 py-4 px-6 sm:px-8 bg-slate-900/50 backdrop-blur-md'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* MAA MALA Brand Logo Image */}
            <a href="#home" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 4, scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/40 border border-emerald-500/30 bg-maagreen-main flex items-center justify-center p-0.5"
              >
                <img
                  src="/images/logo.png"
                  alt="Maa Mala Logo"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-white flex items-center gap-1">
                  MAA <span className="text-emerald-400">MALA</span>
                  <span className="text-[9px] font-semibold text-emerald-300/80 -mt-2">TM</span>
                </span>
                <span className="text-[10px] text-emerald-300/70 tracking-widest font-semibold uppercase -mt-1">
                  Official Reels Showcase
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveSection(item.href.replace('#', ''))}
                    className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-full"
                  >
                    {item.name}
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 rounded-full hover:bg-emerald-500/10 -z-10"
                    />
                  </a>
                );
              })}
            </div>

            {/* Right Action CTA */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="#reels"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/40 transition-all border border-white/20"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Watch Reels</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-2xl bg-white/10 text-white border border-white/10 focus:outline-none"
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
                      className="px-4 py-3 rounded-2xl text-slate-200 hover:text-white hover:bg-emerald-500/10 font-medium text-sm transition-colors flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </a>
                  ))}
                  <div className="pt-2 mt-2 border-t border-white/10">
                    <a
                      href="#reels"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-indigo-600 text-white font-semibold text-sm shadow-md"
                    >
                      <InstagramIcon className="w-4 h-4" />
                      <span>Watch Instagram Reels</span>
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
