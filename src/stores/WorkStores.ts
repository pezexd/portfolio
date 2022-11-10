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
    const { data } = await api.get('/api/works.json')
    Works.value = data
  }

  return {
    Works,
    Get,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWorks, import.meta.hot))
