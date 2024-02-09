/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

const AddTask = (props) => {
  const [todoText, setTodoText] = useState("");
  const handleOnClick = () => {
    if (todoText.trim().length <= 0) {
      setTodoText("");
      return;
    }
    axios
      .post("http://localhost:3000/todo", {
        todo: todoText,
        isCompleted: false,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3000/todo")
      .then((res) => props.setAllTask(res.data))
      .catch((err) => console.log(err));
    setTodoText("");
  };
  return (
    <div className="input-group mb-3 w-100">
      <input
        type="text"
        className="form-control"
        placeholder="Your Task"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={handleOnClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
