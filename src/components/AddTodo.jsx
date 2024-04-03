import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { FaPencil } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { addLocal, getLocal } from "./util";
const AddTodo = ({ todo, todos, setTodos }) => {
  //   console.log(todo);
  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [isDecorate, setIsDecorate] = useState(false);

  const handleSave = () => {
    todo.text = editedText;
    const newTodo = {
      id: todo.id,
      text: editedText,
      date: todo.date,
    };
    addLocal("todo", [...todos, newTodo]);
    // setTodos([...todos, newTodo]);
    setIsEdit(!isEdit);
  };

  const removeTodo = (id) => {
    const newTodos = todos?.filter((item) => item.id !== id);
    setTodos(newTodos);
    addLocal("todo", newTodos);
  };

  const handleDecoration = () => {
    setIsDecorate(!isDecorate);
  };
  return (
    <div className="card p-2 card-div">
      {isEdit ? (
        <div className="buttons-edit">
          <input
            type="search"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="edit-input"
          />
          <button className="kaydet-iptal" onClick={handleSave}>
            Save
          </button>
          <button className="kaydet-iptal" onClick={handleSave}>
            Cancel
          </button>
        </div>
      ) : (
        <div className="buttons">
          <div className="tarih-task">
            <span className="bg-warning m-1 p-1">
              {new Date(todo.date).toLocaleDateString()}
            </span>
            {!isDecorate ? (
              <span
                type="button"
                className="px-2"
                onDoubleClick={handleDecoration}
              >
                {todo.text}
              </span>
            ) : (
              <>
                <span
                  className={
                    isDecorate ? "text-decoration-line-through me-2" : "me-2"
                  }
                  type="button"
                  onDoubleClick={handleDecoration}
                >
                  {todo.text}
                </span>
                <span className="me-2">
                  {new Date().toLocaleTimeString()}{" "}
                  <span className="text-success">
                    <FaCheck />
                  </span>
                </span>
              </>
            )}
          </div>
          <div className="kalem-x">
            <FaPencil
              className="me-1 fs-5 text-primary"
              type="button"
              onClick={() => setIsEdit(!isEdit)}
            />
            <RxCrossCircled
              className="fs-4 text-danger"
              type="button"
              onClick={() => removeTodo(todo.id)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default AddTodo;
