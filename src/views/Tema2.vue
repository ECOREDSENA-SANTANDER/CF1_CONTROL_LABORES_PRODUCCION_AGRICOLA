<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Recursos en la producción agrícola

    .bloque-texto-a.color-primario.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-center
        .col-lg-9.com.mb-0.mb-lg-0
          .bloque-texto-a__texto.p-4.p-lg-5.mb-lg-0.mb-4.my-3.my-lg-0
            p.mb-0 Los recursos como el tiempo, el presupuesto y el personal son de gran importancia para el desarrollo efectivo de la producción, aunque son muy distintos al interconectarlos cumplen una función crucial en la gestión efectiva. El tiempo establece los límites temporales del plan elaborado, el presupuesto asigna los recursos financieros y el personal aporta las habilidades y conocimientos necesarios. Una gestión adecuada de estos recursos asegura que el plan se complete a tiempo, dentro del presupuesto y con los resultados deseados. 
        .col-lg-3.mb-0.d-none.d-lg-block
          img.img-a.img-t.imas(src='@/assets/curso/tema2/1.png', alt='')

    AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items.p-2(titulo="Tiempo")
        .col-lg-6.mb-lg-0.mb-4
          p.mb-lg-0.mb-4 Es un recurso limitado y valioso, por lo que su gestión eficiente resulta fundamental. Implica la planificación, organización y control de las actividades contempladas dentro de un plan de trabajo. Una adecuada gestión del tiempo permite evitar retrasos, optimizar la ejecución de tareas y cumplir con los plazos establecidos, lo que contribuye al logro de los objetivos de manera más efectiva y productiva.
        .col-lg-6.col-md-9.col-10
          img.mb-0(alt="" src="@/assets/curso/tema2/2.png")
      .row.justify-content-center.align-items.p-2(titulo="Presupuesto")
        .col-lg-6.mb-lg-0.mb-4
          p.mb-lg-0.mb-4 Representa la asignación y administración de recursos económicos destinados a llevar a cabo el cultivo. Esta gestión permite planificar, controlar y optimizar los gastos, asegurando que el proceso productivo se desarrolle dentro de los límites presupuestarios establecidos. Una adecuada gestión financiera contribuye a la sostenibilidad del proyecto y al uso eficiente de los recursos disponibles.
        .col-lg-6.col-md-9.col-10
          img.mb-0(alt="" src="@/assets/curso/tema2/3.png")
      .row.justify-content-center.align-items.p-2(titulo="Personal")
        .col-lg-6.mb-lg-0.mb-4
          p.mb-4 Comprende la organización y administración de los miembros del equipo, considerando sus habilidades, experiencia y conocimientos específicos. Una asignación efectiva del recurso humano implica identificar las necesidades del cultivo, seleccionar perfiles adecuados y distribuir las tareas de forma equitativa y estratégica.
          p.mb-lg-0.mb-4 Una gestión adecuada del personal no solo garantiza que las labores se ejecuten con eficiencia y competencia, sino que también fomenta la colaboración, mejora el ambiente de trabajo y contribuye a maximizar la productividad del equipo en todas las etapas del proceso agrícola.
        .col-lg-6.col-md-9.col-10
          img.mb-0(alt="" src="@/assets/curso/tema2/4.png")

    .cajon.color-primario.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right")
      p.mb-0 En resumen, los recursos mencionados son fundamentales para el éxito de la producción agrícola. Una planificación adecuada y una ejecución eficiente de estos elementos permiten optimizar los procesos, prevenir inconvenientes y garantizar que la producción se desarrolle de manera ordenada, alcanzando los resultados esperados con eficacia y sostenibilidad.

    .titulo.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-left")
      img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4 Requerimientos del cultivo

    p.mb-5(data-aos="fade-right") Son factores que se necesitan para cultivar, cosechar y procesar los productos agrícolas. Estos son esenciales para la obtención de alimentos y otros productos derivados de las plantas y animales. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12(alt='La producción agrícola depende de factores naturales como el suelo, el agua, el clima y la biodiversidad, que influyen directamente en el desarrollo de los cultivos. También intervienen factores artificiales o insumos, como semillas, fertilizantes, pesticidas, maquinaria, infraestructura y tecnología, que mejoran la eficiencia y productividad del sistema agrícola.')
    
        .titulo-sexto.color-secundario.mb-4
          h5 Tabla 1. 
          | Factores que influyen en la producción agrícola

        .tabla-a.color-acento-contenido.mb-2(data-aos="fade-left")
          table
            thead
              tr(data-aos="fade-right")
                th Categoría 
                th Factor
                th Descripción 
            tbody
              tr(data-aos="fade-left")
                td #[b Orden natural]
                td Suelo
                td.text-start.p-lg-5 Capa superficial de la tierra donde se desarrollan las plantas. Su estructura, composición y fertilidad son esenciales para el crecimiento de los cultivos.
              tr(data-aos="fade-right")
                td -
                td Agua
                td.text-start.p-lg-5 Recurso vital para las plantas. Su disponibilidad y calidad influyen directamente en el rendimiento agrícola.
              tr(data-aos="fade-left")
                td -
                td Clima
                td.text-start.p-lg-5 Condiciones como temperatura, radiación solar, viento y lluvias que afectan el desarrollo y ciclo de los cultivos.
              tr(data-aos="fade-right")
                td -
                td Biodiversidad
                td.text-start.p-lg-5 Variedad de especies vegetales, animales y microorganismos que favorecen el equilibrio ecológico y la salud del suelo.
              tr(data-aos="fade-left")
                td #[b Orden artificial (insumos)]
                td Semillas
                td.text-start.p-lg-5 Base de la producción agrícola. Su calidad genética y adaptabilidad definen el potencial de rendimiento.
              tr(data-aos="fade-right")
                td -
                td Fertilizantes
                td.text-start.p-lg-5 Aportan nutrientes al suelo para mejorar el desarrollo y productividad de las plantas.
              tr(data-aos="fade-left")
                td -
                td Pesticidas
                td.text-start.p-lg-5 Sustancias utilizadas para controlar plagas, enfermedades o malezas que afectan los cultivos.
              tr(data-aos="fade-right")
                td -
                td Maquinaria
                td.text-start.p-lg-5 Equipos como tractores, sembradoras o cosechadoras que optimizan y mecanizan las labores agrícolas.
              tr(data-aos="fade-left")
                td -
                td Infraestructura
                td.text-start.p-lg-5 Sistemas de riego, invernaderos, bodegas y otras instalaciones que mejoran las condiciones de producción.
              tr(data-aos="fade-right")
                td -
                td Tecnología
                td.text-start.p-lg-5 Aplicación de herramientas modernas como agricultura de precisión, sensores, drones y biotecnología para una producción más eficiente y sostenible.

    .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/33.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.brow Requerimientos de la producción agrícola
              p.mb-0 Se invita a seguir conociendo sobre los requerimientos necesarios de la producción.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=06NTVz9mbb4" target="_blank")
                span Ir al sitio
                i.fas.fa-file-video

    .titulo4.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4 Plan de trabajo

    .cajon.color-secundario.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-left")
      p.mb-0 Un plan de trabajo es un documento que establece un marco para la ejecución de una tarea; en el encontramos los pasos a seguir, los recursos necesarios y los responsables para lograr los resultados que se quieren obtener. Funciona como una hoja de ruta que guía a individuos o equipos hacia el cumplimiento de sus metas. 

    .titulo5.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4 Importancia

    .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/5.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
        p El plan de trabajo es una herramienta clave en la producción agrícola, ya que permite organizar las tareas de manera lógica y secuencial. Al establecer objetivos claros, asignar responsabilidades específicas y definir plazos concretos, facilita una planificación más efectiva.
        br 
        br 
        p Este tipo de planificación promueve la eficiencia, ya que optimiza el uso de recursos como el tiempo, el presupuesto y el personal disponible. A través del seguimiento, se puede controlar el avance de las actividades y evaluar el desempeño en cada etapa del proceso.
        br
        br
        p Además, su carácter flexible permite realizar ajustes y reprogramaciones ante imprevistos o cambios en las condiciones. Una buena comunicación dentro del equipo también fortalece la coordinación y mejora el entendimiento entre sus integrantes, lo que contribuye a una ejecución más fluida del plan.

    .titulo4.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4 Características

    .row.justify-content-center.align-items.mb-5
      .col-lg-8(data-aos="fade-right")
        ul.lista-ul--color.lista-ul--separador.mb-0
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 #[b Documento escrito:] se presenta en formato escrito, ya sea de manera formal o informal, con el fin de facilitar su consulta, comprensión y seguimiento.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 #[b Enfocado en resultados:] está orientado al logro de objetivos concretos, específicos y medibles.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 #[b Con marco temporal:] establece plazos definidos y un cronograma para la ejecución de actividades.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 #[b Flexible y dinámico:] puede ajustarse y actualizarse según las necesidades que surjan durante el desarrollo del proyecto o tarea.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 #[b Diseñado a la medida:] se adapta a las particularidades de cada proyecto, equipo o contexto.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/tema2/6.png', alt='Imagen decorativa')

    .titulo5.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4 Elementos

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-8
        p.mb-4 Los objetivos de un plan de producción deben expresar con claridad qué se quiere lograr y hacia dónde se dirige el proyecto. Para alcanzarlos, es necesario definir actividades concretas que orienten el proceso. Cada actividad debe tener un responsable asignado, ya sea una persona o un equipo de trabajo.
        .bg8.p-4.mb-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2
              img.img-t.img-a.d-none.d-lg-block(src='@/assets/curso/tema2/8.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0 El cronograma es una herramienta clave que permite organizar el tiempo y establecer fechas límite para cada acción. Además, es fundamental identificar los recursos necesarios, como personal, materiales, financiamiento y tecnología, que aseguren la correcta ejecución de las tareas.
        p.mb-lg-0.mb-4 Para medir el avance y el éxito del plan, se deben establecer indicadores claros y medibles. También es recomendable realizar un análisis DAFO, que permite identificar fortalezas y debilidades internas, así como amenazas y oportunidades del entorno. Esto facilita la toma de decisiones estratégicas y la adaptación del plan frente a posibles desafíos.
      .col-lg-4.col-md-7.col-9
        img(src='@/assets/curso/tema2/7.png', alt='Imagen decorativa')
    
    p.mb-5 A continuación, se tiene un ejemplo de DAFO para los procesos de producción agrícola, aspectos muy importantes a tener en cuenta.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-12(alt='La matriz DOFA muestra un análisis del sector agrícola, identificando fortalezas como el conocimiento técnico y debilidades como la falta de recursos. También se destacan oportunidades del entorno, como el apoyo gubernamental, y amenazas como el cambio climático.')
    
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 1. 
          | Matriz DAFO - diagnóstico agrícola
        img(src='@/assets/curso/tema2/9.svg', alt='La matriz DOFA muestra un análisis del sector agrícola, identificando fortalezas como el conocimiento técnico y debilidades como la falta de recursos. También se destacan oportunidades del entorno, como el apoyo gubernamental, y amenazas como el cambio climático.')

    p.mb-4(data-aos="fade-right") La información más relevante descrita anteriormente sobre los elementos de un plan de producción se resume de forma sencilla en la siguiente figura:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(alt='Muestra un plan de producción agrícola con actividades organizadas por responsable, etapa, recursos, fechas, duración y estado de avance.')
    
        .titulo-sexto.color-secundario.mb-4(data-aos="fade-right")
          h5 Figura 2. 
          | Plan de producción agrícola
        img(src='@/assets/curso/tema2/10.svg', alt='Muestra un plan de producción agrícola con actividades organizadas por responsable, etapa, recursos, fechas, duración y estado de avance.')

    .cajon.color-acento-botones.p-4.p-md-4.p-lg-5.mb-0(data-aos="fade-right")
      p.mb-0 Un plan de trabajo bien estructurado es una herramienta clave para una gestión eficiente del plan de producción, ya que ofrece una guía clara, facilita la coordinación y el seguimiento de actividades, y mejora las probabilidades de alcanzar los objetivos propuestos.

</template>

<script>
export default {
  name: 'Tema2',
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
