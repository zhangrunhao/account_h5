import React, { useEffect, useState } from "react";
import { Button, Collapse } from "antd-mobile";
import TradeDetail from "../trade-detail/trade-detail.jsx";
import styled from "styled-components";
import { getOperateDescByCode } from "../../util/trade-operate.js";
import TradeOperation from "../../config/trade-operate.json";
import { useHistory } from "react-router";
import { getTradeListByBorrowLendId } from "../../api/trade.js";
import AccountBillDayDetail from "../../common/account-bill-day-detail/account-bill-day-detail.jsx";

const Wrapper = styled.div`
  padding-bottom: 1rem;
`;
const BottomWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const targetRoute = function (operate) {
  if (operate === TradeOperation.Borrow.code) {
    return "repayment";
  } else if (operate === TradeOperation.Lend.code) {
    return "receive";
  }
};

export default (props) => {
  const history = useHistory();
  const [detail, setDetail] = useState({});
  const [title, setTitle] = useState("");
  const [buttonTitle, setButtonTitle] = useState("");
  const [trades, setTrades] = useState([]);
  const reject = function (detail) {
    setDetail(detail);
    setTitle(getOperateDescByCode(detail.operate));
    if (detail.operate === TradeOperation.Borrow.code) {
      setButtonTitle("还款");
    } else if (detail.operate === TradeOperation.Lend.code) {
      setButtonTitle("收款");
    }
  };
  useEffect(() => {
    getTradeListByBorrowLendId(props.match.params["id"]).then((r) => {
      setTrades(r.data);
    });
  }, []);
  return (
    <Wrapper>
      <TradeDetail match={props.match} reject={reject} title={title}>
        <Collapse>
          <Collapse.Panel key="1" title={buttonTitle + "列表"}>
            {trades.map((i) => (
              <AccountBillDayDetail
                key={i.date}
                info={i}
              ></AccountBillDayDetail>
            ))}
          </Collapse.Panel>
        </Collapse>
      </TradeDetail>
      <BottomWrapper>
        <Button
          block
          shape="rectangular"
          color="primary"
          size="large"
          onClick={() =>
            history.push(
              `/repayment-receive-edit/${targetRoute(detail.operate)}/${
                detail.tradeId
              }`
            )
          }
        >
          {buttonTitle}
        </Button>
      </BottomWrapper>
    </Wrapper>
  );
};
