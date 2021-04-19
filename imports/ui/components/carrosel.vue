<template>
  <v-carousel
  cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    >
    <v-carousel-item
      v-for="(slide,i) in items"
      :key="i"
      :src="slide.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/img/realise_batiment.jpg',
          },
          {
            src: '/img/realise_batiment2.jpg',
          },
          {
            src: '/img/realise_batiment.jpg',
          },
          {
            src: '/img/realise_batiment2.jpg',
          },
        ],
      }
    },
  }
</script>