import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Delete, Check } from "@icon-park/react";
import Icon from "@icon-park/react/es/all";
import { Dialog, Toast, Input, List, Collapse, Space } from "antd-mobile";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import {
  addTradeCate,
  updateTradeCate,
  deleteTradeCate,
  getTradeCate,
} from "../../api/trade-cate";
import { useHistory } from "react-router";
import expendCateList from "./expend-cate-list.json";
import IncomeCateList from './income-cate-list.json'

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
  const [cateList, setCateList] = useState([])
  const history = useHistory();
  useEffect(() => {
    if (id !== "expend" && id !== "income") {
      setTitle("编辑");
      getTradeCate(id).then((r) => {
        setName(r.data.name);
        setIcon(r.data.icon);
        setOperate(r.data.operate);
        (r.data.operate === 1) ? setCateList(IncomeCateList) : setCateList(expendCateList)
      });
    } else if (id === "expend") {
      setTitle("新建支出种类");
      setOperate(2);
      setCateList(expendCateList)
    } else if (id === "income") {
      setTitle("新建收入种类");
      setOperate(1);
      setCateList(IncomeCateList)
    }
  }, [id]);
  const checkClick = () => {
    if (!name || !icon) {
      Toast.show({
        icon: "fail",
        content: "请填写完整",
      });
      return
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
        operate
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
      <ChildCateList
        cateList={cateList}
        cateClick={(cate) => {
          setIcon(cate);
        }}
      ></ChildCateList>
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

const IconParentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const IconWrapper = styled.div`
  flex: 0 0 20%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChildCateList = (props) => {
  return (
    <Collapse defaultActiveKey={[props.cateList[0] ? props.cateList[0].key : ""]}>
      {props.cateList.map((i) => {
        return (
          <Collapse.Panel key={i.key} title={i.title}>
            <IconParentWrapper>
              {i.array.map((ii) => {
                return (
                  <IconWrapper key={ii}>
                    <Icon
                      size={30}
                      type={ii}
                      onClick={() => props.cateClick(ii)}
                    ></Icon>
                  </IconWrapper>
                );
              })}
            </IconParentWrapper>
          </Collapse.Panel>
        );
      })}
    </Collapse>
  );
};
