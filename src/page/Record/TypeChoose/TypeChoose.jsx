import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'
import BScroll from '@better-scroll/core'
import History from '../../../util/history.js'

import {
  getStyleValue,
  getWinHeight
} from '../../../util/util.js'
import { withRouter } from 'react-router-dom'

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

const EditTypeButton = styled.div`
  background-color: skyblue;
  border-radius: 50%;
  width: .8rem;
  height: .8rem;
  line-height: .8rem;
  text-align: center;
  color: purple;
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

const TestWrapper = styled.div`
width: 3rem;
height: 1rem;
background-color: skyblue;
`

class TypeChoose extends React.Component {
  componentDidMount() {
    new BScroll(ReactDom.findDOMNode(this), {
      click: true
    })
  }
  editTypeButtonClick() {
    const path = `/record_type_list`
    History.push(this, path)
  }
  render () {
    return (
      <TypeChooseWrapper>
        <ScrollWrapper>
          {
            Array(22).fill("三餐").map((v, i) => 
              <TypeChooseItem key={i}>
                <TypeIcon></TypeIcon>
                <TypeName>{v}</TypeName>
              </TypeChooseItem>
            )
          }
          <EditTypeButton onClick={this.editTypeButtonClick.bind(this)}>
            编辑
          </EditTypeButton>
        </ScrollWrapper>
      </TypeChooseWrapper>
    )
  }
}

export default withRouter(TypeChoose)
