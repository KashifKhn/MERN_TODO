import express, { urlencoded, json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import todoRouter from "./routers/todo.js";
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

app.use("/todo", todoRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
