// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const projectTheme = {
  dark: true,
  colors: {
    background: '#1E1F25',
    'project-link': '#282c34'
  }
}

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  theme: {
    defaultTheme: 'projectTheme',
    themes: {
      projectTheme
    }
  }
})
