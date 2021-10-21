import React from "react";
import Summary from "./Summary/Summary.jsx";
import AccountBillDayDetail from "../../common/AccountBillDayDetail/AccountBillDayDetail.jsx";
import styled from "styled-components";
import TopBackNav from "../../common/TopBackNav/TopBackNav.jsx";

const Wrapper = styled.div`
  padding: 1rem 0;
`;
export default class Bill extends React.Component {
  render() {
    return (
      <Wrapper>
        <TopBackNav>账单</TopBackNav>
        <Summary></Summary>
        <ul>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
        </ul>
      </Wrapper>
    );
  }
}
