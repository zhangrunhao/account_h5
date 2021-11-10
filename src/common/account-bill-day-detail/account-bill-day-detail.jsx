import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { List } from "antd-mobile";
import { IncomeOne, ExpensesOne } from "@icon-park/react";

const Wrapper = styled.div``;

const Title = styled.div`
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: .34rem;
  font-weight: 700;
`;

export default class AccountBillDayDetail extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>
          {this.props.info.date}
        </Title>
        <List>
          {this.props.info.array.map((i) => (
            <List.Item
              key={i.recordId}
              prefix={
                i.type === "expend" ? (
                  <ExpensesOne size="28" fill="#cc6060"></ExpensesOne>
                ) : (
                  <IncomeOne size="28" fill="#217870"></IncomeOne>
                )
              }
              description={i.remark}
              extra={i.count}
            >
              {i.sortName}
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
