import { Logout, People, Setting } from "@icon-park/react";
import { List } from "antd-mobile";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { removeToken } from "../../util/token.js";

const Wrapper = styled.div``;

export default (props) => {
  const history = useHistory();
  const logout = () => {
    removeToken();
    history.push("/login");
  };
  return (
    <Wrapper>
      <List>
        <List.Item prefix={<People></People>}>个人</List.Item>
        <List.Item prefix={<Setting></Setting>}>设置</List.Item>
        <List.Item prefix={<Logout></Logout>} onClick={() => logout()}>
          退出登录
        </List.Item>
      </List>
    </Wrapper>
  );
};
