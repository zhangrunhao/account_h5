import React from "react";
import styled from "styled-components";
import { Home, Add, BankCard } from "@icon-park/react";
import history from "../../util/history";
import { withRouter } from "react-router";
import { TabBar } from "antd-mobile";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  background: #fff;
`;

const tabs = [
  {
    key: "bill",
    title: "账单",
    icon: <Home size="20"></Home>,
  },
  {
    key: "trade/new",
    title: "记一笔",
    icon: <Add size="20"></Add>,
  },
  {
    key: "account",
    title: "资产",
    icon: <BankCard size="20"></BankCard>,
  },
];

class BottomTabBar extends React.Component {
  render() {
    return (
      <Wrapper>
        <TabBar
          defaultActiveKey={this.props.active}
          onChange={(key) => {
            history.push(this, key);
          }}
        >
          {tabs.map((tab) => (
            <TabBar.Item
              title={tab.title}
              key={tab.key}
              icon={tab.icon}
            ></TabBar.Item>
          ))}
        </TabBar>
      </Wrapper>
    );
  }
}

BottomTabBar.propTypes = {
  active: PropTypes.string.isRequired,
};

export default withRouter(BottomTabBar);
