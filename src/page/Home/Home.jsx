import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 3rem;
height: 1rem;
line-height: 1rem;
background-color: skyblue;
color: rebeccapurple;
text-align: center;
`
export default class Home extends React.Component {
  constructor () {
    super()
    this.name = 'home'
  }

  click () {
    console.log(1111)
  }

  render () {
    return (
      <div>
        <h2>Home</h2>
        <Wrapper onClick={this.click.bind(this)}>
          点击
        </Wrapper>
      </div>
    )
  }
}
