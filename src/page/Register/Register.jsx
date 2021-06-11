import React from 'react'
import styled from 'styled-components'
import NavTop from '../../common/TopNav/TopNav.jsx'

const Wrapper = styled.div`
  padding-top: 1rem;
`
export default class Register extends React.Component {

  constructor(props) {
    super(props)
  }
  render () {
    return (
      <Wrapper>
        <NavTop back>注册</NavTop>
      </Wrapper>
    )
  }
}
