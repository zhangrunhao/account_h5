import React, { useEffect, useState } from "react";
import TradeEdit from "../../common/trade-edit/trade-edit.jsx";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import TradeOperation from "../../config/trade-operate.json";
import { addBorrowLend, getDetail, updateBorrowLend } from "../../api/trade.js";

const getCodeByOperation = function (id) {
  if (id === "lend") {
    return TradeOperation.Lend.code;
  } else if (id === "borrow") {
    return TradeOperation.Borrow.code;
  }
};

const getOperationTarget = function (id) {
  if (id === "lend" || id === "borrow") {
    return "add";
  } else {
    return "update";
  }
};

export default (props) => {
  const id = props.match.params["id"];
  const [operate, setOperate] = useState(0);
  const operationTarget = getOperationTarget(id);
  const [initialValues, setInitialValues] = useState({
    spendDate: new Date(),
  });

  const onFinish = function (values) {
    if (operationTarget === "add") {
      addBorrowLend({
        accountId: values.account[0],
        remark: values.remark,
        spendDate: new Date(values.spendDate).getTime(),
        operate,
        money: values.money,
      }).then((r) => {
        console.log(r);
      });
    } else if (operationTarget === "update") {
      updateBorrowLend({
        id,
        accountId: values.account[0],
        remark: values.remark,
        spendDate: new Date(values.spendDate).getTime(),
        operate,
        money: values.money,
      }).then((r) => {
        console.log(r);
      });
    }
  };

  useEffect(() => {
    if (operationTarget === "update") {
      getDetail(id).then((r) => {
        console.log(r.data);
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
      <NavBar>增加/编辑[借入借出]</NavBar>
      <TradeEdit onFinish={onFinish} initialValues={initialValues}></TradeEdit>
    </>
  );
};
