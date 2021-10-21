import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Summary from "./Summary/Summary.jsx";
import AccountList from "./account-list/account-list.jsx";
import History from "../../util/history.js";
import { NavBar, Icon } from "antd-mobile";
import { Left, AddOne } from "@icon-park/react";

const Wrapper = styled.div`
  padding: 1rem .2rem;
`;

class Account extends React.Component {
  addClick() {
    History.push(this, "/account_edit/new");
  }

  render() {
    return (
      <Wrapper>
        <NavBar
          mode="light"
          icon={<Left size="26"/>}
          onLeftClick={() => History.back(this)}
          rightContent={[
            <AddOne key="0" size="26" onClick={() => this.addClick()}/>,
          ]}
        >
          账户
        </NavBar>
        <Summary></Summary>
        <AccountList></AccountList>
      </Wrapper>
    );
  }
}

export default withRouter(Account);
