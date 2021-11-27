import { AddOne } from "@icon-park/react";
import { List } from "antd-mobile";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";

const Wrapper = styled.div`
  padding-top: 1rem;
`;

export default (props) => {
  const type = props.match.params["type"];
  const [tradeList, setTradeList] = useState([]);
  const history = useHistory();
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <NavBar
        right={
          <AddOne
            key="0"
            size="26"
            onClick={() => history.push(`/borrow-lend-edit/${type}`)}
          />
        }
      >
        借入借出
      </NavBar>
    </Wrapper>
  );
};
