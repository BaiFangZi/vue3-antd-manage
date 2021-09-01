import axios from 'axios'

// console.log(import.meta)

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
request.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default request
