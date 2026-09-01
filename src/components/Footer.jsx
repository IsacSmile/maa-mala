import React from 'react';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-nature-950 text-ivory-100 pt-20 pb-12 border-t border-ivory-100/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-ivory-100/10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4 text-left">
            <a href="#home" className="flex items-center gap-3.5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-ivory-100/20 p-0.5 bg-nature-900 shrink-0">
                <img
                  src="/images/logo.png"
                  alt="MAA MALA™ Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-ivory-100 leading-none">
                  MAA MALA<span className="text-gold">™</span>
                </span>
                <span className="text-[9px] text-gold tracking-widest font-semibold uppercase mt-1">
                  Trails • Peace • Stories
                </span>
              </div>
            </a>

            <p className="text-xs text-warmgray-400 leading-relaxed max-w-sm font-sans mt-2">
              Kerala's premier luxury outdoor adventure brand. Curating exclusive Strangers Camps, Offroad Safaris, and Hilltop Retreats across Kakkadampoyil.
            </p>

            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://www.instagram.com/maa.mala_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-ivory-100/20 text-ivory-100 flex items-center justify-center hover:bg-ivory-100 hover:text-nature-950 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919400921124?text=Hi%20MAA%20MALA,%20I%20want%20to%20know%20more"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-ivory-100/20 text-ivory-100 flex items-center justify-center hover:bg-ivory-100 hover:text-nature-950 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2">
              Explore
            </h4>
            <a href="#home" className="text-xs text-warmgray-400 hover:text-ivory-100 transition-colors uppercase tracking-wider">
              Home
            </a>
            <a href="#reels" className="text-xs text-warmgray-400 hover:text-ivory-100 transition-colors uppercase tracking-wider">
              Strangers Camp
            </a>
            <a href="#reels" className="text-xs text-warmgray-400 hover:text-ivory-100 transition-colors uppercase tracking-wider">
              Editorial Stream
            </a>
            <a href="#testimonials" className="text-xs text-warmgray-400 hover:text-ivory-100 transition-colors uppercase tracking-wider">
              Camper Stories
            </a>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-4 flex flex-col gap-3 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2">
              Contact
            </h4>
            <div className="flex items-center gap-3 text-xs text-warmgray-400 font-sans">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span>Kakkadampoyil, Kozhikode, Kerala, India</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-warmgray-400 font-sans">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <a href="tel:+919400921124" className="hover:text-ivory-100 transition-colors">
                +91 9400 921 124
              </a>
            </div>
            <div className="flex items-center gap-3 text-xs text-warmgray-400 font-sans">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <span>isacsmile01@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warmgray-400">
          <p>© {new Date().getFullYear()} MAA MALA™. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-ivory-100 hover:text-gold transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
