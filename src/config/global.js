export default {
  global: {
    Name: 'Plan de producción agrícola',
    Description:
      'Este componente formativo ofrece una visión integral de las labores agrícolas necesarias para sacar adelante un cultivo, aspectos como las características del suelo, las labores que se desarrollan para que se encuentre en estado óptimo para recibir la semilla o plántula, las labores de manejo, cosecha y postcosecha; además su relación para poder plasmar en el plan de trabajo dichas actividades.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Cultivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recursos en la producción agrícola',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: 'Producción agrícola',
      referencia:
        'Medina, P. (2025). Las mujeres Wayúu que desafían al desierto: “¡Nuestra tierra ahora está viva!”. El País.',
      tipo: 'Artículo',
      link:
        'https://elpais.com/america-colombia/2025-06-21/las-mujeres-wayuu-que-desafian-al-desierto-nuestra-tierra-ahora-esta-viva.html?utm_source=chatgpt.com',
    },
    {
      tema: 'Plan de trabajo',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural & Corporación Colombiana de Investigación Agropecuaria (AGROSAVIA). (2013). Prácticas culturales en berenjena.',
      tipo: 'Video',
      link: 'http://hdl.handle.net/20.500.12324/33536',
    },
  ],
  glosario: [
    {
      termino: 'Abono',
      significado:
        'Sustancia orgánica o inorgánica que se añade al suelo para mejorar su fertilidad y aportar nutrientes a las plantas.',
    },
    {
      termino: 'Análisis de suelo',
      significado:
        'Estudio de las propiedades químicas y físicas del suelo para determinar su fertilidad y necesidades de enmiendas.',
    },
    {
      termino: 'Aplicación foliar',
      significado:
        'Técnica de fertilización que consiste en aplicar nutrientes directamente sobre las hojas de las plantas.',
    },
    {
      termino: 'Calidad',
      significado:
        'Grado de excelencia de un producto agrícola, determinado por características como sabor, tamaño, textura, sanidad, entre otros.',
    },
    {
      termino: 'Drenaje',
      significado:
        'Sistema que permite eliminar el exceso de agua del suelo para evitar daños a los cultivos.',
    },
    {
      termino: 'Fertilización',
      significado:
        'Aplicación de nutrientes al suelo o directamente a las plantas para promover su desarrollo.',
    },
    {
      termino: 'Germinación',
      significado:
        'Proceso mediante el cual una semilla inicia su crecimiento y se convierte en plántula.',
    },
    {
      termino: 'Insecticida',
      significado:
        'Sustancia química o biológica que se usa para eliminar insectos perjudiciales para los cultivos.',
    },
    {
      termino: 'Insumos',
      significado:
        'Materiales o productos necesarios para la producción agrícola (semillas, fertilizantes, pesticidas, etc.).',
    },
    {
      termino: 'Labranza',
      significado:
        'Conjunto de labores mecánicas que se realizan en el suelo para prepararlo para la siembra.',
    },
    {
      termino: 'Muestra de suelo',
      significado:
        'Porción representativa del suelo tomada para análisis y diagnóstico.',
    },
    {
      termino: 'pH del suelo',
      significado:
        'Medida que indica el grado de acidez o alcalinidad del suelo, fundamental para la disponibilidad de nutrientes.',
    },
    {
      termino: 'Poda',
      significado:
        'Corte de partes de una planta (ramas, hojas, flores) para mejorar su forma, sanidad o productividad.',
    },
    {
      termino: 'Riego',
      significado:
        'Proceso de suministro de agua a los cultivos en cantidades adecuadas y en el momento oportuno.',
    },
    {
      termino: 'Producción',
      significado:
        'Resultado de todo el proceso agrícola; cantidad de productos obtenidos del cultivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'EOS DATA ANALYTICS. (2025). Tipos De Cultivos Agrícolas: Maximizando Su Rendimiento.',
      link: 'https://eos.com/es/blog/tipos-de-cultivos-agricolas/',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2025). Mecanización Agrícola Sostenible.',
      link:
        'https://www.fao.org/sustainable-agricultural-mechanization/guidelinesoperations/cropproduction/es/',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2001). Sistemas de Producción Agropecuaria y Pobreza.',
      link:
        'https://www.fao.org/4/y1860s/y1860s03.htm#:~:text=Estos%20recursos%20normalmente%20incluyen%20diferentes%20tipos%20de,as%C3%AD%20como%2C%20capital%20humano%2C%20social%20y%20financiero.',
    },
    {
      referencia:
        'Asistencia Técnica Agrícola. (s.f.). Las Labores Agrícolas en Los Cultivos en el Trópico.',
      link: 'https://www.agro-tecnologia-tropical.com/labores_de_cultivo.html',
    },
    {
      referencia: 'Mundo agricultura. (s.f.). Tipos de cultivo.',
      link: 'https://mundoagricultura.com/cultivos/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Teran Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth González Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
