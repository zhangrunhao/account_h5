import request from '../util/request.js'

export const addRecord = (data) => {
  return request({
    url: '/api/record/add',
    method: 'Post',
    data
  })
}
