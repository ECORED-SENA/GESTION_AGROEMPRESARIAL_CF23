<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in")
      .titulo-principal__numero
        span 5
      h1 Mejora continua

    .bloque-texto-g.custom_01.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t5/1.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.py-5 La mejora continua se puede definir como un conjunto de acciones enfocadas en la obtención de la mayor calidad posible de los productos, servicios y procesos que se llevan a cabo al interior de una organización. Mejorar un proceso significa cambiarlo para hacerlo más efectivo, eficiente y adaptable. Qué cambiar y cómo cambiar, depende del enfoque específico del empresario y del proceso.
      
    p.mb-5(data-aos="zoom-in") Por otro lado, la administración de la calidad total requiere de un proceso constante, que será llamado mejoramiento continuo, donde la perfección nunca se logra, pero siempre se busca.
    .bg5
      .h2-custom.mb-5(data-aos="zoom-in") ¿Dónde opera la mejora continua?
      p.mb-5(data-aos="zoom-in") La mejora continua se puede implementar en todos los niveles de la organización.
      .row.mb-5.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
          .col-sm-12.col-md-4.col-lg-3.mb-5.mb-lg-0
            .tarjeta-avatar.color-acento-contenido.padding-custom
              img.img-width-custom-05(src='@/assets/curso/tema/t5/2.png' alt='AvatarTop')
              .tarjeta.color-acento-botones-custom-02.tarjeta-avatar-widt 
                .p-4
                  h5.text-center Operativo
          .col-sm-12.col-md-4.col-lg-3.mb-5.mb-lg-0
            .tarjeta-avatar.color-acento-contenido.padding-custom
              img.img-width-custom-05(src='@/assets/curso/tema/t5/3.png' alt='AvatarTop')
              .tarjeta.color-acento-botones-custom-02.tarjeta-avatar-widt
                .p-4
                  h5.text-center Estratégico
          .col-sm-12.col-md-4.col-lg-3.mb-5.mb-lg-0
            .tarjeta-avatar.color-acento-contenido.padding-custom
              img.img-width-custom-05(src='@/assets/curso/tema/t5/4.png' alt='AvatarTop')
              .tarjeta.color-acento-botones-custom-02.tarjeta-avatar-widt
                .p-4
                  h5.text-center Táctico
      p.mb-5(data-aos="zoom-in") El siguiente video detalla los elementos clave de la implementación de la mejora continua en las organizaciones; preste mucha atención y profundice en cada aspecto:
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
    Separador
    .titulo-segundo(data-aos="zoom-in")
      h2#t_5_1 5.1 Ciclo PHVA
    .bloque-texto-g.custom_01.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t5/5.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.py-5 Uno de los fundamentos de la mejora continua es el ciclo PHVA (Planear, Hacer, Verificar, Actuar). Un ciclo, básicamente, consiste en una serie de fases o estados por los que pasa un fenómeno periódico. Estas fases se dan de manera secuencial hasta llegar a un estado a partir del cual los eventos comienzan a repetirse en el mismo orden. 
    .row.mb-5(data-aos="zoom-in")
      .col-12
        .cajon.color-acento-contenido-custom.p-4
          p.mb-0 En el ciclo PHVA estos eventos comienzan con la planificación, luego pasan por la acción (hacer), posteriormente se verifica y, finalmente, se actúa con base en la verificación, con lo cual se da inicio nuevamente al ciclo.
    p.mb-5(data-aos="zoom-in") Reconozca la estructura básica del ciclo P.H.V.A, analizando con atención los conceptos que se muestran en el siguiente esquema:
    .row.d-flex.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-sm-12.col-md-12.col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          span Mejora continua – fases del ciclo PHVA
        div.mt-5
          img(src='@/assets/curso/tema/t5/6.png' alt='AvatarTop')
    p.mb-5(data-aos="zoom-in") Ahora, profundice en cada una de las fases del ciclo de mejora continua y sus aspectos clave; procure llevar registro de lo más destacado en su libreta personal de apuntes:
    .row.mb-5(data-aos="zoom-in")
      .col-sm-12.col-md-6
        LineaTiempoD.color-acento-contenido.mb-lg-0.mb-3
          .row(numero="1" titulo="Fase de planificación")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t5/11.png', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p Esta es una fase clave en los procesos de mejora continua y consiste en el análisis de información para la definición de políticas, estrategias, objetivos, metas y actividades que tendrán lugar en la organización las cuales definirán el plan de acción, el plan operativo y los planes de trabajo individuales. En esta fase, igualmente, se asignan los responsables de cada actividad, se estiman los tiempos de ejecución y se definen los recursos necesarios para su implementación.
          .row(numero="2" titulo="Fase del hacer")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t5/9.png', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p Para iniciar con el hacer primero se tiene que pasar por la planificación. En esta etapa se llevan a cabo las actividades definidas en los planes de acción, planes operativos y planes de trabajo conforme a los tiempos y las demás estimaciones realizadas por la coordinación del proyecto o la empresa.
          .row(numero="3" titulo="Fase de verificación")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t5/8.png', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p En esta fase, mediante revisión de instrumentos previamente establecidos (indicadores), se verifica el avance en la ejecución de actividades y el cumplimiento de metas propuestas en el proceso de planeación. En este proceso se utilizan cronogramas de seguimiento, tableros de control, listas de chequeo y otras herramientas que faciliten la observación. Como resultado, se generan reportes, informes y documentos que dan cuenta de los hallazgos, observaciones, conclusiones y recomendaciones.
          .row(numero="4" titulo="Fase del actuar")
            .col-4.col-sm-6.col-lg-2.img-center-linea-tiempo
              figure
                img(src='@/assets/curso/tema/t5/10.png', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8.mb-4.mb-md-0
              p Revisados los resultados de la fase de verificación, se genera un nuevo plan de trabajo enfocado en el desarrollo de acciones correctoras, que permitan superar debilidades encontradas en el proceso de seguimiento, bajo el principio de “actuar en consecuencia de”. Superando así situaciones de insatisfacción a clientes internos y externos, ajustando los procesos y fortaleciendo a toda la empresa. Así, se comienza, de nuevo, otro ciclo PHVA.
          
      .col-sm-12.col-md-6
            figure
              img(src='@/assets/curso/tema/t5/7.png', alt='Texto que describa la imagen')
    Separador
    .titulo-segundo(data-aos="zoom-in")
      h2#t_5_2 5.2 Ejecución de procesos
    .bloque-texto-g.custom_01.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t5/12.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.py-5 En el desarrollo de las acciones de seguimiento es de suma importancia definir los procesos que se llevan a cabo al interior de la organización, ya que a partir de ellos se identifican las falencias o debilidades que dan lugar a las actividades de mejora.
    .row.mb-5(data-aos="zoom-in")
      .col-12
        .cajon.color-acento-contenido-custom.p-4
          p.mb-0 Una correcta revisión de los procesos facilita la toma de decisiones respecto a los aspectos que se deben mejorar para el funcionamiento eficiente de la unidad productiva.
    p.mb-5(data-aos="zoom-in") En la mejora continua se tiene como principio fundamental el enfoque por procesos, el cual se basa en aspectos como los que se explican enseguida:
    .row.bg1.d-flex.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-md.col-lg-5.tarjeta--tabla-custom-03.p-4.mx-3.mb-sm-5-custom
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema/t5/13.png' alt='AvatarTop')
        h4.text-center Gestión de recursos y actividades (como procesos)
        p.text-center Las acciones que tienen lugar dentro de la organización siempre corresponden a procesos, unos más complejos que otros, los cuales finalmente se entrelazan y complementan. Cuando se da un enfoque secuencial a las actividades que se desarrollan en la empresa o en el proyecto es más sencillo realizar la planificación de actividades y su posterior seguimiento.
      .col-md.col-lg-5.tarjeta--tabla-custom-03.p-4.mx-3.mb-sm-5-custom
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema/t5/14.png' alt='AvatarTop')
        h4.text-center Concepto de organización por procesos
        p.text-center El concepto de una organización por procesos es distinto al de la organización entendida como un conjunto de departamentos o áreas que trabajan por separado. Bajo este nuevo enfoque la empresa es analizada como un todo en el cual tienen lugar una serie de procesos que aportan de una u otra forma al cumplimiento de los objetivos estratégicos.

    Separador
    .titulo-segundo(data-aos="zoom-in")
      h2#t_5_3 5.3 Acciones de mejora
    p.mb-5(data-aos="zoom-in") Como resultado de la aplicación del ciclo PHVA surgen una serie de conclusiones y recomendaciones que tienen como objetivo corregir o subsanar las deficiencias encontradas y mejorar la calidad en los procesos para, así, finalmente, hacer un manejo eficiente de los recursos y contribuir al logro de los objetivos propuestos.
    .row.mb-5(data-aos="zoom-in")
      .col-12
        .cajon.color-acento-contenido-custom.p-4
          p.mb-0 El conjunto de esas recomendaciones, conclusiones, observaciones y análisis es lo que posteriormente constituye una acción de mejora, la cual puede ser preventiva o correctiva.
    .tarjeta.color-primario-custom.p-3.mb-5(data-aos="zoom-in")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema/t1/8.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-0 Para el desarrollo de las acciones de mejora es necesario tener un principio denominado “toma de decisiones basada en hechos” lo cual implica que cualquier decisión que se tome respecto al funcionamiento de la organización o al seguimiento del proyecto tiene que estar sustentada en hechos medibles y cuantificables.
    p.mb-5(data-aos="zoom-in") El siguiente esquema muestra el proceso de construcción del plan de mejora. Analícelo y afiance su comprensión sobre los elementos de las acciones de mejora y el plan de mejora:
    .row.d-flex.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-sm-12.col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2. 
          span  Proceso de construcción del plan de mejora
        div.mt-5
          img(src='@/assets/curso/tema/t5/15.png' alt='AvatarTop')
    p.mb-5(data-aos="zoom-in") En relación con las acciones de mejora, tenga en cuenta las siguientes generalidades: 
    .tarjeta.tarjeta--gris.p-5.mb-5(
        :style="{'background-image': `url(${require('@/assets/curso/tema/t1/17.svg')})`}"
      )(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Clasificación
            p.mt-4 Las acciones de mejora se dividen en dos clases. Acciones preventivas, las cuales buscan prevenir la ocurrencia de algún evento que genere atrasos en la ejecución del plan de trabajo o que afecte el logro de los objetivos del proyecto.
            p.mt-2 Por su parte, las acciones correctivas están orientadas a la eliminación de las causas de una situación no deseada o de un problema que afecte los procesos que se llevan a cabo en la unidad productiva.
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t5/16.png', alt='Texto que describa la imagen') 
        .row
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Insumo para los planes de mejora
            p.mt-4 El compendio de las acciones de mejora, bien sean correctivas o preventivas, es el insumo principal para la construcción de los planes de mejora, los cuales además de las actividades que se deben desarrollar para superar los aspectos por mejorar involucran factores como el tiempo necesario para llevar a cabo dichas acciones, los responsables de realizarlas y el tiempo estimado para su ejecución.
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t5/17.png', alt='Texto que describa la imagen') 
        .row
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Punto de partida
            p.mt-4 Para la elaboración del plan de mejora se debe iniciar por la identificación de las acciones más urgentes y que requieren de especial atención, lo cual solo es posible a través de un proceso de priorización.
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t5/18.png', alt='Texto que describa la imagen') 
        .row
          .col-md-6.mb-4.mb-md-0
            .sub-steps-custom Priorización de las acciones
            p.mt-4 Para llevar a cabo la priorización de las acciones de mejora existen algunas herramientas disponibles, las cuales han sido ampliamente empleadas en diferentes ámbitos.
            p.mt-2 Uno de los ejercicios más comunes es la matriz de priorización la cual a partir de tres criterios clave permite establecer qué acciones se deben efectuar de manera urgente para superar las debilidades detectadas.
          .col-md-6
            figure
              img(src='@/assets/curso/tema/t5/19.png', alt='Texto que describa la imagen') 




    p.mb-5(data-aos="zoom-in") Para ejemplificar un poco, a continuación, se muestra un modelo de Matriz de priorización; herramienta que favorece determinar alternativas y criterios para la toma de decisiones, la clasificación de problemas, oportunidades y proyecciones:
    .row.mb-5
        .col-12
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in")
            h5 Tabla 6.
            span Matriz de priorización de acciones de mejora
      
          .tabla-b.color-primario.mb-2(data-aos="zoom-in")
            table
              tbody
                tr
                  td.tabla-b__header-custom.h4.text-center(colspan='5') Dificultad en la implementación
                tr
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center &nbsp;
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Mucha: 1
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Bastante: 2
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Poca: 3
                  td.border-bottom-table_b.h2-custom.text-center Ninguna: 4
                tr
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Acción de mejora 1
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-bottom-table_b &nbsp;
                tr
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Acción de mejora 2
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-bottom-table_b &nbsp;
                tr
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Acción de mejora 3
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-bottom-table_b &nbsp;
          .tabla-b.color-primario.mb-2
            table
              tbody
                tr
                  td.tabla-b__header-custom.h4.text-center(colspan='5') Tiempo en la implementación
                tr
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center &nbsp;
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Largo: 1
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Medio: 2
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Corto: 3
                  td.border-bottom-table_b.h2-custom.text-center Inmediato: 4
                tr
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Acción de mejora 1
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-bottom-table_b &nbsp;
                tr
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Acción de mejora 2
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-bottom-table_b &nbsp;
                tr
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Acción de mejora 3
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-bottom-table_b &nbsp;
          .tabla-b.color-primario.mb-3 
            table
              tbody
                tr
                  td.tabla-b__header-custom.h4.text-center(colspan='5') Impacto  en la implementación
                tr
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center &nbsp;
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Ninguno: 1
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Poco: 2
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Bastante: 3
                  td.border-bottom-table_b.h2-custom.text-center Mucho: 4
                tr
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Acción de mejora 1
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-bottom-table_b &nbsp;
                tr
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Acción de mejora 2
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-bottom-table_b &nbsp;
                tr
                  td.border-right-table_b.border-bottom-table_b.h2-custom.text-center Acción de mejora 3
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-right-table_b.border-bottom-table_b &nbsp;
                  td.border-bottom-table_b &nbsp;
    .row.mb-5(data-aos="zoom-in")
      .col-12
        .cajon.color-acento-contenido-custom.p-4
          p.mb-0 Para la aplicación de la matriz de priorización es necesario evaluar los criterios: dificultad de la implementación, tiempo de implementación e impacto de la implementación. Ellos, de acuerdo con el tipo de acción de mejora obtienen una clasificación. Por lo cual, las matrices que obtengan mayores calificaciones serán las que se deban realizar en primera instancia, es decir, en el corto plazo. 
    .row.mb-5(data-aos="zoom-in")
      .col-sm-12.col-lg-6
            img.h-img-custom(src='@/assets/curso/tema/t5/20.png' alt='AvatarTop')
      .col-sm-12.col-lg-6
        p Para el proceso de priorización de las acciones de mejora es necesario:
        ul.lista-ul
          li 
            i.fas.fa-angle-right.color-acento-contenido-vineta
            | Realizar un ejercicio muy responsable de autocrítica y de autoanálisis por medio del cual se identifiquen las necesidades de la empresa y se establezcan los aspectos que se deben mejorar. 

          li 
            i.fas.fa-angle-right.color-acento-contenido-vineta
            | Analizar los recursos y las posibilidades de la organización con el fin de establecer, por ejemplo, el grado de dificultad en la implementación de las alternativas y el tiempo estimado. 

          li 
            i.fas.fa-angle-right.color-acento-contenido-vineta
            | Priorizadas las acciones de mejora, se establece cuáles de ellas se deben realizar en el corto, mediano y largo plazo. 

          li 
            i.fas.fa-angle-right.color-acento-contenido-vineta
            | Con base en esto, se identifica el tiempo que se requiere para su ejecución, los recursos y las gestiones que se deben realizar al interior de la organización para conseguir los resultados y los impactos esperados.
    .tarjeta.color-primario-custom.p-3.mb-5(data-aos="zoom-in")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema/t1/8.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-0 Para consolidar el plan de mejora, lo más indicado es recurrir a una matriz de plan de mejora, la cual integra varios elementos clave y facilita la visualización e interpretación de sus componentes.
    .row.mb-5(data-aos="zoom-in")
      .col-12
        .cajon.color-acento-contenido-custom.p-4
          p.mb-0 Por medio de la implementación de los planes de mejora se aumenta la eficiencia de los procesos que tienen lugar en la unidad productiva y se consigue superar las debilidades encontradas en durante la fase de seguimiento.
    p.mb-5(data-aos="zoom-in") Ahora, ya se muestra el formato desarrollado, de acuerdo al ejemplo del formato anteriormente dado:
    .row.mb-5(data-aos="zoom-in")
        .col-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 7.
            span Matriz de plan de acciones de mejora
      
          .tabla-b.color-primario.mb-2
            table
              tbody
                tr
                  td.tabla-b__header-custom.h4.text-center.border-right-table_b Acción de mejora
                  td.tabla-b__header-custom.h4.text-center.border-right-table_b Tareas
                  td.tabla-b__header-custom.h4.text-center.border-right-table_b Responsable
                  td.tabla-b__header-custom.h4.text-center.border-right-table_b Tiempo de inicio
                  td.tabla-b__header-custom.h4.text-center.border-right-table_b Tiempo de terminación
                  td.tabla-b__header-custom.h4.text-center.border-right-table_b Indicador de seguimiento
                  td.tabla-b__header-custom.h4.text-center Responsable de seguimiento
                tr
                  td.border-right-table_b.border-bottom-table_b.text-center.h2-custom(rowspan='3') Reducir las pérdidas de café en la cosecha
                  td.border-right-table_b.border-bottom-table_b.text-center Capacitar a los recolectores
                  td.border-right-table_b.border-bottom-table_b.text-center Jefe área técnica
                  td.border-right-table_b.border-bottom-table_b.text-center 15/01/22
                  td.border-right-table_b.border-bottom-table_b.text-center 15/02/22
                  td.border-right-table_b.border-bottom-table_b.text-center Número de productores capacitados
                  td.border-bottom-table_b.text-center Jefe área técnica
                tr
                  td.border-right-table_b.border-bottom-table_b.text-center Mejorar los sistemas de transporte internos
                  td.border-right-table_b.border-bottom-table_b.text-center Jefe área mantenimiento
                  td.border-right-table_b.border-bottom-table_b.text-center 20/01/22
                  td.border-right-table_b.border-bottom-table_b.text-center 25/02/22
                  td.border-right-table_b.border-bottom-table_b.text-center Número de sistemas de transporte mejorados
                  td.border-bottom-table_b.text-center Jefe operaciones
                tr
                  td.border-right-table_b.border-bottom-table_b.text-center Aumentar frecuencia de recolección
                  td.border-right-table_b.border-bottom-table_b.text-center Técnicos operarios
                  td.border-right-table_b.border-bottom-table_b.text-center 15/04/22
                  td.border-right-table_b.border-bottom-table_b.text-center 18/06/22
                  td.border-right-table_b.border-bottom-table_b.text-center Número de recolecciones por semana
                  td.border-bottom-table_b.text-center Jefe de área operativa
    p.mb-5(data-aos="zoom-in") El establecimiento de actividades y tareas claras, concretas y precisas en el plan de acciones de mejora es fundamental para conseguir los impactos esperados y superar las dificultades que afectan la calidad de los procesos y los productos que tienen lugar en el proyecto productivo.








   

</template>

<script>
export default {
  name: 'Tema5',
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
