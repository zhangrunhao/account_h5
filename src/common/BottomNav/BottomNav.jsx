import React from "react";
import styled from "styled-components";
import { Home, AddOne, BankCard } from "@icon-park/react";
import { withRouter } from "react-router-dom";

import History from "../../util/history";

const Wrapper = styled.div`
  width: 100%;
  height: 0.8rem;
  background-color: #fff;
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
class BottomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerVisible: false,
    };
  }

  handleHomeButtonClick() {
    History.push(this, "/bill");
  }

  handleAddOneButtonClick() {
    // this.setState({
    //   drawerVisible: !this.state.drawerVisible
    // })
    History.push(this, "/record");
  }

  handleBankCardButtonClick() {
    History.push(this, "/account");
  }

  render() {
    return (
      <>
        <Wrapper>
          <Home
            onClick={this.handleHomeButtonClick.bind(this)}
            theme="outline"
            size="30"
            fill="#333"
          />
          <AddOne
            onClick={this.handleAddOneButtonClick.bind(this)}
            theme="outline"
            size="30"
            fill="#333"
          />
          <BankCard
            onClick={this.handleBankCardButtonClick.bind(this)}
            theme="outline"
            size="30"
            fill="#333"
          />
        </Wrapper>
      </>
    );
  }
}

export default withRouter(BottomNav);
