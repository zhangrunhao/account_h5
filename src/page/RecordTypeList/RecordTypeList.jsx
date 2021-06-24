import React from 'react'
import styled from 'styled-components'
import {
  withRouter
} from 'react-router-dom'
import {
  AddOne,
  ArrowRight
} from '@icon-park/react'

import TopNav from '../../common/TopNav/TopNav.jsx'
import History from '../../util/history.js'

const Wrapper = styled.div`
padding-top: .8rem;
`

const List = styled.ul`
width: 100%;
`

const Item = styled.li`
width: 100%;
height: 1rem;
display: flex;
`

const SingleItem = styled(Item)`
background-color: aliceblue;
`

const DoubleItem = styled(Item)`
background-color: bisque;
`

const Image = styled.img`
width: 1rem;
height: 1rem;
flex: 0 0 1rem;
`

const Name = styled.div`
height: 1rem;
line-height: 1rem;
flex: 1 1 auto;
`

const Icon = styled.div`
width: 1rem;
flex: 0 0 1rem;
display: flex;
justify-content: center;
align-items: center;
`

class RecordTypeList extends React.Component {
  arrowRightClick(id) {
    const path = `/record_type_edit/${id}`
    History.push(this, path)
  }
  addClick() {
    const path = `/record_type_edit/new`
    History.push(this, path)
  }
  render() {
    return (
      <Wrapper>
        <TopNav
          back
          rightIconComponents={[
            {
              component: AddOne,
              props: {
                key: 'add',
                onClick: this.addClick.bind(this),
                theme: 'outline',
                size: '24',
                fill: '#333'
              }
            }
          ]}
        >
          收支记录类型列表
        </TopNav>
        <List>
          {
            new Array(10).fill({
              icon: 'https://scpic.chinaz.net/Files/pic/icons128/8125/q1.png',
              name: '零食'
            }).map((v, i) => {
              const CompItem = (i % 2 == 0) ? DoubleItem : SingleItem
              return (
                <CompItem key={i}>
                  <Image src={v.icon} alt="" />
                  <Name>{v.name}</Name>
                  <Icon>
                    <ArrowRight onClick={this.arrowRightClick.bind(this, i)} theme="outline" size="24" fill="#000000"/>
                  </Icon>
                </CompItem>
              )
            })
          }
        </List>
      </Wrapper>
    )
  }
}

export default withRouter(RecordTypeList)