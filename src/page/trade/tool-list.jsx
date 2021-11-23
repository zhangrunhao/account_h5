import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Picker, Button, DatePicker, Space } from "antd-mobile";
import moment from "moment";

const Wrapper = styled.div`
  background: #fff;
`;

export default (props) => {
  const [accountVisible, setAccountVisible] = useState(false);
  const [dateVisible, setDateVisible] = useState(false);
  return (
    <Wrapper>
      <Space style={props.hideAccount ? {"--gap": "0px"} : { "--gap": "18px" }}>
        {props.hideAccount ? (
          <></>
        ) : (
          <Button
            size="small"
            color="primary"
            fill="outline"
            onClick={(e) => setAccountVisible(true)}
          >
            {props.accountLabel}
          </Button>
        )}
        <Button
          size="small"
          color="primary"
          fill="outline"
          onClick={(e) => setDateVisible(true)}
        >
          {moment(props.date).format("YYYY年MM月DD日")}
        </Button>
      </Space>
      <Picker
        visible={accountVisible}
        cols={1}
        columns={props.accountData}
        onClose={(e) => setAccountVisible(false)}
        onConfirm={(e) => {
          props.accountChange(e);
        }}
      ></Picker>
      <DatePicker
        visible={dateVisible}
        onClose={() => {
          setDateVisible(false);
        }}
        max={new Date()}
        defaultValue={props.date}
        onConfirm={(value) => {
          props.dateChange(value);
        }}
      ></DatePicker>
    </Wrapper>
  );
};
