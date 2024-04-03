import React, { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./AddTodo";
import { addLocal, getLocal } from "./util";


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState("");
  const now = new Date();
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes()
  );
  const minDate = today.toISOString().slice(0, 16);

  useEffect(() => {
    const savedTodos = getLocal("todo");
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const todoText = e.target.todo.value;
    const todoDate = e.target.date.value;
    const newTodo = {
      id: uuidv4(),
      text: todoText.trim(),
      date: todoDate,
    };
    setTodos([...todos, newTodo]);
    addLocal("todo", [...todos, newTodo]);
    e.target.reset();
    setDate("");
  };

  return (
    <div>
      <div className="main-div">
        <form onSubmit={handleFormSubmit} className="d-flex flex-column">
          <label htmlFor="todo">Task</label>
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter task..."
            required
          />
          <br />
          <label htmlFor="date">Date</label>
          <input
            type="datetime-local"
            name="date"
            id="date"
            min={minDate}
            required
          />
          <br />
          <button type="submit" className="btn btn-primary m-auto">
            Add
          </button>
        </form>
      </div>
      <div>
        {todos.map((todo) => (
          <AddTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
