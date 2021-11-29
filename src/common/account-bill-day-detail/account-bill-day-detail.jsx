import React from "react";
import styled from "styled-components";
import { List } from "antd-mobile";
import Icon from "@icon-park/react/es/all";
import { useHistory } from "react-router";
import { getOperateColorByCode } from "../../util/trade-operate";
import TradeOperation from "../../config/trade-operate.json"

const Wrapper = styled.div``;

const Title = styled.div`
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.34rem;
  font-weight: 700;
`;

export default (props) => {
  const history = useHistory();
  const getPathByOperate = function (operate) {
    if (operate === TradeOperation.Borrow.code || operate == TradeOperation.Lend.code) {
      return `/borrow-lend-detail`
    } else {
      return `/trade-detail`
    }
  }
  return (
    <Wrapper>
      <Title>{props.info.date}</Title>
      <List>
        {props.info.trades.map((i) => (
          <List.Item
            onClick={() => history.push(`${getPathByOperate(i.operate)}/${i.tradeId}`)}
            key={i.tradeId}
            prefix={
              <Icon
                type={i.tradeCateIcon}
                size="24"
                fill={getOperateColorByCode(i.operate)}
              ></Icon>
            }
            description={i.remark}
            extra={i.money}
          >
            {i.tradeCateName}
          </List.Item>
        ))}
      </List>
    </Wrapper>
  );
};
