<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in")
      .titulo-principal__numero
        span 1
      h1 Planeación de actividades

    .bloque-texto-g.custom_01.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t1/1.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.py-5 Toda actividad, por compleja o simple que sea, requiere de un mínimo de planeación pues, difícilmente, alguna acción se lleva a cabo sin tener en cuenta algunas consideraciones previas y sin analizar las consecuencias que pueda llegar a tener en el corto, mediano o largo plazo. 
     
    p.mb-5(data-aos="zoom-in") La planeación puede entenderse como un proceso en el cual se analizan los elementos necesarios, los recursos y las alternativas disponibles para conseguir determinado objetivo.

    .row(data-aos="zoom-in")
      .col-12.mb-5
        .cajon.color-acento-contenido.p-4
          p.mb-0 La planeación también implica el acopio de información que facilite la toma de decisiones y el análisis de los efectos, inmediatos o futuros, que estas puedan tener.
    .row(data-aos="zoom-in")
      .col-12.mb-5.d-flex.justify-content-center.align-items-center
          p En términos generales, un proceso de planeación conlleva los siguientes pasos: 
    .tarjeta.tarjeta--gris.p-4.mb-5(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t1/17.svg')})`}"
      )(data-aos="zoom-in")
      PasosB.color-acento-botones

        .row(titulo="1").mt-lg-4
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Generar la idea
            p.mt-4 El proceso de planeación se inicia con una idea general la cual puede darse para atender una necesidad o bien para resolver un problema a alguna situación.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t1/9.png', alt='Texto que describa la imagen')
        
        .row(titulo="2").mt-lg-4
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Analizar la información
            p.mt-4 Consiste en la observación detallada de las alternativas de solución y en los recursos con los que se cuenta para echar a andar la idea. Igualmente se deben considerar las condiciones del entorno, de la población y las características socioeconómicas de la comunidad.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t1/10.png', alt='Texto que describa la imagen')
        
        .row(titulo="3").mt-lg-4
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Definir objetivos
            p.mt-4 Una vez se tiene claridad sobre la forma como se abordará la problemática y se ha recopilado la mayor cantidad de información es posible establecer los objetivos y fijar las metas.

          .col-md-6
            figure
              img(src='@/assets/curso/tema/t1/11.png', alt='Texto que describa la imagen')
        

        .row(titulo="4").mt-lg-4
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Fijar metas
            p.mt-4 Tanto los objetivos como las metas, darán la línea sobre las actividades a desarrollar y las estrategias que se emplearán.

          .col-md-6
            figure
              img(src='@/assets/curso/tema/t1/12.png', alt='Texto que describa la imagen')
        
        .row(titulo="5").mt-lg-4
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Plan de acción
            p.mt-4 Contiene las actividades que se deben realizar de manera secuencial para alcanzar los objetivos y permite identificar los recursos necesarios para ejecutarlo.
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t1/13.png', alt='Texto que describa la imagen')

        .row(titulo="6").mt-lg-4
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Asignar recursos
            p.mt-4 Las decisiones que se toman en cuanto a los recursos pueden llegar a ejercer una influencia capital en el devenir del <b>proyecto</b>.
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t1/14.png', alt='Texto que describa la imagen')


        .row(titulo="7").mt-lg-4
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Ejecutar plan
            p.mt-4 Desarrollo efectivo de las actividades, procedimientos, operaciones y procesos propios del proyecto o de la dinámica de producción.
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t1/15.png', alt='Texto que describa la imagen')

        .row(titulo="8").mt-lg-4
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Comprobar
            p.mt-4 Etapa donde se revisa si efectivamente las actividades se llevaron a cabo conforme a la planeación.

          .col-md-6
            figure
              img(src='@/assets/curso/tema/t1/16.png', alt='Texto que describa la imagen')



    p.mb-5(data-aos="zoom-in") La planeación es un proceso riguroso que requiere del análisis de todos los elementos presentes en el entorno de la empresa agropecuaria y que tiene características como:
    .row(data-aos="zoom-in")
      .col-sm-12.col-md-6.mb-5
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Beneficio") Es una herramienta muy útil en la toma de decisiones, pues permite analizar diferentes escenarios y los efectos de las alternativas planteadas.
          p.text-small(numero="2" titulo="Finalidad") Su fin principal es el logro de los objetivos estratégicos de la empresa agropecuaria.
          p.text-small(numero="3" titulo="Articuladora") La planificación armoniza los objetivos de la empresa con los recursos disponibles y con sus necesidades.
          p.text-small(numero="4" titulo="Secuencialidad") Establece las actividades que se deben llevar a cabo en el presente para alcanzar las metas planteadas a futuro.
          p.text-small(numero="5" titulo="Empeño") Es un proceso que requiere tiempo, dedicación y análisis.
      .col-sm-12.col-md-6.mb-5
            figure
              img(src='@/assets/curso/tema/t1/2.png', alt='Texto que describa la imagen')
    .row(data-aos="zoom-in")
      .col-12.mb-5.d-flex.justify-content-center.align-items-center
          p De igual manera, la planeación puede clasificarse en tres tipos principales, que son:
    .row.bg1.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-md.col-lg-3.tarjeta--tabla-custom.p-4.mx-3.mb-sm-5-custom
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema/t1/3.png' alt='AvatarTop')
        h4.text-center Planeación estratégica
        p.text-center Define el plan general de la organización y establece los objetivos a mediano y largo plazo.
      .col-md.col-lg-3.tarjeta--tabla-custom.p-4.mx-3.mb-sm-5-custom
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema/t1/4.png' alt='AvatarTop')
        h4.text-center Planeación táctica
        p.text-center Desarrolla los planes específicos para cada área de la empresa agropecuaria.
      .col-md.col-lg-3.tarjeta--tabla-custom.p-4.mx-3.mb-sm-5-custom
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema/t1/5.png' alt='AvatarTop')
        h4.text-center Planeación operativa
        p.text-center Comprende las actividades de menor nivel dentro de la empresa, generalmente obedecen a la planeación táctica.
      
    Separador

    .titulo-segundo(data-aos="zoom-in")
      h2#t_1_1 1.1 Herramientas
    p.mb-4(data-aos="zoom-in") Las herramientas de planeación son aquellas que facilitan la toma de decisiones al interior de la empresa agropecuaria, tomando como referencia bases científicas, estadísticas, lógicas o racionales.
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t1/6.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.mb-3 A través de la aplicación de las herramientas de planificación se definen las actividades necesarias para el desarrollo de las estrategias que, finalmente, llevarán al logro de los objetivos propuestos, bien sea en una empresa, un emprendimiento o un proyecto.  
    p.mb-5(data-aos="zoom-in") En el video que se muestra enseguida, amplíe su conocimiento de las herramientas más empleadas en los procesos de planeación; recuerde llevar registro, de lo más destacado, en su libreta personal de apuntes: 
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    .titulo-segundo(data-aos="zoom-in")
      h2#t_1_2 1.2 Metodologías y técnicas de planeación   
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t1/7.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.mb-3 Para el correcto empleo de las herramientas de planificación es necesario definir las metodologías acordes con cada una de ellas, de manera que se saque el mejor provecho y se obtengan los mejores resultados para la empresa o la organización.
    .row.mb-3(data-aos="zoom-in")
      .col-12.d-flex.justify-content-center.align-items-center
          p Dentro de las principales metodologías que se emplean en los procesos de planificación están las siguientes:
    div.p-5-custom.border-radius-20(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t1/24.svg')})`, 'background-repeat': 'no-repeat'}"
      )(data-aos="zoom-in")
      SlyderB.mb-5(:datos="datosSlyder")
    p.mb-5(data-aos="zoom-in") Para los procesos de seguimiento a los proyectos productivos es muy importante conocer la planeación que se tuvo en cuenta para su desarrollo, ya que esta se convertirá en referente para evaluar el cumplimiento de las metas y los objetivos planteados.
    .tarjeta.color-primario-custom.p-3.mb-5(data-aos="zoom-in")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema/t1/8.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-0 En cualquier actividad de seguimiento es necesario contrastar la información del plan de acción contra lo ejecutado; teniendo en cuenta, en todo momento, los soportes que acrediten que efectivamente se llevó a cabo todo lo reportado. 


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    indicadorImagenZoom: true,
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    datosSlyder: [
      {
        titulo: 'Metodologías cuantitativas',
        texto:
          'Se centran en el estudio de cifras, datos y estadísticas por medio de los cuales es posible estimar tendencias y definir alternativas de solución a determinadas situaciones. A partir de estas alternativas se proponen las actividades que harán parte del plan de acción en el cual se plasmará finalmente todo el proceso de planificación.',
        imagen: require('@/assets/curso/tema/t1/18.png'),
      },
      {
        titulo: 'Uso de las metodologías cuantitativas',
        texto:
          'Estas metodologías son altamente empleadas en empresas de todo tipo y, por lo general, se recurre al uso de tecnologías de la información para la toma de decisiones.<br>En este sentido, las técnicas más empleadas son los diagnósticos organizacionales, las auditorías internas y los análisis financieros. ',
        imagen: require('@/assets/curso/tema/t1/19.png'),
      },
      {
        titulo: 'Metodologías cualitativas',
        texto:
          'Se basan en la investigación de las características y particularidades de la empresa o la organización y cómo ésta se asume desde sus integrantes.<br>A diferencia de la metodología cuantitativa, en la metodología cualitativa se recurre a información descriptiva relacionada con el funcionamiento de cada uno de los componentes de la organización.',
        imagen: require('@/assets/curso/tema/t1/20.png'),
      },
      {
        titulo: 'Uso de las metodologías cualitativas',
        texto:
          'Con base en esta información es posible que el equipo administrativo genere alternativas de solución que permitan aumentar la eficiencia y sostenibilidad de los procesos que se llevan a cabo en la unidad productiva.<br>Respecto a las metodologías cuantitativas las técnicas más empleadas para la captura de información son las entrevistas, lluvias de ideas, grupos focales y estudios de caso.',
        imagen: require('@/assets/curso/tema/t1/21.png'),
      },
      {
        titulo: 'Metodologías de ingeniería económica',
        texto:
          'Esta es una de las metodologías más sofisticadas para los procesos de planificación pues involucra el análisis, a profundidad, de los indicadores financieros de la empresa a través de herramientas como el Valor Presente Neto (VPN), el punto de equilibrio (PE), la tasa interna de retorno, análisis de recuperación.',
        imagen: require('@/assets/curso/tema/t1/22.png'),
      },
      {
        titulo: 'Sobre el uso de la ingeniería económica',
        texto:
          'Como resultado del estudio de los indicadores económicos de la empresa agropecuaria, es posible definir planes de acción encaminados a resolver las situaciones identificadas y a la atención de problemáticas que afecten la productividad y la rentabilidad.<br>Las técnicas para recopilar la información que alimenta este tipo de análisis son de tipo informático y se basan en los análisis de parámetros económicos y financieros definidos previamente.',
        imagen: require('@/assets/curso/tema/t1/23.png'),
      },
    ],
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
