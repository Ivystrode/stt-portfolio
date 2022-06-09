<template>
  <v-app>

    <!-- <v-app-bar app>
      <HeaderComp/>
    </v-app-bar>

    <v-navigation-drawer app>
      <NavBarComp/>
    </v-navigation-drawer>

    <v-navigation-drawer position="right" app>
      <NavBarRight/>
    </v-navigation-drawer> -->

    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>
// import HeaderComp from './components/HeaderComp.vue'
// import NavBarComp from './components/NavBarComp.vue'
// import NavBarRight from './components/NavBarRight.vue'

export default {
  name: 'App',

  components: {
    // HeaderComp,
    // NavBarComp,
    // NavBarRight
  },

  data: () => ({
    //
  }),
}
</script>
