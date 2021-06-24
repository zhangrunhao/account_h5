import request from '../util/request.js'

export const addRecordSort = (data) => {
  return request({
    url: '/api/record_sort/add',
    method: 'Post',
    data
  })
}

