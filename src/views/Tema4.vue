<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-4
    .titulo-principal.color-acento-contenido(data-aos="zoom-in")
      .titulo-principal__numero
        span 4
      h1 Herramientas de seguimiento

    .bloque-texto-g.custom_01.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t4/1.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.py-5 Las actividades de seguimiento a los proyectos productivos son fundamentales para asegurar el cumplimiento de los planes de trabajo y el desarrollo fluido de los procesos que tienen lugar al interior de la empresa agropecuaria. El seguimiento, por lo tanto, abarca la realización de una serie de acciones que tienen por objeto comprobar la ejecución de todas y cada una de las etapas del proyecto, en los tiempos establecidos y en las condiciones definidas en la planeación estratégica.
    
    p.mb-4(data-aos="zoom-in") El seguimiento al proyecto se lleva a cabo desde el mismo momento en que este se pone en marcha, pues su implementación es necesaria para evaluar, permanentemente, el desarrollo de las actividades y el cumplimiento de las metas a corto y mediano plazo. 
    .tarjeta.color-primario-custom.p-3.mb-4(data-aos="zoom-in")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema/t1/8.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-0 Para que el proceso de seguimiento sea efectivo, es necesario desarrollar un correcto proceso de planeación, pues en él se definen las herramientas para el control de las actividades y se determinan los objetivos que se desean alcanzar.
    p.mb-4(data-aos="zoom-in") La etapa de seguimiento es importante para alcanzar, entre otros elementos, beneficios importantes para el proyecto productivo, la organización y el entorno productivo general. Analice el siguiente esquema e identifique tales favores:
    .h2-custom.mb-4(data-aos="zoom-in") Beneficios del proceso de seguimiento
    p.mb-4(data-aos="zoom-in") El seguimiento al proyecto permite:
    .row(data-aos="zoom-in")
      .col-sm-12.col-md-6.mb-5
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Determinar actividades") Determinar las actividades a implementar para resolver situaciones problemáticas en la ejecución de los procesos productivos.
          p.text-small(numero="2" titulo="Tomar decisiones") Tomar decisiones que permitan aumentar la eficiencia de los procesos de la empresa.
          p.text-small(numero="3" titulo="Reconocer contingencias") Reconocer signos de alarma frente a contingencias que se puedan presentar en la ejecución de las actividades.
          p.text-small(numero="4" titulo="Verificar cumplimientos") Comprobar que las actividades se están desarrollando correctamente.
          p.text-small(numero="5" titulo="Valorar la áreas de la operación") Identificar los aportes de cada una de las áreas de la empresa al logro de los objetivos estratégicos.
      .col-sm-12.col-md-6.mb-5
            figure
              img(src='@/assets/curso/tema/t4/2.png', alt='Texto que describa la imagen')
    p.mb-4(data-aos="zoom-in") Y para lograr hacer un correcto seguimiento del proyecto o de la iniciativa productiva es necesario tener en cuenta las siguientes etapas:
    .tarjeta.p-4.border-radius-20(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t1/17.svg')})`, 'background-repeat': 'no-repeat'}"
      )(data-aos="zoom-in")
      PasosB.color-acento-botones.step-t4

        .row(titulo="1").mt-lg-4
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Medir parámetros
            p.mt-4 El proceso de planeación se inicia con una idea general la cual puede darse para atender una necesidad o bien para resolver un problema a alguna situación.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t4/3.png', alt='Texto que describa la imagen')
        
        .row(titulo="2").mt-lg-4
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Ejemplificación, medición de parámetros
            p.mt-4 Por ejemplo, en una empresa productora de aguacate un indicador podría ser los kilogramos vendidos semanalmente. Si la medida o el indicador se encuentran por debajo de la producción estimada surgiría la necesidad de revisar los procesos internos para saber qué aspectos se deben mejorar y así corregir la situación.
        
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t4/4.png', alt='Texto que describa la imagen')
        
        .row(titulo="3").mt-lg-4
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Análisis de información
            p.mt-4 Es necesario realizar encuentros periódicos entre los líderes de cada área de la empresa, con el fin de revisar la información recopilada y evaluar las causas directa o indirectas de las situaciones que se presenten.

          .col-md-6
            figure
              img(src='@/assets/curso/tema/t4/5.png', alt='Texto que describa la imagen')
        

        .row(titulo="4").mt-lg-4
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Ejemplificación del análisis
            p.mt-4 Continuando con el caso de ejemplo de la empresa productora de aguacate, en el análisis de información es necesario identificar cuáles pueden ser las circunstancias que inciden en la baja productividad semanal, para, de esta forma, actuar en consecuencia y tomar las medidas correspondientes.

          .col-md-6
            figure
              img(src='@/assets/curso/tema/t4/6.png', alt='Texto que describa la imagen')
        
        .row(titulo="5").mt-lg-4
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Generación de alternativas
            p.mt-4 El análisis de información, obligatoriamente, debe conducir a la búsqueda de alternativas de solución a las problemáticas identificadas al interior de la unidad productiva. Por medio del diálogo y el intercambio de experiencias es posible construir una hoja de ruta que permita la adopción de medidas definitivas a las situaciones que inciden en la productividad y que afectan el comportamiento de los indicadores definidos para el seguimiento al proyecto productivo.
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t4/7.png', alt='Texto que describa la imagen')

        .row(titulo="6").mt-lg-4
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Medición de parámetros, posterior a la implementación de alternativas
            p.mt-4 Una nueva revisión de los indicadores definidos para el seguimiento al proyecto, dará una idea general de los impactos que ha tenido la implementación de las alternativas de solución e, igualmente, permitirá identificar nuevas situaciones por corregir, por lo que las actividades de seguimiento se convierten en un proceso cíclico que busca, finalmente, que el proyecto o la actividad productiva se lleve a cabo de la mejor manera. 
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t4/8.png', alt='Texto que describa la imagen')
    Separador
    .titulo-segundo(data-aos="zoom-in")
          h2#t_4_1 4.1 Tableros de control
    p.mb-5(data-aos="zoom-in") Los tableros de control son herramientas de seguimiento que permiten conocer el estado de avance en el logro de los objetivos estratégicos de la empresa, a través de la medición de ciertos parámetros previamente establecidos, como indicadores, metas, planes o estrategias.
    .row-.mb-5(data-aos="zoom-in")
      .col-12
            figure
              img(src='@/assets/curso/tema/t4/9.png', alt='Texto que describa la imagen')
    .row.mb-5(data-aos="zoom-in")
      .col-12
        .cajon.color-acento-contenido-custom.p-4
          p.mb-0 En el tablero de control, mediante la observación y el desarrollo de cálculos simples, es posible determinar el grado de avance o retroceso en el logro de los objetivos y el cumplimiento de las metas establecidas en el plan de trabajo.
    p.mb-5.text-center(data-aos="zoom-in") Sobre los tableros de control, tenga en cuenta estos aspectos clave:
    .row.mb-5(data-aos="zoom-in")
        .col-sm-12.col-md-4.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar.color-acento-contenido
            img.img-width-custom-04(src='@/assets/curso/tema/t4/10.png' alt='AvatarTop')
            .tarjeta.color-acento-botones-custom-02 
              .p-4
                h2.text-center Visualización clara
                p.text-center Para que los tableros de control sean realmente efectivos es necesario que la información que se presente allí sea clara, desde lo visual, y que permita un fácil análisis e interpretación.
        .col-sm-12.col-md-4.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar.color-acento-contenido
            img.img-width-custom-04(src='@/assets/curso/tema/t4/11.png' alt='AvatarTop')
            .tarjeta.color-acento-botones-custom-02
              .p-4
                h2.text-center Actualización oportuna
                p.text-center Otro de los atributos que debe tener esta herramienta, es la posibilidad de actualizarse constantemente con diversas fuentes de información y en diferentes momentos.
        .col-sm-12.col-md-4.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar.color-acento-contenido
            img.img-width-custom-04(src='@/assets/curso/tema/t4/12.png' alt='AvatarTop')
            .tarjeta.color-acento-botones-custom-02
              .p-4
                h2.text-center Consulta fácil
                p.text-center Un tablero de control correctamente actualizado y con una estructura y visualización claras, será más fácil consultarla y tomar decisiones con un alto principio de realidad.
    p.mb-5.text-center(data-aos="zoom-in")   En términos generales, existen tres tipos de tableros de control:
    .row.bg1.mb-5.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-md.col-lg-3.tarjeta--tabla-custom-02.p-4.mx-3.mb-sm-5-custom
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema/t4/13.png' alt='AvatarTop')
        h4.text-center.mt-4 Estratégicos
        p.text-center Agrupan la información por perspectivas, objetivos, iniciativas e indicadores, para que puedan ser consultados por la alta dirección. Presentan un panorama general de la empresa o del proyecto productivo, así como de sus áreas de funcionamiento y permiten tomar decisiones de fondo, frente a implementación de estrategias.
      .col-md.col-lg-3.tarjeta--tabla-custom-02.p-4.mx-3.mb-sm-5-custom
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema/t4/14.png' alt='AvatarTop')
        h4.text-center.mt-4 Operativos
        p.text-center Se enfocan en procesos de la unidad productiva o proyecto. Definen acciones para mejorar el funcionamiento de áreas específicas. Se desarrollan por parte de los jefes de área, quienes finalmente reportan a sus superiores las novedades registradas.
      .col-md.col-lg-3.tarjeta--tabla-custom-02.p-4.mx-3.mb-sm-5-custom
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema/t4/15.png' alt='AvatarTop')
        h4.text-center.mt-4 Directivos
        p.text-center Contienen información sobre el funcionamiento general de cada una de las áreas de la empresa y se alimentan de la información entregada por los líderes de los equipos operativos.
    p.mb-5(data-aos="zoom-in")  Para la elaboración de los tableros de control existen muchas herramientas tecnológicas disponibles, pero sin duda una de las más empleadas el Microsoft Excel, ya que es altamente versátil y fácil de manejar e, igualmente, tiene aplicación en cualquier sector de la economía.     
    .row(data-aos="zoom-in")
      .col-12
        .cajon.color-acento-contenido-custom.p-4
          p.mb-0 Además de Excel, existen programas de cómputo capaces de generar tableros de control y proporcionar estadísticas que permitan analizar grandes volúmenes de información, relacionada con el manejo de la empresa y el grado de cumplimiento de los objetivos estratégicos, la medición de los indicadores y el cumplimiento de las metas establecidas.
    
    Separador
    .titulo-segundo(data-aos="zoom-in")
          h2#t_4_2 4.2 Cronogramas de trabajo
    .bloque-texto-g.custom_01.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t4/16.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.py-5 Se constituyen en una forma de evaluar el cumplimiento de determinada actividad en un tiempo estimado, durante la fase de planeación del proyecto. Una de las grandes ventajas del uso de este tipo de herramientas es la facilidad en las actividades de seguimiento ya que permiten visualizar, por un lado, el grado de cumplimiento de las actividades y, por el otro, los tiempos definidos en la planeación para, de esta forma, establecer las diferencias entre lo planeado y lo ejecutado y, así, obtener un estimado del grado de avance.
    p.mb-5(data-aos="zoom-in") A su vez, como desventaja, está que este tipo de controles se basan únicamente en una revisión aritmética de lo ejecutado sobre lo planeado, por lo que tienden a limitar otras variables que intervienen en el proceso productivo y que, de alguna u otra forma, afectan el cumplimiento de las metas.
    .row.mb-5(data-aos="zoom-in")
      .col-12
        .cajon.color-acento-contenido-custom.p-4
          p.mb-0 Excel, como lo hace con otras herramientas de seguimiento, permite elaborar cronogramas diversos y actualizables para una visualización completa del grado de avance del proyecto.
    .tarjeta.color-primario-custom.p-3.mb-4(data-aos="zoom-in")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema/t1/8.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-0 Dependiendo de la complejidad de los contenidos y de las variables que se desee analizar, existen otros programas que también pueden ser empleados y que facilitarán mucho el trabajo, como con Microsoft Proyect o Primavera.


</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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
