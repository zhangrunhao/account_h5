import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Edit, Delete } from "@icon-park/react";
import AccountBillDayDetail from "../../common/account-bill-day-detail/account-bill-day-detail.jsx";
import { getAccountDetail, deleteAccount } from "../../api/account.js";
import { getTradeListByAccount } from "../../api/trade.js";
import { Dialog, Toast } from "antd-mobile";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import { useHistory } from "react-router";

const Summary = styled.div`
  background-color: #fff;
  margin: 0.3rem;
  border-radius: 0.1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.34rem;
`;

const Wrapper = styled.div`
  padding-top: 1rem;
`;

export default (props) => {
  const id = props.match.params["id"];
  const [tradeList, setTradeList] = useState([]);
  const [name, setName] = useState("");
  const [money, setMoney] = useState("0");
  const history = useHistory();

  useEffect(() => {
    getTradeListByAccount(id).then((r) => {
      setTradeList(r.data);
    });
    getAccountDetail(id).then((r) => {
      setName(r.data.name);
      setMoney(r.data.money);
    });
  }, []);
  const deleteClick = () => {
    Dialog.confirm({
      title: "删除",
      content: "确定删除此账户吗?",
      onConfirm: () => {
        deleteAccount(id).then((r) => {
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
        right={[
          <Edit
            key="0"
            size="26"
            onClick={() => history.push(`/account-edit/${id}`)}
          />,
          <Delete key="1" size="26" onClick={() => deleteClick()} />,
        ]}
      >
        {name}
      </NavBar>

      <Summary>余额: {money}</Summary>
      {tradeList.map((i) => (
        <AccountBillDayDetail key={i.date} info={i}></AccountBillDayDetail>
      ))}
    </Wrapper>
  );
};
