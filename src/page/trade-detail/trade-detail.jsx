import React, { useEffect, useState } from "react";
import { List, Toast, Dialog, Image } from "antd-mobile";
import { Edit, Delete } from "@icon-park/react";
import styled from "styled-components";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import { getDetail, deleteTrade } from "../../api/trade";
import {
  getOperateColorByCode,
  getOperateDescByCode,
} from "../../util/trade-operate";
import { useHistory } from "react-router";
import TradeOperation from "../../config/trade-operate.json";
import { getSvgSrc } from "../../util/svg.js";

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
      _.isFunction(props.reject) && props.reject(r.data);
    });
  }, []);
  const editClick = function () {
    if (
      data.operate === TradeOperation.Income.code ||
      data.operate === TradeOperation.Expend.code
    ) {
      history.push(`/trade/${id}`);
    } else if (
      data.operate === TradeOperation.Borrow.code ||
      data.operate === TradeOperation.Expend.code
    ) {
      history.push(`/borrow-lend-edit/${id}`);
    } else if (
      data.operate === TradeOperation.Repayment.code ||
      data.operate === TradeOperation.Receive.code
    ) {
      history.push(`/repayment-receive-edit/${id}/edit`);
    } else {
      Dialog.alert({
        title: "十分抱歉",
        content: "此类型,暂时并不支持编辑. 请删除后添加",
        closeOnMaskClick: true,
      });
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
        {props.title}交易详情
      </NavBar>
      {props.children}
      <List>
        <List.Item
          extra={
            data.accountIcon ? (
              <Image src={getSvgSrc(data.accountIcon)}></Image>
            ) : (
              <></>
            )
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
              <Image src={getSvgSrc(data.tradeCateIcon)}></Image>
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
