import { connect } from "mongoose";
import Todo from "./models/Todo.model.js";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await connect("mongodb://127.0.0.1:27017/todo");
}

const data = [
  { todo: "Finish homework", isCompleted: false },
  { todo: "Go to the gym", isCompleted: true },
  { todo: "Read a book", isCompleted: false },
  { todo: "Buy groceries", isCompleted: false },
  { todo: "Attend a meeting", isCompleted: true },
  { todo: "Clean the house", isCompleted: false },
  { todo: "Call mom", isCompleted: false },
  { todo: "Write report", isCompleted: true },
];

const initDB = async () => {
  await Todo.deleteMany({});
  await Todo.insertMany(data);
  console.log("data was initialized");
};

initDB();
