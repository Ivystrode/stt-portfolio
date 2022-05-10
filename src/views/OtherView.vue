<template>
  <v-container>
    <div class="descriptiontitle text-center">
      <p>Other Projects</p>
    </div>



    <v-row class="text-center">
      <v-col class="picbox mb-4 border">
        <!-- <CarouselNoncycling :slideImages="this.slideImages"/> -->
        <PictureComp @open-modal="openModal" :image="this.image1"/>
      </v-col>
      <v-col class="picbox mb-4 border">
        <div class="table">
        <table class="ui celled inverted table">
        <tbody>

          <tr>
            <th scope="row"><strong>Project Name</strong></th>
            <td>29 Commando Media Site</td>
          </tr>

          <tr>
            <th scope="row">Frontend</th>
            <td>Django HTML Template Inheritance</td>
          </tr>

          <tr>
            <th scope="row">Backend</th>
            <td>Python/Django ORM, Sqlite database</td>
          </tr>

          <tr>
            <th scope="row">Other</th>
            <td>The site ran on a virtual machine hosted on Linode</td>
          </tr>

          <tr>
            <th scope="row">Purpose</th>
            <td>A basic CRUD website for storing/sharing media across the regiment, with full account/authentication features, picture & video uploads and comments</td>
          </tr>

        </tbody>
      </table>
      </div>
      </v-col>
    </v-row>




    <v-row class="text-center">
      <v-col class="picbox mb-4 border">
        <div class="table">
        <table class="ui celled inverted table">
        <tbody>

          <tr>
            <th scope="row"><strong>Project Name</strong></th>
            <td>ERC20 Token Contract ("Ditcoin")</td>
          </tr>

          <tr>
            <th scope="row">Frontend</th>
            <td>ReactJS</td>
          </tr>

          <tr>
            <th scope="row">Backend</th>
            <td>Python/Brownie and Solidity, with most of the backend happening on the Ethereum blockchain (Ropsten/Kovan testnet only)</td>
          </tr>

          <tr>
            <th scope="row">Other</th>
            <td>Solidity (smart contract language), Brownie (python smart contract development kit), Ganache (local blockchain tooling)</td>
          </tr>

          <tr>
            <th scope="row">Purpose</th>
            <td>After learning solidity and blockchain development, this was an attempt to create a coin/token that could actually be traded and managed on a real blockchain</td>
          </tr>

        </tbody>
      </table>
      </div>
      </v-col>
      <v-col class="picbox mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image2"/>
      </v-col>
    </v-row>



    <v-row class="text-center">
      <v-col class="picbox mb-4 border">
        <CarouselComp :slideImages="this.slideImages"/>
      </v-col>
      <v-col class="picbox mb-4 border">
        <div class="table">
        <table class="ui celled inverted table">
        <tbody>

          <tr>
            <th scope="row"><strong>Project Name</strong></th>
            <td>Fire Support Planner</td>
          </tr>

          <tr>
            <th scope="row">Frontend</th>
            <td>Typescript Ionic/Angular</td>
          </tr>

          <tr>
            <th scope="row">Backend</th>
            <td>Typescript with sqlite/localstorage</td>
          </tr>

          <tr>
            <th scope="row">Other</th>
            <td>This required working with Android studio and capacitor in order to build and load the app onto an android phone</td>
          </tr>

          <tr>
            <th scope="row">Purpose</th>
            <td>Trying to make an app that would allow FST Commanders and Gun Line Command Post officers to more easily work on fire missions/plans together</td>
          </tr>

        </tbody>
      </table>
      </div>
      </v-col>
    </v-row>



    <v-row class="text-center">
      <v-col class="picbox mb-4 border">
        <div class="table">
        <table class="ui celled inverted table">
        <tbody>

          <tr>
            <th scope="row"><strong>Project Name</strong></th>
            <td>Drone Disruptor</td>
          </tr>

          <tr>
            <th scope="row">Frontend</th>
            <td>Kali(pi) Linux</td>
          </tr>

          <tr>
            <th scope="row">Backend</th>
            <td>Basic python & sqlite</td>
          </tr>

          <tr>
            <th scope="row">Other</th>
            <td>Setting up a Raspberry Pi to use a mini touchscreen and installing Kali Linux to it</td>
          </tr>

          <tr>
            <th scope="row">Purpose</th>
            <td>A very early project that used wifi packet injection to detect consumer drones and cut the signal to/from the operator to force RTH</td>
          </tr>

        </tbody>
      </table>
      </div>
      </v-col>
      <v-col class="picbox mb-4 border">
        <PictureComp @open-modal="openModal" :image="this.image3"/>
      </v-col>
    </v-row>


    <v-row class="text-center">
      <v-col class="picbox mb-4 border">
        <CarouselNoncycling :slideImages="this.slideImages2"/>
      </v-col>
      <v-col class="picbox mb-4 border">
        <div class="table">
        <table class="ui celled inverted table">
        <tbody>

          <tr>
            <th scope="row"><strong>Project Name</strong></th>
            <td>Networks & Exploitation</td>
          </tr>

          <tr>
            <th scope="row">Frontend</th>
            <td>Rarely applicable, but have had a frontend on projects that have utilised network/exploitation tools (RNET, Home Dashboart MAC address collect)</td>
          </tr>

          <tr>
            <th scope="row">Backend</th>
            <td>Again rarely applicable, but Homebot system does store MAC addresses to the database</td>
          </tr>

          <tr>
            <th scope="row">Tools</th>
            <td>Metasploit, Aircrack suite, Wireshark, HackTheBox, Wireguard, General purpose networking</td>
          </tr>

          <tr>
            <th scope="row">Purpose</th>
            <td>These are just basic examples, but knowledge of how computer networks operate can help with a variety of projects as well as getting free wifi, stopping Patrick hogging the wifi, and monitoring what people are doing online</td>
          </tr>

        </tbody>
      </table>
      </div>
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
import CarouselNoncycling from '../components/CarouselNoncycling.vue'

