import React from "react";
import styled from "styled-components";
import { Image } from "antd-mobile";
import { getSvgSrc } from "../../util/svg";

const Wrapper = styled.div`
  width: 100%;
  height: 1rem;
  background: #fff;
`;

const CateIcon = styled.div`
  float: left;
  margin: 0.1rem 0;
  width: 10vw;
  height: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Remark = styled.input`
  float: left;
  height: 1rem;
  width: 60vw;
  overflow: hidden;
  padding-left: 0.1rem;

  font-size: 0.28rem;
  box-sizing: border-box;
  outline-style: none;
  border: none;
  border-radius: 3px;
`;

const ResultMoney = styled.div`
  max-width: 30vw;
  float: right;
  height: 1rem;
  line-height: 1rem;
  overflow: hidden;
`;

const getResultMoneyStyleByLength = function (length) {
  if (length < 6) {
    return {
      fontSize: ".6rem",
    };
  } else if (length < 10) {
    return {
      fontSize: ".4rem",
    };
  } else if (length < 13) {
    return {
      fontSize: ".3rem",
    };
  } else if (length < 20) {
    return {
      fontSize: ".2rem",
    };
  } else {
    return {
      fontSize: ".16rem",
    };
  }
};

export default (props) => {
  return (
    <Wrapper>
      {props.hideCate ? (
        <></>
      ) : (
        <CateIcon>
          {props.cate && props.cate.icon ? (
            <Image
              src={getSvgSrc(props.cate.icon)}
            ></Image>
          ) : (
            <>你真好看!</>
          )}
        </CateIcon>
      )}
      {props.hideInput ? (
        <></>
      ) : (
        <Remark
          value={props.remark}
          onChange={(v) => props.remarkChange(v.target.value)}
          placeholder="请输入备注"
        ></Remark>
      )}
      <ResultMoney style={getResultMoneyStyleByLength(props.money.length)}>
        {props.money}
      </ResultMoney>
    </Wrapper>
  );
};
