"use client";

import { useEffect, useState } from "react";
import api from "../services/api";

export default function TaskList() {

const [status,setStatus]=useState("");
const [tasks,setTasks]=useState([]);
const [editingId,setEditingId]=useState("");
const [editTitle,setEditTitle]=useState("");
const [editDescription,setEditDescription]=useState("");
const loadTasks = async()=>{

try{

const res=
await api.get(
`/tasks?status=${status}`
);

setTasks(
res.data
);

}

catch{

alert(
"Unable to load tasks"
);

}

};

useEffect(()=>{

loadTasks();

},[status]);

const deleteTask=
async(id:string)=>{

const confirmDelete=
window.confirm(
"Delete this task?"
);

if(!confirmDelete)
return;

await api.delete(
`/tasks/${id}`
);

loadTasks();

};

const completeTask=
async(id:string)=>{

await api.patch(
`/tasks/${id}/mark-complete`
);

alert(
"Task marked completed"
);

loadTasks();

};
const startEdit=(task:any)=>{

setEditingId(task._id);

setEditTitle(task.title);

setEditDescription(task.description);

};

const saveEdit=
async(id:string)=>{

if(editDescription.length<20){

alert(
"Description should contain at least 20 characters"
);

return;

}

await api.put(

`/tasks/${id}`,

{
title:editTitle,
description:editDescription
}

);

setEditingId("");

loadTasks();

};
if(tasks.length===0){

const startEdit=(task:any)=>{

setEditingId(
task._id
);

setEditTitle(
task.title
);

setEditDescription(
task.description
);

};

const saveEdit=
async(id:string)=>{

if(
editDescription.length
<
20
){

alert(
"Description should contain at least 20 characters"
);

return;

}

await api.put(

`/tasks/${id}`,

{

title:
editTitle,

description:
editDescription

}

);

setEditingId("");

loadTasks();

};

return(

<div className="mt-10">

<select
value={status}
onChange={(e)=>
setStatus(
e.target.value
)
}
className="border rounded p-2 mb-4 text-black"
>

<option value="">
All
</option>

<option value="Pending">
Pending
</option>

<option value="Completed">
Completed
</option>

</select>

<p className="text-gray-500">

No tasks yet.
Create your first task.

</p>

</div>

);

}

return(

<div className="mt-10">

<select

value={status}

onChange={(e)=>
setStatus(
e.target.value
)
}

className="
border
rounded-lg
p-2
mb-5
text-black
"

>

<option value="">
All
</option>

<option value="Pending">
Pending
</option>

<option value="Completed">
Completed
</option>

</select>

<h2
className="
text-2xl
font-bold
mb-5
text-black
"
>

Tasks

</h2>

{

tasks.map(
(task:any)=>(

<div

key={task._id}

className="
bg-white
rounded-xl
p-5
mb-5
shadow
"

>

{

editingId===task._id

?

<input

value={editTitle}

onChange={(e)=>
setEditTitle(
e.target.value
)
}

className="
border
rounded
p-2
w-full
text-black
"

/>

:

<h3
className="
text-2xl
font-bold
text-black
"
>

{task.title}

</h3>

}

{

editingId===task._id

?

<textarea

value={editDescription}

onChange={(e)=>
setEditDescription(
e.target.value
)
}

className="
border
rounded
p-2
w-full
mt-3
text-black
"

/>

:

<p
className="
text-gray-700
mt-2
"
>

{task.description}

</p>

}

<p
className="
text-gray-500
mt-3
text-sm
"
>

Due:
{" "}

{

new Date(
task.dueDate
)

.toLocaleDateString()

}

</p>

<div className="mt-4">

<span

className={

task.priority==="High"

?

"bg-red-100 text-red-700 px-3 py-1 rounded"

:

task.priority==="Medium"

?

"bg-yellow-100 text-yellow-700 px-3 py-1 rounded"

:

"bg-green-100 text-green-700 px-3 py-1 rounded"

}

>

{task.priority}

</span>

</div>

<p
className="
mt-4
text-black
"
>

Status:

<span

className={

task.status==="Completed"

?

"ml-2 text-green-600 font-semibold"

:

"ml-2 text-orange-500"

}

>

{task.status}

</span>

</p>

<div className="mt-5">

{

editingId===task._id

?

<button

onClick={()=>
saveEdit(
task._id
)
}

className="
bg-blue-600
text-white
px-4
py-2
rounded
"

>

Save

</button>

:

<button

onClick={()=>
startEdit(
task
)
}

className="
bg-gray-700
text-white
px-4
py-2
rounded
"

>

Edit

</button>

}

<button

onClick={()=>
deleteTask(
task._id
)
}

className="
bg-red-500
hover:bg-red-600
text-white
px-4
py-2
rounded
ml-2
"

>

Delete

</button>

<button

onClick={()=>
completeTask(
task._id
)
}

disabled={
task.status==="Completed"
}

className="
bg-green-600
hover:bg-green-700
text-white
px-4
py-2
rounded
ml-2
disabled:opacity-50
"

>

Complete

</button>

</div>

</div>

)

)

}

</div>

);

}