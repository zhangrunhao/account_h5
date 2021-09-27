import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Total = styled.div`
  margin-bottom: 0.2rem;
  padding: 0.2rem;
  background-color: #fff;
  border-radius: 0.1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  justify-content: space-around;
`;

const FontBold = styled.span`
  font-size: 0.32rem;
  color: #333030;
  font-weight: 700;
`;

const BorrowLendWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BorrowLend = styled.div`
  border-radius: 0.1rem;
  width: 40%;
  background-color: #fff;
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
`;
export default class Summary extends React.Component {
  render() {
    return (
      <Wrapper>
        <Total>
          <div>
            净资产: <FontBold>200.00</FontBold>
          </div>
          <div>
            总资产: <FontBold>200.00</FontBold>
          </div>
          <div>
            总借入: <FontBold>200.00</FontBold>
          </div>
        </Total>
        <BorrowLendWrapper>
          <BorrowLend>
            总借入: <FontBold>200.00</FontBold>
          </BorrowLend>
          <BorrowLend>
            总借出: <FontBold>200.00</FontBold>
          </BorrowLend>
        </BorrowLendWrapper>
      </Wrapper>
    );
  }
}
