import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState, todoListState } from '../recoilState';
import TodoItem from './TodoItem';
import TodoItemCreator from './todoItemCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div>
      <TodoItemCreator />
      <TodoListFilters />
      <ul>
        {todoList.map((value) => (
          <TodoItem key={value.id} item={value} />
        ))}
      </ul>
      <TodoListStats />
    </div>
  );
};

export default TodoList;