export default {

  name: 'ScraperNlp',
  components: {
    PictureComp,
    PictureModal,
    CarouselComp,
    CarouselNoncycling
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

    image1:"https://i.imgur.com/BCZHjQR.png",
    image2:"https://i.imgur.com/7DzmhBn.png",
    image3:"https://i.imgur.com/oZWfx8o.png",
    slideImages: [
    "https://camo.githubusercontent.com/c2248b974916159bc12f4af0ce4482c6acc91bd6c09cb361a7147a2b353aff31/68747470733a2f2f692e696d6775722e636f6d2f4d6c4c714f75362e6a7067",
    "https://camo.githubusercontent.com/51576c2e18e8b0e2a9cef837247784eb6679931ae9a097251c16612c99b6c148/68747470733a2f2f692e696d6775722e636f6d2f44366f626737632e6a7067",
    "https://camo.githubusercontent.com/62e1e10925f2d545cb1c79a10b6a1e5f038ed33d9ab0793874617942ec602d7a/68747470733a2f2f692e696d6775722e636f6d2f496672484247672e6a7067",
    "https://camo.githubusercontent.com/180ff8f6c0e40d8ac27ebbd68678fe2843696d13513f1ce08727cbc1010ac7a5/68747470733a2f2f692e696d6775722e636f6d2f6c65447238724e2e6a7067",
    "https://camo.githubusercontent.com/d69d0934852f35fe056eeff48aeecf9951d7778f7d0eff1f3a7dd55694db0724/68747470733a2f2f692e696d6775722e636f6d2f4733665433494a2e6a7067",
    "https://camo.githubusercontent.com/542e64e8beb829cad745d3a3d147b3dc4a6da4d9f139383bc01d41ba557a7da6/68747470733a2f2f692e696d6775722e636f6d2f745049755762312e6a7067",
    "https://camo.githubusercontent.com/d2a7caf41d4a7a9f093c6db41823357514863852db0df30ea4c77cf2f7282624/68747470733a2f2f692e696d6775722e636f6d2f554e636f5378422e6a7067",
  ],
    slideImages2: [
    "https://i.imgur.com/1e5yyld.png",
    "https://i.imgur.com/263OSW9.png",
    "https://i.imgur.com/mrDyPok.png",
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
  .descriptiontitle.tablehead {
    color: coral;
  }
</style>
