<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Cultivo
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          img(src='@/assets/curso/tema1/1.png', alt='')

      p.mb-5(data-aos="fade-right") Se define como el arte de preparar la tierra y cuidar las plantas para obtener frutos, vegetales, u otros productos agrícolas para diferentes usos, su clasificación se determina de acuerdo a varios aspectos: 
          
      .tarjetaf.p-4.mb-5
        SlyderA(tipo="b")(data-aos="zoom-in-left")
          .row.justify-content-center.align-items-center.p-0.p-lg-4
            .col-lg-7
              h4.mb-4.mx-lg-5 Cultivos alimentarios
              p.mb-lg-0.mb-4.mx-lg-5 Para consumo humano (cereales, frutas y hortalizas).
            .col-lg-5.col-md-7
              img.mb-0(alt="" src="@/assets/curso/tema1/2.png")
          .row.justify-content-center.align-items-center.p-0.p-lg-4
            .col-lg-7
              h4.mb-4.mx-lg-5 Cultivos forrajeros
              p.mb-lg-0.mb-4.mx-lg-5 Para alimentación animal.
            .col-lg-5.col-md-7
              img.mb-0(alt="" src="@/assets/curso/tema1/3.png")
          .row.justify-content-center.align-items-center.p-0.p-lg-4
            .col-lg-7
              h4.mb-4.mx-lg-5 Cultivos textiles
              p.mb-lg-0.mb-4.mx-lg-5 Fibras para la industria textil (algodón, lino).
            .col-lg-5.col-md-7
              img.mb-0(alt="" src="@/assets/curso/tema1/4.png")
          .row.justify-content-center.align-items-center.p-0.p-lg-4
            .col-lg-7
              h4.mb-4.mx-lg-5 Cultivos oleaginosos
              p.mb-lg-0.mb-4.mx-lg-5 Aceites para consumo o industria (soya, girasol).
            .col-lg-5.col-md-7
              img.mb-0(alt="" src="@/assets/curso/tema1/5.png")
          .row.justify-content-center.align-items-center.p-0.p-lg-4
            .col-lg-7
              h4.mb-4.mx-lg-5 Cultivos ornamentales
              p.mb-lg-0.mb-4.mx-lg-5 Para decoración y paisajismo.
            .col-lg-5.col-md-7
              img.mb-0(alt="" src="@/assets/curso/tema1/6.png")
          .row.justify-content-center.align-items-center.p-0.p-lg-4
            .col-lg-7
              h4.mb-4.mx-lg-5 Cultivos industriales
              p.mb-lg-0.mb-4.mx-lg-5 Materias primas para la industria (caña de azúcar, tabaco). 
            .col-lg-5.col-md-7
              img.mb-0(alt="" src="@/assets/curso/tema1/7.png")


      .titulo.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-4 Según la especie cultivada

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3.col-md-5.col-7.mb-4
          img(src='@/assets/curso/tema1/8.png', alt='')
        .col-lg-9
          SlyderF(columnas="col-lg-4 col-md-6 col-xl-4")
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.align-items-center.mb-4
                .col-8
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/9.svg' alt='AvatarTop')
              .bg5.p-1.mb-4
                h4.text-center.mb-0 Cereales
              p.mb-2.text-center(data-aos="fade-right") Trigo, arroz, maíz, cebada.
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.align-items-center.mb-4
                .col-8
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/10.svg' alt='AvatarTop')
              .bg5.p-1.mb-4
                h4.text-center.mb-0 Leguminosas
              p.mb-2.text-center(data-aos="fade-right") Frijol, lentejas, garbanzos.
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.align-items-center.mb-4
                .col-8
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/11.svg' alt='AvatarTop')
              .bg5.p-1.mb-4
                h4.text-center.mb-0 Oleaginosas
              p.mb-2.text-center(data-aos="fade-right") Soya, girasol, canola.
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.align-items-center.mb-4
                .col-8
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/12.svg' alt='AvatarTop')
              .bg5.p-1.mb-4
                h4.text-center.mb-0 Hortalizas
              p.mb-2.text-center(data-aos="fade-right") Tomate, lechuga, cebolla.
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.align-items-center.mb-4
                .col-8
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/13.svg' alt='AvatarTop')
              .bg5.p-1.mb-4
                h4.text-center.mb-0 Frutales
              p.mb-2.text-center(data-aos="fade-right") Manzana, naranja, plátano.
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.align-items-center.mb-4
                .col-8
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/14.svg' alt='AvatarTop')
              .bg5.p-1.mb-4
                h4.text-center.mb-0 Raíces y tubérculos
              p.mb-2.text-center(data-aos="fade-right") Papa, yuca, zanahoria.
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.align-items-center.mb-4
                .col-8
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/15.svg' alt='AvatarTop')
              .bg5.p-1.mb-4
                h4.text-center.mb-0 Ornamentales
              p.mb-2.text-center(data-aos="fade-right") Flores, plantas de jardín, árboles decorativos.
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.align-items-center.mb-4
                .col-8
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema1/16.svg' alt='AvatarTop')
              .bg5.p-1.mb-4
                h4.text-center.mb-0 Pastos
              p.mb-2.text-center(data-aos="fade-right") Gramíneas utilizadas para alimentación animal. 

      .titulo.mb-lg-4.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-4 Según el ciclo de vida

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .row.justify-content-center.align-items-end
            .col-lg-9(data-aos="fade-right").ps-lg-0
              .crd.crd--avatarHorizontal.crd--first.py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema1/18.svg", alt="alt")
                  .col
                    h4.mb-3 Cultivos anuales
                    p Completan su ciclo de vida desde la siembra hasta la cosecha en un solo año. 
                    p Ejemplos: maíz, arroz.
              .crd.crd--avatarHorizontal.py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema1/19.svg", alt="alt")
                  .col
                    h4.mb-3 Cultivos bianuales
                    p Requieren dos años para completar su desarrollo; en el primero crecen y en el segundo florecen y se cosechan.
                    p Ejemplos: zanahoria, remolacha.
              .crd.crd--avatarHorizontal.crd--last.py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema1/20.svg", alt="alt")
                  .col
                    h4.mb-3 Cultivos perennes
                    p Tienen una vida productiva de varios años y permiten cosechas continuas sin necesidad de replantar cada temporada.
                    p Ejemplos: frutales, café.
            .col-lg-4.sob1.d-none.d-lg-block(data-aos="fade-left")
              img.mb-4(src="@/assets/curso/tema1/17.svg", alt="alt")
  
      .titulo1.mb-lg-4.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-4 Según el sistema de producción

      .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4
        .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.bg7.p-3
            .row.justify-content-center.align-items-center.mb-0
              .col-6.mb-4.my-4
                img.ima1(data-aos="zoom-in-left")(src='@/assets/curso/tema1/21.svg' alt='AvatarTop')
            h4.text-center.mb-3 Agricultura de subsistencia
            p.mb-0.text-center(data-aos="fade-right") Destinada al autoconsumo familiar; se caracteriza por el uso limitado de tecnología y bajos niveles de producción.
        .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.bg7.p-3
            .row.justify-content-center.align-items-center.mb-0
              .col-6.mb-4.my-4
                img.ima2(data-aos="zoom-in-left")(src='@/assets/curso/tema1/22.svg' alt='AvatarTop')
            h4.text-center.mb-3 Agricultura extensiva
            p.mb-3.text-center(data-aos="fade-right") Se desarrolla en grandes extensiones de tierra, con baja densidad de siembra.
        .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.bg7.p-3
            .row.justify-content-center.align-items-center.mb-0
              .col-6.mb-4.my-4
                img.ima3(data-aos="zoom-in-left")(src='@/assets/curso/tema1/23.svg' alt='AvatarTop')
            h4.text-center.mb-3 Agricultura intensiva
            p.mb-0.text-center(data-aos="fade-right") Emplea alta densidad de cultivo, tecnología avanzada e insumos agroquímicos para maximizar el rendimiento por unidad de superficie.
        .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.bg7.p-3
            .row.justify-content-center.align-items-center.mb-0
              .col-6.mb-4.my-4
                img.ima4(data-aos="zoom-in-left")(src='@/assets/curso/tema1/24.svg' alt='AvatarTop')
            h4.text-center.mb-3 Agricultura de secano
            p.mb-0.text-center(data-aos="fade-right") Depende exclusivamente del agua de lluvia para el desarrollo de los cultivos.


      .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4
        .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.bg2.p-3
            .row.justify-content-center.align-items-center.mb-0
              .col-4.mb-4.my-4
                img.ima1(data-aos="zoom-in-left")(src='@/assets/curso/tema1/29.svg' alt='AvatarTop')
            .bg1.p-1.mb-4
              h4.text-center.mb-0.text-white.ps-lg-4.pe-lg-4.ps-3.pe-3 Agricultura de regadío
            p.mb-2.text-center(data-aos="fade-right") Utiliza sistemas artificiales de riego para suplir las necesidades hídricas de las plantas.
        .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.bg2.p-3
            .row.justify-content-center.align-items-center.mb-0
              .col-4.mb-4.my-4
                img.ima1(data-aos="zoom-in-left")(src='@/assets/curso/tema1/30.svg' alt='AvatarTop')
            .bg1.p-1.mb-4
              h4.text-center.mb-0.text-white.ps-lg-4.pe-lg-4.ps-3.pe-3 Monocultivo
            p.mb-2.text-center(data-aos="fade-right") Práctica agrícola que consiste en sembrar una sola especie vegetal en una misma parcela de forma continua.
        .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.bg2.p-3
            .row.justify-content-center.align-items-center.mb-0
              .col-4.mb-4.my-4
                img.ima1(data-aos="zoom-in-left")(src='@/assets/curso/tema1/31.svg' alt='AvatarTop')
            .bg1.p-1.mb-4
              h4.text-center.mb-0.text-white.ps-lg-4.pe-lg-4.ps-3.pe-3 Policultivo
            p.mb-2.text-center(data-aos="fade-right") Consiste en el cultivo simultáneo de varias especies vegetales en una misma área, promoviendo la diversidad y el aprovechamiento del suelo.


      .titulo2.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-4 Producción agrícola

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/32.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Hace referencia al conjunto de actividades destinadas al cultivo de la tierra con el objetivo de obtener productos útiles para el ser humano, principalmente alimentos, pero también fibras, biocombustibles y otros recursos naturales. Estas actividades deben llevarse a cabo siguiendo un orden específico, estructurado en etapas, para garantizar la eficiencia y sostenibilidad del proceso productivo.

      .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/33.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.brow Preparación de terrenos agrícolas
                p.mb-0 Se invita a seguir explorando sobre las normativas de las buenas prácticas agrícolas.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=X5lN6swL2ZE" target="_blank")
                  span Ir al sitio
                  i.fas.fa-file-video
 
      AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-5(data-aos="fade-right")
        .row.justify-content-center.align-items.p-2(titulo="Preparación del suelo")
          .col-lg-8.mb-lg-0.mb-4
            p.mb-4 La primera labor fundamental para asegurar un cultivo con buen rendimiento es preparar el suelo en condiciones óptimas para el desarrollo de las plantas. El objetivo principal es garantizar un sustrato con nutrientes adecuados y características físicas que favorezcan la germinación de las semillas y el establecimiento del cultivo desde sus primeras etapas.
            p.mb-lg-0.mb-4 Según la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO, 2025), aunque tradicionalmente esta preparación se ha realizado mediante prácticas como la quema de rastrojos y el volteo intensivo de tierras, estas técnicas no son recomendadas por su impacto negativo en la salud del suelo y el medio ambiente.
          .col-lg-4.col-md-9.col-10
            img.mb-0(alt="" src="@/assets/curso/tema1/34.png")
        .row.justify-content-center.align-items.p-2(titulo="Siembra")
          .col-lg-8.mb-lg-0.mb-4
            p.mb-4 Esta etapa es crucial dentro del ciclo de producción agrícola, ya que tiene un impacto directo en el desarrollo y la productividad del cultivo. Existen diversos métodos de siembra, entre los cuales se destacan: la siembra directa en lote, la siembra en almácigos con posterior trasplante al sitio definitivo, y la siembra mecanizada. La elección del método adecuado depende de factores como el tipo de cultivo, las características del suelo y los recursos disponibles.
            p.mb-lg-0.mb-4 Un aspecto igualmente importante es la densidad de siembra, la cual debe determinarse con precisión. Esto implica definir el espaciamiento óptimo entre plantas y entre surcos, con el fin de evitar la competencia por luz, agua y nutrientes. Una densidad inadecuada puede afectar negativamente tanto la calidad como la cantidad de la producción.
          .col-lg-4.col-md-9.col-10
            img.mb-0(alt="" src="@/assets/curso/tema1/35.png")
        .row.justify-content-center.align-items.p-2(titulo="Manejo del cultivo")
          .col-lg-8.mb-lg-0.mb-4
            p.mb-4 Esta etapa comprende la aplicación de diversas prácticas agronómicas orientadas a garantizar un crecimiento óptimo de las plantas y una producción de alta calidad. Entre estas actividades, el riego desempeña un papel fundamental y debe ejecutarse de manera eficiente y oportuna, teniendo en cuenta tanto las necesidades hídricas del cultivo como las condiciones climáticas.
            p.mb-4 La fertilización es igualmente esencial, ya que permite suministrar los nutrientes requeridos en cada fase del desarrollo vegetal. Para ello, pueden emplearse fertilizantes orgánicos o químicos, según el programa de manejo agronómico establecido.
            p.mb-4 Las podas, ya sean de formación, mantenimiento o producción, favorecen el equilibrio vegetativo, mejoran la aireación del cultivo y facilitan el control fitosanitario.
            p.mb-4 El control de malezas debe realizarse de forma preventiva y continua, mediante métodos manuales, mecánicos o químicos, con el fin de reducir la competencia por agua, luz y nutrientes.
            p.mb-4 Por su parte, el #[b Manejo Integrado de Plagas y Enfermedades (MIPE)] es clave para preservar la sanidad del cultivo. Este enfoque combina el monitoreo constante, prácticas culturales adecuadas, control biológico y el uso racional de productos fitosanitarios.
            p.mb-lg-0.mb-4 Un manejo técnico y equilibrado de todos estos aspectos permite alcanzar una producción agrícola sostenible, eficiente y económicamente rentable.
          .col-lg-4.col-md-9.col-10
            img.mb-0(alt="" src="@/assets/curso/tema1/36.png")
        .row.justify-content-center.align-items.p-2(titulo="Cosecha")
          .col-lg-8.mb-lg-0.mb-4
            p.mb-4 Representa la etapa final del ciclo productivo agrícola y consiste en la recolección de las partes útiles del cultivo, como frutos, semillas, raíces, hojas, tallos o flores, en su punto óptimo de madurez fisiológica o comercial, dependiendo del destino del producto (consumo fresco, procesamiento industrial, almacenamiento o comercialización).
            p.mb-4 Esta actividad no se limita únicamente a la recolección, sino que implica la toma de decisiones técnicas basadas en criterios fundamentales como:
            p.mb-4 #[b • Grado de madurez:] la determinación del momento adecuado para la cosecha garantiza la calidad del producto en aspectos como sabor, textura, valor nutricional y capacidad de conservación.
            p.mb-4 #[b • Condiciones climáticas:] factores como la lluvia, el calor extremo o las heladas pueden afectar el rendimiento del cultivo o provocar pérdidas si la cosecha no se realiza a tiempo.
            p.mb-4 #[b • Métodos de recolección:] la recolección puede realizarse de forma manual, como en el caso de frutas, hortalizas y flores, o de manera mecanizada, como ocurre en cultivos de granos, papa o caña de azúcar. La elección del método depende del tipo de cultivo y de la escala de producción.
            p.mb-4 #[b • Cuidado del producto:] es fundamental evitar daños físicos como golpes, cortes o magulladuras durante la cosecha, ya que estos pueden reducir su valor comercial y disminuir su vida útil.
            p.mb-lg-0.mb-4 Una cosecha bien planificada y ejecutada es determinante para conservar la calidad del producto y optimizar la rentabilidad del proceso agrícola.
          .col-lg-4.col-md-9.col-10
            img.mb-0(alt="" src="@/assets/curso/tema1/37.png")
        .row.justify-content-center.align-items.p-2(titulo="Postcosecha")
          .col-lg-8.mb-lg-0.mb-4
            p.mb-4 Es el conjunto de actividades realizadas una vez finalizada la cosecha, con el propósito de conservar la calidad de los productos y prepararlos para su comercialización o consumo. Estas labores pueden incluir procesos como limpieza, clasificación, empaque, almacenamiento y transporte, todos ellos fundamentales para minimizar pérdidas y mantener el valor del producto.
            p.mb-4 Es importante tener en cuenta que algunas prácticas postcosecha son específicas según el tipo de cultivo o sistema de producción. Por ejemplo, el blanqueo en cultivos de raíces, el trasplante en algunas hortalizas, o el embolsado de frutas para protegerlas durante su desarrollo y cosecha.
            p.mb-lg-0.mb-4 Una adecuada gestión postcosecha contribuye significativamente a prolongar la vida útil del producto, garantizar su inocuidad y facilitar su inserción en los mercados.
          .col-lg-4.col-md-9.col-10
            img.mb-0(alt="" src="@/assets/curso/tema1/38.png")

      .titulo.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-4 Factores agroclimáticos

      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/39.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Son las condiciones climáticas que inciden directamente en el desarrollo de la agricultura y en la producción de cultivos. Estos factores, como la temperatura, la precipitación, la humedad, la radiación solar y el viento, determinan la aptitud agrícola de una región y pueden influir significativamente en el rendimiento, la calidad y el calendario de siembra y cosecha de los cultivos.

      TabsC.color-primario.mb-5(data-aos="fade-right")
        .py-3.py-md-4.bg3.px-3(titulo="Temperatura")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.col-md-9.col-10.order-lg-1.order-md-2.order-2
              img(src='@/assets/curso/tema1/40.png', alt='')
            .col-lg-7.order-lg-2.order-md-1.order-1
              p.mb-4.mb-lg-0 Influye en todas las etapas del desarrollo vegetal, incluyendo la germinación, el crecimiento, la floración y la maduración. Cada cultivo posee un rango óptimo de temperatura que permite su desarrollo adecuado; temperaturas fuera de este rango pueden limitar el rendimiento o causar estrés fisiológico.
        .py-3.py-md-4.bg3.px-3(titulo="Precipitación")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.col-md-9.col-10.order-lg-1.order-md-2.order-2
              img(src='@/assets/curso/tema1/41.png', alt='')
            .col-lg-7.order-lg-2.order-md-1.order-1
              p.mb-4.mb-lg-0 La cantidad y distribución de la lluvia o nieve son fundamentales para el suministro hídrico de los cultivos. Tanto la escasez (sequía) como el exceso de agua (inundaciones o encharcamientos) pueden afectar negativamente el crecimiento y la producción agrícola.
        .py-3.py-md-4.bg3.px-3(titulo="Humedad")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.col-md-9.col-10.order-lg-1.order-md-2.order-2
              img(src='@/assets/curso/tema1/42.png', alt='')
            .col-lg-7.order-lg-2.order-md-1.order-1
              p.mb-4.mb-lg-0 La humedad relativa del aire y la humedad del suelo desempeñan un papel clave en procesos fisiológicos como la fotosíntesis, la transpiración y la absorción de nutrientes. Niveles inadecuados de humedad pueden favorecer la aparición de enfermedades fúngicas o reducir la eficiencia del uso del agua.
        .py-3.py-md-4.bg3.px-3(titulo="Radiación solar")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.col-md-9.col-10.order-lg-1.order-md-2.order-2
              img(src='@/assets/curso/tema1/43.png', alt='')
            .col-lg-7.order-lg-2.order-md-1.order-1
              p.mb-4.mb-lg-0 Constituye la fuente de energía para la fotosíntesis, proceso esencial para el crecimiento vegetal. La intensidad, la duración y la calidad de la luz inciden directamente en el desarrollo, la floración y la productividad de los cultivos.
        .py-3.py-md-4.bg3.px-3(titulo="Viento")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.col-md-9.col-10.order-lg-1.order-md-2.order-2
              img(src='@/assets/curso/tema1/44.png', alt='')
            .col-lg-7.order-lg-2.order-md-1.order-1
              p.mb-4.mb-lg-0 Puede tener efectos tanto positivos como negativos sobre los cultivos. Favorece procesos como la polinización y la dispersión de semillas, pero también puede aumentar la pérdida de agua por transpiración, provocar daños mecánicos a las plantas o dificultar la aplicación de insumos agrícolas.

      .titulo3.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-4 Suelos

      .bg4.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/tema1/45.png', alt='')
          .col-lg-7(data-aos="fade-left")
            .p-4
              img.img-t.mb-4.d-none.d-lg-block(src='@/assets/curso/tema1/46.svg', alt='Imagen decorativa')
              p.mb-0(data-aos="fade-left") El suelo es una mezcla compleja de materia orgánica, minerales, agua y aire, formada a lo largo del tiempo mediante la descomposición de rocas, la actividad biológica y la acción de diversos factores climáticos. Su composición varía según la región, lo que determina su aptitud agrícola. Estas variaciones influyen directamente en su capacidad para sustentar distintos tipos de cultivos, siendo algunos suelos altamente productivos, mientras que otros pueden presentar limitaciones para la agricultura.

      TabsA.color-acento-contenido.mb-0(data-aos="fade-right")
        .tarjeta.color-acento-contenido.bg6.p-lg-5.p-4(titulo="Suelos arenosos")
          .row.justify-content-center
            .col-lg-8
              p.mb-4 Se caracterizan por estar compuestos principalmente por partículas de gran tamaño, lo que les da una textura suelta y granulada. Estas propiedades les otorgan una excelente aireación y drenaje, lo que facilita el desarrollo radicular y las labores agrícolas. Sin embargo, presentan una baja capacidad de retención de agua y nutrientes, lo que los hace menos fértiles en comparación con otros tipos de suelo.
              p.mb-lg-0.mb-4 Para mejorar su productividad, es común la incorporación de materia orgánica y enmiendas que aumenten su capacidad de retener humedad y nutrientes, favoreciendo así un entorno más adecuado para el desarrollo de los cultivos.
            .col-lg-4
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/47.png', alt='')
        .tarjeta.color-acento-contenido.bg6.p-lg-5.p-4(titulo="Suelos arcillosos")
          .row.justify-content-center
            .col-lg-8
              p.mb-4 Están formados por partículas muy finas, lo que les confiere una alta capacidad de retención de agua y nutrientes, haciéndolos generalmente más fértiles que los suelos arenosos. Sin embargo, esta misma característica puede generar inconvenientes: cuando están húmedos, suelen volverse pegajosos y compactos, dificultando la aireación, el drenaje y las labores agrícolas. Al secarse, tienden a agrietarse, lo que también puede afectar el desarrollo radicular de los cultivos.
              p.mb-lg-0.mb-4 Para un manejo adecuado de este tipo de suelos, se recomienda la incorporación de materia orgánica, que ayuda a mejorar su estructura y porosidad. Asimismo, es fundamental una gestión eficiente del riego para evitar problemas de encharcamiento o compactación.
            .col-lg-4
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/48.png', alt='')
        .tarjeta.color-acento-contenido.bg6.p-lg-5.p-4(titulo="Suelos francos")
          .row.justify-content-center
            .col-lg-8
              p.mb-4 Se caracterizan por tener una composición equilibrada de partículas de arena, limo y arcilla, lo que les confiere propiedades físicas y químicas óptimas para la producción agrícola. Esta mezcla permite un buen drenaje sin riesgo de encharcamiento, así como una adecuada retención de agua y nutrientes, favoreciendo el desarrollo saludable de los cultivos.
              p.mb-lg-0.mb-4 Gracias a su textura balanceada, los suelos francos ofrecen condiciones ideales para la aireación, el crecimiento radicular y la facilidad en las labores agrícolas, lo que los convierte en uno de los tipos de suelo más valorados en la actividad agropecuaria.
            .col-lg-4
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/49.png', alt='')
        .tarjeta.color-acento-contenido.bg6.p-lg-5.p-4(titulo="Suelos humíferos")
          .row.justify-content-center
            .col-lg-8
              p.mb-4 Se distinguen por su elevado contenido de materia orgánica, lo que les confiere un color oscuro característico y una textura suelta y rica. Esta abundancia de materia orgánica mejora significativamente la estructura del suelo, aumenta su capacidad de retención de agua y proporciona nutrientes esenciales para el desarrollo de las plantas.
              p.mb-lg-0.mb-4 Además, estos suelos estimulan la actividad biológica, creando un entorno favorable para microorganismos beneficiosos que contribuyen a la salud del ecosistema edáfico. Gracias a estas propiedades, los suelos humíferos son altamente valorados en la agricultura, especialmente en sistemas de producción sostenible, ya que permiten un cultivo más eficiente y respetuoso con el medio ambiente.
            .col-lg-4
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/50.png', alt='')
        .tarjeta.color-acento-contenido.bg6.p-lg-5.p-4(titulo="Suelo calizo o calcáreo")
          .row.justify-content-center
            .col-lg-8
              p.mb-4 Se caracterizan por contener una alta concentración de sales calcáreas, principalmente carbonato de calcio, lo que les otorga un color que varía entre blanco y pardo. Son comunes en regiones áridas y semiáridas, donde las condiciones climáticas secas pueden limitar la disponibilidad de agua, reduciendo en algunos casos su fertilidad para ciertos cultivos.
              p.mb-lg-0.mb-4 La presencia de cal influye en el pH del suelo, que suele ser alcalino, lo cual puede afectar negativamente la disponibilidad y absorción de nutrientes esenciales, como hierro, fósforo y zinc. Para mejorar la productividad de los suelos calizos, es fundamental implementar un manejo agronómico adecuado, que incluya la aplicación de enmiendas acidificantes y la selección de cultivos adaptados a estas condiciones edáficas.
            .col-lg-4
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/51.png', alt='')
        .tarjeta.color-acento-contenido.bg6.p-lg-5.p-4(titulo="Suelos limosos")
          .row.justify-content-center
            .col-lg-8
              p.mb-4 Se caracterizan por contener una alta proporción de partículas de limo, un tipo de sedimento fino cuyo tamaño es intermedio entre la arena y la arcilla. Esta composición le da una textura suave y sedosa al tacto.
              p.mb-4 Tienen una buena capacidad para retener agua y nutrientes, lo cual favorece el desarrollo de las plantas y los convierte en suelos generalmente fértiles. Sin embargo, cuando la proporción de limo es excesiva, pueden presentar problemas de drenaje, lo que aumenta el riesgo de encharcamiento.
              p.mb-lg-0.mb-4 Para mantener su productividad, es importante aplicar un manejo adecuado que evite la compactación y asegure una buena aireación del suelo, promoviendo así condiciones óptimas para el crecimiento de los cultivos.
            .col-lg-4
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/52.png', alt='')

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
