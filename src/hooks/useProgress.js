import { useState, useEffect } from 'react';
import { cartillaData } from '../data/cartillaData';

export const useProgress = () => {
  const totalModulos = cartillaData.length;

  const [nombre, setNombre] = useState(() => {
    return localStorage.getItem('cartilla_nombre') || '';
  });

  const [moduloActual, setModuloActual] = useState(() => {
    const guardado = parseInt(localStorage.getItem('cartilla_modulo_actual'), 10);
    return !isNaN(guardado) && guardado >= 1 && guardado <= totalModulos ? guardado : 1;
  });

  const [modulosAprobados, setModulosAprobados] = useState(() => {
    try {
      const guardado = localStorage.getItem('cartilla_aprobados');
      return guardado ? JSON.parse(guardado) : [];
    } catch {
      return [];
    }
  });

  const [puntos, setPuntos] = useState(() => {
    const guardado = parseInt(localStorage.getItem('cartilla_puntos'), 10);
    return !isNaN(guardado) ? guardado : 0;
  });

  const [completado, setCompletado] = useState(() => {
    return localStorage.getItem('cartilla_completada') === 'true';
  });

  // Persistir en localStorage
  useEffect(() => {
    if (nombre) localStorage.setItem('cartilla_nombre', nombre);
  }, [nombre]);

  useEffect(() => {
    localStorage.setItem('cartilla_modulo_actual', moduloActual.toString());
  }, [moduloActual]);

  useEffect(() => {
    localStorage.setItem('cartilla_aprobados', JSON.stringify(modulosAprobados));
  }, [modulosAprobados]);

  useEffect(() => {
    localStorage.setItem('cartilla_puntos', puntos.toString());
  }, [puntos]);

  useEffect(() => {
    localStorage.setItem('cartilla_completada', completado.toString());
  }, [completado]);

  // Aprobar el reto del módulo actual y desbloquear el siguiente
  const aprobarModuloActual = (puntosGanados = 100) => {
    const nuevoAprobados = Array.from(new Set([...modulosAprobados, moduloActual]));
    setModulosAprobados(nuevoAprobados);
    
    // Si aún no se habían sumado puntos por este módulo:
    if (!modulosAprobados.includes(moduloActual)) {
      setPuntos(prev => prev + puntosGanados);
    }

    if (moduloActual < totalModulos) {
      setModuloActual(prev => prev + 1);
    } else {
      setCompletado(true);
    }
  };

  const irAModulo = (id) => {
    // Solo puede ir a módulos desbloqueados (id <= modulosAprobados.length + 1)
    const maxDesbloqueado = modulosAprobados.length + 1;
    if (id <= maxDesbloqueado && id <= totalModulos) {
      setModuloActual(id);
    }
  };

  const reiniciarProgreso = () => {
    localStorage.removeItem('cartilla_modulo_actual');
    localStorage.removeItem('cartilla_aprobados');
    localStorage.removeItem('cartilla_puntos');
    localStorage.removeItem('cartilla_completada');
    setModuloActual(1);
    setModulosAprobados([]);
    setPuntos(0);
    setCompletado(false);
  };

  return {
    nombre,
    setNombre,
    moduloActual,
    setModuloActual,
    modulosAprobados,
    puntos,
    completado,
    setCompletado,
    totalModulos,
    aprobarModuloActual,
    irAModulo,
    reiniciarProgreso
  };
};
