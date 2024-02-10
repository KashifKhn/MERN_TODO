/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const AddTask = (props) => {
  const [todoText, setTodoText] = useState("");
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim().length <= 0) {
      setTodoText("");
      return;
    }
    axios
      .post("http://localhost:3000/todo", {
        todo: todoText,
        isCompleted: false,
      })
      .then((res) => props.setAllTask(res.data))
      .catch((err) => console.log(err));
    setTodoText("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3 w-100">
        <input
          type="text"
          className="form-control"
          placeholder="Your Task"
          ref={inputRef}
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-primary" type="submit" id="button-addon2">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
