import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="container m-auto md:px-32 py-8 px-5">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
