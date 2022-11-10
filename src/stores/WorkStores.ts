import { acceptHMRUpdate, defineStore } from 'pinia'
import { Work } from '~/types/WorkTypes'
import api from '~/apis/index'

export const useWorks = defineStore('works', () => {
  /**
   * Collection of works
   */
  const Works = ref<Work[]>([])

  /**
   * Fetch works from api and set to state
   */
  const Get = async () => {
    const { data } = await api('/api/works.json').get().json()
    Works.value = data.value as unknown as Work[]
  }

  return {
    Works,
    Get,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWorks, import.meta.hot))
