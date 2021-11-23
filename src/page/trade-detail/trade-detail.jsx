import React, { useEffect, useState } from "react";
import { List, Image, Toast, Dialog } from "antd-mobile";
import { Edit, Delete } from "@icon-park/react";
import styled from "styled-components";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import { getDetail, deleteTrade } from "../../api/trade";
import Icon from "@icon-park/react/es/all";
import {
  getOperateSignByCode,
  getOperateDescByCode,
} from "../../util/trade-operate";
import { useHistory } from "react-router";

const Wrapper = styled.div`
  padding-top: 1rem;
`;

export default (props) => {
  const id = props.match.params["id"];
  const history = useHistory();
  const [data, setData] = useState({});
  useEffect(() => {
    getDetail(id).then((r) => {
      setData(r.data);
    });
  }, []);
  const editClick = function () {
    if (data.operate === 1 || data.operate === 2) {
      history.push(`/trade/${id}`)
    } else {
      
      Dialog.alert({
        title: "十分抱歉",
        content: '此类型,暂时并不支持编辑. 请删除后添加',
        closeOnMaskClick: true,
      })
      
    }
  };
  const deleteClick = function () {
    Dialog.confirm({
      title: "删除",
      content: "确定删除此交易记录吗?",
      onConfirm: () => {
        deleteTrade(id).then(() => {
          Toast.show({
            icon: "success",
            content: "删除成功",
          });
          history.goBack();
        });
      },
    });
  };
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
