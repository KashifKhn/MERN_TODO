import express from "express";
const router = express.Router();
import Todo from "../models/Todo.model.js";

router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json(todo);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  const allTodo = await Todo.find();
  res.json(allTodo);
});

router.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  res.send("todo Updated");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.send("Todo Deleted");
});

export default router;
