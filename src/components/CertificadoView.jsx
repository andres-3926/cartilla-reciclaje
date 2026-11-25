import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Award, Download, Share2, RotateCcw, CheckCircle2, FileText, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { jsPDF } from 'jspdf';
import { playFanfareSound, playClickSound } from '../utils/soundEffects';

export default function CertificadoView({
  nombre,
  puntos,
  puntosTotales,
  onReiniciar,
  onVolverALanding
}) {
  const canvasRef = useRef(null);
  const [generandoPDF, setGenerandoPDF] = useState(false);

  const dibujarCertificado = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = 1600;
    canvas.height = 1100;
    const ctx = canvas.getContext('2d');

    // 1. Fondo elegante blanco marfil
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, 1600, 1100);

    ctx.fillStyle = '#FAFCF8';
    ctx.fillRect(35, 35, 1530, 1030);

    // 2. Marcos orlados oficiales (Verde institucional UNIMINUTO y Oro)
    ctx.lineWidth = 18;
    ctx.strokeStyle = '#0F5132'; // Verde institucional profundo
    ctx.strokeRect(35, 35, 1530, 1030);

    ctx.lineWidth = 6;
    ctx.strokeStyle = '#D97706'; // Oro ámbar
    ctx.strokeRect(60, 60, 1480, 980);

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#CBD5E1';
    ctx.strokeRect(75, 75, 1450, 950);

    // 3. Encabezado institucional
    ctx.textAlign = 'center';

    ctx.fillStyle = '#0F5132';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS – UNIMINUTO', 800, 130);

    ctx.fillStyle = '#475569';
    ctx.font = '600 18px sans-serif';
    ctx.fillText('CENTRO DE EDUCACIÓN PARA EL DESARROLLO (CED) • PROYECTO ECOESCUELAS DIGITALES', 800, 162);
    ctx.fillText('EN ARTICULACIÓN CON LA FUNDACIÓN BAJO LA MANO DE DIOS (MANIZALES, CALDAS)', 800, 190);

    // 4. Título Principal
    ctx.fillStyle = '#0F172A';
    ctx.font = '900 54px sans-serif';
    ctx.fillText('CERTIFICADO DE APROBACIÓN', 800, 275);

    ctx.fillStyle = '#64748B';
    ctx.font = 'italic 24px sans-serif';
    ctx.fillText('Se otorga la presente acreditación comunitaria a:', 800, 335);

    // 5. Nombre del Participante (con autoajuste dinámico de fuente para nombres largos)
    const nombreTexto = (nombre || 'Guardián Ambiental').toUpperCase();
    let tamanoFuente = 64;
    ctx.font = `900 ${tamanoFuente}px sans-serif`;
    while (ctx.measureText(nombreTexto).width > 1150 && tamanoFuente > 32) {
      tamanoFuente -= 2;
      ctx.font = `900 ${tamanoFuente}px sans-serif`;
    }
    ctx.fillStyle = '#0F5132';
    ctx.fillText(nombreTexto, 800, 420);

    // Línea divisoria dorada
    ctx.beginPath();
    ctx.moveTo(350, 445);
    ctx.lineTo(1250, 445);
    ctx.strokeStyle = '#D97706';
    ctx.lineWidth = 4;
    ctx.stroke();

    // 6. Texto explicativo del logro
    ctx.fillStyle = '#334155';
    ctx.font = '24px sans-serif';
    ctx.fillText('Por haber completado y aprobado todas las evaluaciones y retos prácticos de la Cartilla Web:', 800, 500);

    ctx.fillStyle = '#0F172A';
    ctx.font = 'bold 38px sans-serif';
    ctx.fillText('«RECICLANDO APP: ECONOMÍA CIRCULAR Y RECICLAJE TÉCNICO»', 800, 555);

    // Detalle de competencias técnicas
    ctx.fillStyle = '#475569';
    ctx.font = '22px sans-serif';
    ctx.fillText('• Las 3R • Si se reciclan los Empaques Colaminados • Metales (Aluminio, Cobre y Chatarra)', 800, 620);
    ctx.fillText('• Reutilización de Vidrio • Código Oficial de Canecas • Bioseguridad y Cuidado del Reciclador', 800, 658);

    // 7. Insignia de Calificación (Caja verde autoajustable al ancho real del texto)
    const textoInsignia = `⭐ Calificación de Honor: ${puntos} / ${puntosTotales} Puntos (100% Aprobado) ⭐`;
    ctx.font = 'bold 30px sans-serif';
    const anchoTexto = ctx.measureText(textoInsignia).width;
    const anchoCaja = anchoTexto + 90; // Margen holgado y armónico
    const xCaja = (1600 - anchoCaja) / 2;

    ctx.fillStyle = '#ECFDF5';
    ctx.beginPath();
    ctx.roundRect(xCaja, 715, anchoCaja, 80, 24);
    ctx.fill();
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#065F46';
    ctx.fillText(textoInsignia, 800, 765);

    // 8. Fecha
    const fecha = new Date().toLocaleDateString('es-CO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    ctx.fillStyle = '#64748B';
    ctx.font = '20px sans-serif';
    ctx.fillText(`Expedido en Manizales, Caldas • ${fecha}`, 800, 855);

    // 9. Firmas de los responsables del proyecto
    // Firma izquierda: Facilitador UNIMINUTO
    ctx.beginPath();
    ctx.moveTo(250, 960);
    ctx.lineTo(620, 960);
    ctx.strokeStyle = '#64748B';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#0F172A';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('Andrés Echeverri (ID: 1003297)', 435, 990);
    ctx.fillStyle = '#64748B';
    ctx.font = '16px sans-serif';
    ctx.fillText('Facilitador en Responsabilidad Social • UNIMINUTO', 435, 1015);

    // Firma derecha: Director Fundación Bajo la Mano de Dios
    ctx.beginPath();
    ctx.moveTo(980, 960);
    ctx.lineTo(1350, 960);
    ctx.strokeStyle = '#64748B';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#0F172A';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('Cristian Fabián de la Rosa Ramírez', 1165, 990);
    ctx.fillStyle = '#64748B';
    ctx.font = '16px sans-serif';
    ctx.fillText('Director • Fundación Bajo la Mano de Dios', 1165, 1015);

    // 10. Cargar y dibujar logos oficiales en el certificado
    const imgLogoUniminuto = new Image();
    imgLogoUniminuto.src = '/images/logo-uniminuto.png';
    imgLogoUniminuto.onload = () => {
      ctx.drawImage(imgLogoUniminuto, 90, 85, 230, 80);
    };

    const imgLogoReciclando = new Image();
    imgLogoReciclando.src = '/images/logo-reciclando.png';
    imgLogoReciclando.onload = () => {
      ctx.drawImage(imgLogoReciclando, 1280, 80, 220, 100);
    };

    const imgLogoFundacion = new Image();
    imgLogoFundacion.src = '/images/logo-fundacion.jpg';
    imgLogoFundacion.onload = () => {
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(1370, 935, 75, 75, 12);
      ctx.clip();
      ctx.drawImage(imgLogoFundacion, 1370, 935, 75, 75);
      ctx.restore();
      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 2;
      ctx.strokeRect(1370, 935, 75, 75);
    };
  }, [nombre, puntos, puntosTotales]);

  useEffect(() => {
    playFanfareSound();
    confetti({
      particleCount: 110,
      spread: 90,
      origin: { y: 0.5 }
    });

    dibujarCertificado();
  }, [dibujarCertificado]);

  // Generador de documento PDF oficial en tamaño A4 horizontal (Landscape)
  const generarDocumentoPDF = () => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4' // 297 mm x 210 mm
    });

    const imgData = canvas.toDataURL('image/png', 1.0);
    pdf.addImage(imgData, 'PNG', 0, 0, 297, 210, undefined, 'FAST');
    return pdf;
  };

  // Descarga directa del archivo .PDF
  const descargarPDF = () => {
    playClickSound();
    setGenerandoPDF(true);

    try {
      const pdf = generarDocumentoPDF();
      if (!pdf) return;

      const nombreLimpio = (nombre || 'Comunidad').trim().replace(/[^a-zA-Z0-9_-]/g, '_');
      pdf.save(`Certificado-ReciclAndoApp-${nombreLimpio}.pdf`);
    } finally {
      setGenerandoPDF(false);
    }
  };

  // Compartir PDF en WhatsApp (Web Share API en móviles con archivo PDF o enlace)
  const compartirWhatsApp = async () => {
    playClickSound();
    const pdf = generarDocumentoPDF();
    if (!pdf) return;

    const nombreLimpio = (nombre || 'Guardián Ambiental').trim().replace(/[^a-zA-Z0-9_-]/g, '_');
    const mensaje = `🌿 *¡Certificado Oficial de Reciclaje y Economía Circular!* 🏆\n\nHola, soy *${nombre || 'Guardián Ambiental'}* y acabo de aprobar con honores (${puntos} pts) la formación en *ReciclAndo App*, proyecto desarrollado por *UNIMINUTO (Ecoescuelas Digitales)* en articulación con la *Fundación Bajo la Mano de Dios*.\n\n¡Ingresa y certifícate tú también aquí!:\n${window.location.href}`;

    try {
      const pdfBlob = pdf.output('blob');
      const pdfFile = new File([pdfBlob], `Certificado-ReciclAndoApp-${nombreLimpio}.pdf`, {
        type: 'application/pdf'
      });

      // Si el navegador móvil soporta compartir archivos directamente a WhatsApp
      if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
        await navigator.share({
          files: [pdfFile],
          title: 'Certificado de Aprobación - ReciclAndo App',
          text: mensaje
        });
        return;
      }
    } catch {
      // Si el usuario cancela o no soporta compartir archivo
    }

    // Fallback: Descarga el PDF automáticamente y abre WhatsApp con el mensaje
    pdf.save(`Certificado-ReciclAndoApp-${nombreLimpio}.pdf`);
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  // Descarga alternativa en imagen PNG
  const descargarImagenPNG = () => {
    playClickSound();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const nombreLimpio = (nombre || 'Comunidad').trim().replace(/[^a-zA-Z0-9_-]/g, '_');
    const link = document.createElement('a');
    link.download = `Certificado-ReciclAndoApp-${nombreLimpio}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="flex-1 max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto w-full p-4 md:p-8 lg:p-10 flex flex-col justify-center animate-in zoom-in-95">
      <div className="lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center my-auto">
        {/* Columna Izquierda: Vista Previa del Certificado */}
        <div className="lg:col-span-7">
          <div className="w-full bg-white rounded-3xl md:rounded-4xl p-3 md:p-5 border-4 md:border-6 border-emerald-600 shadow-2xl overflow-hidden relative group">
            <canvas
              ref={canvasRef}
              className="w-full h-auto rounded-2xl md:rounded-3xl block border border-amber-300 shadow-inner"
            />
            <div className="text-center mt-2.5">
              <span className="text-[11px] md:text-sm font-bold text-slate-500">
                📜 Vista previa oficial • Se descargará en documento PDF de alta resolución
              </span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Felicitaciones y Botones de Descarga */}
        <div className="lg:col-span-5 text-center lg:text-left mt-6 lg:mt-0 space-y-4">
          <div className="w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 bg-amber-100 text-amber-600 rounded-3xl flex items-center justify-center mx-auto lg:mx-0 shadow-md border-2 border-amber-300 animate-bounce-short">
            <Award className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            ¡FELICITACIONES!
          </h1>

          <p className="text-base md:text-xl lg:text-2xl text-emerald-800 font-black">
            {nombre ? `¡${nombre}, eres un Promotor Ambiental Acreditado!` : '¡Has completado el curso con honores!'}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs md:text-sm">
            <CheckCircle2 size={18} />
            <span>100% Evaluaciones Aprobadas • {puntos} Puntos</span>
          </div>

          <div className="w-full space-y-3 pt-2">
            {/* BOTÓN PRINCIPAL: Descargar PDF */}
            <button
              onClick={descargarPDF}
              disabled={generandoPDF}
              className="w-full min-h-[58px] md:min-h-[68px] py-4 px-6 md:px-8 bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white font-black text-lg md:text-xl rounded-2xl md:rounded-3xl shadow-xl flex items-center justify-center gap-3 transition-transform cursor-pointer"
            >
              <FileText size={26} />
              <span>{generandoPDF ? 'Generando PDF...' : 'Descargar Certificado en PDF'}</span>
            </button>

            {/* BOTÓN: Compartir PDF en WhatsApp */}
            <button
              onClick={compartirWhatsApp}
              className="w-full min-h-[54px] md:min-h-[64px] py-3.5 px-6 md:px-8 bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white font-black text-base md:text-lg rounded-2xl md:rounded-3xl shadow-md flex items-center justify-center gap-3 transition-transform cursor-pointer"
            >
              <Share2 size={24} />
              <span>Compartir Certificado en WhatsApp</span>
            </button>

            {/* BOTÓN SECUNDARIO: Guardar como Imagen PNG */}
            <button
              onClick={descargarImagenPNG}
              className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs md:text-sm rounded-2xl flex items-center justify-center gap-2 transition-colors cursor-pointer border border-slate-200"
            >
              <Download size={18} />
              <span>Guardar también como imagen (PNG)</span>
            </button>

            {/* Botones de navegación / reinicio */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2">
              {onVolverALanding && (
                <button
                  onClick={() => {
                    playClickSound();
                    onVolverALanding();
                  }}
                  className="text-xs md:text-sm text-emerald-700 hover:text-emerald-900 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  <span>Volver a la página principal</span>
                </button>
              )}

              <button
                onClick={() => {
                  playClickSound();
                  if (window.confirm('¿Quieres reiniciar la cartilla para volver a practicar desde el inicio?')) {
                    onReiniciar();
                  }
                }}
                className="text-xs md:text-sm text-slate-400 hover:text-slate-600 font-bold flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw size={16} />
                <span>Reiniciar para otra persona</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
