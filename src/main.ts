import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import '~/assets/css/main.css'
import { Module } from './types/module'

export const createApp = ViteSSG(
  // the root component
  App,
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: Module}>('./modules/*.ts', { eager: true }))
    .forEach(i => i.install?.(ctx))
  }
)
