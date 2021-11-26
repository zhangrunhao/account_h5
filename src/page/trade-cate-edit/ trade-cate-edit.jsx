import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Delete, Check } from "@icon-park/react";
import Icon from "@icon-park/react/es/all";
import { Dialog, Toast, Input, List } from "antd-mobile";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import {
  addTradeCate,
  updateTradeCate,
  deleteTradeCate,
  getTradeCate,
} from "../../api/trade-cate";
import { useHistory } from "react-router";
import expendIconList from "./expend-icon-list.json";
import incomeIconList from "./income-icon-list.json";
import ChooseIconList from "../../common/choose-icon-list/choose-icon-list.jsx";

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
  const id = props.match.params["id"];
  const [title, setTitle] = useState("新建");
  const [operate, setOperate] = useState("");
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [iconList, setIconList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    if (id !== "expend" && id !== "income") {
      setTitle("编辑");
      getTradeCate(id).then((r) => {
        setName(r.data.name);
        setIcon(r.data.icon);
        setOperate(r.data.operate);
        r.data.operate === 1
          ? setIconList(incomeIconList)
          : setIconList(expendIconList);
      });
    } else if (id === "expend") {
      setTitle("新建支出种类");
      setOperate(2);
      setIconList(expendIconList);
    } else if (id === "income") {
      setTitle("新建收入种类");
      setOperate(1);
      setIconList(incomeIconList);
    }
  }, [id]);
  const checkClick = () => {
    if (!name || !icon) {
      Toast.show({
        icon: "fail",
        content: "请填写完整",
      });
      return;
    }
    if (id === "expend" || id === "income") {
      addTradeCate({
        name,
        icon,
        operate,
      }).then(() => {
        Toast.show({
          icon: "success",
          content: "添加成功",
        });
        history.goBack();
      });
    } else {
      updateTradeCate({
        id,
        name,
        icon,
        operate,
      }).then(() => {
        Toast.show({
          icon: "success",
          content: "编辑成功",
        });
        history.goBack();
      });
    }
  };
  const deleteClick = () => {
    Dialog.confirm({
      title: "删除",
      content: "确定删除此记录类型吗?",
      onConfirm: () => {
        deleteTradeCate(id).then((r) => {
          Toast.show({
            icon: "success",
            content: "删除成功",
          });
          history.goBack();
        });
      },
    });
  };
  return (
    <Wrapper>
      <NavBar
        right={
          id === "expend" || "income"
            ? [<Check key="0" size="26" onClick={() => checkClick()} />]
            : [<Delete key="0" size="26" onClick={() => deleteClick()} />]
        }
      >
        {title}
      </NavBar>
      <ChildResult
        icon={icon}
        name={name}
        inputChange={(v) => setName(v)}
      ></ChildResult>
      <Header>请选择图标: </Header>
      <ChooseIconList
        iconList={iconList}
        iconClick={(icon) => {
          setIcon(icon);
        }}
      ></ChooseIconList>
    </Wrapper>
  );
};

const ChildResult = (props) => {
  return (
    <List
      style={{
        "--prefix-width": "6em",
      }}
    >
      <List.Item prefix="名称">
        <Input
          placeholder="请输入种类名称"
          clearable
          value={props.name}
          onChange={props.inputChange}
        />
      </List.Item>
      <List.Item prefix="图标">
        {props.icon ? <Icon size="30" type={props.icon}></Icon> : <></>}
      </List.Item>
    </List>
  );
};
