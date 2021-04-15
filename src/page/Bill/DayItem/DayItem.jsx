import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fff;
  margin: .3rem;
  border-radius: .1rem;
`

const Title = styled.div`
  height: .5rem;
  line-height: .5rem;
  display: flex;
  justify-content: space-around;
`

const ListItem = styled.li`
  height: .5rem;
  line-height: .5rem;
  display: flex;
  justify-content: space-around;
`

const Flag = styled.div`
  flex-grow: 1;
  position: relative;
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    display: block;
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    background-color: #cc6060;
  }
`

const Desc = styled.div`
  flex-grow: 9;
  font-size: .22rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Name = styled.div`
  height: .24rem;
  line-height: .24rem;
`

const Remark = styled.div`
  color: #a7a7a7;
  height: .24rem;
  line-height: .24rem;
`

const Num = styled.div`
  flex-grow: 2;
  font-size: .3rem;
  color: #cc6060;
`

export default class DayItem extends React.Component {
  render () {
    return (
      <Wrapper>
        <Title>
          <div>02.19 今天</div>
          <div>支:0.33 收:222</div>
        </Title>
        <ul>
          <ListItem>
            <Flag></Flag>
            <Desc>
              <Name>三餐</Name>
              <Remark>鸡蛋灌饼</Remark>
            </Desc>
            <Num>-.33</Num>
          </ListItem>
        </ul>
      </Wrapper>
    )
  }
}