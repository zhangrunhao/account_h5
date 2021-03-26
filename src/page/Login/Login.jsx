import React from 'react'
import axios from 'axios'
import Navigation from '../../common/Navigation/Navigation.jsx';

import './Login.less'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event) {
    axios({
      url: '/users/signin',
      method: 'post',
      data: {
        email: this.state.email,
        password: this.state.password
      }
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })

    // 取消默认提交
    event.preventDefault();
  }

  render () {
    return (
      <div className="login">
        <Navigation className="nav" back title="登录"></Navigation>
        <div className="main">
          <form onSubmit={this.handleSubmit}>
            <div className="form-line">
              <label>邮箱: </label>
              <input type="text" value={this.state.email} name="name" onChange={this.handleEmailChange}/>
            </div>
            <div className="form-line">
              <label>密码: </label>
              <input type="password" value={this.state.password} name="password" onChange={this.handlePasswordChange} />
            </div>
            <button className=".submit" type="submit" >提交</button>
          </form>
          <div className="other">
            <div className="option">创建新帐号?</div>
            <div className="option">忘记密码?</div>
          </div>
          <div className="three">
            <div className="title">或者使用第三方登录</div>
            <ul>
              <li>苹果</li>
              <li>微信</li>
              <li>微博</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}