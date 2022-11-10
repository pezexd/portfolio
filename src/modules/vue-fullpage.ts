import type { Module } from '~/types/module'

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

export const install: Module = ({ app }) => {
  app.use(VueFullPage)
}
