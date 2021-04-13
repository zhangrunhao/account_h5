import React from 'react'
import TopNav from '../../common/TopNav/TopNav.jsx'
import Summary from './Summary/Summary.jsx'
import DayItem from './DayItem/DayItem.jsx'

export default class Bill extends React.Component {
  render () {
    return (
      <div className="bill">
        <TopNav></TopNav>
        <Summary></Summary>
        <ul className="bill-ul">
          <DayItem></DayItem>
          <DayItem></DayItem>
          <DayItem></DayItem>
        </ul>
      </div>
    )
  }
}