import React from 'react';
import { Map, Volume2, VolumeX, Sparkles, User } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

export default function HeaderNav({
  nombre,
  puntos,
  moduloActual,
  totalModulos,
  onAbrirMapa,
  onIrABienvenida,
  audioHabilitado,
  setAudioHabilitado,
  estaNarrando,
  detenerNarracion
}) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 md:px-8 lg:px-12 py-2.5 md:py-3.5 shadow-sm safe-pt">
      <div className="max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto flex items-center justify-between gap-3 md:gap-6">
        {/* Lado izquierdo: Título de la app en desktop + Botón Mapa */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              playClickSound();
              onAbrirMapa();
            }}
            className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 text-xs md:text-sm font-bold transition-all border border-slate-200 cursor-pointer shadow-sm"
            title="Ver mapa de módulos"
          >
            <Map size={18} className="text-emerald-600 shrink-0" />
            <span>Módulo {moduloActual} de {totalModulos}</span>
          </button>

          <span className="hidden lg:inline text-xs font-extrabold text-slate-400 uppercase tracking-wider">
            | Cartilla Virtual de Reciclaje
          </span>
        </div>

        {/* Centro: Puntuación Acumulada */}
        <div className="flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-amber-50 border border-amber-300 text-amber-900 font-extrabold text-sm md:text-base shadow-inner">
          <Sparkles size={18} className="text-amber-500 fill-amber-400 animate-pulse-gentle shrink-0" />
          <span>{puntos} puntos</span>
        </div>

        {/* Lado derecho: Usuario y Control de Audio */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Botón Usuario / Inicio */}
          <button
            onClick={() => {
              playClickSound();
              onIrABienvenida();
            }}
            className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs md:text-sm font-bold flex items-center gap-2 active:scale-90 cursor-pointer transition-colors"
            title="Editar mi nombre o ver bienvenida"
          >
            <User size={18} className="text-emerald-600 shrink-0" />
            <span className="max-w-[80px] md:max-w-[160px] truncate hidden sm:inline">
              {nombre || 'Mi Perfil'}
            </span>
          </button>

          {/* Control de Audio / Narrador */}
          <div>
            {estaNarrando ? (
              <button
                onClick={() => {
                  playClickSound();
                  detenerNarracion();
                }}
                className="px-3 py-1.5 md:py-2 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-700 border border-rose-300 animate-pulse text-xs md:text-sm font-bold flex items-center gap-1.5 cursor-pointer"
                title="Detener voz"
              >
                <VolumeX size={18} />
                <span>Callar</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  playClickSound();
                  setAudioHabilitado(!audioHabilitado);
                }}
                className={`p-2 md:px-3 md:py-2 rounded-full transition-all active:scale-90 flex items-center gap-1.5 cursor-pointer ${
                  audioHabilitado 
                    ? 'bg-emerald-100 hover:bg-emerald-200 text-emerald-700 border border-emerald-300' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-400 border border-slate-200'
                }`}
                title={audioHabilitado ? 'Voz activada' : 'Voz silenciada'}
              >
                {audioHabilitado ? <Volume2 size={18} /> : <VolumeX size={18} />}
                <span className="hidden md:inline text-xs font-bold">
                  {audioHabilitado ? 'Voz Activa' : 'Sin Voz'}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
