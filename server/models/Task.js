import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
{
 title:{
  type:String,
  required:true
 },

 description:{
  type:String,
  required:true,
  minlength:20
 },

 priority:{
  type:String,
  enum:["High","Medium","Low"],
  required:true
 },

 dueDate:{
  type:Date,
  required:true
 },

 status:{
  type:String,
  enum:["Pending","Completed"],
  default:"Pending"
 }

},
{
 timestamps:true
}
);

export default mongoose.model("Task", taskSchema);