<template>
  <v-card
    class="mx-auto text-left"
  >
    <v-layout>

        <v-app-bar-title>BEN BRAITHWAITE - PORTFOLIO</v-app-bar-title>
    </v-layout>
  </v-card>
</template>

<script>

    export default {
        name: 'HeaderComp',
        props: {
            title: String
        }
        }
</script>

<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0px;
        }
</style>