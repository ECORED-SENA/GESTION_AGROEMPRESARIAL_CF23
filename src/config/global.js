export default {
  global: {
    componenteFormativo: 'Seguimiento a proyectos y acciones de mejora',
    descripcionCurso:
      'Este componente formativo aborda aspectos del seguimiento que, en unidades productivas, facilita la identificación de situaciones que afectan el desarrollo de procesos y que pueden afectar el cumplimiento de sus objetivos estratégicos. El aprendiz se capacitará en la formulación de acciones de mejora que aumenten la eficiencia de los procesos y la calidad de los bienes y servicios ofrecidos por la organización agropecuaria.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planeación de actividades',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Herramientas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Metodologías y técnicas de planeación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estimación de recursos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Indicadores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de indicadores',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características de los indicadores',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Interpretación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas de seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tableros de control',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Cronogramas de trabajo',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Ciclo PHVA',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Ejecución de procesos',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Acciones de mejora',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
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
      referencia: 'Aulafacil. (s.f.). <i>Componentes de un indicador.</i>',
      link:
        'https://www.aulafacil.com/cursos/organizacion/indicadores-de-gestion/componentes-de-un-indicador-l37756 ',
    },
    {
      referencia:
        'Departamento Nacional de Planeación (2018). <i>Guía para la construcción y análisis de indicadores. </i>',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Sinergia/Documentos/Guia_para_elaborar_Indicadores.pdf ',
    },
    {
      referencia:
        'Función pública (s.f.). <i>ABC formulación de indicadores. </i>',
      link: 'https://www.funcionpublica.gov.co/web/murc/actividad-30',
    },
    {
      referencia: 'Función pública (s.f.). <i>Plan de acciones de mejora. </i>',
      link: 'https://www.funcionpublica.gov.co/web/murc/actividad-24',
    },
    {
      referencia:
        'Organiza tu pyme y optimiza tu negocio (2019). <i>5 recursos para identificar el tener de mi empresa. </i>',
      link:
        'https://organizatupyme.com/5-recursos-para-identificar-el-tener-de-mi-empresa/',
    },
    {
      referencia:
        'Quiroga, M. (s.f.). <i>Proceso de planificación. Economipedia. </i>',
      link:
        'https://economipedia.com/definiciones/proceso-de-planificacion.html ',
    },
  ],
  glosario: [
    {
      termino: 'Evaluación',
      significado:
        'Valoración ordenada sobre los resultados obtenidos en la gestión, a partir de la medición de los indicadores de gestión.',
    },
    {
      termino: 'Formulación',
      significado:
        'Etapa de administración adecuada de los indicadores, dónde se espera definir qué se va a medir y formular el indicador correspondiente.',
    },
    {
      termino: 'Indicador',
      significado:
        'Herramienta de gestión que permite conocer el resultado obtenido conforme a una meta planteada.',
    },
    {
      termino: 'Línea base',
      significado:
        'Datos e información que describe la situación previa a una intervención.',
    },
    {
      termino: 'Meta',
      significado:
        'Valor esperado (objetivo) que espera alcanzar un indicador en un período específico.',
    },
    {
      termino: 'Objetivo',
      significado:
        'Afirmación que expresa una intención a través de una acción específica.',
    },
    {
      termino: 'Seguimiento',
      significado: 'Verificación del cumplimiento del plan operativo. ',
    },
  ],
  complementario: [
    {
      tema: '3. Indicadores',
      referencia:
        'Instituto Distrital de la Participación y Acción Comunal (2018). <i>Guía metodológica para la formulación, medición, seguimiento y evaluación de indicadores de gestión. </i>',
      tipo: 'Documento',
      link:
        'https://www.participacionbogota.gov.co/sites/default/files/2021-01/1525983832-IDPAC-PE-GU-04Guia%20Metodologica%20Elaboracion%20de%20Indicadores%20de%20Gestion%20%284%29.pdf',
    },
    {
      tema: '4. Herramientas de seguimiento',
      referencia:
        'Valbor soluciones (s.f.). <i>Cronograma para seguimiento de actividades.</i>',
      tipo: 'Página web',
      link:
        'https://www.valborsoluciones.com/downloads/cronograma-para-seguimiento-de-actividades/',
    },
    {
      tema: '4. Herramientas de seguimiento',
      referencia:
        'Comisión Económica para América Latina y el Caribe (2015). <i>Metodología del marco lógico para la planificación, el seguimiento y la evaluación de proyectosy programas.</i>',
      tipo: 'Documento',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/5607/S057518_es.pdf',
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
        cargo: 'Responsable equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez ',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable equipo de gestores de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
}
