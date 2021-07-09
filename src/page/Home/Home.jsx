/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`

const Item = styled.div`
height: 2rem;
background-color: aquamarine;
margin: .4rem 0;
`

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      item: {}
    }
  }

  handleClick (item) {
    this.setState({
      item
    })
  }

  render () {
    return (
      <Wrapper>
        <Show item={this.state.item}></Show>
        <Choose click={this.handleClick.bind(this)}></Choose>
      </Wrapper>
    )
  }
}

class Show extends React.Component {
  render () {
    return (
      <>
        <div>name: {this.props.item.name}</div>
        <div>age: {this.props.item.age}</div>
      </>
    )
  }
}

class Choose extends React.Component {
  handleClick (item) {
    this.props.click(item)
  }

  render () {
    return (
      <>
        <h1>A</h1>
        {
          [{
            id: 0,
            name: 'zhangrh',
            age: 12
          }, {
            id: 1,
            name: 'llll',
            age: 19
          }, {
            id: 2,
            name: 'ssss',
            age: 2
          }].map(v => {
            return (
              <Item key={v.id} onClick={this.handleClick.bind(this, v)}>
                <div>name: {v.name}</div>
                <div>age: {v.age}</div>
              </Item>
            )
          })
        }
      </>
    )
  }
}
