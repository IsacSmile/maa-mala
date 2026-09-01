import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Compass } from 'lucide-react';
import CampLogo from './CampLogo';
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
    <footer id="contact" className="py-12 relative border-t border-white/10 bg-forest-950/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          {/* Brand Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <a href="#home" className="flex items-center gap-3">
              <CampLogo className="w-10 h-10" />
              <span className="font-extrabold text-xl tracking-tight text-cream flex items-center gap-1">
                Campers <span className="text-forest-400">for Adventures</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              Discover wild trails, alpine campfires, and eco-guided outdoor journeys with Campers for Adventures.
            </p>
          </div>

          {/* Social Media Icons */}
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
                  className="w-10 h-10 rounded-2xl glass-card border border-white/10 flex items-center justify-center text-slate-300 hover:text-cream hover:border-terracotta-500/50 hover:bg-terracotta-500/10 transition-colors"
                  aria-label={s.name}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Campers for Adventures. All rights reserved.</p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-cream transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-forest-400" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
