import { DoubleDown } from "@icon-park/react";
import { Button, Picker } from "antd-mobile";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAccountList } from "../../api/account.js";
import _ from 'loadsh';
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
  const [accountData, setAccountData] = useState([]);
  const [inValue, setInValue] = useState();
  const [outValue, setOutValue] = useState();
  const [inName, setInName] = useState("选择转入账户");
  const [outName, setOutName] = useState("选择转出账户");

  useEffect(() => {
    if (_.isArray(outValue) && _.isArray(inValue)) {
      const outAccountId = outValue[0];
      const inAccountId = inValue[0];
      props.transferAccountChange(outAccountId, inAccountId);
    }
  }, [inValue, outValue]);

  useEffect(() => {
    getAccountList().then((r) => {
      const accountData = r.data.map((i) => {
        return {
          label: i.name,
          value: i.id,
        };
      });
      setAccountData([accountData]);
    });
  }, []);

  return (
    <Wrapper>
      <Button block size="large" onClick={() => setOutPickerVisible(true)}>
        {outName}
      </Button>
      <IconWrapper>
        <DoubleDown size="30"></DoubleDown>
      </IconWrapper>
      <Button block size="large" onClick={() => setInPickerVisible(true)}>
        {inName}
      </Button>

      {/* out Picker */}
      <Picker
        visible={outPickerVisible}
        cols={1}
        columns={accountData}
        defaultValue={outValue}
        onClose={() => {
          setOutPickerVisible(false);
        }}
        onConfirm={(v) => {
          const accountName = accountData[0].find((i) => {
            return i.value === v[0];
          }).label;
          setOutValue(v);
          setOutName(accountName);
        }}
      ></Picker>

      {/* in Picker */}
      <Picker
        visible={inPickerVisible}
        cols={1}
        columns={accountData}
        defaultValue={inValue}
        onClose={() => {
          setInPickerVisible(false);
        }}
        onConfirm={(v) => {
          const accountName = accountData[0].find((i) => {
            return i.value === v[0];
          }).label;
          setInValue(v);
          setInName(accountName);
        }}
      ></Picker>
    </Wrapper>
  );
};
