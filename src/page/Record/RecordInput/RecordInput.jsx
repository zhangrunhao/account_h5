import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 6.2rem;
  background-color: seashell;
`

const SumOfMoney = styled.div`
  background-color: rebeccapurple;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  font-size: .6rem;
  color: red;
  text-align: right;
`

const ToolList = styled.div`
  background-color: pink;
  display: flex;
  justify-content: space-around;
`

const Tool = styled.button`
`

const InputMain = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const InputButton = styled.div`
  width: 1.875rem;
  height: 1.16rem;
  line-height: 1.16rem;
  font-size: .4rem;
  text-align: center;
  background-color: lavenderblush;
`

const inputMainButtonArrayInfo = [1, 2, 3, "删除", 4, 5, 6, "-", 7, 8, 9,  "+", "再记", 0, ".", "保存"]
export default class RecordInput extends React.Component {
  render () {
    return (
      <Wrapper>
        <SumOfMoney>100</SumOfMoney>
        <ToolList>
          <Tool>账户</Tool>
          <Tool>今天</Tool>
          <Tool>备注</Tool>
        </ToolList>
        <InputMain>
          {
            inputMainButtonArrayInfo.map((v, i) => 
              <InputButton key={v}>{v}</InputButton>
            )
          }
        </InputMain>
      </Wrapper>
    )
  }
}
