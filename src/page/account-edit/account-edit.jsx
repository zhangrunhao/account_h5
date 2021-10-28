import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  addAccount,
  updateAccount,
  getAccountDetail,
} from "../../api/account.js";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import React, { useEffect, useState } from "react";
import { Form, Input, Button, Space, Radio, Toast } from "antd-mobile";
const Wrapper = styled.div`
  padding-top: 1rem;
`;

export default (props) => {
  const history = useHistory();
  const [form] = Form.useForm();
  const [title, setTitle] = useState("新建");
  const id = props.match.params["id"];
  const onFinish = (values) => {
    if (id === "new") {
      addAccount(values).then(() => {
        Toast.show({
          icon: "success",
          content: "添加成功",
        });
        history.goBack();
      });
    } else {
      updateAccount(Object.assign(values, {
        accountId: id,
      })).then(() => {
        Toast.show({
          icon: "success",
          content: "编辑成功",
        });
        history.goBack();
      });
    }
  };

  useEffect(() => {
    if (id !== "new") {
      setTitle("编辑");
      getAccountDetail(id).then((r) => {
        form.setFieldsValue({
          name: r.data.name,
          type: r.data.type,
          icon: r.data.icon,
          color: r.data.color,
        });
      });
    }
  }, [id]);

  return (
    <Wrapper>
      <NavBar>{title}账户</NavBar>
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
          name="type"
          label="类型"
          required
          rules={[
            {
              required: true,
              message: "类型不可为空",
            },
          ]}
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value="1">资产</Radio>
              <Radio value="2">负债</Radio>
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
          <Input placeholder="图标地址" clearable></Input>
        </Form.Item>
        <Form.Item
          name="color"
          label="颜色"
          required
          rules={[
            {
              required: true,
              message: "颜色不可为空",
            },
          ]}
        >
          <Input placeholder="输入颜色" clearable></Input>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};
