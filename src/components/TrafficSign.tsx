'use client';

import React from 'react';

interface TrafficSignProps {
  signId: string;
  className?: string;
}

export default function TrafficSign({ signId, className = 'w-24 h-24' }: TrafficSignProps) {
  const normalizedId = (signId || '').toLowerCase().trim();

  switch (normalizedId) {
    // ----------------------------------------------------
    // DANGER / WARNING (P-Series: Triangle point-up, red border, white fill)
    // ----------------------------------------------------

    // P-1: Intersección con prioridad de la derecha
    case 'p-1':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon points="50,8 8,86 92,86" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
          <polygon points="50,22 20,80 80,80" fill="#FFFFFF" />
          {/* Black Greek cross indicating equal right-hand priority */}
          <rect x="46" y="38" width="8" height="34" fill="#0F172A" />
          <rect x="33" y="51" width="34" height="8" fill="#0F172A" />
        </svg>
      );

    // P-15: Perfil irregular / Badén / Resalto
    case 'p-15':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon points="50,8 8,86 92,86" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
          <polygon points="50,22 20,80 80,80" fill="#FFFFFF" />
          {/* Speed bump profile */}
          <path
            d="M 28 66 L 38 66 Q 50 48 62 66 L 72 66"
            stroke="#0F172A"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      );

    // P-17: Estrechamiento de calzada
    case 'p-17':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon points="50,8 8,86 92,86" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
          <polygon points="50,22 20,80 80,80" fill="#FFFFFF" />
          <path d="M 36 74 L 36 60 Q 36 50 42 42 L 42 32" stroke="#0F172A" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 64 74 L 64 60 Q 64 50 58 42 L 58 32" stroke="#0F172A" strokeWidth="5" fill="none" strokeLinecap="round" />
        </svg>
      );

    // P-20: Paso para peatones
    case 'p-20':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon points="50,8 8,86 92,86" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
          <polygon points="50,22 20,80 80,80" fill="#FFFFFF" />
          {/* Pedestrian walking silhouette & zebra crossing stripes */}
          <circle cx="48" cy="40" r="4.5" fill="#0F172A" />
          <path d="M 46 46 L 52 54 L 46 68" stroke="#0F172A" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 52 54 L 58 68" stroke="#0F172A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M 44 51 L 52 48 L 57 56" stroke="#0F172A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="30" y1="73" x2="70" y2="73" stroke="#0F172A" strokeWidth="3.5" strokeDasharray="5 3" />
        </svg>
      );

    // P-21: Paso de niños / Zona escolar
    case 'p-21':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon points="50,8 8,86 92,86" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
          <polygon points="50,22 20,80 80,80" fill="#FFFFFF" />
          {/* Adult silhouette */}
          <circle cx="42" cy="42" r="3.5" fill="#0F172A" />
          <path d="M 42 47 L 42 61 L 36 71 M 42 61 L 46 71" stroke="#0F172A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* Child silhouette holding hand */}
          <circle cx="58" cy="48" r="3" fill="#0F172A" />
          <path d="M 58 52 L 58 62 L 54 71 M 58 62 L 62 71" stroke="#0F172A" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 42 51 L 50 54 L 58 55" stroke="#0F172A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    // P-25: Circulación en los dos sentidos
    case 'p-25':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon points="50,8 8,86 92,86" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
          <polygon points="50,22 20,80 80,80" fill="#FFFFFF" />
          {/* Up arrow */}
          <line x1="43" y1="71" x2="43" y2="40" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" />
          <polyline points="36,48 43,38 50,48" stroke="#0F172A" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* Down arrow */}
          <line x1="57" y1="39" x2="57" y2="70" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" />
          <polyline points="50,62 57,72 64,62" stroke="#0F172A" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    // ----------------------------------------------------
    // PRIORITY (R-1, R-2, R-3)
    // ----------------------------------------------------

    // R-1: Ceda el paso (Triangle inverted)
    case 'r-1':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon points="50,92 8,16 92,16" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
          <polygon points="50,75 20,24 80,24" fill="#FFFFFF" />
        </svg>
      );

    // R-2: STOP (Octagon)
    case 'r-2':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon
            points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
            fill="#DC2626"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <text x="50" y="60" textAnchor="middle" fontSize="24" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif" letterSpacing="1">
            STOP
          </text>
        </svg>
      );

    // R-3: Calzada con prioridad (Yellow diamond)
    case 'r-3':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon points="50,6 94,50 50,94 6,50" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
          <polygon points="50,14 86,50 50,86 14,50" fill="#FACC15" />
        </svg>
      );

    // ----------------------------------------------------
    // PROHIBITION / RESTRICTION (Circular Red)
    // ----------------------------------------------------

    // R-101: Entrada prohibida
    case 'r-101':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="48" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
          <rect x="16" y="42" width="68" height="16" rx="2" fill="#FFFFFF" />
        </svg>
      );

    // R-301: Velocidad máxima
    case 'r-301':
    case 'r-301-50':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="48" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="50" cy="50" r="37" fill="#FFFFFF" />
          <text x="50" y="61" textAnchor="middle" fontSize="32" fontWeight="900" fill="#0F172A" fontFamily="sans-serif">
            50
          </text>
        </svg>
      );

    // R-305: Adelantamiento prohibido (Red car overtaking black car)
    case 'r-305':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="48" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="50" cy="50" r="37" fill="#FFFFFF" />
          {/* Left car (Red) */}
          <rect x="23" y="44" width="22" height="14" rx="3" fill="#DC2626" />
          <circle cx="28" cy="58" r="3" fill="#0F172A" />
          <circle cx="40" cy="58" r="3" fill="#0F172A" />
          <path d="M 27 44 L 31 38 L 39 38 L 42 44 Z" fill="#DC2626" />
          {/* Right car (Black) */}
          <rect x="55" y="44" width="22" height="14" rx="3" fill="#0F172A" />
          <circle cx="60" cy="58" r="3" fill="#64748B" />
          <circle cx="72" cy="58" r="3" fill="#64748B" />
          <path d="M 59 44 L 63 38 L 71 38 L 74 44 Z" fill="#0F172A" />
        </svg>
      );

    // R-308: Estacionamiento prohibido (Blue circle with single diagonal red slash)
    case 'r-308':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="48" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="50" cy="50" r="37" fill="#2563EB" />
          <line x1="24" y1="24" x2="76" y2="76" stroke="#DC2626" strokeWidth="10" strokeLinecap="round" />
        </svg>
      );

    // R-307: Parada y estacionamiento prohibido (Blue circle with red X)
    case 'r-307':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="48" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="50" cy="50" r="37" fill="#2563EB" />
          <line x1="24" y1="24" x2="76" y2="76" stroke="#DC2626" strokeWidth="9" strokeLinecap="round" />
          <line x1="76" y1="24" x2="24" y2="76" stroke="#DC2626" strokeWidth="9" strokeLinecap="round" />
        </svg>
      );

    // ----------------------------------------------------
    // MANDATORY (Circular Blue)
    // ----------------------------------------------------

    // R-400a: Sentido obligatorio hacia adelante
    case 'r-400a':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="48" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="50" y1="68" x2="50" y2="30" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
          <polyline points="37,42 50,28 63,42" stroke="#FFFFFF" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    // R-402: Glorieta obligatoria (Roundabout arrows)
    case 'r-402':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="48" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
          {/* Rotary path with 3 counter-clockwise arrows */}
          <g fill="none" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round">
            <path d="M 40 32 A 20 20 0 0 1 66 40" />
            <polyline points="68,34 68,43 59,43" fill="#FFFFFF" />

            <path d="M 68 56 A 20 20 0 0 1 48 70" />
            <polyline points="47,75 42,67 50,63" fill="#FFFFFF" />

            <path d="M 32 60 A 20 20 0 0 1 34 38" />
            <polyline points="30,44 38,38 41,47" fill="#FFFFFF" />
          </g>
        </svg>
      );

    // R-404: Calzada para automóviles (White car on blue circle)
    case 'r-404':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="48" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
          {/* Front facing car */}
          <rect x="30" y="44" width="40" height="24" rx="5" fill="#FFFFFF" />
          <path d="M 36 44 L 40 32 L 60 32 L 64 44 Z" fill="#FFFFFF" />
          <rect x="38" y="34" width="24" height="8" rx="2" fill="#2563EB" />
          <circle cx="37" cy="56" r="3.5" fill="#FACC15" />
          <circle cx="63" cy="56" r="3.5" fill="#FACC15" />
          <rect x="42" y="58" width="16" height="4" rx="1" fill="#0F172A" />
        </svg>
      );

    // ----------------------------------------------------
    // GENERAL INDICATION (S-Series: Square / Rectangular Blue)
    // ----------------------------------------------------

    // S-1: Autopista
    case 's-1':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <rect x="6" y="6" width="88" height="88" rx="12" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
          {/* Twin parallel highways converging into overpass bridge */}
          <line x1="28" y1="84" x2="38" y2="46" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
          <line x1="72" y1="84" x2="62" y2="46" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
          <line x1="43" y1="84" x2="46" y2="46" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="5 3" />
          <line x1="57" y1="84" x2="54" y2="46" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="5 3" />
          {/* Overpass bridge */}
          <rect x="24" y="36" width="52" height="7" rx="2" fill="#FFFFFF" />
          <rect x="28" y="43" width="6" height="10" fill="#FFFFFF" />
          <rect x="66" y="43" width="6" height="10" fill="#FFFFFF" />
        </svg>
      );

    // S-2: Autovía
    case 's-2':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <rect x="6" y="6" width="88" height="88" rx="12" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
          {/* Dual carriage lanes */}
          <line x1="30" y1="82" x2="40" y2="34" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
          <line x1="70" y1="82" x2="60" y2="34" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
          {/* Central median strip */}
          <line x1="50" y1="82" x2="50" y2="34" stroke="#FACC15" strokeWidth="3" />
          {/* AUTOVÍA text */}
          <text x="50" y="24" textAnchor="middle" fontSize="9" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif" letterSpacing="0.5">
            AUTOVÍA
          </text>
        </svg>
      );

    // S-28: Calle residencial (20 km/h)
    case 's-28':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <rect x="6" y="6" width="88" height="88" rx="12" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
          {/* House icon */}
          <polygon points="26,42 16,50 36,50" fill="#FFFFFF" />
          <rect x="19" y="50" width="14" height="14" fill="#FFFFFF" />
          {/* Playing child and ball */}
          <circle cx="50" cy="42" r="3.5" fill="#FFFFFF" />
          <path d="M 50 46 L 50 56 L 45 66 M 50 56 L 55 66" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <circle cx="62" cy="62" r="3" fill="#FACC15" />
          {/* Parked car silhouette */}
          <rect x="66" y="56" width="18" height="10" rx="2" fill="#FFFFFF" />
          <circle cx="70" cy="67" r="2" fill="#0F172A" />
          <circle cx="80" cy="67" r="2" fill="#0F172A" />
        </svg>
      );

    // Default fallback badge
    default:
      return (
        <div className={`flex items-center justify-center rounded-xl border border-white/10 bg-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider ${className}`}>
          {normalizedId}
        </div>
      );
  }
}