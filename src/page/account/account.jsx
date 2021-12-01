import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { List, Image } from "antd-mobile";
import { AddOne } from "@icon-park/react";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import BottomTabBar from "../../common/bottom-tab-bar/bottom-tab-bar.jsx";
import { getAccountList } from "../../api/account.js";
import { getSvgSrc } from "../../util/svg.js";

const Wrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1.5rem;
`;

export default (prop) => {
  const [propertyList, setPropertyList] = useState([]);
  const [debtList, setDebtList] = useState([]);
  const history = useHistory();
  const BorrowLendList = [
    {
      id: "borrow",
      icon: "Download",
      name: "借入",
      money: "0",
    },
    {
      id: "lend",
      icon: "Upload",
      name: "借出",
      money: "0",
    },
  ];
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
      <ChildList title="借入借出" path="/borrow-lend"  array={BorrowLendList}></ChildList>
      <ChildList title="资产" path="/account-detail" array={propertyList}></ChildList>
      <ChildList title="负债" path="/account-detail" array={debtList}></ChildList>
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
              history.push(`${props.path}/${v.id}`);
            }}
            prefix={<Image src={getSvgSrc(v.icon)}/>}
            extra={v.money}
          >
            {v.name}
          </List.Item>
        ))}
      </List>
    </>
  );
};
