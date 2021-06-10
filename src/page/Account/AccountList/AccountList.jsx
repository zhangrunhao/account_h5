import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'

import History from '../../../util/history.js'

import {
  getAccountList
} from '../../../api/account.js'

const Wrapper = styled.div`
  background-color: #fff;
  margin: .2rem;
  padding: .2rem 0;
  box-sizing: border-box;
  border-radius: .1rem;
`

const Title = styled.div`
margin: 0 0 .2rem .2rem;
font-size: .28rem;
font-weight: 500;
`

const List = styled.ul`
`

const Item = styled.li`
  border-top: solid .05rem grey;
  padding-left: .2rem;
  height: .8rem;
  box-sizing: border-box;
  line-height: .7rem;
  display: flex;
  &:last-child{
    border-bottom: solid .05rem grey;
  }
`

const Icon = styled.div`
  order: -1;
  flex: 0 1 .4rem;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Name = styled.div`
  flex-grow: 1;
  margin-left: .15rem;
`

const Number = styled.div`
  flex: 0 1 .2rem;
  margin-right: .15rem;
`

class AccountList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      accountList: []
    }
  }
  componentDidMount () {
    getAccountList().then(data => {
      this.setState({
        accountList: data.data
      })
    })
  }
  handleAccountClick (account) {
    const path = `/account_detail/${account.accountId}`
    History.push(this, path)
  }
  render () {
    return (
      <Wrapper>
        <Title>账户列表</Title>
        <List>
          {
            this.state.accountList.map((i) => 
              <Item key={i.accountId} onClick={this.handleAccountClick.bind(this, i)}>
                <Icon>
                  <img src={i.icon} alt=""/>
                </Icon>
                <Name>{i.name}</Name>
                <Number>-20.30</Number>
              </Item>
            )
          }
        </List>
      </Wrapper>
    )
  }
}

export default withRouter(AccountList)