import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Delete } from "@icon-park/react";
import { Dialog, Form, Toast, Button, Input, Radio, Space } from "antd-mobile";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";

import {
  addTradeCate,
  updateTradeCate,
  deleteTradeCate,
  getTradeCate
} from "../../api/trade-cate";

import { useHistory } from "react-router";
const Wrapper = styled.div`
  padding-top: 1rem;
`;

export default (props) => {
  const id = props.match.params["id"];
  const [title, setTitle] = useState("新建");
  const [form] = Form.useForm();
  const history = useHistory();
  const onFinish = (values) => {
    if (id === "expend" && id === "income") {
      addTradeCate(values).then(() => {
        Toast.show({
          icon: "success",
          content: "添加成功",
        });
        history.goBack();
      });
    } else {
      updateTradeCate(
        Object.assign(values, {
          id,
        })
      ).then(() => {
        Toast.show({
          icon: "success",
          content: "编辑成功",
        });
        history.goBack();
      });
    }
  };
  const deleteClick = () => {
    Dialog.confirm({
      title: "删除",
      content: "确定删除此记录类型吗?",
      onConfirm: () => {
        deleteTradeCate(id).then((r) => {
          Toast.show({
            icon: "success",
            content: "删除成功",
          });
          history.goBack();
        });
      },
    });
  };
  useEffect(() => {
    if (id !== "expend" && id !== "income") {
      setTitle("编辑");
      getTradeCate(id).then((r) => {
        form.setFieldsValue({
          name: r.data.name,
          icon: r.data.icon,
          operate: r.data.operate,
        });
      });
    } else if (id === "expend"){
      setTitle("新建支出种类");
      form.setFieldsValue({
        operate: 2,
      });
    } else if (id === "income") {
      setTitle("新建收入种类");
      form.setFieldsValue({
        operate: 1,
      });
    }
  }, [id]);
  return (
    <Wrapper>
      <NavBar
        right={
          id === "new"
            ? []
            : [<Delete key="0" size="26" onClick={() => deleteClick()} />]
        }
      >
        {title}
      </NavBar>
      <Form
        form={form}
        layout="horizontal"
        onFinish={onFinish}
        footer={
          <Button block type="submit" color="primary">
            提交
          </Button>
        }
      >
        <Form.Item
          name="name"
          label="名称"
          required
          rules={[
            {
              required: true,
              message: "名称不可为空",
            },
          ]}
        >
          <Input placeholder="请输入名称" clearable></Input>
        </Form.Item>
        <Form.Item
          name="operate"
          label="操作"
          required
          disabled
          rules={[
            {
              required: true,
              message: "类型不可为空",
            },
          ]}
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={1}>收入</Radio>
              <Radio value={2}>支出</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="icon"
          label="图标"
          required
          rules={[
            {
              required: true,
              message: "图标不可为空",
            },
          ]}
        >
          <Input placeholder="暂时为IconPark对应名称" clearable></Input>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};
