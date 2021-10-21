import React from "react";
import SortChoose from "./SortChoose/SortChoose.jsx";
import RecordInput from "./RecordInput/RecordInput.jsx";
import styled from "styled-components";
import TopBackNav from "../../common/TopBackNav/TopBackNav.jsx";

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
