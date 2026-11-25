export const cartillaData = [
  {
    id: 1,
    numero: 1,
    titulo: "Economía Circular y las 3R",
    subtitulo: "Aprende a transformar en vez de botar",
    colorTema: {
      fondo: "bg-emerald-50",
      borde: "border-emerald-500",
      texto: "text-emerald-900",
      badge: "bg-emerald-600 text-white",
      boton: "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white"
    },
    puntosReto: 100,
    laminas: [
      {
        id: "l1-1",
        titulo: "¿Qué es la Economía Circular?",
        texto: "Antes comprábamos, usábamos y botábamos a la basura. En la Economía Circular nada se desperdicia, lo que ya no usamos se transforma en algo nuevo y útil.",
        audioTexto: "Hola. Bienvenido a la primera lección. ¿Qué es la Economía Circular? Antes comprábamos, usábamos y botábamos a la basura. En la Economía Circular nada se desperdicia, lo que ya no usamos se transforma en algo nuevo y útil.",
        icono: "Recycle",
        emoji: "🔄",
        pista: "¡Pensar en circular es darle una segunda oportunidad a las cosas!"
      },
      {
        id: "l1-2",
        titulo: "La 1ª R: Reducir",
        texto: "Significa usar solo lo necesario y evitar generar basura. Por ejemplo: llevar tu propia bolsa de tela cuando vas a la tienda o al mercado.",
        audioTexto: "La primera R es Reducir. Significa usar solo lo necesario y evitar generar basura. Por ejemplo: llevar tu propia bolsa de tela cuando vas a la tienda o al mercado.",
        icono: "ShoppingBag",
        emoji: "🛍️",
        pista: "¡Dile no a las bolsas plásticas de un solo uso!"
      },
      {
        id: "l1-3",
        titulo: "La 2ª R: Reutilizar",
        texto: "Es volver a usar las cosas antes de botarlas. Por ejemplo: lavar un frasco de vidrio para guardar café, azúcar, granos o semillas.",
        audioTexto: "La segunda R es Reutilizar. Significa volver a usar las cosas antes de botarlas. Por ejemplo: lavar un frasco de vidrio para guardar café, azúcar, granos o semillas.",
        icono: "Sparkles",
        emoji: "botella-vidrio",
        pista: "Un frasco de vidrio limpio sirve para guardar muchos alimentos y nunca pierde calidad."
      },
      {
        id: "l1-4",
        titulo: "La 3ª R: Reciclar",
        texto: "Es separar los materiales limpios para que se transformen en nuevos objetos como madera plástica, cuadernos, ropa o nuevos envases.",
        audioTexto: "La tercera R es Reciclar. Es separar los materiales limpios para que se transformen en nuevos objetos como madera plástica, cuadernos, ropa o nuevos envases.",
        icono: "Boxes",
        emoji: "📦",
        pista: "Separar bien en casa es el primer paso para reciclar."
      }
    ],
    reto: {
      tipo: "seleccion",
      pregunta: "¿Cuál de estas acciones ayuda a CUIDAR el planeta y REDUCIR la basura?",
      audioPregunta: "Toca la pantalla: ¿Cuál de estas tres acciones ayuda a cuidar el planeta y reducir la basura?",
      opciones: [
        {
          id: "o1",
          texto: "Llevar mi bolsa de tela cuando voy a mercar",
          emoji: "🛍️",
          esCorrecta: true,
          motivo: "¡Correcto! Usar bolsa de tela evita gastar cientos de bolsas plásticas."
        },
        {
          id: "o2",
          texto: "Pedir muchas bolsas plásticas en la tienda",
          emoji: "🗑️",
          esCorrecta: false,
          motivo: "Las bolsas plásticas demoran más de 400 años en descomponerse."
        },
        {
          id: "o3",
          texto: "Botar las cosas que todavía sirven",
          emoji: "❌",
          esCorrecta: false,
          motivo: "Si algo todavía sirve, podemos repararlo, reutilizarlo o regalarlo."
        }
      ],
      mensajeFelicitacion: "¡Fabuloso! Entendiste la regla de oro de la Economía Circular: Reducir y Reutilizar.",
      audioFelicitacion: "¡Excelente! Has ganado cien puntos. Has aprobado el primer módulo con éxito."
    }
  },
  {
    id: 2,
    numero: 2,
    titulo: "Caneca Blanca: ¡Aprovechables!",
    subtitulo: "Materiales limpios, madera plástica y vidrio reutilizable",
    colorTema: {
      fondo: "bg-sky-50",
      borde: "border-sky-400",
      texto: "text-sky-950",
      badge: "bg-sky-600 text-white",
      boton: "bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white"
    },
    puntosReto: 100,
    laminas: [
      {
        id: "l2-1",
        titulo: "La Caneca Blanca",
        texto: "Aquí van los materiales limpios y secos que tienen una segunda vida. ¡Recuerda la regla de oro, siempre limpios, secos y sin grasa!",
        audioTexto: "La caneca blanca es para materiales aprovechables. Aquí van los materiales limpios y secos que tienen una segunda vida. ¡Recuerda la regla de oro, siempre limpios, secos y sin grasa!",
        icono: "Sparkles",
        tipoCaneca: "blanca",
        emoji: "caneca-blanca",
        pista: "Regla de oro: ¡Siempre limpios, secos y sin grasa!"
      },
      {
        id: "l2-2",
        titulo: "Empaques Colaminados (Papas y Galletas)",
        texto: "¡Gran noticia de Economía Circular! Los paquetes de papas fritas y galletas con brillo plateado (empaques colaminados) ya NO se botan a la basura. Sacudelos, limpialos y llevalos a la Caneca Blanca porque hoy se transforman en MADERA PLÁSTICA para parques, bancas y postes.",
        audioTexto: "Empaques Colaminados (Papas y Galletas) ¡Gran noticia de Economía Circular! Los paquetes de papas fritas y galletas con brillo plateado (empaques colaminados) ya NO se botan a la basura. Sacudelos, limpialos y llevalos a la Caneca Blanca porque hoy se transforman en MADERA PLÁSTICA para parques, bancas y postes.",
        icono: "Layers",
        emoji: "🍟",
        pista: "Sacúdelos para que no queden migajas. ¡Se transforman en madera plástica ecológica!"
      },
      {
        id: "l2-3",
        titulo: "Metales Valiosos: Chatarra, Aluminio y Cobre",
        texto: "¡Los metales son los residuos más cotizados y valorizados! Las latas de gaseosa, perfiles de aluminio se reciclan al 100%. Los cables limpios de cobre son altamente valorados, y la chatarra de hierro (latas viejas, varillas, latas de atún) se funde para crear nuevos materiales sin gastar recursos de la naturaleza.",
        audioTexto: "Metales Valiosos: Chatarra, Aluminio y Cobre, ¡Los metales son los residuos más cotizados y valorizados! Las latas de gaseosa, perfiles de aluminio se reciclan al 100%. Los cables limpios de cobre son altamente valorados, y la chatarra de hierro (latas viejas, varillas, latas de atún) se funde para crear nuevos materiales sin gastar recursos de la naturaleza.",
        icono: "Wrench",
        emoji: "🔩",
        pista: "¡El cobre y el aluminio son los materiales mejor pagados en las bodegas de reciclaje!"
      },
      {
        id: "l2-4",
        titulo: "Envases de Vidrio: ¡100% Reutilizables!",
        texto: "Aunque muchos recicladores de oficio no se llevan el vidrio por su peso, para nosotros es un material muy valioso. El vidrio es 100% reutilizable e infinitamente reciclable, lávalos para guardar alimentos o entrégalos a puntos de acopio para que sean lavados y vueltos a llenar.",
        audioTexto: "Envases de Vidrio: ¡100% Reutilizables!. Aunque muchos recicladores de oficio no se llevan el vidrio por su peso, para nosotros es un material muy valioso. El vidrio es 100% reutilizable e infinitamente reciclable, lávalos para guardar alimentos o entrégalos a puntos de acopio para que sean lavados y vueltos a llenar.",
        icono: "Sparkles",
        emoji: "botella-vidrio",
        pista: "Un frasco o botella de vidrio limpia nunca contamina y se puede reutilizar toda la vida."
      },
      {
        id: "l2-5",
        titulo: "Plásticos y Botellas PET",
        texto: "Botellas de gaseosa, envases de yogurt o detergente. Vacíalos, enjuágalos con un poco de agua y aplástalos para que no ocupen tanto espacio.",
        audioTexto: "Plásticos y Botellas PET. En la caneca blanca también van Botellas de gaseosa, envases de yogurt o detergente. Vacíalos, enjuágalos con un poco de agua y aplástalos para que no ocupen tanto espacio.",
        icono: "Milk",
        emoji: "🧴",
        pista: "Aplasta la botella plástica para que quepan muchas más."
      },
      {
        id: "l2-6",
        titulo: "Papel Archivo, Cartón, Revistas, Periodico, y Tetra Pak",
        texto: "Cuadernos viejos, archivo, revistas, cajas de cartón desarmadas y empaques de leche bien secos. No deben tener grasa de comida ni humedad.",
        audioTexto: "Papel Archivo, Cartón, Revistas, Periodico, y Tetra Pak. Cuadernos viejos, archivo, revistas, cajas de cartón desarmadas y empaques de leche bien secos. No deben tener grasa de comida ni humedad.",
        icono: "Package",
        emoji: "📦",
        pista: "Desarma las cajas de cartón y envases Tetra Pak, para que ocupen poco espacio y se transporten fácil."
      }
    ],
    reto: {
      tipo: "seleccion",
      pregunta: "¿A cuál caneca van los empaques colaminados (paquetes de papas y galletas) limpios y secos, y en qué se transforman?",
      audioPregunta: "Pregunta del saber: ¿A cuál caneca van los paquetes de papas y galletas limpios, y en qué se transforman?",
      opciones: [
        {
          id: "o1",
          texto: "A la Caneca Blanca, porque se transforman en Madera Plástica",
          tipoCaneca: "blanca",
          emoji: "caneca-blanca",
          esCorrecta: true,
          motivo: "¡Perfecto! Los empaques colaminados limpios son materia prima para fabricar madera plástica ecológica."
        },
        {
          id: "o2",
          texto: "A la Caneca Negra para que se queden en el basurero",
          tipoCaneca: "negra",
          emoji: "caneca-negra",
          esCorrecta: false,
          motivo: "¡Antes se creía eso! Pero hoy los aprovechamos en la caneca blanca para hacer madera plástica."
        },
        {
          id: "o3",
          texto: "Tirarlos a la calle o al río",
          emoji: "🚫",
          esCorrecta: false,
          motivo: "Nunca debemos botar residuos al suelo ni a fuentes de agua."
        }
      ],
      mensajeFelicitacion: "¡Fabuloso! Aprendiste que los empaques colaminados van a la caneca blanca y se convierten en madera plástica.",
      audioFelicitacion: "¡Excelente! Has demostrado que conoces el valor de los empaques colaminados y la madera plástica. Ganaste cien puntos."
    }
  },
  {
    id: 3,
    numero: 3,
    titulo: "Caneca Verde: ¡Orgánicos!",
    subtitulo: "Restos de comida que nutren la tierra",
    colorTema: {
      fondo: "bg-emerald-50",
      borde: "border-emerald-600",
      texto: "text-emerald-950",
      badge: "bg-emerald-600 text-white",
      boton: "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white"
    },
    puntosReto: 100,
    laminas: [
      {
        id: "l3-1",
        titulo: "La Caneca Verde",
        texto: "Aquí van los restos naturales que salieron de la tierra. Estos residuos no se botan, se descomponen y se convierten en abono (compost) para sembrar y producir nuestros alimentos.",
        audioTexto: "La caneca verde es para residuos orgánicos. Aquí van los restos naturales que salieron de la tierra. Estos residuos no se botan, se descomponen y se convierten en abono (compost) para sembrar y producir nuestros alimentos.",
        icono: "Sprout",
        tipoCaneca: "verde",
        emoji: "caneca-verde",
        pista: "¡Lo que nace de la tierra vuelve a la tierra!"
      },
      {
        id: "l3-2",
        titulo: "Cáscaras y Frutas",
        texto: "Cáscaras de plátano, manzana, papaya, restos de verduras crudas y cáscaras de huevo machacadas.",
        audioTexto: "Aquí van las cáscaras de frutas. Cáscaras de plátano, manzana, papaya, restos de verduras crudas y cáscaras de huevo machacadas.",
        icono: "Apple",
        emoji: "🍌",
        pista: "Las cáscaras de huevo aportan calcio a la tierra de tus matas."
      },
      {
        id: "l3-3",
        titulo: "Restos de Café y Té",
        texto: "La borra o concho que queda después de colar el café y las bolsitas de té usadas son abonos naturales maravillosos.",
        audioTexto: "Restos de café y té. La borra o concho que queda después de colar el café y las bolsitas de té usadas son abonos naturales maravillosos.",
        icono: "Coffee",
        emoji: "☕",
        pista: "La borra de café espanta bichos y enriquece la tierra."
      },
      {
        id: "l3-4",
        titulo: "Podas del Jardín",
        texto: "Hojas secas caídas de los árboles, flores marchitas y pasto cortado. Nada de piedras ni plásticos.",
        audioTexto: "Podas del jardín. También van las hojas secas caídas de los árboles, flores marchitas y pasto cortado. Nada de piedras ni plásticos.",
        icono: "Leaf",
        emoji: "🌿",
        pista: "Las ramas y hojas secas son ideales para hacer compost."
      }
    ],
    reto: {
      tipo: "seleccion",
      pregunta: "Si en el desayuno pelas un plátano maduro, ¿a cuál caneca va su cáscara?",
      audioPregunta: "Toca tu respuesta: Si pelas un plátano maduro en el desayuno, ¿a cuál caneca va esa cáscara?",
      opciones: [
        {
          id: "o1",
          texto: "Caneca Blanca (Aprovechables)",
          tipoCaneca: "blanca",
          emoji: "caneca-blanca",
          esCorrecta: false,
          motivo: "No, porque la cáscara pudre y mancha el papel y el plástico."
        },
        {
          id: "o2",
          texto: "Caneca Verde (Orgánicos / Abono)",
          tipoCaneca: "verde",
          emoji: "caneca-verde",
          esCorrecta: true,
          motivo: "¡Acertaste! La cáscara se descompone y sirve de abono para la tierra."
        },
        {
          id: "o3",
          texto: "Caneca Negra (No aprovechables)",
          tipoCaneca: "negra",
          emoji: "caneca-negra",
          esCorrecta: false,
          motivo: "En la negra se pierde; en la verde le damos vida al suelo."
        }
      ],
      mensajeFelicitacion: "¡Espectacular! Reconoces el valor de la materia orgánica para sembrar vida.",
      audioFelicitacion: "¡Correcto! La cáscara de plátano va en la caneca verde para crear abono. Sumas cien puntos más."
    }
  },
  {
    id: 4,
    numero: 4,
    titulo: "Caneca Negra: ¡No Aprovechables!",
    subtitulo: "Lo que va al relleno y no se puede salvar",
    colorTema: {
      fondo: "bg-zinc-100",
      borde: "border-zinc-700",
      texto: "text-zinc-900",
      badge: "bg-zinc-800 text-white",
      boton: "bg-zinc-800 hover:bg-zinc-900 active:bg-black text-white"
    },
    puntosReto: 100,
    laminas: [
      {
        id: "l4-1",
        titulo: "La Caneca Negra",
        texto: "Aquí depositamos únicamente lo que NO se puede reciclar, NO se puede reutilizar y NO sirve de abono. Estos residuos van directo al relleno sanitario.",
        audioTexto: "La caneca negra es para los residuos no aprovechables. Aquí depositamos únicamente lo que NO se puede reciclar, NO se puede reutilizar y NO sirve de abono. Estos residuos van directo al relleno sanitario.",
        icono: "Trash2",
        tipoCaneca: "negra",
        emoji: "caneca-negra",
        pista: "¡Nuestra meta es generar la menor cantidad de basura negra posible!"
      },
      {
        id: "l4-2",
        titulo: "Residuos de Higiene Personal",
        texto: "Papel higiénico usado, toallas de mano sucias, pañitos húmedos y pañales desechables. Por salud pública e higiene, nunca se reciclan.",
        audioTexto: "Residuos de higiene personal. El papel higiénico usado, toallas de mano sucias, pañitos húmedos y pañales desechables. Por salud pública e higiene, nunca se reciclan.",
        icono: "Ban",
        emoji: "🧻",
        pista: "Cierra muy bien la bolsa para proteger la salud de todos."
      },
      {
        id: "l4-3",
        titulo: "Papeles y Servilletas con Grasa",
        texto: "Servilletas usadas con grasa, cajas de pizza engrasadas y platos desechables untados de comida, deben ser dispuestos en esta caneca.",
        audioTexto: "Papeles y servilletas con grasa. Las Servilletas usadas con grasa, cajas de pizza engrasadas y platos desechables untados de comida, deben ser dispuestos en esta caneca",
        icono: "Flame",
        emoji: "🍕",
        pista: "Un cartón o servilleta engrasada ya no se puede reciclar  porque contamina los materiales en el reproceso."
      },
      {
        id: "l4-4",
        titulo: "Polvo de Barrido y Colillas de cigarrillo",
        texto: "El polvo recogido al barrer la casa, colillas de cigarrillos, cerámicas o vajillas quebradas y cintas adhesivas sucias.",
        audioTexto: "El polvo recogido al barrer la casa, colillas de cigarrillos, cerámicas o vajillas quebradas y cintas adhesivas sucias.",
        icono: "Ban",
        emoji: "🧹",
        pista: "A la caneca negra solo va lo que no tiene ningún uso."
      }
    ],
    reto: {
      tipo: "seleccion",
      pregunta: "Te limpiaste las manos con una servilleta llena de grasa de empanada. ¿A cuál caneca va?",
      audioPregunta: "Toca tu opción: Te limpiaste las manos con una servilleta llena de grasa. ¿Dónde la botas?",
      opciones: [
        {
          id: "o1",
          texto: "Caneca Negra (porque la grasa daña e inutiliza el reciclaje)",
          tipoCaneca: "negra",
          emoji: "caneca-negra",
          esCorrecta: true,
          motivo: "¡Exacto! El papel con grasa contamina e inutiliza el reciclaje."
        },
        {
          id: "o2",
          texto: "Caneca Blanca (con los papeles limpios)",
          tipoCaneca: "blanca",
          emoji: "caneca-blanca",
          esCorrecta: false,
          motivo: "¡Cuidado! Si metes grasa a la caneca blanca, dañas todo el papel limpio."
        },
        {
          id: "o3",
          texto: "Tirarla al piso de la calle",
          emoji: "🚫",
          esCorrecta: false,
          motivo: "Nunca debemos botar basura en la calle ni en caños."
        }
      ],
      mensajeFelicitacion: "¡Impecable! Sabes proteger el reciclaje evitando que la grasa lo contamine.",
      audioFelicitacion: "¡Muy bien! Las servilletas con grasa van en la caneca negra. Ganaste otros cien puntos."
    }
  },
  {
    id: 5,
    numero: 5,
    titulo: "Héroes del Reciclaje y Seguridad",
    subtitulo: "Cuidando a las personas y evitando peligros",
    colorTema: {
      fondo: "bg-amber-50",
      borde: "border-amber-500",
      texto: "text-amber-950",
      badge: "bg-amber-600 text-white",
      boton: "bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white"
    },
    puntosReto: 100,
    laminas: [
      {
        id: "l5-1",
        titulo: "El Reciclador de Oficio es un Héroe",
        texto: "Son las mujeres y hombres que recorren las calles recolectando materiales. Con su trabajo honrado reducen toneladas de basura y cuidan la naturaleza.",
        audioTexto: "Los recicladores de oficio son verdaderos héroes ambientales. Con sus manos cuidan nuestro entorno. Entregarles el material limpio y bien empacado es un acto de respeto y amor. Son las mujeres y hombres que recorren las calles recolectando materiales. Con su trabajo digno y honrado reducen toneladas de basura y cuidan la naturaleza.",
        icono: "HeartHandshake",
        emoji: "🤝",
        pista: "Trata al reciclador con amabilidad y facilítale su trabajo."
      },
      {
        id: "l5-2",
        titulo: "Vidrios Rotos: ¡Cuidado con los Filos!",
        texto: "Si se quiebra un vaso o una botella, nunca la tires suelta en la bolsa. Envuélvela en varias hojas de periódico o cartón y escribe bien visible: ¡PELIGRO VIDRIO!",
        audioTexto: "Si se rompe un vaso o botella, envuélvelo en periódico grueso o cartón y escribe bien grande, ¡Peligro, Vidrio! Así evitamos que el reciclador sufra cortes dolorosos.",
        icono: "ShieldAlert",
        emoji: "⚠️",
        pista: "Protege las manos trabajadoras de cortes e infecciones."
      },
      {
        id: "l5-3",
        titulo: "Pilas y Baterías",
        texto: "Las pilas de linternas o controles contienen ácidos tóxicos. Jamás las botes en ninguna de las tres canecas. Guárdalas en una botella plástica y llévalas a los contenedores especiales de tiendas o almacenes.",
        audioTexto: "Las pilas gastadas son muy peligrosas y contaminan miles de litros de agua. No las botes a la basura. Llévalas a los contenedores rojos de las tiendas o supermercados.",
        icono: "BatteryWarning",
        emoji: "🔋",
        pista: "Una sola pila puede contaminar miles de litros de agua."
      },
      {
        id: "l5-4",
        titulo: "Medicamentos Vencidos",
        texto: "Las pastillas o jarabes vencidos no se arrojan al inodoro ni a la basura. Llévalos al contenedor 'Punto Azul' en las droguerías para evitar la contaminación de ríos y fuentes de agua.",
        audioTexto: "Los remedios vencidos no se tiran por el inodoro ni a la caneca. Llévalos al Punto Azul de la droguería para evitar contaminar los ríos.",
        icono: "AlertTriangle",
        emoji: "💊",
        pista: "Busca el buzón azul en tu farmacia más cercana."
      }
    ],
    reto: {
      tipo: "seleccion",
      pregunta: "Si en casa se te quiebra un vaso o plato de vidrio, ¿qué debes hacer para cuidar al reciclador?",
      audioPregunta: "Pregunta final de graduación: Si se te quiebra un vaso de vidrio en la cocina, ¿qué debes hacer?",
      opciones: [
        {
          id: "o1",
          texto: "Envolverlo en cartón/periódico y avisar: '¡Peligro, Vidrio!'",
          emoji: "🛡️",
          esCorrecta: true,
          motivo: "¡Excelente! Cuidas la vida y las manos de quienes recogen los residuos."
        },
        {
          id: "o2",
          texto: "Botarlo suelto en una bolsa delgadita para que se corte alguien",
          emoji: "❌",
          esCorrecta: false,
          motivo: "El vidrio traspasa bolsas delgadas y causa heridas muy graves."
        },
        {
          id: "o3",
          texto: "Tirarlo al jardín o a la calle",
          emoji: "⚠️",
          esCorrecta: false,
          motivo: "Un vidrio en la calle puede cortar a niños, mascotas o ciclistas."
        }
      ],
      mensajeFelicitacion: "¡Magnífico! Has demostrado respeto por la vida, por el reciclador y por el planeta.",
      audioFelicitacion: "¡Felicitaciones! Has completado todas las evaluaciones con éxito. Ya puedes reclamar tu certificado oficial."
    }
  }
];

export const TOTAL_PUNTOS_MAX = cartillaData.reduce((acc, mod) => acc + mod.puntosReto, 0);
