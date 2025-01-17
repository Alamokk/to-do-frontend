"use client";

import useGetTodos from "@hooks/useGetTodos";
import TodoListItem from "./todo-list-item";
import { Todo } from "@models/todo";

export default function TodoList() {
  const todos: Todo[] = useGetTodos();

  return (
    <div>
      {todos?.map((todo, index) => (
        <TodoListItem key={index} todo={todo} />
      ))}
    </div>
  );
}
