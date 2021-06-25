import axios from 'axios'
import Toast from '../components/Toast/Toast.jsx'
import {
  getToken
} from './token.js'

const service = axios.create({
  baseURL: 'http://localhost:9000'
  // timeout: 15000
})

service.interceptors.request.use(config => {
  config.headers.Authorization = getToken()
  return config
})

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      if (res.code === 401) {
        Toast.fail(res.message, 1500, () => {
          location.href = `${location.origin}/#/login`
        })
      } else {
        Toast.fail(res.message)
      }
      return Promise.reject(new Error('error'))
    } else {
      return response.data
    }
  },
  error => {
    Toast.offline(error.message)
    return Promise.reject(error)
  }
)

export default service
