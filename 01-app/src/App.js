import React from "react";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import Counter from "./components/reactHooks";

import "./style.css"

const App = () => {
  return (

    <div className="todo-container">
      <Counter />
      <Header text="My To Do List App"/>
      <TodoItem text="Eat"/>
      <TodoItem text="Code"/>
      <TodoItem completed = {true} text="Sleep"/>
      <TodoItem text="Repeat"/>
      <TodoItem text="Die"/>
      <Button />
    </div>
  );
}

export default App;