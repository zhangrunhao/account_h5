import React, { useEffect, useState } from "react";
import AccountBillDayDetail from "../../common/account-bill-day-detail/account-bill-day-detail.jsx";
import styled from "styled-components";
import BottomTabBar from "../../common/bottom-tab-bar/bottom-tab-bar.jsx";
import { getRecordList } from "../../api/record.js";
import { AllApplication } from "@icon-park/react";
import { NavBar, Popup } from "antd-mobile";
import SlidePopup from "./slide-popup.jsx";

const Wrapper = styled.div`
  padding-top: 1rem;
`;

const NavBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 100;
`;

export default () => {
  const [recordList, setRecordList] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const id = 1;
  useEffect(() => {
    getRecordList().then((r) => {
      setRecordList(r.data);
    });
  }, [id]);
  return (
    <Wrapper>
      <NavBarWrapper>
        <NavBar
          backArrow={<AllApplication />}
          onBack={() => setPopupVisible(true)}
        >
          账单
        </NavBar>
      </NavBarWrapper>
      <Popup
        visible={popupVisible}
        onMaskClick={() => setPopupVisible(false)}
        position="left"
        bodyStyle={{ minWidth: "40vw" }}
      >
        <SlidePopup></SlidePopup>
      </Popup>
      <ul>
        {recordList.map((i) => (
          <AccountBillDayDetail key={i.date} info={i}></AccountBillDayDetail>
        ))}
      </ul>
      <BottomTabBar active="bill"></BottomTabBar>
    </Wrapper>
  );
};
