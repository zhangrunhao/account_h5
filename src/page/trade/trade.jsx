import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CateList from "./cate-list.jsx";
import TopBackNav from "../../common/top-back-nav/top-back-nav.jsx";
import KeyBoard from "./key-board.jsx";
import ToolList from "./tool-list.jsx";
import ResultShow from "./result-show.jsx";
import { getAccountList } from "../../api/account.js";
import { addTrade, addTransfer } from "../../api/trade.js";
import { Toast } from "antd-mobile";
import { useHistory } from "react-router";

const Wrapper = styled.div`
  padding-top: 1rem;
`;

const BottomFix = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;


let tab = "expend";
export default () => {
  const [activeCate, setActiveCate] = useState({});
  const [money, setMoney] = useState("0");
  const [accountData, setAccountData] = useState([]);
  const [account, setAccount] = useState({
    label: "账户",
  });
  const [outAccount, setOutAccount] = useState({
    label: "请选择转出账户",
  });
  const [inAccount, setInAccount] = useState({
    label: "请选择转入账户",
  });
  const [date, setDate] = useState(new Date());
  const [remark, setRemark] = useState("");
  const history = useHistory();
  useEffect(() => {
    getAccountList().then((r) => {
      const data = r.data.map((i) => {
        return {
          label: i.name,
          value: i.id,
        };
      });
      setAccount(data[0]);
      setAccountData([data]);
    });
  }, []);
  const cateChange = function (cate) {
    setActiveCate(cate);
  };
  const transferAccountChange = function (value) {
    if (value.outAccountId) {
      const account = accountData[0].find((i) => {
        return i.value === value.outAccountId;
      });
      setOutAccount(account);
    } else if (value.inAccountId) {
      const account = accountData[0].find((i) => {
        return i.value === value.inAccountId;
      });
      setInAccount(account);
    }
  };
  const moneyChange = function (money) {
    setMoney(money);
  };
  const accountChange = function (value) {
    const account = accountData[0].find((i) => {
      return i.value === value[0];
    });
    setAccount(account);
  };
  const dateChange = function (date) {
    setDate(date);
  };
  const remarkChange = function (value) {
    setRemark(value);
  };
  const toAddTrade = function () {
    return addTrade({
      accountId: account.value,
      tradeCateId: activeCate.id,
      remark,
      spendDate: new Date(date).getTime(),
      operate: activeCate.operate,
      money,
    });
  };
  const toAddTransfer = function () {
    if (outAccount.value && inAccount.value) {
      return addTransfer({
        outAccountId: outAccount.value,
        inAccountId: inAccount.value,
        spendDate: new Date(date).getTime(),
        money,
      });
    } else {
      return Promise.reject("请选择账户");
    }
  };
  const submitSave = function () {
    if (tab === "transfer") {
      toAddTransfer()
        .then((r) => {
          Toast.show({
            icon: "success",
            content: "转账成功",
          });
          history.push("/bill");
        })
        .catch((e) => {
          Toast.show({
            icon: "fail",
            content: e,
          });
        });
    } else {
      toAddTrade().then((r) => {
        Toast.show({
          icon: "success",
          content: "添加成功",
        });
        history.push("/bill");
      });
    }
  };
  const submitAgain = function () {
    if (tab === "transfer") {
      toAddTransfer()
      .then((r) => {
        Toast.show({
          icon: "success",
          content: "转账成功",
        });
        setMoney("0")
      })
      .catch((e) => {
        Toast.show({
          icon: "fail",
          content: e,
        });
      });
    } else {
      return
      toAddTrade().then((r) => {
        Toast.show({
          icon: "success",
          content: "添加成功",
        });
        setRemark("");
        setMoney("0");
      });
    }
  };
  const tabChange = function (key) {
    tab = key;
  };
  return (
    <Wrapper>
      <TopBackNav>记账</TopBackNav>
      <CateList
        tabChange={tabChange}
        activeCate={activeCate}
        cateChange={cateChange}
        accountData={accountData}
        outAccount={outAccount}
        inAccount={inAccount}
        transferAccountChange={transferAccountChange}
      ></CateList>
      <BottomFix>
        <ResultShow
          remark={remark}
          money={money}
          cate={activeCate}
          remarkChange={remarkChange}
        ></ResultShow>
        <ToolList
          accountLabel={account.label}
          accountData={accountData}
          accountChange={accountChange}
          date={date}
          dateChange={dateChange}
        ></ToolList>
        <KeyBoard
          money={money}
          moneyChange={moneyChange}
          submitSave={submitSave}
          submitAgain={submitAgain}
        ></KeyBoard>
      </BottomFix>
    </Wrapper>
  );
};
