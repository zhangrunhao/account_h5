import request from '../util/request.js'



export const addAccount = (data) => {
  return request({
    url: '/api/account/add',
    method: 'Post',
    data
  })
}

export const updateAccount = (data) => {
  return request({
    url: '/api/account/update',
    method: 'Post',
    data
  })
}

export const getAccountList = () => {
  return request({
    url: '/api/account/list',
    method: 'Get'
  })
}

export const getAccountDetail = (id) => {
  return request({
    url: '/api/account/getAccount',
    method: 'Get',
    params: {
      accountId: id
    }
  })
}

export const deleteAccount = (accountId) => {
  return request({
    url: '/api/account/delete',
    method: 'Post',
    data: {
      accountId
    }
  })
}