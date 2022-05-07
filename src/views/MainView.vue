<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4 border red">Item 1</v-col>
      <v-col class="mb-4 border">Item 2</v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="mb-4 border">Item 3</v-col>
      <v-col class="mb-4 border">Item 4</v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'MainView',

  data: () => ({
    frontendicon: document.getElementById('frontend-icon'),
    backendicon: document.getElementById('backend-icon'),
    fullstackicon: document.getElementById('fullstack-icon'),
    nlpicon: document.getElementById('nlp-icon'),
    computervisionicon: document.getElementById('cv-icon')
  }),
  // created() {
  //   this.frontendicon.style.color = "red"
  //   this.backendicon.style.color = "red"
  //   this.fullstackicon.style.color = "red"
  //   this.nlpicon.style.color = "red"
  //   this.computervisionicon.style.color = "red"
  // }
}
</script>
