import React from "react";
import { withRouter } from "react-router-dom";
import History from "../../util/history.js";
import styled from "styled-components";
import { NavBar } from "antd-mobile";
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 100;
`;

class TopBackNav extends React.Component {
  render() {
    return (
      <Wrapper>
        <NavBar
          back="返回"
          onBack={() => History.back(this)}
          right={this.props.right}
        >
          {this.props.children}
        </NavBar>
      </Wrapper>
    );
  }
}

TopBackNav.prototypes = {
  right: PropTypes.elementType
}

export default withRouter(TopBackNav);
