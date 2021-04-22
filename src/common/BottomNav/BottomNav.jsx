import React from 'react'
import styled from 'styled-components'
import TopNav from '../TopNav/TopNav.jsx'
import Drawer from '../../components/Drawer/Drawer.jsx'

const Wrapper = styled.div`
  width: 100%;
  height: .8rem;
  background-color: #fff;
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
`

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
    this.state = {
      drawerVisible: false
    }
  }
  handleHomeButtonClick () {
    this.props.history.push('/bill')
  }
  handleAddOneButtonClick () {
    // this.setState({
    //   drawerVisible: !this.state.drawerVisible
    // })
    this.props.history.push('/record')
  }
  handleBankCardButtonClick () {
    this.props.history.push('/balance')
  }
  render () {
    return (
      <>
        <Wrapper>
          <Home onClick={this.handleHomeButtonClick.bind(this)} theme="outline" size="30" fill="#333"/>
          <AddOne onClick={this.handleAddOneButtonClick.bind(this)} theme="outline" size="30" fill="#333"/>
          <BankCard onClick={this.handleBankCardButtonClick.bind(this)} theme="outline" size="30" fill="#333"/>
        </Wrapper>
        <Drawer visible={this.state.drawerVisible}>
          <p>Some Content ...</p>
          <p>Some Content ...</p>
          <p>Some Content ...`</p>
        </Drawer>
      </>
    )
  }
}

export default withRouter(BottomNav)
