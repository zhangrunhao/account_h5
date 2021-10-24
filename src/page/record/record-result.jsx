import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Wrapper = styled.div`
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

const Remark = styled.input`
  float: left;
  height: 1rem;
  width: 60%;
  overflow: hidden;
  padding-left: 0.1rem;

  font-size: 0.28rem;
  box-sizing: border-box;
  outline-style: none;
  border: none;
  border-radius: 3px;
`;

const ResultMoney = styled.div`
  float: right;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.6rem;
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
  forceClearRemark() {}
  render() {
    return (
      <Wrapper>
        <SortIcon src={this.props.sort.icon}></SortIcon>
        <SortName>{this.props.sort.name}</SortName>
        <Remark
          value={this.state.remark}
          onChange={this.handleRemarkInputChange.bind(this)}
          placeholder="请输入备注"
          // onBlur={this.remarkOnBlur.bind(this)}
        ></Remark>
        <ResultMoney>{this.props.money}</ResultMoney>
      </Wrapper>
    );
  }
}

RecordResult.propTypes = {
  sort: PropTypes.object,
  money: PropTypes.string,
  remarkChange: PropTypes.func.isRequired,
};
