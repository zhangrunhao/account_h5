import React from 'react'
import TopNav from '../../common/TopNav/TopNav.jsx'
import BottomNav from '../../common/BottomNav/BottomNav.jsx'
import Summary from './Summary/Summary.jsx'
import DayItem from './DayItem/DayItem.jsx'

export default class Bill extends React.Component {
  render () {
    return (
      <>
        <TopNav back>账单</TopNav>
        <Summary></Summary>
        <ul>
          <DayItem></DayItem>
          <DayItem></DayItem>
          <DayItem></DayItem>
          <DayItem></DayItem>
          <DayItem></DayItem>
          <DayItem></DayItem>
          <DayItem></DayItem>
          <DayItem></DayItem>
          <DayItem></DayItem>
        </ul>
        <BottomNav></BottomNav>
      </>
    )
  }
}
