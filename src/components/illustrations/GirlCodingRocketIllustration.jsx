import React from 'react';

export default function GirlCodingRocketIllustration({ className = '', style = {} }) {
  return (
    <div className={`illustration-container ${className}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...style }}>
      <svg 
        viewBox="0 0 380 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', maxWidth: '340px', height: 'auto', filter: 'drop-shadow(0 12px 24px rgba(37,99,235,0.08))' }}
      >
        <defs>
          <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F87171" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id="purpleSweaterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="cloudGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EFF6FF" />
            <stop offset="100%" stopColor="#DBEAFE" />
          </linearGradient>
        </defs>

        {/* Soft Background Circle */}
        <circle cx="200" cy="150" r="125" fill="url(#cloudGlow)" opacity="0.8" />

        {/* Floating Code Editor Card behind */}
        <g opacity="0.95" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.08))">
          <rect x="200" y="55" width="120" height="90" rx="10" fill="url(#screenGrad)" />
          {/* Header bar */}
          <rect x="200" y="55" width="120" height="20" rx="10" fill="#334155" />
          <circle cx="212" cy="65" r="3" fill="#EF4444" />
          <circle cx="220" cy="65" r="3" fill="#F59E0B" />
          <circle cx="228" cy="65" r="3" fill="#10B981" />
          {/* Code lines */}
          <rect x="212" y="85" width="30" height="4" rx="2" fill="#38BDF8" />
          <rect x="246" y="85" width="45" height="4" rx="2" fill="#818CF8" />
          <rect x="218" y="95" width="55" height="4" rx="2" fill="#34D399" />
          <rect x="218" y="105" width="38" height="4" rx="2" fill="#F472B6" />
          <rect x="212" y="115" width="22" height="4" rx="2" fill="#FBBF24" />
        </g>

        {/* Rocket blasting off in background right */}
        <g transform="translate(250, 40) rotate(45)">
          {/* Exhaust flame */}
          <path d="M-8 30 Q0 50 8 30 Q0 40 -8 30 Z" fill="#F59E0B" />
          <path d="M-4 30 Q0 44 4 30 Z" fill="#FEF08A" />
          {/* Rocket Body */}
          <path d="M-12 30 C-12 10 0 -15 0 -15 C0 -15 12 10 12 30 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Nosecone */}
          <path d="M-8 0 C-8 -10 0 -15 0 -15 C0 -15 8 -10 8 0 Z" fill="url(#rocketGrad)" />
          {/* Window */}
          <circle cx="0" cy="8" r="4.5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
          {/* Fins */}
          <path d="M-12 20 L-18 28 L-12 28 Z" fill="url(#rocketGrad)" />
          <path d="M12 20 L18 28 L12 28 Z" fill="url(#rocketGrad)" />
        </g>

        {/* Desk Surface */}
        <path d="M50 260 L330 260" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />

        {/* Laptop Screen & Keyboard */}
        <rect x="190" y="215" width="70" height="45" rx="4" fill="#334155" />
        <rect x="193" y="218" width="64" height="39" rx="2" fill="#0F172A" />
        {/* Glow on laptop screen */}
        <rect x="198" y="225" width="25" height="3" rx="1.5" fill="#38BDF8" />
        <rect x="198" y="232" width="40" height="3" rx="1.5" fill="#818CF8" />
        <rect x="198" y="239" width="30" height="3" rx="1.5" fill="#34D399" />
        {/* Laptop Base */}
        <path d="M180 258 L270 258 L262 262 L188 262 Z" fill="#94A3B8" />

        {/* Student Girl in Purple Sweater */}
        <path d="M115 260 C110 215 130 185 160 180 C190 185 205 215 200 260 Z" fill="url(#purpleSweaterGrad)" />

        {/* Arms typing on keyboard */}
        <path d="M145 205 C160 215 180 235 195 250" stroke="url(#purpleSweaterGrad)" strokeWidth="16" strokeLinecap="round" />

        {/* Girl Head */}
        <ellipse cx="158" cy="142" rx="21" ry="23" fill="#FDE68A" />

        {/* Hair - Dark brown long hair with ponytail */}
        <path d="M136 142 C134 115 150 95 175 98 C186 100 188 115 184 125 C180 135 178 140 178 148 C165 138 155 140 148 146 Z" fill="#312E81" />
        {/* Ponytail back */}
        <path d="M136 125 C120 120 115 140 118 165 C122 185 130 200 136 210" stroke="#312E81" strokeWidth="14" strokeLinecap="round" />

        {/* Ear */}
        <ellipse cx="140" cy="144" rx="4" ry="6" fill="#FDE68A" />

        {/* Eyes looking intently at laptop */}
        <circle cx="162" cy="138" r="2.5" fill="#0F172A" />
        <circle cx="173" cy="138" r="2.5" fill="#0F172A" />
        <circle cx="163" cy="137" r="0.8" fill="#FFFFFF" />
        <circle cx="174" cy="137" r="0.8" fill="#FFFFFF" />

        {/* Happy smile */}
        <path d="M162 150 Q167 154 172 150" stroke="#92400E" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Sparkles */}
        <path d="M100 80 L102 84 L106 86 L102 88 L100 92 L98 88 L94 86 L98 84 Z" fill="#F59E0B" opacity="0.8" />
        <path d="M290 180 L292 184 L296 186 L292 188 L290 192 L288 188 L284 186 L288 184 Z" fill="#38BDF8" opacity="0.8" />
      </svg>
    </div>
  );
}
