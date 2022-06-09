<template>
  <v-container>
    <v-row class="mb-8 text-center">

      <v-col class="mb-4"></v-col>
      <v-col class="mt-16">
        <v-avatar size="250">
          <img src="https://canadianmortgagesinc.ca/wp-content/uploads/2018/08/unknown-face.png"/>
        </v-avatar>
      </v-col>

          

      <v-col class="mb-8"></v-col>

    </v-row>

    




  </v-container>
</template>

<script>
export default {
  name: 'SiteNotViewableView',
  components: {
  },

  data: () => ({
    toggleModal: false,
    modalImage: String,
  }),
  methods: {
    openModal(img) {
      console.log("open modal")
      this.modalImage = img
      this.toggleModal = true
      console.log(img)
    },
    closeModal() {
      this.toggleModal = false
    },
  },
   
  async created() {
  }
}
</script>
<style scoped>
  .picbox {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .descriptiontitle {
    font-size: xx-large;
    margin-bottom: 20px;
  }
  th {
    padding-left: 8px;
    padding-right: -8px;
  }
</style>
