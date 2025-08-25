<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p(data-aos="fade-left") El plan de producción agrícola se compone de varios elementos esenciales que permiten organizar y ejecutar de manera eficiente las actividades del campo. Entre ellos se encuentra el cultivo, que se clasifica según su uso, la especie cultivada, el ciclo de vida y el sistema de producción. La producción agrícola, por su parte, abarca fases como la preparación del suelo, la siembra, el manejo del cultivo, la cosecha y la postcosecha. A estos procesos se suman los factores agroclimáticos, como la temperatura, la precipitación, la humedad, la radiación solar y el viento, los cuales inciden directamente en el desarrollo de los cultivos. Otro componente importante es el tipo de suelo, que puede ser arenoso, arcilloso, franco, humífero, calizo o limoso, y cuya naturaleza influye en la productividad. Asimismo, los recursos como el tiempo, el presupuesto y el personal resultan fundamentales para planificar y ejecutar adecuadamente las labores agrícolas. Todos estos aspectos están estrechamente relacionados con los requerimientos del cultivo, los cuales dependen de factores naturales o artificiales, y se integran en un plan de trabajo que permite coordinar y optimizar el proceso productivo.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Presenta los elementos esenciales del plan de producción agrícola. Parte del análisis del cultivo, seguido por la producción agrícola, factores agroclimáticos y tipos de suelo. También incluye los recursos necesarios (tiempo, presupuesto y personal), los requerimientos del cultivo y finaliza con el plan de trabajo como componente integrador.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
