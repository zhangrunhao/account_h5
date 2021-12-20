import React from "react";
import { Input, Form, Toast, Button } from "antd-mobile";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import styled from "styled-components";
import { registerUser, loginUser } from "../../api/user.js";
import { setToken } from "../../util/token.js";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  padding-top: 1rem;
`;

export default () => {
  const history = useHistory();
  const onFinish = (values) => {
    registerUser(values).then(() => {
      Toast.show({
        icon: "success",
        content: "注册成功",
      });
      loginUser(values).then((res) => {
        if (res && res.data) {
          setToken(res.data);
          history.push("/bill")
        }
      });
    });
  };
  return (
    <Wrapper>
      <NavBar>注册</NavBar>
      <Form
        layout="horizontal"
        onFinish={onFinish}
        footer={
          <Button block type="submit" color="primary">
            提交
          </Button>
        }
      >
        <Form.Item
          name="email"
          label="邮箱"
          required
          rules={[
            {
              required: true,
              message: "邮箱不可为空",
            },
          ]}
        >
          <Input placeholder="请输入邮箱" clearable></Input>
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          required
          rules={[
            {
              required: true,
              message: "密码不可为空",
            },
          ]}
        >
          <Input placeholder="请输入密码" clearable type="password"></Input>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};
