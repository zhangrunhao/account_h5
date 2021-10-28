import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Summary from "./Summary.jsx";
import AccountList from "./account-list.jsx";
import History from "../../util/history.js";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import { AddOne } from "@icon-park/react";
import BottomTabBar from "../../common/bottom-tab-bar/bottom-tab-bar.jsx";

const Wrapper = styled.div`
  padding: 1rem 0.2rem;
`;

class Account extends React.Component {
  render() {
    return (
      <Wrapper>
        <NavBar
          right={[<AddOne key="0" size="26" onClick={() => History.push(this, "/account-edit/new")} />]}
        >
          账户
        </NavBar>
        <Summary></Summary>
        <AccountList></AccountList>
        <BottomTabBar active="account"></BottomTabBar>
      </Wrapper>
    );
  }
}

export default withRouter(Account);
