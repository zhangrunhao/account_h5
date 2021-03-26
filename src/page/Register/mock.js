import Mock from 'mockjs'

export const getCode = Mock.mock(/\/users\/getCode/, 'get', {
  "isUsed|1": false,
  "code|100000-999999": 100000
})

export const register = Mock.mock('/users/register', 'post', {
  "userId|10": ""
})