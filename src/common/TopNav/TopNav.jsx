import React from 'react'
import { 
  Left,
  SettingConfig,
  AddOne,
  ChartLine
} from '@icon-park/react';
import {
  withRouter
} from 'react-router-dom'

import History from '../../util/history.js'

import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: .8rem;
  background-color: #fff;
  padding: 0 .2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`

const Sub = styled.div`
  height: .8rem;
  display: flex;
  align-items: center;
`

class TopNav extends React.Component {
  constructor(props) {
    super(props)
  }
  handleBackClick() {
    History.back(this)
  }
  render() {
    return (
      <Wrapper>
        <Sub>
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
        </Sub>
        <Sub>
          {
            this.props.children
          }
        </Sub>
        <Sub>
          <ChartLine
            style={{display: this.props.chat ? 'block' : 'none'}}
            theme="outline"
            size="24"
            fill="#333"
          />
          <AddOne
            style={{display: this.props.add ? 'block' : 'none'}}
            onClick={() => this.props.addClick()}
            theme="outline"
            size="24"
            fill="#333"
          />
        </Sub>
      </Wrapper>
    )
  }
}

export default withRouter(TopNav)