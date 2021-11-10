import React from "react";
import styled from "styled-components";
import BScroll from "@better-scroll/core";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Transfer from "./transfer.jsx";
import History from "../../util/history.js";
import { getStyleValue, getWinHeight } from "../../util/util.js";
import { getRecordSortList } from "../../api/recordSort";
import { fillBase } from "../../style/Styles.js";

const htmlFontSize = parseFloat(
  getStyleValue(document.querySelector("html"), "font-size")
);
const winHeight = getWinHeight();

const SortChooseWrapper = styled.div`
  // background-color: ${fillBase};
  // height: ${winHeight - htmlFontSize * (6.2 + 0.8)}px;
  overflow: hidden;
`;

const ScrollWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SortChooseItem = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-color: #fff;
  border-radius: 20px;
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
      sortList: {
        expend: [],
        income: [],
      },
    };
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-new
    new BScroll(this.node, {
      click: true,
    });
  }

  componentDidMount() {
    getRecordSortList().then((r) => {
      this.setState({
        sortList: {
          expend: r.data.filter((i) => i.type === "expend"),
          income: r.data.filter((i) => i.type === "income"),
        },
      });
      const sort = this.state.sortList[this.props.type][0]
      this.props.sortChange((sort || {}));
    });
  }

  editSortButtonClick() {
    const path = "/record-sort-list";
    History.push(this, path);
  }

  render() {
    return (
      <SortChooseWrapper
        ref={(node) => {
          this.node = node;
        }}
      >
        {this.props.type === "transfer" ? (
          <Transfer></Transfer>
        ) : (
          <ScrollWrapper>
            {this.state.sortList[this.props.type].map((v) => (
              <SortChooseItem
                onClick={e => this.props.sortChange(v)}
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
        )}
      </SortChooseWrapper>
    );
  }
}

export default withRouter(SortChoose);

SortChoose.propTypes = {
  sortChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
