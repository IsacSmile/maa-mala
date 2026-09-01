import React from 'react';

export default function CampLogo({ className = "w-10 h-10", ...props }) {
  return (
    <div className={`rounded-2xl bg-gradient-to-tr from-forest-800 via-forest-700 to-terracotta-600 flex items-center justify-center p-2 shadow-lg shadow-forest-950/60 border border-forest-500/30 ${className}`} {...props}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-cream">
        {/* Mountain peak */}
        <path d="M2 20L10 6L14 13L17 8L22 20H2Z" fill="rgba(82, 183, 136, 0.25)" stroke="currentColor" />
        {/* Campfire flame */}
        <path d="M12 14C12 14 10.5 15.5 10.5 17C10.5 18 11.2 19 12 19C12.8 19 13.5 18 13.5 17C13.5 15.5 12 14 12 14Z" fill="#f97316" stroke="#f97316" />
        {/* Pine Tree */}
        <path d="M19 14L21 17H17L19 14Z" fill="#40916c" stroke="currentColor" />
      </svg>
    </div>
  );
}
