import { DoubleDown } from "@icon-park/react";
import { Button, Picker } from "antd-mobile";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAccountList } from "../../api/account.js";
import _ from "loadsh";
import { invalid } from "moment";

const Wrapper = styled.div`
  margin-top: 1rem;
`;

const IconWrapper = styled.div`
  height: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default (props) => {
  const [inPickerVisible, setInPickerVisible] = useState(false);
  const [outPickerVisible, setOutPickerVisible] = useState(false);
  // props.outAccount, props.inAccount

  const [inValue, setInValue] = useState();
  const [outValue, setOutValue] = useState();
  const [inName, setInName] = useState("选择转入账户");
  const [outName, setOutName] = useState("选择转出账户");

  return (
    <Wrapper>
      <Button block size="large" onClick={() => setOutPickerVisible(true)}>
        {props.outAccount.label}
      </Button>
      <IconWrapper>
        <DoubleDown size="30"></DoubleDown>
      </IconWrapper>
      <Button block size="large" onClick={() => setInPickerVisible(true)}>
        {props.inAccount.label}
      </Button>

      {/* out Picker */}
      <Picker
        visible={outPickerVisible}
        cols={1}
        value={[props.outAccount.value]}
        columns={props.accountData}
        onClose={() => {
          setOutPickerVisible(false);
        }}
        onConfirm={(v) => {
          props.transferAccountChange({
            outAccountId: v[0],
          });
        }}
      ></Picker>

      {/* in Picker */}
      <Picker
        visible={inPickerVisible}
        cols={1}
        columns={props.accountData}
        value={[props.inAccount.value]}
        onClose={() => {
          setInPickerVisible(false);
        }}
        onConfirm={(v) => {
          props.transferAccountChange({
            inAccountId: v[0],
          });
        }}
      ></Picker>
    </Wrapper>
  );
};
