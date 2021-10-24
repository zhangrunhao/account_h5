import React from "react";
import styled from "styled-components";
import _ from "loadsh";
import { colorTextBase, fillBase, fillTap } from "../../style/Styles.js";
import { Toast } from "antd-mobile";
import { addRecord } from "../../api/record.js";
import PropTypes from "prop-types";

const Wrapper = styled.div``;

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

let money = "0";

export default class InputKeyBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  handleKeyBoardClick(key) {
    if (_.isNumber(key)) {
      // 数字
      money += key;
      if (
        money.indexOf(".") > -1 &&
        money.substring(money.indexOf(".")).length > 3
      ) {
        return;
      }
      if (money.length > 1 && money.indexOf("0") === 0) {
        money = money.substring(1);
      }
      this.props.moneyChange(money);
    } else if (key === ".") {
      // 小数点
      if (money.indexOf(".") > -1) return;
      money += key;
    } else if (key === "删除") {
      // 删除
      money = money.slice(0, -1);
      if (money.length < 1) money = "0";
      this.props.moneyChange(money);
    } else if (key === "-") {
      // TODO: handle -
    } else if (key === "+") {
      // TODO: handle +
    } else if (key === "再记") {
      this.props.submitAgain()
    } else if (key === "保存") {
      money = ""
      this.props.submitSave()
    }
  }

  render() {
    return (
      <Wrapper>
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

InputKeyBoard.propTypes = {
  moneyChange: PropTypes.func.isRequired,
  submitSave: PropTypes.func.isRequired,
  submitAgain: PropTypes.func.isRequired,
};
