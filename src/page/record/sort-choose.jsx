import React from "react";
import styled from "styled-components";
import BScroll from "@better-scroll/core";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Icon from "@icon-park/react/es/all";

import Transfer from "./transfer.jsx";
import History from "../../util/history.js";
import { getRecordSortList } from "../../api/recordSort";

const SortChooseWrapper = styled.div`
  overflow: hidden;
`;

const ScrollWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const ScrollItem = styled.div`
  flex: 0 0 25%;
  height: 1.2rem;
`;

const IconWrapper = styled.div`
  background-color: #fff;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.35rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconName = styled.div`
  text-align: center;
  height: 0.4rem;
  line-height: 0.4rem;
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

class SortChoose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortList: {
        expend: [],
        income: [],
      },
    };

    getRecordSortList().then((r) => {
      this.setState({
        sortList: {
          expend: r.data.filter((i) => i.type === "expend"),
          income: r.data.filter((i) => i.type === "income"),
        },
      });
      const sort = this.state.sortList[this.props.type][0];
      this.props.sortChange(sort || {});
    });

    
  }
  
  componentDidUpdate() {}
  
  componentDidMount() {
    // eslint-disable-next-line no-new
    new BScroll(this.node, {
      click: true,
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
              <ScrollItem key={v.recordSortId}>
                <IconWrapper>
                  <Icon
                    onClick={(e) => {
                      this.props.sortChange(v);
                    }}
                    size={34}
                    type={v.icon}
                    size="28"
                    fill="#333"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  ></Icon>
                </IconWrapper>
                <IconName>{v.name}</IconName>
              </ScrollItem>
            ))}
            <ScrollItem>
              <EditSortButton onClick={this.editSortButtonClick.bind(this)}>
                编辑
              </EditSortButton>
            </ScrollItem>
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
