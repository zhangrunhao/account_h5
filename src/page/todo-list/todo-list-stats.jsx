import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "./todo-state";

export default (props) => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);
  return (
    <ul>
      <li>totalNum: {totalNum}</li>
      <li>totalCompletedNum: {totalCompletedNum}</li>
      <li>totalUncompletedNum: {totalUncompletedNum}</li>
      <li>percentCompleted: {percentCompleted}</li>
    </ul>
  );
};
