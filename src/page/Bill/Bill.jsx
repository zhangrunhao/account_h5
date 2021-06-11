import React from 'react'
import TopNav from '../../common/TopNav/TopNav.jsx'
import BottomNav from '../../common/BottomNav/BottomNav.jsx'
import Summary from './Summary/Summary.jsx'
import AccountBillDayDetail from '../../common/AccountBillDayDetail/AccountBillDayDetail.jsx'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 1rem 0;
`
export default class Bill extends React.Component {
  render () {
    return (
      <Wrapper>
        <TopNav back>账单</TopNav>
        <Summary></Summary>
        <ul>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
        </ul>
        <BottomNav></BottomNav>
      </Wrapper>
    )
  }
}
