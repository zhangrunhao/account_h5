import React from 'react'
import './Summary.less'

export default class Summary extends React.Component {
  render () {
    return (
      <div className="summary">
        <div className="top">
          <div className="font-normal">2月份结余:</div>
          <div className="font-bold">12222</div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="font-normal">月收入:</div>
            <div className="font-bold">12222</div>
          </div>
          <div className="right">
            <div className="font-normal">月支出:</div>
            <div className="font-bold">12222</div>
          </div>
        </div>
      </div>
    )
  }
}