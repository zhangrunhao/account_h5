import React from 'react'
import TopNav from '../../common/TopNav/TopNav.jsx'
import BottomNav from '../../common/BottomNav/BottomNav.jsx'
import Summary from './Summary/Summary.jsx'
import DayItem from './DayItem/DayItem.jsx'

export default class Bill extends React.Component {
  render () {
    return (
      <div>
        <TopNav back middleSlot={Test}></TopNav>
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
      </div>
    )
  }
}


class Test extends React.Component {
  render () {
    return <h1>Test Component</h1>
  }
}