import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { List } from "antd-mobile";
import Icon from "@icon-park/react/es/all";
import History from "../../util/history.js";
import { getRecordSortList } from "../../api/recordSort.js";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";


const Wrapper = styled.div`
  padding-top: 0.8rem;
`;

class RecordSortList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortList: [],
    };
  }

  componentDidMount() {
    getRecordSortList().then((r) => {
      this.setState({
        sortList: r.data,
      });
    });
  }

  arrowRightClick(id) {
    const path = `/record-sort-edit/${id}`;
    History.push(this, path);
  }

  addClick() {
    const path = "/record-sort-edit/new";
    History.push(this, path);
  }

  render() {
    return (
      <Wrapper>
        <NavBar
          right={[<Icon key="0" type="AddOne" size="26" onClick={() => this.addClick()} />]}
        >
          收支记录类型列表
        </NavBar>
        <List>
          {this.state.sortList.map((v) => (
            <List.Item
              key={v.recordSortId}
              prefix={<Icon type={v.icon}></Icon>}
              onClick={this.arrowRightClick.bind(this, v.recordSortId)}
            >
              {v.name}
            </List.Item>
          ))}
        </List>
      </Wrapper>
    );
  }
}

export default withRouter(RecordSortList);
