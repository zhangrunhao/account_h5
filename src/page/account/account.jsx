import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { List } from "antd-mobile";
import { AddOne } from "@icon-park/react";
import Icon from "@icon-park/react/es/all";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import BottomTabBar from "../../common/bottom-tab-bar/bottom-tab-bar.jsx";
import { getAccountList } from "../../api/account.js";

const Wrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1.5rem;
`;

export default (prop) => {
  const [propertyList, setPropertyList] = useState([]);
  const [debtList, setDebtList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getAccountList().then((data) => {
      setPropertyList(data.data.filter((i) => i.cate === 1));
      setDebtList(data.data.filter((i) => i.cate === 2));
    });
  }, []);

  return (
    <Wrapper>
      <NavBar
        right={[
          <AddOne
            key="0"
            size="26"
            onClick={() => history.push("/account-edit/new")}
          />,
        ]}
      >
        资产
      </NavBar>
      <ChildList title="资产" array={propertyList}></ChildList>
      <ChildList title="负债" array={debtList}></ChildList>
      <BottomTabBar active="account"></BottomTabBar>
    </Wrapper>
  );
};

const Header = styled.h1`
  font-size: 0.4rem;
  padding-left: 0.3rem;
  height: 0.7rem;
  line-height: 0.7rem;
`;

const ChildList = (props) => {
  const history = useHistory();
  return (
    <>
      <Header>{props.title}</Header>
      <List>
        {props.array.map((v) => (
          <List.Item
            key={v.id}
            onClick={() => {
              history.push(`/account-detail/${v.id}`);
            }}
            prefix={<Icon type={v.icon} size={30} />}
            extra={v.money}
          >
            {v.name}
          </List.Item>
        ))}
      </List>
    </>
  );
};
