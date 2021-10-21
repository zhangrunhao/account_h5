import React from "react";
import styled from "styled-components";
import { TabBar } from "antd-mobile";
import { Home, Add, BankCard } from "@icon-park/react";
import history from "../../util/history";
import { withRouter } from "react-router";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: pink;
  width: 100%;
  height: 1rem;
  color: red;
`;

class BottomTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "account",
    };
  }
  render() {
    return (
      <Wrapper>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="账单"
            key="bill"
            icon={<Home size="20"></Home>}
            selectedIcon={<Home size="20"></Home>}
            selected={this.props.selectedTab === "bill"}
            onPress={() => {
              history.push(this, "bill");
            }}
          ></TabBar.Item>
          <TabBar.Item
            title="添加"
            key="record"
            icon={<Add size="20"></Add>}
            onPress={() => {
              history.push(this, "record");
            }}
          ></TabBar.Item>
          <TabBar.Item
            title="账户"
            key="account"
            icon={<BankCard size="20"></BankCard>}
            selectedIcon={<BankCard size="20"></BankCard>}
            selected={this.props.selectedTab === "account"}
            onPress={() => {
              history.push(this, "account");
            }}
          ></TabBar.Item>
        </TabBar>
      </Wrapper>
    );
  }
}

export default withRouter(BottomTabBar);
