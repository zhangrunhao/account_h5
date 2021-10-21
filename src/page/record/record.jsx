import React from "react";
import SortChoose from "./sort-choose/sort-choose.jsx";
import RecordInput from "./record-input/record-input.jsx";
import styled from "styled-components";
import TopBackNav from "../../common/top-back-nav/top-back-nav.jsx";

const Wrapper = styled.div`
  padding-top: 0.8rem;
`;
export default class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {},
    };
  }

  chooseItem(sort) {
    this.setState({
      sort,
    });
  }

  render() {
    return (
      <Wrapper>
        <TopBackNav>记录</TopBackNav>
        <SortChoose chooseItem={this.chooseItem.bind(this)}></SortChoose>
        <RecordInput sort={this.state.sort}></RecordInput>
      </Wrapper>
    );
  }
}
