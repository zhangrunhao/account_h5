import React from "react";
import styled from "styled-components";
import BScroll from "@better-scroll/core";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import History from "../../../util/history.js";
import { getStyleValue, getWinHeight } from "../../../util/util.js";
import { getRecordSortList } from "../../../api/recordSort";
import { fillBase } from "../../../style/Styles.js";

const htmlFontSize = parseFloat(
  getStyleValue(document.querySelector("html"), "font-size")
);
const winHeight = getWinHeight();

const SortChooseWrapper = styled.div`
  background-color: ${fillBase};
  height: ${winHeight - htmlFontSize * (6.2 + 0.8)}px;
  overflow: hidden;
`;

const ScrollWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SortChooseItem = styled.div`
  width: 1.5rem;
  height: 0.8rem;
`;

const EditSortButton = styled.div`
  background-color: skyblue;
  border-radius: 50%;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  color: purple;
`;

const SortIcon = styled.img`
  display: block;
  margin: 0 auto;
  width: 0.4rem;
  height: 0.4rem;
`;

const SortName = styled.div`
  width: 100%;
  padding-top: 0.06rem;
  text-align: center;
`;

class SortChoose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortList: [],
    };
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-new
    new BScroll(this.node, {
      click: true,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.sortList === this.state.sortList) return false;
    return true;
  }

  componentDidMount() {
    getRecordSortList().then((r) => {
      this.setState({
        sortList: r.data,
      });
      if (r.data.length > 0) this.handleClickChooseItem(r.data[0]);
    });
  }

  editSortButtonClick() {
    const path = "/record_sort_list";
    History.push(this, path);
  }

  handleClickChooseItem(item) {
    this.props.chooseItem(item);
  }

  render() {
    return (
      <SortChooseWrapper
        ref={(node) => {
          this.node = node;
        }}
      >
        <ScrollWrapper>
          {this.state.sortList.map((v) => (
            <SortChooseItem
              onClick={this.handleClickChooseItem.bind(this, v)}
              key={v.recordSortId}
            >
              <SortIcon src={v.icon}></SortIcon>
              <SortName>{v.name}</SortName>
            </SortChooseItem>
          ))}
          <EditSortButton onClick={this.editSortButtonClick.bind(this)}>
            编辑
          </EditSortButton>
        </ScrollWrapper>
      </SortChooseWrapper>
    );
  }
}

export default withRouter(SortChoose);

SortChoose.propTypes = {
  chooseItem: PropTypes.func.isRequired,
};
