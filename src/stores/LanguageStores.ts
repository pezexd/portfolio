import { acceptHMRUpdate, defineStore } from 'pinia'
import { Languages } from '~/types/LanguageTypes'

export const useLanguage = defineStore('language', {
    state: () => ({
        lang: useStorage('lang', Languages.english),
    }),
    actions: {
        SetLang(payload: Languages){
            this.lang = payload
        },
    },
    getters: {
        GetLang(): Languages{
            return this.lang as Languages
        }
    }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLanguage, import.meta.hot))
