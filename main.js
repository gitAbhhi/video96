import mongoose from "mongoose";
import express from "express";
import {Todo} from "./models/todo.js";

let connection=await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todos=new Todo({rollno:127,mood:true})
    todos.save();
  res.send('Hello World!')
})

app.get('/a',async (req, res) => {
  let todo=await Todo.findOne({})
  console.log(todo)
  res.json({Name:todo.Name,rollno:todo.rollno})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})