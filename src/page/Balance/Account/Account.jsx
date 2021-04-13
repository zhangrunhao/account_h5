import React from 'react'

export default class Account extends React.Component {
  render () {
    return (
      <div className="account">
        <div className="title">信用卡账户</div>
        <ul>
          <li>
            <div className="icon">
              <img src="" alt=""/>
            </div>
            <div className="name">蚂蚁花呗</div>
            <div className="number">-20.30</div>
          </li>
          <li>
            <div className="icon">
              <img src="" alt=""/>
            </div>
            <div className="name">京东白条</div>
            <div className="number">-10.3</div>
          </li>
        </ul>
      </div>
    )
  }
}