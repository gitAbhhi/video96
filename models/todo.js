import mongoose from "mongoose";
import { type } from "os";

const todoschyma=new mongoose.Schema({
    Name:{type:String,required:true,default:"Aditya bhai"},
    rollno:Number,
    mood:Boolean
});

export const Todo=mongoose.model('Todo',todoschyma);