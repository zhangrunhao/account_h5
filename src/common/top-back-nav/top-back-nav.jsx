import React from "react";
import styled from "styled-components";
import { NavBar } from "antd-mobile";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 100;
`;

export default (props) => {
  const history = useHistory();
  return (
    <Wrapper>
      <NavBar back="返回" onBack={() => history.goBack()} right={props.right}>
        {props.children}
      </NavBar>
    </Wrapper>
  );
};
