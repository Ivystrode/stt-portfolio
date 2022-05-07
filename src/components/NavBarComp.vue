<template>
  <v-card
    class="mx-auto text-left"
  >
    <v-layout>
            <v-list nav>
                <v-list-item value="intro">PROJECTS</v-list-item>

                <v-list-item value="rnet">
                  <router-link class="project-link" to="/rnet">RNET</router-link>
                </v-list-item>

                <v-list-item value="homedashboard">
                  <router-link class="project-link" to="/homedashboard">HOME DASHBOARD</router-link>
                </v-list-item>

                <v-list-item value="homedashboard">
                  <router-link class="project-link" to="/scrapernlp">SCRAPER NLP</router-link>
                </v-list-item>
            </v-list>
    </v-layout>
  </v-card>
</template>

<script>

    export default {
        name: 'NavBarComp',
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
        z-index: -1;
        }
    .project-link {
      color: rgb(156, 154, 154);
      text-decoration: none;
    }
    .project-link:hover {
      color: deepskyblue;
    }
    .project-link:visited {
      color: deepskyblue;
    }
</style>