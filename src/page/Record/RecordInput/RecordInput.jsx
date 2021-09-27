import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from "loadsh";
import { Button, Toast } from "antd-mobile";
import { colorTextBase, fillBase, fillTap } from "../../../style/Styles.js";

import { addRecord } from "../../../api/record.js";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 6.2rem;
`;

const RecordResult = styled.div`
  width: 100%;
  height: 1rem;
`;

const SortIcon = styled.img`
  float: left;
  margin: 0.2rem 0.1rem 0 0.1rem;
  width: 0.6rem;
  height: 0.6rem;
`;

const SortName = styled.div`
  float: left;
  height: 1rem;
  line-height: 1rem;
`;

const ResultMoney = styled.div`
  float: right;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.6rem;
`;

const ToolList = styled.div``;

const KeyBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InputButton = styled.div`
  width: 1.875rem;
  height: 1.16rem;
  line-height: 1.16rem;
  font-size: 0.4rem;
  text-align: center;
  color: ${colorTextBase};
  background-color: ${fillBase};
  :active {
    background-color: ${fillTap};
  }
`;

const keyBoardKeys = [
  1,
  2,
  3,
  "删除",
  4,
  5,
  6,
  "-",
  7,
  8,
  9,
  "+",
  "再记",
  0,
  ".",
  "保存",
];

export default class RecordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      money: "0",
    };
  }

  handleKeyBoardClick(key) {
    if (_.isNumber(key)) {
      // 数字
      let money = this.state.money + key;
      if (
        money.indexOf(".") > -1 &&
        money.substring(money.indexOf(".")).length > 3
      )
        return;
      if (money.length > 1 && money.indexOf("0") === 0)
        money = money.substring(1);
      this.setState({ money });
    } else if (key === ".") {
      // 小数点
      if (this.state.money.indexOf(".") > -1) return;
      this.setState({ money: this.state.money + key });
    } else if (key === "删除") {
      // 删除
      let money = this.state.money.slice(0, -1);
      if (money.length < 1) money = "0";
      this.setState({ money });
    } else if (key === "-") {
      // TODO: handle -
    } else if (key === "+") {
      // TODO: handle +
    } else if (key === "再记") {
      // TODO: handle 再记
    } else if (key === "保存") {
      addRecord({
        recordSortId: this.props.sort.recordSortId,
        accountId: 13,
        remark: "这是一条备注",
        spendTimeStamp: 1625748306265,
        count: this.state.money,
      }).then((r) => {
        Toast.success("添加成功");
        this.setState({ money: "0" });
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <RecordResult>
          <SortIcon src={this.props.sort.icon}></SortIcon>
          <SortName>{this.props.sort.name}</SortName>
          <ResultMoney>{this.state.money}</ResultMoney>
        </RecordResult>
        <ToolList>
          <Button type="primary" size="small" inline>
            账户
          </Button>
          <Button type="warning" size="small" inline>
            2020/07/06
          </Button>
        </ToolList>
        <KeyBoard>
          {keyBoardKeys.map((v) => (
            <InputButton
              key={v}
              onClick={this.handleKeyBoardClick.bind(this, v)}
            >
              {v}
            </InputButton>
          ))}
        </KeyBoard>
      </Wrapper>
    );
  }
}

RecordInput.propTypes = {
  sort: PropTypes.object,
};
