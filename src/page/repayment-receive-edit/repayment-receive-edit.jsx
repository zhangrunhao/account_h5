import React, { useEffect, useState } from "react";
import TradeEdit from "../../common/trade-edit/trade-edit.jsx";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import TradeOperation from "../../config/trade-operate.json";
import { addRepaymentReceive, getDetail, updateBorrowLend } from "../../api/trade.js";
import { useHistory } from "react-router";
import { Toast } from "antd-mobile";

const getCodeByOperation = function (id) {
  if (id === "receive") {
    return TradeOperation.Receive.code;
  } else if (id === "repayment") {
    return TradeOperation.Repayment.code;
  }
};

const getOperationTarget = function (id) {
  if (id === "receive" || id === "repayment") {
    return "add";
  } else {
    return "update";
  }
};

export default (props) => {
  const id = props.match.params["id"];
  const targetId = props.match.params["targetId"];
  const [operate, setOperate] = useState(0);
  const operationTarget = getOperationTarget(id);
  const [initialValues, setInitialValues] = useState({
    spendDate: new Date(),
  });
  const history = useHistory();
  const onFinish = function (values) {
    if (operationTarget === "add") {
      console.log("add repayment and receive", values)
      // TODO: 添加收款还款
      addRepaymentReceive({
        targetTradeId: targetId,
        accountId: values.account[0],
        remark: values.remark,
        spendDate: new Date(values.spendDate).getTime(),
        operate,
        money: values.money,
      }).then((r) => {
        Toast.show({
          icon: "success",
          content: "添加成功",
        });
        history.goBack();
      });
    } else if (operationTarget === "update") {
      // TODO: 更新收款还款
      // updateBorrowLend({
      //   id,
      //   accountId: values.account[0],
      //   remark: values.remark,
      //   spendDate: new Date(values.spendDate).getTime(),
      //   operate,
      //   money: values.money,
      // }).then((r) => {
      //   Toast.show({
      //     icon: "success",
      //     content: "修改成功",
      //   });
      //   history.goBack();
      // });
    }
  };

  useEffect(() => {
    if (operationTarget === "update") {
      getDetail(id).then((r) => {
        setOperate(r.data.operate);
        setInitialValues({
          account: [r.data.accountId],
          spendDate: new Date(Date.parse(r.data.spendDate.replace(/-/g, "/"))),
          money: r.data.money,
          remark: r.data.remark,
        });
      });
    } else {
      setOperate(getCodeByOperation(id));
    }
  }, []);
  return (
    <>
      <NavBar>增加/编辑[收款还款]</NavBar>
      <TradeEdit onFinish={onFinish} initialValues={initialValues}></TradeEdit>
    </>
  );
};
