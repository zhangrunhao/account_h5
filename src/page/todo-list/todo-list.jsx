import React from "react";
import { useRecoilValue } from "recoil";
import TodoItemCreator from "./todo-creator.jsx";
import TodoItem from "./todo-item.jsx";
import TodoListFilters from './todo-list-filters.jsx'
import TodoListStats from './todo-list-stats.jsx'
import { filteredTodoListState} from "./todo-state.js";

export default (props) => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <h1>TodoList</h1>
      <TodoListStats></TodoListStats>
      <TodoListFilters></TodoListFilters>
      <TodoItemCreator></TodoItemCreator>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem}></TodoItem>
      ))}
    </>
  );
};
