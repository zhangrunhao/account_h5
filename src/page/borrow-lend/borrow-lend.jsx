import { AddOne } from "@icon-park/react";
import { List } from "antd-mobile";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import {getTradeListByOperate} from "../../api/trade.js" 
import TradeOperation from "../../config/trade-operate.json";
import AccountBillDayDetail from "../../common/account-bill-day-detail/account-bill-day-detail.jsx"

const Wrapper = styled.div`
  padding-top: 1rem;
`;


const getCodeByOperation = function (type) {
  if (type === "lend") {
    return TradeOperation.Lend.code;
  } else if (type === "borrow") {
    return TradeOperation.Borrow.code;
  }
};

export default (props) => {
  const type = props.match.params["type"];
  const [tradeList, setTradeList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getTradeListByOperate(getCodeByOperation(type)).then(r => {
      setTradeList(r.data);
    })
  }, []);
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
      {tradeList.map((i) => (
        <AccountBillDayDetail key={i.date} info={i}></AccountBillDayDetail>
      ))}
    </Wrapper>
  );
};
