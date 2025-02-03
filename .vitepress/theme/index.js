import './style.scss'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const vuetify = createVuetify({ 
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})

export default {
  ...DefaultTheme,
  // Layout
  enhanceApp({ app, router, siteData }) {
    app.use(vuetify)
    // ...
  }
}