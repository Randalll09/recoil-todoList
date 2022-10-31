import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../recoilState';

const TodoListStats = () => {
  const { totalNum, totalCompleteNum, totalUnCompleteNum, percentage } =
    useRecoilValue(todoListStatsState);
  return (
    <div>
      TodoListStats
      <ul>
        <li>total:{totalNum}</li>
        <li>completed:{totalCompleteNum}</li>
        <li>uncompleted: {totalUnCompleteNum} </li>
        <li>percent:{percentage} %</li>
      </ul>
    </div>
  );
};

export default TodoListStats;
