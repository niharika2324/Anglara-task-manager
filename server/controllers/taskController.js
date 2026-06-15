import Task from "../models/Task.js";

export const createTask = async(req,res)=>{

try{

const task = await Task.create(req.body);

res.status(201).json(task);

}

catch(error){

res.status(500).json({
message:error.message
});

}

};

export const getTasks = async(req,res)=>{

try{

const filters={};

if(req.query.priority){

filters.priority=
req.query.priority;

}

if(req.query.status){

filters.status=
req.query.status;

}

const tasks=
await Task.find(filters)
.sort({
createdAt:-1
});

res.status(200)
.json(tasks);

}

catch(error){

res.status(500)
.json({
message:error.message
});

}

};

export const deleteTask = async(req,res)=>{

try{

const task = await Task.findByIdAndDelete(
req.params.id
);

if(!task){

return res.status(404).json({
message:"Task not found"
});

}

res.status(200).json({
message:"Task deleted"
});

}

catch(error){

res.status(500).json({
message:error.message
});

}

};

export const updateTask = async(req,res)=>{

try{

const task = await Task.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true,
runValidators:true
}

);

if(!task){

return res.status(404).json({
message:"Task not found"
});

}

res.status(200).json(task);

}

catch(error){

res.status(500).json({
message:error.message
});

}

};

export const markComplete = async(req,res)=>{

try{

const task =
await Task.findById(
req.params.id
);

if(!task){

return res.status(404).json({
message:"Task not found"
});

}

if(!task.dueDate){

return res.status(400).json({
message:
"Due date required before completion"
});

}

if(task.description.length<20){

return res.status(400).json({
message:
"Description must contain at least 20 characters"
});

}

task.status="Completed";

await task.save();

res.status(200).json(task);

}

catch(error){

res.status(500).json({
message:error.message
});

}

};