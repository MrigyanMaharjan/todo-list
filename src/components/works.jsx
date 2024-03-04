import React, { useState } from 'react'

const works = ({todos}) => {
  console.log(todos)
  let work= document.querySelector("#work");


  work= document.querySelector("#work");
  if(work!==null && todos!=""){
    console.log(work)
    let content=`
    <div id='work' className='h-[20vh] w-[30vw] bg-purple-200 grid grid-cols-3 grid-rows-4 place-items-center'>
      ${todos}
    </div>;`
    console.log(content)
    work.innerHTML+=content;
  }

  return (
  <div id='work' className='h-[80vh] w-full bg-purple-700 grid grid-cols-3 grid-rows-4 place-items-center'>

  </div>  )
}

export default works
