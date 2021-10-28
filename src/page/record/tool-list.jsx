import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { Picker, Button, DatePicker } from "antd-mobile";
import { getAccountList } from "../../api/account.js";

const Wrapper = styled.div``;
let now = new Date();

export default class ToolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datePickerVisible: false,
      accountPickerVisible: false,
      dateValue: now,
      accountValue: [],
      accountData: [],
    };
  }
  componentDidMount() {
    getAccountList().then((r) => {
      const accountData = r.data.map((i) => {
        return {
          label: i.name,
          value: i.accountId,
        };
      });
      const accountValue = accountData.length > 0 ? [accountData[0].value] : [];
      this.setState({
        accountData: [accountData],
        accountValue,
      });
      this.props.accountChange(accountValue);
    });
  }
  render() {
    return (
      <Wrapper>
        <Button
          onClick={() => {
            this.setState({
              accountPickerVisible: true,
            });
          }}
        >
          账户: {this.state.accountValue}
        </Button>
        <Picker
          visible={this.state.accountPickerVisible}
          cols={1}
          columns={this.state.accountData}
          defaultValue={this.state.accountValue}
          onClose={() => {
            this.setState({
              accountPickerVisible: false,
            });
          }}
          onConfirm={(v) => {
            this.setState({ accountValue: v });
            this.props.accountChange(v);
          }}
        ></Picker>
        <Button
          onClick={() => {
            this.setState({
              datePickerVisible: true,
            });
          }}
        >
          {this.state.dateValue.toLocaleDateString()}
        </Button>
        <DatePicker
          visible={this.state.datePickerVisible}
          onClose={() => {
            this.setState({
              datePickerVisible: false,
            });
          }}
          defaultValue={this.state.dateValue}
          max={now}
          onConfirm={(value) => {
            this.setState({
              dateValue: value,
            });
            this.props.dateChange(value);
          }}
        ></DatePicker>
      </Wrapper>
    );
  }
}

ToolList.propTypes = {
  accountChange: PropTypes.func.isRequired,
  dateChange: PropTypes.func.isRequired,
};
