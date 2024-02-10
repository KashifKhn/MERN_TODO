/* eslint-disable react/prop-types */
import TaskCard from "./TaskCard";
import axios from "axios";

const TaskList = ({ allTask, setAllTask }) => {
  const handleDelete = (id) => {
    const filterTask = allTask.filter((task) => task._id !== id);
    axios
      .delete(`http://localhost:3000/todo/${id}`)
      .catch((err) => console.log(err));
    setAllTask(filterTask);
  };

  const handleCompleted = (id) => {
    const completeTask = allTask.map((task) =>
      task._id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    const task = allTask.find((task) => task._id === id);
    axios
      .patch(`http://localhost:3000/todo/update/${id}`, {
        isCompleted: !task.isCompleted,
      })
      .catch((err) => console.log(err));
    setAllTask(completeTask);
  };

  const handelEdit = (id, newText) => {
    const updatedTask = allTask.map((task) =>
      task._id === id ? { ...task, todo: newText } : task
    );

    axios
      .patch(`http://localhost:3000/todo/update/${id}`, {
        todo: newText,
      })
      .catch((err) => console.log(err));
    setAllTask(updatedTask);
  };

  return (
    <div>
      {allTask.length <= 0 && <h1 className="text-center">No todo</h1>}
      {allTask.map((task) => (
        <TaskCard
          key={task._id}
          id={task._id}
          todo={task.todo}
          isCompleted={task.isCompleted}
          handleDelete={handleDelete}
          handleCompleted={handleCompleted}
          handleEdit={handelEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
