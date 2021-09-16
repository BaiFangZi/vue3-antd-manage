import axios from 'axios'

const CancelToken = axios.CancelToken
export let axiosCancel

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  cancelToken: new CancelToken((cancel) => (axiosCancel = cancel)),
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
