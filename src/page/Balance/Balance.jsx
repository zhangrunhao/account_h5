import React from 'react'
import TopNav from '../../common/TopNav/TopNav.jsx'
import BottomNav from '../../common/BottomNav/BottomNav.jsx'
import Summary from './Summary/Summary.jsx'
import Account from './Account/Account.jsx'

export default class Balance extends React.Component {
  render () {
    return (
      <div className="balance">
        <TopNav back></TopNav>
        <Summary></Summary>
        <Account></Account>
        <BottomNav></BottomNav>
      </div>
    )
  }
}