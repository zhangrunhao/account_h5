import React from 'react'
import './BottomNav.less'
import {
  Home,
  AddOne,
  BankCard
} from '@icon-park/react'
import {
  withRouter
} from 'react-router-dom'
class BottomNav extends React.Component {
  constructor (props) {
    super(props)
  }
  handleHomeButtonClick () {
    this.props.history.push('/bill')
  }
  handleAddOneButtonClick () {
    this.props.history.push('/record')
  }
  handleBankCardButtonClick () {
    this.props.history.push('/balance')
  }
  render () {
    return (
      <div className="bottom-nav">
        <Home onClick={this.handleHomeButtonClick.bind(this)} theme="outline" size="30" fill="#333"/>
        <AddOne onClick={this.handleAddOneButtonClick.bind(this)} theme="outline" size="30" fill="#333"/>
        <BankCard onClick={this.handleBankCardButtonClick.bind(this)} theme="outline" size="30" fill="#333"/>
      </div>
    )
  }
}

export default withRouter(BottomNav)
