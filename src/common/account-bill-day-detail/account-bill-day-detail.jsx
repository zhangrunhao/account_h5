import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { List } from "antd-mobile";
import Icon from "@icon-park/react/es/all";

const Wrapper = styled.div``;

const Title = styled.div`
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.34rem;
  font-weight: 700;
`;

const getTypeByOperate = function (type) {
  switch (type) {
    case 1:
      return "add";
    case 2:
      return "subtract";
    case 3:
      return "add";
    case 4:
      return "subtract";
    case 5:
      return "add";
    case 6:
      return "subtract";
    case 7:
      return "add";
    case 8:
      return "subtract";
  }
};

export default class AccountBillDayDetail extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>{this.props.info.date}</Title>
        <List>
          {this.props.info.trades.map((i) => (
            <List.Item
              key={i.id}
              prefix={
                <Icon
                  type={i.tradeCateIcon}
                  size="24"
                  fill={getTypeByOperate(i.operate) == "add" ? "#41AC34": "#EB6234"}
                  // strokeLinejoin="miter"
                  // strokeLinecap="butt"
                ></Icon>
              }
              description={i.remark}
              extra={i.money}
            >
              {i.tradeCateName}
            </List.Item>
          ))}
        </List>
      </Wrapper>
    );
  }
}

AccountBillDayDetail.prototypes = {
  info: PropTypes.object.isRequired,
};
