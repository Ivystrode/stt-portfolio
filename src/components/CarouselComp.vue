<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="i in slideImages"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
      :src="i"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: "CarouselComp",
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

<style scoped>
    v-carousel {
        z-index: -2;
    }
</style>