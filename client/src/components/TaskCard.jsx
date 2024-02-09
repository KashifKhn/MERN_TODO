import { useEffect, useRef, useState } from "react";

/* eslint-disable react/prop-types */
const TaskCard = ({
  id,
  todo,
  isCompleted,
  handleDelete,
  handleCompleted,
  handleEdit,
}) => {
  const [newTodo, setNewTodo] = useState(todo);
  const [isEditable, setIsEditable] = useState(false);
  const inputRef = useRef(null);

  const handleUpdate = () => {
    if (isCompleted) return;
    if (isEditable) {
      handleEdit(id, newTodo);
      setIsEditable(false);
    } else setIsEditable(true);
  };

  useEffect(() => {
    if (isEditable) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [isEditable]);

  return (
    <div className="input-group mb-3">
      <div className="input-group-text">
        <input
          className="form-check-input mt-0"
          type="checkbox"
          aria-label="Checkbox for following text input"
          checked={isCompleted}
          onChange={() => handleCompleted(id)}
        />
      </div>
      <input
        type="text"
        readOnly={isEditable ? false : true}
        value={newTodo}
        ref={inputRef}
        onChange={(e) => setNewTodo(e.target.value)}
        className={`form-control ${isCompleted ? "line-through" : ""}`}
        aria-label="Text input with checkbox"
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={handleUpdate}
      >
        {isEditable ? "💾" : "✏️"}
      </button>
      <button
        className="btn btn-danger text-white"
        type="button"
        id="button-addon2"
        onClick={() => handleDelete(id)}
      >
        ✖️
      </button>
    </div>
  );
};

export default TaskCard;
