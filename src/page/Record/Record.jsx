import React from 'react'
import TopNav from '../../common/TopNav/TopNav.jsx'
import TypeChoose from './TypeChoose/TypeChoose.jsx'
import RecordInput from './RecordInput/RecordInput.jsx'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 1rem;
`
export default class Record extends React.Component {
  render () {
    return (
      <Wrapper>
        <TopNav back>记录</TopNav>
        <TypeChoose></TypeChoose>
        <RecordInput></RecordInput>
      </Wrapper>
    )
  }
}