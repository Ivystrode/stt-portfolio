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
        <PictureComp @open-modal="openModal" :image="this.image2"/>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="picbox mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image3"/>
      </v-col>
      <v-col @click="openCodeModal" class="picbox mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image4"/>
      </v-col>
    </v-row>
      <div v-if="toggleModal">
      <PictureModal @close-modal="closeModal" :image="modalImage"/>
    </div>
      <v-col v-if="toggleCodeModal">
        <CodeCarousel @close-code-modal="closeCodeModal" :slideImages="this.codeImages" />
      </v-col>

      <div  class="text-center">
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
import CodeCarousel from '../components/CodeCarousel.vue'

export default {

  name: 'ScraperNlp',
  components: {
    PictureComp,
    PictureModal,
    CarouselComp,
    CodeCarousel
  },
  data: () => ({
    toggleModal: false,
    toggleCodeModal: false,
    modalImage: String,

    frontendicon: document.getElementById('frontend-icon'),
    backendicon: document.getElementById('backend-icon'),
    fullstackicon: document.getElementById('fullstack-icon'),
    nlpicon: document.getElementById('nlp-icon'),
    computervisionicon: document.getElementById('cv-icon'),
    rpiicon: document.getElementById('rpi-icon'),

    image1:"",
    image2:"https://i.imgur.com/uiqXIni.png",
    image3:"https://i.imgur.com/WlQxYyB.png",
    image4:"https://i.imgur.com/EkMutvX.png",


    slideImages: [
        "https://i.imgur.com/GlS7T5U.jpg",
        "https://i.imgur.com/kG6WN7c.jpeg",
        "https://i.imgur.com/Hur5U6J.jpg",
        "https://i.imgur.com/JYAamEj.png",
        "https://i.imgur.com/Hd5Y9lJ.jpg",
        "https://i.imgur.com/fBCj40U.jpg",
        "https://i.imgur.com/D1fO6Ea.jpg"
      ],

    codeImages: [
    "https://i.imgur.com/fZP5dcl.png",
    "https://i.imgur.com/QCHbpdo.png",
    "https://i.imgur.com/Xy279SM.png",
    "https://i.imgur.com/mYA6paP.png",
    "https://i.imgur.com/7eTkh9L.png",
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
    openCodeModal(img) {
      console.log("open modal")
      this.toggleCodeModal = true
      console.log(img)
    },
    closeCodeModal() {
      this.toggleCodeModal = false
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