import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  addAccount,
  updateAccount,
  getAccountDetail,
} from "../../api/account.js";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import React, { useEffect, useState } from "react";
import { Check } from "@icon-park/react";
import { Input, Button, Space, Radio, List, Toast } from "antd-mobile";
import Icon from "@icon-park/react/es/all";
import ChooseIconList from "../../common/choose-icon-list/choose-icon-list.jsx";
import accountIconList from "./account-icon-list.json";

const Wrapper = styled.div`
  padding-top: 1rem;
`;

const Header = styled.h1`
  font-size: 0.4rem;
  padding-left: 0.2rem;
  height: 1.3rem;
  line-height: 1.8rem;
`;

export default (props) => {
  const history = useHistory();
  const [title, setTitle] = useState("新建");
  const [name, setName] = useState("");
  const [cate, setCate] = useState(1);
  const [money, setMoney] = useState(0);
  const [icon, setIcon] = useState("");
  const id = props.match.params["id"];
  const checkClick = function () {
    if (!name || !icon) {
      Toast.show({
        icon: "fail",
        content: "表单不完整",
      });
      return;
    }
    if (id === "new") {
      addAccount({
        name,
        cate,
        money,
        icon,
      }).then(() => {
        Toast.show({
          icon: "success",
          content: "添加成功",
        });
        history.goBack();
      });
    } else {
      updateAccount(
        Object.assign({
          id,
          name,
          cate,
          money,
          icon,
        })
      ).then(() => {
        Toast.show({
          icon: "success",
          content: "编辑成功",
        });
        history.goBack();
      });
    }
  };

  useEffect(() => {
    if (id !== "new") {
      setTitle("编辑");
      getAccountDetail(id).then((r) => {
        setName(r.data.name);
        setCate(r.data.cate);
        setMoney(r.data.money);
        setIcon(r.data.icon);
      });
    }
  }, [id]);

  return (
    <Wrapper>
      <NavBar
        right={[<Check key="0" size="26" onClick={() => checkClick()} />]}
      >
        {title}账户
      </NavBar>
      <Form
        name={name}
        nameChange={(value) => setName(value)}
        cate={cate}
        cateChange={(value) => setCate(value)}
        money={money}
        moneyChange={(value) => setMoney(value)}
        icon={icon}
      ></Form>
      <Header>选择图标</Header>
      <ChooseIconList
        iconList={accountIconList}
        iconClick={(icon) => setIcon(icon)}
      ></ChooseIconList>
    </Wrapper>
  );
};

const Form = (props) => {
  return (
    <List
      style={{
        "--prefix-width": "6em",
      }}
    >
      <List.Item prefix="名称">
        <Input
          placeholder="请输入账户名称"
          clearable
          value={props.name}
          onChange={(value) => props.nameChange(value)}
        />
      </List.Item>
      <List.Item prefix="类型">
        <Radio.Group
          value={props.cate}
          onChange={(value) => props.cateChange(value)}
        >
          <Space direction="vertical">
            <Radio value={1}>资产</Radio>
            <Radio value={2}>负债</Radio>
          </Space>
        </Radio.Group>
      </List.Item>
      <List.Item prefix="余额">
        <Input
          placeholder="请输入账户余额"
          clearable
          type="number"
          value={props.money}
          onChange={(value) => props.moneyChange(value)}
        />
      </List.Item>
      <List.Item prefix="图标">
        {props.icon ? <Icon size={30} type={props.icon}></Icon> : <></>}
      </List.Item>
    </List>
  );
};
