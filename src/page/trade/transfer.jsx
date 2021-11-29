import { DoubleDown } from "@icon-park/react";
import { Button, Picker } from "antd-mobile";
import React, { useState, useEffect } from "react";
import styled from "styled-components";


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
