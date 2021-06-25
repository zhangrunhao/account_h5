import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'

function title() {
  const Wrapper = styled.div`
    height: .3rem;
  `
  return (
    <Wrapper>
      Warn:
    </Wrapper>
  )
}

function message() {
  const Wrapper = styled.div`
    height: .7rem;
    line-height: .7rem;
    font-size: .3rem;
    color: red;
  `
  return (
    <Wrapper>
      Are you sure?
    </Wrapper>
  )
}

function footer() {
  return (
    <div>
      <button>取消</button>
      <button>确定</button>
    </div>
  )
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: #333;
  opacity: .3;
`

const MainWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  background-color: #fff;
  padding: .2rem;
  border-radius: .05rem;
`

const Title = styled.div`
`

const Message = styled.div`
`

const Footer = styled.div`
`

export default function alert(params) {
  params = params || {}
  params.title = params.title || title
  params.message = params.message || message
  params.footer = params.footer || footer

  const div = document.createElement('div')
  document.body.appendChild(div)

  function close() {
    ReactDom.unmountComponentAtNode(div)
    if (div && div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }

  ReactDom.render(
    <Wrapper>
      <BackgroundWrapper onClick={close}></BackgroundWrapper>
      <MainWrapper>
        <Title>{params.title()}</Title>
        <Message>{params.message()}</Message>
        <Footer>{params.footer()}</Footer>
      </MainWrapper>
    </Wrapper>,
    div
  )
  return {
    close
  }
}
