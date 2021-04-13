import React from 'react'
import { 
  Left,
  SettingConfig,
  AddOne,
  ChartLine
} from '@icon-park/react';
import './TopNav.less'

export default class TopNav extends React.Component {
  constructor(props) {
    super(props)
  }
  handleBackClick() {
    console.log('back click happened')
  }
  render() {
    const MiddleSlot = this.props.middleSlot
    console.log(this.props)
    return (
      <div className="top-nav">
        <div className="left">
          <Left
            style={{display: this.props.back ? 'block' : 'none'}}
            onClick={this.handleBackClick.bind(this)}
            theme="outline"
            size="24"
            fill="#333"/>
          <SettingConfig
            style={{display: this.props.setting ? 'block' : 'none'}}
            theme="outline"
            size="24"
            fill="#333"/>
        </div>
        <div className="middle">
          <MiddleSlot></MiddleSlot>
        </div>
        <div className="right">
          <ChartLine
            style={{display: this.props.chat ? 'block' : 'none'}}
            theme="outline"
            size="24"
            fill="#333"
          />
          <AddOne
            style={{display: this.props.add ? 'block' : 'none'}}
            theme="outline"
            size="24" 
            fill="#333"
          />
        </div>
      </div>
    )
  }
}