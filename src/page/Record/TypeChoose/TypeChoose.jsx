import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'
import BScroll from '@better-scroll/core'
import {
  withRouter
} from 'react-router-dom'

import History from '../../../util/history.js'
import {
  getStyleValue,
  getWinHeight
} from '../../../util/util.js'
import {
  getRecordSortList
} from '../../../api/recordSort'

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

const TypeIcon = styled.img`
display: block;
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
  constructor(props) {
    super(props)
    this.state = {
      sortList: []
    }
  }
  componentDidMount() {
    new BScroll(ReactDom.findDOMNode(this), {
      click: true
    })
    getRecordSortList().then(r => {
      this.setState({
        sortList: r.data
      })
    })
  }
  editTypeButtonClick() {
    const path = `/record_sort_list`
    History.push(this, path)
  }
  render () {
    return (
      <TypeChooseWrapper>
        <ScrollWrapper>
          {
            this.state.sortList.map(v => 
              <TypeChooseItem key={v.recordSortId}>
                <TypeIcon src={v.icon}></TypeIcon>
                <TypeName>{v.name}</TypeName>
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
