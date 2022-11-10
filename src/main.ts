import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import '~/assets/css/main.css'

export const createApp = ViteSSG(
  // the root component
  App,
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) =>
      i.install?.(ctx)
    )
  }
)
