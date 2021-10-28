import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Edit, Delete } from "@icon-park/react";
import AccountBillDayDetail from "../../common/account-bill-day-detail/account-bill-day-detail.jsx";
import History from "../../util/history.js";
import { deleteAccount } from "../../api/account.js";
import { getRecordListByAccount } from "../../api/record.js";
import { recordToList } from "../../util/record.js";
import { Dialog, Toast } from "antd-mobile";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";

const Summary = styled.div`
  background-color: #fff;
  margin: 0.3rem;
  border-radius: 0.1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.34rem;
`;

const Wrapper = styled.div`
  padding-top: 1rem;
`;

class AccountDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      recordList: [],
    };
  }

  componentDidMount() {
    const id = History.getParam(this, "id");
    getRecordListByAccount({
      accountId: id,
    }).then((r) => {
      this.setState({
        id,
        recordList: recordToList(r.data),
      });
    });
  }

  deleteClick() {
    Dialog.confirm({
      title: "删除",
      content: "确定删除此账户吗?",
      onConfirm: () => {
        deleteAccount(this.state.id).then((r) => {
          Toast.show({
            icon: "success",
            content: "删除成功",
          });
          History.back(this);
        });
      },
    });
  }

  editClick() {
    const path = `/account-edit/${this.state.id}`;
    History.push(this, path);
  }

  render() {
    return (
      <Wrapper>
        <NavBar
          right={[
            <Edit key="0" size="26" onClick={() => this.editClick()} />,
            <Delete key="1" size="26" onClick={() => this.deleteClick()} />,
          ]}
        >
          账户id: {this.state.id}
        </NavBar>

        <Summary>余额: 200.00</Summary>

        <ul>
          {this.state.recordList.map((i) => (
            <AccountBillDayDetail key={i.title} info={i}></AccountBillDayDetail>
          ))}
        </ul>
      </Wrapper>
    );
  }
}

export default withRouter(AccountDetail);
