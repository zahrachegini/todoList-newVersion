import React from "react";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import TodoApp from "./../components/TodoApp";

const Home = () => {
  return (
    <div>
      <Header />
      <TodoApp />
    </div>
  );
};

export default Home;
