import React from 'react'
import styled from 'styled-components'
import {
  withRouter
} from 'react-router-dom'


import Summary from './Summary/Summary.jsx'
import Account from './Account/Account.jsx'

import TopNav from '../../common/TopNav/TopNav.jsx'
import BottomNav from '../../common/BottomNav/BottomNav.jsx'
import History from '../../util/history.js'

const Wrapper = styled.div`
`

class Balance extends React.Component {
  addClick () {
    History.push(this, '/balance_edit/new')
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
        <Account></Account>
        <BottomNav></BottomNav>
      </Wrapper>
    )
  }
}

export default withRouter(Balance)