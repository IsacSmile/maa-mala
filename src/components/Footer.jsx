import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { TwitterIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';

const SOCIAL_LINKS = [
  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
  { name: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com' },
  { name: 'YouTube', icon: YoutubeIcon, href: 'https://youtube.com' },
  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="about" className="py-12 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          {/* Brand Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-lg shadow-emerald-950/40 border border-emerald-500/30 bg-maagreen-main flex items-center justify-center p-0.5">
                <img
                  src="/images/logo.png"
                  alt="MAA MALA Logo"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <span className="font-black text-xl tracking-tight text-white flex items-center gap-1">
                MAA <span className="text-emerald-400">MALA</span>
                <span className="text-[9px] font-semibold text-emerald-300/80 -mt-2">TM</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              Authentic stories, high-converting short-form media, and creator showcases by MAA MALA™.
            </p>
          </div>

          {/* Social Media Icons with Framer Motion hover springs */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((s) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-2xl glass-card border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors"
                  aria-label={s.name}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Bottom copyright & Back to top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} MAA MALA™ Showcase Studio. All rights reserved.</p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
