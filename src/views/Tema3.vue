<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in")
      .titulo-principal__numero
        span 3
      h1 Indicadores
    .bloque-texto-g.custom_01.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema/t3/1.png')})`}"
        )
        .bloque-texto-g__texto.py-5.px-4
          p.py-5 De acuerdo con el Departamento Nacional de Planeación, un indicador es una expresión cuantitativa, observable y verificable que permite describir características, comportamientos o fenómenos de la realidad. Esto se logra a través de la medición de una variable o la relación entre variables. A través de los indicadores es posible llevar a cabo un proceso de seguimiento a un proyecto, una empresa o cualquier organización.
    p.mb-5(data-aos="zoom-in") En relación con los indicadores, tenga en cuenta estos aspectos clave:
    .bg3
      .row.mb-5.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
        .col-11.col-lg-3.tarjeta--tabla-custom-02.p-4.mx-3.mb-sm-5-custom
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/tema/t3/2.png' alt='AvatarTop')
          h4.text-center.mt-4 Facilidades que aportan
          p.text-center Los indicadores facilitan la toma de decisiones, pues permiten analizar información detallada del funcionamiento de determinado sector de la empresa de una forma precisa y concreta.
        .col-11.col-lg-3.tarjeta--tabla-custom-02.p-4.mx-3.mb-sm-5-custom
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/tema/t3/3.png' alt='AvatarTop')
          h4.text-center.mt-4 Favorecen la evaluación del desempeño
          p.text-center Un indicador se constituye en una variable que, comparada con períodos anteriores, productos similares o una meta o compromiso, permite evaluar el desempeño y su evolución en el tiempo (DANE – 2009).
        .col-11.col-lg-3.tarjeta--tabla-custom-02.p-4.mx-3.mb-sm-5-custom
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/tema/t3/4.png' alt='AvatarTop')
          h4.text-center.mt-4 Aportan al seguimiento del proyecto
          p.text-center De allí que, para los procesos de seguimiento a proyectos productivos, los indicadores sean una herramienta fundamental que permite observar progresos o avances en la atención de determinada situación o en la solución de una problemática específica.
        
      
      p.mb-5(data-aos="zoom-in") De acuerdo con lo anterior, los indicadores tienen las siguientes utilidades:
      .row(data-aos="zoom-in")
        .col-lg-5.col-sm-12
          img.h-img-custom-85(src='@/assets/curso/tema/t3/5.png' alt='AvatarTop')

        .col-lg-7.col-sm-12
          .row.mb-5.d-flex.justify-content-center.align-items-center
            .col-11
              .row.border-bottom-custom-02.my-3.d-flex.justify-content-center.align-items-center
                .col-sm-6.col-lg-2.mb-3
                  img.img-width-custom-07(src='@/assets/curso/tema/t3/32.svg' alt='AvatarTop')
                .col-10.mb-3
                  p.mb-0 Generan información útil y mejoran procesos de toma de decisiones.
              
              .row.border-bottom-custom-02.my-3.d-flex.justify-content-center.align-items-center
                .col-sm-6.col-lg-2.mb-3
                  img.img-width-custom-07(src='@/assets/curso/tema/t3/33.svg' alt='AvatarTop')
                .col-10.mb-3
                  p.mb-0 Permiten evaluar el cumplimiento de acuerdos y compromisos.
              .row.border-bottom-custom-02.my-3.d-flex.justify-content-center.align-items-center
                .col-sm-6.col-lg-2.mb-3
                  img.img-width-custom-07(src='@/assets/curso/tema/t3/34.svg' alt='AvatarTop')
                .col-10.mb-3
                  p.mb-0 Facilitan evaluar cambios en una situación definida, como un problema inicial.
              .row.border-bottom-custom-02.my-3.d-flex.justify-content-center.align-items-center
                .col-sm-6.col-lg-2.mb-3
                  img.img-width-custom-07(src='@/assets/curso/tema/t3/35.svg' alt='AvatarTop')
                .col-10.mb-3
                  p.mb-0 Permite hacer seguimiento a objetivos, planes, programas y proyectos.
              .row.my-3.d-flex.justify-content-center.align-items-center
                .col-sm-6.col-lg-2.mb-3
                  img.img-width-custom-07(src='@/assets/curso/tema/t3/36.svg' alt='AvatarTop')
                .col-10.mb-3
                  p.mb-0 Facilita la identificación de los impactos de la implementación de determinada acción.
      .row.mb-5(data-aos="zoom-in")
        .col-sm-12.col-lg-6
          p En términos generales, un indicador debe contener como mínimo los siguientes componentes:
          ul.lista-ul
            li 
              i.fas.fa-angle-right.color-acento-contenido-vineta
              | <span><b> Nombre:</b>&nbsp;debe definir el objetivo de su implementación.</span>
            li 
              i.fas.fa-angle-right.color-acento-contenido-vineta
              | <span><b> Código:</b>&nbsp;se asigna para diferenciarlo de los demás indicadores del proyecto.</span>
            li 
              i.fas.fa-angle-right.color-acento-contenido-vineta
              | <span><b> Objetivo:</b>&nbsp;define por qué se calcula este indicador.</span>
            li 
              i.fas.fa-angle-right.color-acento-contenido-vineta
              | <span><b> Alcance:</b>&nbsp;define los parámetros o áreas de estudio sujetos al cálculo del indicador.</span> 
            li 
              i.fas.fa-angle-right.color-acento-contenido-vineta
              | <span><b> Responsables:</b>&nbsp;define quién es el responsable del cálculo del indicador. </span>
            li 
              i.fas.fa-angle-right.color-acento-contenido-vineta
              | <span><b> Forma de cálculo:</b>&nbsp;ecuación empleada para conocer el valor del indicador. </span>
            li 
              i.fas.fa-angle-right.color-acento-contenido-vineta
              | <span><b>Unidad de medida:</b>&nbsp;identificar cuál es la unidad de medida del indicador - kg, hectáreas, porcentaje, etc. </span>
            li 
              i.fas.fa-angle-right.color-acento-contenido-vineta
              | <span><b> Meta:</b>&nbsp;define la meta prevista para el desarrollo del proyecto.</span>
        .col-sm-12.col-lg-6
            img(src='@/assets/curso/tema/t3/6.png' alt='AvatarTop')
      .tarjeta.color-acento-botones-custom.p-3.mb-5(data-aos="zoom-in")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema/t3/7.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 La construcción de los indicadores es un proceso que requiere tiempo, dedicación y concentración, pues de su correcta formulación depende, en gran medida, que se facilite el proceso de seguimiento al comportamiento de la unidad productiva.
      .tarjeta.color-primario-custom.p-3.mb-5(data-aos="zoom-in")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema/t1/8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Los componentes del indicador son claves para su formulación y hacen parte de lo que se conoce como la “hoja de vida” del indicador, la cual consiste en una ficha en la que se plasman estos aspectos y delimitan el alcance que se le quiere dar.
    
    
    
    p.mb-5(data-aos="zoom-in") Ahora bien, analice la siguiente tabla y reconozca la ficha técnica de un indicador en una unidad productiva agropecuaria. Procure llevar registro de lo más destacado en su libreta personal de apuntes:
    .row(data-aos="zoom-in")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Ficha técnica de un indicador de una unidad productiva
    
        .tabla-b.color-primario 
          table
            tbody
              tr
                td.tabla-b__header-custom.border-right-table_b.border-bottom-table_b Indicador
                td.border-right-table_b.border-bottom-table_b Grado de cumplimiento del plan de manejo sanitario en el cultivo de café.
                td.border-bottom-table_b Código IXN-022-1987
              tr
                td.tabla-b__header-custom.border-right-table_b.border-bottom-table_b Objetivo
                td.border-bottom-table_b(colspan='2') Establecer el grado de avance en el cumplimiento del plan de manejo sanitario en el cultivo de café de la finca Santa Lucía en el municipio de Rionegro.
              tr
                td.tabla-b__header-custom.border-right-table_b.border-bottom-table_b Alcance
                td.border-bottom-table_b(colspan='2') Plan de manejo sanitario del cultivo de café en la finca Santa Lucía en el municipio de Rionegro.
              tr
                td.tabla-b__header-custom.border-right-table_b.border-bottom-table_b Responsables
                td.border-bottom-table_b(colspan='2') Asistente técnico principal - jefe de operaciones en campo.
              tr
                td.tabla-b__header-custom.border-right-table_b.border-bottom-table_b Forma de cálculo
                td.border-bottom-table_b(colspan='2')
                  img.img-width-custom-02(src="@/assets/curso/tema/t3/8.svg")
              tr
                td.tabla-b__header-custom.border-right-table_b.border-bottom-table_b Unidad de medición
                td.border-bottom-table_b(colspan='2') Porcentaje (%).
              tr
                td.tabla-b__header-custom.border-right-table_b.border-bottom-table_b Meta
                td.border-bottom-table_b(colspan='2') 100 % de labores del plan de manejo sanitario implementadas.
              tr
                td.tabla-b__header-custom.border-right-table_b.border-bottom-table_b Sentido
                td.border-bottom-table_b(colspan='2') Creciente.
              tr
                td.tabla-b__header-custom.border-right-table_b.border-bottom-table_b Frecuencia
                td.border-bottom-table_b(colspan='2') Mensual.
              tr
                td.tabla-b__header-custom.border-right-table_b.border-bottom-table_b Fuente de información
                td.border-bottom-table_b(colspan='2') Registros de labores de la finca Santa Lucía municipio de Rionegro.
              tr
                td.tabla-b__header-custom.border-right-table_b.border-bottom-table_b Representación visual
                td.border-bottom-table_b(colspan='2') Tabla x Gráfico de barras x Torta.
        figcaption Nota: Adaptado de https://bit.ly/3bkuRpv
    Separador
    .titulo-segundo(data-aos="zoom-in")
          h2#t_3_1 3.1 Tipos de indicadores
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t3/9.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.py-5 El tipo de indicador se define, principalmente, por la etapa del proceso en la que se requiere hacer la medición. Igualmente está condicionado por las características del proyecto y la clase de información que se desea obtener con su formulación.
    p.mb-5 Los principales tipos de indicadores que se manejan en proyectos productivos son:
    
    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4.border-radius-20(titulo="Indicadores de producto")(:style="{'background-image': `url(${require('@/assets/curso/tema/t1/24.svg')})`, 'background-repeat': 'no-repeat'}")
        .row.p-5
          .col-md-6.mb-4.mb-md-0
            p Cuantifican bienes o servicios producidos en la implementación del proyecto productivo o la intervención. Igualmente, permiten visualizar cambios generados a partir de la implementación de determinadas actividades.
            p Ejemplo:
            ul.lista-ul
              li 
                i.fas.fa-angle-right.color-acento-contenido-vineta
                | Adecuación de 60 m² de galpón en la finca El Porvenir.
              li 
                i.fas.fa-angle-right.color-acento-contenido-vineta
                | Construcción de 200 metros de cerca de alambre en el potrero 1.
              li 
                i.fas.fa-angle-right.color-acento-contenido-vineta
                | Construcción de 4 estanques para peces en la finca.
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t3/10.png', alt='Texto que describa la imagen')
      .py-3.py-md-4.border-radius-20(titulo="Indicadores de gestión")(:style="{'background-image': `url(${require('@/assets/curso/tema/t1/24.svg')})`, 'background-repeat': 'no-repeat'}")
        .row.p-5
          .col-md-6.mb-4.mb-md-0
            p Permiten evidenciar la cantidad de recursos utilizados para la implementación de la estrategia. Igualmente, permite medir la cantidad de acciones, procesos y procedimientos adelantados en el desarrollo de la iniciativa productiva.
            p Ejemplo:
            ul.lista-ul
              li 
                i.fas.fa-angle-right.color-acento-contenido-vineta
                | Contratación de un servicio de asistencia técnica agropecuaria. 
              li 
                  i.fas.fa-angle-right.color-acento-contenido-vineta
                  | Realización de 8 capacitaciones en manejo integrado de plagas y enfermedades. 
              li 
                  i.fas.fa-angle-right.color-acento-contenido-vineta
                  | Adquisición de 5 kits de herramientas para poda de cítricos.
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t3/11.png', alt='Texto que describa la imagen')
      .py-3.py-md-4.border-radius-20(titulo="Indicadores de resultados")(:style="{'background-image': `url(${require('@/assets/curso/tema/t1/24.svg')})`, 'background-repeat': 'no-repeat'}")
        .row.p-5
          .col-md-6.mb-4.mb-md-0
            p Este tipo de indicadores miden los efectos generados por determinada intervención y pueden ser de percepción, conocimiento o de condiciones de bienestar de la población.
            p Ejemplo:
            ul.lista-ul
              li 
                i.fas.fa-angle-right.color-acento-contenido-vineta
                | Generación de 25 empleos directos en el municipio de Rionegro. 
              li 
                i.fas.fa-angle-right.color-acento-contenido-vineta
                | Aumentó en 8 % los ingresos de los productores de queso en la vereda Palmichal. 
              li 
                i.fas.fa-angle-right.color-acento-contenido-vineta
                | 50 familias se certifican en Buenas Prácticas Agrícolas.
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t3/12.png', alt='Texto que describa la imagen')



    .row.mb-5(data-aos="zoom-in")
      .col-12
        .cajon.color-acento-contenido-custom.p-4
          p.mb-0 Para la construcción de un indicador existe una estructura básica compuesta por un objeto + una condición deseada del objeto (verbo conjugado) + elementos adicionales de contexto descriptivo. En este sentido, es posible construir un indicador tomando como base la estructura de un objetivo.
    p.mb-5(data-aos="zoom-in") Para ilustrar este aspecto, analice y reconozca la correcta construcción de un indicador a través de lo que se muestra en la siguiente tabla:
    .row(data-aos="zoom-in")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Construcción de un indicador a partir de un objetivo
    
        .tabla-b.color-primario 
          table
            tbody
              tr
                td.tabla-b__header-custom.border-right-table_b.border-bottom-table_b.h4(rowspan='2') Objetivo
                td.border-right-table_b.border-bottom-table_b.tabla-b__subtitle Verbo
                td.border-right-table_b.border-bottom-table_b.tabla-b__subtitle Objeto
                td.border-bottom-table_b.tabla-b__subtitle Elementos descriptivos
              tr
                td.border-right-table_b.border-bottom-table_b.text-center Construir
                td.border-right-table_b.border-bottom-table_b.text-center 10 galpones
                td.border-bottom-table_b.text-center Para pollo de engorde
              tr
                td.tabla-b__header-custom.border-right-table_b.border-bottom-table_b.h4(rowspan='2') Alcance
                td.border-right-table_b.border-bottom-table_b.tabla-b__subtitle Objeto
                td.border-right-table_b.border-bottom-table_b.tabla-b__subtitle Verbo conjugado
                td.border-bottom-table_b.tabla-b__subtitle Elementos descriptivos
              tr
                td.border-right-table_b.border-bottom-table_b.text-center 10 galpones
                td.border-right-table_b.border-bottom-table_b.text-center Construidos
                td.border-bottom-table_b.text-center Para pollo de engorde
    Separador
    .titulo-segundo(data-aos="zoom-in")
          h2#t_3_2 3.2 Características de los indicadores
    .bloque-texto-g.custom_01.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t3/13.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.py-5 Las características de un indicador, hacen referencia a las generalidades que permiten no solo definir el indicador sino, además, clasificarlo, reconocer su utilidad y pertinencia en determinado proceso, establecer su necesidad, acceder a su medición, fijar su importancia y confiabilidad, entre otros aspectos.
    p.mb-5(data-aos="zoom-in") Para que un indicador sea útil en el alcance del objetivo para el cual fue formulado, es necesario que reúna ciertas características concretas, veámoslas:
    .row(data-aos="zoom-in")
      .col-sm-12.col-md-6
        LineaTiempoD.color-acento-contenido.mb-lg-0.mb-3
          .row(numero="1" titulo="Precisión")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t3/14.svg', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p Debe estar correctamente delimitado, es decir, que se debe tener absoluta claridad sobre qué se quiere medir y la forma como se va a realizar.
          .row(numero="2" titulo="Relevancia")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t3/15.svg', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p Es necesario que se relacione con el tema en cuestión. Este debe permitir describir la situación analizada.
          .row(numero="3" titulo="Viable en términos financieros")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t3/21.svg', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p  Su medición debe ser posible con los recursos con que cuente la empresa agropecuaria. En algunas ocasiones se fijan indicadores cuya medición excede el presupuesto del proyecto, lo cual termina volviéndose inviables.
          .row(numero="4" titulo="Medible y cuantificable")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t3/16.svg', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p El indicador siempre debe ser medible, es decir, abierto a validación independiente. Igualmente, se requiere que sea operacional y que permita registrar los cambios registrados respecto a la situación inicial.
          .row(numero="5" titulo="Interpretable")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t3/17.svg', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p Deben ser de fácil comprensión para cualquier tipo de público incluso para aquellos que no tienen especialidad en el tema de referencia.
          .row(numero="6" titulo="Útiles")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t3/18.svg', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p Deben facilitar la toma de decisiones al interior de la empresa agropecuaria e, igualmente, contribuir a la estimación del grado de cumplimiento de los objetivos corporativos de la empresa.
          .row(numero="7" titulo="Confiables")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t3/19.svg', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p La información que alimenta los indicadores debe provenir de fuentes confiables y, además, debe ser fácil constatar su procedencia.
          .row(numero="8" titulo="Verificable")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t3/20.svg', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p Todos los datos que se registre en los indicadores deben ser verificables, bien sea a través de fuentes primarias como de fuentes secundarias. Cada indicador debe estar acompañado de su respectivo medio de verificación.
      .col-sm-12.col-md-6.mb-5
            figure
              img(src='@/assets/curso/tema/t3/22.png', alt='Texto que describa la imagen')
    Separador
    .titulo-segundo(data-aos="zoom-in")
          h2#t_3_3 3.3 Interpretación
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t3/23.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.py-5 Un indicador implica la medición de una variable para facilitar la toma de decisiones al interior de una organización, por lo que su diseño y formulación se deben hacer, teniendo como principio preguntas como: <b>¿</b>Qué se va a medir<b>?</b>, <b>¿</b>Para qué se va a medir<b>?</b>, <b>¿</b>Cómo se va a medir<b>?</b> Una vez se tiene claridad sobre ello, es posible construir el indicador y aplicarlo en la unidad productiva.
    .tarjeta.color-primario-custom.p-3.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema/t1/8.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 No obstante, en muchas ocasiones, se acopian grandes volúmenes de información que, posteriormente, no se utilizan; bien sea porque no se eligió correctamente el indicador o porque los procesos para su análisis e interpretación no fueron los más indicados.
    p.mb-5(data-aos="zoom-in") Por lo anterior, respecto a los indicadores, se recomienda:
    .row.mb-5(data-aos="zoom-in")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.color-acento-contenido
          img.img-width-custom-04(src='@/assets/curso/tema/t3/37.png' alt='AvatarTop')
          .tarjeta.color-acento-botones-custom-02 
            .p-4
              h5.text-center.mt-0 Antes de la medición
              p • Los indicadores no se deben imponer, se deben construir colectivamente con opiniones de encargados de las áreas de interés de la empresa. 
              p • Se debe acordar qué es lo que se va a medir: unidades producidas, recursos invertidos, ventas, número de actividades realizadas, entre otras. 
              p • Definir responsabilidades de medición de los indicadores, de análisis de información resultante y del desarrollo de acciones  venidas de su interpretación. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.color-acento-contenido
          img.img-width-custom-04(src='@/assets/curso/tema/t3/38.png' alt='AvatarTop')
          .tarjeta.color-acento-botones-custom-02
            .p-4
              h5.text-center.mt-0 Después de la medición
              p • Respetar la cadena de custodia de los datos para mantener su integridad. 
              p • Asociar cada indicador con sus respectivos medios de verificación. 
              p • Elaborar un informe con los resultados de los indicadores analizados en el proceso de seguimiento.
    .row.mb-5(data-aos="zoom-in")
      .col-sm-12.col-lg-6
        p Pero, ¿cómo seleccionar un indicador? En caso de presentarse dudas, frente a la selección del indicador, existen algunos parámetros que se pueden tener en cuenta a través las siguientes preguntas:
        ul.lista-ul
          li 
            i.fas.fa-angle-right.color-acento-contenido-vineta
            | ¿Es el indicador suficientemente preciso para garantizar una medición objetiva?
          li 
            i.fas.fa-angle-right.color-acento-contenido-vineta
            | ¿Es el indicador un reflejo lo más directo posible del objetivo?
          li 
            i.fas.fa-angle-right.color-acento-contenido-vineta
            | ¿Es el indicador capaz de emplear un medio práctico y asequible para la obtención de datos?
          li 
            i.fas.fa-angle-right.color-acento-contenido-vineta
            | ¿Están las variables del indicador suficientemente definidas para asegurar que lo que se mide hoy es lo mismo que se va a medir en cualquier tiempo posterior, sin importar quién haga la medición?
          li 
            i.fas.fa-angle-right.color-acento-contenido-vineta
            | ¿Es el indicador suficientemente representativo del total de los resultados deseados y su comportamiento puede ser observado periódicamente?
      .col-sm-12.col-lg-6
          img.h-img-custom(src='@/assets/curso/tema/t3/24.png' alt='AvatarTop')
    .tarjeta.color-primario-custom.p-3.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema/t1/8.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Los indicadores que reciban más respuestas positivas serán los que finalmente se seleccionen para ser implementados en la medición de las variables del proyecto productivo.
    p.mb-3(data-aos="zoom-in") Para el análisis de la información existen, en la actualidad, gran cantidad de herramientas que permiten procesar grandes volúmenes de información en muy poco tiempo y generar reportes confiables y fáciles de analizar por parte de cualquier observador.
    p.mb-5(data-aos="zoom-in") En lo relacionado con la interpretación y análisis de los indicadores, tenga en cuenta las siguientes generalidades:
    div.p-5-custom.border-radius-20(
      :style="{'background-image': `url(${require('@/assets/curso/tema/t1/24.svg')})`, 'background-repeat': 'no-repeat'}"
    )(data-aos="zoom-in")
      SlyderB.mb-5(:datos="datosSlyder")
    p.mb-5(data-aos="zoom-in") Algunos de los elementos gráficos empleados en el análisis e interpretación de los indicadores son los siguientes:
    .row(data-aos="zoom-in")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Elementos gráficos más usados en la interpretación de indicadores
    .row.mb-5(data-aos="zoom-in")
      .col-sm-12.col-md-6.d-flex.justify-content-center.align-items-center.flex-column
        .h4-custom.mb-5.h-title-custom Frecuencia de cosecha de limón en la asociación CITRIFRUTS
        .height-custom
          img.mb-5(src="@/assets/curso/tema/t3/28.png")
        .tarjeta-custom.color-acento-botones-custom.p-3.mb-sm-5-custom
          p.mb-0 <b>Gráficos circulares: muestran el tamaño proporcional de los elementos que conforman una serie de datos en función del total. Sirven para destacar elementos que resulten significativos.</b>
      .col-sm-12.col-md-6.d-flex.justify-content-center.align-items-center.flex-column
        .h4-custom.mb-5.h-title-custom.text-center  Distribución de la cosecha de limón en porcentaje en predios de los productores de la asociación CITRIFRUTS
        .height-custom
          img.mb-5(src="@/assets/curso/tema/t3/29.png")
        .tarjeta-custom.color-primary-custom.p-3.mb-sm-5-custom
          p.mb-0 <b>Gráficos en columnas: se emplean principalmente para analizar los cambios que han tenido los datos en un periodo de tiempo.</b>
    .row.mb-5(data-aos="zoom-in")
      .col-sm-12.col-md-6.d-flex.justify-content-center.align-items-center.flex-column
        .h4-custom.mb-5.h-title-custom Grupos operarios de la población de la vereda Resguardos
        .height-custom
          img.mb-5(src="@/assets/curso/tema/t3/30.png")
        .tarjeta-custom.color-primary-custom.p-3.mb-sm-5-custom
          p.mb-0 <b>Barras horizontales: se utilizan, sobre todo, para analizar varios elementos individuales. Son ideales para evidenciar datos de productividad y rendimientos. </b>
      .col-sm-12.col-md-6.d-flex.justify-content-center.align-items-center.flex-column
        .h4-custom.mb-5.h-title-custom.text-center  Número de hectáreas sembradas
        .height-custom
          img.mb-5(src="@/assets/curso/tema/t3/31.png")
        .tarjeta-custom.color-acento-botones-custom.p-3.mb-sm-5-custom
          p.mb-0 <b>Líneas de tendencia: presentan el comportamiento de una variable a través del tiempo. Generalmente se utilizan para medir tasas de productividad, rendimientos, mortalidad de animales o ingresos.</b>












































</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Intención',
        texto:
          'Con el análisis de los indicadores lo que se pretende, básicamente, es observar tendencias y establecer comparaciones con respecto a una situación inicial, las cuales se alimentan con datos secundarios y soportes que corroboren lo expuesto por parte del observador.',
        imagen: require('@/assets/curso/tema/t3/25.png'),
      },
      {
        titulo: 'Proyección',
        texto:
          'Igualmente, una revisión minuciosa de los datos permite al observador hacer proyecciones e identificar los factores que inciden en determinados aspectos dentro de la unidad productiva.',
        imagen: require('@/assets/curso/tema/t3/26.png'),
      },
      {
        titulo: 'Comprensión del entorno productivo',
        texto:
          'La interpretación de los indicadores, igualmente, debe estar ligada al análisis del entorno productivo, puesto que la incidencia de determinados fenómenos sobre las variables analizadas es fundamental para entender las dinámicas que se dan al interior de la unidad productiva.',
        imagen: require('@/assets/curso/tema/t3/27.png'),
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
