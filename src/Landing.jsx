import React, { useState } from 'react'
import Works from './components/works.jsx'

function Landing() {
  return (
    <>
    <div className=' min-h-[100%] pb-20 w-full bg-slate-500 flex flex-col overflow-x-hidden   '>
       <h1 className='h-10 w-full text-center py-10 font-medium  text-2xl'>
        This is My To Do List
       </h1>
       <div className='flex align-middle justify-center'>
       <input className='w-[25%] m-5 rounded-2xl text-center' type="text"  placeholder='Type your Work' />
       <button className=" h-10 w-20 m-5 border-black  rounded-lg border-solid border-4 hover:bg-slate-300 opacity-0.5">ADD</button>
     
     </div>
     <div id='shower' className=" w-[100%] h-[90%] grid grid-cols-3 grid-rows-10 gap-y-6 pt-8 gap-x-2">
     <p className='flex align-middle justify-center w-screen text-xl'>You have no work pending</p>
     </div>
     </div>
     
    {/* <Works/> */}
     </>

  )
}
console.log("hello");
  
export default Landing;


// getit.addEventListener("submit",()=>{
// let works= document.getElementsByTagName("input");
// console.log(works)
// let list = works.value;
// console.log(list)

// })