import React from 'react';

export default function CanecaIcon({ tipo = 'blanca', size, className = '' }) {
  const t = tipo.toLowerCase();

  // Colores según el código oficial de colores de reciclaje
  const config = {
    blanca: {
      tapa: '#E2E8F0',
      cuerpo: '#FFFFFF',
      borde: '#94A3B8',
      franja: '#CBD5E1',
      texto: '#334155',
      logo: '#16A34A', // verde reciclaje
      label: 'BLANCA',
      sublabel: 'Aprovechables'
    },
    verde: {
      tapa: '#15803D',
      cuerpo: '#16A34A',
      borde: '#14532D',
      franja: '#22C55E',
      texto: '#FFFFFF',
      logo: '#FFFFFF',
      label: 'VERDE',
      sublabel: 'Orgánicos'
    },
    negra: {
      tapa: '#18181B',
      cuerpo: '#27272A',
      borde: '#09090B',
      franja: '#3F3F46',
      texto: '#F4F4F5',
      logo: '#A1A1AA',
      label: 'NEGRA',
      sublabel: 'No Aprovechable'
    }
  };

  const c = config[t] || config.blanca;
  const estilo = size ? { width: size, height: size * 1.25 } : undefined;

  return (
    <div
      style={estilo}
      className={`inline-flex flex-col items-center justify-center select-none ${className}`}
    >
      <svg
        viewBox="0 0 100 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Asa de la tapa */}
        <rect x="42" y="6" width="16" height="8" rx="4" fill={c.tapa} stroke={c.borde} strokeWidth="3" />

        {/* Tapa con solapas */}
        <rect x="14" y="12" width="72" height="14" rx="5" fill={c.tapa} stroke={c.borde} strokeWidth="3" />
        <line x1="20" y1="18" x2="80" y2="18" stroke={c.franja} strokeWidth="2" strokeLinecap="round" />

        {/* Cuerpo de la caneca cónica */}
        <path
          d="M20 26 L27 114 Q28 118 34 118 L66 118 Q72 118 73 114 L80 26 Z"
          fill={c.cuerpo}
          stroke={c.borde}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Líneas de relieve de la caneca */}
        <line x1="33" y1="36" x2="37" y2="106" stroke={c.franja} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <line x1="67" y1="36" x2="63" y2="106" stroke={c.franja} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />

        {/* Círculo central con ícono */}
        <circle cx="50" cy="62" r="15" fill={c.franja} opacity="0.3" />
        
        {/* Símbolo de Reciclaje / Hoja / Basura según caneca */}
        {t === 'blanca' && (
          <g transform="translate(42, 54) scale(0.7)" fill={c.logo}>
            <path d="M12 2 L8 8 H11 V13 H13 V8 H16 Z" />
            <path d="M3 15 L7 11 L7 13 L12 13 L11 15 L7 15 L7 17 Z" transform="rotate(120 12 12)" />
            <path d="M3 15 L7 11 L7 13 L12 13 L11 15 L7 15 L7 17 Z" transform="rotate(240 12 12)" />
          </g>
        )}

        {t === 'verde' && (
          <path
            d="M50 51 C43 54 41 62 45 68 C49 74 58 74 58 64 C58 56 54 52 50 51 Z"
            fill={c.logo}
          />
        )}

        {t === 'negra' && (
          <g transform="translate(43, 55) scale(0.65)" stroke={c.logo} strokeWidth="2.5" fill="none">
            <line x1="4" y1="7" x2="18" y2="7" />
            <path d="M6 7 L7 18 Q7 19 8 19 L14 19 Q15 19 15 18 L16 7" />
            <line x1="9" y1="10" x2="9" y2="16" />
            <line x1="13" y1="10" x2="13" y2="16" />
          </g>
        )}

        {/* Etiqueta con el nombre de la Caneca */}
        <rect x="28" y="86" width="44" height="16" rx="4" fill={c.tapa} stroke={c.borde} strokeWidth="1.5" />
        <text
          x="50"
          y="98"
          fill={c.texto}
          fontSize="9"
          fontWeight="900"
          textAnchor="middle"
          letterSpacing="0.5"
          fontFamily="system-ui, sans-serif"
        >
          {c.label}
        </text>
      </svg>
    </div>
  );
}
