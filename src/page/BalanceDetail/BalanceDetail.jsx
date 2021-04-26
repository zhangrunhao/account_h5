import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import NavTop from '../../common/TopNav/TopNav.jsx'
import AccountBillDayDetail from '../../common/AccountBillDayDetail/AccountBillDayDetail.jsx'
import styled from 'styled-components'

const Summary = styled.div`
  background-color: #fff;
  margin: .3rem;
  border-radius: .1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: .34rem;
`

class BalanceDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: ''
    }
  }
  componentDidMount () {
    const id = this.props.match.params.id
    this.setState({
      id
    })
  }
  render () {
    return (
      <>
        <NavTop back>账户id: {this.state.id}</NavTop>
        <Summary>余额: 200.00</Summary>
        <ul>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
        </ul>
      </>
    )
  }
}

export default withRouter(BalanceDetail)