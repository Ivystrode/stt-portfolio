<template>
  <v-container>
    <div class="descriptiontitle text-center">
      <p>Desktop GUI - Web Scrapers & NLP</p>
    </div>

    <v-row class="text-center">
      <v-col class="picbox mb-4 border">
        <CarouselComp :slideImages="this.slideImages"/>
      </v-col>
      <v-col class="mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image2" :title="this.points2"/>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image3" :title="this.points3"/>
      </v-col>
      <v-col @click="openCodeModal" class="picbox mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image4"/>
      </v-col>
    </v-row>

      <v-col v-if="toggleCodeModal">
        <CodeCarousel @close-code-modal="closeCodeModal" :slideImages="this.codeImages" />
      </v-col>
      <div v-if="toggleModal">
      <PictureModal @close-modal="closeModal" :image="modalImage" :points="modalPoints"/>
    </div>
          <div class="text-center">
      <p class="descriptiontitle">Project Information</p>

      <div class="overview">
        <table class="ui celled inverted table">
        <tbody>

          <tr>
            <th scope="row">Frontend</th>
            <td>Not a web frontend - built using PyQt5 to make a local/desktop graphical user interface</td>
          </tr>

          <tr>
            <th scope="row">Backend</th>
            <td>Uses a local sqlite database to store data which is retrieved directly by the GUI. Runs web scrapers in the background that collect data on properties in specified areas, the news, and text data from 'social media', all of which is stored to the database</td>
          </tr>

          <tr>
            <th scope="row">Natural Language Processing</th>
            <td>Using the web scraper - which is written in python and uses BeautifulSoup4 - to scrape large amounts of text data, I then organise the collected "reports" into one corpus. I then used Python's NLTK library to analyse the data, extracting named entities and attempting to find out the most common topics at the present time. I then also perform sentiment analysis by the country of each post and rank them by polarity and subjectivity.</td>
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
    CodeCarousel,
  },
  data: () => ({
    toggleModal: false,
    toggleCodeModal: false,
    modalImage: String,
    modalPoints: String,

    frontendicon: document.getElementById('frontend-icon'),
    backendicon: document.getElementById('backend-icon'),
    fullstackicon: document.getElementById('fullstack-icon'),
    nlpicon: document.getElementById('nlp-icon'),
    computervisionicon: document.getElementById('cv-icon'),
    rpiicon: document.getElementById('rpi-icon'),

    image1: require("@/assets/scrapernlp/topics.jpeg"),
    points1: ["one", "two","four"],
    image2: "https://i.imgur.com/GYERAAJ.png",
    points2: ["one", "two","four"],
    image3: "https://i.imgur.com/8K1IEn8.png",
    points3: ["one", "two","four"],
    image4: require("@/assets/scrapernlp/cc-nlp2.png"),
    points4: ["one", "two","four"],

    slideImages: [
    "https://i.imgur.com/Ld2CxCX.jpg",
    "https://i.imgur.com/fzyVHKK.jpg",
    "https://i.imgur.com/eGPe0vE.jpg",
    "https://i.imgur.com/df6RxFG.jpg",
  ],

  codeImages: [
    "https://i.imgur.com/RVBJYre.png",
    "https://i.imgur.com/Fwei2kM.png",
    "https://i.imgur.com/NiwhcEM.png",
    "https://i.imgur.com/iqITzq1.png",
    "https://i.imgur.com/MejegWK.png",
    "https://i.imgur.com/P9qAINC.png",

  ],

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
    this.backendicon.style.color = "yellow"
    this.fullstackicon.style.color = "yellow"
    this.nlpicon.style.color = "green"
    this.computervisionicon.style.color = "red"
    this.rpiicon.style.color = "red"
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