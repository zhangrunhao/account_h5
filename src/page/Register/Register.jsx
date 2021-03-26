import React from 'react'
import axios from 'axios'
import Navigation from '../../common/Navigation/Navigation.jsx'

import './mock'
import { isString } from 'lodash'

export default class Register extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      code: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleCodeChange = this.handleCodeChange.bind(this)
    this.getCode = this.getCode.bind(this)
  }

  verifyEmail(email) {
    const pattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/
    return email && isString(email) && pattern.test(email)
  }
  getCode() {
    if (!this.verifyEmail(this.state.email)) {
      alert('请正确填写邮箱')
    }
    axios({
      url: '/users/getCode',
      method: 'get',
      params: {
        email: this.state.email
      }
    }).then(res => {
      console.log('/users/getCode', res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  handleCodeChange(event) {
    const code = event.target.value
    if (code.length <= 6) {
      this.setState({
        code
      })
    }
    if (code.length === 6) {
      axios({
        url: '/users/register',
        method: 'post',
        data: {
          email: this.state.email,
          code
        }
      }).then(res => {
        console.log('/users/register', res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  render () {
    return (
      <div className="register">
        <Navigation title="注册"></Navigation>
        <div className="main">
          <form>
            <label>邮箱</label>
            <input value={this.state.email} onChange={this.handleEmailChange} type="text"/><br/>
            <label>验证码</label>
            <input value={this.state.code} onChange={this.handleCodeChange} type="text"/><br/>
          </form>
          <button onClick={this.getCode} id="btnGetCode" >获取验证码</button>
        </div>
      </div>
    );
  }
}
