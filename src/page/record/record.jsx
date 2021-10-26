import React from "react";
import SortChoose from "./sort-choose.jsx";
import styled from "styled-components";
import { Left } from "@icon-park/react";
import History from "../../util/history.js";
import { addRecord } from "../../api/record.js";
import { Toast, NavBar, Tabs } from "antd-mobile";
import ToolList from "./tool-list.jsx";
import InputKeyBoard from "./input-key-board.jsx";
import RecordResult from "./record-result.jsx";
import { withRouter } from "react-router-dom";

const tabs = [
  { title: "收入", key: "income" },
  { title: "支出", key: "expend" },
  { title: "转账", key: "transfer" },
];

const Wrapper = styled.div`
  padding-top: 0.8rem;
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
  sortChange(sort) {
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
      addRecord({
        recordSortId: this.state.sort.recordSortId,
        accountId: this.state.accountId,
        remark: this.state.remark,
        spendTimeStamp: new Date(this.state.date).getTime(),
        count: this.state.sortType === "expend" ? '-' + this.state.money : this.state.money,
      }).then(() => {
        Toast.success("添加成功");
        this.recordResult.current.clearRemarkInput();
        this.setState({
          money: "0",
        });
      });
    }
  }
  submitAgain() {
    console.log("record again");
  }
  tabChange(e) {
    this.setState({
      sortType: e.key,
    });
  }
  render() {
    return (
      <Wrapper>
        <NavBar
          mode="light"
          icon={<Left size="26" />}
          onLeftClick={() => History.back(this)}
        >
          <Tabs
            tabs={tabs}
            initialPage={this.state.sortType}
            onChange={this.tabChange.bind(this)}
          ></Tabs>
        </NavBar>
        <SortChoose
          type={this.state.sortType}
          sortChange={this.sortChange.bind(this)}
        ></SortChoose>
        <RecordInput>
          <RecordResult
            ref={this.recordResult}
            sort={this.state.sort}
            money={this.state.money}
            remarkChange={this.remarkChange.bind(this)}
          ></RecordResult>
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
