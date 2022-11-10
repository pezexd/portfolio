import { createFetch } from '@vueuse/core'

const location = useBrowserLocation()

/**
 * Create axios instances
 */

const api = createFetch({
  baseUrl: location.value.origin
})

export default api
