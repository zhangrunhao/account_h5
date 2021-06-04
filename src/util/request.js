import axios from 'axios'
import Toast from '../components/Toast/Toast.jsx'
import {
  getToken
} from './auth.js'

const service = axios.create({
  baseURL: 'http://localhost:9000',
  timeout: 15000
})

const token = getToken()

service.interceptors.request.use(config => {
  config.headers['Authorization'] = token
  return config
})

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code != 200) {
      Toast.fail(res.message)
      if (res.code === 401) {
        // TODO: 重新登录
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  }, 
  error => {
    Toast.fail(error.message)
    return Promise.reject(error)
  }
)

export default service
