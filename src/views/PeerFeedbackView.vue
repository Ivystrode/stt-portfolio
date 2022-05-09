<template>
  <v-container>
    <div class="descriptiontitle text-center">
      <p>Peer Feedback Review</p>
    </div>
    <v-row class="mb-8 text-center">

      <v-col class="mb-4"></v-col>
      <v-col class="mt-2">
        <v-avatar size="250">
          <img src="https://i.imgur.com/I62uYeI.png"/>
        </v-avatar>
      </v-col>

      <v-col class="mb-8"></v-col>

    </v-row>

      <v-row class="text-center">

      <v-col class="mb-4 border">

        <div class="section-title">
          <p>What is the main positive thing you take away from this peer feedback and how will it affect the way you work?</p>
        </div>

      </v-col>

      <v-col class="picbox mb-4 border">

        <div class="section-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus at urna condimentum mattis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At ultrices mi tempus imperdiet nulla malesuada. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Ipsum dolor sit amet consectetur. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Tristique sollicitudin nibh sit amet. Arcu vitae elementum curabitur vitae. Lorem ipsum dolor sit amet consectetur adipiscing elit. Condimentum lacinia quis vel eros donec ac odio tempor. Ipsum dolor sit amet consectetur. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Et tortor at risus viverra adipiscing at in. Tempus egestas sed sed risus. A condimentum vitae sapien pellentesque habitant morbi tristique senectus.</p>
        </div>

      </v-col>

    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4 border">

        <div class="section-title">
          <p>What is the main positive thing you take away from this peer feedback and how will it affect the way you work?</p>
        </div>

      </v-col>

      <v-col class="picbox mb-4 border">

        <div class="section-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus at urna condimentum mattis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At ultrices mi tempus imperdiet nulla malesuada. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Ipsum dolor sit amet consectetur. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Tristique sollicitudin nibh sit amet. Arcu vitae elementum curabitur vitae. Lorem ipsum dolor sit amet consectetur adipiscing elit. Condimentum lacinia quis vel eros donec ac odio tempor. Ipsum dolor sit amet consectetur. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Et tortor at risus viverra adipiscing at in. Tempus egestas sed sed risus. A condimentum vitae sapien pellentesque habitant morbi tristique senectus.</p>
        </div>

      </v-col>
    </v-row>




  </v-container>
</template>

<script>
export default {
  name: 'MainView',
  components: {
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
    image4: "https://i.imgur.com/98CMyGH.jpg",

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
  async created() {
    this.frontendicon.style.color = "white"
    this.backendicon.style.color = "white"
    this.fullstackicon.style.color = "white"
    this.nlpicon.style.color = "white"
    this.computervisionicon.style.color = "white"
  }
  }
}
</script>
<style scoped>

  .section-title {
    color: rgb(99, 137, 143);
    font-size: 200%;
    font-style: italic;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  .section-body {
    color: rgb(108, 207, 250);
    font-size: 130%;
  }
  .picbox {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .descriptiontitle {
    font-size: xx-large;
    /* margin-bottom: 10px; */
  }
  th {
    padding-left: 8px;
    padding-right: -8px;
  }
</style>
