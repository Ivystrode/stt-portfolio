<template>
  <v-card
    class="mx-auto text-left"
  >
    <v-layout>

            <v-list nav>
                <v-list-item title="Frontend" value="frontend" color="green">
                  <v-icon id="frontend-icon">
                    mdi-code-less-than
                    </v-icon>
                  </v-list-item>
                <v-list-item title="Backend" value="backend">
                  <v-icon id="backend-icon">
                    mdi-code-less-than
                    </v-icon>

                </v-list-item>
                <v-list-item title="Full Stack" value="fullstack">
                  <v-icon id="fullstack-icon">
                    mdi-code-less-than
                    </v-icon>

                </v-list-item>
                <v-list-item title="NLP" value="nlp">
                  <v-icon id="nlp-icon">
                    mdi-code-less-than
                    </v-icon>

                </v-list-item>
                <v-list-item title="Computer Vision" value="computervision">
                  <v-icon id="cv-icon">
                    mdi-code-less-than
                    </v-icon>

                </v-list-item>
            </v-list>
    </v-layout>
  </v-card>
</template>

<script>

    export default {
        name: 'NavBarRight',
        props: {
            title: String
        },
        methods: {
          toggleColor() {
            console.log("toggle color")
          }
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
</style>