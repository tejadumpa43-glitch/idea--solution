import React from 'react';

export default function BoyPlanningIllustration({ className = '', style = {} }) {
  return (
    <div className={`illustration-container ${className}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...style }}>
      <svg 
        viewBox="0 0 380 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', maxWidth: '340px', height: 'auto', filter: 'drop-shadow(0 12px 24px rgba(37,99,235,0.08))' }}
      >
        <defs>
          <linearGradient id="bgCircleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="lightBulbGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>
        </defs>

        {/* Soft Background Circle */}
        <circle cx="200" cy="150" r="125" fill="url(#bgCircleGrad)" />

        {/* Floating Plan / Checklist UI Board behind boy */}
        <g opacity="0.9" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.06))">
          <rect x="220" y="70" width="110" height="120" rx="10" fill="url(#cardGrad)" stroke="#E2E8F0" strokeWidth="2" />
          {/* Header bar */}
          <rect x="220" y="70" width="110" height="24" rx="10" fill="#3B82F6" />
          <circle cx="232" cy="82" r="3" fill="#FFFFFF" opacity="0.8" />
          <circle cx="242" cy="82" r="3" fill="#FFFFFF" opacity="0.8" />
          <circle cx="252" cy="82" r="3" fill="#FFFFFF" opacity="0.8" />

          {/* Checklist rows */}
          <rect x="230" y="104" width="10" height="10" rx="3" fill="#10B981" />
          <path d="M232 109 L235 112 L239 106" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="246" y="107" width="55" height="5" rx="2.5" fill="#94A3B8" />

          <rect x="230" y="122" width="10" height="10" rx="3" fill="#10B981" />
          <path d="M232 127 L235 130 L239 124" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="246" y="125" width="45" height="5" rx="2.5" fill="#94A3B8" />

          <rect x="230" y="140" width="10" height="10" rx="3" fill="#3B82F6" />
          <circle cx="235" cy="145" r="2" fill="#FFFFFF" />
          <rect x="246" y="143" width="60" height="5" rx="2.5" fill="#64748B" />

          <rect x="230" y="158" width="10" height="10" rx="3" fill="#E2E8F0" />
          <rect x="246" y="161" width="38" height="5" rx="2.5" fill="#CBD5E1" />
        </g>

        {/* Desk Surface */}
        <path d="M60 260 L320 260" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />

        {/* Laptop Screen & Keyboard */}
        <rect x="210" y="222" width="65" height="38" rx="4" fill="#334155" />
        <rect x="213" y="225" width="59" height="32" rx="2" fill="#0F172A" />
        {/* Code editor / blueprint lines on laptop screen */}
        <rect x="218" y="230" width="20" height="3" rx="1.5" fill="#38BDF8" />
        <rect x="218" y="236" width="35" height="3" rx="1.5" fill="#818CF8" />
        <rect x="224" y="242" width="28" height="3" rx="1.5" fill="#34D399" />
        <rect x="224" y="248" width="18" height="3" rx="1.5" fill="#F472B6" />
        {/* Laptop base */}
        <path d="M200 258 L285 258 L278 262 L207 262 Z" fill="#94A3B8" />

        {/* Student Boy Body - Blue Hoodie */}
        <path d="M135 260 C130 215 150 185 180 180 C210 185 225 215 220 260 Z" fill="url(#hoodieGrad)" />
        {/* Hoodie collar / drawstring */}
        <path d="M165 185 Q178 200 190 185" stroke="#1E40AF" strokeWidth="4" fill="none" />
        <line x1="174" y1="195" x2="174" y2="215" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <line x1="182" y1="195" x2="182" y2="212" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

        {/* Boy Arm reaching toward keyboard */}
        <path d="M190 205 C200 215 215 235 225 250" stroke="url(#hoodieGrad)" strokeWidth="16" strokeLinecap="round" />

        {/* Boy Head */}
        <ellipse cx="178" cy="142" rx="21" ry="23" fill="#FDE68A" />

        {/* Hair - Stylish dark wavy boy hair */}
        <path d="M156 142 C154 115 170 95 195 98 C206 100 208 115 204 125 C200 135 198 140 198 148 C185 138 175 140 168 146 Z" fill="#1E293B" />
        {/* Ear */}
        <ellipse cx="160" cy="144" rx="4" ry="6" fill="#FDE68A" />

        {/* Eyes looking forward at laptop screen */}
        <circle cx="182" cy="138" r="2.5" fill="#0F172A" />
        <circle cx="193" cy="138" r="2.5" fill="#0F172A" />
        <circle cx="183" cy="137" r="0.8" fill="#FFFFFF" />
        <circle cx="194" cy="137" r="0.8" fill="#FFFFFF" />
        {/* Confident gentle smile */}
        <path d="M182 150 Q187 154 192 150" stroke="#92400E" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Eyebrows */}
        <path d="M178 132 Q183 130 187 132" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M190 132 Q194 130 198 132" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Glowing Lightbulb above UI board */}
        <g stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" opacity="0.85">
          <line x1="285" y1="42" x2="285" y2="34" />
          <line x1="304" y1="50" x2="310" y2="44" />
          <line x1="312" y1="68" x2="320" y2="68" />
          <line x1="266" y1="50" x2="260" y2="44" />
          <line x1="258" y1="68" x2="250" y2="68" />
        </g>
        <circle cx="285" cy="68" r="18" fill="#FEF08A" opacity="0.5" />
        <path d="M275 68 C275 62.48 279.48 58 285 58 C290.52 58 295 62.48 295 68 C295 71.8 293 74.9 290 76.5 L290 80 L280 80 L280 76.5 C277 74.9 275 71.8 275 68 Z" fill="url(#lightBulbGrad2)" />
        <rect x="282" y="81" width="6" height="2.5" rx="1" fill="#94A3B8" />

        {/* Sparkles */}
        <path d="M130 80 L132 84 L136 86 L132 88 L130 92 L128 88 L124 86 L128 84 Z" fill="#3B82F6" opacity="0.7" />
      </svg>
    </div>
  );
}
