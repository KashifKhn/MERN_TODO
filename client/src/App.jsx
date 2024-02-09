import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [allTask, setAllTask] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/todo")
      .then((res) => setAllTask(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="w-100 h-screen flex flex-col items-center ">
      <div className="max-w-[50%] sm:max-w-100 w-100 py-10">
        <h1 className="text-blue-600 text-center pb-10">Todo MERN APP</h1>
        <AddTask setAllTask={setAllTask} />
        <TaskList allTask={allTask} setAllTask={setAllTask} />
      </div>
    </Container>
  );
};

export default App;
