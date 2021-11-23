import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CateList from "./cate-list.jsx";
import TopBackNav from "../../common/top-back-nav/top-back-nav.jsx";
import KeyBoard from "./key-board.jsx";
import ToolList from "./tool-list.jsx";
import ResultShow from "./result-show.jsx";
import { getAccountList } from "../../api/account.js";
import {
  addTrade,
  addTransfer,
  updateTrade,
  getDetail,
} from "../../api/trade.js";
import { Toast } from "antd-mobile";
import { useHistory } from "react-router";
import transfer from "./transfer.jsx";

const Wrapper = styled.div`
  padding-top: 1rem;
`;

const BottomFix = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export default (props) => {
  const id = props.match.params["id"];
  const [tab, setTab] = useState("expend");
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
  const initDefault = function () {
    getDetail(id).then((r) => {
      const data = r.data;
      // 设置tab
      data.operate === 1 ? setTab("income") : setTab("expend");
      // 设置数据
      setActiveCate({
        id: data.tradeCateId,
        icon: data.tradeCateIcon,
        operate: data.operate,
      });
      // 去掉尾随0, 尾随.
      setMoney(data.money.replace(/0+$/, "").replace(/\.+$/, ""));
      setRemark(data.remark);
      setAccount({
        value: data.accountId,
        label: data.accountName,
      });
      setDate(Date.parse(data.spendDate.replace(/-/g, "/")));
    });
  };

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
    if (id === "new") {
      return addTrade({
        accountId: account.value,
        tradeCateId: activeCate.id,
        remark,
        spendDate: new Date(date).getTime(),
        operate: activeCate.operate,
        money,
      });
    } else {
      return updateTrade({
        id,
        accountId: account.value,
        tradeCateId: activeCate.id,
        remark,
        spendDate: new Date(date).getTime(),
        operate: activeCate.operate,
        money,
      });
    }
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
          content: id === "new" ? "添加成功" : "更新成功",
        });
        history.push("/bill");
      });
    }
  };
  const submitAgain = function () {
    if (id !== "new") {
      Toast.show({
        icon: "fail",
        content: "编辑模式下, 不可再记",
      });
      return;
    }
    if (tab === "transfer") {
      toAddTransfer()
        .then((r) => {
          Toast.show({
            icon: "success",
            content: "转账成功",
          });
          setMoney("0");
        })
        .catch((e) => {
          Toast.show({
            icon: "fail",
            content: e,
          });
        });
    } else {
      return;
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
    setTab(key);
  };

  // 获取账户数组
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
      // 获取需要编辑的数据
      if (id !== "new") {
        initDefault();
      }
    });
  }, []);

  return (
    <Wrapper>
      <TopBackNav>记账</TopBackNav>
      <CateList
        tab={tab}
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
          hideCate={tab === "transfer"}
          hideInput={tab === "transfer"}
          remark={remark}
          money={money}
          cate={activeCate}
          remarkChange={remarkChange}
        ></ResultShow>
        <ToolList
          hideAccount={tab === "transfer"}
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
