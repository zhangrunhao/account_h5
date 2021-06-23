import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import styled from 'styled-components'
import TopNav from '../../common/TopNav/TopNav.jsx'
import {
  ArrowCircleRight
} from '@icon-park/react'

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
  render() {
    return (
      <Wrapper>
        <TopNav back>收支记录类型列表</TopNav>
        <List>

          <SingleItem>
            <Image src="https://scpic.chinaz.net/Files/pic/icons128/8125/q1.png" alt="" />
            <Name>零食</Name>
            <Icon>
              <ArrowCircleRight theme="outline" size="24" fill="#000000"/>
            </Icon>
          </SingleItem>

          <DoubleItem>
            <Image src="https://scpic.chinaz.net/Files/pic/icons128/8125/q1.png" alt="" />
            <Name>零食</Name>
            <Icon>
              <ArrowCircleRight theme="outline" size="24" fill="#000000"/>
            </Icon>
          </DoubleItem>

        </List>
      </Wrapper>
    )
  }
}

export default withRouter(RecordTypeList)