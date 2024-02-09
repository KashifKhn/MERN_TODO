import express, { urlencoded, json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import Todo from "./models/Todo.model.js";
const app = express();
const PORT = 3000;

main()
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

async function main() {
  await connect("mongodb://127.0.0.1:27017/todo");
}

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/todo", async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json(todo);
  } catch (err) {
    console.log(err);
  }
});

app.post("/todo", async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.send("Todo added");
});

app.patch("/todo/complete/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndUpdate(id, req.body, { new: true });
  res.send("todo toggle");
});

app.patch("/todo/update/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  console.log(task);
  res.send("todo Updated");
});

app.delete("/todo/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.send("Todo Deleted");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
