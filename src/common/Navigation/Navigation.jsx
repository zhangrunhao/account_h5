import React from 'react'
import {
  isBoolean
} from 'lodash'
import {
  withRouter
} from 'react-router-dom'
import { Left } from '@icon-park/react';
import './Navigation.less'

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      back: isBoolean(props.back) ? props.back : false,
      title: props.title || ""
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.history.goBack()
  }

  render () {
    return (
      <div className="navigation">
        {
          this.state.back &&
          <div className="icon_back" onClick={this.handleClick}>
            <Left size="30" />
          </div>
        }
        <div className="title">{this.state.title}</div>
      </div>
    )
  }
}

export default withRouter(Navigation)