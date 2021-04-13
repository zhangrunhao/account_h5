import React from 'react'
import Summary from './Summary/Summary.jsx'
import Account from './Account/Account.jsx'

export default class Balance extends React.Component {
  render () {
    return (
      <div className="balance">
        <Summary></Summary>
        <Account></Account>
      </div>
    )
  }
}