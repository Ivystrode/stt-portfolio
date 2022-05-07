<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4 border red">
        <CarouselComp :slideImages="this.slideImages"/>
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
import CarouselComp from '../components/CarouselComp.vue'

export default {

  name: 'ScraperNlp',
  components: {
    PictureComp,
    PictureModal,
    CarouselComp
  },
  data: () => ({
    toggleModal: false,
    modalImage: String,

    frontendicon: document.getElementById('frontend-icon'),
    backendicon: document.getElementById('backend-icon'),
    fullstackicon: document.getElementById('fullstack-icon'),
    nlpicon: document.getElementById('nlp-icon'),
    computervisionicon: document.getElementById('cv-icon'),

    image1:"https://pixabay.com/get/g5b5bf95d8ab2556b695038a1b7f4cca889edd645478a1f59d6fa521e47c846e990abf4046ead5b4d71d73c01ec046b18e0c81f14314549a085aeaef487f59c09_640.jpg",
    image2:"https://pixabay.com/get/g5b5bf95d8ab2556b695038a1b7f4cca889edd645478a1f59d6fa521e47c846e990abf4046ead5b4d71d73c01ec046b18e0c81f14314549a085aeaef487f59c09_640.jpg",
    image3:"https://pixabay.com/get/g5b5bf95d8ab2556b695038a1b7f4cca889edd645478a1f59d6fa521e47c846e990abf4046ead5b4d71d73c01ec046b18e0c81f14314549a085aeaef487f59c09_640.jpg",
    image4:"https://pixabay.com/get/g5b5bf95d8ab2556b695038a1b7f4cca889edd645478a1f59d6fa521e47c846e990abf4046ead5b4d71d73c01ec046b18e0c81f14314549a085aeaef487f59c09_640.jpg",

    slideImages: [
        'https://pixabay.com/get/gbbd34233a7417966a59bc7418ea5f5ee18d23e846597449bcfdcc341e2b4b026750cf227e759b5c40197c8fd8d0c5ea8ec6e64bb270359d62f1a4069967cbdc2_640.jpg',
        'https://pixabay.com/get/gcb54ec075e17c570fe5b897e8a8ab0dcccb898826c12d1bce4a373b94a70634e97676a5e4fe9ad278e39e23dda6f042d2b0a4171ca77b4e1fffc045d092856cd_640.jpg',
        'https://pixabay.com/get/g21514d18e61dbcb178948abc10d6eadbeacdf77632134c28784233808d3fd352cf3fcd2ddd0fff78941b8a448561fa9e_640.jpg',
        'https://pixabay.com/get/g5b5bf95d8ab2556b695038a1b7f4cca889edd645478a1f59d6fa521e47c846e990abf4046ead5b4d71d73c01ec046b18e0c81f14314549a085aeaef487f59c09_640.jpg',
        'https://pixabay.com/get/g5b5bf95d8ab2556b695038a1b7f4cca889edd645478a1f59d6fa521e47c846e990abf4046ead5b4d71d73c01ec046b18e0c81f14314549a085aeaef487f59c09_640.jpg',
      ]
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
    this.backendicon.style.color = "green"
    this.fullstackicon.style.color = "green"
    this.nlpicon.style.color = "red"
    this.computervisionicon.style.color = "green"
  }
}
</script>
