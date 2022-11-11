<script setup lang="ts">
import { useLanguage } from './stores/LanguageStores'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Pezedev',
  meta: [
    {
      name: 'description',
      content: 'Portfolio of full stack developer Pedro Torres.',
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: 'Pezedev'
    },
    {
      property: 'og:description',
      content: 'Portfolio of full stack developer Pedro Torres.'
    },
    {
      property: 'og:image',
      content: '/logo-og.png'
    },
    {
      property: 'og:url',
      content: 'permalink'
    }
  ],
})

const { locale } = useI18n()
const Language = useLanguage()

onBeforeMount(() => {
  locale.value = Language.GetLang
})

const options = {
  menu: '#menu',
  navigation: true,
  scrollOverflow: false,
  anchors: ['home', 'services', 'works', 'about', 'contact', 'footer'],
  scrollingSpeed: 300,
}
</script>

<template>
  <div class="relative">
    <app-header />
    <div>
      <full-page id="fullpage" ref="fullpage" :options="options">
          <div class="section">
            <div class="container flex py-16 md:py-28 h-full">
              <home />
            </div>
          </div>
          <div class="section">
            <div class="container flex py-16 md:py-28 h-full">
              <services />
            </div>
          </div>
          <div class="section">
            <div class="container flex py-16 md:py-28 h-full">
              <works />
            </div>
          </div>
          <div class="section">
            <div class="container flex py-16 md:py-28 h-full">
              <about />
            </div>
          </div>
          <div class="section">
            <div class="container flex py-16 md:py-28 h-full">
              <contact />
            </div>
          </div>
          <div class="section fp-auto-height border-t border-stone-300/10">
            <app-footer />
          </div>
      </full-page>
    </div>
  </div>
</template>