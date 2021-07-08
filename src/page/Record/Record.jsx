import React from 'react'
import TopNav from '../../common/TopNav/TopNav.jsx'
import SortChoose from './SortChoose/SortChoose.jsx'
import RecordInput from './RecordInput/RecordInput.jsx'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: .8rem;
`
export default class Record extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sort: {}
    }
  }

  chooseItem (sort) {
    this.setState({
      sort
    })
  }

  render () {
    return (
      <Wrapper>
        <TopNav back>记录</TopNav>
        <SortChoose chooseItem={this.chooseItem.bind(this)}></SortChoose>
        <RecordInput sort={this.state.sort}></RecordInput>
      </Wrapper>
    )
  }
}
