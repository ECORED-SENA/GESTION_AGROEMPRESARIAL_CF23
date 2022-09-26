<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-2(data-aos="zoom-in") Se le da la bienvenida al estudio del componente formativo 
      span.f-ca “Seguimiento a proyectos y acciones de mejora” 
      | ; comience esta experiencia, visualizando con atención el video introductorio que se muestra enseguida. 
    p.mb-5.f-ca(data-aos="zoom-in") ¡Adelante!
    figure.mb-5(data-aos="zoom-in")
      .video        
        iframe(wwidth="1261" height="719" src="https://www.youtube.com/embed/Og-BFqh9paM" title="Seguimiento a proyectos y acciones de mejora" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
