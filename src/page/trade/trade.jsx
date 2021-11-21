import React from "react";
import CateList from "./cate-list.jsx";
import styled from "styled-components";
import { addTrade } from "../../api/trade";
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

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.recordResult = React.createRef();
    this.state = {
      sortType: tabs[1].key,
      sort: {},
      money: "0",
      date: new Date(Date.now()),
      accountId: "",
      remark: "",
    };
  }
  cateChange(sort) {
    this.setState({ sort });
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
  submitSave() {
    if (this.state.sortType === "transfer") {
    } else {
      this.toAddRecord().then(() => {
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
    this.toAddRecord().then(() => {
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
  toAddRecord() {
    return addTrade({
      recordSortId: this.state.sort.recordSortId,
      accountId: this.state.accountId,
      remark: this.state.remark,
      spendTimeStamp: new Date(this.state.date).getTime(),
      count:
        this.state.sortType === "expend"
          ? "-" + this.state.money
          : this.state.money,
    });
  }
  tabChange(key) {
    this.setState({
      sortType: key,
    });
  }
  render() {
    return (
      <Wrapper>
        <NavBar>
          <Tabs
            onChange={this.tabChange.bind(this)}
            defaultActiveKey={this.state.sortType}
          >
            {tabs.map((tab) => (
              <Tabs.TabPane title={tab.title} key={tab.key}></Tabs.TabPane>
            ))}
          </Tabs>
        </NavBar>
        <CateList
          type={this.state.sortType}
          cateChange={this.cateChange.bind(this)}
        ></CateList>
        <RecordInput>
          <Result
            ref={this.recordResult}
            sort={this.state.sort}
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

export default withRouter(Record);
