"use client";

import { useState } from "react";
import api from "../services/api";

export default function TaskForm() {

const [form,setForm]=useState({

title:"",
description:"",
priority:"Medium",
dueDate:""

});

const handleChange=(e:any)=>{

setForm({

...form,

[e.target.name]:
e.target.value

});

};

const handleSubmit=
async(e:any)=>{

e.preventDefault();

try{
if(
form.description
.length
<
20
){

alert(
"Description should contain at least 20 characters"
);

return;

}
await api.post(
"/tasks",
form
);

alert(
"Task created successfully"
)

setForm({

title:"",
description:"",
priority:"Medium",
dueDate:""

});

}

catch(error:any){

alert(
error
?.response
?.data
?.message

||

"Unable to create task"

);

}

};

return(

<form
onSubmit={
handleSubmit
}

className=
"space-y-4 mt-8"

>

<input
name="title"
placeholder="Title"
value={form.title}
onChange={handleChange}
className="w-full
border
rounded-lg
p-3
mt-1 
text-black"
required/>

<textarea
name="description"
placeholder="Description"
value={form.description}
onChange={handleChange}
className="w-full
border
rounded-lg
p-3
mt-1 
text-black"
required/>

<select
name="priority"
value={form.priority}
onChange={handleChange}
className="w-full
border
rounded-lg
p-3
mt-1 
text-black"
>

<option>
High
</option>

<option>
Medium
</option>

<option>
Low
</option>

</select>

<input
type="date"
name="dueDate"
value={form.dueDate}
onChange={handleChange}
className="w-full
border
rounded-lg
p-3
mt-1
text-black"
required/>

<button
className=
"bg-black text-white px-5 py-2 rounded"
>

Add Task

</button>

</form>

);

}