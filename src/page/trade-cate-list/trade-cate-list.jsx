import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { List, Image } from "antd-mobile";
import { getTradeCateList } from "../../api/trade-cate.js";
import NavBar from "../../common/top-back-nav/top-back-nav.jsx";
import { useHistory } from "react-router";
import { AddOne } from "@icon-park/react";
import { getSvgSrc } from "../../util/svg";

const Wrapper = styled.div`
  padding-top: 0.8rem;
`;

export default (props) => {
  const [cateList, setCateList] = useState([]);
  const history = useHistory();
  const type = props.match.params["type"];
  const operate = type === "expend" ? 2 : 1;
  const title = type === "expend" ? "支出种类" : "收入种类";
  useEffect(() => {
    getTradeCateList().then((r) => {
      setCateList(r.data.filter((i) => i.operate === operate));
    });
  }, []);
  return (
    <Wrapper>
      <NavBar
        right={[
          <AddOne
            key="0"
            size="26"
            onClick={(e) => history.push(`/trade-cate-edit/${type}`)}
          />,
        ]}
      >
        {title}
      </NavBar>
      <List>
        {cateList.map((v) => (
          <List.Item
            key={v.id}
            prefix={<Image src={getSvgSrc(v.icon)}></Image>}
            onClick={(e) => history.push(`/trade-cate-edit/${v.id}`)}
          >
            {v.name}
          </List.Item>
        ))}
      </List>
    </Wrapper>
  );
};
