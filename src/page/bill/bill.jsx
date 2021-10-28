import React from "react";
// import Summary from "./Summary/Summary.jsx";
import AccountBillDayDetail from "../../common/account-bill-day-detail/account-bill-day-detail.jsx";
import styled from "styled-components";
import TopBackNav from "../../common/top-back-nav/top-back-nav.jsx";
import BottomTabBar from "../../common/bottom-tab-bar/bottom-tab-bar.jsx";
import { getRecordList } from '../../api/record.js'
import { recordToList } from '../../util/record.js'

const Wrapper = styled.div`
  padding: 1rem 0;
`;
export default class Bill extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recordList: []
    }
  }
  componentDidMount() {
    getRecordList().then(r => {
      this.setState({
        recordList: recordToList(r.data)
      })
    })
  }
  render() {
    return (
      <Wrapper>
        <TopBackNav>账单</TopBackNav>
        {/* <Summary></Summary> */}
        <ul>
          {
            this.state.recordList.map(i => 
              <AccountBillDayDetail key={i.title} info={i}></AccountBillDayDetail>
            )
          }
        </ul>
        <BottomTabBar key="bill"></BottomTabBar>
      </Wrapper>
    );
  }
}
