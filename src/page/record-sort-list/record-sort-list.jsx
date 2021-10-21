import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Left, AddOne, ArrowRight } from "@icon-park/react";
import History from "../../util/history.js";
import { getRecordSortList } from "../../api/recordSort.js";
import { NavBar } from "antd-mobile";
const Wrapper = styled.div`
  padding-top: 0.8rem;
`;

const List = styled.ul`
  width: 100%;
`;

const Item = styled.li`
  width: 100%;
  height: 1rem;
  display: flex;
`;

const SingleItem = styled(Item)`
  background-color: aliceblue;
`;

const DoubleItem = styled(Item)`
  background-color: bisque;
`;

const Image = styled.img`
  width: 1rem;
  height: 1rem;
  flex: 0 0 1rem;
`;

const Name = styled.div`
  height: 1rem;
  line-height: 1rem;
  flex: 1 1 auto;
`;

const Icon = styled.div`
  width: 1rem;
  flex: 0 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
          mode="light"
          icon={<Left size="26" />}
          onLeftClick={() => History.back(this)}
          rightContent={[
            <AddOne key="0" size="26" onClick={() => this.addClick()} />,
          ]}
        >
          收支记录类型列表
        </NavBar>

        <List>
          {this.state.sortList.map((v, i) => {
            const CompItem = i % 2 === 0 ? DoubleItem : SingleItem;
            return (
              <CompItem key={v.recordSortId}>
                <Image src={v.icon} alt="" />
                <Name>{v.name}</Name>
                <Icon>
                  <ArrowRight
                    onClick={this.arrowRightClick.bind(this, v.recordSortId)}
                    theme="outline"
                    size="24"
                    fill="#000000"
                  />
                </Icon>
              </CompItem>
            );
          })}
        </List>
      </Wrapper>
    );
  }
}

export default withRouter(RecordSortList);
