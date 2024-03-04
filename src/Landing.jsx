import React, { useState } from 'react'
import Works from './components/works.jsx'

function Landing() {
  const [todo,setTodo]= useState("");
  const [todos,setTodos]= useState("");
  let val= document.querySelector("#input");

  const handlechange=()=>{
    val= document.querySelector("#input");
      setTodo(val.value)
  }

  const handleadd=()=>{
  let adder= document.querySelector("#add");
  setTodos(todo);
  console.log("glitech")
  setTodo("")
  }

  return (
    <>
    <div className='h-[30vh] pb-20 w-full bg-purple-600 flex flex-col overflow-hidden '>
       <h1 className='h-10 w-full text-center py-10 font-medium  text-2xl'>
        This is My To Do List
       </h1>
       <div className='flex align-middle justify-center'>
       <input className='w-[25%] m-5 rounded-2xl text-center' id='input' value={todo} onChange={handlechange} type="text"  placeholder='Type your Work' />
       <button id='add' type='submit' onClick={handleadd} className=" h-10 w-20 m-5 border-black  rounded-lg border-solid border-4 duration-150 hover:bg-purple-300 opacity-0.5">ADD</button>
     
     </div>
     <div id='shower' className=" w-[100%] h-[90%] grid grid-cols-3 grid-rows-10 gap-y-6 pt-8 gap-x-2">
    
     </div>

     </div>
    
     <Works todos={todos}/>
   
     </>

  )
}

  
export default Landing;


// getit.addEventListener("submit",()=>{
// let works= document.getElementsByTagName("input");
// console.log(works)
// let list = works.value;
// console.log(list)

// })
