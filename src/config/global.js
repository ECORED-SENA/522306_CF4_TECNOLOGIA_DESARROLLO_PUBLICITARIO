export default {
  global: {
    componenteFormativo: 'Estructura de la campaña publicitaria',
    descripcionCurso:
      'El desarrollo de una campaña publicitaria implica tópicos explorados anteriormente: la investigación, el brief y la identidad corporativa; dichos elementos, son la base para el proceso de comunicación y trazan la ruta para crear una conversación eficaz con el cliente. Es importante aclarar que existen muchos modelos de campaña publicitaria, prácticamente cada agencia de publicidad tiene uno propio y diferente; sin embargo, todos se acercan a un proceso muy similar con elementos estándar que se verán a continuación.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-bg.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      /*{
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '¿Qué es una campaña publicitaria?',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estructura de la campaña publicitaria',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Modelos de campaña ',
            hash: 't_1_2',
          },
        ],
      },
      /*
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Producción Audiovisual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Infografía Animada',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Video Motion',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Motion + Presentador',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Animación 2D',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Video interactivo',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Infografías',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fundamentación Textil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Clasificación y conceptualización de las fibras naturales, químicas (artificiales y sintéticas).',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Identificación fibras por combustión',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Clasificación de los hilos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Clasificación de tejidos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Caracterización de los tejidos',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Procesos textiles',
            hash: 't_3_6',
          },
        ],
      },*/
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Castelló, A. Pino, C. (2019). De la Publicidad a la Comunicación Persuasiva. Esic Editorial.',
    },
    {
      referencia:
        'Davara, A. M. (1992). Estrategias de Comunicación en Marketing. Edit. DOSSAT S.A.',
    },
    {
      referencia:
        'García, E., Lalueza, F. y Estanyol, E. (2016). ¿Cómo Elaborar un Plan de Comunicación Corporativa? Editorial UOC.',
    },
    {
      referencia:
        'Medina, P. y Ferrer, I. (2014). Dirección Empresarial para Publicitarios. Editorial Dykinson.',
    },
    {
      referencia:
        'Reimers Design. (s.f.). Pequeño Diccionario del Diseñador. Consultado el 27 de mayo de 2020.',

      link: 'https://cutt.ly/VyDzeWh',
    },
    {
      referencia: 'Vila, F. (2013). Comunicación Estratégica. Editorial UOC.',
    },
    {
      referencia:
        'Vilajoana, A., Jiménez, M., González, Z. y Vila, J. (2014). ¿Cómo diseñar una campaña de publicidad? Editorial UOC.',
    },
  ],
  glosario: [
    {
      termino: 'Briefing',
      significado:
        'Marketing. Conjunto de datos sobre la empresa, sus objetivos y estrategia; que sirven de base al consultor o diseñador para plantear la comunicación corporativa. Término inglés que engloba las instrucciones que el cliente da a su proveedor para que de acuerdo con ellas desarrolle la campaña de Marketing Directo desde la idea global hasta el envío del mailing.',
    },
    {
      termino: 'Canal',
      significado:
        'En teoría de la comunicación, camino técnico o fisiológico que recorre un mensaje desde el emisor hasta el receptor. ',
    },
    {
      termino: 'Comunicación',
      significado:
        'Es hacer común un significado a una comunidad, con el fin de que toda ella pueda comulgar en la comprensión de este. Proceso por el cual una fuente emisora influye sobre un sistema receptor a través de la manipulación de signos (creatividad, combinatoria, codificación), configurando mensajes y circulándolos por medio de determinados canales físicos.',
    },
    {
      termino: 'Creatividad ',
      significado:
        'Actividad creadora o capacidad imaginativa de hallar soluciones nuevas o ideas originales. La creatividad es la aptitud del ser humano para la combinatoria, es decir, la combinación de formas y mensajes nuevos a partir de combinaciones originales de signos.',
    },
    {
      termino: 'Marketing ',
      significado:
        'Técnicas que persiguen la selección de mercados objetivos, la identificación y cuantificación de las necesidades de esos mercados, el desarrollo de productos y servicios que satisfagan estas necesidades.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Situación de una marca en el mercado, respecto a sus competidores.',
    },
    {
      termino: 'Publicidad',
      significado:
        'Proceso y acción de comunicación que se difunde a través de los medios de comunicación colectiva, siendo el término genérico de anuncio su contenido específico. La publicidad pretende dar a conocer un producto, una idea, un servicio o una imagen sobre el público consumidor para influir en su compra y aceptación.',
    },
    {
      termino: 'RR.PP / Relaciones Públicas',
      significado:
        'Acciones de comunicación destinadas a la creación y el mantenimiento de una imagen positiva de las empresas o instituciones ante grupos específicos: prensa, clientes.',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Manuel Augusto Arias López',
        cargo: 'Instructor Experto temático',
        centro: 'Centro de Comercio y Servicios Regional Quindío',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Evaluadora instruccional',
        centro:
          'Centro para la Industria y la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Martha Isabel Martínez Vargas',
        cargo: 'Productora audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Marcela Gonzalez Gomez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      /*{
        nombre: 'Martha Isabel Martínez Vargas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },*/
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
