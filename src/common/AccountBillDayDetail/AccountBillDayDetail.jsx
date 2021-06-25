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
  margin: .1rem 0;
  height: .5rem;
  line-height: .5rem;
  display: flex;
  justify-content: space-around;
`

const Flag = styled.div`
  width: .6rem;
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
  width: 100%;
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
  width: 2rem;
  font-size: .3rem;
  color: #cc6060;
`

export default class AccountBillDayDetail extends React.Component {
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
            <Num>-11.20</Num>
          </ListItem>

          <ListItem>
            <Flag></Flag>
            <Desc>
              <Name>交通</Name>
              <Remark>滴滴</Remark>
            </Desc>
            <Num>-13.00</Num>
          </ListItem>

          <ListItem>
            <Flag></Flag>
            <Desc>
              <Name>交通</Name>
              <Remark>滴滴打车</Remark>
            </Desc>
            <Num>-11.20</Num>
          </ListItem>
        </ul>
      </Wrapper>
    )
  }
}
