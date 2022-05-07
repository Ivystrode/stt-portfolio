<template>
  <v-container>
    <div class="descriptiontitle text-center">
      <p>Homebot & Home Dashboard</p>
    </div>
    <v-row class="text-center">
      <v-col class="picbox mb-4 border">
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
      <v-col v-if="toggleCodeModal">
        <CodeCarousel @close-code-modal="closeCodeModal" :slideImages="this.codeImages" />
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
            <td>VueJS, hosted on the "Hub", accessible via VPN</td>
          </tr>

          <tr>
            <th scope="row">Backend</th>
            <td>A Flask server running an API, that communicates with a mongoDB hosted on Atlas</td>
          </tr>

          <tr>
            <th scope="row">Computer Vision</th>
            <td>A pre-trained model that is configured only to detect people and vehicles, and custom trained face detection that runs on a remote machine</td>
          </tr>

          <tr>
            <th scope="row">Hardware</th>
            <td>Multiple RPi's communicating via sockets and 433Mhz radios, that autorun on startup, in addition to camera modules, PIR sensors and packet-injection capable wifi antenna</td>
          </tr>

          <tr>
            <th scope="row">Natural Language Processing</th>
            <td>A neural network trained on a list of tagged "intents", predicting the intent based on the input pattern and serving a suitable response; complements the purely practical command element of the telegram bot</td>
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
    image2:require("@/assets/homedashboard/atlasdb.png"),
    image3:require("@/assets/homedashboard/botdetectmsg.png"),
    image4:require("@/assets/homedashboard/ccrfcon.png"),
    slideImages: [
    "https://i.imgur.com/OkGmQkH.jpg",
    "https://i.imgur.com/1DukZfQ.jpg",
    "https://i.imgur.com/fnSIVL8.jpg",
    "https://i.imgur.com/u8gDkoK.jpg",
    "https://i.imgur.com/2lNrgp4.jpg",
    "https://i.imgur.com/hRe3hWl.jpg",
    "https://i.imgur.com/uWArwtH.png",
    "https://i.imgur.com/n1ac1Of.png",
  ],
  codeImages: [
    "https://i.imgur.com/Ed1HPta.png",
    "https://i.imgur.com/iehtRVU.png",
    "https://i.imgur.com/gv7Qy3R.png",
    "https://i.imgur.com/Fpo0yJE.png",
    "https://i.imgur.com/1ZHlYnr.png",
    "https://i.imgur.com/faznl0n.png",
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
    this.frontendicon.style.color = "green"
    this.backendicon.style.color = "green"
    this.fullstackicon.style.color = "green"
    this.nlpicon.style.color = "green"
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
