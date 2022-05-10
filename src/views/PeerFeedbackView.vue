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
        <p>It looks like my positive and eager attitude are popular with the rest of the team. This is really encouraging feedback; the reason I have felt so able to show my excitedness and be extroverted with the others is because I have felt sufficiently comfortable with every other individual on the team to allow my real personality to come through, and so to have this validated is a very welcome feeling. I'm also happy to hear that, despite my misgivings about being a "jack of all trades, master of none", there is at least some feeling that my apparently broad knowledge base is not as shallow as I feared.</p>
        <br>
        <p>My other key takeaway is that my teaching methods (and willingness to share knowledge) have been well received, so I will definitely sustain this effort. I get a lot of satisfaction out of teaching others and sharing ideas and knowledge across the team, so it's encouraging to hear that this is taken well.</p>
        </div>

      </v-col>

    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4 border">

        <div class="section-title">
          <p>What is the main constructive feedback you take away from this peer feedback and how will it affect the way you work?</p>
        </div>

      </v-col>

      <v-col class="picbox mb-4 border">

        <div class="section-body">
        <p>Aside from the suggestions that I get more time with Foundry and PySpark (which probably stem from my own suggestions that I do so!) the main criticism is that I apparently get "agitated and verbal" when I am stressed about things not going my way, and to rectify this it is suggested that I am more open to alternatives and do more planning as well as follow guidelines and formal approaches to programming. This does contrast interestingly with one of the positive points someone made, that I am apparently "good at identifying when team discussions are entering rabbit holes".</p>
        <br>
        <p>I do however think this is an astute criticism - and not only because most of the tellings-off I have received in my military career have been a result not of failing to do what I am told, but not doing it in the proper way or by the right process. This is also probably because I will often have a solution to a problem in mind and become noticeably frustrated with group discussions that, in my opinion, can take excessive time winding their way slowly to the obvious solution that I just want to get on with. This is up to me to fix - by learning to communicate better in group situations and diplomatically putting my point across in a persuasive manner, with my frustration stifled or properly directed into this persuasive effort. </p>
        <br>
        <p>Another point is that I believe my public speaking style could be improved. Although most of the team agreed that I can efficiently "elicit customer requirements and pitch effectively", in contract to questions 1 and 2, my "Strongly Agree" is noticeably lower for this question. More information is needed to determine whether this is due to the "eliciting customer requirements" or the "pitch effectively" part of the question (or both), since I have been making a deliberate effort to be quieter and speak less. This is partly down to my own insecurity over my default tone of voice, which I am worried may come across as too aggressive or assertive when I don't necessarily mean to convey that attitude. It is also because I enjoy the current flat team dynamic which I believe encourages everyone to speak with an open mind.</p>
        
        </div>

      </v-col>
    </v-row>




    <v-row class="text-center">
      <v-col class="mb-4 border">

        <div class="section-title" id="listbit">
          <p>Summary</p>
        </div>

      </v-col>

      <v-col class="picbox mb-4 border">

        <div class="section-body">
        <p><strong>SUSTAIN</strong></p>
        <p>Positive attitude</p>
        <p>Teaching style and willingless to share knowledge/ideas</p>
        <p>Broad/further broaden my knowledge base</p>

        <br>

        <p><strong>IMPROVE</strong></p>
        <p>Direct frustration into persuasive dicusssion instead of agitation</p>
        <p>Examine my speaking style - speak up more, or re-examine my pitching style</p>
        <p>Delve more into Foundry (and PySpark)</p>
        
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
    rpiicon: document.getElementById('rpi-icon'),

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
  },
    async created() {
    this.frontendicon.style.color = "aqua"
    this.backendicon.style.color = "aqua"
    this.fullstackicon.style.color = "aqua"
    this.nlpicon.style.color = "aqua"
    this.computervisionicon.style.color = "aqua"
    this.rpiicon.style.color = "aqua"
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
    padding-top: 20px;
  }
  .section-body {
    color: rgb(108, 207, 250);
    font-size: 130%;
  }
  #listbit {
    padding-top: 80px;
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
