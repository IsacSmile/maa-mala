import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, RefreshCw } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function InstagramLiveEmbed({ postUrl = "https://www.instagram.com/maa.mala_/" }) {
  useEffect(() => {
    // Process Instagram embeds dynamically via official Instagram SDK
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        if (window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    }
  }, [postUrl]);

  return (
    <div className="w-full flex flex-col items-center my-6">
      <blockquote
        className="instagram-media w-full rounded-2xl overflow-hidden border border-white/10"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          background: '#0d2b1d',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '320px',
          padding: '0',
          width: 'calc(100% - 2px)',
        }}
      >
        <div className="p-6 flex flex-col items-center justify-center text-center gap-3">
          <div className="flex items-center gap-2">
            <InstagramIcon className="w-8 h-8 text-pink-400 animate-pulse" />
            <span className="text-sm font-bold text-cream">Loading Live Instagram Feed from @maa.mala_...</span>
          </div>
          <a
            href="https://www.instagram.com/maa.mala_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-pink-400 hover:underline flex items-center gap-1 font-semibold"
          >
            <span>View Live Profile on Instagram</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </blockquote>
    </div>
  );
}
