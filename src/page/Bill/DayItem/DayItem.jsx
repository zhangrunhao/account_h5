import React from 'react'
import './DayItem.less'
export default class DayItem extends React.Component {
  render () {
    return (
      <div className="day-item">
        <div className="title">
          <div className="left">02.19 今天</div>
          <div className="right">支:0.33 收:222</div>
        </div>
        <ul className="day-item-ul">
          <li>
            <div className="flag"></div>
            <div className="desc">
              <div className="name">三餐</div>
              <div className="remark">鸡蛋灌饼</div>
            </div>
            <div className="num">-.33</div>
          </li>

          <li>
            <div className="flag"></div>
            <div className="desc">
              <div className="name">三餐</div>
              <div className="remark">鸡蛋灌饼</div>
            </div>
            <div className="num">-.33</div>
          </li>
        </ul>
      </div>
    )
  }
}