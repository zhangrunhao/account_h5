import axios from 'axios'
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
      // TODO: 弹出提醒
      if (res.code === 401) {
        // TODO: 登录提醒
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  }, 
  error => {
    // TODO: 弹框提醒
    return Promise.reject(error)
  }
)

export default service
