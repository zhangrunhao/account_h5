import React from 'react'
import request from '../../util/request'
export default class Home extends React.Component {
  constructor () {
    super()
    this.name = 'home'
  }
  onClick () {
    request({
      url: '/api/users/hi',
      method: 'Post'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  render () {
    return (
      <div>
        <h2>Home</h2>
        <button onClick={this.onClick.bind(this)}>测试登录</button>
      </div>
    );
  }
}