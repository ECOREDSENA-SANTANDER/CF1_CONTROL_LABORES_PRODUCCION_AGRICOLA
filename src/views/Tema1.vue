<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Titulo de primer nivel
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          img(src='@/assets/curso/tema1/1.png', alt='')

      p.mb-5 Se define como el arte de preparar la tierra y cuidar las plantas para obtener frutos, vegetales, u otros productos agrícolas para diferentes usos, su clasificación se determina de acuerdo a varios aspectos: 
          
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
  
      .titulo.mb-lg-4.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
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


      .titulo.mb-lg-4.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-4 Producción agrícola







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
