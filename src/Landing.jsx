import React, { useState } from 'react';

function Landing() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { work: todo }]);
      setTodo('');
    }
  };

  return (
    <div className='overflow-x-hidden'>
      <div className='h-[35vh] w-screen pb-20 bg-purple-600 flex flex-col overflow-x-hidden '>
        <h1 className='h-10 w-full text-center py-10 font-medium  text-2xl'>
          This is My To Do List
        </h1>
        <div className='flex overflow-x-hidden align-middle justify-center'>
          <input
            className='w-[25%] overflow-x-hidden m-5 rounded-2xl text-center'
            value={todo}
            onChange={handleChange}
            type='text'
            placeholder='Type your Work'
          />
          <button
            type='button'
            onClick={handleAdd}
            className='h-10 w-20 m-5 overflow-x-hidden border-black  rounded-lg border-solid border-4 duration-150 hover:bg-purple-300 opacity-0.5'
          >
            ADD
          </button>
        </div>
      </div>
      <div className='w-screen h-[65vh]  place-items-center grid grid-cols-3 overflow-x-hidden bg-purple-600 border-opacity-0 gap-10 grid-rows-4'>
        {todos.map((item, index) => (
          <section
            key={index}
            className='bg-purple-300 mt-3 rounded-xl text-center h-[100px] flex overflow-x-hidden items-center justify-center w-[30vw]'
          >
            {item.work}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Landing;
