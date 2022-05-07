<template>
  <v-container>

    <v-row class="text-center">
      <v-col class="mb-4 border red">
        <PictureComp @open-modal="openModal" :image="this.image1" :title="this.points1"/>
      </v-col>
      <v-col class="mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image2" :title="this.points2"/>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image3" :title="this.points3"/>
      </v-col>
      <v-col class="mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image4" :title="this.points4"/>
      </v-col>
    </v-row>

      <div v-if="toggleModal">
      <PictureModal @close-modal="closeModal" :image="modalImage" :points="modalPoints"/>
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
    modalPoints: String,

    frontendicon: document.getElementById('frontend-icon'),
    backendicon: document.getElementById('backend-icon'),
    fullstackicon: document.getElementById('fullstack-icon'),
    nlpicon: document.getElementById('nlp-icon'),
    computervisionicon: document.getElementById('cv-icon'),

    image1: require("@/assets/scrapernlp/topics.jpeg"),
    points1: ["one", "two","four"],
    image2: require("@/assets/scrapernlp/postlinegraph.jpeg"),
    points2: ["one", "two","four"],
    image3: require("@/assets/scrapernlp/pricegraph.jpeg"),
    points3: ["one", "two","four"],
    image4: require("@/assets/scrapernlp/db.jpeg"),
    points4: ["one", "two","four"],

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
