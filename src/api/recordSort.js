import request from '../util/request.js'

export const addRecordSort = (data) => {
  return request({
    url: '/api/record_sort/add',
    method: 'Post',
    data
  })
}

export const getRecordSortList = () => {
  return request({
    url: '/api/record_sort/list',
    method: 'Get'
  })
}

export const updateRecordSort = (data) => {
  return request({
    url: '/api/record_sort/update',
    method: 'Post',
    data
  })
}

export const deleteRecordSort = (id) => {
  return request({
    url: '/api/record_sort/delete',
    method: 'Post',
    data: {
      recordSortId: id
    }
  })
}

export const getRecordSort = (id) => {
  return request({
    url: '/api/record_sort/getRecordSort',
    method: 'Get',
    params: {
      recordSortId: id
    }
  })
}
