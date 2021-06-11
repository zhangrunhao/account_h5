import React from 'react'
import styled from 'styled-components'
import {
  withRouter
} from 'react-router-dom'


import Summary from './Summary/Summary.jsx'
import AccountList from './AccountList/AccountList.jsx'

import TopNav from '../../common/TopNav/TopNav.jsx'
import BottomNav from '../../common/BottomNav/BottomNav.jsx'
import History from '../../util/history.js'

const Wrapper = styled.div`
  padding: 1rem .3rem;
`

class Account extends React.Component {
  addClick () {
    History.push(this, '/account_edit/new')
  }
  render () {
    return (
      <Wrapper>
        <TopNav
          back
          add
          addClick={this.addClick.bind(this)}
        >
          账户
        </TopNav>
        <Summary></Summary>
        <AccountList></AccountList>
        <BottomNav></BottomNav>
      </Wrapper>
    )
  }
}

export default withRouter(Account)