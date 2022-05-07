<template>
  <v-carousel hide-delimiters show-arrors-on-hover>
    <v-carousel-item
      v-for="i in slideImages"
      :key="i"
      :src="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: "CarouselNoncycling",
    props: {
        slideImages: Array
    },
    data: () => ({
      model: 0,
    }),
    async created() {
        console.log(this.slideImages)
    }
  }
</script>
