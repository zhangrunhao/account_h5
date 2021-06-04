import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'
import {
  isFunction
} from 'loadsh'
import {
  Success,
  Error,
  EmotionUnhappy,
  Loading
} from '@icon-park/react'

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: 20;
  width: 2.5rem;
  background-color: gray;
  border-radius: .1rem;
  padding: .3rem;
`
const IconWrapper = styled.div`
  text-align: center;
`
const ContentWrapper = styled.div`
  color: #fff;
  width: 100%;
  text-align: center;
  font-size: .34rem;
  line-height: .5rem;
`

class Toast extends React.Component {
  constructor (props) {
    super(props)
    this.set(props)
  }
  componentWillUnmount () {
    isFunction(this.onClose) && this.onClose()
  }
  getTypeIcon () {
    const types = {
      icon: '',
      success: <Success size="40" fill="#fff"></Success>,
      fail: <Error size="40" fill="#fff"></Error>,
      offline: <EmotionUnhappy size="40" fill="#fff"></EmotionUnhappy>,
      loading: <Loading size="40" fill="#fff"></Loading>
    }
    return types[this.type]
  }
  set (params) {
    params = params || {}
    this.type = params.type || 'info'
    this.content = params.content || ''
    this.duration = params.duration || 1000
    this.onClose = (isFunction(params.onClose) && params.onClose) || new Function()
  }
  render () {
    return (
      <>
      {
        <Wrapper>
          <IconWrapper>
            {
              this.getTypeIcon()
            }
          </IconWrapper>
          <ContentWrapper>
            {
              this.content || ''
            }
          </ContentWrapper>
        </Wrapper>
      }
      </>
    )
  }
}
let timer
let dom
function show (content, duration, type, onClose) {
  timer && clearTimeout(timer)
  dom && hide()

  dom = document.createElement('div')
  document.body.appendChild(dom)
  ReactDom.render(
    <Toast 
      content={content}
      duration={duration}
      type={type}
      onClose={onClose}
    ></Toast>,
    dom
  )

  timer = setTimeout(hide, duration || 2000)

  function hide () {
    ReactDom.unmountComponentAtNode(dom)
    document.body.removeChild(dom)
    dom = null
  }
}

function info (content, duration, onClose) { // 普通信息
  return show(content, duration, 'info', onClose)
}

function success (content, duration, onClose) { // 成功
  return show(content, duration, 'success', onClose)
}

function fail (content, duration, onClose) { // 失败提示
  return show(content, duration, 'fail', onClose)
}

function offline (content, duration, onClose) { // 离线
  return show(content, duration, 'offline', onClose)
}

function loading (content, duration, onClose) { // 加载
  return show(content, duration, 'loading', onClose)
}


export default {
  info,
  success,
  fail,
  offline,
  loading
}
