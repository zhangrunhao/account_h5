import React from 'react'

export default class Summary extends React.Component {
  render () {
    return (
      <div className="summary">
        <div className="total">
          <div>净资产: 200.00</div>
          <div>总资产: 100</div>
          <div>总借入: 111</div>
        </div>
        <div className="other">
          <div>总借入: 0.00</div>
          <div>总借出: 0.00</div>
        </div>
      </div>
    )
  }
}
