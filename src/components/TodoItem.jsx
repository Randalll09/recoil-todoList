import React from 'react';
import { todoListState } from '../recoilState';
import { useRecoilState } from 'recoil';

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };
  function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  return (
    <li>
      <div>
        <input type="text" value={item.text} onChange={editItemText} />
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
        <button onClick={deleteItem}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
