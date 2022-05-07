<template>
  <v-container>
    <div class="descriptiontitle text-center">
      <p>RNET - Remote Network</p>
    </div>
    <v-row class="text-center">
      <v-col class="picbox mb-4 border red">
        <CarouselComp :slideImages="this.slideImages"/>
      </v-col>
      <v-col class="picbox mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image2" :points="this.points2"/>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="picbox mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image3"/>
      </v-col>
      <v-col class="picbox mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image4"/>
      </v-col>
    </v-row>
      <div v-if="toggleModal">
      <PictureModal @close-modal="closeModal" :image="modalImage"/>
    </div>

      <div class="text-center">
      <p class="descriptiontitle">Project Information</p>

      <div class="overview">
        <table class="ui celled inverted table">
        <tbody>

          <tr>
            <th scope="row">Frontend</th>
            <td>Django template-inheritance - dynamically rendered HTML templates with minimal frontend python support</td>
          </tr>

          <tr>
            <th scope="row">Backend</th>
            <td>A full-featured Django application handling authentication and database schema via the Django ORM to store in a postgresql/sqlite database hosted locally</td>
          </tr>

          <tr>
            <th scope="row">Computer Vision</th>
            <td>A variety of models for detecting people, vehicles etc, as well as code to train and use custom models</td>
          </tr>

          <tr>
            <th scope="row">Hardware</th>
            <td>Built around RPi's communicating to a server over 4G through a VPN running python code that interfaces with flight controllers via the MAVLINK protocol, and a lot of additional electronic components and physical hardware (airframes etc) on top</td>
          </tr>

          <tr>
            <th scope="row">Natural Language Processing</th>
            <td>No NLP element to this project; the telegram bot is just a means of sending commands and receiving data/messages from the units or control server</td>
          </tr>

        </tbody>
      </table>

      </div>
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
    rpiicon: document.getElementById('rpi-icon'),

    image1:"https://pixabay.com/get/g5b5bf95d8ab2556b695038a1b7f4cca889edd645478a1f59d6fa521e47c846e990abf4046ead5b4d71d73c01ec046b18e0c81f14314549a085aeaef487f59c09_640.jpg",
    image2:"https://pixabay.com/get/g5b5bf95d8ab2556b695038a1b7f4cca889edd645478a1f59d6fa521e47c846e990abf4046ead5b4d71d73c01ec046b18e0c81f14314549a085aeaef487f59c09_640.jpg",
    points2: ["one", "two","four"],
    image3:"https://pixabay.com/get/g5b5bf95d8ab2556b695038a1b7f4cca889edd645478a1f59d6fa521e47c846e990abf4046ead5b4d71d73c01ec046b18e0c81f14314549a085aeaef487f59c09_640.jpg",
    points3: ["one", "two","four"],
    image4:"https://pixabay.com/get/g5b5bf95d8ab2556b695038a1b7f4cca889edd645478a1f59d6fa521e47c846e990abf4046ead5b4d71d73c01ec046b18e0c81f14314549a085aeaef487f59c09_640.jpg",
    points4: ["one", "two","four"],


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
    this.rpiicon.style.color = "green"
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