import React from "react";
import styled from "styled-components";
import _ from "loadsh";
import NP from 'number-precision'
import { colorTextBase, fillBase, fillTap } from "../../style/Styles.js";
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
      // 数字 非0
      if (
        money.indexOf(".") > -1 && //  存在.
        money.indexOf("+") < 0 && // 不存在+
        money.indexOf("-") < 0 && // 不存在-
        money.substring(money.lastIndexOf(".")).length > 2 // 小数点后, 最多两位
      ) {
        return;
      }

      if (
        money.indexOf(".") > -1 && //存在.
        money.indexOf("+") > -1 && // 存在 +
        money.lastIndexOf(".") > money.lastIndexOf("+") && // 最后. 比 最后+ 更靠后
        money.substring(money.lastIndexOf(".")).length > 2 // 最后一个. 后面最多两位
      ) {
        return;
      }

      if (
        money.indexOf(".") > -1 && //存在.
        money.indexOf("-") > -1 && // 存在 -
        money.lastIndexOf(".") > money.lastIndexOf("-") && // 最后. 比 最后+ 更靠后
        money.substring(money.lastIndexOf(".")).length > 2 // 最后一个. 后面最多两位
      ) {
        return;
      }

      if (money === "0") {
        // 只有一位, 并且第一位是0
        money = "";
      }
      money += key;
    } else if (key === ".") {
      //小数点
      if (
        money.indexOf(".") > -1 && // 存在.
        money.indexOf("+") < 0 && // 不存在+
        money.indexOf("-") < 0 // 不存在-
      ) {
        return;
      }

      if (
        money.indexOf(".") > -1 && // 存在.
        money.indexOf("+") > -1 && // 存在+
        money.lastIndexOf(".") > money.lastIndexOf("+") // 最后一个. 在最后一个+ 的后面
      ) {
        return;
      }

      if (
        money.indexOf(".") > -1 && // 存在.
        money.indexOf("-") > -1 && // 存在-
        money.lastIndexOf(".") > money.lastIndexOf("-") // 最后一个. 在最后一个- 的后面
      ) {
        return;
      }

      if (
        money.indexOf("+") > -1 && // 存在+
        money.length === money.lastIndexOf("+") + 1 // 最后一位是 +
      ) {
        return;
      }

      if (
        money.indexOf("-") > -1 && // 存在-
        money.length === money.lastIndexOf("-") + 1 // 最后一位是 -
      ) {
        return;
      }

      money += key;
    } else if (key === "删除") {
      // 删除
      money = money.slice(0, -1);

      if (money.length < 1) {
        money = "0";
      }
    } else if (key === "-") {
      // -
      if (money.indexOf("-") > -1) {
        // 存在 -
        const arr = money.split("-"); // 先计算
        money = NP.minus(parseFloat(arr[0]), parseFloat(arr[1])).toString();
        if (parseFloat(money) < 0) money = "0"; // 如果 - 完, 小于0, 就等于0
      }

      if (money.indexOf("+") > -1) {
        // 存在+
        const arr = money.split("+"); // 先计算
        money = NP.plus(parseFloat(arr[0]), parseFloat(arr[1])).toString();
      }

      if (
        money.indexOf(".") > -1 && // 存在.
        money.lastIndexOf(".") + 1 === money.length // .在最后一位
      ) {
        money = money.substring(0, money.lastIndexOf(".")); // 截取最后一位.
      }

      money += "-";
    } else if (key === "+") {
      // +
      if (money.indexOf("+") > -1) {
        // 存在+
        const arr = money.split("+"); // 先计算
        money = NP.plus(parseFloat(arr[0]), parseFloat(arr[1])).toString();
      }

      if (money.indexOf("-") > -1) {
        // 存在 -
        const arr = money.split("-"); // 先计算
        money = NP.minus(parseFloat(arr[0]), parseFloat(arr[1])).toString();
        if (parseFloat(money) < 0) money = "0"; // 如果 - 完, 小于0, 就等于0
      }

      if (
        money.indexOf(".") > -1 && // 存在.
        money.lastIndexOf(".") + 1 === money.length // .在最后一位
      ) {
        money = money.substring(0, money.lastIndexOf(".")); // 截取最后一位.
      }

      money += "+";
    } else if (key === "再记") {
      // 再记
      money = "";
      this.props.submitAgain();
      return;
    } else if (key === "保存") {
      // 保存
      money = "";
      this.props.submitSave();
      return;
    }
    this.props.moneyChange(money);
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
  