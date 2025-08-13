<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 En las condiciones actuales de la agricultura, el control de labores se ha convertido en una herramienta clave para mejorar la eficiencia, garantizar la trazabilidad y avanzar hacia una producción sostenible. Su adecuada aplicación permite a productores, trabajadores y administradores agrícolas desarrollar habilidades que facilitan la planificación, la ejecución, el registro y la evaluación de las diferentes labores del ciclo productivo de un cultivo.
    
    .bloque-texto-a.color-primario.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-center
        .col-lg-9.com.mb-0.mb-lg-0
          .bloque-texto-a__texto.p-4.mb-lg-0.mb-4.my-3.my-lg-0
            p.mb-4 El manejo eficiente de estas labores permite optimizar los recursos disponibles, aumentar la productividad, reducir los costos operativos y minimizar los impactos ambientales. A través del uso de formatos prácticos y sencillos, se favorece el seguimiento detallado de la mano de obra, los insumos, la maquinaria y los tiempos de ejecución.
            p.mb-4 Dentro de este enfoque, se abordan aspectos fundamentales como la programación de actividades agrícolas, el registro de labores en campo, el monitoreo del progreso de las tareas y la evaluación del rendimiento del trabajo realizado.
            p.mb-0 Esta visión integral fortalece la capacidad de quienes participan en los procesos agrícolas para enfrentar los desafíos del sector, promoviendo una gestión más organizada, técnica y sostenible.
        .col-lg-3.col-md-6.col-9.mb-0
          img(src='@/assets/curso/intro/1.png', alt='')
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
