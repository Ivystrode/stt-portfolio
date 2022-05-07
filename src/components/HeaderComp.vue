<template>
  <div
  >
    <v-layout>

        <v-app-bar-title>
          <v-toolbar-title>BEN BRAITHWAITE - PORTFOLIO</v-toolbar-title>
        </v-app-bar-title>
    </v-layout>
  </div>
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
        /* display: flex; */
        justify-content: space-between;
        align-items: left;
        margin-bottom: 0px;
        }
</style>