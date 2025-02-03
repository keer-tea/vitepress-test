import './style.scss'
import DefaultTheme from 'vitepress/theme'

import MyLayout from './Layout.vue'

import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({ components, directives })

export default {
  ...DefaultTheme,
  // Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    app.use(vuetify)
    // ...
  }
}