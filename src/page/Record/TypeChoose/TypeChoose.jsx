import React from 'react'
import styled from 'styled-components'

const TypeChooseWrapper = styled.div`
 background-color: pink;
 display: flex;
 flex-wrap: wrap;
`

const TypeChooseItem = styled.div`
  background-color: skyblue;
  width: 1.5rem;
  height: .8rem;
`

const TypeIcon = styled.div`
  background-color: khaki;
  margin: 0 auto;
  width: .4rem;
  height: .4rem;
`

const TypeName = styled.div`
width: 100%;
padding-top: .06rem;
text-align: center;
`

export default class TypeChoose extends React.Component {
  render () {
    return (
      <TypeChooseWrapper>
        {
          Array(22).fill("三餐").map((v, i) => 
            <TypeChooseItem key={i}>
              <TypeIcon></TypeIcon>
              <TypeName>{v}</TypeName>
            </TypeChooseItem>
          )
        }
      </TypeChooseWrapper>
    )
  }
}
