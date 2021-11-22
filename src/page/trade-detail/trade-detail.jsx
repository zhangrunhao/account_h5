import React, { useEffect, useState } from "react";
import { List, Image } from "antd-mobile";
import { Edit, Delete } from "@icon-park/react";
import styled from "styled-components";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import { getDetail } from "../../api/trade";
import Icon from "@icon-park/react/es/all";
import {
  getOperateSignByCode,
  getOperateDescByCode,
} from "../../util/trade-operate";

const Wrapper = styled.div`
  padding-top: 1rem;
`;

export default (props) => {
  const id = props.match.params["id"];
  const [data, setData] = useState({});
  useEffect(() => {
    getDetail(id).then((r) => {
      setData(r.data);
    });
  }, []);
  const editClick = function () {};
  const deleteClick = function () {};
  return (
    <Wrapper>
      <NavBar
        right={[
          <Edit key="0" size="26" onClick={() => editClick()} />,
          <Delete key="1" size="26" onClick={() => deleteClick()} />,
        ]}
      >
        交易详情
      </NavBar>
      <List>
        <List.Item
          extra={
            <Image
              width={40}
              height={40}
              fit="contain"
              src={data.accountIcon}
            ></Image>
          }
        >
          账户图标
        </List.Item>
        <List.Item extra={data.accountName}>账户名称</List.Item>
        <List.Item extra={data.money}>金额</List.Item>
        <List.Item extra={getOperateDescByCode(data.operate)}>操作</List.Item>
        <List.Item extra={data.remark}>备注</List.Item>
        <List.Item extra={data.spendDate}>花费日期</List.Item>
        <List.Item
          extra={
            data.tradeCateIcon ? (
              <Icon
                fill={
                  getOperateSignByCode(data.operate) == "add"
                    ? "#41AC34"
                    : "#EB6234"
                }
                size="30"
                type={data.tradeCateIcon}
              ></Icon>
            ) : (
              ""
            )
          }
        >
          分类图标
        </List.Item>
        <List.Item extra={data.tradeCateName}>分类名称</List.Item>
      </List>
    </Wrapper>
  );
};
