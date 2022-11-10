import axios from 'axios'

const location = useBrowserLocation()

/**
 * Create axios instances
 */
const api = axios.create({
  baseURL: location.value.origin,
})

export default api
