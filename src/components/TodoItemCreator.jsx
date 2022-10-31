import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoilState';

const TodoItemCreator = () => {
  const [input, setInput] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: input,
        isComplete: false,
      },
    ]);
    setInput('');
  };
  let id = 0;
  function getId() {
    return id++;
  }
  return (
    <div>
      <input
        type={'text'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />{' '}
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
