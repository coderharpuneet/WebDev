import React, { useState } from 'react'
import Card from '../components/Card'

const Tasks = ({tasks,setTasks}) => {
  // const [task, setTask] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [detail, setDetail] = useState("");
  let addNewTask=(e)=>{
    e.preventDefault();
    console.log("hello")
    
    let newTask={
      date:new Date().toISOString().slice(0,10),
      taskName: taskName,
      detail: detail
      
    }
    console.log(newTask);
    setTasks([...tasks,newTask]);
    setTaskName("");
    setDetail("");
  }
  return (
    <div className='flex flex-col align-center gap-20'>
      <div>
        <h2 className='text-[34px] text-center m-5'>Add Task</h2>
        <form className='flex align-center justify-center gap-30' onSubmit={addNewTask}>
          <div className='flex align-center justify-between gap-30'>
            <input className='border-2'
          onChange={(e)=>{
            setTaskName(e.target.value)
          }}
          value={taskName}
          type="text" placeholder='Task Name' />
          <textarea className='border-2' placeholder='Enter Details'
          onChange={(e)=>setDetail(e.target.value)}
          value={detail}
          ></textarea>
          </div>
          
          <button className='bg-black text-white cursor-pointer rounded-xl w-30' >Add Task</button>
        </form>

      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-8 justify-center mx-auto'>
      {
            tasks.map((task)=>{
                return <Card task={task}  />
            })
      }
      </div>

    </div>
  )
}

export default Tasks