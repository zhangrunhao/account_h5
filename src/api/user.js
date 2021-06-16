import request from '../util/request.js'

export const registerUser = (data) => {
  return request({
    url: '/api/users/register',
    method: 'Post',
    data
  })
}

export const loginUser = (data) => {
  return request({
    url: '/api/users/login',
    method: 'Post',
    data
  })
}
