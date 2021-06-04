import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'

import History from '../../../util/history.js'

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

class Account extends React.Component {
  handleAccountClick (id) {
    const path = `/balance_detail/${id}`
    History.push(this, path)
  }
  render () {
    return (
      <Wrapper>
        <Title>账户列表</Title>
        <List>
          {
            Array(20).fill("aaa").map(() => 
              <Item key={Math.random()} onClick={this.handleAccountClick.bind(this, Math.random())}>
                <Icon>
                  <img src="http://pic.616pic.com/ys_img/00/03/78/04RotuWM2Y.jpg" alt=""/>
                </Icon>
                <Name>蚂蚁花呗</Name>
                <Number>-20.30</Number>
              </Item>
            )
          }
        </List>
      </Wrapper>
    )
  }
}

export default withRouter(Account)