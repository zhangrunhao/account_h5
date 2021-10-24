import React from "react";
import SortChoose from "./sort-choose.jsx";
import styled from "styled-components";
import TopBackNav from "../../common/top-back-nav/top-back-nav.jsx";
import { addRecord } from "../../api/record.js";
import { Toast } from "antd-mobile";
import ToolList from "./tool-list.jsx";
import InputKeyBoard from "./input-key-board.jsx";
import RecordResult from "./record-result.jsx";

const Wrapper = styled.div`
  padding-top: 0.8rem;
`;

const RecordInput = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export default class Record extends React.Component {
  constructor(props) {
    super(props);
    this.recordResult = React.createRef();
    this.state = {
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
    addRecord({
      recordSortId: this.state.sort.recordSortId,
      accountId: this.state.accountId,
      remark: this.state.remark,
      spendTimeStamp: new Date(this.state.date).getTime(),
      count: this.state.money,
    }).then((r) => {
      Toast.success("添加成功");
      this.recordResult.current.clearRemarkInput();
      this.setState({
        money: "0"
      });
    });
  }
  submitAgain() {
    console.log("record again");
  }
  render() {
    return (
      <Wrapper>
        <TopBackNav>记录</TopBackNav>
        <SortChoose sortChange={this.sortChange.bind(this)}></SortChoose>
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
