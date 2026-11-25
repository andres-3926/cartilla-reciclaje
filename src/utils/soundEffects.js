// Efectos de sonido nativos usando Web Audio API
// Funciona 100% OFFLINE, sin descargar ningún archivo mp3 pesado, ideal para celular.

let audioCtx = null;

const getAudioContext = () => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

// Sonido de clic sutil y agradable
export const playClickSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch {
    // Si el navegador bloquea audio sin interacción previa
  }
};

// Sonido alegre de acierto (Arpegio ascendente brillante)
export const playSuccessSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // Do, Mi, Sol, Do agudo
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = ctx.currentTime + idx * 0.09;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.2, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.25);
    });

    // Vibración corta de éxito si el celular lo soporta
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([60, 40, 60]);
    }
  } catch {
    // Silencioso en caso de bloqueo
  }
};

// Sonido pedagógico suave para error (alentador, no castigador)
export const playErrorSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [330, 260];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = ctx.currentTime + idx * 0.12;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.18, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.2);
    });

    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(150);
    }
  } catch {
    // Silencioso
  }
};

// Fanfarria triunfal para cuando completan todos los módulos y ganan el certificado
export const playFanfareSound = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    // Sol, Sol, Sol, Do, Mi, Sol agudo triunfal
    const melody = [
      { f: 392.00, d: 0.12, t: 0 },
      { f: 392.00, d: 0.12, t: 0.14 },
      { f: 392.00, d: 0.12, t: 0.28 },
      { f: 523.25, d: 0.35, t: 0.44 },
      { f: 659.25, d: 0.25, t: 0.82 },
      { f: 783.99, d: 0.60, t: 1.10 }
    ];

    melody.forEach(({ f, d, t }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = ctx.currentTime + t;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, startTime);

      gain.gain.setValueAtTime(0.22, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + d);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + d);
    });

    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 200]);
    }
  } catch {
    // Silencioso
  }
};
