import { Tabs } from "antd-mobile";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getTradeCateList } from "../../api/trade-cate";
import Icon from "@icon-park/react/es/all";
import Transfer from "./transfer.jsx";
import { useHistory } from "react-router";

const Wrapper = styled.div``;

export default (props) => {
  const [incomeList, setIncomeList] = useState([]);
  const [expendList, setExpendList] = useState([]);

  useEffect(() => {
    getTradeCateList().then((r) => {
      setExpendList(r.data.filter((i) => i.operate === 2));
      setIncomeList(r.data.filter((i) => i.operate === 1));
    });
  }, []);

  return (
    <Wrapper>
      <Tabs defaultActiveKey="expend" activeKey={props.tab}  onChange={(key) => props.tabChange(key)}>
        <Tabs.TabPane title="收入" key="income">
          <CateChildList
            active={props.activeCate}
            cateChange={props.cateChange}
            array={incomeList}
          ></CateChildList>
        </Tabs.TabPane>
        <Tabs.TabPane title="支出" key="expend">
          <CateChildList
            active={props.activeCate}
            cateChange={props.cateChange}
            array={expendList}
          ></CateChildList>
        </Tabs.TabPane>
        <Tabs.TabPane title="转账" key="transfer">
          <Transfer
            outAccount={props.outAccount}
            inAccount={props.inAccount}
            accountData={props.accountData}
            transferAccountChange={props.transferAccountChange}
          ></Transfer>
        </Tabs.TabPane>
      </Tabs>
    </Wrapper>
  );
};

const ScrollWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
const ScrollItem = styled.div`
  flex: 0 0 25%;
  height: 1.2rem;
`;
const IconWrapper = styled.div`
  background-color: #fff;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.35rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditIconWrapper = styled(IconWrapper)`
  background-color: #100808;
`;

const IconName = styled.div`
  text-align: center;
  height: 0.4rem;
  line-height: 0.4rem;
`;

const CateChildList = function (props) {
  const history = useHistory();
  useEffect(() => {
    props.cateChange(props.array[0]);
  }, [props.array]);
  return (
    <ScrollWrapper>
      {props.array.map((i) => {
        return (
          <ScrollItem key={i.id}>
            <IconWrapper>
              <Icon
                onClick={(e) => {
                  props.cateChange(i);
                }}
                size={34}
                type={i.icon}
                size="28"
                fill={
                  props.active && props.active.id && props.active.id === i.id
                    ? `${i.operate === 1 ? "green" : "red"}`
                    : "#333"
                }
                strokeLinejoin="miter"
                strokeLinecap="butt"
              ></Icon>
            </IconWrapper>
            <IconName>{i.name}</IconName>
          </ScrollItem>
        );
      })}
      <ScrollItem>
        <EditIconWrapper>
          <Icon
            onClick={(e) => history.push("/trade-cate-list")}
            size={34}
            type="Setting"
            size="28"
            fill="#d43f3f"
            strokeLinejoin="miter"
            strokeLinecap="butt"
          ></Icon>
        </EditIconWrapper>
        <IconName>编辑分类</IconName>
      </ScrollItem>
    </ScrollWrapper>
  );
};
