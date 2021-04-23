import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'
import BScroll from '@better-scroll/core'

import {
  getStyleValue,
  getWinHeight
} from '../../../util/util.js'

const htmlFontSize = parseFloat(getStyleValue(document.querySelector('html'), 'font-size'))
const winHeight = getWinHeight()


const TypeChooseWrapper = styled.div`
 background-color: pink;
 height: ${winHeight - htmlFontSize * (6.2 + 0.8)}px;
 overflow: hidden;
`

const ScrollWrapper = styled.div`
 display: flex;
 flex-wrap: wrap;
`

const TypeChooseItem = styled.div`
  background-color: skyblue;
  width: 1.5rem;
  height: .8rem;
`

const TypeIcon = styled.div`
  background-color: khaki;
  margin: 0 auto;
  width: .4rem;
  height: .4rem;
`

const TypeName = styled.div`
width: 100%;
padding-top: .06rem;
text-align: center;
`

class TypeChoose extends React.Component {
  componentDidMount () {
    new BScroll(ReactDom.findDOMNode(this))
  }
  render () {
    return (
      <TypeChooseWrapper>
        <ScrollWrapper>
          {
            Array(223).fill("三餐").map((v, i) => 
              <TypeChooseItem key={i}>
                <TypeIcon></TypeIcon>
                <TypeName>{v}</TypeName>
              </TypeChooseItem>
            )
          }
        </ScrollWrapper>
      </TypeChooseWrapper>
    )
  }
}

export default TypeChoose
