import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Volume2, 
  Award, 
  RotateCcw, 
  BookOpen, 
  ShieldCheck, 
  MapPin, 
  User,
  GraduationCap
} from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

export default function LandingPage({
  nombre,
  setNombre,
  inputNombre,
  setInputNombre,
  onIniciarCartilla,
  modulosAprobados,
  totalModulos,
  puntos,
  completado,
  onVerCertificado,
  onReiniciar,
  onNarrarTexto
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-800 antialiased">
      {/* 1. Barra Superior Institucional con Logos Oficiales */}
      <header className="bg-white border-b border-slate-200 shadow-sm py-3 px-4 md:px-8 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Logo UNIMINUTO */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logo-uniminuto.png"
              alt="Logo UNIMINUTO y Acreditación de Alta Calidad"
              className="h-10 md:h-14 w-auto object-contain"
            />
            <div className="border-l border-slate-300 pl-3 hidden sm:block">
              <span className="block text-[11px] md:text-xs font-black text-slate-700 leading-tight">
                Centro de Educación para el Desarrollo (CED)
              </span>
              <span className="block text-[10px] md:text-[11px] font-bold text-emerald-700">
                Práctica en Responsabilidad Social • Ecoescuelas Digitales
              </span>
            </div>
          </div>

          {/* Logo Oficial de la Fundación Bajo la Mano de Dios */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-3 py-1.5 shadow-xs">
            <img
              src="/images/logo-fundacion.jpg"
              alt="Logo Oficial Fundación Bajo la Mano de Dios"
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover shadow-sm border border-slate-200 shrink-0"
            />
            <div className="text-left">
              <span className="block text-[10px] md:text-[11px] font-black uppercase tracking-wider text-slate-800 leading-none">
                Fundación Bajo la Mano de Dios
              </span>
              <span className="block text-[9px] md:text-[10px] font-semibold text-slate-500 mt-0.5">
                Sede La Balastreta • Manizales, Caldas
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Cuerpo Principal de la Landing Page */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-8 py-8 md:py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          
          {/* Columna Izquierda: Presentación, Resumen, Alianza y Objetivos */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Logo Oficial de la Aplicación */}
            <div className="flex items-center gap-4">
              <img
                src="/images/logo-reciclando.png"
                alt="Logo ReciclAndo App"
                className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-md"
              />
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider mb-1">
                  <Sparkles size={13} className="text-emerald-600" />
                  Cartilla Web Progresiva (PWA)
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  ReciclAndo App
                </h1>
                <p className="text-sm md:text-base font-bold text-emerald-700">
                  Formación Técnica en Economía Circular y Mediación Digital
                </p>
              </div>
            </div>

            {/* Tarjeta de la Organización Aliada con su Imagen Oficial */}
            <div className="bg-white rounded-3xl p-5 md:p-6 border-2 border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <img
                src="/images/logo-fundacion.jpg"
                alt="Emblema Fundación Bajo la Mano de Dios"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl object-cover shadow-md border-2 border-amber-300 shrink-0"
              />
              <div className="space-y-1.5 text-center sm:text-left">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full inline-block">
                  Comunidad Aliada en Territorio
                </span>
                <h3 className="text-sm md:text-base font-black text-slate-900 leading-snug">
                  Fundación de Rehabilitación y Resocialización 'Bajo la Mano de Dios'
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                  Sede campestre La Balastreta (Vía Neira, Manizales) • Representante Legal: <strong>Cristian Fabián de la Rosa Ramírez</strong>. El proyecto articula el reciclaje técnico como terapia ocupacional, autogestión solidaria y resocialización digna.
                </p>
              </div>
            </div>

            {/* Resumen Ejecutivo del Proyecto */}
            <div className="bg-white rounded-3xl p-5 md:p-7 border-2 border-slate-200 shadow-sm space-y-3.5">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base md:text-lg border-b border-slate-100 pb-2">
                <BookOpen size={20} className="text-emerald-600" />
                <span>¿De qué trata esta Cartilla Virtual?</span>
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                Esta cartilla interactiva es una herramienta de educación ambiental diseñada especialmente para la <strong>Fundación de Rehabilitación y Resocialización 'Bajo la Mano de Dios'</strong>, en articulación con el proyecto <strong>Ecoescuelas Digitales</strong> de <strong>UNIMINUTO</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                Enseña de forma lúdica y accesible el código de colores oficial de canecas, la separación técnica de residuos, y la reutilización total de envases de vidrio, transformando el reciclaje en una fuente de autogestión y resocialización digna.
              </p>
            </div>

            {/* Objetivo General */}
            <div className="bg-emerald-50/80 rounded-3xl p-5 md:p-6 border-2 border-emerald-300 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-black text-sm md:text-base uppercase tracking-wider">
                <ShieldCheck size={20} className="text-emerald-700" />
                <span>Objetivo General del Proyecto</span>
              </div>
              <p className="text-xs md:text-sm text-emerald-950 font-semibold leading-relaxed">
                «Implementar un programa pedagógico de formación técnica en economía circular y reciclaje estructurado, apoyado en la cartilla web interactiva <em>ReciclAndo App</em>, dirigido a los integrantes de la Fundación Bajo la Mano de Dios en Manizales, con el propósito de optimizar la gestión de residuos, generar capacidades de autogestión económica y consolidar líderes ambientales multiplicadores.»
              </p>
            </div>

            {/* Características de Inclusión y Accesibilidad */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 text-center shadow-xs">
                <span className="text-2xl block mb-1">📶</span>
                <span className="block text-xs font-black text-slate-800">100% Offline</span>
                <span className="text-[11px] text-slate-500">Funciona sin internet una vez abierta</span>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 text-center shadow-xs">
                <span className="text-2xl block mb-1">🔊</span>
                <span className="block text-xs font-black text-slate-800">Narrador de Voz</span>
                <span className="text-[11px] text-slate-500">Lectura guiada para baja escolaridad</span>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 text-center shadow-xs">
                <span className="text-2xl block mb-1">📜</span>
                <span className="block text-xs font-black text-slate-800">Certificado PDF</span>
                <span className="text-[11px] text-slate-500">Descargable y para WhatsApp</span>
              </div>
            </div>

            {/* Botón de Audio para escuchar el resumen */}
            <div>
              <button
                onClick={() => {
                  playClickSound();
                  onNarrarTexto(
                    "¡Bienvenido a ReciclAndo App! Esta cartilla interactiva fue creada para la Fundación Bajo la Mano de Dios y el proyecto Ecoescuelas Digitales de UNIMINUTO. Aquí aprenderás a separar los residuos, crear madera plástica con paquetes de frituras, reutilizar frascos de vidrio y ganarte tu certificado oficial en PDF."
                  );
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 text-emerald-800 rounded-full border-2 border-emerald-400 font-extrabold text-xs md:text-sm shadow-sm cursor-pointer transition-all active:scale-95"
              >
                <Volume2 size={20} className="text-emerald-600" />
                <span>Toca aquí para escuchar el resumen en voz alta</span>
              </button>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta de Acceso y Registro de Nombre */}
          <div className="lg:col-span-5 mt-8 lg:mt-0 space-y-4">
            
            {/* Tarjeta de Registro */}
            <div className="bg-white p-6 md:p-8 rounded-4xl border-3 border-emerald-500 shadow-xl space-y-5">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                  <User size={34} />
                </div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                  {nombre ? `¡Hola de nuevo, ${nombre}!` : '¡Comienza tu Aprendizaje!'}
                </h2>
                <p className="text-xs md:text-sm text-slate-500 mt-1">
                  {nombre 
                    ? 'Puedes continuar con tu formación o editar tu nombre para el Certificado:' 
                    : 'Escribe tu nombre para personalizar tu cartilla y expedir tu Certificado Oficial en PDF:'}
                </p>
              </div>

              {/* Campo de Nombre */}
              <div>
                <label htmlFor="nombre-landing" className="block text-xs font-black uppercase tracking-wider text-slate-600 mb-1.5">
                  Nombre Completo o Apodo
                </label>
                <input
                  id="nombre-landing"
                  type="text"
                  value={inputNombre}
                  onChange={(e) => setInputNombre(e.target.value)}
                  placeholder="Ej: Andrés Echeverri o Don Pedro"
                  className="w-full text-lg md:text-xl p-4 border-2 border-slate-300 focus:border-emerald-500 rounded-2xl outline-none font-bold text-slate-900 transition-colors bg-slate-50 focus:bg-white"
                  maxLength={45}
                />
              </div>

              {/* Indicador de progreso si ya había avanzado */}
              {modulosAprobados.length > 0 && (
                <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-center justify-between text-xs font-bold text-emerald-800">
                  <span>Progreso: {modulosAprobados.length} de {totalModulos} módulos</span>
                  <span>⭐ {puntos} puntos</span>
                </div>
              )}

              {/* Botón Principal para Entrar a la Cartilla */}
              <button
                onClick={() => {
                  playClickSound();
                  const nombreFinal = inputNombre.trim() || 'Guardián del Planeta';
                  setNombre(nombreFinal);
                  onIniciarCartilla();
                }}
                className="w-full min-h-[58px] md:min-h-[66px] py-4 px-6 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-lg md:text-xl rounded-2xl shadow-lg flex items-center justify-center gap-3 transition-transform cursor-pointer"
              >
                <span>{modulosAprobados.length > 0 ? '¡Continuar con la Cartilla!' : '¡Ingresar a la Cartilla!'}</span>
                <ArrowRight size={24} />
              </button>

              {/* Si ya completó todo el curso: acceso directo al certificado */}
              {completado && (
                <button
                  onClick={() => {
                    playClickSound();
                    onVerCertificado();
                  }}
                  className="w-full py-3.5 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 text-amber-900 font-extrabold text-sm md:text-base rounded-2xl flex items-center justify-center gap-2 active:scale-95 shadow-sm cursor-pointer transition-colors"
                >
                  <Award size={22} className="text-amber-600" />
                  <span>Ver y Descargar mi Certificado PDF</span>
                </button>
              )}

              {/* Opción de reiniciar para nuevo usuario */}
              {modulosAprobados.length > 0 && (
                <button
                  onClick={() => {
                    playClickSound();
                    if (window.confirm('¿Deseas reiniciar el progreso para que otra persona empiece desde cero?')) {
                      onReiniciar();
                      setInputNombre('');
                    }
                  }}
                  className="w-full py-2 text-xs text-slate-400 hover:text-slate-600 font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw size={14} />
                  <span>Reiniciar progreso para otra persona</span>
                </button>
              )}
            </div>

            {/* Créditos de Práctica en Responsabilidad Social */}
            <div className="bg-slate-100 border border-slate-200 rounded-3xl p-4 text-center text-xs text-slate-600 space-y-1">
              <div className="flex items-center justify-center gap-1.5 font-black text-slate-800">
                <GraduationCap size={16} className="text-emerald-600" />
                <span>Facilitador del Proyecto Social</span>
              </div>
              <p className="font-bold text-slate-700">
                Andrés Echeverri • ID: 1003297
              </p>
              <p className="text-[11px] text-slate-500">
                Estudiante en Práctica de Responsabilidad Social • UNIMINUTO
              </p>
            </div>

          </div>

        </div>
      </main>

      {/* 3. Footer Institucional */}
      <footer className="bg-slate-900 text-slate-400 py-6 px-4 md:px-8 border-t border-slate-800 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="font-bold text-slate-200">
              Corporación Universitaria Minuto de Dios – UNIMINUTO | CED Manizales
            </span>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Proyecto Social de Formación: Ecoescuelas Digitales en articulación con la Fundación 'Bajo la Mano de Dios'.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 font-semibold text-[11px]">
            <MapPin size={14} className="text-emerald-500 shrink-0" />
            <span>Sector La Balastreta, Vía Neira • Manizales, Caldas</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
