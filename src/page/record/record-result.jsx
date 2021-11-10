import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "@icon-park/react/es/all";

const Wrapper = styled.div`
  width: 100%;
  height: 1rem;
  background: #fff;
`;

const SortIcon = styled.div`
  float: left;
  margin: 0.1rem 0;
  width: 10vw;
  height: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Remark = styled.input`
  float: left;
  height: 1rem;
  width: 60vw;
  overflow: hidden;
  padding-left: 0.1rem;

  font-size: 0.28rem;
  box-sizing: border-box;
  outline-style: none;
  border: none;
  border-radius: 3px;
`;

const ResultMoney = styled.div`
  max-width: 30vw;
  float: right;
  height: 1rem;
  line-height: 1rem;
  overflow: hidden;
`;

export default class RecordResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remark: "",
    };
  }
  handleRemarkInputChange(e) {
    const value = e.target.value;
    this.setState({
      remark: value,
    });
    this.props.remarkChange(value);
  }
  clearRemarkInput() {
    this.setState({
      remark: "",
    });
    this.props.remarkChange("");
  }
  getResultMoneyStyle() {
    const length = this.props.money.length;
    if (length < 6) {
      return {
        fontSize: ".6rem",
      };
    } else if (length < 10) {
      return {
        fontSize: ".4rem",
      };
    } else if (length < 13) {
      return {
        fontSize: ".3rem",
      };
    } else if (length < 20) {
      return {
        fontSize: ".2rem",
      };
    } else {
      return {
        fontSize: ".16rem",
      };
    }
  }
  render() {
    console.log(this.props.sort.icon);
    return (
      <Wrapper>
        <SortIcon>
          {this.props.sort.icon ? (
            <Icon
              size={34}
              size="28"
              fill="#333"
              strokeLinejoin="miter"
              strokeLinecap="butt"
              type={this.props.sort.icon}
            ></Icon>
          ) : (
            <></>
          )}
        </SortIcon>
        <Remark
          value={this.state.remark}
          onChange={this.handleRemarkInputChange.bind(this)}
          placeholder="请输入备注"
        ></Remark>
        <ResultMoney style={this.getResultMoneyStyle.call(this)}>
          {this.props.money}
        </ResultMoney>
      </Wrapper>
    );
  }
}

RecordResult.propTypes = {
  sort: PropTypes.object,
  money: PropTypes.string,
  remarkChange: PropTypes.func.isRequired,
};
