import React from 'react';

export default function GirlThinkingIllustration({ className = '', style = {} }) {
  return (
    <div className={`illustration-container ${className}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...style }}>
      <svg 
        viewBox="0 0 380 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', maxWidth: '340px', height: 'auto', filter: 'drop-shadow(0 12px 24px rgba(37,99,235,0.08))' }}
      >
        <defs>
          <linearGradient id="bgGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EFF6FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="bulbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Soft Background Cloud / Circle */}
        <circle cx="210" cy="150" r="120" fill="url(#bgGlow)" />
        <ellipse cx="140" cy="210" rx="40" ry="25" fill="#E0F2FE" opacity="0.6" />

        {/* Ambient foliage / leaves */}
        <path d="M110 230 C90 200 100 170 120 160 C130 185 130 215 110 230 Z" fill="#6EE7B7" opacity="0.6" />
        <path d="M95 240 C80 220 85 195 105 185 C112 205 110 228 95 240 Z" fill="#34D399" opacity="0.5" />

        {/* Desk Surface */}
        <path d="M70 260 L330 260" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />

        {/* Laptop Base & Screen */}
        <rect x="230" y="222" width="60" height="38" rx="4" fill="url(#laptopGrad)" />
        <rect x="233" y="225" width="54" height="32" rx="2" fill="#1E293B" />
        <path d="M220 258 L300 258 L294 262 L226 262 Z" fill="#94A3B8" />
        {/* Apple/Idea Logo on laptop back */}
        <circle cx="260" cy="241" r="5" fill="#E2E8F0" opacity="0.9" />

        {/* Girl Body - Yellow Sweater */}
        <path d="M150 260 C145 220 160 190 190 185 C220 190 235 220 230 260 Z" fill="url(#shirtGrad)" />

        {/* Left Arm resting with hand supporting chin */}
        <path d="M175 220 C185 200 195 175 200 160" stroke="url(#shirtGrad)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
        {/* Hand touching cheek/chin */}
        <circle cx="202" cy="158" r="8" fill="#FBBF24" />

        {/* Girl Head & Hair */}
        {/* Back Hair */}
        <path d="M165 140 C155 110 180 80 215 85 C245 90 255 125 245 165 C230 180 200 185 180 180 Z" fill="#451A03" />

        {/* Face */}
        <ellipse cx="205" cy="138" rx="20" ry="22" fill="#FDE68A" />
        {/* Cute blush */}
        <circle cx="196" cy="144" r="3.5" fill="#F87171" opacity="0.5" />
        <circle cx="216" cy="144" r="3.5" fill="#F87171" opacity="0.5" />
        {/* Eyes (looking up thoughtfully) */}
        <circle cx="199" cy="133" r="2.5" fill="#1E293B" />
        <circle cx="213" cy="133" r="2.5" fill="#1E293B" />
        <circle cx="200" cy="132" r="0.8" fill="#FFFFFF" />
        <circle cx="214" cy="132" r="0.8" fill="#FFFFFF" />
        {/* Eyebrows curved up thoughtfully */}
        <path d="M195 127 Q199 125 203 128" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M209 128 Q213 125 217 127" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Gentle smiling mouth */}
        <path d="M203 147 Q206 150 209 147" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Front Hair Bangs */}
        <path d="M185 125 C195 110 220 110 230 125 C220 120 200 120 185 125 Z" fill="#5A2207" />
        <path d="M175 145 C170 180 180 220 185 240" stroke="#451A03" strokeWidth="10" strokeLinecap="round" />

        {/* Glowing Lightbulb above */}
        {/* Rays */}
        <g stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
          <line x1="265" y1="45" x2="265" y2="35" />
          <line x1="288" y1="55" x2="296" y2="48" />
          <line x1="298" y1="78" x2="308" y2="78" />
          <line x1="288" y1="102" x2="296" y2="108" />
          <line x1="242" y1="55" x2="234" y2="48" />
          <line x1="232" y1="78" x2="222" y2="78" />
        </g>
        {/* Glow halo */}
        <circle cx="265" cy="78" r="22" fill="#FEF08A" opacity="0.5" filter="url(#glowFilter)" />
        {/* Bulb Glass */}
        <path d="M253 78 C253 71.37 258.37 66 265 66 C271.63 66 277 71.37 277 78 C277 82.5 274.5 86.5 271 88.5 L271 93 L259 93 L259 88.5 C255.5 86.5 253 82.5 253 78 Z" fill="url(#bulbGrad)" />
        {/* Filament */}
        <path d="M262 76 Q265 72 268 76" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Bulb Base */}
        <rect x="261" y="94" width="8" height="3" rx="1.5" fill="#94A3B8" />
        <rect x="262" y="98" width="6" height="2" rx="1" fill="#64748B" />

        {/* Sparkle Stars */}
        <path d="M150 70 L153 76 L159 79 L153 82 L150 88 L147 82 L141 79 L147 76 Z" fill="#60A5FA" opacity="0.8" />
        <path d="M310 140 L312 144 L316 146 L312 148 L310 152 L308 148 L304 146 L308 144 Z" fill="#FBBF24" opacity="0.8" />
      </svg>
    </div>
  );
}
