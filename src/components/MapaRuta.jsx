import React from 'react';
import { CheckCircle2, Lock, Play, X, Sparkles } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

export default function MapaRuta({
  modulos,
  moduloActual,
  modulosAprobados,
  onSeleccionarModulo,
  onCerrar,
  puntosTotales,
  puntosGanados
}) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex flex-col justify-end sm:justify-center p-0 sm:p-4 md:p-6 animate-in fade-in">
      <div className="bg-white w-full max-w-md md:max-w-2xl mx-auto rounded-t-3xl sm:rounded-3xl md:rounded-4xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Encabezado del modal */}
        <div className="p-5 md:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
              🗺️ Ruta de Aprendizaje
            </h2>
            <p className="text-xs md:text-sm text-slate-500 font-semibold mt-0.5">
              Puntos: {puntosGanados} / {puntosTotales} pts
            </p>
          </div>
          <button
            onClick={() => {
              playClickSound();
              onCerrar();
            }}
            className="p-2.5 md:p-3 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 active:scale-90 transition-all"
            aria-label="Cerrar mapa"
          >
            <X size={22} />
          </button>
        </div>

        {/* Lista de módulos con bloqueo estricto */}
        <div className="p-4 md:p-6 space-y-3 md:space-y-4 overflow-y-auto flex-1">
          {modulos.map((mod) => {
            const estaAprobado = modulosAprobados.includes(mod.id);
            const esActual = mod.id === moduloActual;
            const estaDesbloqueado = estaAprobado || mod.id <= modulosAprobados.length + 1;

            return (
              <div
                key={mod.id}
                onClick={() => {
                  if (estaDesbloqueado) {
                    playClickSound();
                    onSeleccionarModulo(mod.id);
                    onCerrar();
                  }
                }}
                className={`w-full p-4 md:p-5 rounded-2xl md:rounded-3xl border-2 transition-all flex items-center gap-3.5 md:gap-5 text-left select-none ${
                  estaAprobado
                    ? 'bg-emerald-50 border-emerald-300 cursor-pointer hover:bg-emerald-100 active:scale-98'
                    : esActual
                    ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300 shadow-md cursor-pointer active:scale-98'
                    : estaDesbloqueado
                    ? 'bg-white border-slate-200 cursor-pointer hover:bg-slate-50'
                    : 'bg-slate-100/70 border-slate-200 opacity-60 cursor-not-allowed'
                }`}
              >
                {/* Ícono de estado */}
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl flex items-center justify-center shrink-0 font-black text-lg md:text-2xl ${
                  estaAprobado
                    ? 'bg-emerald-500 text-white'
                    : esActual
                    ? 'bg-amber-500 text-white animate-pulse'
                    : estaDesbloqueado
                    ? 'bg-slate-200 text-slate-700'
                    : 'bg-slate-200 text-slate-400'
                }`}>
                  {estaAprobado ? (
                    <CheckCircle2 size={28} />
                  ) : esActual ? (
                    <Play size={26} className="fill-white ml-0.5" />
                  ) : estaDesbloqueado ? (
                    <span>{mod.numero}</span>
                  ) : (
                    <Lock size={24} />
                  )}
                </div>

                {/* Texto del módulo */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-wider px-2 md:px-3 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                      Módulo {mod.numero}
                    </span>
                    {estaAprobado && (
                      <span className="text-[10px] md:text-xs font-bold text-emerald-700 flex items-center gap-1">
                        <Sparkles size={14} /> +{mod.puntosReto} pts
                      </span>
                    )}
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base md:text-xl leading-snug mt-1 truncate">
                    {mod.titulo}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 truncate mt-0.5">
                    {estaAprobado
                      ? '✅ Aprobado con éxito'
                      : esActual
                      ? '👉 En curso actual'
                      : estaDesbloqueado
                      ? 'Toca para iniciar'
                      : '🔒 Aprueba el módulo anterior'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pie del modal */}
        <div className="p-4 md:p-5 bg-slate-50 border-t border-slate-100 text-center safe-pb">
          <p className="text-xs md:text-sm text-slate-500 font-medium">
            💡 Completa y aprueba todas las trivias para obtener tu certificado oficial.
          </p>
        </div>
      </div>
    </div>
  );
}
