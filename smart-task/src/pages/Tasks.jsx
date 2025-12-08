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
    <div>
      <div>
        <h2>Add Task</h2>
        <form  onSubmit={addNewTask}>
          <input
          onChange={(e)=>{
            setTaskName(e.target.value)
          }}
          type="text" placeholder='' />
          <textarea placeholder='Enter Details'
          onChange={(e)=>setDetail(e.target.value)}
          ></textarea>
          <button className='bg-black text-white cursor-pointer' >Add Task</button>
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