import React, { useState } from 'react';
import { Volume2, Sparkles, CheckCircle, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import CanecaIcon from './CanecaIcon';
import { playSuccessSound, playErrorSound, playClickSound } from '../utils/soundEffects';

export default function TriviaReto({
  modulo,
  onAprobarReto,
  onNarrarTexto,
  estaNarrando,
  esUltimoModulo
}) {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [resultado, setResultado] = useState(null); // 'CORRECTO' | 'INCORRECTO' | null

  const reto = modulo.reto;

  const manejarRespuesta = (opcion) => {
    playClickSound();
    setOpcionSeleccionada(opcion);

    if (opcion.esCorrecta) {
      setResultado('CORRECTO');
      playSuccessSound();

      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });

      onNarrarTexto(reto.audioFelicitacion || reto.mensajeFelicitacion);
    } else {
      setResultado('INCORRECTO');
      playErrorSound();
      onNarrarTexto(`Casi. ${opcion.motivo}. Toca intentar de nuevo.`);
    }
  };

  const reintentar = () => {
    playClickSound();
    setOpcionSeleccionada(null);
    setResultado(null);
  };

  return (
    <div className="flex-1 max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto w-full p-4 md:p-8 lg:p-10 flex flex-col justify-between animate-in fade-in">
      <div className="lg:grid lg:grid-cols-12 lg:gap-10 lg:items-start my-auto">
        {/* Columna Izquierda (Desktop): Pregunta del Reto */}
        <div className="lg:col-span-5 mb-4 lg:mb-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs md:text-sm font-black uppercase tracking-wider mb-3 md:mb-5 border border-amber-300">
            <Sparkles size={16} className="text-amber-600" />
            <span>Trivia del Saber • Módulo {modulo.numero}</span>
          </div>

          <div className="bg-white rounded-3xl md:rounded-4xl p-6 md:p-8 border-2 border-slate-200 shadow-sm relative text-left">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-black text-slate-900 leading-snug">
                {reto.pregunta}
              </h2>
              <button
                onClick={() => {
                  playClickSound();
                  onNarrarTexto(reto.audioPregunta || reto.pregunta);
                }}
                className={`p-3 md:p-4 rounded-2xl md:rounded-3xl shrink-0 transition-transform active:scale-90 cursor-pointer ${
                  estaNarrando ? 'bg-amber-500 text-white animate-pulse' : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
                }`}
                title="Escuchar la pregunta"
                aria-label="Escuchar la pregunta"
              >
                <Volume2 size={26} />
              </button>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-slate-500 font-semibold mt-3 md:mt-5">
              👉 Selecciona la respuesta correcta para aprobar el módulo:
            </p>
          </div>
        </div>

        {/* Columna Derecha (Desktop): Opciones y Resultados */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          {/* Lista de Opciones */}
          <div className="space-y-3.5 md:space-y-4">
            {reto.opciones.map((op) => {
              const fueElegida = opcionSeleccionada?.id === op.id;
              let estiloBoton = 'bg-white border-slate-200 text-slate-800 hover:border-emerald-400 hover:bg-slate-50 active:scale-98 cursor-pointer';

              if (resultado === 'CORRECTO' && op.esCorrecta) {
                estiloBoton = 'bg-emerald-500 border-emerald-600 text-white shadow-lg ring-4 ring-emerald-200';
              } else if (resultado === 'INCORRECTO' && fueElegida) {
                estiloBoton = 'bg-rose-50 border-rose-400 text-rose-900 ring-2 ring-rose-200';
              }

              return (
                <button
                  key={op.id}
                  onClick={() => {
                    if (resultado !== 'CORRECTO') {
                      manejarRespuesta(op);
                    }
                  }}
                  disabled={resultado === 'CORRECTO'}
                  className={`w-full min-h-[64px] md:min-h-[78px] p-4 md:p-6 rounded-2xl md:rounded-3xl border-2 text-left font-bold text-base sm:text-lg md:text-xl lg:text-2xl flex items-center gap-4 md:gap-5 transition-all shadow-sm ${estiloBoton}`}
                >
                  {op.tipoCaneca || op.emoji?.startsWith('caneca-') ? (
                    <CanecaIcon
                      tipo={op.tipoCaneca || op.emoji.replace('caneca-', '')}
                      className="w-10 h-12 md:w-14 md:h-16 shrink-0"
                    />
                  ) : (
                    <span className="text-3xl md:text-4xl lg:text-5xl shrink-0">{op.emoji}</span>
                  )}
                  <span className="flex-1 leading-snug">{op.texto}</span>
                  {resultado === 'CORRECTO' && op.esCorrecta && (
                    <CheckCircle size={28} className="shrink-0 text-white" />
                  )}
                  {resultado === 'INCORRECTO' && fueElegida && (
                    <XCircle size={28} className="shrink-0 text-rose-600" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Área de Retroalimentación y Continuación */}
          <div className="mt-2">
            {resultado === 'CORRECTO' && (
              <div className="bg-emerald-50 border-2 border-emerald-500 rounded-3xl md:rounded-4xl p-5 md:p-8 text-center shadow-lg animate-in zoom-in-95">
                <div className="flex items-center justify-center gap-2 text-emerald-800 font-black text-lg md:text-2xl mb-2">
                  <Sparkles size={26} className="text-emerald-600 fill-emerald-400" />
                  ¡RESPUESTA CORRECTA! +{modulo.puntosReto} PUNTOS
                </div>
                <p className="text-sm md:text-xl font-medium text-emerald-900 mb-5 leading-relaxed max-w-xl mx-auto">
                  {reto.mensajeFelicitacion}
                </p>
                <button
                  onClick={() => {
                    playClickSound();
                    onAprobarReto(modulo.puntosReto);
                  }}
                  className="w-full min-h-[58px] md:min-h-[72px] py-4 px-8 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-lg md:text-2xl rounded-2xl md:rounded-3xl shadow-md flex items-center justify-center gap-3 transition-transform cursor-pointer"
                >
                  {esUltimoModulo ? (
                    <>
                      <Award size={28} />
                      <span>¡Reclamar mi Certificado Oficial!</span>
                    </>
                  ) : (
                    <>
                      <span>¡Avanzar al Siguiente Módulo!</span>
                      <ArrowRight size={28} />
                    </>
                  )}
                </button>
              </div>
            )}

            {resultado === 'INCORRECTO' && (
              <div className="bg-amber-50 border-2 border-amber-400 rounded-3xl md:rounded-4xl p-5 md:p-7 text-center shadow-md animate-in shake">
                <p className="text-base md:text-xl font-extrabold text-amber-950 mb-1">
                  🤔 ¡Casi lo logras!
                </p>
                <p className="text-xs md:text-base font-semibold text-amber-900 mb-4">
                  {opcionSeleccionada?.motivo || 'Recuerda las recomendaciones y vuelve a intentarlo.'}
                </p>
                <button
                  onClick={reintentar}
                  className="w-full min-h-[52px] md:min-h-[66px] py-3.5 md:py-4 px-6 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-black text-base md:text-xl rounded-2xl md:rounded-3xl shadow flex items-center justify-center gap-2.5 transition-transform cursor-pointer"
                >
                  <RotateCcw size={22} />
                  <span>Intentar de nuevo</span>
                </button>
              </div>
            )}

            {!resultado && (
              <div className="text-center py-2">
                <span className="text-xs md:text-sm text-slate-500 font-semibold">
                  🔒 Debes responder correctamente para aprobar y desbloquear el siguiente tema.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
