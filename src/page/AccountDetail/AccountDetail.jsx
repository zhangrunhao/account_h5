import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import NavTop from '../../common/TopNav/TopNav.jsx'
import AccountBillDayDetail from '../../common/AccountBillDayDetail/AccountBillDayDetail.jsx'
import styled from 'styled-components'
import History from '../../util/history.js'
import {
  deleteAccount
} from '../../api/account'
const Summary = styled.div`
  background-color: #fff;
  margin: .3rem;
  border-radius: .1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: .34rem;
`

const Wrapper = styled.div`
  padding-top: 1rem;
`

class AccountDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: ''
    }
  }
  componentDidMount () {
    const id = History.getParam(this, 'id')
    this.setState({
      id
    })
  }
  deleteClick () {
    // deleteAccount(this.state.id)
  }
  editClick () {
    const path = `/account_edit/${this.state.id}`
    History.push(this, path)
  }
  render () {
    return (
      <Wrapper>
        <NavTop 
          back
          delete
          edit
          deleteClick={this.deleteClick.bind(this)}
          editClick={this.editClick.bind(this)}
        >
          账户id: {this.state.id}
        </NavTop>
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
      </Wrapper>
    )
  }
}

export default withRouter(AccountDetail)