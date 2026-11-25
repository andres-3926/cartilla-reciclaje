import React, { useState } from 'react';
import { cartillaData, TOTAL_PUNTOS_MAX } from './data/cartillaData';
import { useProgress } from './hooks/useProgress';
import HeaderNav from './components/HeaderNav';
import MapaRuta from './components/MapaRuta';
import LectorLamina from './components/LectorLamina';
import TriviaReto from './components/TriviaReto';
import CertificadoView from './components/CertificadoView';
import LandingPage from './components/LandingPage';

export default function App() {
  const {
    nombre,
    setNombre,
    moduloActual,
    modulosAprobados,
    puntos,
    completado,
    totalModulos,
    aprobarModuloActual,
    irAModulo,
    reiniciarProgreso
  } = useProgress();

  // Vistas: 'LANDING' | 'LECTOR' | 'RETO' | 'CERTIFICADO'
  const [vista, setVista] = useState('LANDING');
  const [paginaActual, setPaginaActual] = useState(0);
  const [inputNombre, setInputNombre] = useState(nombre || '');
  const [mapaAbierto, setMapaAbierto] = useState(false);
  const [audioHabilitado, setAudioHabilitado] = useState(true);
  const [estaNarrando, setEstaNarrando] = useState(false);

  // Módulo activo
  const modulo = cartillaData.find(m => m.id === moduloActual) || cartillaData[0];

  // Motor de lectura por voz nativo (Web Speech API) - Funciona 100% offline
  const narrarTexto = (texto) => {
    if (!audioHabilitado) return;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = 'es-CO';
      utterance.rate = 0.92;
      utterance.pitch = 1.0;

      utterance.onstart = () => setEstaNarrando(true);
      utterance.onend = () => setEstaNarrando(false);
      utterance.onerror = () => setEstaNarrando(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  const detenerNarracion = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setEstaNarrando(false);
    }
  };

  const cambiarModulo = (id) => {
    detenerNarracion();
    setPaginaActual(0);
    irAModulo(id);
    setVista('LECTOR');
  };

  // Manejo de aprobación del reto
  const handleAprobarReto = (puntosGanados) => {
    detenerNarracion();
    const esUltimo = moduloActual === totalModulos;
    aprobarModuloActual(puntosGanados);
    setPaginaActual(0);

    if (esUltimo) {
      setVista('CERTIFICADO');
    } else {
      setVista('LECTOR');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-800 antialiased">
      {/* Barra de navegación superior fija cuando estamos dentro de la cartilla */}
      {vista !== 'LANDING' && vista !== 'CERTIFICADO' && (
        <HeaderNav
          nombre={nombre}
          puntos={puntos}
          moduloActual={moduloActual}
          totalModulos={totalModulos}
          onAbrirMapa={() => {
            detenerNarracion();
            setMapaAbierto(true);
          }}
          onIrABienvenida={() => {
            detenerNarracion();
            setVista('LANDING');
          }}
          audioHabilitado={audioHabilitado}
          setAudioHabilitado={setAudioHabilitado}
          estaNarrando={estaNarrando}
          detenerNarracion={detenerNarracion}
        />
      )}

      {/* 1. LANDING PAGE INFORMATIVA E INSTITUCIONAL */}
      {vista === 'LANDING' && (
        <LandingPage
          nombre={nombre}
          setNombre={setNombre}
          inputNombre={inputNombre}
          setInputNombre={setInputNombre}
          onIniciarCartilla={() => {
            detenerNarracion();
            setPaginaActual(0);
            setVista('LECTOR');
          }}
          modulosAprobados={modulosAprobados}
          totalModulos={totalModulos}
          puntos={puntos}
          completado={completado}
          onVerCertificado={() => {
            detenerNarracion();
            setVista('CERTIFICADO');
          }}
          onReiniciar={() => {
            detenerNarracion();
            reiniciarProgreso();
            setInputNombre('');
          }}
          onNarrarTexto={narrarTexto}
        />
      )}

      {/* 2. PANTALLA: LECTOR DE LÁMINAS */}
      {vista === 'LECTOR' && (
        <LectorLamina
          modulo={modulo}
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
          onIrAReto={() => {
            detenerNarracion();
            setVista('RETO');
          }}
          onNarrarTexto={narrarTexto}
          estaNarrando={estaNarrando}
        />
      )}

      {/* 3. PANTALLA: RETO / TRIVIA DEL SABER */}
      {vista === 'RETO' && (
        <TriviaReto
          modulo={modulo}
          onAprobarReto={handleAprobarReto}
          onNarrarTexto={narrarTexto}
          estaNarrando={estaNarrando}
          esUltimoModulo={moduloActual === totalModulos}
        />
      )}

      {/* 4. PANTALLA: CERTIFICADO FINAL EN PDF */}
      {vista === 'CERTIFICADO' && (
        <CertificadoView
          nombre={nombre}
          puntos={puntos}
          puntosTotales={TOTAL_PUNTOS_MAX}
          onReiniciar={() => {
            detenerNarracion();
            reiniciarProgreso();
            setInputNombre('');
            setVista('LANDING');
          }}
          onVolverALanding={() => {
            detenerNarracion();
            setVista('LANDING');
          }}
        />
      )}

      {/* MODAL: MAPA DE RUTA / MÓDULOS */}
      {mapaAbierto && (
        <MapaRuta
          modulos={cartillaData}
          moduloActual={moduloActual}
          modulosAprobados={modulosAprobados}
          onSeleccionarModulo={cambiarModulo}
          onCerrar={() => setMapaAbierto(false)}
          puntosTotales={TOTAL_PUNTOS_MAX}
          puntosGanados={puntos}
        />
      )}
    </div>
  );
}
