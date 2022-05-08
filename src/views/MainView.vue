<template>
  <v-container>
    <v-row class="mb-8 text-center">

      <v-col class="mb-4"></v-col>
      <v-col class="mt-16">
        <v-avatar size="250">
          <img src="https://i.imgur.com/I62uYeI.png"/>
        </v-avatar>
      </v-col>

      <v-col class="mb-4 text-left">
        <v-row class="mt-2">
          <strong>Education: </strong>Politics & IR/Russian IWLP
        </v-row>
        <v-row class="mt-4">
          <strong>Background: </strong> RA FST Commander
        </v-row>
        <v-row class="mt-4">
          <strong>Experience: </strong> Full stack web development, general purpose python including web scraping, drone programming, some data analysis, machine learning/neural networks, NLP and computer vision
        </v-row>
        <v-row class="mt-4">
          <strong>Frontend: </strong> Django template inheritance; VueJS; some ReactJS
        </v-row>
        <v-row class="mt-4">
          <strong>Backend: </strong> Python (Django/Flask), including Django ORM and other databases (Sqlite, PostgreSQL, MongoDB)
        </v-row>
        <v-row class="mt-4">
          <strong>Others: </strong> Solidity (ERC20/721 tokens), smart contracts, arduino, 3D design (Fusion360) & 3D printing, drone building & flying (fixed wing and multirotor)
        </v-row>
      </v-col>

      <v-col class="mb-8"></v-col>

    </v-row>

      <v-row class="text-center">
      <v-col class="picbox mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image1"/>
      </v-col>
      <v-col class="mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image2"/>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image3"/>
      </v-col>
      <v-col class="picbox mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image4"/>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image5"/>
      </v-col>
      <v-col class="picbox mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image6"/>
      </v-col>
    </v-row>

      <div v-if="toggleModal">
      <PictureModal @close-modal="closeModal" :image="modalImage"/>
    </div>


  </v-container>
</template>

<script>
import PictureComp from '../components/PictureComp.vue'
import PictureModal from '../components/PictureModal.vue'
export default {
  name: 'MainView',
  components: {
    PictureComp,
    PictureModal
  },

  data: () => ({
    toggleModal: false,
    modalImage: String,
    frontendicon: document.getElementById('frontend-icon'),
    backendicon: document.getElementById('backend-icon'),
    fullstackicon: document.getElementById('fullstack-icon'),
    nlpicon: document.getElementById('nlp-icon'),
    computervisionicon: document.getElementById('cv-icon'),

    image1: "https://i.imgur.com/tXcb6sO.jpg",
    image2: "https://i.imgur.com/oZWfx8o.png",
    image3: "https://i.imgur.com/80tz1ie.jpg",
    image4: "https://i.imgur.com/I8gc1b1.jpg",

    image5: "https://i.imgur.com/o6HEgdI.png",
    image6: "https://i.imgur.com/v4kfo4o.png",
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
  // created() {
  //   this.frontendicon.style.color = "red"
  //   this.backendicon.style.color = "red"
  //   this.fullstackicon.style.color = "red"
  //   this.nlpicon.style.color = "red"
  //   this.computervisionicon.style.color = "red"
  // }
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
