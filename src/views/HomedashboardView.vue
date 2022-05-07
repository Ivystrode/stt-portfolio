<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4 border red">
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
      <v-col class="mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image4"/>
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

  name: 'ScraperNlp',
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

    image1:"",
    image2:"",
    image3:"",
    image4:"",
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
    console.log("HHHHHHHHHH")
    this.frontendicon.style.color = "green"
    this.backendicon.style.color = "green"
    this.fullstackicon.style.color = "green"
    this.nlpicon.style.color = "green"
    this.computervisionicon.style.color = "green"
  }
}
</script>
