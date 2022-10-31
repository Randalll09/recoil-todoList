import { atom, selector } from 'recoil';

const todoListState = atom({
  key: 'todoListState',
  default: [],
});
const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});
const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);

      case 'Show All':
        return list;
    }
  },
});

const todoListStatsState = selector({
  key: 'todoListStats',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompleteNum = todoList.filter(
      (value) => value.isComplete
    ).length;
    const totalUnCompleteNum = todoList.filter(
      (value) => !value.isComplete
    ).length;
    const percentage = totalNum === 0 ? 0 : (totalCompleteNum / totalNum) * 100;
    return {
      totalNum,
      totalCompleteNum,
      totalUnCompleteNum,
      percentage,
    };
  },
});

export {
  todoListState,
  todoListFilterState,
  filteredTodoListState,
  todoListStatsState,
};
