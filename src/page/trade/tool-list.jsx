import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { Picker, Button, DatePicker, Space } from "antd-mobile";
import moment from 'moment'
import { getAccountList } from "../../api/account.js";

const Wrapper = styled.div`
  background: #fff;
`;

let now = new Date();

export default class ToolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datePickerVisible: false,
      accountPickerVisible: false,
      dateValue: now,
      accountName: "",
      accountValue: [],
      accountData: [],
    };
  }
  componentDidMount() {
    getAccountList().then((r) => {
      const accountData = r.data.map((i) => {
        return {
          label: i.name,
          value: i.id,
        };
      });
      const accountValue = accountData.length > 0 ? [accountData[0].value] : [];
      const accountName = accountData.find((i) => {
        return i.value === accountValue[0]
      }).label
      this.setState({
        accountData: [accountData],
        accountValue,
        accountName,
      });
      this.props.accountChange(accountValue);
    });
  }
  render() {
    return (
      <Wrapper>
        <Space style={{ "--gap": "18px" }}>
          <Button
            size="small"
            color='primary'
            fill='outline'
            onClick={() => {
              this.setState({
                accountPickerVisible: true,
              });
            }}
          >
            账户: {this.state.accountName}
          </Button>
          <Button
            size="small"
            color='primary'
            fill='outline'
            onClick={() => {
              this.setState({
                datePickerVisible: true,
              });
            }}
          >
            {moment(this.state.dateValue).format('YYYY年MM月DD日')}
          </Button>
        </Space>
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
            const accountName = this.state.accountData[0].find((i) => {
              return i.value === v[0]
            }).label
            this.setState({ 
              accountValue: v,
              accountName
            });
            this.props.accountChange(v);
          }}
        ></Picker>
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
            console.log(value)
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
