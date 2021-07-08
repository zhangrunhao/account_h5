import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  colorTextBase,
  fillBase,
  fillTap
} from '../../../style/Styles.js'
import Button from '../../../components/Button/Button.jsx'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 6.2rem;
`

const RecordResult = styled.div`
  width: 100%;
  height: 1rem;
`

const SortIcon = styled.img`
  float: left;
  margin: .2rem .1rem 0 .1rem;
  width: .6rem;
  height: .6rem;
`

const SortName = styled.div`
  float: left;
  height: 1rem;
  line-height: 1rem;
`

const ResultMoney = styled.div`
  float: right;
  height: 1rem;
  line-height: 1rem;
  font-size: .6rem;
`

const ToolList = styled.div`
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
  color: ${colorTextBase};
  background-color: ${fillBase};
  :active {
    background-color: ${fillTap};
  }
`

const inputMainButtonArrayInfo = [1, 2, 3, '删除', 4, 5, 6, '-', 7, 8, 9, '+', '再记', 0, '.', '保存']
export default class RecordInput extends React.Component {
  render () {
    return (
      <Wrapper>
        <RecordResult>
          <SortIcon src={this.props.sort.icon}></SortIcon>
          <SortName>{this.props.sort.name}</SortName>
          <ResultMoney>100</ResultMoney>
        </RecordResult>
        <ToolList>
          <Button type="primary" size="small" inline>账户</Button>
          <Button type="warning" size="small" inline>2020/07/06</Button>
          <Button size="small" inline>备注</Button>
        </ToolList>
        <InputMain>
          {
            inputMainButtonArrayInfo.map(v =>
              <InputButton key={v}>{v}</InputButton>
            )
          }
        </InputMain>
      </Wrapper>
    )
  }
}

RecordInput.propTypes = {
  sort: PropTypes.object
}
