import React from "react";
import styled from "styled-components";
import { Collapse } from "antd-mobile";
import Icon from "@icon-park/react/es/all";

const IconParentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const IconWrapper = styled.div`
  flex: 0 0 20%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default (props) => {
  return (
    <Collapse
      defaultActiveKey={[props.iconList[0] ? props.iconList[0].key : ""]}
    >
      {props.iconList.map((i) => {
        return (
          <Collapse.Panel key={i.key} title={i.title}>
            <IconParentWrapper>
              {i.array.map((ii) => {
                return (
                  <IconWrapper key={ii}>
                    <Icon
                      size={30}
                      type={ii}
                      onClick={() => props.iconClick(ii)}
                    ></Icon>
                  </IconWrapper>
                );
              })}
            </IconParentWrapper>
          </Collapse.Panel>
        );
      })}
    </Collapse>
  );
};
