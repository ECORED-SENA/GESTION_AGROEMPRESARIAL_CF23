<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in")
      .titulo-principal__numero
        span 2
      h1 Estimación de recursos

    .bloque-texto-g.custom_01.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.py-5 Parte del ejercicio de planeación de los proyectos productivos es la estimación de los recursos necesarios para el desarrollo de las actividades del plan de acción, las cuales a través de su desarrollo secuencial permitirán el logro de los objetivos propuestos.
    
    .row.mb-3(data-aos="zoom-in")
      .col-12
        .cajon.color-acento-contenido-custom.p-4
          p.mb-0 La definición de los recursos es el resultado de un proceso que inicia con la formulación de un objetivo el cual debe estar acorde con la planeación estratégica de la empresa agropecuaria. 
    p.mb-5(data-aos="zoom-in") Las etapas del proceso de estimación de los recursos, son:
    .row(data-aos="zoom-in")
      .col-sm-12.col-md-6.mb-5
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Definición del objetivo")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t2/2.png', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p Se establece un objetivo claro, medible, cuantificable y acorde con la planeación estratégica de la empresa agropecuaria. Cada una de las acciones que se definan a partir de este objetivo deben estar orientadas al logro del propósito de la empresa y al cumplimiento de las metas establecidas.
          .row(numero="2" titulo="Establecimiento de metas")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t2/3.png', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p Una vez se tiene claridad sobre los objetivos se estiman las metas que se deben alcanzar. Estas deben dar claridad sobre lo que se quiere conseguir en términos cuantitativos. Estas se determinan en el corto plazo y se establecen sobre puntos concretos o específicos.
          .row(numero="3" titulo="Definición de actividades")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t2/5.png', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p Cuando se tiene claridad sobre los objetivos y las metas es posible enumerar las actividades que tendrán lugar dentro de la empresa o la organización para lograr lo que se ha propuesto. Las actividades deben ser concretas, específicas y dar cuenta de lo que se va a hacer, cómo y en dónde.
          .row(numero="4" titulo="Definición de recursos")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t2/4.png', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p Al establecer las actividades a desarrollar es mucho más fácil saber cuáles son los recursos que se deben tener en cuenta para llevar a cabo determinado proceso. Para este momento, es importante saber qué tipo de recurso es necesario y qué actividades se deben tener en cuenta para gestionarlo.
      .col-sm-12.col-md-6.mb-5
            figure
              img(src='@/assets/curso/tema/t2/6.png', alt='Texto que describa la imagen')     

    p.mb-5(data-aos="zoom-in") En términos generales, los tipos de recursos que se pueden emplear en una unidad productiva agropecuaria, son:
    .row.bg1
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
        .tarjeta.color-acento-contenido-custom.p-4
          .row.justify-content-center.mb-3
            .col-sm-10.col-lg-12
              img(src='@/assets/curso/tema/t2/7.png' alt='AvatarTop')
          h4.text-center Humanos
          p.text-center Hace referencia al personal y al talento humano necesario para llevar a cabo las actividades propias de la empresa agropecuaria.

        .tarjeta.color-acento-contenido-custom.p-4
          .row.justify-content-center.mb-3
            .col-sm-10.col-lg-12
              img(src='@/assets/curso/tema/t2/8.png' alt='AvatarTop')
          h4.text-center Financieros
          p.text-center Son los elementos económicos o financieros que se requieren para el funcionamiento de la organización, independientemente de su origen.
        .tarjeta.color-acento-contenido-custom.p-4
          .row.justify-content-center.mb-3
            .col-sm-10.col-lg-12
              img(src='@/assets/curso/tema/t2/9.png' alt='AvatarTop')
          h4.text-center Materiales
          p.text-center Hace referencia a los bienes o insumos que se requieren para el desarrollo de las actividades de la empresa.
        .tarjeta.color-acento-contenido-custom.p-4
          .row.justify-content-center.mb-3
            .col-sm-10.col-lg-12
              img(src='@/assets/curso/tema/t2/10.png' alt='AvatarTop')
          h4.text-center Tecnológicos
          p.text-center Abarca los equipos, herramientas especializadas, herramientas tecnológicas o equipos de comunicación que se requieren para el funcionamiento de la empresa.
        .tarjeta.color-acento-contenido-custom.p-4
          .row.justify-content-center.mb-3
            .col-sm-10.col-lg-12
              img(src='@/assets/curso/tema/t2/11.png' alt='AvatarTop')
          h4.text-center Particulares
          p.text-center Son aquellos ofrecidos por personas o empresas de manera casi especial a la organización, como la imagen de marca, la experiencia o la sinergia, entre otros.
    p.mb-5(data-aos="zoom-in") Identifique y analice, en la tabla que se muestra a continuación, los pasos para la estimación de los recursos de una empresa u organización:
    .row.mb-1(data-aos="zoom-in")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Proceso de estimación de recursos
    
        .tabla-b.color-primario.mb-5 
          table
            thead
              tr
                th.tabla-b__header.border-right-table_b Objetivo
                th.tabla-b__header.border-right-table_b Meta
                th.tabla-b__header.border-right-table_b Actividades
                th.tabla-b__header Recursos
            tbody
              tr
                td.border-right-table_b.border-bottom-table_b.text-center(rowspan='5') Mejorar la productividad del cultivo de café mediante el fortalecimiento técnico y productivo.
                td.border-right-table_b.border-bottom-table_b.text-center(rowspan='5') Aumentar en 20 % la productividad por hectárea en el cultivo de café.
              tr
                td.border-right-table_b.border-bottom-table_b.text-center Implementar planes de fertilización.
                td.text-center.border-bottom-table_b Fertilizantes, operarios, herramientas, transporte interno, asistencia técnica..
              tr
                td.border-right-table_b.border-bottom-table_b.text-center  Manejar plagas y enfermedades.
                td.text-center.border-bottom-table_b Asistencia técnica, herramientas, equipos, fungicidas, insecticidas, herbicidas, operarios.
              tr
                td.border-right-table_b.border-bottom-table_b.text-center Mejorar proceso de cosecha de granos.
                td.text-center.border-bottom-table_b Operarios, asistencia técnica, equipos de recolección, herramientas, transporte interno.
              tr
                td.border-right-table_b.border-bottom-table_b.text-center Mejorar procesos de beneficio.
                td.text-center.border-bottom-table_b Materiales para adecuación de infraestructura, maquinaria, equipos, operarios.
    .row.mb-3(data-aos="zoom-in")
      .col-12
        .cajon.color-acento-contenido-custom.p-4
          p.mb-0 Una vez se tiene claridad sobre los recursos que se requieren para el cumplimiento de la meta y el desarrollo de las actividades es necesario desglosar aún más la información y llegar al máximo nivel de detalle.
    .bg2.mt-5
      p.mb-5(data-aos="zoom-in") En relación con el ejemplo de la tabla anterior, tenga presentes las siguientes conclusiones:
      .row.mb-5.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
        .col-sm-12.col-lg-9
          .row.border-bottom-custom.my-3.d-flex.justify-content-center.align-items-center
            .col-sm-12.col-md-2.mb-3
              img.img-width-custom-06(src='@/assets/curso/tema/t2/12.png' alt='AvatarTop')
            .col-sm-10.col-md-10.mb-3
              p.mb-0 En el caso de los fertilizantes, por ejemplo, se debe especificar qué tipo de fertilizante se requiere, qué presentación, qué cantidades y qué costo tendrá su adquisición.
          
          .row.border-bottom-custom.my-3.d-flex.justify-content-center.align-items-center
            .col-sm-10.col-md-2.mb-3
              img.img-width-custom-06(src='@/assets/curso/tema/t2/13.png' alt='AvatarTop')
            .col-sm-10.col-md-10.mb-3
              p Se necesita, entre otras cosas, lo siguiente:
              p.mb-0 • Amplio conocimiento técnico del sistema productivo y de sus particularidades. 
              p.mb-0 • Conocimiento de la oferta de productos y servicios relacionados con el sistema productivo. 
              p.mb-0 • Las condiciones ambientales, de acceso, técnicas y productivas de la explotación agropecuaria.
          .row.my-3.d-flex.justify-content-center.align-items-center
            .col-sm-12.col-md-2.mb-3
              img.img-width-custom-06(src='@/assets/curso/tema/t2/14.png' alt='AvatarTop')
            .col-sm-12.col-md-10.mb-3
              p.mb-0 La obtención de información detallada sobre las adquisiciones hará que la estimación de recursos sea mucho más precisa.
      p.mb-5(data-aos="zoom-in") Una de las maneras para ordenar la información relacionada con los recursos necesarios para el funcionamiento de la empresa agropecuaria, es la construcción de un plan de adquisiciones, el cual puede tener, básicamente, el modelo que propone la siguiente tabla:
      .row(data-aos="zoom-in")
        .col-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 2.
            span Ejemplo de plan de adquisiciones para la unidad productiva
      
          .tabla-b.color-primario.mb-5 
            table
              thead
                tr
                  th.tabla-b__header.border-right-table_b Actividad
                  th.tabla-b__header.border-right-table_b Tipo de recurso
                  th.tabla-b__header.border-right-table_b Descripción
                  th.tabla-b__header.border-right-table_b Unidad
                  th.tabla-b__header.border-right-table_b Cantidad
                  th.tabla-b__header.border-right-table_b Costo unitario
                  th.tabla-b__header Costo total
              tbody
                tr
                  td.border-right-table_b.border-bottom-table_b.text-center.bg-table-gray(rowspan='6') Implementar planes de fertilización
                tr.bg-table-odd
                  td.border-right-table_b.border-bottom-table_b.text-center Humano
                  td.border-right-table_b.border-bottom-table_b.text-center Jornales para fertilización
                  td.border-right-table_b.border-bottom-table_b.text-center Jornal
                  td.border-right-table_b.border-bottom-table_b.text-center 12
                  td.border-right-table_b.border-bottom-table_b.text-center 40.000                
                  td.text-center.border-bottom-table_b 480.000

                tr.bg-table-even
                  td.border-right-table_b.border-bottom-table_b.text-center Material
                  td.border-right-table_b.border-bottom-table_b.text-center Fertilizante 10-20-20
                  td.border-right-table_b.border-bottom-table_b.text-center Bulto
                  td.border-right-table_b.border-bottom-table_b.text-center 18
                  td.border-right-table_b.border-bottom-table_b.text-center 220.000               
                  td.text-center.border-bottom-table_b 3.960.000
                
                tr.bg-table-odd
                  td.border-right-table_b.border-bottom-table_b.text-center Material
                  td.border-right-table_b.border-bottom-table_b.text-center Azadón
                  td.border-right-table_b.border-bottom-table_b.text-center Unidad
                  td.border-right-table_b.border-bottom-table_b.text-center 2
                  td.border-right-table_b.border-bottom-table_b.text-center 15.000               
                  td.text-center.border-bottom-table_b 30.000

                tr.bg-table-even
                  td.border-right-table_b.border-bottom-table_b.text-center Particular 
                  td.border-right-table_b.border-bottom-table_b.text-center Asistencia técnica especializada
                  td.border-right-table_b.border-bottom-table_b.text-center Asesoría
                  td.border-right-table_b.border-bottom-table_b.text-center 1
                  td.border-right-table_b.border-bottom-table_b.text-center 300.000               
                  td.text-center.border-bottom-table_b 300.000

                tr.bg-table-odd
                  td.border-right-table_b.border-bottom-table_b.text-center Material
                  td.border-right-table_b.border-bottom-table_b.text-center Transporte de abono
                  td.border-right-table_b.border-bottom-table_b.text-center Viaje
                  td.border-right-table_b.border-bottom-table_b.text-center 2
                  td.border-right-table_b.border-bottom-table_b.text-center 120.000             
                  td.text-center.border-bottom-table_b 240.000
      .row(data-aos="zoom-in")
        .col-sm-12.col-lg-6
          p A través de la consolidación de la información relacionada con los recursos que se requieren para el funcionamiento de la unidad productiva es posible:
          ul.lista-ul
            li 
              i.fas.fa-angle-right.color-acento-contenido-vineta
              | Estimar la demanda de materiales, las necesidades de financiación y los elementos que se deben tener en cuenta para que el proyecto sea exitoso. 
            li 
              i.fas.fa-angle-right.color-acento-contenido-vineta
              | Igualmente, como parte del proceso de gestión de recursos, es necesario que el administrador identifique los recursos disponibles al interior de la unidad productiva.
            li 
              i.fas.fa-angle-right.color-acento-contenido-vineta
              | De esta forma, se podrán determinar los recursos con los que se cuenta y gestionar los elementos que se requieren para el cumplimiento de las metas. 
            li 
              i.fas.fa-angle-right.color-acento-contenido-vineta
              | En todo caso, los procesos relacionados con la adquisición de bienes y servicios siempre deben responder a los objetivos estratégicos de la organización y deben aportar al cumplimiento de una meta específica, pues esta es una forma de garantizar su uso eficiente y contribuir a la sostenibilidad del ejercicio productivo.

        .col-sm-12.col-lg-6
            img(src='@/assets/curso/tema/t2/15.png' alt='AvatarTop')

</template>

<script>
export default {
  name: 'Tema2',
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
