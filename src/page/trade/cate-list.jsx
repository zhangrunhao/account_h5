import { Tabs, Image } from "antd-mobile";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getTradeCateList } from "../../api/trade-cate";
import Transfer from "./transfer.jsx";
import { useHistory } from "react-router";
import { Setting } from "@icon-park/react";
import { getSvgSrc } from "../../util/svg";

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
      <Tabs
        defaultActiveKey="expend"
        activeKey={props.tab}
        onChange={(key) => props.tabChange(key)}
      >
        <Tabs.Tab title="收入" key="income">
          <CateChildList
            active={props.activeCate}
            cateChange={props.cateChange}
            type="income"
            array={incomeList}
          ></CateChildList>
        </Tabs.Tab>
        <Tabs.Tab title="支出" key="expend">
          <CateChildList
            active={props.activeCate}
            cateChange={props.cateChange}
            type="expend"
            array={expendList}
          ></CateChildList>
        </Tabs.Tab>
        <Tabs.Tab title="转账" key="transfer">
          <Transfer
            outAccount={props.outAccount}
            inAccount={props.inAccount}
            accountData={props.accountData}
            transferAccountChange={props.transferAccountChange}
          ></Transfer>
        </Tabs.Tab>
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
  height: 1.4rem;
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

const CateChildList = (props) => {
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
              <Image
                onClick={(e) => {
                  props.cateChange(i);
                }}
                src={getSvgSrc(i.icon)}
              ></Image>
            </IconWrapper>
            <IconName>{i.name}</IconName>
          </ScrollItem>
        );
      })}
      <ScrollItem>
        <EditIconWrapper>
          <Setting
            onClick={(e) => history.push(`/trade-cate-list/${props.type}`)}
            size={34}
            size="28"
            fill="#d43f3f"
            strokeLinejoin="miter"
            strokeLinecap="butt"
          ></Setting>
        </EditIconWrapper>
        <IconName>编辑分类</IconName>
      </ScrollItem>
    </ScrollWrapper>
  );
};
