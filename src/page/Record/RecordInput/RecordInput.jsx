import React from 'react'

export default class RecordInput extends React.Component {
  render () {
    return (
      <div className="record-input">
        {/* 总金额 */}
        <div className="num">0</div>
        {/* 工具列表 */}
        <div className="tool-list">
          <button className="choose-account">账户</button>
          <button className="choose-date">今天11:48</button>
          <button className="remark-input">备注</button>
        </div>
        {/* 输入区 */}
        <div className="input-main">
          输入区
          <ul className="number-list">
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <ul className="button-list">
            <li>删除</li>
            <li>+</li>
            <li>-</li>
            <li>保存</li>
          </ul>
        </div>
      </div>
    )
  }
}
