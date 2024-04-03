import React from "react";
import TodoList from "./TodoList";

const Header = () => {
  return (
    <div>
      <h1 className="text-primary text-center bg-danger-subtle p-2">To-Do Application</h1>
      <TodoList />
    </div>
  );
};

export default Header;
