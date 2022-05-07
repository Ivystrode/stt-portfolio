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

    image1:"https://camo.githubusercontent.com/8c85cfd4eb9c03cd8f0f56a12a6e430ca64c6caa160030c0d4ce6e0d3234e5f4/68747470733a2f2f692e696d6775722e636f6d2f326c6d446f74572e6a7067",
    image2:"https://camo.githubusercontent.com/8fbc21962784ae5f611dd2ae887760c4ffaed1295e8d3bb0263c84bbb889007b/68747470733a2f2f692e696d6775722e636f6d2f3637767837735a2e6a7067",
    image3:"https://camo.githubusercontent.com/a601a07ee5f85dbcd7c016a0ff6a71d51c584bad31b409cd02c539a5c0946991/68747470733a2f2f692e696d6775722e636f6d2f734f774d4878462e6a7067",
    image4:"https://camo.githubusercontent.com/bc3781f6366e28ed3a952716e9f5a42fe8858d3dca77235aae4b4363f40345fe/68747470733a2f2f692e696d6775722e636f6d2f74625867376b432e6a7067",
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
    this.frontendicon.style.color = "yellow"
    this.backendicon.style.color = "yellow"
    this.fullstackicon.style.color = "yellow"
    this.nlpicon.style.color = "green"
    this.computervisionicon.style.color = "red"
  }
}
</script>
