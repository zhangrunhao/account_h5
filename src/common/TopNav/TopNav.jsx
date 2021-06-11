import React from 'react'
import { 
  Left,
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
            {
              this.props.LeftIconComponents ?
              this.props.LeftIconComponents.map(c => {
                return (
                  <c.component {...c.props}></c.component>
                )
              }) :
              null
            }
        </Sub>
        <Sub>
          {
            this.props.children
          }
        </Sub>
        <Sub>
          {
            this.props.rightIconComponents ?
            this.props.rightIconComponents.map(c => {
              return (
                <c.component {...c.props}></c.component>
              )
            }) :
            null
          }
        </Sub>
      </Wrapper>
    )
  }
}

export default withRouter(TopNav)