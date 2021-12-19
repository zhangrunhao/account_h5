import React from "react";
import styled from "styled-components";
import { NavBar } from "antd-mobile";
import PropTypes from 'prop-types'
import history from '../../history.js'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 100;
`;

export default class TopBackNav extends React.Component {
  render() {
    return (
      <Wrapper>
        <NavBar
          back="返回"
          onBack={() => history.back()}
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
