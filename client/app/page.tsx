import TaskForm
from "../components/TaskForm";

import TaskList
from "../components/TaskList";

export default function Home(){

return(

<main
className="
min-h-screen
bg-gray-100
py-10
"
>

<div
className="
max-w-2xl
mx-auto
bg-white
rounded-xl
shadow
p-8
"
>

<h1
className="
text-4xl
font-bold
text-gray-800
"
>

Task Tracker

</h1>

<p
className="
text-gray-500
mt-2
mb-8
"
>

Manage and track daily tasks

</p>

<TaskForm/>

<TaskList/>

</div>

</main>

);

}