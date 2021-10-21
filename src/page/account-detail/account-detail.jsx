import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Modal, Toast, NavBar } from "antd-mobile";
import { Left, Edit, Delete } from "@icon-park/react";
import AccountBillDayDetail from "../../common/account-bill-day-detail/account-bill-day-detail.jsx";
import History from "../../util/history.js";
import { deleteAccount } from "../../api/account";

const alert = Modal.alert;

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
    };
  }

  componentDidMount() {
    const id = History.getParam(this, "id");
    this.setState({
      id,
    });
  }

  deleteClick() {
    alert("删除", "确定删除此账户吗?", [
      { text: "取消" },
      {
        text: "确定",
        onPress: () => {
          deleteAccount(this.state.id).then((r) => {
            Toast.success("删除成功");
            History.back(this);
          });
        },
      },
    ]);
  }

  editClick() {
    const path = `/account_edit/${this.state.id}`;
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
            <Edit key="0" size="26" onClick={() => this.editClick()} />,
            <Delete key="1" size="26" onClick={() => this.deleteClick()} />,
          ]}
        >
          账户id: {this.state.id}
        </NavBar>

        <Summary>余额: 200.00</Summary>

        <ul>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
          <AccountBillDayDetail></AccountBillDayDetail>
        </ul>
      </Wrapper>
    );
  }
}

export default withRouter(AccountDetail);
