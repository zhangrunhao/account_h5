import React from 'react'
import TopNav from '../../common/TopNav/TopNav.jsx'
import TypeChoose from './TypeChoose/TypeChoose.jsx'
import RecordInput from './RecordInput/RecordInput.jsx'
export default class Record extends React.Component {
  render () {
    return (
      <>
        <TopNav back></TopNav>
        <TypeChoose></TypeChoose>
        <RecordInput></RecordInput>
      </>
    )
  }
}