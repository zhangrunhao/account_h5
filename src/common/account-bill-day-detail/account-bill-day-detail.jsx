import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  background-color: #fff;
  margin: 0.3rem;
  border-radius: 0.1rem;
`;

const Title = styled.div`
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: space-around;
`;

const ListItem = styled.li`
  margin: 0.1rem 0;
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: space-around;
`;

const Flag = styled.div`
  width: 0.6rem;
  position: relative;
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    display: block;
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
  }
`;

const FlagIncome = styled(Flag)`
  &::after {
    background-color: #217870;
  }
`;

const FlagExpend = styled(Flag)`
  &::after {
    background-color: #cc6060;
  }
`;

const Desc = styled.div`
  width: 100%;
  font-size: 0.22rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Name = styled.div`
  height: 0.24rem;
  line-height: 0.24rem;
`;

const Remark = styled.div`
  color: #a7a7a7;
  height: 0.24rem;
  line-height: 0.24rem;
`;

const Num = styled.div`
  width: 2rem;
  font-size: 0.3rem;
`;

const NumExpend = styled(Num)`
  color: #cc6060;
`;

const NumIncome = styled(Num)`
  color: #217870;
`;

export default class AccountBillDayDetail extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>
          <div>{this.props.info.title}</div>
          <div>支:0.33 收:222</div>
        </Title>
        <ul>
          {this.props.info.array.map((i) => {
            console.log(i);
            return (
              <ListItem key={i.recordId}>
                {i.type === "expend" ? (
                  <FlagExpend></FlagExpend>
                ) : (
                  <FlagIncome></FlagIncome>
                )}
                <Desc>
                  <Name>{i.recordSortId}</Name>
                  <Remark>{i.remark}</Remark>
                </Desc>
                {i.type === "expend" ? (
                  <NumExpend>{i.count}</NumExpend>
                ) : (
                  <NumIncome>{i.count}</NumIncome>
                )}
              </ListItem>
            );
          })}
        </ul>
      </Wrapper>
    );
  }
}

AccountBillDayDetail.prototypes = {
  info: PropTypes.object.isRequired,
};
