import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { List, Image } from "antd-mobile";
import { AddOne } from "@icon-park/react";

import History from "../../util/history.js";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import BottomTabBar from "../../common/bottom-tab-bar/bottom-tab-bar.jsx";
import { getAccountList } from "../../api/account.js";

const Wrapper = styled.div`
  padding: 1rem 0;
`;

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountList: [],
    };
  }
  componentDidMount() {
    getAccountList().then((data) => {
      this.setState({
        accountList: data.data,
      });
    });
  }

  handleAccountClick(account) {
    const path = `/account-detail/${account.id}`;
    History.push(this, path);
  }
  render() {
    return (
      <Wrapper>
        <NavBar
          right={[
            <AddOne
              key="0"
              size="26"
              onClick={() => History.push(this, "/account-edit/new")}
            />,
          ]}
        >
          账户
        </NavBar>

        <List>
          {this.state.accountList.map((v) => (
            <List.Item
              key={v.id}
              onClick={this.handleAccountClick.bind(this, v)}
              prefix={
                <Image src={v.icon} fit="cover" width={40} height={40}></Image>
              }
              title={v.name}
              extra={v.money}
            ></List.Item>
          ))}
        </List>
        <BottomTabBar active="account"></BottomTabBar>
      </Wrapper>
    );
  }
}

export default withRouter(Account);
