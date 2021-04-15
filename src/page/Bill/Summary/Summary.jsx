import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: .05rem;
  box-sizing: border-box;
  margin: .2rem;
  padding: .2rem;
  text-align: center;
`

const FontNormal = styled.div`
  color: #a5a5a5;
`

const FontBold = styled.div`
  margin-top: .1rem;
  font-size: large;
  color: #333030;
  font-weight: 700;
`

const Bottom = styled.div`
  margin-top: .3rem;
  display: flex;
  justify-content: space-between;
`

export default class Summary extends React.Component {
  render () {
    return (
      <Wrapper>
        <div>
          <FontNormal>2月份结余:</FontNormal>
          <FontBold>12222</FontBold>
        </div>
        <Bottom>
          <div>
            <FontNormal>月收入:</FontNormal>
            <FontBold>12222</FontBold>
          </div>
          <div>
            <FontNormal>月支出:</FontNormal>
            <FontBold>12222</FontBold>
          </div>
        </Bottom>
      </Wrapper>
    )
  }
}
