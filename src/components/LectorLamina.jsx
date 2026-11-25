import React, { useEffect } from 'react';
import { Volume2, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import CanecaIcon from './CanecaIcon';
import BotellaVidrioIcon from './BotellaVidrioIcon';
import { playClickSound } from '../utils/soundEffects';

export default function LectorLamina({
  modulo,
  paginaActual,
  setPaginaActual,
  onIrAReto,
  onNarrarTexto,
  estaNarrando
}) {
  const lamina = modulo.laminas[paginaActual] || modulo.laminas[0];
  const totalLaminas = modulo.laminas.length;
  const esUltimaLamina = paginaActual === totalLaminas - 1;

  const escucharLamina = () => {
    playClickSound();
    const textoCompleto = `${lamina.titulo}. ${lamina.texto}. Consejo: ${lamina.pista}`;
    onNarrarTexto(lamina.audioTexto || textoCompleto);
  };

  // Navegación con teclado en computadores de escritorio (Flechas ← y →)
  useEffect(() => {
    const manejarTeclado = (e) => {
      if (e.key === 'ArrowRight') {
        if (!esUltimaLamina) {
          playClickSound();
          setPaginaActual(prev => prev + 1);
        } else {
          playClickSound();
          onIrAReto();
        }
      } else if (e.key === 'ArrowLeft' && paginaActual > 0) {
        playClickSound();
        setPaginaActual(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', manejarTeclado);
    return () => window.removeEventListener('keydown', manejarTeclado);
  }, [paginaActual, esUltimaLamina, onIrAReto, setPaginaActual]);

  const renderVisual = () => {
    if (lamina.tipoCaneca) {
      return <CanecaIcon tipo={lamina.tipoCaneca} className="w-28 h-32 md:w-40 md:h-48 lg:w-48 lg:h-56 mb-2" />;
    }
    if (lamina.emoji === 'caneca-blanca') {
      return <CanecaIcon tipo="blanca" className="w-28 h-32 md:w-40 md:h-48 lg:w-48 lg:h-56 mb-2" />;
    }
    if (lamina.emoji === 'caneca-verde') {
      return <CanecaIcon tipo="verde" className="w-28 h-32 md:w-40 md:h-48 lg:w-48 lg:h-56 mb-2" />;
    }
    if (lamina.emoji === 'caneca-negra') {
      return <CanecaIcon tipo="negra" className="w-28 h-32 md:w-40 md:h-48 lg:w-48 lg:h-56 mb-2" />;
    }
    if (lamina.emoji === 'botella-vidrio') {
      return <BotellaVidrioIcon className="w-28 h-32 md:w-40 md:h-48 lg:w-48 lg:h-56 mb-2" />;
    }
    return (
      <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] select-none drop-shadow-sm">
        {lamina.emoji || '🌱'}
      </span>
    );
  };

  return (
    <div className="flex-1 max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto w-full p-4 md:p-8 lg:p-10 flex flex-col justify-between animate-in fade-in">
      {/* Indicador de progreso de láminas */}
      <div className="mb-3 md:mb-6">
        <div className="flex justify-between items-center text-xs md:text-base font-black text-slate-500 mb-2 px-1">
          <span className="uppercase tracking-wider">{modulo.titulo}</span>
          <span>Lámina {paginaActual + 1} de {totalLaminas}</span>
        </div>
        <div className="w-full bg-slate-200 h-2.5 md:h-4 rounded-full overflow-hidden">
          <div
            className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
            style={{ width: `${((paginaActual + 1) / totalLaminas) * 100}%` }}
          />
        </div>
      </div>

      {/* Tarjeta principal de la lámina (Diseño dual para móvil / escritorio) */}
      <article
        className={`flex-1 rounded-3xl md:rounded-4xl lg:rounded-5xl p-6 md:p-10 lg:p-12 border-2 shadow-sm my-auto ${modulo.colorTema.fondo} ${modulo.colorTema.borde} flex flex-col justify-between`}
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center my-auto">
          {/* Columna Izquierda: Ilustración y botón de voz */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center pb-6 lg:pb-0 lg:border-r lg:border-slate-200/60 lg:pr-8">
            <div className="w-full flex items-center justify-between lg:justify-center gap-3 mb-4 lg:mb-6">
              <span className={`text-[11px] md:text-sm lg:text-base font-black uppercase tracking-wider px-3.5 md:px-5 py-1 md:py-1.5 rounded-full ${modulo.colorTema.badge} shadow-sm`}>
                Lámina {paginaActual + 1}
              </span>

              <button
                onClick={escucharLamina}
                className={`p-2.5 md:p-3.5 rounded-2xl md:rounded-3xl border flex items-center gap-2 font-bold text-xs md:text-sm lg:text-base shadow-sm transition-transform active:scale-90 cursor-pointer ${
                  estaNarrando
                    ? 'bg-amber-500 text-white border-amber-600 animate-pulse'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
                title="Escuchar explicación en voz alta"
                aria-label="Escuchar explicación en voz alta"
              >
                <Volume2 size={22} className={estaNarrando ? 'animate-bounce' : 'text-emerald-600'} />
                <span>{estaNarrando ? 'Hablando...' : 'Escuchar'}</span>
              </button>
            </div>

            <div className="my-auto py-2 animate-pulse-gentle flex items-center justify-center">
              {renderVisual()}
            </div>
          </div>

          {/* Columna Derecha: Título, Explicación y Consejo Práctico */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-3 md:mb-6">
              {lamina.titulo}
            </h3>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold leading-relaxed text-slate-700 mb-4 md:mb-6">
              {lamina.texto}
            </p>

            {/* Caja de Consejo / Pista */}
            {lamina.pista && (
              <div className="w-full bg-white/95 border border-slate-200 rounded-2xl md:rounded-3xl p-4 md:p-6 text-left flex items-start gap-3.5 shadow-sm">
                <span className="text-2xl md:text-4xl shrink-0">💡</span>
                <div>
                  <span className="block text-xs md:text-sm font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">
                    Consejo Práctico
                  </span>
                  <p className="text-sm md:text-lg lg:text-xl font-bold text-slate-800 leading-snug">
                    {lamina.pista}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Barra de Navegación Inferior */}
      <div className="flex items-center gap-3 md:gap-5 mt-4 md:mt-8 safe-pb">
        {paginaActual > 0 && (
          <button
            onClick={() => {
              playClickSound();
              setPaginaActual(prev => prev - 1);
            }}
            className="min-h-[56px] md:min-h-[68px] px-6 md:px-10 bg-white hover:bg-slate-100 border-2 border-slate-300 active:scale-95 text-slate-700 font-extrabold text-base md:text-xl rounded-2xl md:rounded-3xl flex items-center justify-center gap-2.5 shadow-sm transition-all cursor-pointer"
          >
            <ArrowLeft size={22} />
            <span>Atrás</span>
          </button>
        )}

        {!esUltimaLamina ? (
          <button
            onClick={() => {
              playClickSound();
              setPaginaActual(prev => prev + 1);
            }}
            className="flex-1 min-h-[56px] md:min-h-[68px] py-3.5 md:py-4 px-6 md:px-12 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-lg md:text-2xl rounded-2xl md:rounded-3xl shadow-md flex items-center justify-center gap-3 transition-transform ml-auto cursor-pointer"
          >
            <span>Siguiente Lámina</span>
            <ArrowRight size={24} />
          </button>
        ) : (
          <button
            onClick={() => {
              playClickSound();
              onIrAReto();
            }}
            className="flex-1 min-h-[56px] md:min-h-[68px] py-3.5 md:py-4 px-6 md:px-12 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-black text-lg md:text-2xl rounded-2xl md:rounded-3xl shadow-lg flex items-center justify-center gap-3 transition-transform animate-pulse-gentle ml-auto cursor-pointer"
          >
            <Sparkles size={26} className="fill-white" />
            <span>¡Ir a la Evaluación del Módulo!</span>
          </button>
        )}
      </div>
    </div>
  );
}
