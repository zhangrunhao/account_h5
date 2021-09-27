import React from "react";
import { Left } from "@icon-park/react";
import { withRouter } from "react-router-dom";

import History from "../../util/history.js";

import styled from "styled-components";
import { NavBar } from "antd-mobile";

const Wrapper = styled.div``;

class TopBackNav extends React.Component {
  handleBackClick() {
    History.back(this);
  }

  render() {
    return (
      <Wrapper>
        <NavBar
          mode="light"
          icon={<Left size="26" />}
          onLeftClick={() => History.back(this)}
        >
          {this.props.children}
        </NavBar>
      </Wrapper>
    );
  }
}

export default withRouter(TopBackNav);
