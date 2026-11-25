import React from 'react';

export default function BotellaVidrioIcon({ size, className = '' }) {
  const estilo = size ? { width: size, height: size * 1.15 } : undefined;

  return (
    <div
      style={estilo}
      className={`inline-flex items-center justify-center select-none ${className}`}
    >
      <svg
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Sombra base */}
        <ellipse cx="50" cy="108" rx="28" ry="5" fill="#CBD5E1" opacity="0.6" />

        {/* Pico / Anillo superior de la botella */}
        <rect x="43" y="6" width="14" height="6" rx="3" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2.5" />

        {/* Cuello de la botella */}
        <path
          d="M45 12 L45 28 C45 36 34 44 34 52 L34 100 Q34 106 42 106 L58 106 Q66 106 66 100 L66 52 C66 44 55 36 55 28 L55 12 Z"
          fill="#E0F2FE"
          stroke="#0284C7"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Líquido o tono de vidrio transparente verdoso/azulado */}
        <path
          d="M37 58 C37 49 46 42 46 32 L54 32 C54 42 63 49 63 58 L63 98 Q63 103 57 103 L43 103 Q37 103 37 98 Z"
          fill="#38BDF8"
          opacity="0.25"
        />

        {/* Brillo vertical reflejo de cristal (izquierda) */}
        <path
          d="M39 54 L39 98"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M47 16 L47 28"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Reflejo fino secundario (derecha) */}
        <path
          d="M61 58 L61 96"
          stroke="#BAE6FD"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Etiqueta ecológica central de vidrio reutilizable */}
        <rect x="40" y="64" width="20" height="24" rx="3" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
        <g transform="translate(43, 68) scale(0.6)" fill="#16A34A">
          <path d="M12 2 L8 8 H11 V13 H13 V8 H16 Z" />
          <path d="M3 15 L7 11 L7 13 L12 13 L11 15 L7 15 L7 17 Z" transform="rotate(120 12 12)" />
          <path d="M3 15 L7 11 L7 13 L12 13 L11 15 L7 15 L7 17 Z" transform="rotate(240 12 12)" />
        </g>
        <text
          x="50"
          y="84"
          fill="#0369A1"
          fontSize="5"
          fontWeight="900"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          VIDRIO
        </text>
      </svg>
    </div>
  );
}
