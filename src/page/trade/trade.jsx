import React from "react";
import CateList from "./cate-list.jsx";
import styled from "styled-components";
import { addTrade, addTransfer } from "../../api/trade";
import { Toast, Tabs } from "antd-mobile";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import ToolList from "./tool-list.jsx";
import InputKeyBoard from "./input-key-board.jsx";
import Result from "./result.jsx";
import { withRouter } from "react-router-dom";

const tabs = [
  { title: "收入", key: "income" },
  { title: "支出", key: "expend" },
  { title: "转账", key: "transfer" },
];

const Wrapper = styled.div`
  padding-top: 1rem;
`;

const RecordInput = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

let transferAccount = {
  outId: undefined,
  inId: undefined
};

class Trade extends React.Component {
  constructor(props) {
    super(props);
    this.recordResult = React.createRef();
    this.state = {
      cateType: tabs[1].key,
      cate: {},
      money: "0",
      date: new Date(Date.now()),
      accountId: "",
      remark: "",
    };
  }
  cateChange(cate) {
    this.setState({ cate });
  }
  moneyChange(money) {
    this.setState({ money });
  }
  dateChange(date) {
    this.setState({ date });
  }
  accountChange(accounts) {
    this.setState({ accountId: accounts[0] });
  }
  remarkChange(remark) {
    this.setState({ remark });
  }
  transferAccountChange(outAccountId, inAccountId) {
    console.log("trade transferAccountChange");
    transferAccount.outId = outAccountId;
    transferAccount.inId = inAccountId;
  }
  submitSave() {
    if (this.state.cateType === "transfer") {
      if (transferAccount.outId && transferAccount.inId) {
        addTransfer({
          inAccountId: transferAccount.inId,
          outAccountId: transferAccount.outId,
          money: this.state.money,
          spendDate: new Date(this.state.date).getTime(),
        }).then(() => {
          Toast.show({
            icon: "success",
            content: "转账成功",
          });
          this.props.history.push("bill");
        })
      }
    } else {
      this.toAddTrade().then(() => {
        Toast.show({
          icon: "success",
          content: "添加成功",
        });
        // TODO: 是否来自账户详细列表
        this.props.history.push("bill");
      });
    }
  }
  submitAgain() {
    if (this.state.cateType === "transfer") {
      console.warn("转账不提供再记功能");
    } else {
      this.toAddTrade().then(() => {
        Toast.show({
          icon: "success",
          content: "添加成功",
        });
        this.recordResult.current.clearRemarkInput();
        this.setState({
          money: "0",
        });
      });
    }
  }
  toAddTrade() {
    return addTrade({
      accountId: this.state.accountId,
      tradeCateId: this.state.cate.id,
      remark: this.state.remark,
      spendDate: new Date(this.state.date).getTime(),
      operate: this.getOperateByType(this.state.cateType),
      money: this.state.money,
    });
  }
  getOperateByType(type) {
    switch (type) {
      case "income":
        return 1;
      case "expend":
        return 2;
      // TODO: 转账, 分为转入和转出, 这里需要区分
      case "transfer":
        return 3;
    }
  }
  tabChange(key) {
    this.setState({
      cateType: key,
    });
  }
  render() {
    return (
      <Wrapper>
        <NavBar>
          <Tabs
            onChange={this.tabChange.bind(this)}
            defaultActiveKey={this.state.cateType}
          >
            {tabs.map((tab) => (
              <Tabs.TabPane title={tab.title} key={tab.key}></Tabs.TabPane>
            ))}
          </Tabs>
        </NavBar>
        <CateList
          type={this.state.cateType}
          cateChange={this.cateChange.bind(this)}
          transferAccountChange={this.transferAccountChange.bind(this)}
        ></CateList>
        <RecordInput>
          <Result
            ref={this.recordResult}
            cate={this.state.cate}
            money={this.state.money}
            remarkChange={this.remarkChange.bind(this)}
          ></Result>
          <ToolList
            accountChange={this.accountChange.bind(this)}
            dateChange={this.dateChange.bind(this)}
          ></ToolList>
          <InputKeyBoard
            moneyChange={this.moneyChange.bind(this)}
            submitAgain={this.submitAgain.bind(this)}
            submitSave={this.submitSave.bind(this)}
          ></InputKeyBoard>
        </RecordInput>
      </Wrapper>
    );
  }
}

export default withRouter(Trade);
