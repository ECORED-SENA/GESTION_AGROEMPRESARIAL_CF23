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
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
