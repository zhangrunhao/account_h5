import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { Picker, List, DatePicker } from "antd-mobile";
import { getAccountList } from "../../api/account.js";

const Wrapper = styled.div``;

export default class ToolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateValue: new Date(Date.now()),
      accountData: [],
      accountValue: [],
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
        accountData,
        accountValue,
      });
      this.props.accountChange(accountValue)
    });
  }
  render() {
    return (
      <Wrapper>
        <List>
          <Picker
            cols={1}
            data={this.state.accountData}
            value={this.state.accountValue}
            onChange={(v) => {
              this.props.accountChange(v);
              this.setState({ accountValue: v });
            }}
          >
            <List.Item arrow="horizontal">账户</List.Item>
          </Picker>
          <DatePicker
            mode="date"
            title="Select Date"
            extra="Optional"
            value={this.state.dateValue}
            onChange={(v) => {
              this.props.dateChange(v);
              this.setState({ dateValue: v });
            }}
          >
            <List.Item arrow="horizontal">日期</List.Item>
          </DatePicker>
        </List>
      </Wrapper>
    );
  }
}

ToolList.propTypes = {
  accountChange: PropTypes.func.isRequired,
  dateChange: PropTypes.func.isRequired,
};
