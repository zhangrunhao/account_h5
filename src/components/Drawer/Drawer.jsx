import React from 'react'
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components'
import {
  getWinWidth,
  getWinHeight
} from '../../util/util.js'


const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${getWinWidth()}px;
  height: ${getWinHeight()}px;
  opacity: .8;
  background-color: skyblue;
  z-index: 100;
`

export default class Drawer extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <CSSTransition classNames="fadeInRight" timeout={300} in={this.props.visible} unmountOnExit>
        <Wrapper>
          {
            this.props.children
          }
        </Wrapper>
      </CSSTransition>
    )
  }
}
