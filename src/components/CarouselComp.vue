<template>
  <v-carousel v-model="model">
    <v-carousel-item
      v-for="i in slideImages"
      :key="i"
    >
      <v-sheet
        :image="image"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
            <img :src="i"/>
        </v-row>
      </v-sheet>
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