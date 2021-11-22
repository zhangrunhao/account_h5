import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { List } from "antd-mobile";
import Icon from "@icon-park/react/es/all";
import { withRouter } from "react-router";
import { getOperateSignByCode } from '../../util/trade-operate'

const Wrapper = styled.div``;

const Title = styled.div`
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.34rem;
  font-weight: 700;
`;

class AccountBillDayDetail extends React.Component {
  goRouter(id) {
    this.props.history.push(`/trade-detail/${id}`)
  }
  render() {
    return (
      <Wrapper>
        <Title>{this.props.info.date}</Title>
        <List>
          {this.props.info.trades.map((i) => (
            <List.Item
              onClick={this.goRouter.bind(this, i.tradeId)}
              key={i.tradeId}
              prefix={
                <Icon
                  type={i.tradeCateIcon}
                  size="24"
                  fill={
                    getOperateSignByCode(i.operate) == "add" ? "#41AC34" : "#EB6234"
                  }
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


export default withRouter(AccountBillDayDetail)
